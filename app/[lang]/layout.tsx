import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/ui/SkipLink";
import { locales, isLocale } from "@/lib/i18n";
import { translations } from "@/content/translations";
import { siteConfig } from "@/content/site";
import "@/styles/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type LayoutParams = { lang: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<LayoutParams>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const other = lang === "sv" ? "en" : "sv";

  return {
    title: {
      default: siteConfig.title[lang],
      template: "%s — John Åkerberg",
    },
    description: siteConfig.description[lang],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `${siteConfig.url}/${lang}`,
      languages: {
        sv: `${siteConfig.url}/sv`,
        en: `${siteConfig.url}/en`,
      },
    },
    openGraph: {
      title: siteConfig.title[lang],
      description: siteConfig.description[lang],
      url: `${siteConfig.url}/${lang}`,
      siteName: "John Åkerberg",
      locale: lang === "sv" ? "sv_SE" : "en_US",
      alternateLocale: other === "sv" ? "sv_SE" : "en_US",
      type: "website",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<LayoutParams>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const t = translations[lang];

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SkipLink label={t.skipLink} />
        <Header lang={lang} />
        <main id="main-content">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
