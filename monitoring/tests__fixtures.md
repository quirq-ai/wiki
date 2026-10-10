<!-- quirq-wiki-generated repo=monitoring dir=tests/fixtures -->

# monitoring / tests/fixtures

Source: [tests/fixtures](https://github.com/quirq-ai/monitoring/tree/main/tests/fixtures) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Fixtures”). Files the tests and the Playwright run read instead of
GitHub. raw/// mirrors the raw URL layout; api/*.json are GitHub API responses; routes.json
says which API path serves which file (first match wins; * matches one path segment, a query
value ending in * matches by prefix).

[`tests/fixtures/README.md`](https://github.com/quirq-ai/monitoring/blob/main/tests/fixtures/README.md) · code · 11278 bytes

### routes.json

JSON array `routes.json` with 36 items; first item keys: `path`, `query`, `file`.

[`tests/fixtures/routes.json`](https://github.com/quirq-ai/monitoring/blob/main/tests/fixtures/routes.json) · code · 4894 bytes

### server.d.mts

export type FixtureRoute = { path?: string; raw?: string; query?: Record; file?: string;
body?: string; status?: number; /** Extra response headers, tokens rendered: date backdates
a read, x-ratelimit-* fakes a limit. */ headers?: Record; } Notable exports: `renderTokens`,
`createFixtureServer`, `FixtureRoute`, `FixtureLog`.

[`tests/fixtures/server.d.mts`](https://github.com/quirq-ai/monitoring/blob/main/tests/fixtures/server.d.mts) · code · 688 bytes

### server.mjs

A small HTTP server that serves the fixture files the way raw.githubusercontent.com and
api.github.com would, so the sources, the pages and the Playwright run read real shapes with
no network and no token. GET only: any other method is a 405 and is counted, so a test can
prove the dashboard never writes.

[`tests/fixtures/server.mjs`](https://github.com/quirq-ai/monitoring/blob/main/tests/fixtures/server.mjs) · code · 7503 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
