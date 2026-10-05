<!-- quirq-wiki-generated repo=quirq_ai dir=components/beats -->

# quirq_ai / components/beats

Source: [components/beats](https://github.com/quirq-ai/quirq_ai/tree/main/components/beats) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### business-impact.tsx

const EASE = [0.22, 1, 0.36, 1] as const Notable exports: `BusinessImpact`. Marked `'use
client'` so it runs in the browser.

[`components/beats/business-impact.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/beats/business-impact.tsx) · code · 17159 bytes

### consumption.tsx

/** Where the demo counter starts, so it reads as mid-month rather than day one. */ const
START = 1_284_930_441; /** Tokens per second. Deliberately absurd: that is the point being
made. */ const RATE = 734_219 Notable exports: `Consumption`. Marked `'use client'` so it
runs in the browser.

[`components/beats/consumption.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/beats/consumption.tsx) · code · 3718 bytes

### delivery.tsx

const EASE = [0.22, 1, 0.36, 1] as const Notable exports: `Delivery`. Marked `'use client'`
so it runs in the browser.

[`components/beats/delivery.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/beats/delivery.tsx) · code · 13356 bytes

### ecosystem.tsx

/** * The agent connection shelf directly under the hero. * Only agent marks belong here.
Providers, protocols and infrastructure may * still be supported elsewhere, but mixing them
into this row dilutes the * promise: connect the workers already active across the team's
machines and * observe their outcomes together. * Not a beat: it carries no data-beat, s
Notable exports: `Ecosystem`. Marked `'use client'` so it runs in the browser.

[`components/beats/ecosystem.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/beats/ecosystem.tsx) · code · 4250 bytes

### hero.tsx

const EASE = [0.22, 1, 0.36, 1] as const Notable exports: `Hero`. Marked `'use client'` so
it runs in the browser.

[`components/beats/hero.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/beats/hero.tsx) · code · 3579 bytes

### invite.tsx

export function Invite() { This section keeps its own layout (the footer rides inside it),
so it does not use the Beat primitive; it registers with the runtime directly. const el =
useRef(null); useEffect(() => { if (!el.current) return; return registerBeat({ id: "invite",
index: 4, el: el.current }); }, []) Notable exports: `Invite`. Marked `'use client'` so it
runs in the browser.

[`components/beats/invite.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/beats/invite.tsx) · code · 3639 bytes

### ledger.tsx

import { AnimatePresence, motion, useInView, useReducedMotion, } from "motion/react"; import
{ Beat, Marker, Reveal, Rise, TextScrim, cn, } from "@/components/ui/primitives"; const EASE
= [0.22, 1, 0.36, 1] as const Notable exports: `Ledger`. Wired into a Next.js app (App
Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`components/beats/ledger.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/beats/ledger.tsx) · code · 11873 bytes

### onboarding.tsx

import { DEFAULT_ENDPOINT, INSTANCE_ENDPOINT_STORAGE_KEY, INSTANCE_RECONNECT_STORAGE_KEY,
probeInstance, type Connection, } from "@/lib/quirq/instance" Notable exports: `Onboarding`.
Marked `'use client'` so it runs in the browser.

[`components/beats/onboarding.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/beats/onboarding.tsx) · code · 20380 bytes

### quirq-collection.tsx

import { Beat, Marker, Reveal, Rise, TextScrim, cn, } from "@/components/ui/primitives";
type SignalKind = "positive" | "partial" | "negative" Notable exports: `QuirqCollection`.
Marked `'use client'` so it runs in the browser.

[`components/beats/quirq-collection.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/beats/quirq-collection.tsx) · code · 6046 bytes

### space-showcase.tsx

import { Beat, Marker, Reveal, Rise, TextScrim, cn, } from "@/components/ui/primitives";
const CAPTURED_AT = "28 July 2026" Notable exports: `WorkspaceGraph`, `SessionIntelligence`,
`SpaceDashboard`. Wired into a Next.js app (App Router or Next APIs). Marked `'use client'`
so it runs in the browser.

[`components/beats/space-showcase.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/components/beats/space-showcase.tsx) · code · 11273 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
