import Link from "next/link";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Tag } from "@/components/ui/Tag";
import { imageRegistry } from "@/content/image-registry";
import { translations } from "@/content/translations";
import { localePath } from "@/lib/paths";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@/content/projects";
import styles from "./ProjectCard.module.css";

/**
 * Card thumbnails always crop to this ratio regardless of the hero image's
 * own native ratio (used full-size on the case study page itself), so the
 * three cards in the homepage grid line up at the same height.
 */
const CARD_IMAGE_RATIO = "16/10";

export function ProjectCard({
  project,
  lang,
  priority = false,
}: {
  project: Project;
  lang: Locale;
  priority?: boolean;
}) {
  const t = translations[lang];
  const image = imageRegistry[project.heroImageKey];
  const href = localePath(lang, `/work/${project.slug}`);
  const meta = [project.company, project.year].filter(Boolean).join(" · ");

  return (
    <article className={styles.card}>
      <Link href={href} className={styles.imageLink} tabIndex={-1}>
        <ImageSlot
          src={image.src}
          alt={image.alt[lang]}
          label={project.heroImageKey}
          aspectRatio={CARD_IMAGE_RATIO}
          priority={priority}
          className={styles.image}
        />
      </Link>

      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link href={href}>{project.title}</Link>
        </h3>

        {meta ? <p className={styles.meta}>{meta}</p> : null}

        <p className={styles.descriptor}>{project.descriptor[lang]}</p>

        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>

        <Link href={href} className={styles.viewCase}>
          {t.viewCase} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
