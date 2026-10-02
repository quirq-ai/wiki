<!-- quirq-wiki-generated repo=xo-cowork-api dir=services/cowork_agent/adapters/openclaw -->

# xo-cowork-api / services/cowork_agent/adapters/openclaw

Source: [services/cowork_agent/adapters/openclaw](https://github.com/quirq-ai/xo-cowork-api/tree/main/services/cowork_agent/adapters/openclaw) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`services/cowork_agent/adapters/openclaw/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/__init__.py) · empty · 0 bytes

### adapter.py

Python module `adapter.py`. Classes: `OpenclawAdapter`.

[`services/cowork_agent/adapters/openclaw/adapter.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/adapter.py) · code · 8553 bytes

### agents.py

OpenClaw agents capability. Functions: `list_agents`, `create_agent`, `get_detail`, `patch`,
`delete`.

[`services/cowork_agent/adapters/openclaw/agents.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/agents.py) · code · 12087 bytes

### channels_status.py

OpenClaw Channels Status Functions: `fetch_channels_raw`, `build_status_view`,
`get_channels_status`.

[`services/cowork_agent/adapters/openclaw/channels_status.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/channels_status.py) · code · 4239 bytes

### chat.py

OpenClaw chat capability. Functions: `handle_prompt`, `get_sse_generator`.

[`services/cowork_agent/adapters/openclaw/chat.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/chat.py) · code · 2899 bytes

### direct_stream.py

OpenClaw direct-SSE chat path — bridges OpenClaw's OpenAI-compatible API to the xo-cowork
SSE event stream the frontend expects. Functions: `find_session_id_by_key`,
`openclaw_agent_id_from_prompt_body`, `create_new_session`, `stream_openclaw_to_sse`,
`emit_prefetched_sse`.

[`services/cowork_agent/adapters/openclaw/direct_stream.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/direct_stream.py) · code · 12972 bytes

### models.py

OpenClaw model listing (/api/models). Functions: `list_models`.

[`services/cowork_agent/adapters/openclaw/models.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/models.py) · code · 2364 bytes

### models_status.py

OpenClaw Models Status Functions: `fetch_raw_status`, `build_status_view`,
`get_models_status`.

[`services/cowork_agent/adapters/openclaw/models_status.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/models_status.py) · code · 3846 bytes

### paths.py

OpenClaw on-disk layout + API config constants, sourced from the openclaw manifest
(`get_agent("openclaw")`).

[`services/cowork_agent/adapters/openclaw/paths.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/paths.py) · code · 1649 bytes

### providers_status.py

Openclaw providers-status adapter. Functions: `get_providers_status`.

[`services/cowork_agent/adapters/openclaw/providers_status.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/providers_status.py) · code · 1064 bytes

### routes.py

OpenClaw adapter-owned routes. Defines the `router` application object. HTTP routes: `GET
/api/config/openclaw`, `GET /api/channels/openclaw/status`, `GET /api/codex/status`.
Functions: `get_openclaw_config`, `openclaw_status`, `codex_status`.

[`services/cowork_agent/adapters/openclaw/routes.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/routes.py) · code · 3325 bytes

### sessions.py

OpenClaw sessions capability. Functions: `enrich_project_session`, `resolve_native_file`,
`list_native_sessions`, `owns_session`, `get_messages`, `find_session_key`,
`set_session_directory`.

[`services/cowork_agent/adapters/openclaw/sessions.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/sessions.py) · code · 9435 bytes

### store.py

Read/write access to OpenClaw's on-disk layout: openclaw.json plus the per-agent directories
under ~/.openclaw/agents//. Functions: `load_openclaw_config`, `write_openclaw_config`,
`list_agent_entries`, `find_agent_entry_index`, `resolve_default_agent_id`,
`resolve_agent_workspace_dir`, `apply_agent_list_entry`, `seed_agent_workspace`, and 1 more.

[`services/cowork_agent/adapters/openclaw/store.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/store.py) · code · 6055 bytes

### streaming.py

OpenClaw-specific streaming functions. Functions: `stream_to_normalized`, `create_session`.

[`services/cowork_agent/adapters/openclaw/streaming.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/streaming.py) · code · 3548 bytes

### transcript.py

Tee OpenClaw exchanges into the project's `.xo/sessions/` directory. Functions:
`tee_exchange`.

[`services/cowork_agent/adapters/openclaw/transcript.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/transcript.py) · code · 5219 bytes

### usage.py

OpenClaw usage — discovery + parser + dashboard aggregator. Functions: `get_session_files`,
`parse_file`, `aggregate_for_dashboard`, `dashboard`, `build_summary`, `analytics`,
`summary`, `summary_card`, and 3 more.

[`services/cowork_agent/adapters/openclaw/usage.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/usage.py) · code · 20193 bytes

### visualizer_source.py

OpenClaw visualizer source — tails `~/.openclaw/agents//sessions/.jsonl`. Classes: `Source`.

[`services/cowork_agent/adapters/openclaw/visualizer_source.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/openclaw/visualizer_source.py) · code · 10272 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
