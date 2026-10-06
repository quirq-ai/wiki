<!-- quirq-wiki-generated repo=euler dir=app/instants/examples/d1/app/api/notes -->

# euler / app/instants/examples/d1/app/api/notes

Source: [app/instants/examples/d1/app/api/notes](https://github.com/quirq-ai/euler/tree/main/app/instants/examples/d1/app/api/notes) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### route.ts

function toRouteErrorMessage(error: unknown) { const message = error instanceof Error ?
error.message : "Unexpected error"; const detail = error instanceof Error && error.cause
instanceof Error ? error.cause.message : ""; const combined = ${message}\n${detail} Notable
exports: `GET`, `POST`.

[`app/instants/examples/d1/app/api/notes/route.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/examples/d1/app/api/notes/route.ts) · code · 1700 bytes

_Generated 2026-10-06 12:17 UTC from `main`._
