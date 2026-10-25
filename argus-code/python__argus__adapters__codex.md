<!-- quirq-wiki-generated repo=argus-code dir=python/argus/adapters/codex -->

# argus-code / python/argus/adapters/codex

Source: [python/argus/adapters/codex](https://github.com/quirq-ai/argus-code/tree/main/python/argus/adapters/codex) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Codex adapter package.

[`python/argus/adapters/codex/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/codex/__init__.py) · code · 141 bytes

### adapter.py

The Codex adapter -- façade over discovery and the per-file reader. Classes: `CodexAdapter`.

[`python/argus/adapters/codex/adapter.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/codex/adapter.py) · code · 3611 bytes

### discover.py

Find Codex rollout files and the thread each belongs to. Classes: `ThreadInfo`,
`ThreadIndex`. Functions: `codex_home`, `contained`, `parent_of`, `thread_info_from_meta`,
`peek_thread`.

[`python/argus/adapters/codex/discover.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/codex/discover.py) · code · 5966 bytes

### ingest_file.py

Parse one Codex rollout from a byte offset into an AdapterIngestResult. Functions:
`empty_result`, `ingest_codex_file`.

[`python/argus/adapters/codex/ingest_file.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/codex/ingest_file.py) · code · 7765 bytes

### lines.py

Read Codex rollout records (one JSON envelope per line) from a byte offset. Classes:
`Record`. Functions: `read_records`.

[`python/argus/adapters/codex/lines.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/codex/lines.py) · code · 2770 bytes

### records.py

Interpret single Codex records. Pure functions, no state, no I/O. Classes: `CallEvent`.
Functions: `tokens_of`, `usage_record`, `legacy_total_of`, `legacy_usage`, `is_task_start`,
`is_task_end`, `call_from_record`, `segments_from_record`.

[`python/argus/adapters/codex/records.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/codex/records.py) · code · 9608 bytes

### state.py

Per-file running state, folded record by record. Classes: `FileState`, `ContextCache`.
Functions: `scan`, `window_for`.

[`python/argus/adapters/codex/state.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/adapters/codex/state.py) · code · 6145 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
