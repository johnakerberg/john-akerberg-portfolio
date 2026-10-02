# John Åkerberg Portfolio — project context

Bilingual (Swedish/English) portfolio for John Åkerberg, a UX / Product
Designer based in Gothenburg. Built from a detailed 83-section production
brief covering architecture, i18n, accessibility and design system — the
brief's rules below should generally be followed rather than reinvented.

## Status

- **Live** on Vercel (free `.vercel.app` subdomain — a custom domain
  hasn't been purchased yet, that's a deliberate later step).
- Connected to GitHub (`github.com/johnakerberg/john-akerberg-portfolio`),
  auto-deploys on every push to `main`.
- Clean production build: 14/14 static pages generate with no errors.

## Stack

- Next.js 16 (App Router, Turbopack), TypeScript, React 19
- Plain CSS with CSS Modules — **no Tailwind or UI framework**, this was
  a deliberate choice to avoid unnecessary dependencies
- `next/font/google` for Geist / Geist Mono
- `proxy.ts` (Next 16's renamed `middleware.ts`) redirects any path
  without a locale prefix to `/sv` (the default locale)

## Architecture — where things live

- `app/[lang]/...` — all routes are locale-prefixed (`sv` | `en`).
  Pages: home, `/about`, `/work/[slug]` (3 case studies), `not-found`.
- `content/` — **all copy and data is centralized here**, never
  hard-coded inside components:
  - `translations.ts` — UI string dictionary (sv/en)
  - `projects.ts` — typed case study content: Together by Iris
    (flagship, shown first), Care by Iris, TryOn, plus Explorations
    (Voyant, Alpha Leap, Velox)
  - `site.ts` — contact info, About page copy, site metadata
  - `image-registry.ts` — every image slot: key, alt text (sv/en),
    aspect ratio, and `src` (null = placeholder)
- `components/ui|layout|home|case-study/` — organized by domain
- `lib/i18n.ts`, `lib/paths.ts` — locale helpers (never duplicate
  path-building logic in a component; use `localePath()`)

## Design system (from the brief — follow it, don't drift)

- Colors: warm off-white bg `#F4F2ED`, dark `#111111`, green accent
  `#3E513F` used **sparingly** (not a green-branded site)
- Typography does most of the visual work: Geist grotesk, no serif
  body text, fluid `clamp()` sizing
- Explicitly **not allowed**: gradients, glassmorphism, glow effects,
  carousels, image lightbox, fake testimonials/client logos/metrics,
  skill percentage bars, large SaaS-style shadows
- **Exception (John, 2026-10):** "liquid glass" is allowed for the
  "where am I" markers only: nav pill, SV/EN switcher, mobile menu
  (tokens `--glass-*` in globals.css). Don't spread it elsewhere.
- CV PDFs in `public/cv/` are generated with `npm run cv:pdf` (dev
  server running) — re-run after editing `content/cv.ts`.
- Prefer borders over shadows; radius 6–14px
- WCAG 2.2 AA throughout: skip link, visible `:focus-visible`,
  keyboard nav, `prefers-reduced-motion` support, semantic landmarks

## Image workflow — the pattern to keep using

Never put an image URL directly in a component. To add a real image:

1. Drop the file in `public/images/`
2. In `content/image-registry.ts`, change that key's `src: null` to
   `src: "/images/filename.jpg"`

Only touch `next.config.ts` (`remotePatterns`) if an image is hosted
on an external URL instead of `public/images/`.

## Known TODOs (search the codebase for `TODO`)

- Real contact email, LinkedIn URL, CV file — currently placeholders
  in `content/site.ts`
- Real production domain — currently a placeholder in
  `content/site.ts` (`siteConfig.url`)
- Verified case-study content (research findings, outcomes,
  reflections) for all three projects — currently placeholder text.
  **Do not invent facts, metrics, quotes, or outcomes** — the brief
  is explicit about this; mark anything unverified with `TODO`
- About page: 2nd and 3rd paragraph
- Explorations descriptions (Voyant, Alpha Leap, Velox)
- All ~27 image slots across the site are still placeholders

## Constraints to respect when making changes

- Don't invent project facts, metrics, quotes, or outcomes
- Don't add carousels, lightboxes, fake testimonials/logos/metrics,
  or skill rating bars
- Swedish stays the default locale; keep both languages in sync when
  changing UI copy
- Maintain WCAG 2.2 AA (focus states, semantic HTML, alt text,
  keyboard access) in anything new
