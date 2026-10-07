<!-- quirq-wiki-generated repo=xo-space dir=utils -->

# xo-space / utils

Source: [utils](https://github.com/quirq-ai/xo-space/tree/main/utils) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Shared utility helpers for the xo-space project.

[`utils/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/utils/__init__.py) · code · 55 bytes

### local_port.py

Deterministic port selection for local server startup. Classes:
`LocalPortsUnavailableError`. Functions: `is_port_available`, `resolve_server_port`.

[`utils/local_port.py`](https://github.com/quirq-ai/xo-space/blob/main/utils/local_port.py) · code · 2091 bytes

### runtime_env.py

Environment-derived runtime facts that are needed below the services layer. Functions:
`quirq_state_dir`, `logs_dir`, `inbox_activity_dir`, `scheduler_dir`,
`watcher_tick_interval_seconds`.

[`utils/runtime_env.py`](https://github.com/quirq-ai/xo-space/blob/main/utils/runtime_env.py) · code · 2458 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
