import { Container } from "@/components/ui/Container";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/content/projects";
import { translations } from "@/content/translations";
import type { Locale } from "@/lib/i18n";
import styles from "./SelectedWork.module.css";

export function SelectedWork({ lang }: { lang: Locale }) {
  const t = translations[lang];

  return (
    <section id="work" className={styles.section} aria-labelledby="work-heading">
      <Container>
        <h2 id="work-heading" className={styles.heading}>
          {t.selectedWorkHeading}
        </h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} lang={lang} priority={index === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
