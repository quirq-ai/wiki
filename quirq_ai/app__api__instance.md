<!-- quirq-wiki-generated repo=quirq_ai dir=app/api/instance -->

# quirq_ai / app/api/instance

Source: [app/api/instance](https://github.com/quirq-ai/quirq_ai/tree/main/app/api/instance) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### route.ts

/** * Same-origin proxy to a machine-local quirq instance (XO Space). * Why a proxy at all:
the Space server answers /api/quirq without an * access-control-allow-origin header, so a
browser fetch straight from this * site is blocked by CORS. Verified, not assumed. Server to
server has no such * restriction, so the browser calls this route and this route call
Notable exports: `GET`, `dynamic`. Wired into a Next.js app (App Router or Next APIs).

[`app/api/instance/route.ts`](https://github.com/quirq-ai/quirq_ai/blob/main/app/api/instance/route.ts) · code · 3280 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
