"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import {
  LOCALES,
  LOCALE_COOKIE,
  LOCALE_LABELS,
  localizePath,
  type Locale,
} from "@/i18n/config";
import { useCurrentLocale } from "./LocaleLink";

/**
 * Swaps the locale segment of the current URL, keeping the page and its query
 * string. The choice is stored in a cookie so a later visit to `/` lands in the
 * same language — the URL stays the source of truth for what is rendered.
 */
const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const current = useCurrentLocale();

  const switchTo = (locale: Locale) => {
    if (locale === current) return;

    // One year, root path — read by proxy.ts on locale-less requests.
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;

    // Read from `window` rather than `useSearchParams()`: this switcher sits in
    // the header of every page, and that hook opts each one out of static
    // rendering unless wrapped in Suspense. The query is only needed on click.
    const query = window.location.search;
    router.push(`${localizePath(pathname, locale)}${query}`);
    router.refresh();
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Globe size={14} className="text-text-secondary" aria-hidden="true" />
      {LOCALES.map((locale, index) => (
        <React.Fragment key={locale}>
          {index > 0 && <span className="text-text-muted text-xs">/</span>}
          <button
            onClick={() => switchTo(locale)}
            aria-current={locale === current ? "true" : undefined}
            className={`text-xs font-medium transition-colors ${
              locale === current
                ? "text-primary"
                : "text-text-secondary hover:text-primary"
            }`}
          >
            {LOCALE_LABELS[locale]}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
