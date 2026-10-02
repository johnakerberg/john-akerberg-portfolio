import { Container } from "@/components/ui/Container";
import { ContactEmail } from "./ContactEmail";
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

        <ContactEmail
          email={contact.email}
          ctaLabel={t.contactCta}
          promptText={t.contactPrompt}
          openMailLabel={t.contactOpenMail}
          copyLabel={t.contactCopyEmail}
          copiedLabel={t.contactCopied}
          closeLabel={t.contactClose}
        />

        <ul className={styles.links}>
          <li>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              {t.contactLinkedInLabel} <span aria-hidden="true">↗</span>
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
