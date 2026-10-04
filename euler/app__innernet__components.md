<!-- quirq-wiki-generated repo=euler dir=app/innernet/components -->

# euler / app/innernet/components

Source: [app/innernet/components](https://github.com/quirq-ai/euler/tree/main/app/innernet/components) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### apple-icon.tsx

The home-screen icon: the favicon's aurora disc on warm paper, since iOS wants an opaque
square. Notable exports: `AppleIcon`, `size`. Wired into a Next.js app (App Router or Next
APIs).

[`app/innernet/components/apple-icon.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/apple-icon.tsx) · code · 822 bytes

### brand-nav.tsx

The quirq mark and the small links every header carries: back and forward through this tab's
trail and the way to its history, the field guide, quirq, and the code on GitHub. Plain
links and buttons; nothing here fetches. Notable exports: `QuirqMark`, `QuirqHome`,
`BrandLinks`, `QUIRQ_URL`, `GITHUB_URL`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/brand-nav.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/brand-nav.tsx) · code · 4141 bytes

### demo-banner.tsx

The one line every page of the demo opens with: what this is, whose folders these are, where
your history goes, and where to get an Innernet of your own. Only rendered in the demo
(lib/mode.ts).

[`app/innernet/components/demo-banner.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/demo-banner.tsx) · code · 4092 bytes

### page-sigil.tsx

A page's identity as a server component: its own logo where the index found one (drawn with
<img> from /api/logo, see lib/logo.ts), its letter sigil otherwise. Takes the page or its
slug. Use it wherever a server component shows a page. Client components keep <Sigil> and
are handed a logo's address only on purpose (the Innerpedia globe, the search box's
suggestions), never a whole page by accident. Notable exports: `PageSigil`.

[`app/innernet/components/page-sigil.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/page-sigil.tsx) · code · 1124 bytes

### quirq-credit.tsx

A quiet attribution shared by the two footer layouts. Notable exports: `BrandCredit`.

[`app/innernet/components/quirq-credit.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/quirq-credit.tsx) · code · 498 bytes

### search-box.tsx

The one search box, in two sizes. Suggestions come from our own /api/suggest route handler
(same origin, server-side search); nothing leaves this machine. Notable exports:
`SearchBox`. Wired into a Next.js app (App Router or Next APIs). Marked `'use client'` so it
runs in the browser.

[`app/innernet/components/search-box.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/search-box.tsx) · code · 8731 bytes

### sigil.tsx

Every folder gets a deterministic "sigil": a small aurora of three hues derived from its
slug, with its initial set in the display serif. Repos are round, projects are soft squares,
plain folders are muted. The same sigil appears in search results, suggestions, the
knowledge panel and the article infobox, so a project is recognisable by colour before its
name is read.

[`app/innernet/components/sigil.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/sigil.tsx) · code · 5352 bytes

### site-footer.tsx

Small print under results and Innerpedia pages: a few ways onward, how fresh the index is,
and how to refresh it. Home has its own, centred version. The demo's index is built before
it is deployed, so there is nothing for a reader to refresh. Notable exports: `SiteFooter`,
`FooterLink`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/site-footer.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/site-footer.tsx) · code · 2527 bytes

### theme-toggle.tsx

type Mode = "system" | "light" | "dark"; const NEXT: Record = { system: "light", light:
"dark", dark: "system" }; const LABEL: Record = { system: "Theme: system", light: "Theme:
light", dark: "Theme: dark" } Notable exports: `ThemeToggle`. Marked `'use client'` so it
runs in the browser.

[`app/innernet/components/theme-toggle.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/theme-toggle.tsx) · code · 1979 bytes

### top-bar.tsx

Header for every page except home: the quirq mark home, the wordmark, compact search, the
way across to the other half of the site, back and forward through this tab's trail with the
way to its history, and the guide, quirq and GitHub links. Notable exports: `TopBar`. Wired
into a Next.js app (App Router or Next APIs).

[`app/innernet/components/top-bar.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/top-bar.tsx) · code · 2298 bytes

### wordmark.tsx

"innernet" and "Innerpedia" share one lockup: the display serif with the "inner" half in
italic, a quiet nod to the thing being searched being you. Notable exports: `Wordmark`,
`PediaMark`. Wired into a Next.js app (App Router or Next APIs).

[`app/innernet/components/wordmark.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/wordmark.tsx) · code · 1171 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
