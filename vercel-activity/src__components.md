<!-- quirq-wiki-generated repo=vercel-activity dir=src/components -->

# vercel-activity / src/components

Source: [src/components](https://github.com/quirq-ai/vercel-activity/tree/main/src/components) in [vercel-activity](https://github.com/quirq-ai/vercel-activity).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### DeployChart.tsx

const SERIES = [ { key: "ready", label: "Ready", cls: "bg-good" }, { key: "error", label:
"Error", cls: "bg-critical" }, { key: "other", label: "Canceled / other", cls: "bg-neutral"
}, ] as const Notable exports: `DeployChart`. Marked `'use client'` so it runs in the
browser.

[`src/components/DeployChart.tsx`](https://github.com/quirq-ai/vercel-activity/blob/main/src/components/DeployChart.tsx) · code · 3755 bytes

### Nav.tsx

const LINKS = [ { href: "/", label: "Activity" }, { href: "/account", label: "Account &
domains" }, ] Notable exports: `Nav`. Wired into a Next.js app (App Router or Next APIs).
Marked `'use client'` so it runs in the browser.

[`src/components/Nav.tsx`](https://github.com/quirq-ai/vercel-activity/blob/main/src/components/Nav.tsx) · code · 661 bytes

### StateBadge.tsx

const STYLE: Record = { READY: { label: "Ready", icon: "●", cls: "text-good" }, ERROR: {
label: "Error", icon: "✕", cls: "text-critical" }, BUILDING: { label: "Building", icon: "◐",
cls: "text-warning" }, QUEUED: { label: "Queued", icon: "○", cls: "text-muted" }, CANCELED:
{ label: "Canceled", icon: "–", cls: "text-muted" }, OTHER: { label: "Unknown", icon Notable
exports: `StateBadge`.

[`src/components/StateBadge.tsx`](https://github.com/quirq-ai/vercel-activity/blob/main/src/components/StateBadge.tsx) · code · 786 bytes

### TimeAgo.tsx

One shared ticking clock so every TimeAgo re-renders together, once a minute. Notable
exports: `ago`, `TimeAgo`. Marked `'use client'` so it runs in the browser.

[`src/components/TimeAgo.tsx`](https://github.com/quirq-ai/vercel-activity/blob/main/src/components/TimeAgo.tsx) · code · 1265 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
