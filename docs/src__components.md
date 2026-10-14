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

### figure.tsx

Research figures and data tables. Theme-aware (fd-* tokens), no external deps, no second
typeface — numerals lean on tabular figures of the inherited face. Notable exports:
`Figure`, `DataTable`, `On`, `Off`, `Delta`, `BarCompare`, `Column`, `Group`, and 2 more.

[`src/components/figure.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/figure.tsx) · code · 12703 bytes

### hero-shader.tsx

import { Dither, FlowingGradient, Shader, SolidColor, Tritone, } from "shaders/react"
Notable exports: `ShaderBackground`. Marked `'use client'` so it runs in the browser.

[`src/components/hero-shader.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/hero-shader.tsx) · code · 1980 bytes

### lead.tsx

The opening paragraph of a page, set off by a rule in the primary color. Notable exports:
`Lead`.

[`src/components/lead.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/lead.tsx) · code · 341 bytes

### markdown.tsx

import { Children, type ComponentProps, type ReactElement, type ReactNode, Suspense, use,
useDeferredValue, } from "react"; export interface Processor { process: (content: string) =>
Promise; } Notable exports: `rehypeWrapWords`, `Markdown`, `Processor`.

[`src/components/markdown.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/markdown.tsx) · code · 3143 bytes

### mdx.tsx

export function getMDXComponents(components?: MDXComponents) { return {
...defaultMdxComponents, BrandIcon, Card, Cards, Video, VideoEmbed, Lead, ...Figure,
...components, } satisfies MDXComponents; } Notable exports: `getMDXComponents`,
`useMDXComponents`.

[`src/components/mdx.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/mdx.tsx) · code · 705 bytes

### qq-home.tsx

const GITHUB_REPO_URL = "https://github.com/quirq-ai/qq" Notable exports: `QqHome`. Wired
into a Next.js app (App Router or Next APIs). Marked `'use client'` so it runs in the
browser.

[`src/components/qq-home.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/qq-home.tsx) · code · 21549 bytes

### start-free-bar.tsx

/** Hide the bar near the page end so the docs footer / social links stay reachable. */
const HIDE_NEAR_BOTTOM_PX = 160; /** Matches bar content + vertical padding; reserved so
content can scroll clear of the bar. */ const BAR_HEIGHT_PX = 60 Notable exports:
`StartFreeBar`. Wired into a Next.js app (App Router or Next APIs). Marked `'use client'` so
it runs in the browser.

[`src/components/start-free-bar.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/start-free-bar.tsx) · code · 3493 bytes

### video-embed.tsx

interface VideoEmbedProps { id: string; title?: string; type?: "loom" | "youtube"; } Notable
exports: `VideoEmbed`. Marked `'use client'` so it runs in the browser.

[`src/components/video-embed.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/video-embed.tsx) · code · 1363 bytes

### video.tsx

const BOX = "mx-auto block h-auto max-h-[70vh] w-auto max-w-full rounded-xl border border-
fd-border bg-black" Notable exports: `Video`.

[`src/components/video.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/video.tsx) · code · 2232 bytes

_Generated 2026-10-14 10:43 UTC from `main`._
