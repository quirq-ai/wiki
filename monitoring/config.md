<!-- quirq-wiki-generated repo=monitoring dir=config -->

# monitoring / config

Source: [config](https://github.com/quirq-ai/monitoring/tree/main/config) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### checks.ts

Check runs on a repo's head commit that are not that repo's own CI. test-pipelines'
compatibility check (compat.yml) runs every org repo's code from test-pipelines and names
each per-repo job `compat (<repo>)`; a red one is that repo's verdict, not test-pipelines',
so the "CI on main" rollup leaves those runs out. compat's other jobs, and compat-publish,
still count.

[`config/checks.ts`](https://github.com/quirq-ai/monitoring/blob/main/config/checks.ts) · code · 885 bytes

### demo.ts

Failure records planted on purpose to exercise the pipeline. They carry no demo flag, so the
dashboard recognises them by subject. A demo record is shown with a label but never counted.
Notable exports: `isDemoSubject`, `DEMO_SUBJECTS`.

[`config/demo.ts`](https://github.com/quirq-ai/monitoring/blob/main/config/demo.ts) · code · 403 bytes

### framing.ts

Which pages may show the dashboard inside an iframe (suraj's ask of 2026-10-21): the
quirq.dev website, which shows it in a Live apps window, and the dashboard itself. Exact
origins only, never a wildcard or a preview host, so no other site can frame it under a
lookalike page. Notable exports: `FRAME_ANCESTORS`, `FRAMING_CSP`, `NO_FRAMING_CSP`.

[`config/framing.ts`](https://github.com/quirq-ai/monitoring/blob/main/config/framing.ts) · code · 877 bytes

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

_Generated 2026-10-23 10:36 UTC from `main`._
