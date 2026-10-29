<!-- quirq-wiki-generated repo=xo-space dir=services/terminal -->

# xo-space / services/terminal

Source: [services/terminal](https://github.com/quirq-ai/xo-space/tree/main/services/terminal) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Terminals: a real shell in the browser, kept alive and tracked by Space.

[`services/terminal/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/terminal/__init__.py) · code · 1238 bytes

### config.py

The terminal gate and limits, read from the environment on every call. Functions: `enabled`,
`unavailable_reason`, `max_sessions`, `detached_ttl_seconds`, `shell`.

[`services/terminal/config.py`](https://github.com/quirq-ai/xo-space/blob/main/services/terminal/config.py) · code · 2626 bytes

### environment.py

The shell's environment and starting folder. Classes: `LocationError`. Functions:
`child_env`, `start_folder`, `project_path`.

[`services/terminal/environment.py`](https://github.com/quirq-ai/xo-space/blob/main/services/terminal/environment.py) · code · 4079 bytes

### scrollback.py

A terminal's recent output, which every viewer reads at its own pace. Classes: `_Modes`,
`Scrollback`.

[`services/terminal/scrollback.py`](https://github.com/quirq-ai/xo-space/blob/main/services/terminal/scrollback.py) · code · 4313 bytes

### sessions.py

The terminals this server is running: create, attach, rename, close, reap. Classes:
`TerminalError`, `Viewer`, `Terminal`, `Registry`. Functions: `clamp_size`, `clean_name`.

[`services/terminal/sessions.py`](https://github.com/quirq-ai/xo-space/blob/main/services/terminal/sessions.py) · code · 16322 bytes

_Generated 2026-10-29 11:52 UTC from `main`._
