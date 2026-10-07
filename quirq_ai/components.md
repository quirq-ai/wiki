<!-- quirq-wiki-generated repo=quirq_ai dir=components -->

# quirq_ai / components

Source: [components](https://github.com/quirq-ai/quirq_ai/tree/main/components) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### motion-provider.tsx

/** * Single reduced-motion policy for every motion component. * Never branch
initial/animate on useReducedMotion(): it returns null on * the server, so the served HTML
carries the full-motion inline styles while a * reduced-motion client hydrates with
different props. React does not patch * style-attribute mismatches, which left reduced-
motion visitors star Notable exports: `MotionProvider`.

[`components/motion-provider.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/motion-provider.tsx) · code · 858 bytes

### scroll-runtime.tsx

import { getResolvedLeaves, refreshTrack, } from "@/components/stage/choreography" Notable
exports: `ScrollRuntime`. Marked `'use client'` so it runs in the browser.

[`components/scroll-runtime.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/scroll-runtime.tsx) · code · 12776 bytes

### stage-page.tsx

/** * The shared shell for any page that runs the 3D shot: the scroll runtime, * the
persistent stage, and the film overlays. The one global navbar lives in * the root layout,
outside this page-specific rendering shell. * The contract with the choreography is
unchanged from the single-page days: * children carry data-beat={0..4} sections (via the
Beat primit Notable exports: `StagePage`.

[`components/stage-page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/stage-page.tsx) · code · 2218 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
