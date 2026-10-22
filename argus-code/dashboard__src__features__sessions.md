<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/features/sessions -->

# argus-code / dashboard/src/features/sessions

Source: [dashboard/src/features/sessions](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/features/sessions) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AnalysisStrip.tsx

const DUR_TICKS = [1, 10, 60, 600, 3600, 8 * 3600, 86400, 7 * 86400]; const TOK_TICKS =
[1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9]; const tokTick = (n: number) =>
tok(n).replace(/\.0+(?=[kMB]$)/, ''); const durTick = (s: number) => (s >= 86400 ?
${Math.round(s / 86400)}d : s >= 3600 ? ${Math.round(s / 3600)}h : s >= 60 ? ${Math.round(s
/ 60)}m : ${s}s) Notable exports: `AnalysisStrip`.

[`dashboard/src/features/sessions/AnalysisStrip.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/sessions/AnalysisStrip.tsx) · code · 2706 bytes

### SessionsPage.tsx

const WL: Record = { '24h': 'Last 24h', '7d': 'Last 7 days', '30d': 'Last 30 days', all:
'All time' }; const SEL = 'h-6 bg-bg-2 border border-line-2 rounded-md text-[11px] text-
ink-1 px-1.5 max-w-60' Notable exports: `SessionsPage`.

[`dashboard/src/features/sessions/SessionsPage.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/sessions/SessionsPage.tsx) · code · 4668 bytes

### SessionsTable.tsx

const Code = ({ children }: { children: string }) => {children} Notable exports:
`SessionsTable`.

[`dashboard/src/features/sessions/SessionsTable.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/sessions/SessionsTable.tsx) · code · 3737 bytes

### filters.test.ts

const today = new Date('2026-08-21T12:00:00'); const s = [ mk({ id: '1', project_path:
'c:/a/argus', primary_model: 'claude-opus-4-8', started_at: '2026-08-20T01:00:00' }), mk({
id: '2', project_path: 'c:/b/other', primary_model: 'claude-sonnet-4-5', started_at:
'2026-07-01T01:00:00' }), ] Automated test file.

[`dashboard/src/features/sessions/filters.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/sessions/filters.test.ts) · code · 1464 bytes

### filters.ts

export type Filters = { q: string; project: string | null; model: string | null; window:
Window; hasErrors: boolean; agent?: string | null } Notable exports: `applyFilters`,
`Filters`, `errorCount`.

[`dashboard/src/features/sessions/filters.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/sessions/filters.ts) · code · 1089 bytes

_Generated 2026-10-22 10:44 UTC from `main`._
