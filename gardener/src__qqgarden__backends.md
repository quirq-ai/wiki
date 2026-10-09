<!-- quirq-wiki-generated repo=gardener dir=src/qqgarden/backends -->

# gardener / src/qqgarden/backends

Source: [src/qqgarden/backends](https://github.com/quirq-ai/gardener/tree/main/src/qqgarden/backends) in [gardener](https://github.com/quirq-ai/gardener).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Backends: where commits and post-submit runs come from. Functions: `load`.

[`src/qqgarden/backends/__init__.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/backends/__init__.py) · code · 940 bytes

### github.py

GitHub backend. History comes from a public git clone; post-submit runs from the Actions
API. Classes: `Backend`. Functions: `workflow_file`.

[`src/qqgarden/backends/github.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/backends/github.py) · code · 14621 bytes

### localforge.py

A forge on local bare git repos, for tests and CI's done-when demos. Classes: `LocalForge`.

[`src/qqgarden/backends/localforge.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/backends/localforge.py) · code · 3741 bytes

### snapshot.py

An offline backend: commits and runs from a JSON snapshot. Classes: `Backend`.

[`src/qqgarden/backends/snapshot.py`](https://github.com/quirq-ai/gardener/blob/main/src/qqgarden/backends/snapshot.py) · code · 3138 bytes

_Generated 2026-10-09 12:09 UTC from `main`._
