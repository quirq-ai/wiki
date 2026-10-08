<!-- quirq-wiki-generated repo=depot dir=src/qqdepot/backends -->

# depot / src/qqdepot/backends

Source: [src/qqdepot/backends](https://github.com/quirq-ai/depot/tree/main/src/qqdepot/backends) in [depot](https://github.com/quirq-ai/depot).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Backend-specific code for qq upload, try, land and status: one module per backend. Classes:
`ChangeError`, `Change`. Functions: `load`.

[`src/qqdepot/backends/__init__.py`](https://github.com/quirq-ai/depot/blob/main/src/qqdepot/backends/__init__.py) · code · 2093 bytes

### github.py

GitHub backend: thin wrappers over the gh command line. Functions: `repo`, `default_branch`,
`current_branch`, `push`, `find`, `create`, `view`, `runs`, and 4 more.

[`src/qqdepot/backends/github.py`](https://github.com/quirq-ai/depot/blob/main/src/qqdepot/backends/github.py) · code · 7041 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
