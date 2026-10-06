<!-- quirq-wiki-generated repo=quirq_ai dir=components/story -->

# quirq_ai / components/story

Source: [components/story](https://github.com/quirq-ai/quirq_ai/tree/main/components/story) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### figure.tsx

/** * Figures: measured data as a visual, rendered from a plain JSON spec. * Two shapes, two
jobs. bars compares a handful of series over named * categories and is built out of the DOM,
not SVG: the labels stay real * selectable text at the site's own type scale, they reflow on
a phone without * a viewBox fighting them, and they survive with no JavaScript. m Notable
exports: `FigureView`.

[`components/story/figure.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/story/figure.tsx) · code · 10076 bytes

### story-beat.tsx

/** * One generic component renders any story beat from its data. /dynamic, * /scenes and
the /editor all compose their middles from this. */ Notable exports: `StoryBeat`. Marked
`'use client'` so it runs in the browser.

[`components/story/story-beat.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/story/story-beat.tsx) · code · 6073 bytes

### types.ts

The data shape of a story beat: the vocabulary the StoryBeat renderer understands. Server-
safe (no client imports), so pages can define their middles as plain data and map over them.
Notable exports: `FigureSeries`, `FigureMark`, `Figure`, `BeatData`.

[`components/story/types.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/components/story/types.ts) · code · 2707 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
