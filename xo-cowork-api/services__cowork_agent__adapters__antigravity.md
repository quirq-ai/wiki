<!-- quirq-wiki-generated repo=xo-cowork-api dir=services/cowork_agent/adapters/antigravity -->

# xo-cowork-api / services/cowork_agent/adapters/antigravity

Source: [services/cowork_agent/adapters/antigravity](https://github.com/quirq-ai/xo-cowork-api/tree/main/services/cowork_agent/adapters/antigravity) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`services/cowork_agent/adapters/antigravity/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/__init__.py) · empty · 0 bytes

### adapter.py

Antigravity (agy) dispatch adapter. Classes: `AntigravityAdapter`. Functions:
`make_session_key`, `get_native_session_id`, `get_session_directory`,
`write_preliminary_entry`, `find_session_key_for_session_id`.

[`services/cowork_agent/adapters/antigravity/adapter.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/adapter.py) · code · 23849 bytes

### agents.py

antigravity agents capability. Functions: `list_agents`, `create_agent`, `get_detail`,
`patch`, `delete`.

[`services/cowork_agent/adapters/antigravity/agents.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/agents.py) · code · 5695 bytes

### auth.py

Antigravity (agy) login detection — file-based. Functions: `login_state`,
`has_usable_login`.

[`services/cowork_agent/adapters/antigravity/auth.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/auth.py) · code · 2477 bytes

### channels_status.py

Antigravity (agy) channels-status view. Functions: `build_status_view`,
`get_channels_status`.

[`services/cowork_agent/adapters/antigravity/channels_status.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/channels_status.py) · code · 901 bytes

### models.py

antigravity model listing (/api/models).

[`services/cowork_agent/adapters/antigravity/models.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/models.py) · code · 1172 bytes

### models_status.py

Antigravity (agy) models-status view — the "not logged in" surface. Functions:
`build_status_view`, `get_models_status`.

[`services/cowork_agent/adapters/antigravity/models_status.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/models_status.py) · code · 1540 bytes

### paths.py

Antigravity (agy) on-disk path constants. Functions: `transcript_path`, `conversation_db`.

[`services/cowork_agent/adapters/antigravity/paths.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/paths.py) · code · 2528 bytes

### providers_status.py

Antigravity (agy) providers-status adapter. Functions: `get_providers_status`.

[`services/cowork_agent/adapters/antigravity/providers_status.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/providers_status.py) · code · 2193 bytes

### routes.py

Connect Antigravity — agent-owned OAuth login flow (the `routes` capability). Defines the
`router` application object. HTTP routes: `POST /connect/antigravity/callback`, `POST
/connect/antigravity`. Classes: `AntigravityConnectCallbackBody`. Functions:
`antigravity_connect_callback`, `antigravity_connect`.

[`services/cowork_agent/adapters/antigravity/routes.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/routes.py) · code · 32781 bytes

### sessions.py

Antigravity (agy) sessions capability. Functions: `resolve_native_file`,
`enrich_project_session`, `list_native_sessions`, `owns_session`, `get_messages`,
`set_session_directory`.

[`services/cowork_agent/adapters/antigravity/sessions.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/sessions.py) · code · 12097 bytes

### tokens.py

Antigravity (agy) token accounting — read from the SQLite trajectory DB. Functions:
`extract_usage`, `conversation_tokens`.

[`services/cowork_agent/adapters/antigravity/tokens.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/tokens.py) · code · 7663 bytes

### transcript.py

Antigravity (agy) transcript + log parsing — shared by adapter / sessions / usage /
visualizer. Functions: `conversation_id_from_log`, `conversation_id_for_cwd`,
`conversation_id_from_summaries`, `newest_conversation_id`, `resolve_conversation_id`,
`read_steps`, `strip_user_request`, `final_answer`, and 4 more.

[`services/cowork_agent/adapters/antigravity/transcript.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/transcript.py) · code · 11794 bytes

### usage.py

Antigravity (agy) usage — discovery + parser + dashboard aggregator. Functions:
`get_session_files`, `parse_file`, `aggregate_for_dashboard`, `dashboard`, `build_summary`,
`analytics`, `summary`, `summary_card`, and 3 more.

[`services/cowork_agent/adapters/antigravity/usage.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/usage.py) · code · 11324 bytes

### visualizer_source.py

Antigravity (agy) visualizer source — tails the agy transcripts of xo-project sessions and
emits normalised activity events. Classes: `Source`.

[`services/cowork_agent/adapters/antigravity/visualizer_source.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/adapters/antigravity/visualizer_source.py) · code · 7338 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
