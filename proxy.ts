import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Locale routing.
 *
 * - "/" and any path with no locale prefix is redirected to the
 *   Swedish equivalent ("/sv", "/sv/about", ...), per brief section 5:
 *   "The root / should redirect to /sv unless an intentionally
 *   implemented locale preference system says otherwise." We do not
 *   implement Accept-Language sniffing — the default is always sv.
 * - Paths that already start with a known locale, Next internals,
 *   metadata routes, and files with an extension pass through untouched.
 */
const SUPPORTED_LOCALES = ["sv", "en"] as const;
const DEFAULT_LOCALE = "sv";

function pathHasLocale(pathname: string): boolean {
  return SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathHasLocale(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
