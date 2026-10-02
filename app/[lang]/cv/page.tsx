import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { locales, isLocale } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { translations } from "@/content/translations";
import { person, contact, siteConfig } from "@/content/site";
import { cvContent } from "@/content/cv";
import styles from "./page.module.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const title = lang === "sv" ? "CV" : "CV";
  return {
    title,
    description: cvContent.summary[lang],
    alternates: {
      canonical: `${siteConfig.url}/${lang}/cv`,
      languages: {
        sv: `${siteConfig.url}/sv/cv`,
        en: `${siteConfig.url}/en/cv`,
      },
    },
  };
}

export default async function CVPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = translations[lang];

  return (
    <article className={styles.page}>
      <Container>
        <p className={styles.eyebrow}>{t.cvPageEyebrow}</p>
        <h1 className={styles.heading}>{person.name}</h1>
        <p className={styles.subheading}>
          {person.role} · {person.location[lang]}
        </p>
        <a href={`mailto:${contact.email}`} className={styles.email}>
          {contact.email}
        </a>

        <div className={styles.actions} data-no-print>
          <a
            href={`/cv/john-akerberg-cv-${lang}.pdf`}
            download
            className={styles.download}
          >
            <span aria-hidden="true">↓</span> {t.cvDownload}
          </a>
          <CopyEmailButton
            email={contact.email}
            label={t.contactCopyEmail}
            copiedLabel={t.contactCopied}
          />
        </div>

        <p className={styles.summary}>{cvContent.summary[lang]}</p>

        <section className={styles.section} aria-labelledby="cv-experience">
          <h2 id="cv-experience" className={styles.sectionHeading}>
            {t.cvExperienceHeading}
          </h2>
          <ul className={styles.entryList}>
            {cvContent.experience.map((entry, index) => (
              <li key={index} className={styles.entry}>
                <div className={styles.entryHead}>
                  <div>
                    <p className={styles.entryRole}>{entry.role[lang]}</p>
                    <p className={styles.entryOrg}>{entry.org}</p>
                  </div>
                  <p className={styles.entryTimeline}>{entry.timeline[lang]}</p>
                </div>
                {entry.bullets.length > 0 ? (
                  <ul className={styles.bulletList}>
                    {entry.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet[lang]}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="cv-education">
          <h2 id="cv-education" className={styles.sectionHeading}>
            {t.cvEducationHeading}
          </h2>
          <ul className={styles.entryList}>
            {cvContent.education.map((entry, index) => (
              <li key={index} className={styles.entry}>
                <div className={styles.entryHead}>
                  <div>
                    <p className={styles.entryRole}>{entry.role[lang]}</p>
                    <p className={styles.entryOrg}>{entry.org}</p>
                  </div>
                  <p className={styles.entryTimeline}>{entry.timeline[lang]}</p>
                </div>
                {entry.bullets.length > 0 ? (
                  <ul className={styles.bulletList}>
                    {entry.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet[lang]}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.columns}>
          <section className={styles.section} aria-labelledby="cv-skills">
            <h2 id="cv-skills" className={styles.sectionHeading}>
              {t.cvSkillsHeading}
            </h2>
            <ul className={styles.tagList}>
              {cvContent.skills.map((skill, index) => (
                <li key={index}>{skill[lang]}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="cv-languages">
            <h2 id="cv-languages" className={styles.sectionHeading}>
              {t.cvLanguagesHeading}
            </h2>
            <ul className={styles.languageList}>
              {cvContent.languages.map((language, index) => (
                <li key={index}>
                  <span>{language.name[lang]}</span>
                  <span className={styles.languageLevel}>{language.level[lang]}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className={styles.contactLink} data-no-print>
          <ArrowLink href={`${localePath(lang, "/")}#contact`}>{t.cvContactLink}</ArrowLink>
        </div>
      </Container>
    </article>
  );
}
