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

[`src/xo/cli.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/cli.py) · code · 95801 bytes

### client.py

The network door to XO. Classes: `XoError`, `Response`, `_NoRedirect`, `Login`, `Client`.
Functions: `xo_url`, `api_key`, `read_key`, `check_key`, `credentials_path`, `saved_login`,
`save_login`, `forget_login`, and 2 more.

[`src/xo/client.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/client.py) · code · 18593 bytes

### commands.py

One command per API endpoint, generated from the spec. Classes: `Flag`. Functions: `kebab`,
`command_of`, `verb_of`, `plan`, `register`, `add_operation`, `values`, `flag_for`.

[`src/xo/commands.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/commands.py) · code · 8873 bytes

### github.py

GitHub through the gh CLI: log in, check the login works, and log out, on github.com only.
Classes: `GhUnsure`, `GhClient`. Functions: `installed`, `token_env`.

[`src/xo/github.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/github.py) · code · 7341 bytes

### gitops.py

The git xo runs for projects: the user's own git, with their own login, never a token of
xo's. Functions: `environment`, `run`, `clone`, `set_origin`, `origin_is`, `init`,
`own_checkout`, `fetch`, and 21 more.

[`src/xo/gitops.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/gitops.py) · code · 18672 bytes

### names.py

The names and refs xo's projects and spaces may hold. Functions: `is_github`, `short`,
`folder`, `owner_folders`, `named`, `project_ok`, `github_owner_ok`, `space_ok`, and 3 more.

[`src/xo/names.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/names.py) · code · 6187 bytes

### openapi.json

JSON document `openapi.json` whose top-level keys are `openapi`, `info`, `servers`,
`security`, `components`, `paths`. Looks like a route or path table.

[`src/xo/openapi.json`](https://github.com/quirq-ai/xo/blob/main/src/xo/openapi.json) · code · 32400 bytes

### quirq.py

The quirq hub: where a space's projects meet while people and their agents work on them.
Classes: `Hub`. Functions: `name`, `hub_path`, `parse`, `settings`, `save`, `forget`,
`installed`, `ready`, and 3 more.

[`src/xo/quirq.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/quirq.py) · code · 8573 bytes

### selfupdate.py

Auto-update: keep an xo that qq-setup installed at setup's newest reviewed commit. Runnable
as a script via `if __name__ == '__main__'`. Functions: `marker_path`, `state_path`,
`log_path`, `lock_path`, `installed_commit`, `pin_from`, `check`, `install`, and 2 more.

[`src/xo/selfupdate.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/selfupdate.py) · code · 14497 bytes

### server.py

xo serve: the server half of xo, holding the Clerk credentials so the CLI never needs them.
Classes: `Config`, `ClerkError`, `_NoRedirect`, `_Bucket`, `Clerk`, `HubError`,
`HubConflict`, `Hub`, and 5 more. Functions: `_list_env`, `_int_env`, `_upstream`,
`_browser_login`, `_hub_error`, `_secret_name`, `_mask`, `_mask_secrets`, and 20 more.

[`src/xo/server.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/server.py) · code · 142362 bytes

### services.json

JSON document `services.json` whose top-level keys are `schema`, `xo`, `me`. Structured data
consumed by the surrounding app or tooling.

[`src/xo/services.json`](https://github.com/quirq-ai/xo/blob/main/src/xo/services.json) · code · 387 bytes

### services.py

The list of services one xo login covers, and the addresses xo last logged in to. Classes:
`Service`. Functions: `listed_url`, `parse`, `builtin`, `fetch`, `addresses_path`,
`saved_addresses`, `save_addresses`, `forget_addresses`.

[`src/xo/services.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/services.py) · code · 9260 bytes

### spacerepo.py

xo create space [NAME] with no KIND: a folder becomes a space, a git repository on GitHub
(or on the quirq hub) with one branch per git repository under it. Classes: `Space`,
`_HereIgnore`. Functions: `refuse_here`, `folders`, `size`, `shown`, `digest`, `build`,
`published`, `on_github`, and 8 more.

[`src/xo/spacerepo.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/spacerepo.py) · code · 67124 bytes

### spec.py

The XO OpenAPI spec: where xo learns which operations exist and what each one takes.
Classes: `Param`, `BodyField`, `Operation`. Functions: `clean`, `own_header`, `load_local`,
`load`, `operations`, `find`, `match`, `known_params`, and 1 more.

[`src/xo/spec.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/spec.py) · code · 14901 bytes

### status_page.py

The status page xo serve answers at /: health, counts and recent requests, from /status.
Functions: `_hash`.

[`src/xo/status_page.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/status_page.py) · code · 8229 bytes

### weblogin.py

xo login in a browser: Clerk's sign-in (OAuth with PKCE), caught on this machine's loopback.
Functions: `settings`, `login`.

[`src/xo/weblogin.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/weblogin.py) · code · 8936 bytes

### workspace.py

xo install, xo update and xo sync: a space's projects on this machine, kept in step with the
space recorded in your private metadata. Functions: `target`, `dest`, `resolve`, `install`,
`update`, `sync`.

[`src/xo/workspace.py`](https://github.com/quirq-ai/xo/blob/main/src/xo/workspace.py) · code · 22362 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
