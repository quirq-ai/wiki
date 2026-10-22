<!-- quirq-wiki-generated repo=argus-code dir=tests -->

# argus-code / tests

Source: [tests](https://github.com/quirq-ai/argus-code/tree/main/tests) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AGENTS.md

The agent/workspace instructions (“AGENTS.md — tests”). Parent: repo-root AGENTS.md. See
TESTING.md for the full per-file catalog; this doc is the binding conventions.

[`tests/AGENTS.md`](https://github.com/quirq-ai/argus-code/blob/main/tests/AGENTS.md) · code · 3168 bytes

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/__init__.py) · empty · 0 bytes

### conftest.py

Shared pytest fixtures and synthetic-line factories. Functions: `db_path`, `db`, `repo`,
`assistant_line`, `user_tool_result`, `session_factory`, `turn_factory`, `alert_factory`.
Contains tests.

[`tests/conftest.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/conftest.py) · code · 6184 bytes

### test_e2e.py

End-to-end smoke: synthetic JSONL → first-pass ingest → API returns it. Functions:
`test_full_ingest_and_serve_cycle`. Contains tests.

[`tests/test_e2e.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/test_e2e.py) · code · 2589 bytes

_Generated 2026-10-22 10:44 UTC from `main`._
