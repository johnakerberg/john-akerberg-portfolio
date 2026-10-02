import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { DesktopNav, type NavItem } from "./DesktopNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNavigation } from "./MobileNavigation";
import { localePath } from "@/lib/paths";
import { translations } from "@/content/translations";
import type { Locale } from "@/lib/i18n";
import styles from "./Header.module.css";

export function Header({ lang }: { lang: Locale }) {
  const t = translations[lang];
  const home = localePath(lang, "/");

  const navItems: NavItem[] = [
    { key: "work", href: `${home}#work`, label: t.navWork },
    { key: "about", href: localePath(lang, "/about"), label: t.navAbout },
    { key: "contact", href: `${home}#contact`, label: t.navContact },
    { key: "cv", href: localePath(lang, "/cv"), label: t.navCV },
  ];

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href={home} className={styles.logo}>
          JOHN ÅKERBERG
        </Link>

        <DesktopNav items={navItems} label={t.mainNavLabel} />

        <div className={styles.controls}>
          <LanguageSwitcher lang={lang} />
          <MobileNavigation lang={lang} navItems={navItems} />
        </div>
      </Container>
    </header>
  );
}
