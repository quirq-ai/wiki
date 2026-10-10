<!-- quirq-wiki-generated repo=instants dir=engine -->

# instants / engine

Source: [engine](https://github.com/quirq-ai/instants/tree/main/engine) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### http.d.mts

export function hasSameOrigin( requestUrl: string, origin: string | null, host: string |
null, ): boolean Notable exports: `hasSameOrigin`.

[`engine/http.d.mts`](https://github.com/quirq-ai/instants/blob/main/engine/http.d.mts) · code · 113 bytes

### http.mjs

Next dev can reconstruct request.url with its bind host. The browser's Host header is the
authority it actually addressed; never use forwarded-host. Notable exports: `hasSameOrigin`.

[`engine/http.mjs`](https://github.com/quirq-ai/instants/blob/main/engine/http.mjs) · code · 609 bytes

### importers.d.mts

export type ImportFormat = "timeline" | "codex" | "claude"; export const MAX_IMPORT_BYTES:
number; export const MAX_IMPORT_ENTRIES: 500; export function importTimeline( text: string,
format: ImportFormat, ): Promise Notable exports: `importTimeline`, `ImportFormat`,
`MAX_IMPORT_BYTES`, `MAX_IMPORT_ENTRIES`.

[`engine/importers.d.mts`](https://github.com/quirq-ai/instants/blob/main/engine/importers.d.mts) · code · 288 bytes

### importers.mjs

import { LogError, parseLogEntries, parseTimelineEntry, } from "./log-schema.mjs" Notable
exports: `importTimeline`, `MAX_IMPORT_BYTES`, `MAX_IMPORT_ENTRIES`.

[`engine/importers.mjs`](https://github.com/quirq-ai/instants/blob/main/engine/importers.mjs) · code · 13379 bytes

### jsonl-store.d.mts

import type { ActivityEntry, LogDiagnostic, LogKind, TimelineEntry, } from "./log-types"
Notable exports: `createJsonlStore`, `LogStoreError`, `MAX_LOG_BYTES`, `MAX_LOG_LINE_BYTES`,
`MAX_APPEND_ENTRIES`, `LogSnapshot`, `JsonlStore`.

[`engine/jsonl-store.d.mts`](https://github.com/quirq-ai/instants/blob/main/engine/jsonl-store.d.mts) · code · 896 bytes

### jsonl-store.mjs

Node-only persistence. The two journals are the complete application store. Notable exports:
`createJsonlStore`, `LogStoreError`, `MAX_LOG_BYTES`, `MAX_LOG_LINE_BYTES`,
`MAX_APPEND_ENTRIES`.

[`engine/jsonl-store.mjs`](https://github.com/quirq-ai/instants/blob/main/engine/jsonl-store.mjs) · code · 11383 bytes

### local-workspace.d.mts

export type LocalWorkspace = { read(): Promise; append(kind: LogKind, entries: unknown[]):
Promise; importTimeline( entries: unknown[], options?: { replace?: boolean }, ): Promise;
exportLog(kind: LogKind): Promise; close(): Promise; }; export type LocalWorkspaceOptions =
{ directory: string; lockDirectory?: string; profileId: string; seed?: SeedData; }; exp
Notable exports: `createLocalWorkspace`, `getLocalWorkspace`, `LocalWorkspace`

[`engine/local-workspace.d.mts`](https://github.com/quirq-ai/instants/blob/main/engine/local-workspace.d.mts) · code · 760 bytes

### local-workspace.mjs

Node-only orchestration: one serialized transaction lane for each profile. Notable exports:
`createLocalWorkspace`, `getLocalWorkspace`.

[`engine/local-workspace.mjs`](https://github.com/quirq-ai/instants/blob/main/engine/local-workspace.mjs) · code · 10318 bytes

### log-schema.d.mts

import type { ActivityEntry, TimelineEntry, ParsedLog, LogKind, } from "./log-types" Notable
exports: `parseTimelineEntry`, `parseActivityEntry`, `parseLogEntries`, `LogError`,
`MAX_LINE_BYTES`.

[`engine/log-schema.d.mts`](https://github.com/quirq-ai/instants/blob/main/engine/log-schema.d.mts) · code · 710 bytes

### log-schema.mjs

export const MAX_LINE_BYTES = 4 * 1024 * 1024; const uuid = z.string().uuid(); const
timestamp = z.string().datetime(); const identifier = z .string() .min(1) .max(120)
.regex(/^[a-zA-Z0-9_:-]+$/); const shortText = z.string().max(512); const text =
z.string().max(32_768); const count = z.number().int().min(0).max(1_000_000_000); const
sourceStatus = z.enum( Notable exports: `parseTimelineEntry`, `parseActivityEntry`

[`engine/log-schema.mjs`](https://github.com/quirq-ai/instants/blob/main/engine/log-schema.mjs) · code · 13237 bytes

### log-types.ts

export type LogKind = "timeline" | "activity"; export type LogDiagnostic = { code: string;
message: string; line?: number; log: LogKind; blocking: true; }; export type LogEnvelope = {
v: 1; id: string; at: string; targetId: string; }; export type SourceStatus = "ready" |
"stale" | "error" | "disconnected"; export type SourceRecord = { id: string; label: stri
Notable exports: `LogKind`, `LogDiagnostic`, `LogEnvelope`, `SourceStatus`, `SourceRecord`

[`engine/log-types.ts`](https://github.com/quirq-ai/instants/blob/main/engine/log-types.ts) · code · 2720 bytes

### projection.ts

export type SessionView = { liked: string[]; saved: string[]; following: string[]; allPosts:
Post[]; comments: Record; responses: Record; deadlines: Record; threads: Thread[];
attention: QueueItem[]; } Notable exports: `projectSession`, `SessionView`.

[`engine/projection.ts`](https://github.com/quirq-ai/instants/blob/main/engine/projection.ts) · code · 5601 bytes

### schema.d.mts

export const MAX_EVENTS: 2000; export const MAX_BATCH_EVENTS: 50; export const
MAX_REQUEST_BYTES: number; export const MAX_DOCUMENT_BYTES: number; export const
MAX_TEXT_LENGTH: 4000 Notable exports: `isSessionId`, `parseActivityBatch`,
`parseSessionDocument`, `createSessionDocument`, `appendActivity`, `SessionError`,
`MAX_EVENTS`, `MAX_BATCH_EVENTS`, and 3 more.

[`engine/schema.d.mts`](https://github.com/quirq-ai/instants/blob/main/engine/schema.d.mts) · code · 790 bytes

### schema.mjs

export const MAX_EVENTS = 2_000; export const MAX_BATCH_EVENTS = 50; export const
MAX_REQUEST_BYTES = 3 * 1024 * 1024; export const MAX_DOCUMENT_BYTES = 8 * 1024 * 1024;
export const MAX_TEXT_LENGTH = 4_000 Notable exports: `isSessionId`, `parseActivityBatch`,
`parseSessionDocument`, `createSessionDocument`, `appendActivity`, `SessionError`,
`MAX_EVENTS`, `MAX_BATCH_EVENTS`, and 5 more.

[`engine/schema.mjs`](https://github.com/quirq-ai/instants/blob/main/engine/schema.mjs) · code · 6733 bytes

### timeline.d.mts

import type { SourceRecord, TimelineEntry, TimelineSnapshot, } from "./log-types" Notable
exports: `replayTimeline`, `seedTimeline`.

[`engine/timeline.d.mts`](https://github.com/quirq-ai/instants/blob/main/engine/timeline.d.mts) · code · 368 bytes

### timeline.mjs

const emptyViewer = () => ({ id: "you", username: "you", name: "You", avatar: "", companyId:
"", role: "", bio: "Your private agent workspace.", followers: "0", following: 0,
companyIds: [], }) Notable exports: `replayTimeline`, `seedTimeline`.

[`engine/timeline.mjs`](https://github.com/quirq-ai/instants/blob/main/engine/timeline.mjs) · code · 4629 bytes

### types.ts

Portable activity contract. This module does not import server storage. Notable exports:
`QueueKind`, `SessionPost`, `ActivityData`, `ActivityType`, `ActivityInput`, `Activity`,
`SessionDocument`.

[`engine/types.ts`](https://github.com/quirq-ai/instants/blob/main/engine/types.ts) · code · 1652 bytes

### workspace.ts

export type WorkspaceLogs = { profileId: string; timeline: TimelineEntry[]; activity:
ActivityEntry[]; diagnostics: LogDiagnostic[]; revision: string; } Notable exports: `jsonl`,
`mergeEntries`, `activityEntry`, `mirrorCreatedPosts`, `projectWorkspace`,
`assertActivityAllowed`, `prepareImport`, `WorkspaceLogs`.

[`engine/workspace.ts`](https://github.com/quirq-ai/instants/blob/main/engine/workspace.ts) · code · 8734 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
