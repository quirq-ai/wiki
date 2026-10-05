<!-- quirq-wiki-generated repo=innernet dir=components -->

# innernet / components

Source: [components](https://github.com/quirq-ai/innernet/tree/main/components) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### brand-nav.tsx

The quirq mark and the small links every header carries: back and forward through this tab's
trail and the way to its history, the field guide, sources, quirq, and the code on GitHub.
Sources manages this machine's indexes and storage. Notable exports: `QuirqMark`,
`QuirqHome`, `BrandLinks`, `QUIRQ_URL`, `GITHUB_URL`. Wired into a Next.js app (App Router
or Next APIs).

[`components/brand-nav.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/brand-nav.tsx) · code · 5008 bytes

### demo-banner.tsx

The one line every page of the demo opens with: what this is, whose folders these are, where
your history goes, and where to get an Innernet of your own. Only rendered in the demo
(lib/mode.ts).

[`components/demo-banner.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/demo-banner.tsx) · code · 4092 bytes

### page-sigil.tsx

A page's identity as a server component: its own logo where the index found one (drawn with
<img> from /api/logo, see lib/logo.ts), its letter sigil otherwise. Takes the page or its
slug. Use it wherever a server component shows a page. Client components keep <Sigil> and
are handed a logo's address only on purpose (the Innerpedia globe, the search box's
suggestions), never a whole page by accident. Notable exports: `PageSigil`.

[`components/page-sigil.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/page-sigil.tsx) · code · 1124 bytes

### quirq-credit.tsx

A quiet attribution shared by the two footer layouts. Notable exports: `BrandCredit`.

[`components/quirq-credit.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/quirq-credit.tsx) · code · 498 bytes

### search-box.tsx

The one search box, in two sizes. Suggestions come from our own /api/suggest route handler
(same origin, server-side search); nothing leaves this machine. Notable exports:
`SearchBox`. Wired into a Next.js app (App Router or Next APIs). Marked `'use client'` so it
runs in the browser.

[`components/search-box.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/search-box.tsx) · code · 8771 bytes

### sigil.tsx

Every folder gets a deterministic "sigil": a small aurora of three hues derived from its
slug, with its initial set in the display serif. Repos are round, projects are soft squares,
agents' folders are octagons, plain folders are muted. The same sigil appears in search
results, suggestions, the knowledge panel and the article infobox, so a project is
recognisable by colour before its name is read.

[`components/sigil.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/sigil.tsx) · code · 5781 bytes

### site-footer.tsx

Small print under results and Innerpedia pages: a few ways onward, how fresh the index is,
and how to refresh it. Home has its own, centred version. The demo's index is built before
it is deployed, so there is nothing for a reader to refresh. Notable exports: `SiteFooter`,
`FooterLink`. Wired into a Next.js app (App Router or Next APIs).

[`components/site-footer.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/site-footer.tsx) · code · 2527 bytes

### theme-toggle.tsx

type Mode = "system" | "light" | "dark"; const NEXT: Record = { system: "light", light:
"dark", dark: "system" }; const LABEL: Record = { system: "Theme: system", light: "Theme:
light", dark: "Theme: dark" } Notable exports: `ThemeToggle`. Marked `'use client'` so it
runs in the browser.

[`components/theme-toggle.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/theme-toggle.tsx) · code · 1979 bytes

### top-bar.tsx

Header for every page except home: the quirq mark home, the wordmark, compact search, the
way across to the other half of the site, back and forward through this tab's trail with the
way to its history, and the guide, quirq and GitHub links. Notable exports: `TopBar`. Wired
into a Next.js app (App Router or Next APIs).

[`components/top-bar.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/top-bar.tsx) · code · 2298 bytes

### wordmark.tsx

"innernet" and "Innerpedia" share one lockup: the display serif with the "inner" half in
italic, a quiet nod to the thing being searched being you. Notable exports: `Wordmark`,
`PediaMark`. Wired into a Next.js app (App Router or Next APIs).

[`components/wordmark.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/wordmark.tsx) · code · 1171 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
