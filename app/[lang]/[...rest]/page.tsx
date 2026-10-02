import { notFound } from "next/navigation";

/**
 * Catch-all for any unknown path under a locale (e.g. /sv/does-not-exist).
 * Without it, Next renders its built-in 404 outside our layout; calling
 * notFound() here renders app/[lang]/not-found.tsx inside the site layout
 * instead, with header, footer and a way back.
 */
export default function CatchAllPage() {
  notFound();
}
