<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/engine -->

# xo-space / services/cowork_agent/engine

Source: [services/cowork_agent/engine](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/engine) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

The broker's chat/session engine — agent-agnostic runtime that turns an HTTP request into
normalized chat events and persists session metadata.

[`services/cowork_agent/engine/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/engine/__init__.py) · code · 579 bytes

### chat_state.py

Shared in-memory state for the cowork_agent chat streaming path.

[`services/cowork_agent/engine/chat_state.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/engine/chat_state.py) · code · 318 bytes

### dispatcher.py

Python module `dispatcher.py`. Classes: `AgentDispatcher`.

[`services/cowork_agent/engine/dispatcher.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/engine/dispatcher.py) · code · 1115 bytes

### messages.py

Convert OpenClaw's JSONL message records into the xo-cowork MessageResponse shape consumed
by the frontend. Functions: `content_blocks`, `convert_messages`,
`convert_native_claude_messages`.

[`services/cowork_agent/engine/messages.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/engine/messages.py) · code · 18217 bytes

### sessions_io.py

Session-file I/O, and the per-project session index itself. Functions: `shard_filename`,
`read_session_index_at`, `read_root_session_index`, `read_session_index`,
`write_session_row`, `iter_project_session_indexes`, `load_all_sessions`,
`find_session_file`, and 1 more.

[`services/cowork_agent/engine/sessions_io.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/engine/sessions_io.py) · code · 14670 bytes

### stream_events.py

The one vocabulary an adapter's `stream()` speaks. Functions: `is_known_label`, `token`,
`activity`, `running`, `session_id`, `result`, `error`.

[`services/cowork_agent/engine/stream_events.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/engine/stream_events.py) · code · 3870 bytes

### usage_loader.py

Dynamic loader for the active agent's usage module. Functions: `load_usage_module`.

[`services/cowork_agent/engine/usage_loader.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/engine/usage_loader.py) · code · 1198 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
