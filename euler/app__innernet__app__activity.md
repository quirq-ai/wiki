<!-- quirq-wiki-generated repo=euler dir=app/innernet/app/activity -->

# euler / app/innernet/app/activity

Source: [app/innernet/app/activity](https://github.com/quirq-ai/euler/tree/main/app/innernet/app/activity) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### page.tsx

The history: every session of browsing, newest first, each opening onto its events merged
across the apps that wrote to it. On this machine every session folder that changed is read
into the database (lib/db/ingest.ts), and the list is read back from it; without the
database, from the files, as before. On the demo the list is drawn in the browser from its
own localStorage, together with the copy the demo's database keeps when it has one.

[`app/innernet/app/activity/page.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/app/activity/page.tsx) · code · 9445 bytes

_Generated 2026-10-09 12:09 UTC from `main`._
