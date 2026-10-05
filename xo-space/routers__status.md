<!-- quirq-wiki-generated repo=xo-space dir=routers/status -->

# xo-space / routers/status

Source: [routers/status](https://github.com/quirq-ai/xo-space/tree/main/routers/status) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Broker status endpoints (/models/status, /channels/status, /providers/status).

[`routers/status/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/status/__init__.py) · code · 177 bytes

### channels.py

Channels status API router. Defines the `router` application object. HTTP routes: `GET
/status`. Functions: `channels_status`.

[`routers/status/channels.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/status/channels.py) · code · 2384 bytes

### models.py

Models status API router. Defines the `router` application object. HTTP routes: `GET
/status`. Functions: `models_status`.

[`routers/status/models.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/status/models.py) · code · 2581 bytes

### providers.py

Providers status API router. Defines the `router` application object. HTTP routes: `GET
/status`. Functions: `providers_status`.

[`routers/status/providers.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/status/providers.py) · code · 1928 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
