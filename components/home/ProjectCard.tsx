import Link from "next/link";
import type { CSSProperties } from "react";
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

/**
 * The whole card is clickable, but there is only ONE real link: the title.
 * Its ::after stretches over the card ("block link" pattern, Inclusive
 * Components), so image, text and "View case" are all click targets while
 * keyboard and screen reader users get a single, clearly named link.
 */
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
    <article
      className={styles.card}
      style={{ "--card-accent": project.accent } as CSSProperties}
    >
      <ImageSlot
        src={image.src}
        alt={image.alt[lang]}
        label={project.heroImageKey}
        aspectRatio={CARD_IMAGE_RATIO}
        priority={priority}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className={styles.image}
      />

      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link href={href} className={styles.cardLink}>
            {project.title}
          </Link>
        </h3>

        {meta ? <p className={styles.meta}>{meta}</p> : null}

        <p className={styles.descriptor}>{project.descriptor[lang]}</p>

        <ul className={styles.tags}>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>

        <span className={styles.viewCase} aria-hidden="true">
          {t.viewCase} <span className={styles.arrow}>→</span>
        </span>
      </div>
    </article>
  );
}
