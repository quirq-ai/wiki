<!-- quirq-wiki-generated repo=xo-cowork-api dir=routers/cowork_agent -->

# xo-cowork-api / routers/cowork_agent

Source: [routers/cowork_agent](https://github.com/quirq-ai/xo-cowork-api/tree/main/routers/cowork_agent) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Router aggregation for the cowork_agent subpackage. Functions: `_active_agent_routes`. Built
with FastAPI.

[`routers/cowork_agent/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/__init__.py) · code · 2705 bytes

### agents.py

Agent CRUD endpoints — thin forwarding to each backend's `agents` capability. Defines the
`router` application object. HTTP routes: `GET /api/agents`, `POST /api/agents`, `GET
/api/agents/{agent_id}`, `DELETE /api/agents/{agent_id}`, `PATCH /api/agents/{agent_id}`.
Classes: `CreateAgentBody`, `UpdateAgentBody`. Functions: `get_agent_detail`, `list_agents`,
`create_agent`, `get_agent`, `delete_agent`, `patch_agent`.

[`routers/cowork_agent/agents.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/agents.py) · code · 6097 bytes

### channels.py

Channel provisioning endpoints. Defines the `router` application object. HTTP routes: `POST
/api/channels/add`. Functions: `add_channel`.

[`routers/cowork_agent/channels.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/channels.py) · code · 7595 bytes

### chat.py

Chat prompt / streaming / abort routes. Defines the `router` application object. HTTP
routes: `POST /api/chat/prompt`, `GET /api/chat/stream/{stream_id}`, `POST /api/chat/abort`,
`POST /api/chat/respond`. Functions: `chat_prompt`, `chat_stream`, `chat_abort`,
`chat_respond`.

[`routers/cowork_agent/chat.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/chat.py) · code · 15947 bytes

### config.py

Configuration / provider / model-list endpoints. Defines the `router` application object.
HTTP routes: `POST /api/config/providers/{provider_id}/key`, `DELETE
/api/config/providers/{provider_id}/key`, `GET /api/models`, `GET /api/config/api-key`, `GET
/api/config/providers`, `GET /api/config/openai-subscription`, and 5 more.

[`routers/cowork_agent/config.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/config.py) · code · 12338 bytes

### files.py

Workspace / filesystem endpoints under /api/files/*. Defines the `router` application
object. HTTP routes: `POST /api/files/upload`, `POST /api/files/list-directory`, `POST
/api/files/content`, `POST /api/files/content-binary`, `POST /api/files/save`, `POST
/api/files/mkdir`. Functions: `upload_file`, `list_directory`, `file_content`,
`file_content_binary`, `file_save`, `make_directory`.

[`routers/cowork_agent/files.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/files.py) · code · 9986 bytes

### fts.py

Full-text-search index endpoints (currently stubbed). Defines the `router` application
object. HTTP routes: `GET /api/fts/index/{workspace:path}`, `POST
/api/fts/index/{workspace:path}`. Functions: `fts_index_get`, `fts_index_post`.

[`routers/cowork_agent/fts.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/fts.py) · code · 608 bytes

### misc.py

Miscellaneous status / listing endpoints. Defines the `router` application object. HTTP
routes: `GET /api/tools`, `GET /api/skills`, `GET /api/chat/active`, `GET /api/mcp/status`,
`GET /api/connectors`, `GET /api/channels`, and 3 more. Functions: `list_tools`,
`list_skills`, `chat_active`, `mcp_status`, `list_connectors`, `list_channels`,
`list_automations`, `plugins_status`, and 1 more.

[`routers/cowork_agent/misc.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/misc.py) · code · 2129 bytes

### onboarding.py

Onboarding state — persisted on disk so the first-run flow does not re-trigger when the user
opens xo-cowork in a new browser, incognito window, or after clearing localStorage. Defines
the `router` application object. HTTP routes: `GET /api/onboarding`, `POST
/api/onboarding/complete`. Functions: `onboarding_status`, `onboarding_complete`.

[`routers/cowork_agent/onboarding.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/onboarding.py) · code · 898 bytes

### secrets.py

Secrets endpoints backed by the active agent's `.env` file. Defines the `router` application
object. HTTP routes: `GET /api/secrets/env`, `GET /api/secrets/env/keys`, `PUT
/api/secrets/env`. Functions: `get_env_secrets`, `get_env_keys`, `put_env_secrets`.

[`routers/cowork_agent/secrets.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/secrets.py) · code · 1830 bytes

### sessions.py

Session + message routes. Defines the `router` application object. HTTP routes: `GET
/api/sessions`, `GET /api/sessions/search`, `GET /api/sessions/{session_id}`, `GET
/api/messages/{session_id}`, `POST /api/sessions`, `PATCH /api/sessions/{session_id}`, and 3
more. Functions: `list_sessions`, `search_sessions`, `get_session`, `get_messages`,
`create_session`, `update_session`, `delete_session`, `session_todos`, and 1 more.

[`routers/cowork_agent/sessions.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/sessions.py) · code · 5059 bytes

### skills.py

Skill install catalog endpoints. Defines the `router` application object. HTTP routes: `GET
/api/skills/catalog`, `POST /api/skills/install`. Classes: `InstallRequest`. Functions:
`list_catalog`, `install_skill`.

[`routers/cowork_agent/skills.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/skills.py) · code · 1826 bytes

### usage.py

Canonical usage router — /api/usage/*. Defines the `router` application object. HTTP routes:
`GET /api/usage`, `GET /api/usage/analytics`, `GET /api/usage/summary`, `GET
/api/usage/summary/card`, `GET /api/usage/sessions`, `GET /api/usage/sessions/{session_id}`.
Functions: `usage_dashboard`, `usage_analytics`, `usage_summary`, `usage_summary_card`,
`usage_sessions`, `usage_session`.

[`routers/cowork_agent/usage.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/usage.py) · code · 4821 bytes

### workspace_memory.py

Workspace-memory endpoints. Defines the `router` application object. HTTP routes: `GET
/api/workspace-memory`, `GET /api/workspace-memory/list`, `PUT /api/workspace-memory`,
`DELETE /api/workspace-memory`, `POST /api/workspace-memory/refresh`, `POST /api/workspace-
memory/export`.

[`routers/cowork_agent/workspace_memory.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/workspace_memory.py) · code · 936 bytes

### xo_projects_sync.py

xo-projects backup/restore router. Defines the `router` application object. HTTP routes:
`POST /setup`, `GET /status`, `GET /projects`, `POST /projects/{project_id}`, `POST /all`,
`POST /projects/{project_id}/restore`, and 1 more. Classes: `SetupBody`, `BackupBody`,
`RestoreBody`, `RestoreAllBody`. Functions: `setup`, `status`, `list_projects_in_repo`,
`backup_project`, `backup_all_projects`, `restore_project`, `restore_all_projects`.

[`routers/cowork_agent/xo_projects_sync.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/xo_projects_sync.py) · code · 13022 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
