import type { Locale } from "@/lib/i18n";
import type { ImageKey } from "./image-registry";

export type LocalizedText = Record<Locale, string>;

function text(sv: string, en: string): LocalizedText {
  return { sv, en };
}

export type CaseInsight = {
  observation: LocalizedText;
  why: LocalizedText;
  implication: LocalizedText;
};

export type CaseSectionContent = {
  id: string;
  numberLabel: string;
  heading: LocalizedText;
  body: LocalizedText[];
  imageKey?: ImageKey;
  imageGrid?: ImageKey[];
  insight?: CaseInsight;
};

export type ProjectMeta = {
  role: LocalizedText;
  timeline: LocalizedText;
  contribution: LocalizedText[];
};

export type Project = {
  slug: string;
  title: string;
  company?: string;
  year?: string;
  descriptor: LocalizedText;
  tags: string[];
  heroImageKey: ImageKey;
  tlDr: LocalizedText;
  meta: ProjectMeta;
  sections: CaseSectionContent[];
};

export type Exploration = {
  slug: string;
  title: string;
  descriptor: LocalizedText;
  imageKey: ImageKey;
};

/* -------------------------------------------------------------------- */
/* Together by Iris — flagship case                                     */
/* -------------------------------------------------------------------- */

const togetherByIris: Project = {
  slug: "together-by-iris",
  title: "Together by Iris",
  company: "Sensapp",
  year: "2026",
  descriptor: text(
    "Att designa digital välfärdsteknik kring människorna som faktiskt använder den.",
    "Designing digital welfare technology around the people who actually use it."
  ),
  tags: ["UX Research", "Product Design", "Service Design"],
  heroImageKey: "TOGETHER_HERO",
  tlDr: text(
    "TODO: Sammanfatta i tre–fyra meningar problemet, Johns roll, vad han gjorde och vilken riktning arbetet ledde till. En rekryterare ska kunna förstå caset utan att läsa hela sidan.",
    "TODO: Summarize the problem, John's role, what he did and the resulting direction in three or four sentences. A recruiter should understand the case without reading the whole page."
  ),
  meta: {
    role: text("UX / Product Designer", "UX / Product Designer"),
    timeline: text("Vår 2026", "Spring 2026"),
    contribution: [
      text("Research", "Research"),
      text("Intervjuer", "Interviews"),
      text("Syntes", "Synthesis"),
      text("Konceptutveckling", "Concept development"),
      text("UX-design", "UX design"),
    ],
  },
  sections: [
    {
      id: "challenge",
      numberLabel: "01",
      heading: text("Utmaningen", "The challenge"),
      body: [
        text(
          "TODO: Beskriv det verkliga problemet Together by Iris skulle lösa — vem det påverkade och varför det var svårt. Undvik att hitta på siffror eller specifika omständigheter innan de är verifierade.",
          "TODO: Describe the real problem Together by Iris set out to solve — who it affected and why it was difficult. Avoid inventing numbers or specific circumstances until verified."
        ),
      ],
    },
    {
      id: "research",
      numberLabel: "02",
      heading: text("Närmare problemet / Research", "Getting close to the problem / Research"),
      body: [
        text(
          "TODO: Beskriv researchmetoderna som faktiskt användes (t.ex. intervjuer, fältstudier, workshops) och vilka grupper som deltog, utan att ange exakta deltagarantal förrän de är bekräftade.",
          "TODO: Describe the research methods actually used (e.g. interviews, field studies, workshops) and which groups took part, without stating exact participant numbers until confirmed."
        ),
      ],
      imageGrid: ["TOGETHER_CONTEXT_01", "TOGETHER_CONTEXT_02"],
    },
    {
      id: "learnings",
      numberLabel: "03",
      heading: text("Vad vi lärde oss", "What we learned"),
      body: [
        text(
          "TODO: Sammanfatta de viktigaste, verifierade insikterna från researchen. Insikten nedan är ett exempel på formatet — ersätt med verkligt innehåll innan publicering.",
          "TODO: Summarize the key, verified insights from the research. The insight below is a placeholder demonstrating the format — replace with real content before publishing."
        ),
      ],
      imageGrid: ["TOGETHER_RESEARCH_01", "TOGETHER_RESEARCH_02", "TOGETHER_INSIGHTS_01"],
      insight: {
        observation: text(
          "TODO: Vad observerades konkret hos användarna?",
          "TODO: What was concretely observed among users?"
        ),
        why: text(
          "TODO: Varför var den observationen viktig för projektet?",
          "TODO: Why did that observation matter for the project?"
        ),
        implication: text(
          "TODO: Vilket designbeslut följde av insikten?",
          "TODO: What design decision followed from the insight?"
        ),
      },
    },
    {
      id: "direction",
      numberLabel: "04",
      heading: text("Från insikt till riktning", "From insight to direction"),
      body: [
        text(
          "TODO: Förklara hur insikterna omsattes till en konkret designriktning och vilka alternativ som övervägdes.",
          "TODO: Explain how the insights were translated into a concrete design direction and which alternatives were considered."
        ),
      ],
      imageKey: "TOGETHER_DIRECTION_01",
    },
    {
      id: "designing",
      numberLabel: "05",
      heading: text("Att designa upplevelsen", "Designing the experience"),
      body: [
        text(
          "TODO: Beskriv designprocessen — wireframes, iterationer, samarbete med intressenter och eventuell användningstestning.",
          "TODO: Describe the design process — wireframes, iterations, stakeholder collaboration and any usability testing."
        ),
      ],
      imageKey: "TOGETHER_WIREFRAMES_01",
    },
    {
      id: "final",
      numberLabel: "06",
      heading: text("Den slutliga upplevelsen", "Final experience"),
      body: [
        text(
          "TODO: Presentera det färdiga gränssnittet/flödet. Bilderna nedan är platshållare tills riktiga skärmar finns tillgängliga.",
          "TODO: Present the finished interface/flow. The images below are placeholders until real screens are available."
        ),
      ],
      imageGrid: ["TOGETHER_FINAL_01", "TOGETHER_FINAL_02", "TOGETHER_FINAL_03"],
    },
    {
      id: "outcome",
      numberLabel: "07",
      heading: text("Resultat", "Outcome"),
      body: [
        text(
          "TODO: Ange endast verifierade resultat eller status. Hitta inte på mätvärden, affärspåverkan eller implementeringsstatus.",
          "TODO: State only verified outcomes or status. Do not invent metrics, business impact, or implementation status."
        ),
      ],
    },
    {
      id: "reflection",
      numberLabel: "08",
      heading: text("Reflektion", "Reflection"),
      body: [
        text(
          "TODO: Johns egna reflektioner kring projektet — vad som fungerade, vad han skulle gjort annorlunda och vad han tar med sig.",
          "TODO: John's own reflections on the project — what worked, what he'd do differently, and what he's taking forward."
        ),
      ],
    },
  ],
};

/* -------------------------------------------------------------------- */
/* Care by Iris                                                          */
/* -------------------------------------------------------------------- */

const careByIris: Project = {
  slug: "care-by-iris",
  title: "Care by Iris",
  company: "Digalog / IRIS",
  year: "2025",
  descriptor: text(
    "Att göra uppkopplad välfärdsteknik enklare att förstå, ta till sig och leva med.",
    "Making connected care technology easier to understand, adopt and live with."
  ),
  tags: ["User Research", "Usability Testing", "Workshops", "Product Design"],
  heroImageKey: "IRIS_HERO",
  tlDr: text(
    "TODO: Sammanfatta problemet, Johns roll, vad han gjorde och vilken riktning arbetet ledde till.",
    "TODO: Summarize the problem, John's role, what he did and the resulting direction."
  ),
  meta: {
    role: text("UX / Product Designer", "UX / Product Designer"),
    timeline: text("2025", "2025"),
    contribution: [
      text("Användarresearch", "User research"),
      text("Användningstester", "Usability testing"),
      text("Workshops", "Workshops"),
      text("Produktdesign", "Product design"),
    ],
  },
  sections: [
    {
      id: "challenge",
      numberLabel: "01",
      heading: text("Utmaningen", "The challenge"),
      body: [
        text(
          "TODO: Beskriv utmaningen bakom Care by Iris — vilket problem inom uppkopplad omsorgsteknik projektet adresserade.",
          "TODO: Describe the challenge behind Care by Iris — what problem within connected care technology the project addressed."
        ),
      ],
    },
    {
      id: "research",
      numberLabel: "02",
      heading: text("Närmare problemet / Research", "Getting close to the problem / Research"),
      body: [
        text(
          "TODO: Beskriv researchmetoderna — t.ex. användningstester och workshops — och vilka grupper som deltog.",
          "TODO: Describe the research methods — e.g. usability testing and workshops — and which groups took part."
        ),
      ],
      imageKey: "IRIS_CONTEXT_01",
      insight: {
        observation: text("TODO: Vad observerades konkret?", "TODO: What was concretely observed?"),
        why: text("TODO: Varför var det viktigt?", "TODO: Why did it matter?"),
        implication: text("TODO: Vilken designkonsekvens följde?", "TODO: What design implication followed?"),
      },
    },
    {
      id: "learnings",
      numberLabel: "03",
      heading: text("Vad vi lärde oss", "What we learned"),
      body: [
        text(
          "TODO: Sammanfatta de viktigaste verifierade insikterna från användningstester och workshops.",
          "TODO: Summarize the key verified insights from usability testing and workshops."
        ),
      ],
      imageKey: "IRIS_RESEARCH_01",
    },
    {
      id: "direction",
      numberLabel: "04",
      heading: text("Från insikt till riktning", "From insight to direction"),
      body: [
        text(
          "TODO: Förklara hur insikterna formade den valda designriktningen.",
          "TODO: Explain how the insights shaped the chosen design direction."
        ),
      ],
      imageKey: "IRIS_WORKSHOP_01",
    },
    {
      id: "designing",
      numberLabel: "05",
      heading: text("Att designa upplevelsen", "Designing the experience"),
      body: [
        text(
          "TODO: Beskriv hur onboarding- och kärnflöden togs fram och testades.",
          "TODO: Describe how onboarding and core flows were developed and tested."
        ),
      ],
      imageKey: "IRIS_ONBOARDING_01",
    },
    {
      id: "final",
      numberLabel: "06",
      heading: text("Den slutliga upplevelsen", "Final experience"),
      body: [
        text(
          "TODO: Presentera det färdiga gränssnittet. Bilderna nedan är platshållare tills riktiga skärmar finns.",
          "TODO: Present the finished interface. The images below are placeholders until real screens are available."
        ),
      ],
      imageGrid: ["IRIS_FINAL_01", "IRIS_FINAL_02"],
    },
    {
      id: "outcome",
      numberLabel: "07",
      heading: text("Resultat", "Outcome"),
      body: [
        text(
          "TODO: Ange endast verifierade resultat. Hitta inte på mätvärden eller affärspåverkan.",
          "TODO: State only verified outcomes. Do not invent metrics or business impact."
        ),
      ],
    },
    {
      id: "reflection",
      numberLabel: "08",
      heading: text("Reflektion", "Reflection"),
      body: [
        text(
          "TODO: Johns egna reflektioner kring projektet.",
          "TODO: John's own reflections on the project."
        ),
      ],
    },
  ],
};

/* -------------------------------------------------------------------- */
/* TryOn                                                                 */
/* -------------------------------------------------------------------- */

const tryOn: Project = {
  slug: "tryon",
  title: "TryOn",
  year: undefined,
  descriptor: text(
    "Ett utforskande av hur ett virtuellt provrum kan minska osäkerheten vid klädköp online.",
    "Exploring how a virtual fitting room could reduce uncertainty when shopping for clothes online."
  ),
  tags: ["UX Research", "Interaction Design", "Prototyping"],
  heroImageKey: "TRYON_HERO",
  tlDr: text(
    "TODO: Sammanfatta problemet, Johns roll, vad han gjorde och vilken riktning arbetet ledde till.",
    "TODO: Summarize the problem, John's role, what he did and the resulting direction."
  ),
  meta: {
    role: text("UX Researcher / Interaction Designer", "UX Researcher / Interaction Designer"),
    timeline: text("TODO: ange tidsperiod", "TODO: add timeline"),
    contribution: [
      text("Research", "Research"),
      text("Interaktionsdesign", "Interaction design"),
      text("Prototyping", "Prototyping"),
    ],
  },
  sections: [
    {
      id: "challenge",
      numberLabel: "01",
      heading: text("Utmaningen", "The challenge"),
      body: [
        text(
          "TODO: Beskriv osäkerheten kring klädköp online som TryOn utforskade, och varför det är ett relevant problem.",
          "TODO: Describe the uncertainty around buying clothes online that TryOn explored, and why it's a relevant problem."
        ),
      ],
    },
    {
      id: "research",
      numberLabel: "02",
      heading: text("Närmare problemet / Research", "Getting close to the problem / Research"),
      body: [
        text(
          "TODO: Beskriv hur research kring köpbeteende och osäkerhet genomfördes.",
          "TODO: Describe how research into purchasing behavior and uncertainty was carried out."
        ),
      ],
      imageKey: "TRYON_RESEARCH_01",
    },
    {
      id: "learnings",
      numberLabel: "03",
      heading: text("Vad vi lärde oss", "What we learned"),
      body: [
        text(
          "TODO: Sammanfatta de viktigaste verifierade insikterna.",
          "TODO: Summarize the key verified insights."
        ),
      ],
    },
    {
      id: "direction",
      numberLabel: "04",
      heading: text("Från insikt till riktning", "From insight to direction"),
      body: [
        text(
          "TODO: Förklara hur insikterna formade konceptet för ett virtuellt provrum.",
          "TODO: Explain how the insights shaped the virtual fitting room concept."
        ),
      ],
      imageKey: "TRYON_FLOW_01",
    },
    {
      id: "designing",
      numberLabel: "05",
      heading: text("Att designa upplevelsen", "Designing the experience"),
      body: [
        text(
          "TODO: Beskriv wireframing och prototyping av interaktionsflödet.",
          "TODO: Describe wireframing and prototyping of the interaction flow."
        ),
      ],
      imageKey: "TRYON_WIREFRAME_01",
    },
    {
      id: "final",
      numberLabel: "06",
      heading: text("Den slutliga upplevelsen", "Final experience"),
      body: [
        text(
          "TODO: Presentera den slutliga prototypen. Bilderna nedan är platshållare.",
          "TODO: Present the final prototype. The images below are placeholders."
        ),
      ],
      imageGrid: ["TRYON_FINAL_01", "TRYON_FINAL_02"],
    },
    {
      id: "outcome",
      numberLabel: "07",
      heading: text("Resultat", "Outcome"),
      body: [
        text(
          "TODO: Ange endast verifierade resultat eller lärdomar från utforskningen.",
          "TODO: State only verified outcomes or learnings from the exploration."
        ),
      ],
    },
    {
      id: "reflection",
      numberLabel: "08",
      heading: text("Reflektion", "Reflection"),
      body: [
        text(
          "TODO: Johns egna reflektioner kring projektet.",
          "TODO: John's own reflections on the project."
        ),
      ],
    },
  ],
};

export const projects: Project[] = [togetherByIris, careByIris, tryOn];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  const nextIndex = index === -1 ? 0 : (index + 1) % projects.length;
  return projects[nextIndex];
}

/* -------------------------------------------------------------------- */
/* Selected explorations                                                 */
/* -------------------------------------------------------------------- */

export const explorations: Exploration[] = [
  {
    slug: "voyant",
    title: "Voyant",
    descriptor: text(
      "TODO: Lägg till en kort, verifierad beskrivning av Voyant.",
      "TODO: Add a short, verified description of Voyant."
    ),
    imageKey: "VOYANT_PREVIEW",
  },
  {
    slug: "alpha-leap",
    title: "Alpha Leap",
    descriptor: text(
      "TODO: Lägg till en kort, verifierad beskrivning av Alpha Leap.",
      "TODO: Add a short, verified description of Alpha Leap."
    ),
    imageKey: "ALPHA_LEAP_PREVIEW",
  },
  {
    slug: "velox",
    title: "Velox",
    descriptor: text(
      "TODO: Lägg till en kort, verifierad beskrivning av Velox.",
      "TODO: Add a short, verified description of Velox."
    ),
    imageKey: "VELOX_PREVIEW",
  },
];
