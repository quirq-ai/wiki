<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/stream -->

# xo-space / services/cowork_agent/storm/stream

Source: [services/cowork_agent/storm/stream](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/stream) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Storm's events and streams (design ch 09): the bus, the turn presenter and the SSE writers.
Functions: `listener`, `attach`, `detach`, `end_streams_on_exit_signal`, `current`,
`stream`, `events_page`, `require_session`.

[`services/cowork_agent/storm/stream/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/stream/__init__.py) · code · 7748 bytes

### bus.py

The bus (design ch 09 §4): in-process, one per engine. Classes: `Subscriber`, `Bus`.

[`services/cowork_agent/storm/stream/bus.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/stream/bus.py) · code · 14637 bytes

### frames.py

What travels on storm's streams (design ch 09 §3): one envelope for every event, its place
in the stream, the subscriber's filter, and the SSE encoding. Classes: `BadResumePoint`,
`Frame`, `Point`, `Filter`. Functions: `resume_point`, `control`.

[`services/cowork_agent/storm/stream/frames.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/stream/frames.py) · code · 6310 bytes

### presenter.py

The turn presenter (design ch 09 §2): one turn's events become the Claude-app blocks every
client renders: Thinking, Narration, Activity group, Plan, Answer (and Shared files, which
B3's `share` event brings). Classes: `Streams`, `Out`, `_Row`, `_Block`, `_Appended`,
`_Thinking`, `TurnPresenter`. Functions: `present`.

[`services/cowork_agent/storm/stream/presenter.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/stream/presenter.py) · code · 32139 bytes

### replay.py

Reading the state log back as frames (design ch 09 §4, §6): a reconnect's replay and `GET
/api/chat/events`. Classes: `Replay`. Functions: `read_page`, `stale_point`.

[`services/cowork_agent/storm/stream/replay.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/stream/replay.py) · code · 5097 bytes

### source.py

Everything the stream asks of the engine, in one place, through the engine's public view
only. Classes: `Source`.

[`services/cowork_agent/storm/stream/source.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/stream/source.py) · code · 1983 bytes

### turns.py

Stored events → frames: the one fold the live stream, a reconnect's replay and `GET
/api/chat/events` all run, so each gives the same frames for the same stored events, in the
same order, at the same places. Classes: `Running`, `Turns`.

[`services/cowork_agent/storm/stream/turns.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/stream/turns.py) · code · 4040 bytes

### wording.py

The one wording table (design ch 09 §2): every activity row and group header is built here
from the tool `kind` the runtime supplies (ch 01 §5.3), the same for every CLI. Classes:
`Wording`. Functions: `row_line`, `pending_line`, `group_header`, `thinking_header`,
`plan_header`, `human_size`, `shared_header`.

[`services/cowork_agent/storm/stream/wording.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/stream/wording.py) · code · 7047 bytes

_Generated 2026-10-28 11:43 UTC from `main`._
