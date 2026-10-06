<!-- quirq-wiki-generated repo=quirq_ai dir=app/engine -->

# quirq_ai / app/engine

Source: [app/engine](https://github.com/quirq-ai/quirq_ai/tree/main/app/engine) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### demos.tsx

/** * The /engine live demos. Each is an interlude, not a beat: no data-beat, no *
registration, so the scroll runtime ignores them and the glass keeps * gliding from one
story beat to the next while the visitor plays. Each demo * writes the stage store on
interaction and restores the defaults on unmount, * so no other page ever sees an override.

[`app/engine/demos.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/engine/demos.tsx) · code · 16036 bytes

### page.tsx

export const metadata: Metadata = { title: "The engine", description: "The scene behind
every quirq page, taken apart: the mobius ring, the light it bends, the dark that keeps
words readable, and how the three compose into nodes.", } Notable exports: `Page`,
`metadata`.

[`app/engine/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/engine/page.tsx) · code · 1403 bytes

### story.ts

/** The engine: the scene behind every page, taken apart. Story data rendered by StoryBeat.
*/ export const STORY: BeatData[] = [ { index: 0, id: "engine-hero", layout: "center",
title: ["One scene,", "three parts."], glass: 1, lede: "Every staged page here is played by
the same engine: a glass ring, the light it bends, and the dark that keeps the words read
Notable exports: `STORY`.

[`app/engine/story.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/app/engine/story.ts) · code · 4177 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
