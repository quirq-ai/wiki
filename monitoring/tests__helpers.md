<!-- quirq-wiki-generated repo=monitoring dir=tests/helpers -->

# monitoring / tests/helpers

Source: [tests/helpers](https://github.com/quirq-ai/monitoring/tree/main/tests/helpers) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### fixtures.ts

Start a fixture server for one test and point the sources at it through the same environment
variables a Playwright run uses. The token is a dummy that only ever reaches loopback.
Notable exports: `withFixtures`, `assertNoToken`, `FIXTURE_TOKEN`, `Fixtures`.

[`tests/helpers/fixtures.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/helpers/fixtures.ts) · code · 1438 bytes

### server-only.ts

Stands in for the `server-only` package under vitest, where there is no React server build.

[`tests/helpers/server-only.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/helpers/server-only.ts) · code · 106 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
