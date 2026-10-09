<!-- quirq-wiki-generated repo=ui dir=components/shapes/lists-tables -->

# ui / components/shapes/lists-tables

Source: [components/shapes/lists-tables](https://github.com/quirq-ai/ui/tree/main/components/shapes/lists-tables) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### collection-tables.tsx

Collection tables built on DataTable: SpacesTable (XO Swarm spaces, with a mobile card
layout, copy ID, delete with a row busy state and a pending status) and FilesTable (files
and links added to a space, with loading, empty, error and opening states). Notable exports:
`SpacesTable`, `FilesTable`, `SpaceTableRow`, `SpacesTableProps`, `FileTableRow`,
`FilesTableProps`. Marked `'use client'` so it runs in the browser.

[`components/shapes/lists-tables/collection-tables.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/collection-tables.tsx) · code · 11965 bytes

### data-table-demo.tsx

Live demo for the data-table shape: every variant (spaces, sessions, files, quarter ledger,
comparison matrix, folder listing, state tree, recent work, CSV reader) and the empty,
loading and hover states, wired for sort, row open and CSV export. Notable exports:
`DataTableDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/lists-tables/data-table-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/data-table-demo.tsx) · code · 29996 bytes

### data-table.tsx

DataTable: the sortable, paginated table behind spaces, sessions, files and ledgers. Mono
uppercase head, tabular numerals, hairline rows, a focusable scroll region, sortable headers
(aria-sort), whole-row open with a keyboard button in the row header, skeleton loading rows
and an inline empty row. Also: Pager, TableToolbar and CSV export.

[`components/shapes/lists-tables/data-table.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/data-table.tsx) · code · 19178 bytes

### demo-kit.tsx

Small server-safe helpers shared by the lists-tables demos and components: the mono demo
caption, a labelled demo block, the provenance qualifier that rides under mock or
illustrative numbers, and the fixture runtime id to logo id mapping. Notable exports:
`DemoCaption`, `DemoBlock`, `ProvenanceNote`, `logoFor`.

[`components/shapes/lists-tables/demo-kit.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/demo-kit.tsx) · code · 2488 bytes

### feed-rows.tsx

Feed rows: ConnectionsList and ConnectionRow (polled apps with Poll now and Configure),
JobRow (saved command with schedule, last result, Run now, Results, Edit, Delete; compact or
full), InboxRow (dot, kind, title, project, when; new, seen or done; opens to its text and
actions) with InboxSkeleton, and SharingRow (shared project that may need Apply).

[`components/shapes/lists-tables/feed-rows.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/feed-rows.tsx) · code · 18227 bytes

### index.tsx

lists-tables: tables, grouped lists, live rows, numbered lists, boards and todos. Each
shape's reusable components live in their own file; demos feed them fixture data. Notable
exports: `shapes`.

[`components/shapes/lists-tables/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/index.tsx) · code · 3470 bytes

### issue-board-demo.tsx

Live demo for the issue-board shape: the carousel lane board with a project select and
refresh (open any card on GitHub), the issue list panel with filter and Check GitHub, and
the loading, stale, error, no remote and empty lane states. Notable exports:
`IssueBoardDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/lists-tables/issue-board-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/issue-board-demo.tsx) · code · 5721 bytes

### issue-board.tsx

Issue board: IssueBoard (header with project select and refresh, banners, three lanes),
IssueLane (a sideways carousel of IssueCards with previous and next), IssueCard (opens the
issue on GitHub in a new tab) and IssueListPanel (the compact rows view with filter, Open,
Closed and All, and Check GitHub). Column rule: closed is Completed; open with an assignee
is In progress; everything else is Todo.

[`components/shapes/lists-tables/issue-board.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/issue-board.tsx) · code · 16793 bytes

### numbered-list-demo.tsx

Live demo for the numbered-list shape: reading list (with Start here and plain), plan lists
(How we work, What we do), the gap-px hairline list and evidence tier grid with a replayable
staggered reveal, and the feature dot list. Notable exports: `NumberedListDemo`. Marked
`'use client'` so it runs in the browser.

[`components/shapes/lists-tables/numbered-list-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/numbered-list-demo.tsx) · code · 6393 bytes

### numbered-list.tsx

Numbered and hairline lists. Server-safe, no hooks. ReadingList: zero padded ordinals,
title, Start here badge, read time, a ↗ circle; rows are links. PlanList: counter numbered
steps with a bold lead sentence, hairlines between. HairlineList and HairlineGrid: the gap-
px trick for perfect 1px dividers in any grid. FeatureDotList: a saturated dot, a mono
uppercase title and one line of copy.

[`components/shapes/lists-tables/numbered-list.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/numbered-list.tsx) · code · 7626 bytes

### readers.tsx

Readers: TreeTable (an expandable folder tree with purpose, size and age columns, as the
Technical details state tree shows it) and CsvReader (a bounded, paged preview of a CSV with
row numbers, a sticky head, zebra rows and a header-row toggle). Notable exports:
`TreeTable`, `parseCsv`, `CsvReader`, `TreeRow`, `TreeTableProps`, `CsvReaderProps`. Marked
`'use client'` so it runs in the browser.

[`components/shapes/lists-tables/readers.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/readers.tsx) · code · 14372 bytes

### resource-rows-demo.tsx

Live demo for the resource-rows shape: galileo sources (Open, Remove, polling), project
catalog rows with their drawer, a folder app list, polled connections (Poll now), jobs (Run
now, Results), the inbox (new, seen, done, Mark seen) and the sharing rail (Apply). Notable
exports: `ResourceRowsDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/lists-tables/resource-rows-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/resource-rows-demo.tsx) · code · 21854 bytes

### resource-rows.tsx

Live resource rows: SourceGroup and SourceRow (galileo port and files sources with Open and
Remove), PollingNote (the "checked 3s ago · every 5 s" line), ProjectRow (catalog row that
opens into a three panel drawer) and FolderRow (folder app list row, locked when
inaccessible). Rows share one anatomy: dot, name with mono detail, state text, actions.

[`components/shapes/lists-tables/resource-rows.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/resource-rows.tsx) · code · 12339 bytes

### settings-list-demo.tsx

Live demo for the settings-list shape: models (OAuth subscriptions and API keys, tap to
expand a key row), channels, data sources (provider connect rows in every state), the setup
checklist with and without Channels, and loading skeleton rows. Notable exports:
`SettingsListDemo`. Marked `'use client'` so it runs in the browser.

[`components/shapes/lists-tables/settings-list-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/settings-list-demo.tsx) · code · 11700 bytes

### settings-list.tsx

Inset grouped settings list (iOS style) in quirq tokens: GroupedList (uppercase caption,
rounded group, inset separators, footer), GroupedRow (52px row with icon tile, title, value
and accessory), KeyRow (a row that expands into a masked key field with Save), ProviderRow
(connect a data source: connected, needs auth, error, loading; stacks under 520px of
container width) and SetupChecklist (n of m complete, done or not configured rows).

[`components/shapes/lists-tables/settings-list.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/settings-list.tsx) · code · 17938 bytes

### static-tables.tsx

Static tables with their own looks: ComparisonMatrix (offerings by feature, first head cell
sr-only), FolderListing (galileo files source listing with its read-only footnote),
KeyValueTable (190px muted key column) and RecentWorkTable (ARIA grid of recent events).
Server-safe: no hooks. Handlers are optional and only passed from client demos.

[`components/shapes/lists-tables/static-tables.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/static-tables.tsx) · code · 11485 bytes

### todo-checklist-demo.tsx

Live demo for the todo-checklist shape: steps grouped by session (completed, in progress,
pending, blocked and cancelled) and the next step card for several sessions. Read only.
Notable exports: `TodoChecklistDemo`.

[`components/shapes/lists-tables/todo-checklist-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/todo-checklist-demo.tsx) · code · 3399 bytes

### todo-checklist.tsx

Todo checklist and next step card. Read only and server-safe. TodoChecklist: one group per
session (session id, runtime, project, progress), then a row per step with its status icon,
and the note on blocked or cancelled steps. NextStepCard: the step a session works on next
(in progress first, then pending). A todo inside a session is shown to people as a step.

[`components/shapes/lists-tables/todo-checklist.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/lists-tables/todo-checklist.tsx) · code · 6201 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
