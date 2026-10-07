<!-- quirq-wiki-generated repo=rollers dir=src/qqroll/backends -->

# rollers / src/qqroll/backends

Source: [src/qqroll/backends](https://github.com/quirq-ai/rollers/tree/main/src/qqroll/backends) in [rollers](https://github.com/quirq-ai/rollers).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Where roll PRs are opened. Each backend is a module here with a Backend class; github now,
launchpad (quirq's own cloud) later. Classes: `BackendError`. Functions: `load`.

[`src/qqroll/backends/__init__.py`](https://github.com/quirq-ai/rollers/blob/main/src/qqroll/backends/__init__.py) · code · 663 bytes

### github.py

The github backend: read a file from a repo and open or update a roll PR, over the REST API.
Classes: `Backend`. Functions: `_urllib_request`, `_tool_env`, `_run`.

[`src/qqroll/backends/github.py`](https://github.com/quirq-ai/rollers/blob/main/src/qqroll/backends/github.py) · code · 10593 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
