<!-- quirq-wiki-generated repo=ui dir=components/shapes/metrics-charts -->

# ui / components/shapes/metrics-charts

Source: [components/shapes/metrics-charts](https://github.com/quirq-ai/ui/tree/main/components/shapes/metrics-charts) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### acceptance-review-demo.tsx

Demo: verification and acceptance review. Five units cover every variant and state: awaiting
review (uow_118), accepted (uow_120, illustrative), below threshold so it counts toward IR
(uow_124), sent back with a note (uow_123) and measurement unavailable (uow_121). Expand a
check for its evidence, accept, or send back with a note (Escape cancels the note); Reopen
review undoes a decision. Notable exports: `AcceptanceReviewDemo`.

[`components/shapes/metrics-charts/acceptance-review-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/acceptance-review-demo.tsx) · code · 4113 bytes

### acceptance-review.tsx

Verification and acceptance review for one unit of work: the header (unit, project, owner,
budget B), weighted checks that expand to their evidence, the before and after snapshot
diff, computed V and minted Q = V · B, evidence links, and the owner's Accept or Send back
(with a required note). Below threshold counts toward IR; an unavailable measurement can be
sent back for evidence but never accepted, and never reads 0.

[`components/shapes/metrics-charts/acceptance-review.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/acceptance-review.tsx) · code · 20987 bytes

### bar-chart-demo.tsx

Demo: bar charts. Daily cost columns, stacked message breakdown, ranked top models, tools
and MCP servers, the grey-ramp quirq card, and the empty states. Hover any column or row;
focus a column chart and use the arrow keys. Notable exports: `BarChartDemo`.

[`components/shapes/metrics-charts/bar-chart-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/bar-chart-demo.tsx) · code · 7737 bytes

### bar-chart.tsx

Bar charts: ColumnChart (daily columns, single or stacked, 4px rounded data ends, 2px
surface gaps, hover and keyboard tooltip), RankedBarList (label | track | value rows for top
models, tools and servers) and RampBars (the grey-ramp efficiency card with one colored
headline). Columns are HTML, so rounded ends never distort at any width.

[`components/shapes/metrics-charts/bar-chart.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/bar-chart.tsx) · code · 18624 bytes

### calculator-demo.tsx

Demo: Hours-back calculator (Machine Speed). The full quirq skin starts below target (blue,
9.6 hours from the illustrative defaults); the compact Machine Speed skin starts at the
target (green). Drag the sliders, or focus one and use the arrow keys; the result is
announced politely. The answer is hours, not quirqs. Notable exports: `CalculatorDemo`.

[`components/shapes/metrics-charts/calculator-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/calculator-demo.tsx) · code · 1136 bytes

### calculator.tsx

Hours-back calculator (Machine Speed). Two sliders drive a live result toward the ten-hour
target: blue below it, green at or past it, announced politely. The answer is hours, not
quirqs. Full variant: quirq skin with the stat pair and the disclosures that hold the one
assumption (two levers). Compact variant: the Machine Speed olive skin.

[`components/shapes/metrics-charts/calculator.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/calculator.tsx) · code · 19409 bytes

### chart-kit.tsx

Shared, server-safe helpers for the metrics and charts shapes: value formats that can cross
the server/client boundary as plain strings, nice axis maths, monotone line paths, arcs, and
a few tiny presentational pieces (captions, legends, provenance tags, empty plots). No hooks
here, so both server demos and client charts can import it.

[`components/shapes/metrics-charts/chart-kit.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/chart-kit.tsx) · code · 15140 bytes

### index.tsx

Reusable pieces, for sample apps that compose these shapes. Notable exports: `shapes`.

[`components/shapes/metrics-charts/index.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/index.tsx) · code · 4936 bytes

### quirq-measurement-demo.tsx

Demo: quirq measurement readouts. Every variant (mint rule card, formula callout, two
meters, mint flow, QER/QV/IR) and every state (Available, Unavailable, mock and illustrative
provenance), fed from the quirq readings and portfolio windows fixtures. Notable exports:
`QuirqMeasurementDemo`.

[`components/shapes/metrics-charts/quirq-measurement-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/quirq-measurement-demo.tsx) · code · 9588 bytes

### quirq-measurement.tsx

quirq measurement readouts. Server-safe. MintRuleCard (B before the run, Q = V · B after
verification), FormulaCallout (quirq and Machine Speed skins), MeterCard and BridgeGrid (the
input meter against the output meter), MintFlow and MintChip (budget, verification, minted)
and QuirqReadout (Work delivered with QER, QV, IR and a separate cost).

[`components/shapes/metrics-charts/quirq-measurement.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/quirq-measurement.tsx) · code · 20340 bytes

### radial-charts-demo.tsx

Demo: rings, donut and gauge. CPU, memory and disk rings per space (ready, Unavailable,
could not read, loading), token and model donuts (hover a slice or a legend row), the error
gauge (healthy, above threshold, zero shows only the track, Unavailable) and the concentric
radar of where each space runs. Notable exports: `RadialChartsDemo`.

[`components/shapes/metrics-charts/radial-charts-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/radial-charts-demo.tsx) · code · 10749 bytes

### radial-charts.tsx

Rings, donut and gauge: ActivityRings (CPU, memory and disk as concentric rings with a stats
list), Donut (share of a total with a center readout; the hovered slice grows 6px),
RadialGauge (one ratio on a 270 degree arc, warn color past a threshold, track only at zero)
and ConcentricRadar (where spaces run, by trust boundary, with a slow sweep). Every chart
keeps a text list beside it, so identity never rests on color alone.

[`components/shapes/metrics-charts/radial-charts.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/radial-charts.tsx) · code · 19078 bytes

### stat-tile-demo.tsx

Demo: stat tiles and KPI rows. Variants hero, 4-up, stat pair, resource tiles and mini;
states value, Unavailable (never a dash or 0) and skeleton. Usage numbers are the token
meter for the last 7 days of research-lab, all mock. Notable exports: `StatTileDemo`.

[`components/shapes/metrics-charts/stat-tile-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/stat-tile-demo.tsx) · code · 9673 bytes

### stat-tile.tsx

Stat tiles and KPI rows. Server-safe. StatTile (hero, stat and mini sizes; a missing value
reads "Unavailable", never 0 or a dash), StatGrid (1, 2, 3, 4 or 6 up by container width),
StatPair (two side-by-side cards that stack on phones), ResourceTiles (Up and Down service
tiles with loading and offline states) and FactGrid (mono value over a tiny label, for
drawers and world stats).

[`components/shapes/metrics-charts/stat-tile.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/stat-tile.tsx) · code · 11945 bytes

### trend-chart-demo.tsx

Demo: area, line and sparkline charts. Tokens area, latency band (with the telemetry gap on
14 Sep reading Unavailable), sparklines (14 days, one point, no data), the tenure learning
curve (illustrative benchmark) and cost sparkline cards. Hover any plot, or focus it and use
the arrow keys. Notable exports: `TrendChartDemo`.

[`components/shapes/metrics-charts/trend-chart-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/trend-chart-demo.tsx) · code · 9807 bytes

### trend-chart.tsx

Area, line and sparkline charts. One responsive SVG per plot (stretched with
preserveAspectRatio="none" and non-scaling strokes) with HTML for every piece of text, the
dots, the crosshair and the tooltip, so text never distorts and nothing needs to measure the
container. Hover snaps a crosshair to the nearest point; the plot is also keyboard operable
(arrows, Home, End, Escape) and carries a screen-reader data table.

[`components/shapes/metrics-charts/trend-chart.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/trend-chart.tsx) · code · 29025 bytes

### usage-dashboard-demo.tsx

Demo: usage dashboard and heatmap. Populated (range control, refresh, summary strip, KPI
row, token trend, top models, daily cost and the 16-week heatmap), a static refreshing
snapshot, and an empty window for a space that is still starting. Notable exports:
`UsageDashboardDemo`.

[`components/shapes/metrics-charts/usage-dashboard-demo.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/usage-dashboard-demo.tsx) · code · 2286 bytes

### usage-dashboard.tsx

Usage dashboard for one space: a range control and refresh in one row above everything, a
summary strip (cost, messages, tokens), a KPI row with week-over-week deltas, the token
trend, top models, daily cost and a 16-week calendar heatmap. Tokens and cost are the usage
meter, never quirqs. An empty window keeps the frame and reads Unavailable.

[`components/shapes/metrics-charts/usage-dashboard.tsx`](https://github.com/quirq-ai/ui/blob/main/components/shapes/metrics-charts/usage-dashboard.tsx) · code · 18464 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
