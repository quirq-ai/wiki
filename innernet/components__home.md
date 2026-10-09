<!-- quirq-wiki-generated repo=innernet dir=components/home -->

# innernet / components/home

Source: [components/home](https://github.com/quirq-ai/innernet/tree/main/components/home) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### ask-an-ai.tsx

The card is set in the field guide's grammar: its plate frame, labels and commands. Notable
exports: `AskAnAiRow`, `AskAnAiCard`, `AI_PROMPT`.

[`components/home/ask-an-ai.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/home/ask-an-ai.tsx) · code · 12874 bytes

### example-queries.tsx

A quiet line of operator examples, so the syntax is learnt by clicking rather than reading.
Each is shown only when this index has something for it to find. Notable exports:
`ExampleQueries`. Wired into a Next.js app (App Router or Next APIs).

[`components/home/example-queries.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/home/example-queries.tsx) · code · 1479 bytes

### guide-cue.tsx

The foot of the home page's first screen: a quiet way down to the field guide, which begins
just below. A hairline with a drop of ink running down it (still for readers who ask for
less motion). Notable exports: `GuideCue`.

[`components/home/guide-cue.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/home/guide-cue.tsx) · code · 703 bytes

### hero-search.tsx

The hero search box and its two quiet buttons. SearchBox owns its form, so the Search button
reaches in and submits it; with nothing typed it just hands focus back. Notable exports:
`HeroSearch`. Wired into a Next.js app (App Router or Next APIs). Marked `'use client'` so
it runs in the browser.

[`components/home/hero-search.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/home/hero-search.tsx) · code · 1581 bytes

### home-footer.tsx

Small print at the foot of the home page, after the field guide: the way into Innerpedia,
back to the guide and the search, how fresh the index is, and how to refresh it. The demo's
index is built before it is deployed, so it says when and from where, and leaves out the
refresh. The theme toggle lives in the page's header. Notable exports: `HomeFooter`. Wired
into a Next.js app (App Router or Next APIs).

[`components/home/home-footer.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/home/home-footer.tsx) · code · 2967 bytes

### home.css

The home page's own motion: the cue at the foot of the first screen, and the hand-off
Leading class selectors include `home-cue-line`. Defines or consumes CSS custom properties
(design tokens).

[`components/home/home.css`](https://github.com/quirq-ai/innernet/blob/main/components/home/home.css) · code · 1901 bytes

### missing-index.tsx

Shown in place of the search box before the first `pnpm index`: plain words, one command.
Notable exports: `MissingIndex`.

[`components/home/missing-index.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/home/missing-index.tsx) · code · 1496 bytes

### recently-touched.tsx

The articles you worked on last. `modified` bubbles up the tree, so a container shares its
timestamp with whichever project inside it changed; skip those and keep the project where
the work actually happened. Notable exports: `recentlyTouched`, `RecentlyTouched`. Wired
into a Next.js app (App Router or Next APIs).

[`components/home/recently-touched.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/home/recently-touched.tsx) · code · 4651 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
