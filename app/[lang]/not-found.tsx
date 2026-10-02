"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { translations } from "@/content/translations";
import { localePath } from "@/lib/paths";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n";
import styles from "./not-found.module.css";

export default function NotFound() {
  const params = useParams<{ lang?: string }>();
  const rawLang = params?.lang;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const t = translations[lang];
  const home = localePath(lang, "/");

  return (
    <Container className={styles.wrap}>
      <p className={styles.code}>{t.notFoundTitle}</p>
      <h1 className={styles.message}>{t.notFoundBody}</h1>
      <p className={styles.help}>{t.notFoundHelp}</p>
      <div className={styles.actions}>
        <Link href={home} className={styles.primary}>
          {t.notFoundHome}
        </Link>
        <ArrowLink href={`${home}#work`}>{t.notFoundLink}</ArrowLink>
      </div>
    </Container>
  );
}
