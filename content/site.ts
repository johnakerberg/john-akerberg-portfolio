import type { Locale } from "@/lib/i18n";

export const person = {
  name: "John Åkerberg",
  role: "UX / Product Designer",
  location: {
    sv: "Göteborg, Sverige",
    en: "Gothenburg, Sweden",
  } satisfies Record<Locale, string>,
};

/**
 * Real contact details have not been supplied yet. These are clearly
 * marked placeholders — do not present them to a visitor as verified
 * without first confirming with John. See CONTENT NEEDED report.
 */
export const contact = {
  email: "hello@johnakerberg.com", // TODO: confirm real contact email
  linkedin: "https://www.linkedin.com/in/johnakerberg", // TODO: confirm real LinkedIn URL
  cvHref: "/cv/john-akerberg-cv.pdf", // TODO: add real CV file to /public/cv
};

/**
 * TODO: replace with the final production domain once known.
 * Do not hard-code the old Framer domain as canonical (brief section 72).
 */
export const siteConfig = {
  url: "https://johnakerberg.com", // TODO: replace with final production domain
  title: {
    sv: "John Åkerberg — UX / Product Designer",
    en: "John Åkerberg — UX / Product Designer",
  } satisfies Record<Locale, string>,
  description: {
    sv: "John Åkerberg är UX / Product Designer i Göteborg. Portfolio med utvalda projekt inom research, produktdesign och digital välfärdsteknik.",
    en: "John Åkerberg is a UX / Product Designer based in Gothenburg. Portfolio featuring selected work in research, product design and digital welfare technology.",
  } satisfies Record<Locale, string>,
};

export const aboutContent = {
  heading: {
    sv: "Designer av nyfikenhet. Researcher av instinkt.",
    en: "Designer by curiosity. Researcher by instinct.",
  } satisfies Record<Locale, string>,
  paragraphs: [
    {
      sv: "Jag tycker om att komma nära hur människor faktiskt beter sig: var produkter blir förvirrande, var förväntningar bryts och var ett litet designbeslut kan göra en upplevelse betydligt enklare att förstå.",
      en: "I enjoy getting close to how people actually behave: where products become confusing, where expectations break down and where a small design decision can make an experience dramatically easier to understand.",
    },
    {
      sv: "TODO: Lägg till ett andra stycke om Johns bakgrund, arbetssätt eller vad som driver honom som designer.",
      en: "TODO: Add a second paragraph about John's background, way of working, or what drives him as a designer.",
    },
    {
      sv: "TODO: Lägg till ett tredje stycke, till exempel om typen av projekt eller samarbeten han söker.",
      en: "TODO: Add a third paragraph, for example about the kind of projects or collaborations he's looking for.",
    },
  ] satisfies Record<Locale, string>[],
  tools: [
    "Figma",
    "FigJam",
    "Framer",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Photoshop",
  ],
};
