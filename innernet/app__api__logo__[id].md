<!-- quirq-wiki-generated repo=innernet dir=app/api/logo/[id] -->

# innernet / app/api/logo/[id]

Source: [app/api/logo/[id]](https://github.com/quirq-ai/innernet/tree/main/app/api/logo/[id]) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### route.ts

A project's logo, by the hash of the logo itself (lib/logo.ts), so an address never changes
what it holds and the browser keeps it for good. Read from the index the server already
holds; nothing else is served here. Drawn with <img>, but held to the strictest policy
anyway (next.config.ts), so an SVG opened on its own can run nothing. Notable exports:
`GET`, `dynamic`.

[`app/api/logo/[id]/route.ts`](https://github.com/quirq-ai/innernet/blob/main/app/api/logo/[id]/route.ts) · code · 1170 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
