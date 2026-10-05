<!-- quirq-wiki-generated repo=recipes dir=examples/node-app/app/api/slug -->

# recipes / examples/node-app/app/api/slug

Source: [examples/node-app/app/api/slug](https://github.com/quirq-ai/recipes/tree/main/examples/node-app/app/api/slug) in [recipes](https://github.com/quirq-ai/recipes).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### route.ts

export function GET(request: Request) { const title = new
URL(request.url).searchParams.get("title") ?? ""; return Response.json({ slug:
slugify(title) }); } Notable exports: `GET`.

[`examples/node-app/app/api/slug/route.ts`](https://github.com/quirq-ai/recipes/blob/main/examples/node-app/app/api/slug/route.ts) · code · 208 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
