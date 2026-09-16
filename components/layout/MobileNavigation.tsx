"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/content/translations";
import { localePath } from "@/lib/paths";
import styles from "./MobileNavigation.module.css";

type NavItem = { href: string; label: string };

export function MobileNavigation({ lang, navItems }: { lang: Locale; navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
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
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={localePath(lang, "/cv")} onClick={() => setOpen(false)}>
                {t.navCV}
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
