<!-- quirq-wiki-generated repo=monitoring dir=components -->

# monitoring / components

Source: [components](https://github.com/quirq-ai/monitoring/tree/main/components) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### api-banner.tsx

export const apiTitles = { ok: "GitHub API answering", "no-token": "GitHub token not set",
"rate-limited": "GitHub rate limit", "token-rejected": "GitHub token rejected", down:
"GitHub API not answering", } as const Notable exports: `ApiBanner`, `apiTitles`. Wired into
a Next.js app (App Router or Next APIs).

[`components/api-banner.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/api-banner.tsx) · code · 1224 bytes

### canary-strip.tsx

One class per outcome. `unknown` (the run file could not be read) is an outlined square with
a question mark, so it never passes for a quiet day; `none` (no file that day) is the muted
fill. Notable exports: `CanaryStrip`.

[`components/canary-strip.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/canary-strip.tsx) · code · 2979 bytes

### cell.tsx

/** * The state word first, then the detail, then the link: one tile or one table cell. A
none * cell is a known fact with no health in it, so it shows as plain text with no badge.
*/ export function CellView({ cell, now, title, exact = false }: { cell: Cell; now: Date;
title?: string; exact?: boolean }) { return ( Notable exports: `CellView`, `CellInline`.

[`components/cell.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/cell.tsx) · code · 1626 bytes

### change-matrix.tsx

/** * What changed, one row per tracked repo: the repo, its count, and one dot per change in
the * state color, oldest left, newest right, so a busy repo reads as a long row and a quiet
one as a * short one. The dots are the ElevenLabs UI matrix idea (a grid of round cells)
with the * dashboard's own state markers for cells, and the row wraps instead of scro
Notable exports: `ChangeMatrix`. Wired into a Next.js app (App Router or Next APIs).

[`components/change-matrix.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/change-matrix.tsx) · code · 6394 bytes

### count-tiles.tsx

/** * The three numbers at the top of Today, each a link to where the items are. A count
whose * sources were not all read is a floor ("3+"), and a zero built from no data is "?",
never a * green zero. A count whose sources were read long past their window is shown stale,
with when. * The number is the text color; the state dot next to the label carries the
Notable exports: `CountTiles`. Wired into a Next.js app (App Router or Next APIs).

[`components/count-tiles.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/count-tiles.tsx) · code · 2729 bytes

### markdown.tsx

Links that leave the dashboard open in a new tab, like every other outside link. The
report's own headings sit under the page's, so each is demoted two levels. A wide table
scrolls sideways inside a box a keyboard can reach, each box labelled by its number so the
landmarks are distinct. Images are not fetched: an outside image would tell its host the
viewer's address, so only the alt text is shown. Notable exports: `Markdown`.

[`components/markdown.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/markdown.tsx) · code · 1789 bytes

### new-tab.tsx

Every link that leaves the dashboard opens in a new tab, so the page a reader is scanning
stays put; `noopener` keeps the opened page from reaching back to this one. Page links
inside the dashboard stay in the same tab (the back button must keep working). Spread it on
an `<a>` whose href is decided at render time; the anchors with a fixed outside href carry
the same two attributes inline. Notable exports: `newTab`.

[`components/new-tab.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/new-tab.tsx) · code · 496 bytes

### page-skeleton.tsx

/** * Shown while a page's snapshot is being built, so a tap on a phone answers at once.
Each page * segment has its own loading.tsx that renders this; the repo page has none,
because a Suspense * boundary would stream a 200 before notFound() can answer 404. */ export
function PageSkeleton() { return ( Notable exports: `PageSkeleton`.

[`components/page-skeleton.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/page-skeleton.tsx) · code · 1063 bytes

### page-title.tsx

export function PageTitle({ title, lead, children }: { title: string; lead: string;
children?: React.ReactNode }) { return ( Notable exports: `PageTitle`.

[`components/page-title.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/page-title.tsx) · code · 484 bytes

### sha.tsx

A 7-character commit id in mono, linked to the full commit. Notable exports: `Sha`.

[`components/sha.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/sha.tsx) · code · 357 bytes

### site-header.tsx

/** * Sticky header: the wordmark and the theme toggle at the edges, the page tabs centered
between * them (a three-column grid, so the tabs sit in the middle of the header whatever
the edges * measure). On a phone the tabs are their own centered row under the wordmark. */
export function SiteHeader() { return ( Notable exports: `SiteHeader`. Wired into a Next.js
app (App Router or Next APIs).

[`components/site-header.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/site-header.tsx) · code · 1623 bytes

### site-nav.tsx

const pages = [ { href: "/", label: "Today" }, { href: "/waiting", label: "Waiting" }, {
href: "/board", label: "Board" }, { href: "/release", label: "Release" }, { href: "/health",
label: "Health" }, ] as const Notable exports: `SiteNav`. Wired into a Next.js app (App
Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`components/site-nav.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/site-nav.tsx) · code · 1648 bytes

### source-link.tsx

/** "from release/channels, 4 min ago": where a value came from and how old the data says it
is. */ export function SourceLink({ source, url, at, now, label = "from" }: { source:
string; url: string; at?: string; now: Date; label?: string }) { return ( Notable exports:
`SourceLink`.

[`components/source-link.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/source-link.tsx) · code · 746 bytes

### sources-list.tsx

/** * Every source this render read, with its state and the data's own time, as a plain
list. A read * that answered is "ok" on a plain pill with no state color: ok says the file
or API page could * be read (through the data cache, so never "fresh"), not that what it
says is healthy; the Board * and the writers' cards judge that. A read older than twice its
Notable exports: `SourcesList`.

[`components/sources-list.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/sources-list.tsx) · code · 2595 bytes

### state-badge.tsx

export { states, type State } Notable exports: `StateDot`, `StateBadge`, `states`, `type
State`.

[`components/state-badge.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/state-badge.tsx) · code · 1478 bytes

### theme-toggle.tsx

const oneYear = 60 * 60 * 24 * 365 Notable exports: `ThemeToggle`. Marked `'use client'` so
it runs in the browser.

[`components/theme-toggle.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/theme-toggle.tsx) · code · 1021 bytes

### time-ago.tsx

/** "4 min ago" with the exact UTC time in the title; exact shows both, for phones. */
export function TimeAgo({ iso, now, exact = false, className }: { iso?: string | null; now:
Date; exact?: boolean; className?: string }) { if (!iso) return null; const words = ago(iso,
now); const utc = exactUtc(iso); return ( Notable exports: `TimeAgo`.

[`components/time-ago.tsx`](https://github.com/quirq-ai/monitoring/blob/main/components/time-ago.tsx) · code · 547 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
