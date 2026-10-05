<!-- quirq-wiki-generated repo=quirq_ai dir=app/dynamic -->

# quirq_ai / app/dynamic

Source: [app/dynamic](https://github.com/quirq-ai/quirq_ai/tree/main/app/dynamic) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### beats.tsx

/** * This page practices what it preaches: the middle is nothing but the STORY * array
below, rendered by one generic StoryBeat component inside the static * shell. The page
itself still prerenders to static HTML at build time. */ Notable exports: `StoryBeat`.
Marked `'use client'` so it runs in the browser.

[`app/dynamic/beats.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/dynamic/beats.tsx) · code · 5871 bytes

### page.tsx

export const metadata: Metadata = { title: "Dynamic main, static shell", description: "How
the middle of a stage page swaps while everything around it stays static: composition, data-
driven beats, deferred slots, and the contract the middle must honor.", } Notable exports:
`Page`, `metadata`.

[`app/dynamic/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/dynamic/page.tsx) · code · 1243 bytes

### story.ts

The middle of /dynamic as pure data. This module has no client imports, so the server page
can map over it; the client renderer imports the type. Notable exports: `STORY`.

[`app/dynamic/story.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/app/dynamic/story.ts) · code · 4049 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
