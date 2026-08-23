/**
 * Locale configuration. Safe to import from both Server and Client Components —
 * it holds no server-only APIs.
 *
 * Every route lives under `src/app/[locale]/`, so the locale is always in the
 * URL. That is what lets Google index both languages and lets us emit
 * `hreflang`; a cookie-only switch would leave one language invisible to search.
 */

export const LOCALES = ["bn", "en"] as const;

export type Locale = (typeof LOCALES)[number];

/** Bengali-first: the storefront's primary market. */
export const DEFAULT_LOCALE: Locale = "bn";

/** Remembers the visitor's choice so `/` redirects them correctly next time. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** Label shown in the language switcher, in the language itself. */
export const LOCALE_LABELS: Record<Locale, string> = {
  bn: "বাংলা",
  en: "English",
};

/** Open Graph locale tags. */
export const OG_LOCALES: Record<Locale, string> = {
  bn: "bn_BD",
  en: "en_US",
};

/** `Intl` tag for number, currency and date formatting. */
export const INTL_LOCALES: Record<Locale, string> = {
  bn: "bn-BD",
  en: "en-US",
};

export const isLocale = (value: unknown): value is Locale =>
  typeof value === "string" && (LOCALES as readonly string[]).includes(value);

/** Prefix a root-relative path with the locale, without doubling an existing one. */
export const localizePath = (path: string, locale: Locale) => {
  if (!path.startsWith("/")) return path;

  const [, first, ...rest] = path.split("/");
  if (isLocale(first)) return `/${locale}${rest.length ? `/${rest.join("/")}` : ""}`;

  return `/${locale}${path === "/" ? "" : path}`;
};
