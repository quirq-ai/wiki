<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/features/session -->

# argus-code / dashboard/src/features/session

Source: [dashboard/src/features/session](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/features/session) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### OverviewTab.tsx

export function OverviewTab({ session: s, turns }: { session: Session; turns: TimelineTurn[]
}) { const tz = Intl.DateTimeFormat().resolvedOptions().timeZone; const meta: [string,
string][] = [ ['Project', s.project_path], ['Primary model', s.primary_model],
[agentLabel(s.agent), s.agent_version ?? '—'], ['Started', ${fmtLocalDateTime(s.started_at)}
(${tz})] Notable exports: `OverviewTab`.

[`dashboard/src/features/session/OverviewTab.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/session/OverviewTab.tsx) · code · 3086 bytes

### SessionPage.tsx

export type Tab = 'overview' | 'timeline' | 'subagents' Notable exports: `SessionPage`,
`Tab`.

[`dashboard/src/features/session/SessionPage.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/session/SessionPage.tsx) · code · 5114 bytes

### SubagentsTab.tsx

const total = (s: SubagentSummary) => s.total_tokens ?? s.tokens.fresh_input +
s.tokens.output + s.tokens.cache_read + s.tokens.cache_write; const calls = (s:
SubagentSummary) => s.tool_calls ?? s.tools.reduce((a, t) => a + t.count, 0); type Sort =
'order' | 'tokens' | 'errors' Notable exports: `SubagentsTab`.

[`dashboard/src/features/session/SubagentsTab.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/session/SubagentsTab.tsx) · code · 10670 bytes

### TimelineTab.tsx

/** mcp__server__tool → server · tool; plain tools unchanged. Full name goes in title. */
export const toolLabel = (name: string) => (name.startsWith('mcp__') ?
name.slice(5).split('__').join(' · ') : name); const MAX_CHIPS = 4; const CHUNK = 150; const
kb = (n: number) => (n >= 1024 ? ${(n / 1024).toFixed(1)} KB : ${n} B) Notable exports:
`TimelineTab`, `toolLabel`.

[`dashboard/src/features/session/TimelineTab.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/session/TimelineTab.tsx) · code · 8746 bytes

### model.test.ts

const t = (o: Partial): TimelineTurn => ({ sequence: 1, timestamp: '', model: 'm',
fresh_input_tokens: 0, cache_read_tokens: 0, cache_write_tokens: 0, output_tokens: 0,
cost_usd: 0, tool_calls: [], ...o, }); const call = (tool_name: string, is_error: 0 | 1) =>
({ tool_name, tool_use_id: '', is_error, input_size: 0, subagent_type: null, error_text:
null }) Automated test file.

[`dashboard/src/features/session/model.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/session/model.test.ts) · code · 1488 bytes

### model.ts

export const turnTokens = (t: TimelineTurn) => t.fresh_input_tokens + t.output_tokens;
export const turnAll = (t: TimelineTurn) => turnTokens(t) + t.cache_read_tokens +
t.cache_write_tokens; export const turnHasError = (t: TimelineTurn) => t.tool_calls.some((c)
=> c.is_error === 1); export const cumulativeCost = (turns: TimelineTurn[]) =>
cumulative(turns.ma Notable exports: `toolMix`, `orderTurns`, `turnTokens`, `turnAll`

[`dashboard/src/features/session/model.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/session/model.ts) · code · 1617 bytes

_Generated 2026-10-24 09:53 UTC from `main`._
