import { Container } from "@/components/ui/Container";
import { translations } from "@/content/translations";
import { person } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import styles from "./Footer.module.css";

export function Footer({ lang }: { lang: Locale }) {
  const t = translations[lang];
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p>
          © {year} {person.name}
        </p>
        <p>{t.footerLocation}</p>
      </Container>
    </footer>
  );
}
