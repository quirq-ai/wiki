<!-- quirq-wiki-generated repo=xo-cowork-api dir=services/cowork_agent/adapters/claude_code -->

# xo-cowork-api / services/cowork_agent/adapters/claude_code

Source: [services/cowork_agent/adapters/claude_code](https://github.com/quirq-ai/xo-cowork-api/tree/main/services/cowork_agent/adapters/claude_code) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`services/cowork_agent/adapters/claude_code/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/__init__.py) · empty · 0 bytes

### _project_encoding.py

Claude Code's encoded-cwd jsonl directory ↔ xo-project id helpers. Functions:
`project_id_for_encoded_cwd`.

[`services/cowork_agent/adapters/claude_code/_project_encoding.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/_project_encoding.py) · code · 3180 bytes

### adapter.py

Python module `adapter.py`. Classes: `ClaudeCodeAdapter`. Functions: `make_session_key`,
`find_session_id_by_key`, `get_native_session_id`, `get_session_directory`,
`write_preliminary_entry`, `find_session_key_for_session_id`.

[`services/cowork_agent/adapters/claude_code/adapter.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/adapter.py) · code · 22810 bytes

### agents.py

claude_code agents capability. Functions: `list_agents`, `create_agent`, `get_detail`,
`patch`, `delete`.

[`services/cowork_agent/adapters/claude_code/agents.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/agents.py) · code · 7255 bytes

### channels_status.py

Claude Code channels-status view. Functions: `build_status_view`, `get_channels_status`.

[`services/cowork_agent/adapters/claude_code/channels_status.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/channels_status.py) · code · 1390 bytes

### models.py

claude_code model listing (/api/models).

[`services/cowork_agent/adapters/claude_code/models.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/models.py) · code · 550 bytes

### models_status.py

Claude Code models-status view. Functions: `build_status_view`, `fetch_raw_status`,
`get_models_status`.

[`services/cowork_agent/adapters/claude_code/models_status.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/models_status.py) · code · 3600 bytes

### providers_status.py

Claude-code providers-status adapter. Functions: `get_providers_status`.

[`services/cowork_agent/adapters/claude_code/providers_status.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/providers_status.py) · code · 2867 bytes

### remote_control.py

claude_code Remote Control lifecycle. Functions: `native_login_present`,
`ensure_gates_seeded`, `status`, `start`, `stop`. Built with FastAPI.

[`services/cowork_agent/adapters/claude_code/remote_control.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/remote_control.py) · code · 13280 bytes

### routes.py

claude_code adapter-owned routes. Defines the `router` application object. HTTP routes: `GET
/api/remote-control/status`, `POST /api/remote-control/start`, `POST /api/remote-
control/stop`. Classes: `RemoteControlStartBody`. Functions: `remote_control_status`,
`remote_control_start`, `remote_control_stop`.

[`services/cowork_agent/adapters/claude_code/routes.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/routes.py) · code · 1685 bytes

### sessions.py

Claude Code sessions capability. Functions: `enrich_project_session`, `resolve_native_file`,
`list_native_sessions`, `owns_session`, `get_messages`, `set_session_directory`.

[`services/cowork_agent/adapters/claude_code/sessions.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/sessions.py) · code · 5281 bytes

### streaming.py

Python module `streaming.py`. Functions: `parse_stream_line`.

[`services/cowork_agent/adapters/claude_code/streaming.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/streaming.py) · code · 2389 bytes

### usage.py

Claude Code usage — discovery + parser + dashboard aggregator. Functions:
`get_session_files`, `parse_file`, `aggregate_for_dashboard`, `dashboard`, `build_summary`,
`analytics`, `summary`, `summary_card`, and 3 more.

[`services/cowork_agent/adapters/claude_code/usage.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/usage.py) · code · 19047 bytes

### visualizer_source.py

Claude Code visualizer source — tails `~/.claude/projects/*.jsonl` and reads
`~/.claude/sessions/.json` for live presence. Classes: `Source`. Functions:
`_is_duplicate_turn_event`, `_pid_alive`.

[`services/cowork_agent/adapters/claude_code/visualizer_source.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/claude_code/visualizer_source.py) · code · 21105 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
