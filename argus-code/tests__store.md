<!-- quirq-wiki-generated repo=argus-code dir=tests/store -->

# argus-code / tests/store

Source: [tests/store](https://github.com/quirq-ai/argus-code/tree/main/tests/store) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/store/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/store/__init__.py) · empty · 0 bytes

### test_db.py

Schema + migrations smoke tests. Functions: `test_open_db_read_only_rejects_writes`,
`test_creates_schema_on_first_open`, `test_enables_wal_mode`, `test_is_idempotent`,
`test_fts5_compiled_in`, `test_open_db_creates_alerts_table`,
`test_open_db_applies_latest_migration`, `test_migration_006_adds_tool_use_id_column`, and 8
more. Contains tests.

[`tests/store/test_db.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/store/test_db.py) · code · 9900 bytes

### test_repository.py

Repository surface tests — ported 1:1 from src/store/repository.test.ts.

[`tests/store/test_repository.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/store/test_repository.py) · code · 37600 bytes

### test_transactions.py

Write batches are atomic and the shared connection's transactions don't leak (H4).

[`tests/store/test_transactions.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/store/test_transactions.py) · code · 4354 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
