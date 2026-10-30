<!-- quirq-wiki-generated repo=instants dir=components/post -->

# instants / components/post

Source: [components/post](https://github.com/quirq-ai/instants/tree/main/components/post) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### activity-client.ts

Client helpers for per-post activity (save, pin, hide, notes) and local actions. Notable
exports: `sendActivity`, `useActivityFlag`, `openFolder`, `copyPostLink`, `ActivityAction`.
Wired into a Next.js app (App Router or Next APIs). Marked `'use client'` so it runs in the
browser.

[`components/post/activity-client.ts`](https://github.com/quirq-ai/instants/blob/main/components/post/activity-client.ts) · code · 2438 bytes

### charts.tsx

Small static visuals for the post page. Server and client safe. Notable exports:
`Sparkline`, `LanguagesBar`.

[`components/post/charts.tsx`](https://github.com/quirq-ai/instants/blob/main/components/post/charts.tsx) · code · 2481 bytes

### markdown.tsx

A tiny, safe markdown renderer: builds React elements, never raw HTML. Supports headings,
paragraphs, lists, bold, italics, inline code, code blocks, links. Notable exports:
`inline`, `Markdown`, `plainExcerpt`.

[`components/post/markdown.tsx`](https://github.com/quirq-ai/instants/blob/main/components/post/markdown.tsx) · code · 4161 bytes

### meta.ts

Derived, display-ready facts about a record. Safe on server and client. Notable exports:
`monthYear`, `researchLabel`, `gitSpan`, `slideTypes`, `researchYear`, `keyNumbers`,
`citations`, `KeyNumber`.

[`components/post/meta.ts`](https://github.com/quirq-ai/instants/blob/main/components/post/meta.ts) · code · 2433 bytes

### notes.tsx

type Note = { text: string; at: string } Notable exports: `Notes`. Wired into a Next.js app
(App Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`components/post/notes.tsx`](https://github.com/quirq-ai/instants/blob/main/components/post/notes.tsx) · code · 3268 bytes

### post-view.tsx

function Pill({ label, onClick, active = false, children, }: { label: string; onClick: () =>
void; active?: boolean; children: React.ReactNode; }) { return ( Notable exports: `Section`,
`PostView`. Marked `'use client'` so it runs in the browser.

[`components/post/post-view.tsx`](https://github.com/quirq-ai/instants/blob/main/components/post/post-view.tsx) · code · 9560 bytes

### regenerate.tsx

const STAGE_LABEL: Record = { collecting: "Collecting files", writing: "Writing the post",
rendering: "Rendering slides", cached: "Up to date", skipped: "Skipped", } Notable exports:
`RegenerateButton`. Wired into a Next.js app (App Router or Next APIs). Marked `'use
client'` so it runs in the browser.

[`components/post/regenerate.tsx`](https://github.com/quirq-ai/instants/blob/main/components/post/regenerate.tsx) · code · 2746 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
