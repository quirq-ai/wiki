<!-- quirq-wiki-generated repo=quirq_ai dir=components/stage -->

# quirq_ai / components/stage

Source: [components/stage](https://github.com/quirq-ai/quirq_ai/tree/main/components/stage) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### choreo-tree.ts

Phases 3 and 4 of the list-to-tree migration: choreography as a tree. Notable exports:
`resolveTrack`, `Keyframe`, `CHANNELS`, `_ChannelsAreExhaustive`, `TrackContext`,
`ChoreoNode`, `ResolvedLeaf`, `CHOREOGRAPHY`.

[`components/stage/choreo-tree.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/components/stage/choreo-tree.ts) · code · 6633 bytes

### choreography.ts

The resolved keyframe track and its sampler. Notable exports: `overrideLeaves`, `getTrack`,
`getResolvedLeaves`, `refreshTrack`, `sampleKeyframes`, `damp`, `KEYFRAMES`.

[`components/stage/choreography.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/components/stage/choreography.ts) · code · 4110 bytes

### glass-form.tsx

/** * The /engine swap demo: the same mesh, another closed ring. Anything with * sensible
normals and a similar world envelope works; the material, the * damping loop and the scroll
never notice. A welded tube like the knot reads * softer than the ribbon on purpose: no
duplicated edge vertices, no crisp * caustic edges. Sized inside the ribbon's envelope: th
Notable exports: `GlassForm`, `StageQuality`.

[`components/stage/glass-form.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/stage/glass-form.tsx) · code · 6128 bytes

### home-stage-profile.tsx

import { overrideLeaves, type ResolvedLeaf, } from "@/components/stage/choreography"; import
{ CHOREOGRAPHY, resolveTrack, type Keyframe, } from "@/components/stage/choreo-tree" Notable
exports: `HomeStageProfile`, `HOME_CALM_LEAVES`. Marked `'use client'` so it runs in the
browser.

[`components/stage/home-stage-profile.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/stage/home-stage-profile.tsx) · code · 1673 bytes

### light-burst.tsx

/** * The source the glass refracts. * Transmission needs something behind the object to
bend: against a pure black * void it renders black glass. So the void gets a light: a
centred prismatic * burst, far upstage, which is both the thing the ribbon disperses *and*
the * brand's own cover image. */ const VERTEX = /* glsl */ ` varying vec2 vUv; void main()
{ Notable exports: `LightBurst`. Marked `'use client'` so it runs in the browser.

[`components/stage/light-burst.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/stage/light-burst.tsx) · code · 4833 bytes

### outcome-graph.tsx

import { RIBBON_DEFAULTS, createRibbonFrame, sampleRibbonFrame, } from "./ribbon-geometry";
type OutcomeKind = "positive" | "partial" | "negative" Notable exports: `OutcomeGraph`.
Marked `'use client'` so it runs in the browser.

[`components/stage/outcome-graph.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/stage/outcome-graph.tsx) · code · 7527 bytes

### ribbon-geometry.ts

export type RibbonOptions = { /** Radius of the loop the ribbon is swept around. */ radius?:
number; /** Width of the ribbon face: the broad surface light disperses through. */ width?:
number; /** Ribbon thickness. Thin reads as glass; the refraction depth is set on the
material. */ thickness?: number; /** Steps around the loop.

[`components/stage/ribbon-geometry.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/components/stage/ribbon-geometry.ts) · code · 5267 bytes

### scene.tsx

/** * Everything that pulls in three.js lives behind this module boundary so it can * be
code-split. The hero's type and layout paint from the static HTML while * this chunk is
still downloading; the stage then fades in over it. */ export default function Scene({
quality, onReady, }: { quality: StageQuality; onReady: () => void; }) { return ( Notable
exports: `Scene`. Marked `'use client'` so it runs in the browser.

[`components/stage/scene.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/stage/scene.tsx) · code · 988 bytes

### spectrum-env.tsx

/** * The lighting *is* the brand. * Nothing here is a rainbow texture: one hot white core
plus seven coloured * emitters ringed around the form, baked into an environment map. The
spectrum * on screen is real dispersion: white light entering glass and leaving split. *
Baked once (frames={1}) because the lights hold still and the form turns. */ export functi
Notable exports: `SpectrumEnv`. Marked `'use client'` so it runs in the browser.

[`components/stage/spectrum-env.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/stage/spectrum-env.tsx) · code · 1850 bytes

### stage.tsx

three.js, drei and the shaders are ~1MB of the bundle. Loading them lazily keeps them off
the critical path: the hero renders from static HTML first. Notable exports: `Stage`. Wired
into a Next.js app (App Router or Next APIs). Marked `'use client'` so it runs in the
browser.

[`components/stage/stage.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/stage/stage.tsx) · code · 2228 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
