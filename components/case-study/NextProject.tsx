import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { imageRegistry } from "@/content/image-registry";
import { translations } from "@/content/translations";
import { localePath } from "@/lib/paths";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@/content/projects";
import styles from "./NextProject.module.css";

export function NextProject({ project, lang }: { project: Project; lang: Locale }) {
  const t = translations[lang];
  const image = imageRegistry[project.heroImageKey];
  const href = localePath(lang, `/work/${project.slug}`);

  return (
    <section className={styles.section} aria-labelledby="next-project-heading">
      <Container>
        <Link href={href} className={styles.link}>
          <p id="next-project-heading" className={styles.label}>
            {t.caseNextProject}
          </p>
          <div className={styles.imageWrap}>
            <ImageSlot
              src={image.src}
              alt={image.alt[lang]}
              label={project.heroImageKey}
              aspectRatio={image.ratio}
            />
          </div>
          <span className={styles.title}>
            {project.title} <span aria-hidden="true">→</span>
          </span>
        </Link>
      </Container>
    </section>
  );
}
