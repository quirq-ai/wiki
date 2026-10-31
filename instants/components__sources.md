<!-- quirq-wiki-generated repo=instants dir=components/sources -->

# instants / components/sources

Source: [components/sources](https://github.com/quirq-ai/instants/tree/main/components/sources) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### progress-panel.tsx

const LABEL: Record = { queued: "Queued", collecting: "Collecting", writing: "Writing",
rendering: "Rendering", cached: "Up to date", skipped: "Skipped", done: "Done", error:
"Error", } Notable exports: `ProgressPanel`. Wired into a Next.js app (App Router or Next
APIs). Marked `'use client'` so it runs in the browser.

[`components/sources/progress-panel.tsx`](https://github.com/quirq-ai/instants/blob/main/components/sources/progress-panel.tsx) · code · 3945 bytes

### sources-view.tsx

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, } from
"@/components/ui/alert-dialog"; type State = SourceStatus["folders"][number]["state"]; type
Folder = SourceStatus["folders"][number] & { root: string } Notable exports: `SourcesView`,
`STATE_STYLE`. Wired into a Next.js app (App Router or Next APIs).

[`components/sources/sources-view.tsx`](https://github.com/quirq-ai/instants/blob/main/components/sources/sources-view.tsx) · code · 12997 bytes

### space-card.tsx

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, } from
"@/components/ui/alert-dialog"; export type SpaceSnapshot = { config: { project: string |
null; autoGenerate: boolean; connectedAt?: string }; status: SpaceStatus; hubUrl: string |
null; genera Notable exports: `useSpace`, `SpaceCard`, `SyncDot`, `SpaceSnapshot`.

[`components/sources/space-card.tsx`](https://github.com/quirq-ai/instants/blob/main/components/sources/space-card.tsx) · code · 14723 bytes

### use-generate.ts

export type RowStatus = "queued" | "collecting" | "writing" | "rendering" | "cached" |
"skipped" | "done" | "error" Notable exports: `finishedCount`, `explainError`,
`useGenerate`, `RowStatus`, `JobRow`, `JobState`. Marked `'use client'` so it runs in the
browser.

[`components/sources/use-generate.ts`](https://github.com/quirq-ai/instants/blob/main/components/sources/use-generate.ts) · code · 4966 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
