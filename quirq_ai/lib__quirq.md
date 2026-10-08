<!-- quirq-wiki-generated repo=quirq_ai dir=lib/quirq -->

# quirq_ai / lib/quirq

Source: [lib/quirq](https://github.com/quirq-ai/quirq_ai/tree/main/lib/quirq) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### cli.mjs

The quirq CLI: snapshot, verify, mint, record.

[`lib/quirq/cli.mjs`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/cli.mjs) · code · 16085 bytes

### engine.d.mts

Types for engine.mjs. Hand-written because the engine ships as ESM JavaScript so that one
file can serve both `node` (the CLI) and the app. Notable exports: `scoreUnit`, `mint`,
`costTotal`, `unitMetrics`, `portfolioMetrics`, `settleUnit`, `bridgeMetrics`,
`formatMoney`, and 8 more.

[`lib/quirq/engine.d.mts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/engine.d.mts) · code · 3558 bytes

### engine.mjs

The quirq calculus. Dependency-free, isomorphic ESM. Notable exports: `scoreUnit`, `mint`,
`costTotal`, `unitMetrics`, `portfolioMetrics`, `settleUnit`, `bridgeMetrics`,
`formatMoney`, and 1 more.

[`lib/quirq/engine.mjs`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/engine.mjs) · code · 11192 bytes

### engine.test.mjs

Engine tests, run with `node --test lib/quirq/` (node:test is built in, so this adds no
dependency to a repo that deliberately has none). Automated test file.

[`lib/quirq/engine.test.mjs`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/engine.test.mjs) · code · 8845 bytes

### folder.ts

The `.quirq` folder, typed. Notable exports: `readFolderState`, `compactCount`,
`formatDuration`, `isoClock`, `OpenSession`, `ActivitySnapshot`, `TokenPair`, `StatsWindow`,
and 11 more.

[`lib/quirq/folder.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/folder.ts) · code · 8028 bytes

### instance.ts

The shape of a machine-local quirq instance, as XO Space reports it at /api/quirq, plus the
client that reaches one. Notable exports: `probeInstance`, `formatBytes`, `secondsSince`,
`formatAgo`, `healthOf`, `InstanceRoot`, `InstanceTotals`, `InstanceNode`, and 14 more.

[`lib/quirq/instance.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/instance.ts) · code · 9062 bytes

### ledger.d.mts

export type LedgerEntry = { seq: number; prevHash: string; record: SettledUnit; hash:
string; } Notable exports: `canonicalize`, `linkHash`, `appendEntry`, `verifyChain`,
`parseLedger`, `serialiseLedger`, `LedgerEntry`, `ChainResult`, and 2 more.

[`lib/quirq/ledger.d.mts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/ledger.d.mts) · code · 992 bytes

### ledger.mjs

The tamper-evident ledger. Notable exports: `canonicalize`, `linkHash`, `appendEntry`,
`verifyChain`, `parseLedger`, `serialiseLedger`, `GENESIS`.

[`lib/quirq/ledger.mjs`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/ledger.mjs) · code · 4461 bytes

### sample-ledger.json

JSON file `sample-ledger.json` that did not parse from the prefix that was read. Open the
source file for the full document.

[`lib/quirq/sample-ledger.json`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/sample-ledger.json) · code · 69604 bytes

### session.d.mts

export const SESSION_KEY: string Notable exports: `readSession`, `appendSession`,
`clearSession`, `SESSION_KEY`.

[`lib/quirq/session.d.mts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/session.d.mts) · code · 332 bytes

### session.mjs

The visitor's own ledger, kept in localStorage. Notable exports: `readSession`,
`appendSession`, `clearSession`, `SESSION_KEY`.

[`lib/quirq/session.mjs`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/session.mjs) · code · 1846 bytes

### snapshot.mjs

The environment: real filesystem snapshots and real check evaluation. Notable exports:
`snapshotDir`, `diffSnapshots`, `evaluateChecks`, `predicates`.

[`lib/quirq/snapshot.mjs`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/snapshot.mjs) · code · 5540 bytes

### workspace.d.mts

export type Files = Record Notable exports: `snapshotFiles`, `diffSnapshots`,
`evaluateChecks`, `runAgent`, `applyTodo`, `todoCheck`, `Files`, `Snapshot`, and 7 more.

[`lib/quirq/workspace.d.mts`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/workspace.d.mts) · code · 1198 bytes

### workspace.mjs

A simulated workspace, for minting your first quirq in a browser tab. Notable exports:
`snapshotFiles`, `diffSnapshots`, `evaluateChecks`, `runAgent`, `applyTodo`, `todoCheck`,
`INITIAL_FILES`, `GUARDED_PATH`, and 2 more.

[`lib/quirq/workspace.mjs`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/workspace.mjs) · code · 9284 bytes

### workspace.test.mjs

The simulated workspace behind the browser mint flow. Automated test file.

[`lib/quirq/workspace.test.mjs`](https://github.com/quirq-ai/quirq_ai/blob/main/lib/quirq/workspace.test.mjs) · code · 7197 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
