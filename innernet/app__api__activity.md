<!-- quirq-wiki-generated repo=innernet dir=app/api/activity -->

# innernet / app/api/activity

Source: [app/api/activity](https://github.com/quirq-ai/innernet/tree/main/app/api/activity) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### route.ts

Where the history is written, and on the demo read back and cleared. Only Innernet's own
pages may call it (lib/same-origin.ts), and every call is a small JSON body. POST {session,
kind, url, ...} one event from the recorder (components/activity/recorder.tsx). On this
machine it is appended to <session>/innernet.jsonl, the format every app shares, and once
the answer is sent that session's files are read into the database (lib/db/ingest.ts).

[`app/api/activity/route.ts`](https://github.com/quirq-ai/innernet/blob/main/app/api/activity/route.ts) · code · 8109 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
