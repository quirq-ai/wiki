<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/components/charts -->

# argus-code / dashboard/src/components/charts

Source: [dashboard/src/components/charts](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/components/charts) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AlertStrip.tsx

const COLOR = { info: '#3987e5', warning: '#fab219', critical: '#d03b3b' } as const Notable
exports: `AlertStrip`.

[`dashboard/src/components/charts/AlertStrip.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/AlertStrip.tsx) · code · 1362 bytes

### AreaLine.test.tsx

it('mounts a uPlot chart and a legend for two series', () => { render();
expect(document.querySelector('.uplot')).not.toBeNull();
expect(screen.getByText('opus')).toBeInTheDocument();
expect(screen.getByText('sonnet')).toBeInTheDocument(); }) Automated test file.

[`dashboard/src/components/charts/AreaLine.test.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/AreaLine.test.tsx) · code · 643 bytes

### AreaLine.tsx

export type LineSeries = { name: string; values: number[] } Notable exports: `AreaLine`,
`LineSeries`.

[`dashboard/src/components/charts/AreaLine.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/AreaLine.tsx) · code · 2181 bytes

### Bars.test.tsx

it('draws one row per entry, scaled to the max, with error segments', () => { render();
expect(screen.getByText('Bash')).toBeInTheDocument(); const fills =
screen.getAllByTestId('bar-fill'); expect(fills[0]).toHaveStyle({ width: '100%' });
expect(fills[1]).toHaveStyle({ width: '47.66839378238342%' });
expect(screen.getByTestId('bar-error')).toBeInTheDocument Automated test file.

[`dashboard/src/components/charts/Bars.test.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/Bars.test.tsx) · code · 610 bytes

### Bars.tsx

export type BarRow = { name: string; value: number; error?: number } Notable exports:
`Bars`, `BarRow`.

[`dashboard/src/components/charts/Bars.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/Bars.tsx) · code · 1561 bytes

### CalendarHeatmap.test.tsx

it('renders one cell per day with a title', () => { const { container } = render();
expect(container.querySelectorAll('rect[data-day]').length).toBe(14);
expect(container.querySelector('rect[data-day="2026-08-21"]
title')?.textContent).toMatch(/2026-08-21/); }) Automated test file.

[`dashboard/src/components/charts/CalendarHeatmap.test.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/CalendarHeatmap.test.tsx) · code · 467 bytes

### CalendarHeatmap.tsx

/** GitHub-style weeks × weekdays grid; one-hue ramp. */ export function CalendarHeatmap({
byDay, days = 90, end = new Date(), className = '' }: { byDay: Record; days?: number; end?:
Date; className?: string; }) { const keys = dayKeys(end, days); const max = Math.max(1,
...keys.map((k) => byDay[k] ?? 0)); const startDow = (new Date(keys[0] + 'T00:00:00').get
Notable exports: `CalendarHeatmap`.

[`dashboard/src/components/charts/CalendarHeatmap.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/CalendarHeatmap.tsx) · code · 1490 bytes

### ChartTable.tsx

export type TableSpec = { columns: string[]; rows: (string | number)[][] } Notable exports:
`ChartTable`, `ChartWithTable`, `TableSpec`.

[`dashboard/src/components/charts/ChartTable.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/ChartTable.tsx) · code · 1441 bytes

### GridHeatmap.tsx

export function GridHeatmap({ matrix, rowLabels, colLabels, className = '' }: { matrix:
number[][]; rowLabels: string[]; colLabels: string[]; className?: string; }) { const max =
Math.max(1, ...matrix.flat()); const cw = 16, ch = 14, gap = 2, lx = 26; return ( Notable
exports: `GridHeatmap`.

[`dashboard/src/components/charts/GridHeatmap.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/GridHeatmap.tsx) · code · 1338 bytes

### Legend.tsx

export function Legend({ names, colors }: { names: string[]; colors: string[] }) { return (
Notable exports: `Legend`.

[`dashboard/src/components/charts/Legend.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/Legend.tsx) · code · 436 bytes

### Meter.test.tsx

it('renders a legend entry per part with its share', () => { render();
expect(screen.getByText('cache read')).toBeInTheDocument();
expect(screen.getByText('88%')).toBeInTheDocument(); }) Automated test file.

[`dashboard/src/components/charts/Meter.test.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/Meter.test.tsx) · code · 404 bytes

### Meter.tsx

/** Single stacked bar with 2 px surface gaps + legend with shares. */ export function
Meter({ parts, className = '' }: { parts: { name: string; value: number; color: string }[];
className?: string }) { const total = parts.reduce((a, p) => a + p.value, 0) || 1; return (
Notable exports: `Meter`.

[`dashboard/src/components/charts/Meter.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/Meter.tsx) · code · 1016 bytes

### Minimap.test.tsx

it('draws a bar per turn, flags errors, reports clicks', () => { const onPick = vi.fn();
const base = { timestamp: '', model: 'm', cost_usd: 0, cache_write_tokens: 0 }; const turns:
TimelineTurn[] = [ { ...base, sequence: 1, fresh_input_tokens: 5, output_tokens: 5,
cache_read_tokens: 10, tool_calls: [] }, { ...base, sequence: 2, fresh_input_tokens: 1,
output Automated test file.

[`dashboard/src/components/charts/Minimap.test.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/Minimap.test.tsx) · code · 1058 bytes

### Minimap.tsx

/** Tokens per turn: cache read as the base bar, fresh+output on top; error turns in red.
Click to jump. */ export function Minimap({ turns, onPick, active }: { turns:
TimelineTurn[]; onPick: (seq: number) => void; active?: number }) { const n = Math.max(1,
turns.length); const W = 1160, H = 96, base = 80; const step = (W - 8) / n; const bw =
Math.max(2, Mat Notable exports: `Minimap`.

[`dashboard/src/components/charts/Minimap.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/Minimap.tsx) · code · 1978 bytes

### MultiLine.tsx

export const MultiLine = (p: { labels: string[]; series: LineSeries[]; share?: boolean;
format?: (n: number) => string; height?: number }) => ( Notable exports: `MultiLine`.

[`dashboard/src/components/charts/MultiLine.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/MultiLine.tsx) · code · 239 bytes

### README.md

The project README (“Chart rules (binding for everything under `components/charts` and its
callers)”). Colour roles - Orange --color-accent is brand + UI accent only (active nav,
active filter, focus). Never chart data. - Single-series data uses series slot 1 #3987e5.
Multi-series use SERIES from uplotTheme.ts in fixed order, never cycled; beyond five series
fold into "Other" (trendsToSeries, topNPlusOther).

[`dashboard/src/components/charts/README.md`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/README.md) · code · 1482 bytes

### Scatter.tsx

const ident = (n: number) => String(n) Notable exports: `Scatter`, `ScatterPoint`.

[`dashboard/src/components/charts/Scatter.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/Scatter.tsx) · code · 4677 bytes

### Sparkline.tsx

export function Sparkline({ values, width = 120, height = 28, className = '' }: { values:
number[]; width?: number; height?: number; className?: string }) { if (!values.length)
return null; const max = Math.max(1, ...values); const step = values.length > 1 ? (width -
4) / (values.length - 1) : 0; const pts = values.map((v, i) => [2 + i * step, height - 2 - (
Notable exports: `Sparkline`.

[`dashboard/src/components/charts/Sparkline.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/Sparkline.tsx) · code · 891 bytes

### StackedColumns.tsx

export type StackSeries = { name: string; values: number[] } Notable exports:
`StackedColumns`, `StackSeries`.

[`dashboard/src/components/charts/StackedColumns.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/StackedColumns.tsx) · code · 4133 bytes

### UPlotChart.tsx

export type UPlotOptions = Omit Notable exports: `UPlotChart`, `UPlotOptions`.

[`dashboard/src/components/charts/UPlotChart.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/UPlotChart.tsx) · code · 1268 bytes

### ramp.ts

One-hue blue ramp for magnitude (heatmaps). Index 0 = "nothing". Notable exports: `RAMP`,
`rampColor`.

[`dashboard/src/components/charts/ramp.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/ramp.ts) · code · 277 bytes

### uplotTheme.ts

/** Fixed categorical order (dataviz-validated dark steps); slot 6 is the "Other" grey. */
export const SERIES = ['#3987e5', '#d95926', '#199e70', '#c98500', '#d55181', '#667184']
Notable exports: `SERIES`, `AXIS`, `hexA`.

[`dashboard/src/components/charts/uplotTheme.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/components/charts/uplotTheme.ts) · code · 504 bytes

_Generated 2026-10-21 10:42 UTC from `main`._
