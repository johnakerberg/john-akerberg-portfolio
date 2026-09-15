import type { Locale } from "@/lib/i18n";

export type LocalizedText = Record<Locale, string>;

export type ImageRatio = `${number}/${number}`;

export type RegistryImage = {
  /** null renders the designed placeholder; set a URL to render the real image. */
  src: string | null;
  alt: LocalizedText;
  ratio: ImageRatio;
};

/**
 * Central image registry (brief section 10).
 *
 * To insert a real image later, change only `src: null` to the image
 * URL for the relevant key below, e.g.:
 *
 *   TOGETHER_HERO: {
 *     src: "https://example.com/together-by-iris-hero.webp",
 *     ...
 *   }
 *
 * If the URL is on a new host, add that host to `remotePatterns` in
 * next.config.ts. No other change is required — page composition and
 * aspect ratio stay identical.
 */
export const imageRegistry = {
  // Global
  PORTRAIT_01: {
    src: null,
    alt: {
      sv: "Porträtt av John Åkerberg",
      en: "Portrait of John Åkerberg",
    },
    ratio: "4/5",
  },

  // Together by Iris
  TOGETHER_HERO: {
    src: null,
    alt: {
      sv: "TODO: Lägg till beskrivande alt-text för Together by Iris heroinbild",
      en: "TODO: Add descriptive alt text for the Together by Iris hero image",
    },
    ratio: "16/10",
  },
  TOGETHER_CONTEXT_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "4/3",
  },
  TOGETHER_CONTEXT_02: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "4/3",
  },
  TOGETHER_RESEARCH_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "3/2",
  },
  TOGETHER_RESEARCH_02: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "3/2",
  },
  TOGETHER_INSIGHTS_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "4/3",
  },
  TOGETHER_DIRECTION_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "16/10",
  },
  TOGETHER_WIREFRAMES_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "4/3",
  },
  TOGETHER_FINAL_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "16/10",
  },
  TOGETHER_FINAL_02: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "3/2",
  },
  TOGETHER_FINAL_03: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "9/16",
  },

  // Care by Iris
  IRIS_HERO: {
    src: null,
    alt: {
      sv: "TODO: Lägg till beskrivande alt-text för Care by Iris heroinbild",
      en: "TODO: Add descriptive alt text for the Care by Iris hero image",
    },
    ratio: "16/10",
  },
  IRIS_CONTEXT_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "4/3",
  },
  IRIS_RESEARCH_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "3/2",
  },
  IRIS_WORKSHOP_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "4/3",
  },
  IRIS_ONBOARDING_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "9/16",
  },
  IRIS_FINAL_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "16/10",
  },
  IRIS_FINAL_02: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "3/2",
  },

  // TryOn
  TRYON_HERO: {
    src: null,
    alt: {
      sv: "TODO: Lägg till beskrivande alt-text för TryOn heroinbild",
      en: "TODO: Add descriptive alt text for the TryOn hero image",
    },
    ratio: "16/10",
  },
  TRYON_RESEARCH_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "4/3",
  },
  TRYON_FLOW_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "3/2",
  },
  TRYON_WIREFRAME_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "4/3",
  },
  TRYON_FINAL_01: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "16/10",
  },
  TRYON_FINAL_02: {
    src: null,
    alt: { sv: "TODO", en: "TODO" },
    ratio: "9/16",
  },

  // Explorations
  VOYANT_PREVIEW: {
    src: null,
    alt: {
      sv: "TODO: Lägg till beskrivande alt-text för Voyant",
      en: "TODO: Add descriptive alt text for Voyant",
    },
    ratio: "4/3",
  },
  ALPHA_LEAP_PREVIEW: {
    src: null,
    alt: {
      sv: "TODO: Lägg till beskrivande alt-text för Alpha Leap",
      en: "TODO: Add descriptive alt text for Alpha Leap",
    },
    ratio: "4/3",
  },
  VELOX_PREVIEW: {
    src: null,
    alt: {
      sv: "TODO: Lägg till beskrivande alt-text för Velox",
      en: "TODO: Add descriptive alt text for Velox",
    },
    ratio: "4/3",
  },
} satisfies Record<string, RegistryImage>;

export type ImageKey = keyof typeof imageRegistry;
