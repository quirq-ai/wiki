<!-- quirq-wiki-generated repo=xo-space dir=routers/cowork_agent/bff -->

# xo-space / routers/cowork_agent/bff

Source: [routers/cowork_agent/bff](https://github.com/quirq-ai/xo-space/tree/main/routers/cowork_agent/bff) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

BFF (Backend-for-Frontend) layer.

[`routers/cowork_agent/bff/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/bff/__init__.py) · code · 1154 bytes

### _visualizer_models.py

Pydantic response models for the visualizer BFF endpoints. Classes: `_ForbidExtra`,
`AnalyticsStats`, `CostAndTokensEntry`, `MessagesEntry`, `PerformanceEntry`,
`ToolUsageEntry`, `ToolUsage`, `ModelUsageEntry`, and 45 more.

[`routers/cowork_agent/bff/_visualizer_models.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/bff/_visualizer_models.py) · code · 21342 bytes

### _visualizer_presenter.py

Shared presentation helpers for the visualizer BFF routers. Functions: `bad_query`,
`date_from_ms`, `zero_filled_dates`, `rolling_key_for`, `provider_for_model`,
`row_total_tokens`, `by_day_from_stats`, `tokens_from_stats`, and 10 more.

[`routers/cowork_agent/bff/_visualizer_presenter.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/bff/_visualizer_presenter.py) · code · 13235 bytes

### connections.py

BFF routes for polled connections (the Inbox's Connections section and the Connectors tab's
Polling drawer). Defines the `router` application object. HTTP routes: `GET
/api/connections`, `GET /api/connections/{toolkit}`, `PUT /api/connections/{toolkit}`,
`DELETE /api/connections/{toolkit}`, `POST /api/connections/{toolkit}/poll`, `POST
/api/connections/{toolkit}/account`, and 1 more. Classes: `ConfigureBody`.

[`routers/cowork_agent/bff/connections.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/bff/connections.py) · code · 4186 bytes

### errors.py

HTTP glue shared by the Space BFF routes (`inbox.py, connections.py`). Classes:
`ForbidExtra`. Functions: `http_error`.

[`routers/cowork_agent/bff/errors.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/bff/errors.py) · code · 705 bytes

### filters.py

Visibility and validation predicates for the BFF layer. Functions: `is_valid_key`,
`is_valid_value`, `is_hidden_key`, `preview_value`, `is_hidden_name`, `is_root_only_hidden`,
`is_valid_workspace_id`.

[`routers/cowork_agent/bff/filters.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/bff/filters.py) · code · 4078 bytes

### inbox.py

BFF routes for the Space inbox. Defines the `router` application object. HTTP routes: `GET
/api/inbox`, `POST /api/inbox`, `PATCH /api/inbox`, `PATCH /api/inbox/{item_id}`, `DELETE
/api/inbox/{item_id}`. Classes: `CreateItemBody`, `UpdateItemBody`, `UpdateManyBody`.
Functions: `list_inbox`, `create_inbox_item`, `update_inbox_items`, `update_inbox_item`,
`delete_inbox_item`. Built with FastAPI.

[`routers/cowork_agent/bff/inbox.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/bff/inbox.py) · code · 3542 bytes

### project_management.py

Local project management. All filesystem and sharing policy is in services. Defines the
`router` application object. HTTP routes: `POST /api/xo-projects`, `GET /api/xo-
projects/{project_id}/removal`, `DELETE /api/xo-projects/{project_id}`. Classes:
`CloneProject`, `RemoveProject`. Functions: `clone_project`, `removal_status`,
`remove_project`.

[`routers/cowork_agent/bff/project_management.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/bff/project_management.py) · code · 2220 bytes

### project_sharing.py

BFF routes for the commit relay — the Space UI's only relay surface. Defines the `router`
application object. HTTP routes: `GET /api/project-sharing/status`, `POST /api/project-
sharing/check`, `POST /api/xo-projects/{project_id}/apply`, `GET /api/xo-
projects/{project_id}/commits`, `GET /api/xo-projects/{project_id}/members`, `POST /api/xo-
projects/{project_id}/share`, and 1 more. Classes: `ShareBody`.

[`routers/cowork_agent/bff/project_sharing.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/bff/project_sharing.py) · code · 3223 bytes

### secrets.py

BFF secrets routes — read & edit with curated shape. Defines the `router` application
object. HTTP routes: `GET /api/secrets`, `GET /api/secrets/{key}/reveal`, `PUT
/api/secrets`, `PATCH /api/secrets/{key}`, `DELETE /api/secrets/{key}`. Classes:
`SecretSummary`, `ListSecretsResponse`, `RevealResponse`, `SecretItem`, `PutSecretsRequest`,
`PatchSecretRequest`, `DeleteSecretResponse`.

[`routers/cowork_agent/bff/secrets.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/bff/secrets.py) · code · 6901 bytes

### visualizer.py

"""Project-scope BFF endpoints over one project's state.""" HTTP routes: `GET /api/xo-
projects/{project_id}/usage/summary/card`, `GET /api/xo-projects/{project_id}/todos`, `POST
/api/xo-projects/{project_id}/todos`, `GET /api/xo-projects/{project_id}/todos/{todo_id}`,
`PATCH /api/xo-projects/{project_id}/todos/{todo_id}`, `DELETE /api/xo-
projects/{project_id}/todos/{todo_id}`, and 18 more.

[`routers/cowork_agent/bff/visualizer.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/bff/visualizer.py) · code · 72637 bytes

### workspace_visualizer.py

Workspace-scope BFF endpoints over `~/xo-projects/.xo/`. Defines the `router` application
object. HTTP routes: `GET /api/xo-projects/usage`, `GET /api/xo-
projects/usage/summary/card`, `GET /api/xo-projects/usage/analytics`, `GET /api/xo-
projects/usage/sessions`, `GET /api/xo-projects/usage/summary`, `GET /api/xo-
projects/usage/sessions/{session_id}`, and 3 more.

[`routers/cowork_agent/bff/workspace_visualizer.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/bff/workspace_visualizer.py) · code · 34337 bytes

### xo_projects.py

GET /api/xo-projects — BFF list of user projects. Defines the `router` application object.
HTTP routes: `GET /api/xo-projects`, `GET /api/xo-projects/{project_id}/tree`, `GET /api/xo-
projects/{project_id}/file`, `GET /api/xo-projects/{project_id}/file-history`. Classes:
`Project`, `ListProjectsResponse`, `TreeEntry`, `ProjectTreeResponse`,
`FilePreviewResponse`, `FileHistoryCommit`, `FileHistoryResponse`.

[`routers/cowork_agent/bff/xo_projects.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/bff/xo_projects.py) · code · 17650 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
