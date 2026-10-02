<!-- quirq-wiki-generated repo=innernet dir=components/home -->

# innernet / components/home

Source: [components/home](https://github.com/quirq-ai/innernet/tree/main/components/home) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### example-queries.tsx

A quiet line of operator examples, so the syntax is learnt by clicking rather than reading.
Each is shown only when this index has something for it to find. Notable exports:
`ExampleQueries`. Wired into a Next.js app (App Router or Next APIs).

[`components/home/example-queries.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/home/example-queries.tsx) · code · 1479 bytes

### hero-search.tsx

The hero search box and its two quiet buttons. SearchBox owns its form, so the Search button
reaches in and submits it; with nothing typed it just hands focus back. Notable exports:
`HeroSearch`. Wired into a Next.js app (App Router or Next APIs). Marked `'use client'` so
it runs in the browser.

[`components/home/hero-search.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/home/hero-search.tsx) · code · 1581 bytes

### home-footer.tsx

Small print at the foot of the home page: the way into Innerpedia, how fresh the index is,
and how to refresh it. Notable exports: `HomeFooter`. Wired into a Next.js app (App Router
or Next APIs).

[`components/home/home-footer.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/home/home-footer.tsx) · code · 2133 bytes

### missing-index.tsx

Shown in place of the search box before the first `pnpm index`: plain words, one command.
Notable exports: `MissingIndex`.

[`components/home/missing-index.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/home/missing-index.tsx) · code · 1061 bytes

### recently-touched.tsx

The articles you worked on last. `modified` bubbles up the tree, so a container shares its
timestamp with whichever project inside it changed; skip those and keep the project where
the work actually happened. Notable exports: `recentlyTouched`, `RecentlyTouched`. Wired
into a Next.js app (App Router or Next APIs).

[`components/home/recently-touched.tsx`](https://github.com/quirq-ai/innernet/blob/main/components/home/recently-touched.tsx) · code · 4544 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
