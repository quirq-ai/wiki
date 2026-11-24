<!-- quirq-wiki-generated repo=xo-space dir=routers/cowork_agent/coworker -->

# xo-space / routers/cowork_agent/coworker

Source: [routers/cowork_agent/coworker](https://github.com/quirq-ai/xo-space/tree/main/routers/cowork_agent/coworker) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Routes of the coworker add-ons (`services/coworker`): views that exist only for the xo-
coworker UI, under `/api/coworker/`, kept apart from Space's core routes so the core stays
small.

[`routers/cowork_agent/coworker/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/coworker/__init__.py) · code · 330 bytes

### versions.py

GET /api/coworker/xo-projects/{project_id}/version: one project file's bytes at a commit
(`services/coworker/versions`). Defines the `router` application object. HTTP routes: `GET
/api/coworker/xo-projects/{project_id}/version`. Functions: `file_version`.

[`routers/cowork_agent/coworker/versions.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/coworker/versions.py) · code · 4873 bytes

_Generated 2026-11-24 16:34 UTC from `main`._
