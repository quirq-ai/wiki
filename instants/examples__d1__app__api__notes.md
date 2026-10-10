<!-- quirq-wiki-generated repo=instants dir=examples/d1/app/api/notes -->

# instants / examples/d1/app/api/notes

Source: [examples/d1/app/api/notes](https://github.com/quirq-ai/instants/tree/main/examples/d1/app/api/notes) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### route.ts

function toRouteErrorMessage(error: unknown) { const message = error instanceof Error ?
error.message : "Unexpected error"; const detail = error instanceof Error && error.cause
instanceof Error ? error.cause.message : ""; const combined = ${message}\n${detail} Notable
exports: `GET`, `POST`.

[`examples/d1/app/api/notes/route.ts`](https://github.com/quirq-ai/instants/blob/main/examples/d1/app/api/notes/route.ts) · code · 1700 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
