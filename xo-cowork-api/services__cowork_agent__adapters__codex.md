<!-- quirq-wiki-generated repo=xo-cowork-api dir=services/cowork_agent/adapters/codex -->

# xo-cowork-api / services/cowork_agent/adapters/codex

Source: [services/cowork_agent/adapters/codex](https://github.com/quirq-ai/xo-cowork-api/tree/main/services/cowork_agent/adapters/codex) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`services/cowork_agent/adapters/codex/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/codex/__init__.py) · empty · 0 bytes

### adapter.py

Python module `adapter.py`. Classes: `CodexAdapter`. Functions: `make_session_key`,
`find_session_id_by_key`, `get_native_session_id`, `get_session_directory`,
`write_preliminary_entry`, `find_session_key_for_session_id`.

[`services/cowork_agent/adapters/codex/adapter.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/codex/adapter.py) · code · 24174 bytes

### agents.py

codex agents capability. Functions: `list_agents`, `create_agent`, `get_detail`, `patch`,
`delete`.

[`services/cowork_agent/adapters/codex/agents.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/codex/agents.py) · code · 5788 bytes

### channels_status.py

Codex channels-status view. Functions: `build_status_view`, `get_channels_status`.

[`services/cowork_agent/adapters/codex/channels_status.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/codex/channels_status.py) · code · 891 bytes

### models.py

codex model listing (/api/models).

[`services/cowork_agent/adapters/codex/models.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/codex/models.py) · code · 1182 bytes

### models_status.py

Codex models-status view (Twin A — CLI exit-code probe). Functions: `build_status_view`,
`get_models_status`.

[`services/cowork_agent/adapters/codex/models_status.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/codex/models_status.py) · code · 3181 bytes

### paths.py

Codex CLI on-disk rollout discovery. Functions: `codex_home`, `rollout_root`,
`find_rollout`, `iter_rollouts`, `read_session_meta`, `read_session_cwd`.

[`services/cowork_agent/adapters/codex/paths.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/codex/paths.py) · code · 5978 bytes

### providers_status.py

Codex providers-status adapter. Functions: `get_providers_status`.

[`services/cowork_agent/adapters/codex/providers_status.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/codex/providers_status.py) · code · 1499 bytes

### sessions.py

Codex sessions capability. Functions: `resolve_native_file`, `enrich_project_session`,
`list_native_sessions`, `owns_session`, `get_messages`, `set_session_directory`.

[`services/cowork_agent/adapters/codex/sessions.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/codex/sessions.py) · code · 16049 bytes

### streaming.py

Python module `streaming.py`. Functions: `parse_stream_line`.

[`services/cowork_agent/adapters/codex/streaming.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/codex/streaming.py) · code · 7688 bytes

### usage.py

Codex CLI usage — discovery + parser + dashboard aggregator. Functions: `get_session_files`,
`parse_file`, `aggregate_for_dashboard`, `dashboard`, `build_summary`, `analytics`,
`summary`, `summary_card`, and 3 more.

[`services/cowork_agent/adapters/codex/usage.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/codex/usage.py) · code · 21696 bytes

### visualizer_source.py

Codex (OpenAI Codex CLI) visualizer source — tails the date-nested rollout files
`~/.codex/sessions/YYYY/MM/DD/rollout--.jsonl` and emits normalised activity events.
Classes: `Source`. Functions: `_uuid_from_rollout`.

[`services/cowork_agent/adapters/codex/visualizer_source.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/codex/visualizer_source.py) · code · 17436 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
