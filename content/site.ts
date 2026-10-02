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
 * LinkedIn URL is still a placeholder — confirm the real one with John
 * before treating it as verified.
 */
export const contact = {
  email: "john94akerberg@gmail.com",
  linkedin: "https://www.linkedin.com/in/johnakerberg", // TODO: confirm real LinkedIn URL
};

export const siteConfig = {
  url: "https://johnakerberg.com",
  title: {
    sv: "John Åkerberg — UX / Product Designer",
    en: "John Åkerberg — UX / Product Designer",
  } satisfies Record<Locale, string>,
  description: {
    sv: "John Åkerberg är UX / Product Designer från Göteborg. Portfolio med utvalda projekt inom research, produktdesign och digital välfärdsteknik.",
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
      sv: "Jag har en bakgrund inom veterinärmedicin, service och logistik, och tog mig in i UX genom ett intresse för psykologi: hur människor tänker, känner och beter sig. Design ska inte bara fungera i teorin, den ska kännas rimlig och begriplig för dem som faktiskt använder den. Jag ser AI som ett kraftfullt verktyg snarare än ett hot, rätt använt effektiviserar det delar av designprocessen, men ju bättre det blir desto viktigare blir den mänskliga förmågan att förstå sammanhang, empati och verkliga behov.",
      en: "I have a background in veterinary medicine, service and logistics, and found my way into UX through an interest in psychology: how people think, feel and behave. Design shouldn't just work in theory, it should feel reasonable and understandable to the people who actually use it. I see AI as a powerful tool rather than a threat, used well it streamlines parts of the design process, but the better it gets, the more the human ability to understand context, empathy and real needs matters.",
    },
    {
      sv: "Utanför jobbet spelar jag padel och golf, åker skidor så fort jag får chansen och tar mig gärna ut i naturen. Jag har svårt att stänga av tävlingsinstinkten: jag gillar att tävla, och jag gillar att vinna ännu mer, oavsett om det är på padelbanan eller golfbanan. För den som undrar har jag även 30 hp i afterwork.",
      en: "Outside of work I play padel and golf, go skiing whenever I get the chance and like getting out into nature. I find it hard to switch off my competitive streak: I like to compete, and I like winning even more, whether it's on the padel court or the golf course. For the record, I also hold 30 university credits in afterwork.",
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
