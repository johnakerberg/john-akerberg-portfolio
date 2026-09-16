import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { locales, isLocale } from "@/lib/i18n";
import { localePath } from "@/lib/paths";
import { translations } from "@/content/translations";
import { aboutContent, siteConfig } from "@/content/site";
import { imageRegistry } from "@/content/image-registry";
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

  const title = lang === "sv" ? "Om mig" : "About";
  return {
    title,
    description: aboutContent.heading[lang],
    alternates: {
      canonical: `${siteConfig.url}/${lang}/about`,
      languages: {
        sv: `${siteConfig.url}/sv/about`,
        en: `${siteConfig.url}/en/about`,
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = translations[lang];
  const collage = [
    imageRegistry.ABOUT_PADEL,
    imageRegistry.ABOUT_HIKING,
    imageRegistry.ABOUT_SKIING,
    imageRegistry.ABOUT_GOLF,
  ];
  const collageKeys = ["ABOUT_PADEL", "ABOUT_HIKING", "ABOUT_SKIING", "ABOUT_GOLF"] as const;

  return (
    <article className={styles.page}>
      <Container>
        <p className={styles.eyebrow}>{t.aboutPageEyebrow}</p>
        <h1 className={styles.heading}>{aboutContent.heading[lang]}</h1>

        <div className={styles.layout}>
          <div className={styles.collage}>
            {collage.map((image, index) => (
              <ImageSlot
                key={collageKeys[index]}
                src={image.src}
                alt={image.alt[lang]}
                label={collageKeys[index]}
                aspectRatio={image.ratio}
                priority={index === 0}
                sizes="(min-width: 1024px) 18vw, 45vw"
              />
            ))}
          </div>

          <div className={styles.copy}>
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph[lang]}
              </p>
            ))}

            <div className={styles.tools}>
              <h2 className={styles.toolsHeading}>{t.aboutToolsHeading}</h2>
              <ul className={styles.toolsList}>
                {aboutContent.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>

            <ArrowLink href={`${localePath(lang, "/")}#contact`}>{t.aboutContactLink}</ArrowLink>
          </div>
        </div>
      </Container>
    </article>
  );
}
