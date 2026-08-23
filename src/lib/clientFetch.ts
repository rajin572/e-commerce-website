"use client";

/**
 * Browser-side API access, for the things a Server Component cannot do:
 * live search, filters that must not trigger a navigation, infinite scroll,
 * and anything reacting to a socket event.
 *
 * Prefer a Server Component with `apiGet` (`src/lib/serverFetch.ts`) for any
 * data that can be rendered on the server — Next's fetch cache and tags only
 * work there. In the browser the `cache` option is just the HTTP cache.
 */

import Cookies from "js-cookie";
import { getBaseUrl } from "@/helpers/config/envConfig";
import type { IApiResponse } from "@/types";

/** Same cookie the server reads in `src/lib/getAuthToken.tsx`. */
export const ACCESS_TOKEN_COOKIE = "eCommerce_access_token";

export const getClientToken = () => Cookies.get(ACCESS_TOKEN_COOKIE);

export interface ClientFetchOptions extends Omit<RequestInit, "body"> {
  /** Serialised to JSON unless it is already a FormData/string body. */
  body?: unknown;
  /** Attach the access token. Defaults to true; harmless when signed out. */
  auth?: boolean;
}

/**
 * Fetch a JSON envelope from the API.
 *
 * Resolves with the parsed envelope for any HTTP status so callers can branch
 * on `success`; only a transport failure rejects.
 */
export async function clientFetch<T>(
  path: string,
  options: ClientFetchOptions = {}
): Promise<IApiResponse<T | null>> {
  const { body, auth = true, headers, ...rest } = options;

  const token = auth ? getClientToken() : undefined;
  const isFormData = typeof FormData !== "undefined" && body instanceof FormData;

  const res = await fetch(`${getBaseUrl()}${path}`, {
    ...rest,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    ...(body !== undefined
      ? { body: isFormData ? (body as FormData) : JSON.stringify(body) }
      : {}),
  });

  try {
    return (await res.json()) as IApiResponse<T>;
  } catch {
    return {
      statusCode: res.status,
      success: false,
      message: "The server returned an unreadable response.",
      data: null,
    };
  }
}
