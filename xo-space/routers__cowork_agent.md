<!-- quirq-wiki-generated repo=xo-space dir=routers/cowork_agent -->

# xo-space / routers/cowork_agent

Source: [routers/cowork_agent](https://github.com/quirq-ai/xo-space/tree/main/routers/cowork_agent) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Router aggregation for the cowork_agent subpackage. Functions: `_active_agent_routes`. Built
with FastAPI.

[`routers/cowork_agent/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/__init__.py) · code · 3333 bytes

### agents.py

Agent CRUD endpoints — thin forwarding to each backend's `agents` capability. Defines the
`router` application object. HTTP routes: `GET /api/agents`, `POST /api/agents`, `GET
/api/agents/{agent_id}`, `DELETE /api/agents/{agent_id}`, `PATCH /api/agents/{agent_id}`.
Classes: `CreateAgentBody`, `UpdateAgentBody`. Functions: `get_agent_detail`, `list_agents`,
`create_agent`, `get_agent`, `delete_agent`, `patch_agent`.

[`routers/cowork_agent/agents.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/agents.py) · code · 6097 bytes

### channels.py

Channel provisioning endpoints. Defines the `router` application object. HTTP routes: `POST
/api/channels/add`. Functions: `add_channel`.

[`routers/cowork_agent/channels.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/channels.py) · code · 7225 bytes

### chat.py

Plain chat: `POST /api/chat/prompt, POST /api/chat/abort`, `GET /api/chat/active and GET
/api/chat/stream/{stream_id}` (storm ch 17 §2.1, §3; sedc 09 #6, #7). Defines the `router`
application object. HTTP routes: `POST /api/chat/prompt`, `GET
/api/chat/stream/{stream_id}`, `POST /api/chat/abort`, `GET /api/chat/active`. Classes:
`PlainPrompt`, `AbortSession`, `_OneTarget`.

[`routers/cowork_agent/chat.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/chat.py) · code · 21186 bytes

### config.py

Configuration / provider / model-list endpoints. Defines the `router` application object.
HTTP routes: `POST /api/config/providers/{provider_id}/key`, `DELETE
/api/config/providers/{provider_id}/key`, `GET /api/models`, `GET /api/config/api-key`, `GET
/api/config/providers`, `GET /api/config/openai-subscription`, and 5 more.

[`routers/cowork_agent/config.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/config.py) · code · 12333 bytes

### doctor.py

xo-doctor: the state health report and its one action. Defines the `router` application
object. HTTP routes: `GET /api/doctor`, `POST /api/doctor/runtime-leftovers/{key}/move-
aside`. Classes: `MoveAside`. Functions: `get_doctor_report`, `move_runtime_leftover_aside`.

[`routers/cowork_agent/doctor.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/doctor.py) · code · 3189 bytes

### files.py

Workspace / filesystem endpoints under /api/files/*. Defines the `router` application
object. HTTP routes: `POST /api/files/upload`, `POST /api/files/list-directory`, `POST
/api/files/content`, `POST /api/files/content-binary`, `POST /api/files/save`, `POST
/api/files/mkdir`. Functions: `upload_file`, `list_directory`, `file_content`,
`file_content_binary`, `file_save`, `make_directory`.

[`routers/cowork_agent/files.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/files.py) · code · 11290 bytes

### fts.py

Full-text-search index endpoints (currently stubbed). Defines the `router` application
object. HTTP routes: `GET /api/fts/index/{workspace:path}`, `POST
/api/fts/index/{workspace:path}`. Functions: `fts_index_get`, `fts_index_post`.

[`routers/cowork_agent/fts.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/fts.py) · code · 608 bytes

### misc.py

Miscellaneous status / listing endpoints. Defines the `router` application object. HTTP
routes: `GET /api/tools`, `GET /api/skills`, `GET /api/mcp/status`, `GET /api/connectors`,
`GET /api/channels`, `GET /api/automations`, and 2 more. Functions: `list_tools`,
`list_skills`, `mcp_status`, `list_connectors`, `list_channels`, `list_automations`,
`plugins_status`, `ollama_status`.

[`routers/cowork_agent/misc.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/misc.py) · code · 3862 bytes

### onboarding.py

Onboarding state — persisted on disk so the first-run flow does not re-trigger when the user
opens xo-cowork in a new browser, incognito window, or after clearing localStorage. Defines
the `router` application object. HTTP routes: `GET /api/onboarding`, `POST
/api/onboarding/complete`. Functions: `onboarding_status`, `onboarding_complete`.

[`routers/cowork_agent/onboarding.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/onboarding.py) · code · 931 bytes

### opentelemetry.py

OpenTelemetry GenAI Exporter & OTLP endpoints. Defines the `router` application object. HTTP
routes: `GET /api/sessions/{session_id}/otel`, `POST
/api/sessions/{session_id}/otel/export`. Classes: `OTLPExportRequest`. Functions:
`get_session_otel_trace`, `export_session_otel_trace`.

[`routers/cowork_agent/opentelemetry.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/opentelemetry.py) · code · 2844 bytes

### quirq_state.py

Privacy-aware inspection endpoint for machine-local Quirq state. Defines the `router`
application object. HTTP routes: `GET /api/quirq`. Functions: `get_quirq_catalog`.

[`routers/cowork_agent/quirq_state.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/quirq_state.py) · code · 276 bytes

### runtime_config.py

Runtime setup routes for the local Quirq installation. Defines the `router` application
object. HTTP routes: `GET /api/runtime-config`, `PUT /api/runtime-config`, `PUT
/api/runtime-config/roots`, `POST /api/runtime-config/restart`. Classes:
`RuntimeConfigRequest`, `RootConfigRequest`. Functions: `get_runtime_config`,
`put_runtime_config`, `put_runtime_roots`, `restart_runtime`.

[`routers/cowork_agent/runtime_config.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/runtime_config.py) · code · 1763 bytes

### secrets.py

Legacy secrets endpoints backed by the active secrets store. Defines the `router`
application object. HTTP routes: `GET /api/secrets/env`, `GET /api/secrets/env/keys`, `PUT
/api/secrets/env`. Functions: `get_env_secrets`, `get_env_keys`, `put_env_secrets`.

[`routers/cowork_agent/secrets.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/secrets.py) · code · 1766 bytes

### sessions.py

Session + message routes. Defines the `router` application object. HTTP routes: `GET
/api/sessions`, `GET /api/sessions/search`, `GET /api/sessions/{session_id}`, `GET
/api/messages/{session_id}`, `POST /api/sessions`, `PATCH /api/sessions/{session_id}`, and 4
more. Functions: `list_sessions`, `search_sessions`, `get_session`, `get_messages`,
`create_session`, `update_session`, `delete_session`, `session_transcript_view`, and 2 more.

[`routers/cowork_agent/sessions.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/sessions.py) · code · 5522 bytes

### skills.py

Skill install catalog endpoints. Defines the `router` application object. HTTP routes: `GET
/api/skills/catalog`, `POST /api/skills/install`. Classes: `InstallRequest`. Functions:
`list_catalog`, `install_skill`.

[`routers/cowork_agent/skills.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/skills.py) · code · 1826 bytes

### terminal.py

`/api/terminal/*`: shells in the browser, kept alive and tracked. Defines the `router`
application object. HTTP routes: `GET /api/terminal/status`, `GET /api/terminal/sessions`,
`GET /api/terminal/sessions/{terminal_id}`, `POST /api/terminal/sessions`, `POST
/api/terminal/sessions/{terminal_id}/attach`, `PATCH /api/terminal/sessions/{terminal_id}`,
and 2 more. Classes: `CreateTerminal`, `RenameTerminal`.

[`routers/cowork_agent/terminal.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/terminal.py) · code · 11507 bytes

### usage.py

Canonical usage router — /api/usage/*. Defines the `router` application object. HTTP routes:
`GET /api/usage`, `GET /api/usage/analytics`, `GET /api/usage/summary`, `GET
/api/usage/summary/card`, `GET /api/usage/sessions`, `GET /api/usage/sessions/{session_id}`.
Functions: `usage_dashboard`, `usage_analytics`, `usage_summary`, `usage_summary_card`,
`usage_sessions`, `usage_session`.

[`routers/cowork_agent/usage.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/usage.py) · code · 4821 bytes

### workspace_memory.py

Workspace-memory endpoints. Defines the `router` application object. HTTP routes: `GET
/api/workspace-memory`, `GET /api/workspace-memory/list`, `PUT /api/workspace-memory`,
`DELETE /api/workspace-memory`, `POST /api/workspace-memory/refresh`, `POST /api/workspace-
memory/export`.

[`routers/cowork_agent/workspace_memory.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/workspace_memory.py) · code · 936 bytes

### xo_projects_sync.py

xo-projects backup/restore router. Defines the `router` application object. HTTP routes:
`POST /setup`, `GET /status`, `GET /projects`, `POST /projects/{project_id}`, `POST /all`,
`POST /projects/{project_id}/restore`, and 1 more. Classes: `SetupBody`, `BackupBody`,
`RestoreBody`, `RestoreAllBody`. Functions: `setup`, `status`, `list_projects_in_repo`,
`backup_project`, `backup_all_projects`, `restore_project`, `restore_all_projects`.

[`routers/cowork_agent/xo_projects_sync.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/xo_projects_sync.py) · code · 13060 bytes

_Generated 2026-10-28 11:43 UTC from `main`._
