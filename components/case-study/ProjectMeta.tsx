import { Container } from "@/components/ui/Container";
import { translations } from "@/content/translations";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@/content/projects";
import styles from "./ProjectMeta.module.css";

export function ProjectMeta({ project, lang }: { project: Project; lang: Locale }) {
  const t = translations[lang];

  const items: { label: string; value: string }[] = [
    { label: t.caseRole, value: project.meta.role[lang] },
  ];

  if (project.company) {
    items.push({ label: t.caseCompany, value: project.company });
  }

  items.push({ label: t.caseTimeline, value: project.meta.timeline[lang] });

  return (
    <Container>
      <dl className={styles.meta}>
        {items.map((item) => (
          <div key={item.label} className={styles.item}>
            <dt className={styles.term}>{item.label}</dt>
            <dd className={styles.description}>{item.value}</dd>
          </div>
        ))}
        <div className={styles.item}>
          <dt className={styles.term}>{t.caseContribution}</dt>
          <dd className={styles.description}>
            <ul className={styles.contributionList}>
              {project.meta.contribution.map((entry) => (
                <li key={entry[lang]}>{entry[lang]}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </Container>
  );
}
