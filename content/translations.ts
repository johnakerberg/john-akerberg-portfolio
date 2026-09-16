import type { Locale } from "@/lib/i18n";

export const translations = {
  sv: {
    // Skip link / landmarks
    skipLink: "Hoppa till huvudinnehåll",
    mainNavLabel: "Huvudmeny",

    // Header navigation
    navWork: "Projekt",
    navAbout: "Om mig",
    navContact: "Kontakt",
    navCV: "CV",

    // Mobile navigation
    menuOpen: "Meny",
    menuClose: "Stäng",

    // Language switcher
    langGroupLabel: "Språkval",
    langSwitchToSv: "Byt språk till svenska",
    langSwitchToEn: "Byt språk till engelska",
    langNameSv: "Svenska",
    langNameEn: "Engelska",

    // Hero
    heroEyebrow: "UX / PRODUCT DESIGNER",
    heroHeading:
      "Jag designar produkter utifrån hur människor faktiskt tänker och beter sig.",
    heroBody:
      "Jag heter John Åkerberg och är UX / Product Designer i Göteborg. Jag använder research, produktperspektiv och design för att göra komplexa upplevelser enklare att förstå.",
    heroCta: "Se utvalda projekt",

    // Selected work
    selectedWorkHeading: "Utvalda projekt",
    viewCase: "Se case",

    // Explorations
    explorationsHeading: "Utvalda utforskningar",
    explorationsPreviewLabel: "Förhandsvisning",

    // About preview (homepage)
    aboutPreviewHeading: "Designer av nyfikenhet. Researcher av instinkt.",
    aboutPreviewBody:
      "Jag tycker om att komma nära hur människor faktiskt beter sig: var produkter blir förvirrande, var förväntningar bryts och var ett litet designbeslut kan göra en upplevelse betydligt enklare att förstå.",
    aboutPreviewLink: "Mer om mig",

    // Contact CTA
    contactHeading1: "Har du något intressant i åtanke?",
    contactHeading2: "Låt oss prata.",
    contactCta: "Kontakta mig",
    contactEmailLabel: "E-post",
    contactLinkedInLabel: "LinkedIn",
    contactCVLabel: "CV",

    // Footer
    footerLocation: "Göteborg, Sverige",

    // About page
    aboutPageEyebrow: "OM MIG",
    aboutToolsHeading: "Verktyg jag använder",
    aboutContactLink: "Kontakta mig",

    // CV page
    cvPageEyebrow: "CV",
    cvExperienceHeading: "Erfarenhet",
    cvEducationHeading: "Utbildning",
    cvSkillsHeading: "Kompetenser",
    cvLanguagesHeading: "Språk",
    cvContactLink: "Kontakta mig",

    // Case study
    caseTlDrLabel: "Sammanfattning",
    caseRole: "Roll",
    caseCompany: "Företag",
    caseTimeline: "Tidsperiod",
    caseContribution: "Bidrag",
    caseNextProject: "Nästa projekt",

    // Insight block
    insightLabel: "Insikt",
    insightObservation: "Observation",
    insightWhy: "Varför det spelade roll",
    insightImplication: "Designkonsekvens",

    // 404
    notFoundTitle: "404",
    notFoundBody: "Det verkar som att den här sidan har kommit bort.",
    notFoundLink: "Tillbaka till projekten",
  },
  en: {
    // Skip link / landmarks
    skipLink: "Skip to main content",
    mainNavLabel: "Main navigation",

    // Header navigation
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",
    navCV: "CV",

    // Mobile navigation
    menuOpen: "Menu",
    menuClose: "Close",

    // Language switcher
    langGroupLabel: "Language selection",
    langSwitchToSv: "Switch language to Swedish",
    langSwitchToEn: "Switch language to English",
    langNameSv: "Swedish",
    langNameEn: "English",

    // Hero
    heroEyebrow: "UX / PRODUCT DESIGNER",
    heroHeading: "I design products around how people actually think and behave.",
    heroBody:
      "I'm John Åkerberg, a UX / Product Designer based in Gothenburg. I use research, product thinking and design to make complex experiences easier to understand.",
    heroCta: "See selected work",

    // Selected work
    selectedWorkHeading: "Selected work",
    viewCase: "View case",

    // Explorations
    explorationsHeading: "Selected explorations",
    explorationsPreviewLabel: "Preview",

    // About preview (homepage)
    aboutPreviewHeading: "Designer by curiosity. Researcher by instinct.",
    aboutPreviewBody:
      "I enjoy getting close to how people actually behave: where products become confusing, where expectations break down and where a small design decision can make an experience dramatically easier to understand.",
    aboutPreviewLink: "More about me",

    // Contact CTA
    contactHeading1: "Have something interesting in mind?",
    contactHeading2: "Let's talk.",
    contactCta: "Contact me",
    contactEmailLabel: "Email",
    contactLinkedInLabel: "LinkedIn",
    contactCVLabel: "CV",

    // Footer
    footerLocation: "Gothenburg, Sweden",

    // About page
    aboutPageEyebrow: "ABOUT",
    aboutToolsHeading: "Tools I use",
    aboutContactLink: "Contact me",

    // CV page
    cvPageEyebrow: "CV",
    cvExperienceHeading: "Experience",
    cvEducationHeading: "Education",
    cvSkillsHeading: "Skills",
    cvLanguagesHeading: "Languages",
    cvContactLink: "Contact me",

    // Case study
    caseTlDrLabel: "Summary",
    caseRole: "Role",
    caseCompany: "Company",
    caseTimeline: "Timeline",
    caseContribution: "Contribution",
    caseNextProject: "Next project",

    // Insight block
    insightLabel: "Insight",
    insightObservation: "Observation",
    insightWhy: "Why it mattered",
    insightImplication: "Design implication",

    // 404
    notFoundTitle: "404",
    notFoundBody: "Looks like this page wandered off.",
    notFoundLink: "Back to selected work",
  },
} satisfies Record<Locale, Record<string, string>>;

export type TranslationKey = keyof (typeof translations)["sv"];
