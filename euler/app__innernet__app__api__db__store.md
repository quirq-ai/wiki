<!-- quirq-wiki-generated repo=euler dir=app/innernet/app/api/db/store -->

# euler / app/innernet/app/api/db/store

Source: [app/innernet/app/api/db/store](https://github.com/quirq-ai/euler/tree/main/app/innernet/app/api/db/store) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### route.ts

Store now, from the history page: what `pnpm db:store` does (lib/db/ingest.ts, storeLocal),
run by the server, which already has this machine's database open. The index file is stored
if the database holds a different one, and every history folder is read in. This machine
only, from its own pages only; the demo has no such door.

[`app/innernet/app/api/db/store/route.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/app/api/db/store/route.ts) · code · 2031 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
