<!-- quirq-wiki-generated repo=website dir=contents/handbook/engineering/session-replay -->

# website / contents/handbook/engineering/session-replay

Source: [contents/handbook/engineering/session-replay](https://github.com/quirq-ai/website/tree/main/contents/handbook/engineering/session-replay) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### session-replay-architecture.md

Markdown page “Session replay architecture”. PostHog-JS uses rrweb (record and replay the
web) to: - Serialize DOM into JSON snapshots - Capture full snapshots (complete DOM state) +
incremental snapshots (mutations/interactions) - Track clicks, keypresses, mouse activity,
console logs, network requests - Batch events into $snapshot_items arrays with a $session_id
(UUIDv7) - Send to /s/ (replay capture endpoint) via $snapshot events.

[`contents/handbook/engineering/session-replay/session-replay-architecture.md`](https://github.com/quirq-ai/website/blob/main/contents/handbook/engineering/session-replay/session-replay-architecture.md) · code · 9198 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
