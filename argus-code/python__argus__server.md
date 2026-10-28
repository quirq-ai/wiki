<!-- quirq-wiki-generated repo=argus-code dir=python/argus/server -->

# argus-code / python/argus/server

Source: [python/argus/server](https://github.com/quirq-ai/argus-code/tree/main/python/argus/server) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AGENTS.md

The agent/workspace instructions (“AGENTS.md — server (FastAPI app + API)”). Parent:
python/argus/AGENTS.md. Serves the API and the static dashboard at http://localhost:4242.

[`python/argus/server/AGENTS.md`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/server/AGENTS.md) · code · 4220 bytes

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`python/argus/server/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/server/__init__.py) · empty · 0 bytes

### api.py

All `/api/*` route handlers. Classes: `ApiDeps`, `_ReadCache`. Functions: `allowed_origins`,
`is_allowed_origin`, `build_api`.

[`python/argus/server/api.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/server/api.py) · code · 30984 bytes

### app.py

FastAPI app builder + uvicorn launcher. Classes: `ServerOpts`, `SafeStaticFiles`. Functions:
`is_loopback_host`, `build_app`, `serve_blocking`. Built with FastAPI.

[`python/argus/server/app.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/server/app.py) · code · 9353 bytes

_Generated 2026-10-28 11:43 UTC from `main`._
