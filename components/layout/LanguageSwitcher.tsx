"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { swapLocaleInPath } from "@/lib/paths";
import { translations } from "@/content/translations";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname() || `/${lang}`;
  const t = translations[lang];

  const options = [
    { code: "sv" as const, short: "SV", label: t.langSwitchToSv },
    { code: "en" as const, short: "EN", label: t.langSwitchToEn },
  ];

  return (
    <div className={styles.switcher} role="group" aria-label={t.langGroupLabel}>
      <span
        aria-hidden="true"
        className={styles.indicator}
        style={{ transform: lang === "en" ? "translateX(100%)" : undefined }}
      />
      {options.map((option) => (
        <Link
          key={option.code}
          href={swapLocaleInPath(pathname, option.code)}
          hrefLang={option.code}
          aria-current={lang === option.code ? "true" : undefined}
          className={`${styles.option} ${lang === option.code ? styles.active : ""}`}
        >
          {option.short}
          {/* Visible text first in the accessible name (WCAG 2.5.3) */}
          <span className="sr-only">, {option.label}</span>
        </Link>
      ))}
    </div>
  );
}
