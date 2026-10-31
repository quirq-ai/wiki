<!-- quirq-wiki-generated repo=github-activity dir=src/components -->

# github-activity / src/components

Source: [src/components](https://github.com/quirq-ai/github-activity/tree/main/src/components) in [github-activity](https://github.com/quirq-ai/github-activity).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### ci-badge.tsx

Status colors are reserved for CI state and always carry an icon + label. Notable exports:
`CiBadge`.

[`src/components/ci-badge.tsx`](https://github.com/quirq-ai/github-activity/blob/main/src/components/ci-badge.tsx) · code · 949 bytes

### feed.tsx

const ICONS: Record = { push: "↑", pr: "⇄", review: "◎", issue: "◉", comment: "…", release:
"◆", branch: "⑂", star: "★", fork: "⑂", other: "·", } Notable exports: `Feed`. Wired into a
Next.js app (App Router or Next APIs).

[`src/components/feed.tsx`](https://github.com/quirq-ai/github-activity/blob/main/src/components/feed.tsx) · code · 2041 bytes

### header.tsx

export function Header({ owners, fetchedAt }: { owners: Owner[]; fetchedAt: string }) {
return ( Notable exports: `Header`. Wired into a Next.js app (App Router or Next APIs).

[`src/components/header.tsx`](https://github.com/quirq-ai/github-activity/blob/main/src/components/header.tsx) · code · 1932 bytes

### repo-list.tsx

type Sort = "pushed" | "commits" | "stars" | "name"; const sum = (a: number[]) =>
a.reduce((x, y) => x + y, 0) Notable exports: `RepoList`. Wired into a Next.js app (App
Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`src/components/repo-list.tsx`](https://github.com/quirq-ai/github-activity/blob/main/src/components/repo-list.tsx) · code · 4820 bytes

### sparkline.tsx

Twelve thin columns, one per week; the current week takes the accent, earlier weeks recede.
Notable exports: `Sparkline`.

[`src/components/sparkline.tsx`](https://github.com/quirq-ai/github-activity/blob/main/src/components/sparkline.tsx) · code · 1223 bytes

### stat.tsx

export function Stat({ label, value, hero = false }: { label: string; value: number; hero?:
boolean }) { return ( Notable exports: `Stat`.

[`src/components/stat.tsx`](https://github.com/quirq-ai/github-activity/blob/main/src/components/stat.tsx) · code · 399 bytes

### time-ago.tsx

Re-render once a minute; the server snapshot is null so prerendered HTML stays
deterministic. Notable exports: `relative`, `TimeAgo`. Marked `'use client'` so it runs in
the browser.

[`src/components/time-ago.tsx`](https://github.com/quirq-ai/github-activity/blob/main/src/components/time-ago.tsx) · code · 1496 bytes

### weekly-chart.tsx

function niceMax(v: number) { if (v = v) return m * mag; return 10 * mag; } Notable exports:
`WeeklyChart`. Marked `'use client'` so it runs in the browser.

[`src/components/weekly-chart.tsx`](https://github.com/quirq-ai/github-activity/blob/main/src/components/weekly-chart.tsx) · code · 4128 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
