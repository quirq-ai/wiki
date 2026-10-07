<!-- quirq-wiki-generated repo=instants dir=tests -->

# instants / tests

Source: [tests](https://github.com/quirq-ai/instants/tree/main/tests) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### importers.test.mjs

const at = "2026-10-07T10:00:00.000Z"; const later = "2026-10-07T10:01:00.000Z"; const jsonl
= (records) => records.map((record) => JSON.stringify(record)).join("\n") + "\n"; const
codexMeta = (id = "session-123", cwd = "C:\\private\\project") => ({ type: "session_meta",
timestamp: at, payload: { id, cwd, api_key: "SHOULD_NOT_COPY_SECRET" }, }); const codexM
Automated test file.

[`tests/importers.test.mjs`](https://github.com/quirq-ai/instants/blob/main/tests/importers.test.mjs) · code · 11160 bytes

### jsonl-store.test.mjs

import { mkdir, mkdtemp, readFile, readdir, rm, symlink, writeFile, } from
"node:fs/promises"; import { createJsonlStore, MAX_APPEND_ENTRIES, MAX_LOG_BYTES,
MAX_LOG_LINE_BYTES, } from "../engine/jsonl-store.mjs" Automated test file.

[`tests/jsonl-store.test.mjs`](https://github.com/quirq-ai/instants/blob/main/tests/jsonl-store.test.mjs) · code · 12852 bytes

### local-workspace.test.mjs

const now = "2026-10-07T12:00:00.000Z"; const post = (id = "local-post") => ({ id, userId:
"you", location: "", time: "Now", images: ["/work/preview.svg"], alt: "", caption: "Work to
review", tags: "", likes: 0, commentCount: 0, comments: [], instant: { kind: "review",
title: "Ready?", expiresInMinutes: 60, options: [ { id: "yes", label: "Yes", count: 0 }, {
Automated test file.

[`tests/local-workspace.test.mjs`](https://github.com/quirq-ai/instants/blob/main/tests/local-workspace.test.mjs) · code · 9363 bytes

### log-contract.test.mjs

import { LogError, parseActivityEntry, parseTimelineEntry, parseLogEntries, } from
"../engine/log-schema.mjs"; const at = "2026-10-07T10:00:00.000Z"; const envelope = (type,
targetId, data, extra = {}) => ({ v: 1, id: randomUUID(), at, type, targetId, data,
...extra, }); const upsert = (kind, value, extra = {}) => envelope("record.upsert", value.id
?? value. Automated test file.

[`tests/log-contract.test.mjs`](https://github.com/quirq-ai/instants/blob/main/tests/log-contract.test.mjs) · code · 9812 bytes

### motion.test.mjs

import { classifySwipe, nearestSlide, isDoubleTap, } from "../lib/motion-core.mjs" Automated
test file.

[`tests/motion.test.mjs`](https://github.com/quirq-ai/instants/blob/main/tests/motion.test.mjs) · code · 1622 bytes

### projection.test.mjs

Test the shipped pure TypeScript projection without a Next runtime or a new loader
dependency. Its type-only imports disappear; typecheck runs separately. Automated test file.

[`tests/projection.test.mjs`](https://github.com/quirq-ai/instants/blob/main/tests/projection.test.mjs) · code · 9825 bytes

### session.test.mjs

import { appendActivity, createSessionDocument, isSessionId, MAX_EVENTS, parseActivityBatch,
parseSessionDocument, SessionError, } from "../engine/schema.mjs"; const now =
"2026-10-03T10:00:00.000Z"; const event = (type = "post.like", data = { postId: "p1", liked:
true }) => ({ id: randomUUID(), type, at: now, data, }); const empty = () =>
createSessionDocum Automated test file.

[`tests/session.test.mjs`](https://github.com/quirq-ai/instants/blob/main/tests/session.test.mjs) · code · 6462 bytes

### timeline-policy.test.mjs

const post = (id, readOnly = false) => ({ id, userId: "agent", location: "Agent", time:
"now", images: [], alt: "Imported work", caption: "Ready to inspect", tags: "", likes: 0,
commentCount: 0, comments: [], source: { id: "source-1", label: "Agent source", readOnly },
}); const request = (id, extra) => ({ id, userId: "agent", companyId: "", kind: "review"
Automated test file.

[`tests/timeline-policy.test.mjs`](https://github.com/quirq-ai/instants/blob/main/tests/timeline-policy.test.mjs) · code · 2481 bytes

### workspace.test.mjs

function transpile(relative) { return ts.transpileModule( readFileSync(new URL(relative,
import.meta.url), "utf8"), { compilerOptions: { module: ts.ModuleKind.ESNext, target:
ts.ScriptTarget.ES2022, }, }, ).outputText; } const asModule = (text) =>
data:text/javascript;base64,${Buffer.from(text).toString("base64")}; const source =
transpile("../engine/workspa Automated test file.

[`tests/workspace.test.mjs`](https://github.com/quirq-ai/instants/blob/main/tests/workspace.test.mjs) · code · 5577 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
