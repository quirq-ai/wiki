<!-- quirq-wiki-generated repo=monitoring dir=tests/sources -->

# monitoring / tests/sources

Source: [tests/sources](https://github.com/quirq-ai/monitoring/tree/main/tests/sources) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### canary-report.test.ts

describe("canary report", () => { it("finds the newest captured report", async () => { await
withFixtures(); The fixtures also hold a {{today}}.md rendered for the real date, so now is
pinned to a day whose three-day window the real today can never enter again (it failed on
2026-10-07). const signal = await readLatestCanaryReport(3, new Date("2026-10-06T12:0
Automated test file.

[`tests/sources/canary-report.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/canary-report.test.ts) · code · 1447 bytes

### canary-runs.test.ts

describe("canary runs", () => { it("reads a captured shipped run", async () => { await
withFixtures(); const signal = await readCanaryRun("innernet", "2026-10-05");
expect(signal.ok && signal.value?.outcome).toBe("shipped"); if (!signal.ok || !signal.value)
return; expect(signal.value.stages.map((s) => s.name)).toEqual(["build", "verify", "fuzz-
smoke", "depl Automated test file.

[`tests/sources/canary-runs.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/canary-runs.test.ts) · code · 8435 bytes

### channels-config.test.ts

describe("channels config", () => { it("reads the channel order from infra-config", async ()
=> { await withFixtures(); const signal = await readChannelsConfig();
expect(signal.ok).toBe(true); if (!signal.ok) return;
expect(signal.value.channels[0].name).toBe("canary");
expect(signal.value.sourceRef).toBe("lkgr"); }) Automated test file.

[`tests/sources/channels-config.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/channels-config.test.ts) · code · 1229 bytes

### checks.test.ts

describe("checks", () => { it("rolls up the captured monitoring check run", async () => {
await withFixtures(); const signal = await readBranchChecks("monitoring", "main");
expect(signal.ok).toBe(true); if (!signal.ok) return;
expect(signal.value.state).toBe("green");
expect(signal.value.headSha).toBe("dd0e680b761429093de688446802256c18bfc540"); expect(signa

[`tests/sources/checks.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/checks.test.ts) · code · 3944 bytes

### deployments.test.ts

describe("deployments", () => { it("reads the captured monitoring production deploy", async
() => { await withFixtures(); const signal = await readLatestDeployment("monitoring");
expect(signal.ok && signal.value?.sha).toBe("dd0e680b761429093de688446802256c18bfc540"); if
(!signal.ok || !signal.value) return; expect(signal.value.state).toBe("green"); expect(si
Automated test file.

[`tests/sources/deployments.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/deployments.test.ts) · code · 2217 bytes

### failures.test.ts

describe("failures", () => { it("lists the records and marks the planted demo", async () =>
{ await withFixtures(); const signal = await readFailures(); expect(signal.ok).toBe(true);
if (!signal.ok) return; expect(signal.value.length).toBe(1);
expect(signal.value[0].id).toBe("canary-held-aefebec4c11f668b");
expect(signal.value[0].demo).toBe(true); expect(sig Automated test file.

[`tests/sources/failures.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/failures.test.ts) · code · 1888 bytes

### holds.test.ts

const COMMIT = "14b21a41668bc8124b4cf5cf9cd59fb44dc7d419" Automated test file.

[`tests/sources/holds.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/holds.test.ts) · code · 1702 bytes

### issues.test.ts

describe("issues", () => { it("reads open qq-failure and canary-report issues", async () =>
{ await withFixtures(); const failures = await readIssues("qq-failure");
expect(failures.ok).toBe(true); if (!failures.ok) return;
expect(failures.value.length).toBe(1); expect(failures.value[0].repo).toBe("release");
expect(failures.value[0].open).toBe(true); const r Automated test file.

[`tests/sources/issues.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/issues.test.ts) · code · 1393 bytes

### ledger.test.ts

describe("ledger", () => { it("says the ledger has not started while the branch is missing",
async () => { await withFixtures(); const signal = await readLedger();
expect(signal.ok).toBe(false); if (!signal.ok) expect(signal.reason).toBe("ledger not
started"); }) Automated test file.

[`tests/sources/ledger.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/ledger.test.ts) · code · 1542 bytes

### perf.test.ts

describe("perf", () => { it("lists metrics and reads a series", async () => { await
withFixtures(); const metrics = await listPerfMetrics("innernet"); expect(metrics.ok &&
metrics.value).toEqual(["build-size", "innernet-search"]); const series = await
readPerfSeries("innernet", "build-size"); expect(series.ok).toBe(true); if (!series.ok)
return; expect(serie Automated test file.

[`tests/sources/perf.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/perf.test.ts) · code · 4321 bytes

### pointers.test.ts

describe("pointers", () => { it("reads lkgr and a channel pointer", async () => { await
withFixtures(); const lkgr = await readPointer("innernet", "lkgr");
expect(lkgr.ok).toBe(true); if (!lkgr.ok) return; expect(lkgr.value.ref).toBe("lkgr");
expect(lkgr.value.commit).toMatch(/^[0-9a-f]{40}$/);
expect(lkgr.value.history.length).toBeGreaterThan(0); expect(lkg Automated test file.

[`tests/sources/pointers.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/pointers.test.ts) · code · 2211 bytes

### pulls.test.ts

describe("pulls", () => { it("reads the open PRs of the org with their repo", async () => {
await withFixtures(); const signal = await readOpenPulls(); expect(signal.ok).toBe(true); if
(!signal.ok) return; expect(signal.value.pulls.length).toBe(5);
expect(signal.value.pulls.map((p) => p.repo)).toContain("xo-space");
expect(signal.value.pulls.find((p) => p.nu Automated test file.

[`tests/sources/pulls.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/pulls.test.ts) · code · 2987 bytes

### registry.test.ts

describe("registry", () => { it("reads the products from infra-config", async () => { await
withFixtures(); const signal = await readProducts(); expect(signal.ok).toBe(true); if
(!signal.ok) return; const names = signal.value.map((p) => p.name);
expect(names).toContain("innernet"); expect(names).toContain("xo-space");
expect(signal.value.find((p) => p.name = Automated test file.

[`tests/sources/registry.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/registry.test.ts) · code · 2928 bytes

### release-channels.test.ts

const RAW = "release/release-state/channels.json" Automated test file.

[`tests/sources/release-channels.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/release-channels.test.ts) · code · 2321 bytes

### scorecard.test.ts

describe("scorecard", () => { it("reads the captured scorecard with its not-measured list",
async () => { await withFixtures(); const signal = await readScorecard();
expect(signal.ok).toBe(true); if (!signal.ok) return;
expect(signal.observedAt).toBe(signal.value.generated_at);
expect(Object.keys(signal.value.repos).length).toBeGreaterThan(0); expect(signal.

[`tests/sources/scorecard.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/scorecard.test.ts) · code · 1246 bytes

### tree-history.test.ts

describe("tree history", () => { it("derives the open and close events from the commit log",
async () => { await withFixtures(); const signal = await readTreeHistory();
expect(signal.ok).toBe(true); if (!signal.ok) return; expect(signal.value.length).toBe(13);
expect(signal.value[0].changed).toEqual(["innernet"]);
expect(signal.value[0].states.innernet).toBe Automated test file.

[`tests/sources/tree-history.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/tree-history.test.ts) · code · 1702 bytes

### tree-status.test.ts

describe("tree status", () => { it("reads the captured status files", async () => { await
withFixtures(); const xo = await readTreeStatus("xo-space"); expect(xo.ok).toBe(true); if
(!xo.ok) return; expect(xo.value.state).toBe("open");
expect(Object.keys(xo.value.builders)).toContain("xo-space-postsubmit");
expect(xo.value.coverage?.commits).toBe(11); const in Automated test file.

[`tests/sources/tree-status.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/tree-status.test.ts) · code · 1900 bytes

### writer-runs.test.ts

const treeStatus = WRITERS.find((w) => w.id === "gardener/tree-status")! Automated test
file.

[`tests/sources/writer-runs.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/sources/writer-runs.test.ts) · code · 4765 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
