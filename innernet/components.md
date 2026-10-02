<!-- quirq-wiki-generated repo=innernet dir=components -->

# innernet / components

Source: [components](https://github.com/quirq-ai/innernet/tree/main/components) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### search-box.tsx

The one search box, in two sizes. Suggestions come from our own /api/suggest route handler
(same origin, server-side search); nothing leaves this machine. Notable exports:
`SearchBox`. Wired into a Next.js app (App Router or Next APIs). Marked `'use client'` so it
runs in the browser.

[`components/search-box.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/search-box.tsx) · code · 8478 bytes

### sigil.tsx

Every folder gets a deterministic "sigil": a small aurora of three hues derived from its
slug, with its initial set in the display serif. Repos are round, projects are soft squares,
plain folders are muted. The same sigil appears in search results, suggestions, the
knowledge panel and the article infobox, so a project is recognisable by colour before its
name is read. Notable exports: `sigilHues`, `sigilGradient`, `sigilDot`, `Sigil`.

[`components/sigil.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/sigil.tsx) · code · 3044 bytes

### site-footer.tsx

Small print under results and Innerpedia pages: a few ways onward, how fresh the index is,
and how to refresh it. Home has its own, centred version. Notable exports: `SiteFooter`,
`FooterLink`. Wired into a Next.js app (App Router or Next APIs).

[`components/site-footer.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/site-footer.tsx) · code · 1783 bytes

### theme-toggle.tsx

type Mode = "system" | "light" | "dark"; const NEXT: Record = { system: "light", light:
"dark", dark: "system" }; const LABEL: Record = { system: "Theme: system", light: "Theme:
light", dark: "Theme: dark" } Notable exports: `ThemeToggle`. Marked `'use client'` so it
runs in the browser.

[`components/theme-toggle.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/theme-toggle.tsx) · code · 1979 bytes

### top-bar.tsx

Header for every page except home: wordmark, compact search, and the way across to the other
half of the site. Notable exports: `TopBar`. Wired into a Next.js app (App Router or Next
APIs).

[`components/top-bar.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/top-bar.tsx) · code · 1877 bytes

### wordmark.tsx

"innernet" and "Innerpedia" share one lockup: the display serif with the "inner" half in
italic, a quiet nod to the thing being searched being you. Notable exports: `Wordmark`,
`PediaMark`. Wired into a Next.js app (App Router or Next APIs).

[`components/wordmark.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/wordmark.tsx) · code · 1171 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
