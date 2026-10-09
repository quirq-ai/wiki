<!-- quirq-wiki-generated repo=monitoring dir=lib/model -->

# monitoring / lib/model

Source: [lib/model](https://github.com/quirq-ai/monitoring/tree/main/lib/model) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### build.ts

import { SNAPSHOT_SCHEMA, type BoardGroup, type BoardRow, type CanaryDay, type Cell, type
ReleaseRepo, type SectionRead, type Snapshot, type SourceStatus, type TodayItem, type
WaitingItem, type WriterHealth, } from "@/lib/model/types"; Joins every Signal into the one
model the pages render.

[`lib/model/build.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/model/build.ts) · code · 35559 bytes

### fold-runs.ts

Splits a list into runs, in order, of items that fold and items that do not, so the phone
Board can draw a run of folded rows as one card and every other row as a card of its own.
Every item lands in exactly one run; an empty list gives no runs. Notable exports:
`foldRuns`.

[`lib/model/fold-runs.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/model/fold-runs.ts) · code · 655 bytes

### freshness.ts

/** * Is the writer alive? Judged on its newest completed run (cancelled and skipped already
* dropped): success inside the window is fresh; any other conclusion inside the window is
red * (the data may still be current); nothing inside the window is stale. */ export
function judgeWriter(writer: Writer, runs: Signal, now: Date): WriterHealth { const base = {
Notable exports: `judgeWriter`.

[`lib/model/freshness.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/model/freshness.ts) · code · 1791 bytes

### matrix.ts

/** One row of Today's change matrix: a repo and its changes in the window, oldest first. */
export type MatrixRow = { repo: string; items: TodayItem[] } Notable exports: `matrixRows`,
`MatrixRow`.

[`lib/model/matrix.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/model/matrix.ts) · code · 1186 bytes

### repo.ts

The repo page: the board row plus what only one repo needs. The name is checked against the
registries before anything is read for it; an unknown name is null, so the page is a 404.
Notable exports: `isRepoName`, `buildRepoView`, `PerfMetric`, `RepoView`, `RepoLookup`.

[`lib/model/repo.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/model/repo.ts) · code · 3239 bytes

### time.ts

Plain-words time, computed on the server from one `now` so a page is consistent with itself.
Notable exports: `parseTime`, `ago`, `minutesSince`, `within`, `exactUtc`, `parseWindow`,
`WINDOWS`, `Window`.

[`lib/model/time.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/model/time.ts) · code · 1678 bytes

### types.ts

The model the pages render and GET /api/snapshot returns. The schema is the contract: the
route validates the snapshot before sending it, so a shape drift fails loudly in a test.
Notable exports: `SNAPSHOT_SCHEMA`, `CellStateSchema`, `CellSchema`, `SourceStatusSchema`,
`TodayItemSchema`, `WaitingItemSchema`, `BoardRowSchema`, `BoardGroupSchema`, and 17 more.

[`lib/model/types.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/model/types.ts) · code · 7336 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
