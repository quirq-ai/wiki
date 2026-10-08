<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/adapters/hermes -->

# xo-space / services/cowork_agent/adapters/hermes

Source: [services/cowork_agent/adapters/hermes](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/adapters/hermes) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`services/cowork_agent/adapters/hermes/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/__init__.py) · empty · 0 bytes

### adapter.py

Hermes adapter: drives the local Hermes gateway (`hermes gateway`) on
`http://127.0.0.1:8642/v1/chat/completions`. Classes: `HermesAdapter`.

[`services/cowork_agent/adapters/hermes/adapter.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/adapter.py) · code · 9331 bytes

### agents.py

Hermes agents capability. Functions: `list_agents`, `create_agent`, `get_detail`, `patch`,
`delete`.

[`services/cowork_agent/adapters/hermes/agents.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/agents.py) · code · 16224 bytes

### channels_status.py

Hermes channels-status view. Functions: `build_status_view`, `get_channels_status`,
`list_channels`.

[`services/cowork_agent/adapters/hermes/channels_status.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/channels_status.py) · code · 3865 bytes

### chat.py

Hermes chat capability. Functions: `resolve_agent_id`.

[`services/cowork_agent/adapters/hermes/chat.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/chat.py) · code · 1503 bytes

### dump.py

Hermes dump parser. Functions: `parse_dump`, `fetch_dump`.

[`services/cowork_agent/adapters/hermes/dump.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/dump.py) · code · 5247 bytes

### gateway_pool.py

Per-profile hermes gateway pool. Functions: `default_gateway_url`, `ensure_gateway`,
`stop_gateway`, `stop_all`, `list_pool`.

[`services/cowork_agent/adapters/hermes/gateway_pool.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/gateway_pool.py) · code · 17053 bytes

### models.py

Hermes model listing (/api/models). Functions: `list_models`.

[`services/cowork_agent/adapters/hermes/models.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/models.py) · code · 1766 bytes

### models_status.py

Hermes models-status view. Functions: `build_status_view`, `get_models_status`.

[`services/cowork_agent/adapters/hermes/models_status.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/models_status.py) · code · 3984 bytes

### paths.py

Hermes on-disk layout + API config constants, sourced from the hermes manifest
(`get_agent("hermes")`).

[`services/cowork_agent/adapters/hermes/paths.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/paths.py) · code · 1456 bytes

### profile_env.py

Parametric .env I/O for any hermes profile dir. Classes: `EnvEntry`. Functions:
`upsert_env_entry`, `delete_env_entry`, `parse_env_entries`, `load_env_entries`,
`list_env_keys`, `save_env_entries`.

[`services/cowork_agent/adapters/hermes/profile_env.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/profile_env.py) · code · 4957 bytes

### providers_status.py

Hermes providers-status adapter. Functions: `get_providers_status`.

[`services/cowork_agent/adapters/hermes/providers_status.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/providers_status.py) · code · 1014 bytes

### routes.py

Per-hermes-profile configuration endpoints. Defines the `router` application object.

[`services/cowork_agent/adapters/hermes/routes.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/routes.py) · code · 75679 bytes

### sessions.py

Hermes sessions capability. Functions: `enrich_project_session`, `resolve_native_file`,
`list_native_sessions`, `owns_session`, `get_messages`, `set_session_directory`.

[`services/cowork_agent/adapters/hermes/sessions.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/sessions.py) · code · 2500 bytes

### sessionslist.py

Publish one row into the per-project session index after each hermes streaming exchange.
Functions: `write_session_row`.

[`services/cowork_agent/adapters/hermes/sessionslist.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/sessionslist.py) · code · 2448 bytes

### state_db.py

Read-only access to Hermes's session state, across every profile. Functions:
`list_all_profile_names`, `list_hermes_sessions`, `find_hermes_profile`,
`load_hermes_session_records`, `register_inflight_exchange`.

[`services/cowork_agent/adapters/hermes/state_db.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/state_db.py) · code · 16997 bytes

### streaming.py

SSE stream parser for Hermes's OpenAI-compatible /v1/chat/completions. Functions:
`stream_to_normalized`, `run_collected`.

[`services/cowork_agent/adapters/hermes/streaming.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/streaming.py) · code · 7632 bytes

### usage.py

Hermes usage — SQLite reader, dashboard aggregator, and sync aggregator. Functions:
`get_session_files`, `parse_file`, `build_summary`, `aggregate_for_dashboard`,
`aggregate_for_sync`, `dashboard`, `analytics`, `summary`, and 3 more.

[`services/cowork_agent/adapters/hermes/usage.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/usage.py) · code · 29171 bytes

### visualizer_source.py

Hermes visualizer source — polls every hermes profile's SQLite state.db and emits message-
level events into the watcher. Classes: `Source`. Functions: `_profile_state_dbs`,
`_fetch_session_models`, `_build_session_to_project_map`, `_tool_names_from_json`,
`_epoch_to_iso`, `_load_offsets`, `_save_offsets`.

[`services/cowork_agent/adapters/hermes/visualizer_source.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/hermes/visualizer_source.py) · code · 13462 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
