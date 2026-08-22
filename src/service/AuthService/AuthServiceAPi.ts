"use server";

import { fetchWithAuth } from "@/lib/fetchWraper";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

const BASE_API = process.env.NEXT_PUBLIC_BASE_API;

// Secure cookies only in production — dev runs over http, where a Secure cookie
// would be rejected by the browser.
const isProduction = process.env.NODE_ENV === "production";

// Session cookies. Not httpOnly because client code reads the access token
// (TopBar, SocketProvider).
const sessionCookieOptions = (expires: Date) => ({
  path: "/",
  expires,
  secure: isProduction,
  sameSite: "lax" as const,
});

// Short-lived cookies that gate each step of the signup / reset chains. Nothing
// on the client reads these, so they are httpOnly.
const chainCookieOptions = (maxAge: number) => ({
  path: "/",
  maxAge,
  httpOnly: true,
  secure: isProduction,
  sameSite: "lax" as const,
});

const CHAIN_TTL = 60 * 15; // 15 minutes
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 30 * 3; // 3 months

type Req<T = Record<string, unknown>> = { body?: T; params?: Record<string, string> };

type ApiResult<T = unknown> =
  | { success: true; message: string; data?: T }
  | { success: false; message: string; data?: undefined };

/** POST JSON to the API and normalise transport failures into the envelope. */
const postJson = async <T>(path: string, body: unknown): Promise<ApiResult<T>> => {
  try {
    const res = await fetch(`${BASE_API}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body ?? {}),
      cache: "no-store",
    });
    return await res.json();
  } catch {
    return { success: false, message: "Could not reach the server. Please try again." };
  }
};

/* ------------------------------------------------------------------ signup */

/**
 * Step 1 — POST /auth/register sends the OTP. The backend does not persist the
 * pending account, so the details are held in an httpOnly cookie until step 2
 * rather than in sessionStorage where any script could read the password.
 */
export const registerUser = async (req: Req = {}) => {
  const { name, email, phone, password } = (req.body ?? {}) as Record<string, string>;

  const result = await postJson("/auth/register", {
    name,
    emailOrPhone: email,
    phone,
    password,
  });

  if (result?.success) {
    (await cookies()).set(
      "eCommerce_signup_token",
      JSON.stringify({ name, email, phone, password }),
      chainCookieOptions(CHAIN_TTL)
    );
  }

  return result;
};

/** Step 2 — POST /auth/verify-otp creates the account. */
export const verifySignupOtp = async (req: Req = {}) => {
  const { code } = (req.body ?? {}) as Record<string, string>;

  const pending = (await cookies()).get("eCommerce_signup_token")?.value;
  if (!pending) {
    return { success: false, message: "Your signup session expired. Please sign up again." };
  }

  const { name, email, phone, password } = JSON.parse(pending);

  const result = await postJson("/auth/verify-otp", {
    emailOrPhone: email,
    code,
    name,
    phone,
    password,
  });

  if (result?.success) {
    (await cookies()).delete("eCommerce_signup_token");
  }

  return result;
};

/** POST /auth/resend-otp — `type` is "signup" or "forgot". */
export const resendOtp = async (req: Req = {}) => {
  const { email, type } = (req.body ?? {}) as Record<string, string>;
  return postJson("/auth/resend-otp", { emailOrPhone: email, type: type ?? "signup" });
};

/* ------------------------------------------------------------------- login */

export const loginUser = async (req: Req = {}) => {
  const result = await postJson<{ accessToken: string; refreshToken?: string }>(
    "/auth/login",
    req.body
  );

  if (result?.success && result.data?.accessToken) {
    // Only customers (role === "user") may sign in on this app. Any other role
    // is rejected before any token is stored.
    let role: string | undefined;
    try {
      role = (jwtDecode(result.data.accessToken) as { role?: string })?.role;
    } catch {
      role = undefined;
    }

    if (role !== "user") {
      return { success: false, message: "Permission denied" };
    }

    const expires = new Date(Date.now() + SESSION_TTL_MS);
    const cookieStore = await cookies();

    cookieStore.set("eCommerce_access_token", result.data.accessToken, sessionCookieOptions(expires));

    // The backend currently returns the refresh token only as a Set-Cookie on
    // its own response, so this is usually absent. See the note in the audit.
    if (result.data.refreshToken) {
      cookieStore.set(
        "eCommerce_refresh_token",
        result.data.refreshToken,
        sessionCookieOptions(expires)
      );
    }
  }

  return result;
};

export const logoutUser = async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("eCommerce_refresh_token")?.value;

  const result = await fetchWithAuth("/auth/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  })
    .then((res) => res.json())
    .catch(() => ({ success: true, message: "Logged out" }));

  cookieStore.delete("eCommerce_access_token");
  cookieStore.delete("eCommerce_refresh_token");

  return result;
};

/* ---------------------------------------------------------- password reset */

/** Step 1 — POST /auth/forgot-password sends the reset OTP. */
export const forgetPassword = async (req: Req = {}) => {
  return postJson("/auth/forgot-password", req.body);
};

/**
 * Step 2 — POST /auth/verify-forgot-otp exchanges the OTP for a reset token,
 * which is held in an httpOnly cookie so the reset step never handles it
 * client-side.
 */
export const verifyForgotOtp = async (req: Req = {}) => {
  const result = await postJson<{ resetToken: string }>("/auth/verify-forgot-otp", req.body);

  if (result?.success && result.data?.resetToken) {
    (await cookies()).set(
      "eCommerce_forgot_otp_match_token",
      result.data.resetToken,
      chainCookieOptions(CHAIN_TTL)
    );
  }

  return result;
};

/** Step 3 — POST /auth/reset-password consumes the reset token. */
export const resetPassword = async (req: Req = {}) => {
  const { newPassword } = (req.body ?? {}) as Record<string, string>;

  const resetToken = (await cookies()).get("eCommerce_forgot_otp_match_token")?.value;
  if (!resetToken) {
    return { success: false, message: "Your reset session expired. Please start again." };
  }

  const result = await postJson("/auth/reset-password", { resetToken, newPassword });

  if (result?.success) {
    (await cookies()).delete("eCommerce_forgot_otp_match_token");
  }

  return result;
};

/* ------------------------------------------------------------ authenticated */

/** PATCH /auth/change-password */
export const changeUserPassword = async (req: Req = {}) => {
  try {
    const res = await fetchWithAuth("/auth/change-password", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body ?? {}),
    });
    return await res.json();
  } catch {
    return { success: false, message: "Could not reach the server. Please try again." };
  }
};

/** GET /auth/me — user, role and resolved permissions. */
export const getCurrentUser = async () => {
  try {
    const res = await fetchWithAuth("/auth/me", { method: "GET", cache: "no-store" });
    return await res.json();
  } catch {
    return { success: false, message: "Could not reach the server. Please try again." };
  }
};

/** POST /auth/refresh-token — rotates the access token. */
export const getNewToken = async () => {
  const refreshToken = (await cookies()).get("eCommerce_refresh_token")?.value;
  return postJson("/auth/refresh-token", { refreshToken });
};
