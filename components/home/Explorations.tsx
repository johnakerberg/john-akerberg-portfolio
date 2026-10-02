import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { explorations } from "@/content/projects";
import { imageRegistry } from "@/content/image-registry";
import { translations } from "@/content/translations";
import type { Locale } from "@/lib/i18n";
import styles from "./Explorations.module.css";

export function Explorations({ lang }: { lang: Locale }) {
  const t = translations[lang];

  return (
    <section className={styles.section} aria-labelledby="explorations-heading">
      <Container>
        <h2 id="explorations-heading" className={styles.heading}>
          {t.explorationsHeading}
        </h2>
        <ul className={styles.grid}>
          {explorations.map((item) => {
            const image = imageRegistry[item.imageKey];
            return (
              <li key={item.slug} className={styles.item}>
                <ImageSlot
                  src={image.src}
                  alt={image.alt[lang]}
                  aspectRatio={image.ratio}
                  placeholderMeta={false}
                />
                <p className={styles.previewLabel}>{t.explorationsComingSoon}</p>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                {item.descriptor ? (
                  <p className={styles.itemDescriptor}>{item.descriptor[lang]}</p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
