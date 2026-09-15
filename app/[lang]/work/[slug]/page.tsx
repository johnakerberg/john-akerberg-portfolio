import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CaseHero } from "@/components/case-study/CaseHero";
import { ProjectMeta } from "@/components/case-study/ProjectMeta";
import { CaseSection } from "@/components/case-study/CaseSection";
import { NextProject } from "@/components/case-study/NextProject";
import { ContactCTA } from "@/components/home/ContactCTA";
import { locales, isLocale } from "@/lib/i18n";
import { translations } from "@/content/translations";
import { siteConfig } from "@/content/site";
import { projects, getProjectBySlug, getAdjacentProject } from "@/content/projects";
import styles from "./page.module.css";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    projects.map((project) => ({ lang, slug: project.slug }))
  );
}

type PageParams = { lang: string; slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};

  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title}`,
    description: project.descriptor[lang],
    alternates: {
      canonical: `${siteConfig.url}/${lang}/work/${slug}`,
      languages: {
        sv: `${siteConfig.url}/sv/work/${slug}`,
        en: `${siteConfig.url}/en/work/${slug}`,
      },
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = translations[lang];
  const nextProject = getAdjacentProject(slug);

  return (
    <article>
      <CaseHero project={project} lang={lang} />

      <ProjectMeta project={project} lang={lang} />

      <section className={styles.tlDr} aria-labelledby="tldr-heading">
        <Container>
          <p id="tldr-heading" className={styles.tlDrLabel}>
            {t.caseTlDrLabel}
          </p>
          <p className={styles.tlDrBody}>{project.tlDr[lang]}</p>
        </Container>
      </section>

      {project.sections.map((section) => (
        <CaseSection key={section.id} section={section} lang={lang} />
      ))}

      <NextProject project={nextProject} lang={lang} />

      <ContactCTA lang={lang} />
    </article>
  );
}
