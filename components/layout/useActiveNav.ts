"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type NavKey = "work" | "about" | "contact" | "cv";

/**
 * Which main-nav item represents where the visitor is right now.
 *
 * - /about, /cv and /work/* map directly from the pathname.
 * - On the homepage, "work" and "contact" are sections, so we follow
 *   the scroll position: a section is active once its top passes the
 *   middle of the viewport. The hero has no nav item, so nothing is
 *   marked there.
 */
export function useActiveNav(): NavKey | null {
  const pathname = usePathname() ?? "";
  const rest = pathname.split("/").slice(2).join("/");
  const routeKey: NavKey | null =
    rest === "about" ? "about" : rest === "cv" ? "cv" : rest.startsWith("work/") ? "work" : null;
  const isHome = rest === "";

  const [sectionKey, setSectionKey] = useState<NavKey | null>(null);

  useEffect(() => {
    if (!isHome) return;

    const work = document.getElementById("work");
    const contact = document.getElementById("contact");

    function update() {
      const middle = window.innerHeight / 2;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (contact && (contact.getBoundingClientRect().top < middle || atBottom)) {
        setSectionKey("contact");
      } else if (work) {
        const rect = work.getBoundingClientRect();
        setSectionKey(rect.top < middle && rect.bottom > middle ? "work" : null);
      } else {
        setSectionKey(null);
      }
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  return isHome ? sectionKey : routeKey;
}
