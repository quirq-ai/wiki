<!-- quirq-wiki-generated repo=xo-space dir=services/swarm_api -->

# xo-space / services/swarm_api

Source: [services/swarm_api](https://github.com/quirq-ai/xo-space/tree/main/services/swarm_api) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

xo-space's one client for xo-swarm-api.

[`services/swarm_api/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/swarm_api/__init__.py) · code · 1026 bytes

### _http.py

The one HTTP door to xo-swarm-api. Classes: `SwarmResult`. Functions: `base_url`,
`auth_token`, `auth_headers`, `request`. Built with FastAPI.

[`services/swarm_api/_http.py`](https://github.com/quirq-ai/xo-space/blob/main/services/swarm_api/_http.py) · code · 4500 bytes

### auth.py

Swarm calls for identity: the browser-auth handshake (start / status / consume) and token
validation. Functions: `browser_auth_start`, `browser_auth_status`, `browser_auth_consume`,
`get_user_id`.

[`services/swarm_api/auth.py`](https://github.com/quirq-ai/xo-space/blob/main/services/swarm_api/auth.py) · code · 1543 bytes

### chat.py

Swarm calls for Plane-A chat storage (/ask_question saves the exchange). Classes:
`ChatAPIClient`.

[`services/swarm_api/chat.py`](https://github.com/quirq-ai/xo-space/blob/main/services/swarm_api/chat.py) · code · 1982 bytes

### project_sharing.py

Swarm calls for project sharing (the commit relay). Functions: `report_commits`, `poll`,
`share`, `revoke`, `members`.

[`services/swarm_api/project_sharing.py`](https://github.com/quirq-ai/xo-space/blob/main/services/swarm_api/project_sharing.py) · code · 1973 bytes

### usage.py

Swarm calls for the daily usage report. Functions: `probe_key`, `report`.

[`services/swarm_api/usage.py`](https://github.com/quirq-ai/xo-space/blob/main/services/swarm_api/usage.py) · code · 600 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
