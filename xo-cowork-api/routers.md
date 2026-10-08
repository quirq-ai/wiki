<!-- quirq-wiki-generated repo=xo-cowork-api dir=routers -->

# xo-cowork-api / routers

Source: [routers](https://github.com/quirq-ai/xo-cowork-api/tree/main/routers) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Routers package for FastAPI endpoint modules. Built with FastAPI.

[`routers/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/__init__.py) · code · 52 bytes

### space.py

Space: the local workspace knowledge graph. Defines the `router` application object. HTTP
routes: `GET /server/status`, `POST /server/stop`, `GET /data/space.json`, `GET
/data/sessions.json`. Functions: `space_server_status`, `space_server_stop`, `space_data`,
`sessions_data`, `mount_space`.

[`routers/space.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/space.py) · code · 5057 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
