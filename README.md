# John Åkerberg — Portfolio

Production build of John Åkerberg's UX / Product Designer portfolio.
Next.js 16 (App Router) · TypeScript · React 19 · Swedish + English.

---

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/sv`.

Other commands:

```bash
npm run build       # production build
npm run start        # run the production build
npm run typecheck    # tsc --noEmit
npm run lint          # next lint
```

> **Note on this delivery:** this code was written in an offline sandbox
> with no network access, so `npm install` / `next build` could not be
> run here to verify the build end-to-end. Every file was written and
> reviewed carefully, and a syntax-level TypeScript pass (ignoring
> module-resolution, since `node_modules` isn't installed here) found
> no errors. Please run `npm install && npm run build` after unzipping
> to catch anything a live build would surface, and let me know if
> anything needs a fix.

Requires Node.js 20.9+ (Next.js 16 requirement).

---

## Architecture

- **Routing:** `app/[lang]/...` with `sv` and `en` as the only locales.
  `proxy.ts` (Next.js 16's renamed `middleware.ts`) redirects any
  unprefixed path to its `/sv` equivalent.
- **Content:** centralized in `content/` — `translations.ts` (UI
  strings), `projects.ts` (case study content), `site.ts` (contact
  info, About page copy), `image-registry.ts` (every image slot).
  Components never hard-code Swedish or English text.
- **Images:** every image position renders through
  `components/ui/ImageSlot.tsx`. While `src` is `null` in the
  registry it renders a labeled, aspect-ratio-correct placeholder —
  never a broken image. To insert a real image, edit
  `content/image-registry.ts` only (see below).
- **Styling:** plain CSS with CSS Modules per component, design
  tokens in `styles/globals.css`. No UI framework or CSS-in-JS
  dependency.
- **Case studies:** one data-driven template
  (`app/[lang]/work/[slug]/page.tsx` + `components/case-study/*`)
  renders all three projects from `content/projects.ts`.

## Adding a real image later

Open `content/image-registry.ts`, find the key (e.g. `BUBBLAN_HERO`),
and change:

```ts
src: null,
```

to:

```ts
src: "https://your-host.com/bubblan-hero.webp",
```

If the URL's host isn't already allowed, add it to `remotePatterns` in
`next.config.ts`. No other file needs to change — the surrounding
layout and aspect ratio stay identical.

---

## IMAGES NEEDED

**Global**
- `PORTRAIT_01` — 4:5

**Bubblan**
- `BUBBLAN_HERO` — 16:10
- `BUBBLAN_OLD_UI` — 3:4
- `BUBBLAN_NEW_HOME` — 16:10
- `BUBBLAN_NEW_CONTACTS` — 3:4

Real screenshots exist for this case in the examensarbete's bilagor
(old Bubblan UI, new Bubblan home + contacts screens) — extract them
from the PDF and drop into `public/images/` to replace the
placeholders.

**Digital Care**
- `DC_HERO` — 16:10
- `DC_OLD_DASHBOARD` — 16:10
- `DC_NEW_DASHBOARD` — 16:10
- `DC_DEVICE_DETAIL` — 3:4
- `DC_ADD_USER` — 3:4

Real screenshots exist for this case too (old DC dashboard, new DC
dashboard, Climax device detail, add-user admin flow) — same source
as above.

**Care by Iris**
- `IRIS_HERO` — 16:10
- `IRIS_CONTEXT_01` — 4:3
- `IRIS_RESEARCH_01` — 3:2
- `IRIS_WORKSHOP_01` — 4:3
- `IRIS_ONBOARDING_01` — 9:16
- `IRIS_FINAL_01` — 16:10
- `IRIS_FINAL_02` — 3:2

**Explorations**
- `VOYANT_PREVIEW` — 4:3
- `ALPHA_LEAP_PREVIEW` — 4:3
- `VELOX_PREVIEW` — 4:3

---

## CONTENT NEEDED

**Site-wide** (`content/site.ts`)
- Real contact email (currently a placeholder)
- Real LinkedIn URL (currently a placeholder)
- Real CV file at `public/cv/` + confirm the filename in `contact.cvHref`
- Final production domain (currently a placeholder, used for canonical/OG URLs)

**About page** (`content/site.ts` → `aboutContent`)
- Second and third paragraphs about John's background and what he's looking for

**Bubblan** and **Digital Care**
- Content is filled in from John's LIA reflection and examensarbete
  ("Att designa för den man inte når") — no TODOs remain in
  `content/projects.ts` for these two cases
- Still needed: the real screenshots from the examensarbete's bilagor
  (see IMAGES NEEDED above)

**Care by Iris**
- Verified TL;DR
- Verified challenge, research methods, and findings
- Verified insight
- Verified outcome and reflection

**Selected Explorations**
- Short, verified descriptions for Voyant, Alpha Leap and Velox

All of the above are marked with `TODO` directly in `content/projects.ts`
and `content/site.ts` — search for `TODO` in the codebase to find every
instance.

---

## Accessibility notes

Built to WCAG 2.2 AA throughout: semantic landmarks, visible
`:focus-visible` styling, a skip link targeting `#main-content`,
keyboard-operable mobile menu (`Escape` closes and returns focus),
`prefers-reduced-motion` support, and locale-aware `hreflang` /
`aria-current` on the language switcher. Manual verification (keyboard
run-through, 200% zoom, 320px reflow, screen reader pass) is still
recommended before launch — the notes in the brief's section 69 QA
checklist are the right list to work through.
