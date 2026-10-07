<!-- quirq-wiki-generated repo=innernet dir=app/api/db/store -->

# innernet / app/api/db/store

Source: [app/api/db/store](https://github.com/quirq-ai/innernet/tree/main/app/api/db/store) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### route.ts

Store now, from the history page: what `pnpm db:store` does (lib/db/ingest.ts, storeLocal),
run by the server, which already has this machine's database open. The index file is stored
if the database holds a different one, and every history folder is read in. This machine
only, from its own pages only; the demo has no such door.

[`app/api/db/store/route.ts`](https://github.com/quirq-ai/innernet/blob/main/app/api/db/store/route.ts) · code · 1989 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
