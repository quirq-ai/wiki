<!-- quirq-wiki-generated repo=xo-cowork-api dir=docs -->

# xo-cowork-api / docs

Source: [docs](https://github.com/quirq-ai/xo-cowork-api/tree/main/docs) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### openclaw-usage-sync-flow.md

Markdown page “OpenClaw Usage Sync Flow”. flowchart TD A[FastAPI app starts] --> B[lifespan
in server.py] B --> C[create background usage sync task] C --> D[start_usage_sync_scheduler
in services/usage_sync.py].

[`docs/openclaw-usage-sync-flow.md`](https://github.com/quirq-ai/xo-cowork-api/blob/main/docs/openclaw-usage-sync-flow.md) · code · 1423 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
