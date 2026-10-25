<!-- quirq-wiki-generated repo=monitoring dir=lib/model -->

# monitoring / lib/model

Source: [lib/model](https://github.com/quirq-ai/monitoring/tree/main/lib/model) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### board-view.ts

/** * Whether a repo's note needs a look: anything but green, except a repo that is unknown
only * because the GitHub API did not answer while the banner says so once for the whole
page. */ export function needsLook(row: BoardRow, apiOk: boolean): boolean { return
!(row.worst === "green" || (row.quiet && !apiOk)); } Notable exports: `needsLook`,
`stateCounts`, `byConcern`, `concernOrder`.

[`lib/model/board-view.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/model/board-view.ts) · code · 1293 bytes

### build.ts

import { SNAPSHOT_SCHEMA, type BoardGroup, type BoardRow, type CanaryDay, type Cell, type
ReleaseRepo, type SectionRead, type Snapshot, type SourceStatus, type TodayItem, type
WaitingItem, type WriterHealth, } from "@/lib/model/types"; Joins every Signal into the one
model the pages render.

[`lib/model/build.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/model/build.ts) · code · 35621 bytes

### calendar.ts

/** How many days the Calendar shows: the merged-PR search looks back seven days, so no
further. */ export const CALENDAR_DAYS = 7 Notable exports: `calendarDates`, `pickDay`,
`itemDate`, `itemsOn`, `dayCounts`, `brokenNow`, `CALENDAR_DAYS`.

[`lib/model/calendar.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/model/calendar.ts) · code · 2278 bytes

### freshness.ts

/** * Is the writer alive? Judged on its newest completed run (cancelled and skipped already
* dropped): success inside the window is fresh; any other conclusion inside the window is
red * (the data may still be current); nothing inside the window is stale. */ export
function judgeWriter(writer: Writer, runs: Signal, now: Date): WriterHealth { const base = {
Notable exports: `judgeWriter`.

[`lib/model/freshness.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/model/freshness.ts) · code · 1791 bytes

### gardener.ts

The Gardener page's model: is main green in the repos the gardener watches, and is the
gardener working? Everything comes from the gardener's own published files, its workflow's
runs and the caps it pins. Read-only, like every page; a culprit or suspect is shown by its
sha only, never its commit title.

[`lib/model/gardener.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/model/gardener.ts) · code · 16223 bytes

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

_Generated 2026-10-25 10:15 UTC from `main`._
