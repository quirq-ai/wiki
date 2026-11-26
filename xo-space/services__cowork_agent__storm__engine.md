<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/engine -->

# xo-space / services/cowork_agent/storm/engine

Source: [services/cowork_agent/storm/engine](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/engine) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Storm's session engine (design ch 07): it runs every session end to end. Functions:
`load_runtime`, `runtime_providers`, `current`, `boot`, `shutdown`.

[`services/cowork_agent/storm/engine/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/engine/__init__.py) · code · 5083 bytes

### admission.py

Admission: which ready session goes next, and whether its pool lets a new turn start (ch 07
§5; w2-w3 design §3.4, §5). Classes: `Wait`, `Seen`, `Pool`, `Candidate`. Functions:
`window_state`, `windows_now`, `standing`, `effective_rank`, `fair_order`.

[`services/cowork_agent/storm/engine/admission.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/engine/admission.py) · code · 19915 bytes

### catalog.py

An agent's catalog: its models and the efforts each takes (design ch 10 §3.3), read from its
runtime. Classes: `Catalog`.

[`services/cowork_agent/storm/engine/catalog.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/engine/catalog.py) · code · 3760 bytes

### engine.py

"""The session engine: runs every storm session end to end (design ch 07).

[`services/cowork_agent/storm/engine/engine.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/engine/engine.py) · code · 137130 bytes

### memory.py

The memory guard: may a new CLI process start now? Classes: `MemoryReading`, `MemoryGuard`.
Functions: `read_memory`, `peak_rss_bytes`.

[`services/cowork_agent/storm/engine/memory.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/engine/memory.py) · code · 7326 bytes

### model.py

The engine's own types: what callers hand it, what it hands back, and its typed failures
(design ch 07). Classes: `Wake`, `CallRef`, `Ask`, `Decision`, `StopResult`,
`EngineUnavailable`, `SessionNotFound`, `SessionRefused`, and 5 more. Functions:
`founder_hold`, `held_by_founder`.

[`services/cowork_agent/storm/engine/model.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/engine/model.py) · code · 9567 bytes

### places.py

Where a session stands: its project, the policy's `Places` and `SessionRef`, and the per-
project session-index row observation reads. Classes: `Project`. Functions: `project_of`,
`policy_view`, `write_index_row`.

[`services/cowork_agent/storm/engine/places.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/engine/places.py) · code · 3557 bytes

### ports.py

The engine's seams: the small interfaces other storm packages implement, so they plug in
without editing the engine. Classes: `Timer`, `Clock`, `LoopClock`, `Listener`, `Preparer`,
`TurnCheck`, `TurnNote`, `RunsAggregate`, and 4 more. Functions: `iso`, `live_successor`.

[`services/cowork_agent/storm/engine/ports.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/engine/ports.py) · code · 16228 bytes

### raw_turns.py

Each turn's raw CLI output, kept for debugging (storm ch 08 §4, §6; ch 16 §3; §0.106).
Classes: `RawTurnLog`, `TeedProcess`. Functions: `_by_turn`, `_redacted`, `_write_all`.

[`services/cowork_agent/storm/engine/raw_turns.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/engine/raw_turns.py) · code · 10285 bytes

### records.py

What the engine writes, as SQL run inside one store transaction each (ch 08 §3). Classes:
`StaleEpoch`, `Ids`, `TurnIdTaken`, `TurnEnd`. Functions: `fence`, `set_status`,
`end_retired_waits`, `native_never_submitted`, `ensure_turn`, `take_wakes`, `finish_turn`,
`step`, and 2 more.

[`services/cowork_agent/storm/engine/records.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/engine/records.py) · code · 12819 bytes

### session.py

One attached session: a runtime session (its CLI process), the pump that records its events,
the running turn, the calls held for the person and the live sub-agents (ch 07 §2, §4, §6).
Classes: `Parked`, `Meta`, `Turn`, `Held`, `Input`, `_Facts`, `LiveSession`, `EngineHost`.

[`services/cowork_agent/storm/engine/session.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/engine/session.py) · code · 71611 bytes

### specs.py

A `SessionSpec as the store keeps it (sessions.spec`), and back. Functions:
`with_session_token`, `wants_session_token`, `token_digest`, `spec_to_json`,
`spec_from_json`.

[`services/cowork_agent/storm/engine/specs.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/engine/specs.py) · code · 2857 bytes

_Generated 2026-11-26 15:54 UTC from `main`._
