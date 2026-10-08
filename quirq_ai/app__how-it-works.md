<!-- quirq-wiki-generated repo=quirq_ai dir=app/how-it-works -->

# quirq_ai / app/how-it-works

Source: [app/how-it-works](https://github.com/quirq-ai/quirq_ai/tree/main/app/how-it-works) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### beats.tsx

/** * The page that documents the machine rendering it. Five beats on the same * KEYFRAMES
track as every other stage page: * 0 centred hero · 1 drained monochrome (the current
pipeline) · * 2 spectrum floods back (the math) · 3 recedes upstage (the plan) · * 4 returns
centre (what the tree unlocks). */ Notable exports: `HowHero`, `HowPipeline`, `HowMath`,
`HowPlan`, `HowTree`. Marked `'use client'` so it runs in the browser.

[`app/how-it-works/beats.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/how-it-works/beats.tsx) · code · 10583 bytes

### page.tsx

export const metadata: Metadata = { title: "How it works", description: "How to write a
journey JSON for the .quirq folder: the shape of the file, the anatomy of a node, and what
each component affects, from the glass's pose to the legal edges of the walk.", } Notable
exports: `Page`, `metadata`.

[`app/how-it-works/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/how-it-works/page.tsx) · code · 1007 bytes

### story.ts

/** * The journey-authoring manual: how to write the JSON files in * .quirq/journeys, what
each component is, and what it affects. Facts mirror * app/journey/defs.tsx (the definition
model) and the /journey page's rules. */ export const STORY: BeatData[] = [ { index: 0, id:
"how-hero", layout: "center", title: ["A journey is", "one file."], glass: 1, lede: "
Notable exports: `STORY`.

[`app/how-it-works/story.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/app/how-it-works/story.ts) · code · 3794 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
