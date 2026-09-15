"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { translations } from "@/content/translations";
import { localePath } from "@/lib/paths";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import styles from "./not-found.module.css";

export default function NotFound() {
  const params = useParams<{ lang?: string }>();
  const rawLang = params?.lang;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const t = translations[lang];

  return (
    <Container className={styles.wrap}>
      <p className={styles.code}>{t.notFoundTitle}</p>
      <p className={styles.message}>{t.notFoundBody}</p>
      <Link href={`${localePath(lang, "/")}#work`} className={styles.link}>
        {t.notFoundLink} <span aria-hidden="true">→</span>
      </Link>
    </Container>
  );
}
