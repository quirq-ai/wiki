<!-- quirq-wiki-generated repo=monitoring dir=config -->

# monitoring / config

Source: [config](https://github.com/quirq-ai/monitoring/tree/main/config) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### demo.ts

Failure records planted on purpose to exercise the pipeline. They carry no demo flag, so the
dashboard recognises them by subject. A demo record is shown with a label but never counted.
Notable exports: `isDemoSubject`, `DEMO_SUBJECTS`.

[`config/demo.ts`](https://github.com/quirq-ai/monitoring/blob/main/config/demo.ts) · code · 403 bytes

### freshness.ts

Writers that keep state on a branch, and how long the dashboard waits before calling one
stale. Each window is about two intervals plus slack. If a schedule changes in its repo,
update this table and AGENTS.md in one PR. Notable exports: `Writer`, `WRITERS`.

[`config/freshness.ts`](https://github.com/quirq-ai/monitoring/blob/main/config/freshness.ts) · code · 2881 bytes

### owner.ts

The person the "waiting on you" question is about. One GitHub login, from the environment so
the dashboard can be run for someone else without a code change. Notable exports:
`assertLogin`, `OWNER`.

[`config/owner.ts`](https://github.com/quirq-ai/monitoring/blob/main/config/owner.ts) · code · 390 bytes

### repos.json

JSON document `repos.json` whose top-level keys are `_comment`, `groups`. Structured data
consumed by the surrounding app or tooling.

[`config/repos.json`](https://github.com/quirq-ai/monitoring/blob/main/config/repos.json) · code · 1342 bytes

### settings.ts

The settings files the editor (/settings) can change, and what a merged change does. The
files themselves are owned by their repos; this list only says where they are. A file that
does not exist yet shows as unknown with the 404, never as empty. Each edit becomes a pull
request on the repo that owns the file, so CODEOWNERS, required approvals and the merge
queue there decide whether it lands. Nothing here writes to main.

[`config/settings.ts`](https://github.com/quirq-ai/monitoring/blob/main/config/settings.ts) · code · 7238 bytes

_Generated 2026-10-19 11:22 UTC from `main`._
