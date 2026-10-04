<!-- quirq-wiki-generated repo=xo-space dir=routers -->

# xo-space / routers

Source: [routers](https://github.com/quirq-ai/xo-space/tree/main/routers) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Routers package for FastAPI endpoint modules. Built with FastAPI.

[`routers/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/__init__.py) · code · 52 bytes

### branding.py

Branding settings for the workspace Setup page. Defines the `router` application object.
HTTP routes: `GET /logo`. Functions: `get_branding`, `save_branding`, `get_logo`.

[`routers/branding.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/branding.py) · code · 1779 bytes

### browser_guard.py

Which browser requests may change things in Space. Classes: `RecordTransportClient`,
`BrowserWriteGuard`. Functions: `add_forwarding_middleware`, `is_loopback_peer`,
`origin_allowed`, `write_allowed`, `add_browser_write_guard`, `is_local_mutation`.

[`routers/browser_guard.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/browser_guard.py) · code · 10057 bytes

### schedules.py

`/api/schedules*` — fixed-interval command jobs (local layer). Defines the `router`
application object. HTTP routes: `GET /api/schedules`, `POST /api/schedules`, `GET
/api/schedules/{job_id}`, `PUT /api/schedules/{job_id}`, `DELETE /api/schedules/{job_id}`,
`POST /api/schedules/{job_id}/run`, and 1 more.

[`routers/schedules.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/schedules.py) · code · 3267 bytes

### space.py

Space: the local workspace knowledge graph. Defines the `router` application object. HTTP
routes: `GET /server/status`, `GET /setup/status`, `POST /server/stop`, `POST
/server/restart`, `GET /update/status`, `POST /update/apply`, and 1 more. Functions:
`space_server_status`, `space_setup_status`, `space_server_stop`, `space_server_restart`,
`space_update_status`, `space_update_apply`, `session_prompts_data`, `mount_space`.

[`routers/space.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/space.py) · code · 9184 bytes

### telemetry_sources.py

`/api/telemetry/sources`: what the Agents tab's Configure page reads and writes. Defines the
`router` application object. HTTP routes: `GET /sources`, `PUT /sources/{source_id}`.
Classes: `SourceUpdate`. Functions: `list_sources`, `update_source`.

[`routers/telemetry_sources.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/telemetry_sources.py) · code · 2437 bytes

### theme.py

Theme settings for the workspace Setup page. Defines the `router` application object.
Classes: `ThemeBody`. Functions: `get_theme`, `save_theme`.

[`routers/theme.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/theme.py) · code · 1167 bytes

### xo_data.py

`/xo/*.json` — Space's three data payloads, served from disk. Defines the `router`
application object. HTTP routes: `GET /space.json`, `GET /dashboard.json`, `GET
/sessions.json`. Functions: `space_json`, `dashboard_json`, `sessions_json`.

[`routers/xo_data.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/xo_data.py) · code · 2720 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
