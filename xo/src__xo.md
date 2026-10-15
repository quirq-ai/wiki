<!-- quirq-wiki-generated repo=xo dir=src/xo -->

# xo / src/xo

Source: [src/xo](https://github.com/quirq-ai/xo/tree/claude/xo-cli-5ynop4/src/xo) in [xo](https://github.com/quirq-ai/xo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

xo: the command line for the XO Cloud API.

[`src/xo/__init__.py`](https://github.com/quirq-ai/xo/blob/claude/xo-cli-5ynop4/src/xo/__init__.py) · code · 72 bytes

### cli.py

xo: the command line for the XO Cloud core API (app.xo.builders/api/core/v1). Runnable as a
script via `if __name__ == '__main__'`. Classes: `_Parser`. Functions: `safe_error`, `main`.

[`src/xo/cli.py`](https://github.com/quirq-ai/xo/blob/claude/xo-cli-5ynop4/src/xo/cli.py) · code · 25114 bytes

### client.py

The one HTTP door to the XO API. Classes: `XoError`, `Response`, `_NoRedirect`, `Client`.
Functions: `base_url`, `api_key`, `redact`.

[`src/xo/client.py`](https://github.com/quirq-ai/xo/blob/claude/xo-cli-5ynop4/src/xo/client.py) · code · 8831 bytes

### commands.py

One command per API endpoint, generated from the spec. Classes: `Flag`. Functions: `kebab`,
`command_of`, `verb_of`, `plan`, `register`, `values`, `flag_for`.

[`src/xo/commands.py`](https://github.com/quirq-ai/xo/blob/claude/xo-cli-5ynop4/src/xo/commands.py) · code · 8034 bytes

### openapi.json

JSON document `openapi.json` whose top-level keys are `openapi`, `info`, `servers`,
`security`, `components`, `paths`. Looks like a route or path table.

[`src/xo/openapi.json`](https://github.com/quirq-ai/xo/blob/claude/xo-cli-5ynop4/src/xo/openapi.json) · code · 31188 bytes

### spec.py

The XO OpenAPI spec: where xo learns which operations exist and what each one takes.
Classes: `Param`, `BodyField`, `Operation`. Functions: `clean`, `own_header`, `load_local`,
`load`, `operations`, `find`, `match`, `known_params`, and 1 more.

[`src/xo/spec.py`](https://github.com/quirq-ai/xo/blob/claude/xo-cli-5ynop4/src/xo/spec.py) · code · 14591 bytes

_Generated 2026-10-15 10:26 UTC from `claude/xo-cli-5ynop4`._
