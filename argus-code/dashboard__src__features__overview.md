<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/features/overview -->

# argus-code / dashboard/src/features/overview

Source: [dashboard/src/features/overview](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/features/overview) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AttentionStrip.tsx

const KIND = { info: 'info', warning: 'warn', critical: 'crit' } as const; export const
alertWhen = (a: Alert) => a.created_at ?? a.first_seen_at ?? '' Notable exports:
`AttentionStrip`, `alertWhen`.

[`dashboard/src/features/overview/AttentionStrip.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/overview/AttentionStrip.tsx) · code · 2126 bytes

### OverviewPage.tsx

const DOW = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; const HOURS = Array.from({
length: 24 }, (_, i) => String(i).padStart(2, '0')) Notable exports: `OverviewPage`.

[`dashboard/src/features/overview/OverviewPage.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/overview/OverviewPage.tsx) · code · 6012 bytes

### TopSessions.tsx

const HEAD = ['STARTED', 'PROJECT', 'MODEL', 'TOKENS', 'EST. COST'] Notable exports:
`TopSessions`.

[`dashboard/src/features/overview/TopSessions.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/overview/TopSessions.tsx) · code · 2767 bytes

### useOverviewModel.test.ts

const ov = (tokens: number, cost: number, sessions: number, prior:
Overview['prior_window']): Overview => ({ window: '7d', total_cost_usd: cost, total_tokens:
tokens, session_count: sessions, agent_split: {}, cost_by_day: {}, cost_by_model: {},
tokens_by_day: {}, tokens_by_model: {}, top_sessions: [], prior_window: prior, }) Automated
test file.

[`dashboard/src/features/overview/useOverviewModel.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/overview/useOverviewModel.test.ts) · code · 1391 bytes

### useOverviewModel.ts

type Tools = { total_calls: number; total_errors: number } | undefined; export type Tiles =
{ tokens: Delta | null; cost: Delta | null; sessions: Delta | null; errorRate: Delta | null
}; const NONE: Tiles = { tokens: null, cost: null, sessions: null, errorRate: null } Notable
exports: `overviewTiles`, `useOverviewModel`, `Tiles`.

[`dashboard/src/features/overview/useOverviewModel.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/overview/useOverviewModel.ts) · code · 2687 bytes

_Generated 2026-10-29 11:51 UTC from `main`._
