import { Container } from "@/components/ui/Container";
import { translations } from "@/content/translations";
import { contact } from "@/content/site";
import { localePath } from "@/lib/paths";
import type { Locale } from "@/lib/i18n";
import styles from "./ContactCTA.module.css";

export function ContactCTA({ lang }: { lang: Locale }) {
  const t = translations[lang];

  return (
    <section id="contact" className={styles.section} data-on-dark aria-labelledby="contact-heading">
      <Container className={styles.inner}>
        <h2 id="contact-heading" className={styles.heading}>
          {t.contactHeading1}
          <br />
          {t.contactHeading2}
        </h2>

        <a href={`mailto:${contact.email}`} className={styles.cta}>
          {t.contactCta} <span aria-hidden="true">→</span>
        </a>

        <ul className={styles.links}>
          <li>
            <a href={`mailto:${contact.email}`}>{t.contactEmailLabel}</a>
          </li>
          <li>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              {t.contactLinkedInLabel}
            </a>
          </li>
          <li>
            <a href={localePath(lang, "/cv")}>{t.contactCVLabel}</a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
