<!-- quirq-wiki-generated repo=euler dir=app/innernet/app/api/activity -->

# euler / app/innernet/app/api/activity

Source: [app/innernet/app/api/activity](https://github.com/quirq-ai/euler/tree/main/app/innernet/app/api/activity) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### route.ts

Where the history is written, and on the demo read back and cleared. Only Innernet's own
pages may call it (lib/same-origin.ts), and every call is a small JSON body. POST {session,
kind, url, ...} one event from the recorder (components/activity/recorder.tsx). On this
machine it is appended to <session>/innernet.jsonl, the format every app shares, and once
the answer is sent that session's files are read into the database (lib/db/ingest.ts).

[`app/innernet/app/api/activity/route.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/app/api/activity/route.ts) · code · 8109 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
