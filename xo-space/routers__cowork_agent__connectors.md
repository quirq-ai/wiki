<!-- quirq-wiki-generated repo=xo-space dir=routers/cowork_agent/connectors -->

# xo-space / routers/cowork_agent/connectors

Source: [routers/cowork_agent/connectors](https://github.com/quirq-ai/xo-space/tree/main/routers/cowork_agent/connectors) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

HTTP routes for external-service connectors (gdrive, onedrive, github, vercel).

[`routers/cowork_agent/connectors/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/connectors/__init__.py) · code · 189 bytes

### composio.py

Python module `composio.py`. Defines the `router` application object. HTTP routes: `GET
/api/connectors/composio/backend`, `PUT /api/connectors/composio/api-key`, `DELETE
/api/connectors/composio/api-key`, `GET /api/connectors/composio/toolkits`, `POST
/api/connectors/composio/{toolkit}/connect`, `GET
/api/connectors/composio/{toolkit}/status`, and 10 more.

[`routers/cowork_agent/connectors/composio.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/connectors/composio.py) · code · 23584 bytes

### composio_mcp_proxy.py

Python module `composio_mcp_proxy.py`. Defines the `router` application object. HTTP routes:
`POST /mcp/composio-proxy/`, `POST /mcp/composio-proxy`, `POST /mcp/cowork-proxy/`, `POST
/mcp/cowork-proxy`, `GET /mcp/composio-proxy/`, `GET /mcp/composio-proxy`, and 18 more.
Functions: `mcp_proxy_post`, `mcp_proxy_get`, `mcp_proxy_delete`, `mcp_proxy_post_scoped`,
`mcp_proxy_get_scoped`, `mcp_proxy_delete_scoped`.

[`routers/cowork_agent/connectors/composio_mcp_proxy.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/connectors/composio_mcp_proxy.py) · code · 6665 bytes

### gdrive.py

REST routes for the Google Drive connector. Defines the `router` application object.

[`routers/cowork_agent/connectors/gdrive.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/connectors/gdrive.py) · code · 10039 bytes

### github_cli.py

REST routes for the GitHub connector — CLI method (gh auth login device flow). Defines the
`router` application object. HTTP routes: `POST /api/connectors/github/cli/start`, `POST
/api/connectors/github/cli/poll`, `POST /api/connectors/github/cli/cancel`. Classes:
`CliSessionBody`. Functions: `cli_login_start`, `cli_login_poll`, `cli_login_cancel`.

[`routers/cowork_agent/connectors/github_cli.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/connectors/github_cli.py) · code · 3316 bytes

### github_pat.py

REST routes for the GitHub connector — PAT method (paste a personal access token). Defines
the `router` application object. HTTP routes: `POST /api/connectors/github/token`, `GET
/api/connectors/github/status`, `POST /api/connectors/github/disconnect`, `POST
/api/connectors/github/reconnect`. Classes: `TokenBody`. Functions: `submit_github_token`,
`github_status`, `disconnect_github`, `reconnect_github`.

[`routers/cowork_agent/connectors/github_pat.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/connectors/github_pat.py) · code · 3881 bytes

### magicpath.py

REST routes for the MagicPath connector. Defines the `router` application object. HTTP
routes: `GET /api/connectors/magicpath/status`, `POST /api/connectors/magicpath/setup`,
`POST /api/connectors/magicpath/login`, `POST /api/connectors/magicpath/logout`, `GET
/callback`. Classes: `LoginBody`. Functions: `magicpath_status`, `magicpath_setup`,
`magicpath_login`, `magicpath_logout`, `magicpath_or_vercel_callback`. Built with FastAPI.

[`routers/cowork_agent/connectors/magicpath.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/connectors/magicpath.py) · code · 19038 bytes

### onedrive.py

REST routes for the Microsoft OneDrive connector. Defines the `router` application object.

[`routers/cowork_agent/connectors/onedrive.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/connectors/onedrive.py) · code · 5258 bytes

### vercel.py

HTTP surface for the Vercel connector. Defines the `router` application object. HTTP routes:
`POST /api/connectors/vercel/token`, `GET /api/connectors/vercel/status`, `POST
/api/connectors/vercel/reconnect`, `POST /api/connectors/vercel/disconnect`, `GET
/api/connectors/vercel/oauth/start`, `POST /api/connectors/vercel/oauth/exchange`, and 3
more. Classes: `TokenBody`, `ExchangeBody`.

[`routers/cowork_agent/connectors/vercel.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/connectors/vercel.py) · code · 8729 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
