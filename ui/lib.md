<!-- quirq-wiki-generated repo=ui dir=lib -->

# ui / lib

Source: [lib](https://github.com/quirq-ai/ui/tree/main/lib) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### category-meta.ts

Category order and copy for the catalog. Shapes live in components/shapes/<id>/index.tsx.
Notable exports: `CATEGORY_META`, `CategoryId`.

[`lib/category-meta.ts`](https://github.com/quirq-ai/ui/blob/main/lib/category-meta.ts) · code · 2176 bytes

### cn.ts

export function cn(...inputs: ClassValue[]) { return clsx(inputs); } Notable exports: `cn`.

[`lib/cn.ts`](https://github.com/quirq-ai/ui/blob/main/lib/cn.ts) · code · 118 bytes

### expected-shapes.json

JSON document `expected-shapes.json` whose top-level keys are `brand-marks`, `layout`,
`actions`, `navigation`, `forms-inputs`, `status-feedback`, `overlays`, `cards`, `lists-
tables`, `data-display`, `metrics-charts`, `timelines-activity`, and 4 more. Structured data
consumed by the surrounding app or tooling.

[`lib/expected-shapes.json`](https://github.com/quirq-ai/ui/blob/main/lib/expected-shapes.json) · code · 2509 bytes

### fixtures.ts

Shared demo data for the quirq shapes catalog and the sample app built from it. Notable
exports: `mulberry32`, `seededSeries`, `minutesAgo`, `minutesFromNow`, `ago`, `toneVar`,
`NOW_ISO`, `NOW_MS`, and 88 more.

[`lib/fixtures.ts`](https://github.com/quirq-ai/ui/blob/main/lib/fixtures.ts) · code · 123264 bytes

### format.ts

Pure, deterministic formatters for the shapes catalog. Notable exports: `formatNumber`,
`formatFixed`, `formatCompact`, `formatTokens`, `formatCurrency`, `formatPercent`,
`formatRatio`, `formatQuirqs`, and 16 more.

[`lib/format.ts`](https://github.com/quirq-ai/ui/blob/main/lib/format.ts) · code · 10634 bytes

### registry.ts

const SHAPES: Record = { "brand-marks": brandMarks, "layout": layout, "actions": actions,
"navigation": navigation, "forms-inputs": formsInputs, "status-feedback": statusFeedback,
"overlays": overlays, "cards": cards, "lists-tables": listsTables, "data-display":
dataDisplay, "metrics-charts": metricsCharts, "timelines-activity": timelinesActivity,
"graphs-tr Notable exports: `getCategory`, `shapeHref`, `CATEGORIES`, `ALL_SHAPES`.

[`lib/registry.ts`](https://github.com/quirq-ai/ui/blob/main/lib/registry.ts) · code · 2246 bytes

### surfaces.ts

Product surfaces the inventory read, keyed by the seenIn prefix. Notable exports:
`parseSeenIn`, `groupSeenIn`, `SURFACES`, `SurfaceKey`.

[`lib/surfaces.ts`](https://github.com/quirq-ai/ui/blob/main/lib/surfaces.ts) · code · 1432 bytes

### types.ts

/** One shape in the catalog: a reusable quirq UI building block and its live demo. */
export type Shape = { /** kebab-case, unique across the whole catalog; used as the page
anchor */ id: string; name: string; /** what the user gets from it, one sentence */ purpose:
string; /** product surfaces it appears in: landing, space, swarm, galileo, telescope, clien
Notable exports: `Shape`, `Category`.

[`lib/types.ts`](https://github.com/quirq-ai/ui/blob/main/lib/types.ts) · code · 773 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
