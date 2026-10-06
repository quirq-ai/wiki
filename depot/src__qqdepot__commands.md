<!-- quirq-wiki-generated repo=depot dir=src/qqdepot/commands -->

# depot / src/qqdepot/commands

Source: [src/qqdepot/commands](https://github.com/quirq-ai/depot/tree/main/src/qqdepot/commands) in [depot](https://github.com/quirq-ai/depot).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

qq's own subcommands. Each module has register(subparsers), the same shape a plugin uses.

[`src/qqdepot/commands/__init__.py`](https://github.com/quirq-ai/depot/blob/main/src/qqdepot/commands/__init__.py) · code · 96 bytes

### build.py

qq build and qq test: run the same adapter actions as CI, here. Functions: `repo_root`,
`toolchain_args`, `recipes_argv`, `run`, `register`.

[`src/qqdepot/commands/build.py`](https://github.com/quirq-ai/depot/blob/main/src/qqdepot/commands/build.py) · code · 3081 bytes

### change.py

qq upload, try, land and status: send a change through the gate without waiting on it.
Functions: `run_upload`, `run_try`, `run_land`, `run_status`, `register`.

[`src/qqdepot/commands/change.py`](https://github.com/quirq-ai/depot/blob/main/src/qqdepot/commands/change.py) · code · 8071 bytes

### sync.py

qq sync and qq fetch: get a repo's pinned toolchains and dependencies. Functions: `sync`,
`run_sync`, `run_fetch`, `register`.

[`src/qqdepot/commands/sync.py`](https://github.com/quirq-ai/depot/blob/main/src/qqdepot/commands/sync.py) · code · 6565 bytes

_Generated 2026-10-06 12:17 UTC from `main`._
