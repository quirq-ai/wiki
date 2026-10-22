<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/features/tools -->

# argus-code / dashboard/src/features/tools

Source: [dashboard/src/features/tools](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/features/tools) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### ToolsPage.tsx

const MAX_DERIVE_SESSIONS = 60; type DayView = 'columns' | 'area' | 'table' Notable exports:
`ToolsPage`.

[`dashboard/src/features/tools/ToolsPage.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/tools/ToolsPage.tsx) · code · 5446 bytes

### toolsOverTime.test.ts

const t = (names: string[], timestamp = '2026-08-20T10:00:00'): TimelineTurn => ({ sequence:
1, timestamp, model: '', fresh_input_tokens: 0, cache_read_tokens: 0, cache_write_tokens: 0,
output_tokens: 0, cost_usd: 0, tool_calls: names.map((n) => ({ tool_name: n, tool_use_id:
'', is_error: 0 as const, input_size: 0, subagent_type: null, error_text: null })) Automated
test file.

[`dashboard/src/features/tools/toolsOverTime.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/tools/toolsOverTime.test.ts) · code · 882 bytes

### toolsOverTime.ts

candidate-endpoint: per-day tool call counts; today derived from session timelines client-
side. Notable exports: `toolCallsByDay`.

[`dashboard/src/features/tools/toolsOverTime.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/tools/toolsOverTime.ts) · code · 1449 bytes

_Generated 2026-10-22 10:44 UTC from `main`._
