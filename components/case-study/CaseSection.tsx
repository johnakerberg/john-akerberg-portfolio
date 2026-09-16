import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { ImageGrid } from "./ImageGrid";
import { InsightBlock } from "./InsightBlock";
import { imageRegistry } from "@/content/image-registry";
import type { Locale } from "@/lib/i18n";
import type { CaseSectionContent } from "@/content/projects";
import styles from "./CaseSection.module.css";

export function CaseSection({ section, lang }: { section: CaseSectionContent; lang: Locale }) {
  const singleImage = section.imageKey ? imageRegistry[section.imageKey] : null;
  const headingId = `section-${section.id}`;
  const isPortrait = singleImage
    ? (() => {
        const [w, h] = singleImage.ratio.split("/").map(Number);
        return w < h;
      })()
    : false;

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <Container>
        <h2 id={headingId} className={styles.heading}>
          <span className={styles.number} aria-hidden="true">
            {section.numberLabel}
          </span>
          {section.heading[lang]}
        </h2>

        <div className={styles.content}>
          {section.body.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph[lang]}
            </p>
          ))}

          {section.insight ? <InsightBlock insight={section.insight} lang={lang} /> : null}
        </div>

        {section.imageGrid ? (
          <ImageGrid imageKeys={section.imageGrid} lang={lang} columns={section.imageGrid.length >= 3 ? 3 : 2} />
        ) : null}

        {!section.imageGrid && singleImage ? (
          <div className={styles.media} data-orientation={isPortrait ? "portrait" : "landscape"}>
            <ImageSlot
              src={singleImage.src}
              alt={singleImage.alt[lang]}
              label={section.imageKey}
              aspectRatio={singleImage.ratio}
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
