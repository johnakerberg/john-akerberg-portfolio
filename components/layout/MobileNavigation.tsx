"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/content/translations";
import type { NavItem } from "./DesktopNav";
import { useActiveNav } from "./useActiveNav";
import styles from "./MobileNavigation.module.css";

export function MobileNavigation({ lang, navItems }: { lang: Locale; navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const active = useActiveNav();
  const t = translations[lang];

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className={styles.wrapper}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? t.menuClose : t.menuOpen}
      </button>

      {open ? (
        <div id={menuId} className={styles.panel}>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  aria-current={active === item.key ? "true" : undefined}
                  className={`${styles.link} ${active === item.key ? styles.active : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
