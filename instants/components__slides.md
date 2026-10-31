<!-- quirq-wiki-generated repo=instants dir=components/slides -->

# instants / components/slides

Source: [components/slides](https://github.com/quirq-ai/instants/tree/main/components/slides) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### carousel.tsx

Native scroll-snap carousel for a post's slides: swipe on touch, buttons and arrow keys on
desktop, a segment indicator labeled with slide types. Notable exports: `SlideCarousel`,
`SlideCarouselHandle`, `SlideCarouselApi`. Marked `'use client'` so it runs in the browser.

[`components/slides/carousel.tsx`](https://github.com/quirq-ai/instants/blob/main/components/slides/carousel.tsx) · code · 8000 bytes

### chart.tsx

Hand-built SVG charts for chart slides. The viewBox is in slide logical px, so text and
strokes scale with the card like everything else. Notable exports: `niceScale`, `fmt`,
`SlideChart`.

[`components/slides/chart.tsx`](https://github.com/quirq-ai/instants/blob/main/components/slides/chart.tsx) · code · 10874 bytes

### code-tokens.ts

A tiny line tokenizer for syntax-ish highlighting on code slides. Good enough for JS/TS,
Python, Rust, Go, shell, SQL and JSON at a glance. Notable exports: `tokenize`, `Token`.

[`components/slides/code-tokens.ts`](https://github.com/quirq-ai/instants/blob/main/components/slides/code-tokens.ts) · code · 2290 bytes

### export.ts

PNG export for live slides. Renders the slide node at its 1080x1350 design size. Notable
exports: `exportSlidePng`, `downloadSlide`, `slideFile`.

[`components/slides/export.ts`](https://github.com/quirq-ai/instants/blob/main/components/slides/export.ts) · code · 1948 bytes

### fixtures.ts

Fixtures for the /dev/slides visual QA gallery. Covers every slide type plus edge cases.
Notable exports: `FIXTURE_ACCENTS`, `FIXTURE_SOURCES`, `FIXTURES`.

[`components/slides/fixtures.ts`](https://github.com/quirq-ai/instants/blob/main/components/slides/fixtures.ts) · code · 9773 bytes

### index.ts

export { Slide, slideHeading } from "./slide"; export { SlideCarousel, type
SlideCarouselHandle, type SlideCarouselApi } from "./carousel"; export { SlideThumb } from
"./thumb"; export { exportSlidePng, downloadSlide } from "./export"; export { slidePalette,
SLIDE_LABELS } from "./palette" Notable exports: `Slide`, `slideHeading`, `SlideCarousel`,
`type SlideCarouselHandle`, `type SlideCarouselApi`, `SlideThumb`, `exportSlidePng`

[`components/slides/index.ts`](https://github.com/quirq-ai/instants/blob/main/components/slides/index.ts) · code · 292 bytes

### palette.ts

Accent-derived colors and sizing helpers for slides. Slides are designed at a fixed
1080x1350 logical size; `u(n)` converts logical px to container units. Notable exports:
`slidePalette`, `sizeByLength`, `SLIDE_W`, `SLIDE_H`, `u`, `SlidePalette`, `clamp`,
`SLIDE_LABELS`.

[`components/slides/palette.ts`](https://github.com/quirq-ai/instants/blob/main/components/slides/palette.ts) · code · 3232 bytes

### slide.tsx

Live React renderer for every Slide type. Designed at 1080x1350 logical px and scaled with
container query units, so a slide looks the same at any width. Notable exports:
`slideHeading`, `Slide`. Marked `'use client'` so it runs in the browser.

[`components/slides/slide.tsx`](https://github.com/quirq-ai/instants/blob/main/components/slides/slide.tsx) · code · 25392 bytes

### thumb.tsx

/** Static, non-interactive slide preview for grids. */ export function SlideThumb({ slide,
accent, title, className }: { slide?: SlideData; accent: string; title?: string; className?:
string }) { return ( Notable exports: `SlideThumb`.

[`components/slides/thumb.tsx`](https://github.com/quirq-ai/instants/blob/main/components/slides/thumb.tsx) · code · 651 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
