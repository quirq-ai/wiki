<!-- quirq-wiki-generated repo=quirq_ai dir=components/home -->

# quirq_ai / components/home

Source: [components/home](https://github.com/quirq-ai/quirq_ai/tree/main/components/home) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### definition.tsx

/** * The first chapter break: one question, one answer, one quiet way out. * The three
lines of the answer are hard ``s carried from the deck, not * a measure the browser happened
to choose. They are the argument's rhythm * (claim, method, name), so no hidden sm:inline
guards: on a phone they * simply become three short lines, which is still the phrasing. *
Notable exports: `Definition`. Wired into a Next.js app (App Router or Next APIs).

[`components/home/definition.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/definition.tsx) · code · 3577 bytes

### feature-visuals.tsx

import { AnthropicIcon, ClaudeCodeIcon, CodexIcon, CursorIcon, DeepseekIcon, McpIcon,
OpenaiIcon, OpenclawIcon, } from "@/components/ui/brand-icons" Notable exports:
`ScalingArcs`, `DeployTimeline`, `ContextLadder`, `RuntimeLattice`, `EfficiencyPanel`.

[`components/home/feature-visuals.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/feature-visuals.tsx) · code · 12451 bytes

### features.tsx

import { ContextLadder, DeployTimeline, EfficiencyPanel, RuntimeLattice, ScalingArcs, } from
"@/components/home/feature-visuals"; const EASE = [0.22, 1, 0.36, 1] as const Notable
exports: `Features`. Wired into a Next.js app (App Router or Next APIs). Marked `'use
client'` so it runs in the browser.

[`components/home/features.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/features.tsx) · code · 10132 bytes

### frame-one-home-interactions.tsx

const WORKFLOW_STEPS = [ { id: "deploy", number: "01", label: "DEPLOY ENVIRONMENT", color:
"#2e9bff", body: "Spin up the capacity and cloud location your workload needs.", }, { id:
"manage", number: "02", label: "MANAGE WORKSPACE", color: "#34c759", body: "Keep projects,
context, models, and agent tools organized in one managed workspace.", }, { id: "observe
Notable exports: `WorkflowSelector`, `LayersSelector`.

[`components/home/frame-one-home-interactions.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/frame-one-home-interactions.tsx) · code · 7729 bytes

### frame-one-home-responsive.module.css

Stylesheet `frame-one-home-responsive.module.css` for layout and visual treatment in this
folder. Leading class selectors include `home`, `frame`, `hero`, `heroArt`, `heroCopy`,
`heroWordmark`, `heroTitle`, `heroTagline`, and 57 more. Defines or consumes CSS custom
properties (design tokens).

[`components/home/frame-one-home-responsive.module.css`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/frame-one-home-responsive.module.css) · code · 40948 bytes

### frame-one-home.tsx

import { LayersSelector, WorkflowSelector, } from "./frame-one-home-interactions"; const
ASSET_ROOT = "/assets/home-v9" Notable exports: `FrameOneHome`. Wired into a Next.js app
(App Router or Next APIs).

[`components/home/frame-one-home.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/frame-one-home.tsx) · code · 12958 bytes

### hero.tsx

const EASE = [0.22, 1, 0.36, 1] as const Notable exports: `Hero`. Wired into a Next.js app
(App Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`components/home/hero.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/hero.tsx) · code · 8349 bytes

### home-footer.tsx

/** * The three link columns, carried over from the deck's FOOTER_COLUMNS. * The labels are
authored in caps because that is how they were written, not * because a text-transform
produced them: .label uppercases too, but a * screen reader and a copy/paste both get the
real string this way. */ const FOOTER_COLUMNS = [ [ { label: "PRODUCTS", href: "/dashboard"
Notable exports: `HomeFooter`. Wired into a Next.js app (App Router or Next APIs).

[`components/home/home-footer.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/home-footer.tsx) · code · 3766 bytes

### install.tsx

import { ClaudeCodeIcon, CursorIcon, DeepseekIcon, OpenaiIcon, } from
"@/components/ui/brand-icons" Notable exports: `Install`. Marked `'use client'` so it runs
in the browser.

[`components/home/install.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/install.tsx) · code · 3993 bytes

### layers.tsx

const EASE = [0.22, 1, 0.36, 1] as const Notable exports: `Layers`. Wired into a Next.js app
(App Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`components/home/layers.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/layers.tsx) · code · 7558 bytes

### partner-logos.tsx

/** * The "WORKS WITH" wordmarks, inlined from public/assets/home-v9/logo-*.svg. * Inlined
rather than served as files for the same reason ui/brand-icons is: * an inline mark takes
the surrounding text colour, so the row can sit dim and * lift to ink on hover without a
second request or a second asset.

[`components/home/partner-logos.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/partner-logos.tsx) · code · 29049 bytes

### roi.tsx

const EASE = [0.22, 1, 0.36, 1] as const Notable exports: `Roi`. Wired into a Next.js app
(App Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`components/home/roi.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/roi.tsx) · code · 4332 bytes

### shell.tsx

/** * The shared furniture for the home page. * Server-safe on purpose: every export here is
plain markup with no hooks, so * the server-rendered sections (the footer, the feature
visuals) can import it * without dragging a client boundary along. That is also why this
file joins * class names locally instead of importing cn from ui/primitives, which is a * "
Notable exports: `Section`, `ScreenFrame`, `classes`, `TYPE`, `CARD`.

[`components/home/shell.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/shell.tsx) · code · 5077 bytes

### workflow.tsx

const EASE = [0.22, 1, 0.36, 1] as const Notable exports: `Workflow`. Wired into a Next.js
app (App Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`components/home/workflow.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/workflow.tsx) · code · 5006 bytes

### works-with.tsx

const EASE = [0.22, 1, 0.36, 1] as const Notable exports: `PartnerRow`. Wired into a Next.js
app (App Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`components/home/works-with.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/home/works-with.tsx) · code · 3468 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
