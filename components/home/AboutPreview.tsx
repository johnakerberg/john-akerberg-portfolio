import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { translations } from "@/content/translations";
import { localePath } from "@/lib/paths";
import type { Locale } from "@/lib/i18n";
import styles from "./AboutPreview.module.css";

export function AboutPreview({ lang }: { lang: Locale }) {
  const t = translations[lang];

  return (
    <section className={styles.section} aria-labelledby="about-preview-heading">
      <Container className={styles.grid}>
        <h2 id="about-preview-heading" className={styles.heading}>
          {t.aboutPreviewHeading}
        </h2>
        <div className={styles.copy}>
          <p className={styles.body}>{t.aboutPreviewBody}</p>
          <ArrowLink href={localePath(lang, "/about")}>{t.aboutPreviewLink}</ArrowLink>
        </div>
      </Container>
    </section>
  );
}
