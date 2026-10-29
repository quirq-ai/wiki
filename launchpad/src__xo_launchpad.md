<!-- quirq-wiki-generated repo=launchpad dir=src/xo_launchpad -->

# launchpad / src/xo_launchpad

Source: [src/xo_launchpad](https://github.com/quirq-ai/launchpad/tree/main/src/xo_launchpad) in [launchpad](https://github.com/quirq-ai/launchpad).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

XO Launchpad CLI. Runtime dependencies: Python standard library only.

[`src/xo_launchpad/__init__.py`](https://github.com/quirq-ai/launchpad/blob/main/src/xo_launchpad/__init__.py) · code · 99 bytes

### __main__.py

Python module `__main__.py`.

[`src/xo_launchpad/__main__.py`](https://github.com/quirq-ai/launchpad/blob/main/src/xo_launchpad/__main__.py) · code · 48 bytes

### auth.py

XO is the login owner. Launchpad delegates to its installed CLI, never implements OAuth.
Functions: `run_xo`.

[`src/xo_launchpad/auth.py`](https://github.com/quirq-ai/launchpad/blob/main/src/xo_launchpad/auth.py) · code · 932 bytes

### cli.py

One argparse CLI for Launchpad v2; no backend imports or runtime dependencies. Classes:
`Parser`, `Context`. Functions: `positive`, `integer_between`, `json_input`, `object_input`,
`pairs`, `login_options`, `add_global_options`, `build_parser`, and 13 more.

[`src/xo_launchpad/cli.py`](https://github.com/quirq-ai/launchpad/blob/main/src/xo_launchpad/cli.py) · code · 30041 bytes

### client.py

The only network boundary: authenticated requests to a single configured origin. Classes:
`CliError`, `XoLogin`, `NoRedirect`, `Client`. Functions: `normalize_url`, `check_key`,
`config_path`, `read_settings`, `save_settings`, `xo_credentials_path`, `read_xo_login`,
`shared_key`, and 5 more.

[`src/xo_launchpad/client.py`](https://github.com/quirq-ai/launchpad/blob/main/src/xo_launchpad/client.py) · code · 10543 bytes

### operations.json

JSON document `operations.json` whose top-level keys are `source`, `operations`. Structured
data consumed by the surrounding app or tooling.

[`src/xo_launchpad/operations.json`](https://github.com/quirq-ai/launchpad/blob/main/src/xo_launchpad/operations.json) · code · 8118 bytes

### output.py

Terminal rendering and copyable commands. Functions: `shell_quote`, `docker_commands`,
`table`, `render`.

[`src/xo_launchpad/output.py`](https://github.com/quirq-ai/launchpad/blob/main/src/xo_launchpad/output.py) · code · 4130 bytes

_Generated 2026-10-29 11:51 UTC from `main`._
