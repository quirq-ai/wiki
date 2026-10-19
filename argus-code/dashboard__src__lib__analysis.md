<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/lib/analysis -->

# argus-code / dashboard/src/lib/analysis

Source: [dashboard/src/lib/analysis](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/lib/analysis) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### composition.test.ts

it('sums the four token kinds', () => { const c = composition([mk({
total_fresh_input_tokens: 1, total_cache_write_tokens: 2, total_cache_read_tokens: 3,
total_output_tokens: 4 })]); expect(c).toEqual({ fresh: 1, cacheWrite: 2, cacheRead: 3,
output: 4, total: 10 }); }) Automated test file.

[`dashboard/src/lib/analysis/composition.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/composition.test.ts) · code · 354 bytes

### composition.ts

candidate-endpoint: token composition per window could come from /api/overview. Notable
exports: `composition`.

[`dashboard/src/lib/analysis/composition.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/composition.ts) · code · 545 bytes

### cumulative.test.ts

it('cumulative', () => expect(cumulative([1, 2, 3])).toEqual([1, 3, 6])) Automated test
file.

[`dashboard/src/lib/analysis/cumulative.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/cumulative.test.ts) · code · 118 bytes

### cumulative.ts

export const cumulative = (v: number[]): number[] => { let a = 0; return v.map((x) => (a +=
x)); } Notable exports: `cumulative`.

[`dashboard/src/lib/analysis/cumulative.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/cumulative.ts) · code · 104 bytes

### deltas.test.ts

it('delta computes abs/pct/dir', () => { expect(delta(120, 100)).toEqual({ abs: 20, pct:
0.2, dir: 'up' }); expect(delta(100, 100)?.dir).toBe('flat'); expect(delta(50,
0)?.pct).toBeNull(); expect(delta(5, null)).toBeNull(); }) Automated test file.

[`dashboard/src/lib/analysis/deltas.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/deltas.test.ts) · code · 569 bytes

### deltas.ts

export type Delta = { abs: number; pct: number | null; dir: 'up' | 'down' | 'flat' } Notable
exports: `delta`, `deltaTone`, `Delta`.

[`dashboard/src/lib/analysis/deltas.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/deltas.ts) · code · 586 bytes

### hourWeekday.test.ts

it('buckets by local weekday (Mon=0) and hour', () => { const m = hourWeekday([mk({
started_at: '2026-08-19T21:24:12' })]); // a Wednesday expect(m.length).toBe(7);
expect(m[0].length).toBe(24); expect(m[2][21]).toBe(1); }) Automated test file.

[`dashboard/src/lib/analysis/hourWeekday.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/hourWeekday.test.ts) · code · 312 bytes

### hourWeekday.ts

candidate-endpoint: a weekday×hour histogram endpoint would avoid shipping every session.
Notable exports: `hourWeekday`.

[`dashboard/src/lib/analysis/hourWeekday.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/hourWeekday.ts) · code · 563 bytes

### rollups.test.ts

it('byProject aggregates and sorts by tokens', () => { const r = byProject([ mk({
project_path: 'a', total_output_tokens: 5, total_cost_usd: 1 }), mk({ project_path: 'b',
total_output_tokens: 9 }), mk({ project_path: 'a', total_output_tokens: 1 }), ]);
expect(r[0]).toEqual({ project: 'b', sessions: 1, tokens: 9, cost: 0 });
expect(r[1]).toEqual({ project: 'a Automated test file.

[`dashboard/src/lib/analysis/rollups.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/rollups.test.ts) · code · 1463 bytes

### rollups.ts

export const sessionTokens = (s: Session) => s.total_fresh_input_tokens +
s.total_output_tokens + s.total_cache_read_tokens + s.total_cache_write_tokens Notable
exports: `byProject`, `topNPlusOther`, `inWindow`, `sessionTokens`, `perMTokens`.

[`dashboard/src/lib/analysis/rollups.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/rollups.ts) · code · 1694 bytes

### series.test.ts

const points: TrendsResponse['points'] = [ { bucket: '2026-W32', groups: { opus: { tokens:
10, cost: 1, sessions: 1 }, sonnet: { tokens: 5, cost: 0.2, sessions: 1 } } }, { bucket:
'2026-W33', groups: { opus: { tokens: 20, cost: 2, sessions: 1 } } }, ] Automated test file.

[`dashboard/src/lib/analysis/series.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/series.test.ts) · code · 1193 bytes

### series.ts

const MAX = 5 Notable exports: `trendsToSeries`, `shareOfTotal`, `periodDeltas`.

[`dashboard/src/lib/analysis/series.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/series.ts) · code · 1336 bytes

### testutil.ts

export const mk = (o: Partial = {}): Session => ({ id: 'claude_code:x', agent:
'claude_code', agent_version: null, project_path: 'c:/proj/example', started_at:
'2026-08-20T10:00:00', ended_at: null, duration_sec: 60, total_fresh_input_tokens: 0,
total_output_tokens: 0, total_cache_read_tokens: 0, total_cache_write_tokens: 0,
total_cost_usd: 0, primary_model Notable exports: `mk`.

[`dashboard/src/lib/analysis/testutil.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/testutil.ts) · code · 592 bytes

### trendsMetrics.test.ts

it('bucketKey matches the server: UTC day, month, and Jan-1-anchored week', () => {
expect(bucketKey('2026-08-21T01:00:00Z', 'day')).toBe('2026-08-21');
expect(bucketKey('2026-08-21T01:00:00Z', 'month')).toBe('2026-08'); 2026-01-01 is a Thursday
(jsDow 4): Jan 1–3 → W01, Jan 4 → W02 (same formula as api._week_of).
expect(bucketKey('2026-01-01T12:00:00Z', 'we Automated test file.

[`dashboard/src/lib/analysis/trendsMetrics.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/trendsMetrics.test.ts) · code · 1652 bytes

### trendsMetrics.ts

export type Granularity = 'day' | 'week' | 'month'; type Point =
TrendsResponse['points'][number] Notable exports: `bucketKey`, `bucketTotals`,
`cacheShareByBucket`, `runRate`, `Granularity`, `BucketTotals`, `perSession`, `perMTokens`,
and 1 more.

[`dashboard/src/lib/analysis/trendsMetrics.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/trendsMetrics.ts) · code · 2713 bytes

### windows.test.ts

const today = new Date('2026-08-21T12:00:00') Automated test file.

[`dashboard/src/lib/analysis/windows.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/windows.test.ts) · code · 645 bytes

### windows.ts

export const windowDays = (w: Window): number | null => ({ '24h': 1, '7d': 7, '30d': 30,
all: null })[w] Notable exports: `dayKeys`, `windowDays`, `widerWindowFor`, `sliceWindow`.

[`dashboard/src/lib/analysis/windows.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/lib/analysis/windows.ts) · code · 927 bytes

_Generated 2026-10-19 11:22 UTC from `main`._
