<!-- quirq-wiki-generated repo=docs dir=src/components -->

# docs / src/components

Source: [src/components](https://github.com/quirq-ai/docs/tree/main/src/components) in [docs](https://github.com/quirq-ai/docs).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### brand-icon.tsx

type BrandIconProps = { name: string; size?: number; className?: string; } Notable exports:
`BrandIcon`.

[`src/components/brand-icon.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/brand-icon.tsx) · code · 650 bytes

### card.tsx

export function Cards(props: HTMLAttributes) { return ( Notable exports: `Cards`, `Card`,
`CardProps`.

[`src/components/card.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/card.tsx) · code · 1479 bytes

### cowork-api-reference.tsx

const LOCAL_SERVER = "http://127.0.0.1:5002" Notable exports: `CoworkApiReference`. Wired
into a Next.js app (App Router or Next APIs). Marked `'use client'` so it runs in the
browser.

[`src/components/cowork-api-reference.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/cowork-api-reference.tsx) · code · 9898 bytes

### figure.tsx

Research figures and data tables. Theme-aware (fd-* tokens), no external deps, no second
typeface — numerals lean on tabular figures of the inherited face. Notable exports:
`Figure`, `DataTable`, `On`, `Off`, `Delta`, `BarCompare`, `Column`, `Group`, and 2 more.

[`src/components/figure.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/figure.tsx) · code · 12703 bytes

### fow.tsx

Future of Work visual kit. Theme-aware (fd-* tokens), no external deps. Phosphor icon
classes are written as literals so Tailwind generates them. Notable exports: `PhaseHero`,
`Unbundling`, `Flow`, `FeatureGrid`, `SplitCompare`, `TrendChart`, `IntentOutcome`,
`SpaceSessions`, and 12 more.

[`src/components/fow.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/fow.tsx) · code · 36857 bytes

### hero-shader.tsx

import { Dither, FlowingGradient, Shader, SolidColor, Tritone, } from "shaders/react"
Notable exports: `ShaderBackground`. Marked `'use client'` so it runs in the browser.

[`src/components/hero-shader.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/hero-shader.tsx) · code · 1980 bytes

### markdown.tsx

import { Children, type ComponentProps, type ReactElement, type ReactNode, Suspense, use,
useDeferredValue, } from "react"; export interface Processor { process: (content: string) =>
Promise; } Notable exports: `rehypeWrapWords`, `Markdown`, `Processor`.

[`src/components/markdown.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/markdown.tsx) · code · 3143 bytes

### mdx.tsx

export function getMDXComponents(components?: MDXComponents) { return {
...defaultMdxComponents, BrandIcon, Card, Cards, VideoEmbed, WhatIsXO, ...Fow, ...Figure,
...SpaceObservability, ...components, } satisfies MDXComponents; } Notable exports:
`getMDXComponents`, `useMDXComponents`.

[`src/components/mdx.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/mdx.tsx) · code · 805 bytes

### quirq-home.tsx

const SIGN_UP_URL = "https://app.xo.builders/sign-up?ref=docs.quirq.ai"; const
GITHUB_REPO_URL = "https://github.com/quirq-ai/xo-space" Notable exports: `QuirqHome`. Wired
into a Next.js app (App Router or Next APIs). Marked `'use client'` so it runs in the
browser.

[`src/components/quirq-home.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/quirq-home.tsx) · code · 20758 bytes

### research-hub.tsx

export type ResearchPageItem = { url: string; slugs: string[]; title: string; description?:
string; date?: string; tags?: string[]; imageUrl: string; track: "speed-trials" | "from-the-
desk" | "proving-grounds"; num: string; readTime: string; } Notable exports: `ResearchHub`,
`ResearchPageItem`. Wired into a Next.js app (App Router or Next APIs). Marked `'use
client'` so it runs in the browser.

[`src/components/research-hub.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/research-hub.tsx) · code · 17090 bytes

### space-observability.tsx

function DownArrow({ label }: { label: string }) { return ( Notable exports:
`SpaceDataFlow`, `SpaceStorageMap`, `SpaceEventFlow`.

[`src/components/space-observability.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/space-observability.tsx) · code · 9009 bytes

### start-free-bar.tsx

const SIGN_UP_URL = "https://app.xo.builders/sign-up?ref=docs.quirq.ai"; /** Hide the bar
near the page end so the docs footer / social links stay reachable. */ const
HIDE_NEAR_BOTTOM_PX = 160; /** Matches bar content + vertical padding; reserved so content
can scroll clear of the bar. */ const BAR_HEIGHT_PX = 60 Notable exports: `StartFreeBar`.
Marked `'use client'` so it runs in the browser.

[`src/components/start-free-bar.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/start-free-bar.tsx) · code · 3500 bytes

### system-sequence.tsx

const stageDetails = [ { name: "Runtime", label: "Foundation / compute chassis",
description: "The local machine or cloud infrastructure that supplies compute and hosts a
Space.", icon: "icon-[ph--hard-drives-fill]", imageName: "runtime", }, { name: "Space",
label: "Transparent architectural container", description: "The environment that holds the
tools, mem Notable exports: `SystemSequence`.

[`src/components/system-sequence.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/system-sequence.tsx) · code · 6285 bytes

### video-embed.tsx

interface VideoEmbedProps { id: string; title?: string; type?: "loom" | "youtube"; } Notable
exports: `VideoEmbed`. Marked `'use client'` so it runs in the browser.

[`src/components/video-embed.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/video-embed.tsx) · code · 1363 bytes

### what-is-xo.tsx

What is XO — 4-layer architecture explainer. Theme-aware (fd-* tokens). Notable exports:
`WhatIsXO`. Marked `'use client'` so it runs in the browser.

[`src/components/what-is-xo.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/what-is-xo.tsx) · code · 23614 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
