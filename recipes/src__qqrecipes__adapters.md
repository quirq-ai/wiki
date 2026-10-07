<!-- quirq-wiki-generated repo=recipes dir=src/qqrecipes/adapters -->

# recipes / src/qqrecipes/adapters

Source: [src/qqrecipes/adapters](https://github.com/quirq-ai/recipes/tree/main/src/qqrecipes/adapters) in [recipes](https://github.com/quirq-ai/recipes).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

The adapters: one module or package per target kind, named after the kind with - as _.

[`src/qqrecipes/adapters/__init__.py`](https://github.com/quirq-ai/recipes/blob/main/src/qqrecipes/adapters/__init__.py) · code · 381 bytes

### _python.py

Shared by the Python kinds (python-service, pytest): one virtualenv per repo checkout, made
from the pinned CPython, under .qq/venv so it is never an input. Functions:
`pinned_version`, `version_check`, `venv_actions`, `install`. Contains tests.

[`src/qqrecipes/adapters/_python.py`](https://github.com/quirq-ai/recipes/blob/main/src/qqrecipes/adapters/_python.py) · code · 3608 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
