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
  /** Show the section's image(s) at half size, e.g. tall phone mockups. */
  compactMedia?: boolean;
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
  /** Case colour for hover states, taken from the product. Must keep ≥4.5:1 on --color-bg. */
  accent: string;
  tlDr: LocalizedText;
  meta: ProjectMeta;
  sections: CaseSectionContent[];
};

export type Exploration = {
  slug: string;
  title: string;
  /** Optional — explorations are listed by name only as "coming soon" for now. */
  descriptor?: LocalizedText;
  imageKey: ImageKey;
};

/* -------------------------------------------------------------------- */
/* Bubblan + Bubblans anhörigapp — flagship case                        */
/* -------------------------------------------------------------------- */

const bubblan: Project = {
  slug: "bubblan",
  title: "Bubblan",
  company: "Sensapp",
  year: "2026",
  descriptor: text(
    "Design för den jag inte kunde nå.",
    "Designing for the one I couldn't reach."
  ),
  tags: ["Accessibility", "Senior UX", "Product Design"],
  heroImageKey: "BUBBLAN_HERO",
  accent: "#0b5e3a", // Bubblan green — 7.0:1
  tlDr: text(
    "Bubblan är en kommunikationshub som Sensapp placerar hemma hos äldre omsorgstagare för digital tillsyn, gruppsamtal och videosamtal. Jag moderniserade det befintliga gränssnittet och tog över wireframes för den nya anhörigappen, men utan möjlighet att intervjua Bubblans primära användare direkt. Jag förankrade designvalen istället i WCAG och forskning om seniordesign, indirekt återkoppling via en kommunkontakt, och samlad erfarenhet från Sensapp och en tidigare LIA. Arbetet blev kärnan i mitt examensarbete om användarcentrering utan direkt användarkontakt.",
    "Bubblan is a communication hub Sensapp places in elderly care recipients' homes for digital check-ins, group calls, and video calls. I modernized the existing interface and took over wireframes for the new companion app, without being able to interview Bubblan's primary users directly. I grounded design decisions instead in WCAG and senior-design research, indirect feedback via a municipal contact, and collected experience from Sensapp and a prior internship. The work became the core of my thesis on user-centered design without direct user access."
  ),
  meta: {
    role: text("UX / Product Designer", "UX / Product Designer"),
    timeline: text("LIA, vår 2026", "Internship, spring 2026"),
    contribution: [
      text("Tillgänglighet (WCAG)", "Accessibility (WCAG)"),
      text("Seniordesign", "Senior-friendly design"),
      text("UX-design", "UX design"),
      text("Indirekt research / proxy-feedback", "Indirect research / proxy feedback"),
    ],
  },
  sections: [
    {
      id: "challenge",
      numberLabel: "01",
      heading: text("Utmaningen", "The challenge"),
      body: [
        text(
          "Bubblan fanns redan ute hos användare när jag började min LIA, men med ett äldre gränssnitt, och den tillhörande anhörigappen, internt kallad Bubblan Circle, var bara ett tidigt koncept med wireframes från en av utvecklarna. Mitt uppdrag blev tvådelat: modernisera Bubblans gränssnitt så att det blev tydligare, mer tillgängligt och WCAG-kontrollerat utan att tappa det användarna redan var vana vid, och ta anhörigappen vidare ur ett UX-perspektiv med egen motivering för varje förändring.",
          "Bubblan already existed in the field when I started my internship, but with an older interface, and the companion app, internally called Bubblan Circle, was still an early concept with wireframes from one of the developers. My brief was two-part: modernize Bubblan's interface to be clearer, more accessible, and WCAG-checked without losing what existing users were used to, and take the companion app forward from a UX perspective with my own reasoning behind every change."
        ),
        text(
          "Den verkliga svårigheten låg i vem användaren var. Bubblans primära användare är äldre, ofta med begränsad digital vana, spridda i kommuner runt om i landet, för de flesta helt opraktiskt att boka in en digital intervju med. Frågan blev hur en användarcentrerad process kan upprätthållas när direktkontakten med användaren saknas.",
          "The real difficulty was who the user was. Bubblan's primary users are elderly, often with limited digital experience, scattered across municipalities nationwide, for most of them arranging a digital interview simply wasn't practical. The question became how to sustain a user-centered process when direct contact with the user is missing."
        ),
      ],
    },
    {
      id: "research",
      numberLabel: "02",
      heading: text("Att designa utan användarkontakt", "Designing without user contact"),
      body: [
        text(
          "Utan tillgång till slutanvändarna byggde jag mitt arbetssätt på tre ben istället för klassiska intervjuer. Det första var etablerade riktlinjer: WCAG, Nielsen Norman Groups forskning om äldre och digitala gränssnitt, samt en systematisk översikt i JMIR mHealth and uHealth baserad på 40 studier om appdesign för användare över 60.",
          "Without access to end users, I built my process on three pillars instead of classic interviews. The first was established guidelines: WCAG, Nielsen Norman Group's research on older adults and digital interfaces, and a systematic review in JMIR mHealth and uHealth based on 40 studies on app design for users over 60."
        ),
        text(
          "Det andra var återkoppling by proxy: en tekniskt ansvarig och samordnare i Vingåkers kommun förmedlade löpande vad hen hörde och såg hos Bubblan-användarna via sina veckovisa kontakter med Sensapps utvecklare. Det tredje var samlad erfarenhet från kollegorna på Sensapp och min tidigare LIA hos partnerbolaget Digalog, som arbetar mot samma målgrupp.",
          "The second was feedback by proxy: a technical lead and coordinator in Vingåkers kommun continuously relayed what they heard and saw from Bubblan users through their weekly contact with Sensapp's developers. The third was collected experience from colleagues at Sensapp and my earlier internship at partner company Digalog, which works with the same target group."
        ),
      ],
      imageKey: "BUBBLAN_OLD_UI",
    },
    {
      id: "learnings",
      numberLabel: "03",
      heading: text("Vad återkopplingen visade", "What the feedback showed"),
      body: [
        text(
          "Återkopplingen var konkret snarare än abstrakt: texten på vissa knappar var svår att läsa, och kontrasten på knappar mot den gröna bakgrunden upplevdes som för låg. Jag kunde verifiera signalen objektivt, mätningar visade att kontrastkraven enligt WCAG inte klarades av den ursprungliga primärfärgen.",
          "The feedback was concrete rather than abstract: the text on some buttons was hard to read, and the contrast of buttons against the green background felt too low. I could verify the signal objectively, measurements showed the original primary color failed WCAG's contrast requirements."
        ),
      ],
      insight: {
        observation: text(
          "Bubblans ursprungliga ljusgröna primärfärg gav för låg kontrast på knappar med vit text, vilket bekräftades både av WCAG-mätningar och av proxy-återkoppling från Vingåker.",
          "Bubblan's original bright-green primary color gave insufficient contrast on buttons with white text, confirmed both by WCAG measurements and by proxy feedback from Vingåker."
        ),
        why: text(
          "Bubblans användare sitter ofta med försämrad syn, och forskningen om seniordesign pekar ut hög kontrast som en av de viktigaste faktorerna för läsbarhet i den här åldersgruppen.",
          "Bubblan's users often have reduced vision, and senior-design research identifies high contrast as one of the most important factors for readability in this age group."
        ),
        implication: text(
          "Jag bytte ut primärfärgen mot en ny nyans som klarar nivå AAA på WCAG-skalan för kontrast, den högsta nivån, samtidigt som varumärket behölls intakt.",
          "I replaced the primary color with a new shade that meets WCAG's AAA contrast level, the highest tier, while keeping the brand identity intact."
        ),
      },
    },
    {
      id: "direction",
      numberLabel: "04",
      heading: text("Designval och argumentation", "Design decisions and reasoning"),
      body: [
        text(
          "Utöver färgbytet höll jag fast vid två andra av den systematiska översiktens \"golden rules\" för äldre användare: större knappar och avstånd mellan interaktiva element för att kompensera för sämre motorik, även när det gjorde layouten glesare än vad en modern trend hade föreslagit. Jag höll ikoner till ett minimum och kompletterade dem med text, eftersom symbolers innebörd inte alltid är självklar för användare med mindre digital vana.",
          "Beyond the color change, I held to two more of the systematic review's \"golden rules\" for older users: larger buttons and spacing between interactive elements to compensate for reduced motor control, even where it made the layout sparser than a modern trend might suggest. I kept icons to a minimum and paired them with text, since a symbol's meaning isn't always obvious to users with less digital experience."
        ),
        text(
          "För anhörigappen gällde andra förutsättningar: målgruppen är i regel yngre och medelålders vana mobilanvändare, så jag kunde luta mig på generella best practice för konsumentappar, här var dropdowns och toggles inget att undvika, samtidigt som jag motiverade de UX-mässiga förändringarna mot de wireframes jag tog över.",
          "The companion app operated under different conditions: its audience is generally younger and middle-aged, experienced mobile users, so I could lean on general consumer-app best practices, dropdowns and toggles weren't something to avoid here, while I justified the UX changes against the wireframes I inherited."
        ),
      ],
    },
    {
      id: "designing",
      numberLabel: "05",
      heading: text("Att designa upplevelsen", "Designing the experience"),
      body: [
        text(
          "Eftersom Sensapp litade på mina motiveringar gick implementeringen av det uppdaterade gränssnittet smidigt trots att förändringarna, som färgbytet, gjordes tidigt under LIA-perioden. Jag tog anhörigappens design vidare från de befintliga wireframesen med tydlig UX-argumentation för varje förändring, och byggde ett komplett flöde för schema, väder och videosamtal.",
          "Because Sensapp trusted my reasoning, the updated interface was implemented smoothly even though changes like the color swap happened early in the internship. I carried the companion app's design forward from the existing wireframes with clear UX reasoning behind every change, building a complete flow for schedule, weather, and video calls."
        ),
      ],
    },
    {
      id: "final",
      numberLabel: "06",
      heading: text("Den slutliga upplevelsen", "Final experience"),
      body: [
        text(
          "Det nya gränssnittet samlar dagens och veckans schema, en väderwidget och nästa inbokade samtal på en och samma startskärm, med den nya AAA-kontrastfärgen genomgående. Kontakt- och videosamtalsvyn följer samma principer: stora, textkompletterade kontroller och gott om utrymme mellan dem.",
          "The new interface brings today's and this week's schedule, a weather widget, and the next scheduled call together on one home screen, with the new AAA-contrast color applied throughout. The contacts and video-call view follows the same principles: large, text-labeled controls with generous spacing between them."
        ),
      ],
      imageGrid: ["BUBBLAN_NEW_HOME", "BUBBLAN_NEW_CONTACTS"],
    },
    {
      id: "outcome",
      numberLabel: "07",
      heading: text("Resultat", "Outcome"),
      body: [
        text(
          "Den nya primärfärgen klarar nu AAA-nivå på WCAG-skalan och är implementerad i produktion. De konkreta problem som rapporterades, liten text, låg kontrast, åtgärdades och kunde verifieras objektivt mot WCAG. Vad jag inte kunde verifiera är hur förändringarna faktiskt upplevs av slutanvändarna, eftersom nästan all återkoppling jag fick handlade om mätbar tillgänglighet snarare än upplevelse.",
          "The new primary color now meets WCAG's AAA level and is implemented in production. The concrete problems reported, small text, low contrast, were addressed and could be verified objectively against WCAG. What I couldn't verify is how the changes are actually experienced by end users, since almost all the feedback I received concerned measurable accessibility rather than experience."
        ),
      ],
    },
    {
      id: "reflection",
      numberLabel: "08",
      heading: text("Reflektion", "Reflection"),
      body: [
        text(
          "Att jämföra Bubblan med Digital Care blev grunden för mitt examensarbete: användarcentrering är inte binärt utan en skala, och var man hamnar på den beror på villkoren man arbetar under. Bubblan är inte mindre användarcentrerat än ett projekt med direkta intervjuer, det är användarcentrerat med andra verktyg och tydligare gränser för vad metoden kan leverera.",
          "Comparing Bubblan with Digital Care became the foundation of my thesis: user-centeredness isn't binary but a spectrum, and where you land on it depends on the conditions you work under. Bubblan isn't less user-centered than a project with direct interviews, it's user-centered with different tools and clearer limits on what the method can deliver."
        ),
        text(
          "I efterhand hade jag velat komplettera med en strukturerad fältobservation, att åka ut till en kommun och se personal och äldre använda Bubblan tillsammans hade gett en typ av insikt som proxy-återkoppling inte kan ersätta. Jag tar också med mig en händelse mot slutet av LIA:n: på en trivselträff för kommunens seniorer i Vingåker mötte jag för första gången faktiska Bubblan-användare, och insåg att de som deltar i sådana tillställningar sällan är de mest isolerade, som ofta är de som behöver produkten mest.",
          "In hindsight, I would have wanted to add a structured field observation, visiting a municipality to see staff and elderly residents use Bubblan together would have given a kind of insight that proxy feedback can't replace. I also carry forward an experience near the end of the internship: at a social gathering for the municipality's seniors in Vingåker, I met actual Bubblan users for the first time, and realized that the people who attend such events are rarely the most isolated, who are often the ones who need the product the most."
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
  company: "Digalog / Digital Dimension Sverige AB",
  year: "2025",
  descriptor: text(
    "Att göra uppkopplad välfärdsteknik enklare att förstå, ta till sig och leva med.",
    "Making connected care technology easier to understand, adopt and live with."
  ),
  tags: ["Product Design", "App Design", "Onboarding"],
  heroImageKey: "IRIS_HERO",
  accent: "#7a3fc4", // IRIS purple — 5.6:1
  tlDr: text(
    "Care by Iris är IRIS trygghetsklocka och dess anhörigapp, ett Vinnova-finansierat innovationsprojekt som Digalog och Digital Dimension Sverige AB drev tillsammans med Vingåkers kommun. Jag klev in strax efter att hårdvaran anlänt och tog under åtta veckor appdesignen från lo-fi-wireframes till en lanserad app i App Store och Google Play, byggde ett designsystem, omarbetade klockans gränssnitt från kinesiska till svenska, och tog fram onboardingflöden och fysiska manualer inför pilottester med seniorer i Vingåker.",
    "Care by Iris is the IRIS safety watch and its companion app, a Vinnova-funded innovation project run by Digalog and Digital Dimension Sverige AB together with Vingåkers kommun. I joined shortly after the hardware arrived and, over eight weeks, took the app design from lo-fi wireframes to a launched app in the App Store and Google Play, built a design system, reworked the watch's interface from Chinese to Swedish, and produced onboarding flows and physical manuals ahead of pilot tests with seniors in Vingåker."
  ),
  meta: {
    role: text("UX / Product Designer", "UX / Product Designer"),
    timeline: text("LIA, 8 veckor, 2025", "Internship, 8 weeks, 2025"),
    contribution: [
      text("Produktdesign", "Product design"),
      text("Appdesign & designsystem", "App design & design system"),
      text("Onboarding (digitalt + fysiskt)", "Onboarding (digital + physical)"),
      text("Pilottester i Vingåker", "Pilot testing in Vingåker"),
    ],
  },
  sections: [
    {
      id: "challenge",
      numberLabel: "01",
      heading: text("Utmaningen", "The challenge"),
      body: [
        text(
          "IRIS är ett välfärdstekniskt initiativ som syftar till att skapa ökad trygghet, självständighet och livskvalitet för äldre personer innan kommunala insatser blir nödvändiga. Produkten består av en trygghetsklocka med fallfunktion, positionering och hälsorelaterade funktioner, samt en mobilapp där anhöriga och användare kan följa status, få påminnelser och hantera inställningar.",
          "IRIS is a welfare-tech initiative aiming to increase safety, independence, and quality of life for elderly people before municipal care becomes necessary. The product consists of a safety watch with fall detection, positioning, and health-related features, plus a mobile app where relatives and users can follow status, get reminders, and manage settings."
        ),
        text(
          "Bakgrunden är ett tydligt samhällsproblem: en växande äldre befolkning behöver mer stöd samtidigt som resurserna blir färre. I takt med att familjer i allt större utsträckning bor utspridda geografiskt uppstår också en ny typ av vardagsoro, att ha en äldre förälder som bor långt bort kan skapa stress och en känsla av att inte kunna finnas där när det verkligen behövs. IRIS ska minska den oron genom trygghet och struktur, långt innan hemtjänst eller särskilt boende blir aktuellt. I ett senare steg ska IRIS även kopplas till en extern trygghetscentral, ett extra skyddsnät för användare som saknar anhöriga eller vill ha ytterligare trygghet dygnet runt.",
          "The background is a clear societal problem: a growing elderly population needs more support while resources shrink. As families increasingly live spread out geographically, a new kind of everyday worry emerges too, having an elderly parent living far away can create stress and a feeling of not being able to be there when it truly matters. IRIS aims to reduce that worry through safety and structure, well before home care or assisted living becomes necessary. In a later step, IRIS will also connect to an external safety response center, an extra safety net for users without close family or who want additional round-the-clock reassurance."
        ),
      ],
    },
    {
      id: "research",
      numberLabel: "02",
      heading: text("Min ingång i projektet", "My starting point"),
      body: [
        text(
          "Jag klev in i IRIS-projektet strax efter att företaget tagit emot den nya hårdvaran, klockorna. Det fanns redan en tydlig riktning, en etablerad grafisk profil, genomförd research och en färdig hemsida, medan en webbshop höll på att utvecklas parallellt. Projektet genomfördes av Digalog och Digital Dimension Sverige AB och var en del av ett innovationsprojekt finansierat av Vinnova i samarbete med Vingåkers kommun.",
          "I joined the IRIS project shortly after the company had received the new hardware, the watches. There was already a clear direction, an established graphic profile, completed research, and a finished website, while a webshop was being developed in parallel. The project was run by Digalog and Digital Dimension Sverige AB and was part of an innovation project funded by Vinnova in collaboration with Vingåkers kommun."
        ),
        text(
          "Min initiala roll handlade främst om att stötta uppstarten av testgrupper i Vingåker, genomföra användarintervjuer och bidra i arbetet med appdesign. Uppdraget växte ganska snabbt, och jag fick arbeta bredare och mer praktiskt än väntat, med allt från onboardingflöden och designstruktur till kommunikation, testuppföljning och material som skulle fungera i verkliga sammanhang. Produktdesign beskriver nog bättre vad jag fick vara med och bidra till, inte bara UX och UI.",
          "My initial role mainly involved supporting the launch of test groups in Vingåker, conducting user interviews, and contributing to app design. The scope grew fairly quickly, and I ended up working broader and more hands-on than expected, with everything from onboarding flows and design structure to communication, test follow-up, and materials built for real-world use. Product design probably describes what I actually got to contribute better than UX or UI alone."
        ),
      ],
      imageKey: "IRIS_CONTEXT_01",
    },
    {
      id: "learnings",
      numberLabel: "03",
      heading: text("Från koncept till lanserad app", "From concept to launched app"),
      body: [
        text(
          "Det som fanns till en början kring appdesignen var en idé och några low-fi-wireframes. För att underlätta både för oss själva och utvecklarna tog vi fram en prioriteringsordning för vad som minst behövde finnas på plats för att pilottesterna skulle bli så givande som möjligt.",
          "What existed early on for the app design was an idea and a few low-fi wireframes. To make things easier for both ourselves and the developers, we put together a priority order for what minimally needed to be in place for the pilot tests to be as valuable as possible."
        ),
        text(
          "Under de åtta veckor jag var på plats gick vi från oslipad hårdvara, ett appkoncept, en grafisk profil och en hemsida till: en fungerande app i både App Store och Google Play, ett designsystem med komponentbibliotek och en style guide som möjliggjorde fortsatt utveckling, klockor med kinesiskt UI och överflödiga menyer omarbetade till ett svenskt UI skalat ner till det mest nödvändiga, samt en framtagen kom igång-guide för klockan och onboardingflöden för både iOS- och Android-apparna.",
          "Over the eight weeks I was there, we went from raw hardware, an app concept, a graphic profile, and a website to: a working app in both the App Store and Google Play, a design system with a component library and a style guide that enabled continued development, watches with a Chinese UI and excessive menus reworked into a Swedish UI stripped down to the essentials, and a get-started guide for the watch plus onboarding flows for both the iOS and Android apps."
        ),
      ],
      imageKey: "IRIS_RESEARCH_01",
      compactMedia: true,
    },
    {
      id: "direction",
      numberLabel: "04",
      heading: text("Onboarding: att guida användaren hela vägen", "Onboarding: guiding the user all the way"),
      body: [
        text(
          "Utöver research och appdesign behövde vi ta fram tydligt stödmaterial för de äldre användare som skulle delta i pilottesterna. Eftersom målgruppen till stor del bestod av seniorer krävdes extra fokus på läsbarhet, kontrast, textstorlek och visuella steg som gick att följa utan tidigare teknisk vana.",
          "Beyond research and app design, we needed to produce clear support material for the elderly users taking part in the pilot tests. Since the target group largely consisted of seniors, this required extra focus on readability, contrast, text size, and visual steps that could be followed without prior tech experience."
        ),
      ],
      imageKey: "IRIS_ONBOARDING_01",
      insight: {
        observation: text(
          "Ett tidigt besök på tryckeriet visade att den lösning vi först tänkt oss för onboardingmanualen inte var praktiskt genomförbar inom projektets tidsram.",
          "An early visit to the print shop revealed that our original plan for the onboarding manual wasn't practically feasible within the project's timeframe."
        ),
        why: text(
          "Vi hade ett kommande användartest och en målgrupp av seniorer som behövde tydligt, pedagogiskt material, så det fanns varken tid eller marginal att vänta ut en extern tryckprocess.",
          "We had an upcoming usability test and a senior audience that needed clear, pedagogical material, so there was neither the time nor the margin to wait out an external print process."
        ),
        implication: text(
          "Manualerna producerades istället internt med de resurser som fanns tillgängliga, och genom flera iterationer och tester landade vi i ett format som var pedagogiskt, lättöverskådligt och anpassat för att få plats i produktens förpackning.",
          "The manuals were instead produced internally with the resources available, and through several iterations and tests we landed on a format that was pedagogical, easy to scan, and sized to fit inside the product's packaging."
        ),
      },
    },
    {
      id: "designing",
      numberLabel: "05",
      heading: text("Att testa i verkligheten", "Testing in the real world"),
      body: [
        text(
          "Inför pilottesterna var jag med och tog fram formulär riktade till både testpersoner och deras anhöriga, för att förstå vilka funktioner som upplevdes som mest värdefulla, vilka frågor som fanns och vilken oro tekniken eventuellt väckte. Jag deltog även i tre resor till Vingåker där jag fick möta testdeltagarna och se lösningen användas i sitt faktiska sammanhang.",
          "Ahead of the pilot tests, I helped put together forms aimed at both test participants and their relatives, to understand which features felt most valuable, what questions came up, and what concerns the technology might raise. I also took part in three trips to Vingåker, where I got to meet the test participants and see the solution used in its actual context."
        ),
      ],
      imageKey: "IRIS_WORKSHOP_01",
      compactMedia: true,
    },
    {
      id: "final",
      numberLabel: "06",
      heading: text("Den slutliga upplevelsen", "Final experience"),
      body: [
        text(
          "När LIA-perioden närmade sig sitt slut var pilottesterna i full gång och onboardingflödet för både app och klocka var klart. Utöver appdesignen omfattade resultatet fysiska manualer och filmer som användes i kommunikation och marknadsföring.",
          "As the internship period drew to a close, the pilot tests were in full swing and the onboarding flow for both app and watch was finished. Beyond the app design, the outcome included physical manuals and films used in communication and marketing."
        ),
      ],
      imageGrid: ["IRIS_FINAL_01", "IRIS_FINAL_02"],
      compactMedia: true,
    },
    {
      id: "outcome",
      numberLabel: "07",
      heading: text("Resultat", "Outcome"),
      body: [
        text(
          "Resultatet efter åtta veckor var en lanserad app i App Store och Google Play, ett designsystem som teamet kunde fortsätta bygga vidare på, ett omarbetat och kraftigt förenklat gränssnitt på klockan, samt kompletta onboardingflöden och fysiska manualer redo för pilottester med seniorer i Vingåker. Formulären till testpersoner och anhöriga gav en tydlig bild av varför projektet är viktigt och vilken konkret skillnad lösningen kan göra för trygghet, både på individnivå och i ett större samhällsperspektiv.",
          "The outcome after eight weeks was an app launched in the App Store and Google Play, a design system the team could continue building on, a reworked and significantly simplified watch interface, and complete onboarding flows and physical manuals ready for pilot tests with seniors in Vingåker. The forms for test participants and relatives gave a clear picture of why the project matters and what concrete difference the solution can make for safety, both at the individual level and in a broader societal perspective."
        ),
      ],
    },
    {
      id: "reflection",
      numberLabel: "08",
      heading: text("Reflektion", "Reflection"),
      body: [
        text(
          "Min första LIA-period var en crash course i hur produktutveckling faktiskt ser ut när man bygger något som ska ut i verkligheten. Att få vara med och utveckla Care by Iris var inte bara lärorikt, det var genuint spännande eftersom jag fick kliva in i så många olika delar av processen och se hur allt hänger ihop.",
          "My first internship was a crash course in what product development actually looks like when you're building something meant for the real world. Getting to help develop Care by Iris wasn't just educational, it was genuinely exciting because I got to step into so many different parts of the process and see how it all connects."
        ),
        text(
          "Det jag tar med mig mest: hur mycket detaljer spelar roll när målgruppen är seniorer, språk, kontrast, textstorlek, tydlighet och tempo i både tal och skrift kan vara avgörande för att något ska fungera. Värdet av att träffa användare på riktigt: besöken i Vingåker gav mer insikter än vad gissningar, AI eller efterforskning någonsin kunnat ge, och det var nyttigt att behöva justera efter verkliga behov snarare än bara designlogik. Att design alltid är en del av ett större system, med samarbeten och kompromisser mellan design, utveckling och projektledning där prioritering, dokumentation och samsyn är avgörande. Och att \"good enough\" ibland är rätt: i en pilot och ett litet team handlar det ofta om att lösa rätt problem i rätt ordning, även om allt inte hinner bli pixelperfekt.",
          "What I take with me most: how much details matter when the audience is seniors, language, contrast, text size, clarity, and pacing in both speech and writing can be the difference between something working or not. The value of meeting real users: the visits to Vingåker gave more insight than guessing, AI, or research ever could, and it was useful to have to adjust for real needs rather than just design logic. That design is always part of a larger system, with collaboration and compromises between design, development, and project management, where prioritizing, documenting, and building shared understanding matter enormously. And that \"good enough\" is sometimes the right call: in a pilot and a small team, it's often about solving the right problem in the right order, even when there isn't time for everything to be pixel-perfect."
        ),
      ],
    },
  ],
};

/* -------------------------------------------------------------------- */
/* Digital Care                                                          */
/* -------------------------------------------------------------------- */

const digitalCare: Project = {
  slug: "digital-care",
  title: "Digital Care",
  company: "Sensapp",
  year: "2026",
  descriptor: text(
    "Att ge kommuner självservice i en plattform där varje minut ute hos en brukare räknas.",
    "Giving municipalities self-service in a platform where every minute out in the field counts."
  ),
  tags: ["UX Research", "Prototyping", "Usability Testing"],
  heroImageKey: "DC_HERO",
  accent: "#1f5fbf", // Digital Care blue — 5.4:1
  tlDr: text(
    "Digital Care (DC) är Sensapps device management platform, där både egen personal och kommunal personal hanterar enheter, larm och support. Jag fick i uppdrag att förbättra DC visuellt och funktionsmässigt, med möjlighet att köra en fullständig Design Thinking-process. Fyra intervjuer med fem personer i tre kommuner pekade ut självservice som det starkaste återkommande behovet. Jag byggde en HTML-prototyp med hjälp av Claude, testade den med samma deltagare, och lämnade en kravspecifikation för teamet att bygga vidare på.",
    "Digital Care (DC) is Sensapp's device management platform, where both internal and municipal staff manage devices, alarms, and support. I was tasked with improving DC both visually and functionally, with the chance to run a full Design Thinking process. Four interviews with five people across three municipalities pointed to self-service as the strongest recurring need. I built an HTML prototype with the help of Claude, tested it with the same participants, and delivered a requirements specification for the team to build on."
  ),
  meta: {
    role: text("UX Researcher / Product Designer", "UX Researcher / Product Designer"),
    timeline: text("LIA, vår 2026 (intervjuer 1–15 april)", "Internship, spring 2026 (interviews April 1–15)"),
    contribution: [
      text("UX-research", "UX research"),
      text("Intervjuer", "Interviews"),
      text("Prototyping (HTML)", "Prototyping (HTML)"),
      text("Användartester", "Usability testing"),
      text("Kravspecifikation", "Requirements specification"),
    ],
  },
  sections: [
    {
      id: "challenge",
      numberLabel: "01",
      heading: text("Utmaningen", "The challenge"),
      body: [
        text(
          "Digital Care är en device management platform (DMP) där tre olika typer av användare loggar in: Sensapps egen personal som konfigurerar enheter och löser supportärenden, administrativa chefsroller i kommunerna som övervakar sina brukares enheter, och hemtjänstpersonal ute i fält som svarar på larm och hjälper till med installation. Jag fick i uppdrag att förbättra DC både visuellt och funktionsmässigt.",
          "Digital Care is a device management platform (DMP) with three types of users logging in: Sensapp's own staff configuring devices and resolving support cases, administrative roles in municipalities overseeing their residents' devices, and home-care staff in the field responding to alarms and helping with installation. I was tasked with improving DC both visually and functionally."
        ),
        text(
          "Bakom uppdraget låg en affärsidé: att lägga över mer ansvar på kommunerna själva för att lösa de vanligaste supportärendena, vilket skulle avlasta Sensapps support och göra kommunerna mer självgående. Till skillnad från Bubblan hade jag här direkt tillgång till alla tre användargrupperna, vilket gjorde att jag kunde köra en fullständig Design Thinking-process från empati till användartest.",
          "Behind the brief was a business idea: shift more responsibility onto the municipalities themselves to resolve the most common support cases, easing the load on Sensapp's support team and making municipalities more self-sufficient. Unlike Bubblan, I had direct access to all three user groups here, letting me run a complete Design Thinking process from empathy through to usability testing."
        ),
      ],
    },
    {
      id: "research",
      numberLabel: "02",
      heading: text("Intervjuer och insikter", "Interviews and insights"),
      body: [
        text(
          "Min chef gav mig kontaktuppgifter till relevanta personer i tre kommuner som redan var kunder. Det blev fyra intervjuer med fem personer mellan den 1 och 15 april, genomförda via Teams utifrån en intervjuguide som godkänts av ledningen, och hållna öppna nog för att fånga både konkreta pain points och nya önskemål.",
          "My manager gave me contact details for relevant people in three municipalities that were already customers. This became four interviews with five people between April 1 and 15, conducted over Teams from an interview guide approved by leadership, kept open enough to surface both concrete pain points and new requests."
        ),
        text(
          "Det tydligaste och mest återkommande temat var självservice: möjligheten att själv byta operatör vid täckningsproblem, koppla på och av larmklockor, rensa gamla enheter, och justera tider för dörrlarm och kameror ute på plats hos en brukare. Andra teman var att startsidan visade att något var fel men inte vad eller hur man skulle gå vidare, och att enheter listades med serienummer istället för brukarens namn, vilket gjorde dem svåra att hitta i långa listor.",
          "The clearest and most recurring theme was self-service: being able to change operator during coverage issues, toggle alarm clocks on and off, remove old devices, and adjust door-alarm and camera timing while out on-site with a resident. Other themes were that the homepage showed something was wrong but not what or how to proceed, and that devices were listed by serial number instead of the resident's name, making them hard to find in long lists."
        ),
      ],
      imageKey: "DC_OLD_DASHBOARD",
    },
    {
      id: "learnings",
      numberLabel: "03",
      heading: text("Vad vi lärde oss", "What we learned"),
      body: [
        text(
          "Önskemålet om självservice var inte en abstrakt vilja att ha mer kontroll, utan knutet till konkreta situationer där personalen stod ute hos en brukare och inte kunde lösa problemet på plats. Det stödet de fick från Sensapps support beskrevs som mycket gott, men löste inte det akuta behovet i stunden.",
          "The wish for self-service wasn't an abstract desire for more control, but tied to concrete situations where staff stood on-site with a resident and couldn't solve the problem there and then. The support they got from Sensapp was described as very good, but didn't solve the immediate, in-the-moment need."
        ),
      ],
      insight: {
        observation: text(
          "Samtliga fyra intervjuer, oavsett kommun eller roll, efterfrågade samma typ av självservice-funktioner kopplade till specifika fältsituationer, inte generell kontroll över systemet.",
          "All four interviews, regardless of municipality or role, asked for the same kind of self-service features tied to specific field situations, not general control over the system."
        ),
        why: text(
          "Självservice visade sig vara en win-win: kommunen blir snabbare i fält samtidigt som Sensapps support frigörs till mer kvalificerade ärenden.",
          "Self-service turned out to be a win-win: the municipality becomes faster in the field while Sensapp's support gets freed up for more qualified cases."
        ),
        implication: text(
          "Prototypen prioriterade en tydligare informationsarkitektur, en dashboard som visar vad som behöver åtgärdas, och direkta vägar från avvikelse till självservice-åtgärd.",
          "The prototype prioritized a clearer information architecture, a dashboard showing what needs attention, and direct paths from anomaly to self-service action."
        ),
      },
    },
    {
      id: "direction",
      numberLabel: "04",
      heading: text("Från insikt till prototyp", "From insight to prototype"),
      body: [
        text(
          "Utifrån insikterna byggde jag en prototyp för en vidareutvecklad DC med fokus på de tydligaste problemen: självservice, bättre överblick och en kortare väg mellan avvikelse och åtgärd. Prototypen byggde jag inte i Figma utan i HTML, med hjälp av Claude, Anthropics AI-modell, något jag själv lyfter fram som avgörande för att jag hann hela cykeln från intervju till användartest inom LIA-perioden.",
          "Based on the insights, I built a prototype for an upgraded DC focused on the clearest problems: self-service, better overview, and a shorter path from anomaly to action. I built the prototype not in Figma but in HTML, with help from Claude, Anthropic's AI model, something I highlight myself as decisive in letting me complete the full cycle from interview to usability test within the internship period."
        ),
        text(
          "Jag byggde in en ny informationsarkitektur: en dashboard per kommun med tydliga statussiffror (aktiva, i lager, online, varning, offline), enheter kopplade till brukarens namn istället för serienummer, en detaljvy per enhet med direkta självservice-åtgärder som att byta operatör eller schemalägga ett platsbesök, och ett rollbaserat flöde för att lägga till ny personal med spårbarhetslogg.",
          "I built in a new information architecture: a per-municipality dashboard with clear status counts (active, in stock, online, warning, offline), devices linked to the resident's name instead of serial number, a per-device detail view with direct self-service actions like changing operator or scheduling a site visit, and a role-based flow for adding new staff with an audit log."
        ),
      ],
      imageKey: "DC_NEW_DASHBOARD",
    },
    {
      id: "designing",
      numberLabel: "05",
      heading: text("Prototyp och användartester", "Prototype and usability testing"),
      body: [
        text(
          "När prototypen var klar genomförde jag användartester med samma personer som deltagit i de första intervjuerna. Deltagarna fick uppgifter baserade på sitt dagliga arbete och fick även navigera fritt genom flödena, bland annat i detaljvyn för en enskild hubb med dess anslutna enheter och larmväg.",
          "Once the prototype was ready, I ran usability tests with the same people who'd taken part in the initial interviews. Participants were given tasks based on their daily work and also navigated freely through the flows, including the detail view for a single hub with its connected devices and alarm path."
        ),
      ],
      imageKey: "DC_DEVICE_DETAIL",
    },
    {
      id: "final",
      numberLabel: "06",
      heading: text("Mottagandet", "The reception"),
      body: [
        text(
          "Responsen var starkt positiv. Den nya informationsarkitekturen för enhetsflottan, dashboarden och flödet för att koppla enheter till brukare fick särskilt gott betyg, representanter från Vingåker uttryckte rakt av att de ville ha systemet så som prototypen visade det.",
          "The response was strongly positive. The new information architecture for the device fleet, the dashboard, and the flow for linking devices to residents were particularly well received, representatives from Vingåker said outright they wanted the system exactly as the prototype showed it."
        ),
        text(
          "Testerna gav också upphov till nya, oväntade önskemål: ett filter för ätlarm i händelseloggen, möjlighet att pausa kameror och sensorer för brukare som bor växelvis på olika adresser, och att kunna exportera senaste veckans loggar som PDF eller zip för uppföljning, en rutin Tjörns kommun redan använder i sin verksamhet.",
          "The tests also surfaced new, unanticipated requests: a filter for food/eating alarms in the event log, the ability to pause cameras and sensors for residents who split their time between addresses, and exporting the past week's logs as a PDF or zip file for follow-up, a routine already used in Tjörn kommun's operations."
        ),
      ],
      imageKey: "DC_ADD_USER",
    },
    {
      id: "outcome",
      numberLabel: "07",
      heading: text("Resultat", "Outcome"),
      body: [
        text(
          "Arbetet mynnade ut i en kravspecifikation som jag lämnade över till Sensapp, som teamet nu bygger vidare på. Det här var det sista jag hann med innan LIA-perioden tog slut, så prototypen är inte i produktion. Resultatet är en verifierad researchgrund och en testad riktning, inte en färdig funktion.",
          "The work resulted in a requirements specification that I handed over to Sensapp, which the team is now building on. This was the last thing I completed before the internship ended, so the prototype isn't in production. The outcome is a verified research foundation and a tested direction, not a shipped feature."
        ),
      ],
    },
    {
      id: "reflection",
      numberLabel: "08",
      heading: text("Reflektion", "Reflection"),
      body: [
        text(
          "Att ha direkt tillgång till användarna förändrade hela karaktären på arbetet jämfört med Bubblan-caset: jag kunde fråga, lyssna, bygga och testa om med samma personer. Samtidigt höll jag mig ödmjuk inför vad direktkontakten faktiskt levererade, deltagarna var redan vana DC-användare, anpassade till plattformens nuvarande logik, vilket gör skillnaden mellan vad användare säger och vad de faktiskt gör relevant att komma ihåg.",
          "Having direct access to users completely changed the character of the work compared to the Bubblan case: I could ask, listen, build, and retest with the same people. At the same time, I stayed humble about what direct contact actually delivered, participants were already experienced DC users, adapted to the platform's current logic, which makes the gap between what users say and what they actually do worth remembering."
        ),
        text(
          "En liten men talande observation: en av deltagarna, ny i rollen och utan erfarenhet av det gamla systemet, navigerade prototypen med större lätthet än flera betydligt mer rutinerade deltagare, inget vetenskapligt bevis, men en signal värd att notera. Skulle jag göra om arbetet skulle jag vilja observera personalen i sitt dagliga arbete snarare än bara höra dem berätta om det, och jag är tydlig med att AI-verktyget påskyndade produktion och iteration men aldrig ersatte den mänskliga närvaron i Teams-samtalen eller besöket hos min kontakt i Vingåker.",
          "One small but telling observation: one of the participants, new to the role and without experience of the old system, navigated the prototype more easily than several far more seasoned participants, not scientific proof, but a signal worth noting. If I were to redo the work, I'd want to observe staff in their daily work rather than just hear them describe it, and I'm clear that the AI tool sped up production and iteration but never replaced the human presence in the Teams calls or the visit to my contact in Vingåker."
        ),
      ],
    },
  ],
};

export const projects: Project[] = [bubblan, digitalCare, careByIris];

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
  // TryOn — also on John's Framer site.
  { slug: "tryon", title: "TryOn", imageKey: "TRYON_PREVIEW" },
  // Alpha Leap — school project: rebrand done for a real company.
  { slug: "alpha-leap", title: "Alpha Leap", imageKey: "ALPHA_LEAP_PREVIEW" },
  // Pitch Please — school project: website for a karaoke bar.
  { slug: "pitch-please", title: "Pitch Please", imageKey: "PITCH_PLEASE_PREVIEW" },
];
