<!-- quirq-wiki-generated repo=xo dir=src/xo -->

# xo / src/xo

Source: [src/xo](https://github.com/quirq-ai/xo/tree/main/src/xo) in [xo](https://github.com/quirq-ai/xo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

xo: the command line for the XO Cloud API.

[`src/xo/__init__.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/__init__.py) · code · 72 bytes

### cli.py

"""xo: the command line for the XO Cloud core API (dev.xo.builders/api/core/v1, through the
xo server).

[`src/xo/cli.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/cli.py) · code · 74393 bytes

### client.py

The network door to XO and Coder. Classes: `XoError`, `Response`, `_NoRedirect`, `Login`,
`Client`, `CoderUnsure`, `CoderTimeout`, `CoderClient`. Functions: `xo_url`, `coder_url`,
`api_key`, `read_key`, `check_key`, `credentials_path`, `saved_login`, `save_login`, and 2
more.

[`src/xo/client.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/client.py) · code · 31025 bytes

### coder.py

The xo-github template's inputs. No network or local Coder configuration lives here.
Functions: `github_parameters`.

[`src/xo/coder.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/coder.py) · code · 2133 bytes

### commands.py

One command per API endpoint, generated from the spec. Classes: `Flag`. Functions: `kebab`,
`command_of`, `verb_of`, `plan`, `register`, `add_operation`, `values`, `flag_for`.

[`src/xo/commands.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/commands.py) · code · 8881 bytes

### github.py

GitHub through the gh CLI: log in, check the login works, and log out, on github.com only.
Classes: `GhUnsure`, `GhClient`. Functions: `installed`, `token_env`.

[`src/xo/github.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/github.py) · code · 7341 bytes

### gitops.py

The git xo runs for projects: the user's own git, with their own login, never a token of
xo's. Functions: `environment`, `run`, `clone`, `set_origin`, `init`, `own_checkout`,
`fetch`, `dirty`, and 9 more.

[`src/xo/gitops.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/gitops.py) · code · 11809 bytes

### names.py

The names and refs xo's projects and spaces may hold. Functions: `is_github`, `project_ok`,
`space_ok`, `xo_name_ok`, `ref_ok`, `from_github_url`.

[`src/xo/names.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/names.py) · code · 3566 bytes

### openapi.json

JSON document `openapi.json` whose top-level keys are `openapi`, `info`, `servers`,
`security`, `components`, `paths`. Looks like a route or path table.

[`src/xo/openapi.json`](https://github.com/quirq-ai/xo/blob/main/src/xo/openapi.json) · code · 36002 bytes

### server.py

"""xo serve: the server half of xo, holding the Clerk credentials so the CLI never needs
them.

[`src/xo/server.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/server.py) · code · 110768 bytes

### services.json

JSON document `services.json` whose top-level keys are `schema`, `xo`, `me`. Structured data
consumed by the surrounding app or tooling.

[`src/xo/services.json`](https://github.com/quirq-ai/xo/blob/main/src/xo/services.json) · code · 526 bytes

### services.py

The list of services one xo login covers, and the addresses xo last logged in to. Classes:
`Service`. Functions: `listed_url`, `parse`, `builtin`, `fetch`, `addresses_path`,
`saved_addresses`, `save_addresses`, `forget_addresses`, and 1 more.

[`src/xo/services.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/services.py) · code · 9724 bytes

### spec.py

The XO OpenAPI spec: where xo learns which operations exist and what each one takes.
Classes: `Param`, `BodyField`, `Operation`. Functions: `clean`, `own_header`, `load_local`,
`load`, `operations`, `find`, `match`, `known_params`, and 1 more.

[`src/xo/spec.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/spec.py) · code · 14901 bytes

### status_page.py

The status page xo serve answers at /: health, counts and recent requests, from /status.
Functions: `_hash`.

[`src/xo/status_page.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/status_page.py) · code · 8229 bytes

### workspace.py

xo install, xo update and xo sync: a space's projects on this machine, kept in step with the
space recorded in your private metadata. Functions: `target`, `install`, `update`, `sync`.

[`src/xo/workspace.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/workspace.py) · code · 13109 bytes

_Generated 2026-10-17 09:48 UTC from `main`._
