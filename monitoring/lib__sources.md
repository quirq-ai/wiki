<!-- quirq-wiki-generated repo=monitoring dir=lib/sources -->

# monitoring / lib/sources

Source: [lib/sources](https://github.com/quirq-ai/monitoring/tree/main/lib/sources) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### canary-report.ts

release release-state reports/<date>.md: the daily canary report, shown as text. Notable
exports: `readLatestCanaryReport`, `CanaryReport`.

[`lib/sources/canary-report.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/canary-report.ts) · code · 1202 bytes

### canary-runs.ts

release release-state canary/<repo>/runs/<date>.json: one outcome per repo per day. A day
with no file is a day the canary did not run for that repo, which is itself worth showing.
Notable exports: `readCanaryRun`, `recentDates`, `listCanaryRunDates`, `readCanaryDays`,
`canaryOutcomes`, `CanaryOutcome`, `CanaryStage`, `CanaryRun`, and 2 more.

[`lib/sources/canary-runs.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/canary-runs.ts) · code · 5651 bytes

### channels-config.ts

infra-config config/channels.toml: the channel order, cadence and the canary schedule. Read,
never restated: the Release page shows channels in this file's order. Notable exports:
`readChannelsConfig`, `dailyCronTime`, `ChannelConfig`, `ChannelsConfig`.

[`lib/sources/channels-config.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/channels-config.ts) · code · 2466 bytes

### checks.ts

The check runs on a branch's head commit, rolled up into one state. Branch names come from
the registry, never from a visitor. Notable exports: `readBranchChecks`, `rollup`,
`CheckRun`, `BranchChecks`.

[`lib/sources/checks.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/checks.ts) · code · 4518 bytes

### deployments.ts

The latest production deployment of a repo and its state. Vercel's GitHub app records one
per push, so this is where "did my merge ship?" is answered. Notable exports:
`readLatestDeployment`, `deployState`, `Deployment`.

[`lib/sources/deployments.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/deployments.ts) · code · 3296 bytes

### failures.ts

test-pipelines results failures/<id>/failure.json: one record per failure the pipeline
opened. Raw cannot list a directory, so the ids come from the contents API (cached 5 min).
Notable exports: `readFailures`, `readFailure`, `FailureRecord`.

[`lib/sources/failures.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/failures.ts) · code · 3667 bytes

### holds.ts

release release-state canary/<repo>/held/<commit>.json: why a canary commit is held, and
whether the hold was released. Written by release src/qqrelease/canary.py (_hold_record).
Notable exports: `readHold`, `Hold`.

[`lib/sources/holds.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/holds.ts) · code · 2081 bytes

### issues.ts

Issues the pipelines file: `qq-failure` (in more than one repo, so the search is org-wide)
and release's daily `canary-report`. Search can lag a new issue by a few minutes. Notable
exports: `readIssues`, `IssueLabel`, `Issue`.

[`lib/sources/issues.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/issues.ts) · code · 2433 bytes

### ledger.ts

gardener ledger reverts/<id>.json and landed/<id>.json. The branch does not exist until the
gardener App does, so a 404 reads `ledger not started`, which is the honest state today.
Record shape from gardener src/qqgarden/ledger.py (Entry) at bf7d24d. Notable exports:
`readLedger`, `LedgerSummary`.

[`lib/sources/ledger.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/ledger.ts) · code · 2243 bytes

### perf.ts

perf perf-data <repo>/<metric>.jsonl: one qq-perf-record/1 per line, write-once. Raw cannot
list a directory, so the metric names come from the contents API (cached an hour). Notable
exports: `listPerfMetrics`, `readPerfSeries`, `PerfRecord`, `PerfSeries`.

[`lib/sources/perf.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/perf.ts) · code · 3826 bytes

### pointers.ts

release release-state pointers/<repo>/lkgr.json and pointers/<repo>/channels/<name>.json:
where a pointer is, where it was, and whether it is pending, mirrored or rolled back.
Notable exports: `readPointer`, `Pointer`, `PointerRef`.

[`lib/sources/pointers.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/pointers.ts) · code · 2322 bytes

### pulls.ts

Pull requests across the org, through the issue search API: one request returns the open PRs
of every repo, so the Board and Today need no call per repo. The search index can lag a
change by a minute or two, which the "as of" time shows. Notable exports: `readOpenPulls`,
`readMergedPulls`, `readReviewRequested`, `readReviewedByOwner`, `readReviewStatus`,
`MERGED_DAYS`, `PullRequest`, `PullSearch`, and 1 more.

[`lib/sources/pulls.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/pulls.ts) · code · 6883 bytes

### registry.ts

The repo registry is owned elsewhere: infra-config config/repos.toml names the products and
gate settings/github.toml names every repo behind the gate. config/repos.json here only adds
the repos neither names. The org's public repo list (GitHub API, with the wiki's daily
manifest as a no-token cross-check) catches any repo none of them knows.

[`lib/sources/registry.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/registry.ts) · code · 8354 bytes

### release-channels.ts

release release-state channels.json: what each channel names right now, per repo. Notable
exports: `readReleaseChannels`, `ChannelEntry`, `ReleaseChannels`.

[`lib/sources/release-channels.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/release-channels.ts) · code · 1737 bytes

### scorecard.ts

test-pipelines results scorecard.json: the weekly numbers per repo, plus what is not
measured yet and why. It has no schema id, so only its shape is checked. Notable exports:
`readScorecard`, `ScorecardMetric`, `Scorecard`.

[`lib/sources/scorecard.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/scorecard.ts) · code · 2006 bytes

### tree-history.ts

gardener commits the tree-status branch only when a state changes, with a message like
`tree-status: innernet open, xo-space closed`. The last 20 commits are the open/close log.
Notable exports: `readTreeHistory`, `parseMessage`, `TreeChange`.

[`lib/sources/tree-history.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/tree-history.ts) · code · 2913 bytes

### tree-status.ts

gardener tree-status status/<repo>.json: open, closed or unknown, with the builders' newest
verdicts and the red ranges. The file carries no timestamp; its writer's run says if it is
alive. Notable exports: `readTreeStatus`, `TreeStatus`.

[`lib/sources/tree-status.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/tree-status.ts) · code · 2460 bytes

### writer-runs.ts

The last completed runs of a writer workflow, whatever triggered them. Cancelled and skipped
runs are routine (every writer queues in a concurrency group), so they are dropped here; the
model judges the newest run that remains. Notable exports: `readWriterRuns`, `WorkflowRun`.

[`lib/sources/writer-runs.ts`](https://github.com/quirq-ai/monitoring/blob/main/lib/sources/writer-runs.ts) · code · 2708 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
