import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { siteConfig } from "@/content/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.6 },
    { path: "/cv", priority: 0.6 },
    ...projects.map((project) => ({ path: `/work/${project.slug}`, priority: 0.8 })),
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const lang of locales) {
      const url = `${siteConfig.url}/${lang}${route.path}`;
      entries.push({
        url,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((altLang) => [altLang, `${siteConfig.url}/${altLang}${route.path}`])
          ),
        },
      });
    }
  }

  return entries;
}
