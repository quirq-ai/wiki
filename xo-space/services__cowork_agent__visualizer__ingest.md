<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/visualizer/ingest -->

# xo-space / services/cowork_agent/visualizer/ingest

Source: [services/cowork_agent/visualizer/ingest](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/visualizer/ingest) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Ingest layer — reads raw runtime logs, produces normalised events.

[`services/cowork_agent/visualizer/ingest/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/ingest/__init__.py) · code · 770 bytes

### events.py

Normalised event types — the API the sinks consume. Classes: `Event`, `SessionFirstSeen`,
`MessageObserved`, `UsageObserved`, `ToolUseObserved`, `FileTouched`, `TaskCreateObserved`,
`TaskCreated`, and 3 more. Functions: `compute_latency_ms`.

[`services/cowork_agent/visualizer/ingest/events.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/ingest/events.py) · code · 8344 bytes

### jsonl_tail.py

Seek-tail reader with offset persistence. Classes: `OffsetStore`. Functions:
`read_new_lines`.

[`services/cowork_agent/visualizer/ingest/jsonl_tail.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/ingest/jsonl_tail.py) · code · 6630 bytes

### pii_filter.py

The redactor — the only module that turns a raw Claude Code jsonl line into normalised
:mod:events objects. Classes: `FileTouchPending`. Functions: `normalize_event`.

[`services/cowork_agent/visualizer/ingest/pii_filter.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/ingest/pii_filter.py) · code · 9889 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
