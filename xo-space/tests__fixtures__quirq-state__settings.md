<!-- quirq-wiki-generated repo=xo-space dir=tests/fixtures/quirq-state/settings -->

# xo-space / tests/fixtures/quirq-state/settings

Source: [tests/fixtures/quirq-state/settings](https://github.com/quirq-ai/xo-space/tree/main/tests/fixtures/quirq-state/settings) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### onboarding.json

JSON document `onboarding.json` whose top-level keys are `onboarding_completed`,
`onboarding_completed_at`, `schema`. Structured data consumed by the surrounding app or
tooling.

[`tests/fixtures/quirq-state/settings/onboarding.json`](https://github.com/quirq-ai/xo-space/blob/main/tests/fixtures/quirq-state/settings/onboarding.json) · code · 102 bytes

### roots.env

Environment template `roots.env` (values omitted from the wiki). Managed by Quirq Runtime
Setup. Read at server startup;. Keys: `XO_PROJECTS_ROOT`, `QUIRQ_STATE_ROOT`. Copy to `.env`
locally; never commit real credentials.

[`tests/fixtures/quirq-state/settings/roots.env`](https://github.com/quirq-ai/xo-space/blob/main/tests/fixtures/quirq-state/settings/roots.env) · code · 190 bytes

### runtime.env

Environment template `runtime.env` (values omitted from the wiki). Managed by Quirq Runtime
Setup. Non-secret settings only. Keys: `AGENT_NAME`, `QUIRQ_WATCHER_ENABLED`,
`QUIRQ_WATCHER_INTERVAL_SECONDS`, `QUIRQ_WATCHER_SOURCE_MODE`. Copy to `.env` locally; never
commit real credentials.

[`tests/fixtures/quirq-state/settings/runtime.env`](https://github.com/quirq-ai/xo-space/blob/main/tests/fixtures/quirq-state/settings/runtime.env) · code · 174 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
