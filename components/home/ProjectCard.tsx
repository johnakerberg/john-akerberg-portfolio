import Link from "next/link";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Tag } from "@/components/ui/Tag";
import { imageRegistry } from "@/content/image-registry";
import { translations } from "@/content/translations";
import { localePath } from "@/lib/paths";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@/content/projects";
import styles from "./ProjectCard.module.css";

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
          aspectRatio={image.ratio}
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
