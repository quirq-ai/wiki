<!-- quirq-wiki-generated repo=quirq_ai dir=lib -->

# quirq_ai / lib

Source: [lib](https://github.com/quirq-ai/quirq_ai/tree/main/lib) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### beat-registry.ts

Phase 2 of the list-to-tree migration: sections register themselves. Notable exports:
`registerBeat`, `beatEntries`, `onBeatsChange`, `beatsResized`, `BeatEntry`.

[`lib/beat-registry.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/beat-registry.ts) · code · 2392 bytes

### chart-figure.ts

/** * Chart paragraphs into figures. * The research notes describe their charts in prose and
carry the numbers in * the same sentence: "Codex / Claude by environment: E0 228k / 606k; E1
256k / * 639k". This module reads that sentence and returns a figure spec, so the * visual
is generated from the note rather than drawn beside it. Nothing is * invented: ever Notable
exports: `figureFromChart`.

[`lib/chart-figure.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/chart-figure.ts) · code · 6299 bytes

### docs.ts

The documentation index. Notable exports: `DocEntry`, `DocSection`, `SECTIONS`,
`RELEASE_NOTES`.

[`lib/docs.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/docs.ts) · code · 7248 bytes

### golden.ts

/** * Phase 0 of the list-to-tree migration: the golden harness. * Captures the scroll-to-
beat mapping and the sampled keyframe values at * fixed scroll fractions, from the live
runtime (not a reimplementation), so * every later refactor can be proven a no-op by diffing
two captures. * Dev-only: exposed as window.__golden() by the scroll runtime. Baselines *
Notable exports: `captureGolden`, `GoldenSample`, `Golden`.

[`lib/golden.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/golden.ts) · code · 2740 bytes

### lighting.ts

Every value that controls how bright the page is, in one place. Notable exports:
`LightingPreset`, `LIGHTING`, `Lighting`, `LIGHT`, `glsl`.

[`lib/lighting.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/lighting.ts) · code · 4308 bytes

### products.ts

The products page as data. Notable exports: `APP_URL`, `Mode`, `MODES`, `Harness`,
`SETUP_LABEL`, `HARNESSES`, `HARNESS_CAPABILITIES`, `LAYERS`, and 9 more.

[`lib/products.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/products.ts) · code · 9931 bytes

### prose.ts

The long-form body vocabulary, shared by every reading surface. Notable exports: `Block`,
`headingId`.

[`lib/prose.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/prose.ts) · code · 1007 bytes

### research-journey.ts

import { validateDefinition, type JourneyDefinition, type JourneyNodeSpec, type PoseName, }
from "@/app/journey/defs"; /** * Interactive reading: one research note in, one journey
document out.

[`lib/research-journey.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/research-journey.ts) · code · 22214 bytes

### research.ts

Research posts as data. The /research index, its topic archives, its paginated pages, and
the /research/[slug] articles render entirely from this module; adding a post here is the
whole job. Notable exports: `Topic`, `Banner`, `Post`, `TopicMeta`, `TOPICS`, `POSTS`.

[`lib/research.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/research.ts) · code · 239247 bytes

### spectrum.ts

The brand spectrum, warm → cool. Value is colour; cost is monochrome. Notable exports:
`SPECTRUM`, `BEATS`, `Beat`.

[`lib/spectrum.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/spectrum.ts) · code · 339 bytes

### stage-store.ts

A module-level store instead of React context. Notable exports: `STAGE_DEMO_DEFAULTS`,
`stage`, `StageForm`, `StageStore`.

[`lib/stage-store.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/stage-store.ts) · code · 2076 bytes

### whitepaper.ts

The whitepaper, as readable content. Notable exports: `WHITEPAPER`, `PaperSection`,
`SECTIONS`, `readingMinutes`.

[`lib/whitepaper.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/whitepaper.ts) · code · 45642 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
