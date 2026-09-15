import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { imageRegistry } from "@/content/image-registry";
import { translations } from "@/content/translations";
import { localePath } from "@/lib/paths";
import type { Locale } from "@/lib/i18n";
import styles from "./Hero.module.css";

export function Hero({ lang }: { lang: Locale }) {
  const t = translations[lang];
  const portrait = imageRegistry.PORTRAIT_01;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{t.heroEyebrow}</p>
          <h1 id="hero-heading" className={styles.heading}>
            {t.heroHeading}
          </h1>
          <p className={styles.body}>{t.heroBody}</p>
          <ArrowLink href={`${localePath(lang, "/")}#work`}>{t.heroCta}</ArrowLink>
        </div>

        <div className={styles.portrait}>
          <ImageSlot
            src={portrait.src}
            alt={portrait.alt[lang]}
            label="PORTRAIT_01"
            aspectRatio={portrait.ratio}
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
