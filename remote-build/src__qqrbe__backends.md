<!-- quirq-wiki-generated repo=remote-build dir=src/qqrbe/backends -->

# remote-build / src/qqrbe/backends

Source: [src/qqrbe/backends](https://github.com/quirq-ai/remote-build/tree/main/src/qqrbe/backends) in [remote-build](https://github.com/quirq-ai/remote-build).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Executor backends, one module each. See qqrbe.executor.

[`src/qqrbe/backends/__init__.py`](https://github.com/quirq-ai/remote-build/blob/main/src/qqrbe/backends/__init__.py) · code · 62 bytes

### github.py

The github backend: run the action on a GitHub Actions runner. Classes: `Response`,
`GitHubExecutor`. Functions: `create`.

[`src/qqrbe/backends/github.py`](https://github.com/quirq-ai/remote-build/blob/main/src/qqrbe/backends/github.py) · code · 14087 bytes

### local.py

The local backend: run the action as a subprocess on this machine. Classes: `LocalExecutor`.
Functions: `create`.

[`src/qqrbe/backends/local.py`](https://github.com/quirq-ai/remote-build/blob/main/src/qqrbe/backends/local.py) · code · 1408 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
