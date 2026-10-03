<!-- quirq-wiki-generated repo=xo-cowork-api dir=routers/cowork_agent/connectors -->

# xo-cowork-api / routers/cowork_agent/connectors

Source: [routers/cowork_agent/connectors](https://github.com/quirq-ai/xo-cowork-api/tree/main/routers/cowork_agent/connectors) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

HTTP routes for external-service connectors (gdrive, onedrive, github, vercel, manus).

[`routers/cowork_agent/connectors/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/connectors/__init__.py) · code · 196 bytes

### gdrive.py

REST routes for the Google Drive connector. Defines the `router` application object.

[`routers/cowork_agent/connectors/gdrive.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/connectors/gdrive.py) · code · 10046 bytes

### github.py

REST routes for the GitHub connector. Defines the `router` application object. HTTP routes:
`POST /api/connectors/github/token`, `GET /api/connectors/github/status`, `POST
/api/connectors/github/disconnect`, `POST /api/connectors/github/reconnect`, `POST
/api/connectors/github/cli/start`, `POST /api/connectors/github/cli/poll`, and 1 more.
Classes: `TokenBody`, `CliSessionBody`.

[`routers/cowork_agent/connectors/github.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/connectors/github.py) · code · 7572 bytes

### magicpath.py

REST routes for the MagicPath connector. Defines the `router` application object. HTTP
routes: `GET /api/connectors/magicpath/status`, `POST /api/connectors/magicpath/setup`,
`POST /api/connectors/magicpath/login`, `POST /api/connectors/magicpath/logout`, `GET
/callback`. Classes: `LoginBody`. Functions: `magicpath_status`, `magicpath_setup`,
`magicpath_login`, `magicpath_logout`, `magicpath_or_vercel_callback`. Built with FastAPI.

[`routers/cowork_agent/connectors/magicpath.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/connectors/magicpath.py) · code · 19075 bytes

### manus.py

REST routes for the Manus AI connector (API key approach). Defines the `router` application
object. HTTP routes: `POST /api/connectors/manus/token`, `GET /api/connectors/manus/status`,
`POST /api/connectors/manus/disconnect`, `POST /api/connectors/manus/reconnect`. Classes:
`TokenBody`. Functions: `submit_manus_key`, `manus_status`, `disconnect_manus`,
`reconnect_manus`.

[`routers/cowork_agent/connectors/manus.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/connectors/manus.py) · code · 2355 bytes

### onedrive.py

REST routes for the Microsoft OneDrive connector. Defines the `router` application object.

[`routers/cowork_agent/connectors/onedrive.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/connectors/onedrive.py) · code · 5265 bytes

### vercel.py

REST routes for the Vercel connector. Defines the `router` application object. HTTP routes:
`POST /api/connectors/vercel/token`, `GET /api/connectors/vercel/status`, `POST
/api/connectors/vercel/disconnect`, `POST /api/connectors/vercel/reconnect`, `GET
/api/connectors/vercel/oauth/start`, `POST /api/connectors/vercel/oauth/exchange`, and 3
more. Classes: `TokenBody`, `OAuthExchangeBody`.

[`routers/cowork_agent/connectors/vercel.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/connectors/vercel.py) · code · 9420 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
