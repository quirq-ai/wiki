<!-- quirq-wiki-generated repo=argus-code dir=python/argus/collector -->

# argus-code / python/argus/collector

Source: [python/argus/collector](https://github.com/quirq-ai/argus-code/tree/main/python/argus/collector) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AGENTS.md

The agent/workspace instructions (“AGENTS.md — collector (ingest pipeline + backfill)”).
Parent: python/argus/AGENTS.md. Turns transcript files into stored rows.

[`python/argus/collector/AGENTS.md`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/collector/AGENTS.md) · code · 6864 bytes

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`python/argus/collector/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/collector/__init__.py) · empty · 0 bytes

### aggregate.py

Build Session and Turn rows from adapter-supplied raw events. Functions: `build_turn`,
`build_session`, `aggregate_adapter_result`.

[`python/argus/collector/aggregate.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/collector/aggregate.py) · code · 4578 bytes

### first_run.py

First-pass ingest: walk every adapter's files, recent first. Classes: `IngestStatus`,
`FirstRunHandle`. Functions: `join_first_run_threads`, `run_first_pass_ingest`,
`dedupe_shared_messages`. Contains tests.

[`python/argus/collector/first_run.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/collector/first_run.py) · code · 22345 bytes

### pipeline.py

Orchestrate one ingest: read new bytes, upsert turns/calls/segments, recompute session.
Functions: `recompute_stored_session`, `ingest_file`.

[`python/argus/collector/pipeline.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/collector/pipeline.py) · code · 17673 bytes

### rollup_subagents.py

Roll sub-agent session totals up into the parent. Functions: `rollup_subagents`.

[`python/argus/collector/rollup_subagents.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/collector/rollup_subagents.py) · code · 1144 bytes

### scheduler.py

Periodic detector loop. Daemon thread inside the same process as the server; runs each
detector once at boot, then every `interval_sec` (default 600) until `.stop()` is called.
Classes: `SchedulerHandle`. Functions: `start_scheduler`.

[`python/argus/collector/scheduler.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/collector/scheduler.py) · code · 3050 bytes

### search_backfill.py

Background search-index backfill. Classes: `SearchBackfillStatus`. Functions:
`get_search_backfill_status`, `request_search_backfill_stop`,
`join_search_backfill_threads`, `run_segment_backfill`.

[`python/argus/collector/search_backfill.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/collector/search_backfill.py) · code · 4695 bytes

### session_files.py

Map stored session ids back to their transcript files (for backfills). Functions:
`files_by_session`.

[`python/argus/collector/session_files.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/collector/session_files.py) · code · 725 bytes

### watcher.py

Watchdog-based live file tailing. Classes: `_DebouncedHandler`, `WatcherHandle`. Functions:
`start_watcher`.

[`python/argus/collector/watcher.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/collector/watcher.py) · code · 5867 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
