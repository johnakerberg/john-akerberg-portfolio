"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { useActiveNav, type NavKey } from "./useActiveNav";
import styles from "./DesktopNav.module.css";

export type NavItem = { key: NavKey; href: string; label: string };

type Indicator = { left: number; width: number; visible: boolean };

/**
 * Desktop navigation with a "liquid glass" pill that marks the current
 * page/section and glides to whichever item is hovered or focused.
 */
export function DesktopNav({ items, label }: { items: NavItem[]; label: string }) {
  const active = useActiveNav();
  const [hovered, setHovered] = useState<NavKey | null>(null);
  const [indicator, setIndicator] = useState<Indicator>({ left: 0, width: 0, visible: false });
  const linkRefs = useRef<Partial<Record<NavKey, HTMLAnchorElement | null>>>({});

  const target = hovered ?? active;

  useLayoutEffect(() => {
    function measure() {
      const el = target ? linkRefs.current[target] : null;
      setIndicator((prev) =>
        el
          ? { left: el.offsetLeft, width: el.offsetWidth, visible: true }
          : { ...prev, visible: false }
      );
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [target]);

  return (
    <nav aria-label={label} className={styles.nav}>
      <ul className={styles.list} onMouseLeave={() => setHovered(null)}>
        <li
          aria-hidden="true"
          className={`${styles.indicator} ${indicator.visible ? styles.indicatorVisible : ""}`}
          style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
        />
        {items.map((item) => (
          <li key={item.key}>
            <Link
              href={item.href}
              ref={(el) => {
                linkRefs.current[item.key] = el;
              }}
              aria-current={active === item.key ? currentType(item.key) : undefined}
              className={`${styles.link} ${active === item.key ? styles.active : ""}`}
              onMouseEnter={() => setHovered(item.key)}
              onFocus={() => setHovered(item.key)}
              onBlur={() => setHovered(null)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Routes are pages; on the homepage, work/contact are sections of one page. */
function currentType(key: NavKey): "page" | "location" {
  return key === "work" || key === "contact" ? "location" : "page";
}
