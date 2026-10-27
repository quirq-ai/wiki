<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/lib/api -->

# argus-code / dashboard/src/lib/api

Source: [dashboard/src/lib/api](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/lib/api) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### client.test.ts

it('schemas accept recorded server responses', () => {
expect(Overview.parse(overview).total_tokens).toBeTypeOf('number');
expect(SessionList.parse(sessions).sessions.length).toBeGreaterThan(0);
expect(Timeline.parse(timeline).turns[0].tool_calls).toBeInstanceOf(Array);
expect(ToolsOverview.parse(tools).tool_leaderboard[0].error_rate).toBeTypeOf('number'); e

[`dashboard/src/lib/api/client.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/api/client.test.ts) · code · 1265 bytes

### client.ts

export type Window = '24h' | '7d' | '30d' | 'all'; export const WINDOWS: Window[] = ['24h',
'7d', '30d', 'all']; /** The server names the first window "today". */ export const
toServerWindow = (w: Window): string => (w === '24h' ? 'today' : w); /** * Viewer's UTC
offset in minutes east (IST = 330).

[`dashboard/src/lib/api/client.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/api/client.ts) · code · 4180 bytes

### hooks.ts

Day-bucketed queries key on the UTC offset too: data bucketed before a DST change must not
be served for the new offset. Notable exports: `useOverview`, `useSessions`, `useSession`,
`useTimeline`, `useSubagents`, `useToolsOverview`, `useTrends`, `useAlerts`, and 8 more.

[`dashboard/src/lib/api/hooks.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/api/hooks.ts) · code · 2634 bytes

### schemas.ts

export const Session = z.object({ id: z.string(), agent: z.string(), agent_version:
z.string().nullable(), project_path: z.string(), started_at: z.string(), ended_at:
z.string().nullable(), duration_sec: z.number().nullable(), total_fresh_input_tokens:
z.number(), total_output_tokens: z.number(), total_cache_read_tokens: z.number(),
total_cache_write_tokens Notable exports: `Session`, `SessionList`, `Turn`, `SessionDetail`

[`dashboard/src/lib/api/schemas.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/api/schemas.ts) · code · 6796 bytes

### timezone.test.ts

REGRESSION (H8): the server bucketed days in UTC while the dashboard built local date keys.
Pinned to the maintainer's zone (IST, UTC+5:30) at 02:10 local — between local midnight and
the UTC rollover, when "today" never matched and the chart plotted 0 next to a 91.6M Tokens
tile. No @types/node in this project: reach Node's env through globalThis. Automated test
file.

[`dashboard/src/lib/api/timezone.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/api/timezone.test.ts) · code · 1914 bytes

_Generated 2026-10-27 11:08 UTC from `main`._
