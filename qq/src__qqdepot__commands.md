<!-- quirq-wiki-generated repo=qq dir=src/qqdepot/commands -->

# qq / src/qqdepot/commands

Source: [src/qqdepot/commands](https://github.com/quirq-ai/qq/tree/main/src/qqdepot/commands) in [qq](https://github.com/quirq-ai/qq).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

qq's own subcommands. Each module has register(subparsers), the same shape a plugin uses.

[`src/qqdepot/commands/__init__.py`](https://github.com/quirq-ai/qq/blob/main/src/qqdepot/commands/__init__.py) · code · 96 bytes

### build.py

qq build and qq test: run a repo's targets here through quirq-ai/recipes. Functions:
`repo_root`, `toolchain_args`, `recipes_argv`, `run`, `register`.

[`src/qqdepot/commands/build.py`](https://github.com/quirq-ai/qq/blob/main/src/qqdepot/commands/build.py) · code · 3206 bytes

### change.py

qq upload, try, land and status: send a change through the gate without waiting on it.
Functions: `run_upload`, `run_try`, `run_land`, `run_status`, `register`.

[`src/qqdepot/commands/change.py`](https://github.com/quirq-ai/qq/blob/main/src/qqdepot/commands/change.py) · code · 8071 bytes

### create.py

qq create: give this repo a qq command of its own. Functions: `run_create`, `register`.

[`src/qqdepot/commands/create.py`](https://github.com/quirq-ai/qq/blob/main/src/qqdepot/commands/create.py) · code · 2372 bytes

### run.py

qq run and a repo's own commands: run a command in the repo's qq environment. Classes:
`RunError`, `UsageError`, `_Parser`. Functions: `check_name`, `saved_path`, `saved_names`,
`toolchain_bins`, `environment`, `execute`, `qq_commands`, `shadowed`, and 8 more.

[`src/qqdepot/commands/run.py`](https://github.com/quirq-ai/qq/blob/main/src/qqdepot/commands/run.py) · code · 19191 bytes

### sync.py

qq sync and qq fetch: get a repo's pinned toolchains and dependencies. Functions: `sync`,
`run_sync`, `run_fetch`, `register`.

[`src/qqdepot/commands/sync.py`](https://github.com/quirq-ai/qq/blob/main/src/qqdepot/commands/sync.py) · code · 6565 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
