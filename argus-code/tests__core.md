<!-- quirq-wiki-generated repo=argus-code dir=tests/core -->

# argus-code / tests/core

Source: [tests/core](https://github.com/quirq-ai/argus-code/tree/main/tests/core) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/core/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/core/__init__.py) · empty · 0 bytes

### test_runtime.py

CoreRuntime — shared watcher+scheduler+first-pass lifecycle. Functions: `claude_root`,
`patched_adapters`, `test_start_read_write_ingests_and_wires_threads`,
`test_start_raises_when_no_adapters`, `test_stop_order_scheduler_then_watcher_then_db`,
`test_scheduler_uses_default_600s_interval`, `test_stop_is_idempotent`,
`test_read_only_skips_ingestion_and_blocks_writes`. Contains tests.

[`tests/core/test_runtime.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/core/test_runtime.py) · code · 5651 bytes

### test_runtime_shutdown.py

Shutdown must not close SQLite under a live writer thread (H5). Classes: `_DBProxy`,
`_FakeAdapter`, `_FakeRepo`, `_Handle`.

[`tests/core/test_runtime_shutdown.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/core/test_runtime_shutdown.py) · code · 8914 bytes

_Generated 2026-10-24 09:53 UTC from `main`._
