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

  const svHref = swapLocaleInPath(pathname, "sv");
  const enHref = swapLocaleInPath(pathname, "en");

  return (
    <div className={styles.switcher} role="group" aria-label={t.langGroupLabel}>
      <Link
        href={svHref}
        hrefLang="sv"
        lang="sv"
        aria-label={t.langSwitchToSv}
        aria-current={lang === "sv" ? "true" : undefined}
        className={`${styles.flag} ${lang === "sv" ? styles.active : ""}`}
      >
        <span aria-hidden="true">🇸🇪</span>
        <span className="sr-only">{t.langNameSv}</span>
      </Link>
      <Link
        href={enHref}
        hrefLang="en"
        lang="en"
        aria-label={t.langSwitchToEn}
        aria-current={lang === "en" ? "true" : undefined}
        className={`${styles.flag} ${lang === "en" ? styles.active : ""}`}
      >
        <span aria-hidden="true">🇬🇧</span>
        <span className="sr-only">{t.langNameEn}</span>
      </Link>
    </div>
  );
}
