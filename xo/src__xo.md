<!-- quirq-wiki-generated repo=xo dir=src/xo -->

# xo / src/xo

Source: [src/xo](https://github.com/quirq-ai/xo/tree/main/src/xo) in [xo](https://github.com/quirq-ai/xo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

xo: the command line for the XO Cloud API.

[`src/xo/__init__.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/__init__.py) · code · 72 bytes

### cli.py

xo: the command line for the XO Cloud core API (dev.xo.builders/api/core/v1, through the xo
server). Runnable as a script via `if __name__ == '__main__'`. Classes: `_Parser`.
Functions: `safe_error`, `main`.

[`src/xo/cli.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/cli.py) · code · 48280 bytes

### client.py

The network door to XO and Coder. Classes: `XoError`, `Response`, `_NoRedirect`, `Login`,
`Client`, `CoderUnsure`, `CoderTimeout`, `CoderClient`. Functions: `xo_url`, `coder_url`,
`api_key`, `read_key`, `check_key`, `credentials_path`, `saved_login`, `save_login`, and 2
more.

[`src/xo/client.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/client.py) · code · 30708 bytes

### coder.py

The xo-github template's inputs. No network or local Coder configuration lives here.
Functions: `github_parameters`.

[`src/xo/coder.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/coder.py) · code · 2133 bytes

### commands.py

One command per API endpoint, generated from the spec. Classes: `Flag`. Functions: `kebab`,
`command_of`, `verb_of`, `plan`, `register`, `values`, `flag_for`.

[`src/xo/commands.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/commands.py) · code · 8118 bytes

### openapi.json

JSON document `openapi.json` whose top-level keys are `openapi`, `info`, `servers`,
`security`, `components`, `paths`. Looks like a route or path table.

[`src/xo/openapi.json`](https://github.com/quirq-ai/xo/blob/main/src/xo/openapi.json) · code · 35771 bytes

### server.py

xo serve: the server half of xo, holding the Clerk credentials so the CLI never needs them.
Classes: `Config`, `ClerkError`, `_NoRedirect`, `_Bucket`, `Clerk`, `Core`, `_Forwarded`,
`_Reply`, and 2 more. Functions: `services_list`, `is_config`, `is_page`, `wsgi_app`,
`make_server`, `serve`.

[`src/xo/server.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/server.py) · code · 40237 bytes

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

_Generated 2026-10-16 10:14 UTC from `main`._
