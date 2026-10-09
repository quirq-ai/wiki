<!-- quirq-wiki-generated repo=release dir=src/qqrelease/backends -->

# release / src/qqrelease/backends

Source: [src/qqrelease/backends](https://github.com/quirq-ai/release/tree/main/src/qqrelease/backends) in [release](https://github.com/quirq-ai/release).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Backends: where a pointer's git ref lives, picked by the backend field in infra-config
(pipelines.toml [defaults] backend); github in v0, launchpad later. Functions: `load`.

[`src/qqrelease/backends/__init__.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/backends/__init__.py) · code · 1303 bytes

### github.py

GitHub backend: a pointer's ref is the branch refs/heads/ in the target repo, moved through
the REST API. Classes: `Mirror`. Functions: `_quote`.

[`src/qqrelease/backends/github.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/backends/github.py) · code · 4096 bytes

### local.py

Target repos as local git directories: /. Classes: `Mirror`.

[`src/qqrelease/backends/local.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/backends/local.py) · code · 1990 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
