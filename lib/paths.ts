import type { Locale } from "./i18n";
import { locales } from "./i18n";

/**
 * Build a locale-prefixed path.
 *
 * localePath("sv", "/about") -> "/sv/about"
 * localePath("en", "/")      -> "/en"
 */
export function localePath(lang: Locale, path: string = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `/${lang}`;
  return `/${lang}${normalized}`;
}

/**
 * Swap the locale segment of an existing pathname while preserving the
 * rest of the path, used by the language switcher so it lands on the
 * equivalent page rather than the target locale's homepage.
 *
 * swapLocaleInPath("/sv/work/tryon", "en") -> "/en/work/tryon"
 */
export function swapLocaleInPath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/");
  const currentSegment = segments[1];

  if (currentSegment && (locales as readonly string[]).includes(currentSegment)) {
    segments[1] = targetLocale;
    const rebuilt = segments.join("/");
    return rebuilt === "" ? `/${targetLocale}` : rebuilt;
  }

  return `/${targetLocale}`;
}
