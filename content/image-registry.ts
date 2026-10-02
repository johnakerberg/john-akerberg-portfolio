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
    src: "/images/portrait.jpg",
    alt: {
      sv: "Porträtt av John Åkerberg",
      en: "Portrait of John Åkerberg",
    },
    ratio: "4/5",
  },
  ABOUT_PADEL: {
    src: "/images/about-padel.jpg",
    alt: {
      sv: "John spelar padel på en inomhusbana",
      en: "John playing padel on an indoor court",
    },
    ratio: "1/1",
  },
  ABOUT_HIKING: {
    src: "/images/about-hiking.jpg",
    alt: {
      sv: "John sitter på ett berg ovanför molnen under en vandring",
      en: "John sitting on a mountain above the clouds during a hike",
    },
    ratio: "1/1",
  },
  ABOUT_SKIING: {
    src: "/images/about-skiing.jpg",
    alt: {
      sv: "John står i en skidbacke med skidor i handen",
      en: "John standing on a ski slope holding his skis",
    },
    ratio: "1/1",
  },
  ABOUT_GOLF: {
    src: "/images/about-golf.jpg",
    alt: {
      sv: "John sitter i en golfbil en solig sommardag",
      en: "John sitting in a golf cart on a sunny summer day",
    },
    ratio: "1/1",
  },

  // Bubblan + Bubblans anhörigapp
  BUBBLAN_HERO: {
    src: "/images/bubblan-hero.png",
    alt: {
      sv: "Bubblans inloggningsskärm på mobilen och kontaktlistan med QR-parkoppling på hubben",
      en: "Bubblan's login screen on mobile alongside the contact list and QR pairing screen on the hub",
    },
    ratio: "1600/943",
  },
  BUBBLAN_OLD_UI: {
    src: "/images/bubblan-old-ui.png",
    alt: {
      sv: "Bubblans ursprungliga gränssnitt i ljusgrönt, med lågkontrast-knappar",
      en: "Bubblan's original interface in light green, with low-contrast buttons",
    },
    ratio: "1338/829",
  },
  BUBBLAN_NEW_HOME: {
    src: "/images/bubblan-new-home.png",
    alt: {
      sv: "Nya Bubblan-hemskärmen med schema för idag/vecka, väder och nästa videosamtal",
      en: "New Bubblan home screen with today/week schedule, weather, and next video session",
    },
    ratio: "1392/766",
  },
  BUBBLAN_NEW_CONTACTS: {
    src: "/images/bubblan-new-contacts.png",
    alt: {
      sv: "Nya kontakt- och videosamtalsvyn i Bubblans gränssnitt med den omarbetade AAA-kontrastfärgen",
      en: "New contacts and video-call view in Bubblan's interface, with the reworked AAA-contrast color",
    },
    ratio: "1392/773",
  },

  // Care by Iris
  IRIS_HERO: {
    src: "/images/iris-hero.png",
    alt: {
      sv: "IRIS trygghetsklocka tillsammans med inloggnings- och kartvyn i den tillhörande anhörigappen",
      en: "The IRIS safety watch alongside the login and map views in the companion app",
    },
    ratio: "1535/993",
  },
  IRIS_CONTEXT_01: {
    src: "/images/iris-context.jpg",
    alt: {
      sv: "Marknadsföringsmaterial som förklarar vem IRIS passar för och hur trygghetsklockan fungerar",
      en: "Marketing material explaining who IRIS is for and how the safety watch works",
    },
    ratio: "1600/1131",
  },
  IRIS_RESEARCH_01: {
    src: "/images/iris-research.jpg",
    alt: {
      sv: "Appens välkomstskärm med karta, trygghetszon och senaste notiser",
      en: "The app's welcome screen with map, safety zone, and recent notifications",
    },
    ratio: "900/1864",
  },
  IRIS_WORKSHOP_01: {
    src: "/images/iris-workshop.jpg",
    alt: {
      sv: "Klockinställningar i mörkt läge, med stegräkning, batteri, sömn och puls",
      en: "Watch settings in dark mode, showing step count, battery, sleep, and heart rate",
    },
    ratio: "900/1864",
  },
  IRIS_ONBOARDING_01: {
    src: "/images/iris-onboarding.jpg",
    alt: {
      sv: "Utskrivna prototyper av kom igång-guiden för klockan, under iteration på kontoret",
      en: "Printed prototypes of the watch's get-started guide, mid-iteration in the office",
    },
    ratio: "1600/1392",
  },
  IRIS_FINAL_01: {
    src: "/images/iris-final-01.jpg",
    alt: {
      sv: "Klockinställningar i ljust läge, samma vy som mörkt läge för jämförelse",
      en: "Watch settings in light mode, the same view as dark mode for comparison",
    },
    ratio: "900/1864",
  },
  IRIS_FINAL_02: {
    src: "/images/iris-final-02.jpg",
    alt: {
      sv: "Medicinpåminnare i mörkt läge med schemalagda doser och på/av-reglage",
      en: "Medication reminders in dark mode, with scheduled doses and on/off toggles",
    },
    ratio: "900/1864",
  },

  // Digital Care
  DC_HERO: {
    src: "/images/dc-new-dashboard.png",
    alt: {
      sv: "Digital Care: ny översiktsdashboard för en kommuns hela enhetsflotta",
      en: "Digital Care: new overview dashboard for a municipality's entire device fleet",
    },
    ratio: "1336/1133",
  },
  DC_OLD_DASHBOARD: {
    src: "/images/dc-old-dashboard.png",
    alt: {
      sv: "Gamla Digital Care-gränssnittet: cirkeldiagram över antal enheter online, offline och i lager",
      en: "Old Digital Care interface: a pie chart of devices online, offline, and in stock",
    },
    ratio: "1134/773",
  },
  DC_NEW_DASHBOARD: {
    src: "/images/dc-new-dashboard.png",
    alt: {
      sv: "Nya Digital Care-dashboarden för Vingåkers kommun med aktiva enheter, lager och statusöversikt",
      en: "New Digital Care dashboard for Vingåkers kommun showing active devices, stock, and status overview",
    },
    ratio: "1336/1133",
  },
  DC_DEVICE_DETAIL: {
    src: "/images/dc-device-detail.png",
    alt: {
      sv: "Detaljvy för en enskild hubb med anslutna enheter, larmväg och självservice-åtgärder som byt operatör",
      en: "Detail view for a single hub with connected devices, alarm path, and self-service actions like changing operator",
    },
    ratio: "1336/1472",
  },
  DC_ADD_USER: {
    src: "/images/dc-add-user.png",
    alt: {
      sv: "Flödet för att lägga till en ny kommunanvändare med rollbaserad behörighet och spårbarhetslogg",
      en: "The flow for adding a new municipal user with role-based permissions and an audit log",
    },
    ratio: "1337/2146",
  },

  // Explorations — shown as "coming soon" until real images exist.
  // TODO: replace alt text with a real description when src is set.
  TRYON_PREVIEW: {
    src: null,
    alt: {
      sv: "Förhandsbild av TryOn",
      en: "Preview image of TryOn",
    },
    ratio: "4/3",
  },
  ALPHA_LEAP_PREVIEW: {
    src: null,
    alt: {
      sv: "Förhandsbild av rebrandingen av Alpha Leap",
      en: "Preview image of the Alpha Leap rebrand",
    },
    ratio: "4/3",
  },
  PITCH_PLEASE_PREVIEW: {
    src: null,
    alt: {
      sv: "Förhandsbild av Pitch Please",
      en: "Preview image of Pitch Please",
    },
    ratio: "4/3",
  },
} satisfies Record<string, RegistryImage>;

export type ImageKey = keyof typeof imageRegistry;
