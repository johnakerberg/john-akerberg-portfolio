import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNavigation } from "./MobileNavigation";
import { localePath } from "@/lib/paths";
import { translations } from "@/content/translations";
import type { Locale } from "@/lib/i18n";
import styles from "./Header.module.css";

export function Header({ lang }: { lang: Locale }) {
  const t = translations[lang];
  const home = localePath(lang, "/");

  const navItems = [
    { href: `${home}#work`, label: t.navWork },
    { href: localePath(lang, "/about"), label: t.navAbout },
    { href: `${home}#contact`, label: t.navContact },
  ];

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href={home} className={styles.logo}>
          JOHN ÅKERBERG
        </Link>

        <nav aria-label={t.mainNavLabel} className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href={localePath(lang, "/cv")} className={styles.cvLink}>
                {t.navCV}
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.controls}>
          <LanguageSwitcher lang={lang} />
          <MobileNavigation lang={lang} navItems={navItems} />
        </div>
      </Container>
    </header>
  );
}
