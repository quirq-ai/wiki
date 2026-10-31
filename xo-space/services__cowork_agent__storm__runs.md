<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/runs -->

# xo-space / services/cowork_agent/storm/runs

Source: [services/cowork_agent/storm/runs](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/runs) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Storm's sub-agent runs (design ch 14): one tree per session, captured from the runtime's run
events and reconciled with what its CLI keeps on disk.

[`services/cowork_agent/storm/runs/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/runs/__init__.py) · code · 666 bytes

### live.py

One process's sub-agents in memory (design ch 14 §2.1). Classes: `Progress`, `LiveRuns`.

[`services/cowork_agent/storm/runs/live.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/runs/live.py) · code · 2065 bytes

### operations.py

Sub-agent runs as the routes read and change them (design ch 14 §4, §11; ch 17 §2.3).
Classes: `RunNotFound`, `RunsRefused`, `TranscriptGone`. Functions: `list_runs`, `get_run`,
`read_transcript`, `stop_run`, `stop_all`, `counts`.

[`services/cowork_agent/storm/runs/operations.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/runs/operations.py) · code · 16792 bytes

### records.py

What the store keeps of a session's sub-agents (design ch 14 §3; ch 08 §2), as SQL on the
store's thread: the `runs rows and their run.*` events, each change inside the one
transaction of the write that causes it (the engine's `Writes, or boot recovery's Tx: both
execute` and `append`). Functions: `new_id`, `started`, `found`, `finished`, `gone`,
`set_waiting`, `backgrounded`, `request_stop`, and 7 more.

[`services/cowork_agent/storm/runs/records.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/runs/records.py) · code · 18786 bytes

_Generated 2026-10-31 11:18 UTC from `main`._
