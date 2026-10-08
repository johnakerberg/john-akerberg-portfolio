import type { Locale } from "@/lib/i18n";

export type LocalizedText = Record<Locale, string>;

function text(sv: string, en: string): LocalizedText {
  return { sv, en };
}

export type CVEntry = {
  role: LocalizedText;
  org: string;
  timeline: LocalizedText;
  bullets: LocalizedText[];
};

export type CVLanguage = {
  name: LocalizedText;
  level: LocalizedText;
};

export const cvContent = {
  summary: text(
    "UX/Produktdesigner med fokus på välfärdsteknik och tillgänglighet. Under två LIA-perioder har jag designat för äldre användare och deras anhöriga, från en trygghetsapp som lanserades i App Store och Google Play till en plattform för kommunernas hemtjänst. Jag förankrar designval i research. När användarna är svåra att nå använder jag etablerade riktlinjer som WCAG och återkoppling via andra vägar. Med en bakgrund inom djuromsorg, handel och logistik är jag van att jobba nära människor och i verksamheter där saker måste fungera i praktiken.",
    "UX/Product Designer focused on welfare technology and accessibility. Across two internships I've designed for older users and their families, from a safety app launched on the App Store and Google Play to a platform for municipal home care. I ground design decisions in research. When users are hard to reach, I rely on established guidelines like WCAG and indirect feedback. With a background in animal care, retail, and logistics, I'm used to working close to people in settings where things have to work in practice."
  ),
  experience: [
    {
      role: text("UX / Produktdesigner (LIA)", "UX / Product Designer (Internship)"),
      org: "Sensapp",
      timeline: text("Vår 2026", "Spring 2026"),
      bullets: [
        text(
          "Designade om Bubblans gränssnitt och drev UX-arbetet för anhörigappen, med fokus på WCAG och seniordesign utan direkt användarkontakt.",
          "Redesigned Bubblan's interface and led UX work on its companion app, focused on WCAG and senior-friendly design without direct user access."
        ),
        text(
          "Ledde en fullständig Design Thinking-process för Digital Care: intervjuer, en HTML-prototyp och användartester som mynnade ut i en kravspecifikation.",
          "Ran a full Design Thinking process for Digital Care: interviews, an HTML prototype, and usability tests that resulted in a requirements specification."
        ),
        text(
          "Sidoarbete med produktdokumentation, kontaktdatabaser, nyhetsbrev och kommunikation.",
          "Contributed to product documentation, contact databases, newsletters, and communication alongside core UX work."
        ),
      ],
    },
    {
      role: text("UX / Produktdesigner (LIA)", "UX / Product Designer (Internship)"),
      org: "Digalog / Digital Dimension Sverige AB",
      timeline: text("2025", "2025"),
      bullets: [
        text(
          "Tog appdesignen för IRIS trygghetsklocka och anhörigapp från lo-fi-wireframes till en lanserad app i App Store och Google Play.",
          "Took the app design for the IRIS safety watch and companion app from lo-fi wireframes to a launched app in the App Store and Google Play."
        ),
        text(
          "Byggde ett designsystem med komponentbibliotek och style guide, och omarbetade klockans gränssnitt från kinesiska till svenska.",
          "Built a design system with a component library and style guide, and reworked the watch's interface from Chinese to Swedish."
        ),
        text(
          "Tog fram onboardingflöden och fysiska manualer, och deltog i pilottester med seniorer i Vingåker.",
          "Produced onboarding flows and physical manuals, and took part in pilot tests with seniors in Vingåker."
        ),
      ],
    },
    {
      role: text("Butiksmedarbetare", "Retail Sales Associate"),
      org: "Circle K, Munkebäck / Mölnlycke / Uppsala",
      timeline: text("Periodvis, 2019–pågående", "Periodically, 2019–present"),
      bullets: [
        text(
          "Kundservice, kassaarbete, påfyllning av varor samt öppning/stängning av butik.",
          "Customer service, cashier duties, stock replenishment, and store opening/closing."
        ),
        text("Utbildade nyanställda.", "Trained new employees."),
      ],
    },
    {
      role: text("Padelcoach", "Padel Coach"),
      org: "Padelson Academy",
      timeline: text("Hösten 2022–våren 2023", "Autumn 2022–spring 2023"),
      bullets: [
        text(
          "Höll i grupp- och privatträning för barn i åldrarna 6–13.",
          "Ran group and private training for children aged 6–13."
        ),
      ],
    },
    {
      role: text("Lagerarbetare / Truckförare", "Warehouse Worker / Forklift Driver"),
      org: "Baby World, Uppsala",
      timeline: text("Hösten 2022–sommaren 2023", "Autumn 2022–summer 2023"),
      bullets: [
        text(
          "Orderplockning, lastning/lossning och intern logistik. Körde truck (kategori A).",
          "Order picking, loading/unloading, and internal logistics. Operated forklifts (License A)."
        ),
      ],
    },
    {
      role: text("Institutionstekniker (tidigare djurtekniker)", "Institution Technician (formerly Animal Technician)"),
      org: "Göteborgs universitet",
      timeline: text("Periodvis 2014–2021, sommaren 2026", "Periodically 2014–2021, summer 2026"),
      bullets: [
        text(
          "Daglig omvårdnad, hälsokontroller och dokumentation för försöksdjur.",
          "Daily care, health checks, and documentation for laboratory animals."
        ),
        text(
          "Introducerade ny personal och forskare till rutiner och säkerhetsstandarder.",
          "Introduced new staff and researchers to procedures and safety standards."
        ),
      ],
    },
  ] satisfies CVEntry[],
  education: [
    {
      role: text("UX-design (Yrkeshögskola, 400 YH-poäng)", "UX Design (Higher Vocational Education)"),
      org: "IT-Högskolan Göteborg",
      timeline: text("2024–2026", "2024–2026"),
      bullets: [
        text(
          "Examensarbete: \"Att designa för den man inte når\", en studie om användarcentrering inom välfärdsteknik.",
          "Thesis: \"Designing for the one you can't reach,\" a study on user-centered design within welfare technology."
        ),
      ],
    },
    {
      role: text("Veterinärmedicin", "Veterinary Medicine"),
      org: "Sveriges lantbruksuniversitet",
      timeline: text("2018–2019", "2018–2019"),
      bullets: [],
    },
    {
      role: text("Gymnasium", "Upper Secondary School"),
      org: "August Kobbes Gymnasium",
      timeline: text("Examen 2013", "Graduated 2013"),
      bullets: [],
    },
  ] satisfies CVEntry[],
  skills: [
    text("UX/UI-design (Figma, FigJam, Framer)", "UX/UI design (Figma, FigJam, Framer)"),
    text("Prototyping (HTML, CSS, JavaScript, TypeScript)", "Prototyping (HTML, CSS, JavaScript, TypeScript)"),
    text("AI-assisterad prototyping (Claude)", "AI-assisted prototyping (Claude)"),
    text("Användarresearch & användartester", "User research & usability testing"),
    text("Problemlösning", "Problem solving"),
    text("Samarbete i team", "Team collaboration"),
    text("Undervisning & coaching", "Teaching & coaching"),
    text("Truckkort (kategori A, B)", "Forklift license (category A, B)"),
    text("Körkort (kategori B)", "Driver's license (category B)"),
  ],
  languages: [
    { name: text("Svenska", "Swedish"), level: text("Flytande", "Fluent") },
    { name: text("Engelska", "English"), level: text("Flytande", "Fluent") },
    { name: text("Spanska", "Spanish"), level: text("Grundläggande", "Basic") },
  ] satisfies CVLanguage[],
};
