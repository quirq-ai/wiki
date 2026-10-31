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

### copy-button.tsx

Copies text to the clipboard and says so for two seconds. Where the clipboard is refused (an
insecure page, an old browser), it says that instead of pretending. Notable exports:
`CopyButton`. Marked `'use client'` so it runs in the browser.

[`src/components/copy-button.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/copy-button.tsx) · code · 1618 bytes

### docs-home.tsx

const GITHUB_REPO_URL = "https://github.com/quirq-ai/qq" Notable exports: `DocsHome`. Wired
into a Next.js app (App Router or Next APIs). Marked `'use client'` so it runs in the
browser.

[`src/components/docs-home.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/docs-home.tsx) · code · 7722 bytes

### figure.tsx

Research figures and data tables. Theme-aware (fd-* tokens), no external deps, no second
typeface — numerals lean on tabular figures of the inherited face. Notable exports:
`Figure`, `DataTable`, `On`, `Off`, `Delta`, `BarCompare`, `Column`, `Group`, and 2 more.

[`src/components/figure.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/figure.tsx) · code · 12703 bytes

### hero-shader.tsx

import { Dither, FlowingGradient, Shader, SolidColor, Tritone, } from "shaders/react"
Notable exports: `ShaderBackground`. Marked `'use client'` so it runs in the browser.

[`src/components/hero-shader.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/hero-shader.tsx) · code · 1980 bytes

### home-extras.tsx

Two parts of the docs home that drive its terminal: a builder that turns your own names into
commands to copy, and use cases that play a few commands in a row. Nothing here runs
anything. Notable exports: `CommandBuilder`, `UseCases`. Wired into a Next.js app (App
Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`src/components/home-extras.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/home-extras.tsx) · code · 8891 bytes

### home-terminal.tsx

import { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState, } from
"react"; import { type Line, type Recording, type Replay, replays, Terminal, } from
"@/components/journey"; import { type Command, commands, examples, type Source, tools, }
from "@/journeys/home-commands"; The docs home page: one big terminal that replays every qq
and xo Notable exports: `HomeTerminal`, `SOURCE_LABEL`, `TerminalControl`.

[`src/components/home-terminal.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/home-terminal.tsx) · code · 18400 bytes

### journey.tsx

import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useRef,
useState, } from "react"; A guided journey: numbered steps beside a terminal.

[`src/components/journey.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/journey.tsx) · code · 15000 bytes

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
...defaultMdxComponents, BrandIcon, Card, Cards, Journey, JourneyStep, Video, VideoEmbed,
Lead, ...Figure, ...components, } satisfies MDXComponents; } Notable exports:
`getMDXComponents`, `useMDXComponents`.

[`src/components/mdx.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/mdx.tsx) · code · 785 bytes

### phone-page-list.tsx

Below md the sidebar is a drawer: this bar opens it with the section's pages. Like fumadocs'
own docs header it stays under the site header as you scroll (the site header is h-14, hence
the banner height), and it sets the header height so the "On this page" bar stacks below it.
Notable exports: `PhonePageList`. Wired into a Next.js app (App Router or Next APIs). Marked
`'use client'` so it runs in the browser.

[`src/components/phone-page-list.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/phone-page-list.tsx) · code · 1223 bytes

### section-docs-layout.tsx

type PerSection = { qq: T; xo: T } Notable exports: `SectionDocsLayout`. Wired into a
Next.js app (App Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`src/components/section-docs-layout.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/section-docs-layout.tsx) · code · 762 bytes

### section-github-link.tsx

The header's GitHub icon: the qq repo in the qq section, xo's in xo. Drawn as fumadocs draws
`githubUrl` (a ghost icon button with the GitHub mark, 20px in a 32px button), so only the
address changes. Notable exports: `SectionGithubLink`. Wired into a Next.js app (App Router
or Next APIs). Marked `'use client'` so it runs in the browser.

[`src/components/section-github-link.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/section-github-link.tsx) · code · 884 bytes

### section-tabs.tsx

The header's qq and xo tabs: one per section, the current one underlined. Notable exports:
`SectionTabs`. Wired into a Next.js app (App Router or Next APIs). Marked `'use client'` so
it runs in the browser.

[`src/components/section-tabs.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/section-tabs.tsx) · code · 1128 bytes

### start-free-bar.tsx

/** Hide the bar near the page end so the docs footer / social links stay reachable. */
const HIDE_NEAR_BOTTOM_PX = 160; /** Matches bar content + vertical padding; reserved so
content can scroll clear of the bar. */ const BAR_HEIGHT_PX = 60 Notable exports:
`StartFreeBar`. Wired into a Next.js app (App Router or Next APIs). Marked `'use client'` so
it runs in the browser.

[`src/components/start-free-bar.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/start-free-bar.tsx) · code · 3729 bytes

### video-embed.tsx

interface VideoEmbedProps { id: string; title?: string; type?: "loom" | "youtube"; } Notable
exports: `VideoEmbed`. Marked `'use client'` so it runs in the browser.

[`src/components/video-embed.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/video-embed.tsx) · code · 1363 bytes

### video.tsx

const BOX = "mx-auto block h-auto max-h-[70vh] w-auto max-w-full rounded-xl border border-
fd-border bg-black" Notable exports: `Video`.

[`src/components/video.tsx`](https://github.com/quirq-ai/docs/blob/main/src/components/video.tsx) · code · 2342 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
