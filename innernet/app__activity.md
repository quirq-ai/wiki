<!-- quirq-wiki-generated repo=innernet dir=app/activity -->

# innernet / app/activity

Source: [app/activity](https://github.com/quirq-ai/innernet/tree/main/app/activity) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### page.tsx

The history: every session of browsing, newest first, each opening onto its events merged
across the apps that wrote to it. On this machine every session folder that changed is read
into the database (lib/db/ingest.ts), and the list is read back from it; without the
database, from the files, as before. On the demo the list is drawn in the browser from its
own localStorage, together with the copy the demo's database keeps when it has one.

[`app/activity/page.tsx`](https://github.com/quirq-ai/innernet/blob/main/app/activity/page.tsx) · code · 9610 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
