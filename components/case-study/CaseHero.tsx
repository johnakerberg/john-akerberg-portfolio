import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { imageRegistry } from "@/content/image-registry";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@/content/projects";
import styles from "./CaseHero.module.css";

export function CaseHero({ project, lang }: { project: Project; lang: Locale }) {
  const image = imageRegistry[project.heroImageKey];

  return (
    <section className={styles.hero} aria-labelledby="case-title">
      <Container>
        <p className={styles.label}>{project.title}</p>
        <h1 id="case-title" className={styles.heading}>
          {project.descriptor[lang]}
        </h1>
        <div className={styles.imageWrap}>
          <ImageSlot
            src={image.src}
            alt={image.alt[lang]}
            label={project.heroImageKey}
            aspectRatio={image.ratio}
            priority
            sizes="100vw"
          />
        </div>
      </Container>
    </section>
  );
}
