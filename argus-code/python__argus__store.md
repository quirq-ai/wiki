<!-- quirq-wiki-generated repo=argus-code dir=python/argus/store -->

# argus-code / python/argus/store

Source: [python/argus/store](https://github.com/quirq-ai/argus-code/tree/main/python/argus/store) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AGENTS.md

The agent/workspace instructions (“AGENTS.md — store (SQLite, migrations, repository)”).
Parent: python/argus/AGENTS.md. The data layer; ~/.argus/argus.db is also a durable archive
(rows outlive Claude Code's own .jsonl cleanup).

[`python/argus/store/AGENTS.md`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/store/AGENTS.md) · code · 5318 bytes

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`python/argus/store/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/store/__init__.py) · empty · 0 bytes

### db.py

SQLite connection opener + migration runner. Classes: `ArgusConnection`,
`FTS5NotAvailableError`. Functions: `open_db`.

[`python/argus/store/db.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/store/db.py) · code · 9934 bytes

### repository.py

Repository — all SQL lives here. Classes: `_TxState`, `Repository`. Functions:
`normalize_project_path`.

[`python/argus/store/repository.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/store/repository.py) · code · 61909 bytes

_Generated 2026-10-22 10:44 UTC from `main`._
