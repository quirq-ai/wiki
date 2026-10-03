<!-- quirq-wiki-generated repo=xo-cowork-api dir=routers/cowork_agent/bff -->

# xo-cowork-api / routers/cowork_agent/bff

Source: [routers/cowork_agent/bff](https://github.com/quirq-ai/xo-cowork-api/tree/main/routers/cowork_agent/bff) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

BFF (Backend-for-Frontend) layer.

[`routers/cowork_agent/bff/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/bff/__init__.py) · code · 827 bytes

### _visualizer_models.py

Pydantic response models for the visualizer BFF endpoints. Classes: `_ForbidExtra`,
`AnalyticsStats`, `CostAndTokensEntry`, `MessagesEntry`, `PerformanceEntry`,
`ToolUsageEntry`, `ToolUsage`, `ModelUsageEntry`, and 22 more.

[`routers/cowork_agent/bff/_visualizer_models.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/bff/_visualizer_models.py) · code · 9990 bytes

### _visualizer_presenter.py

Shared presentation helpers for the visualizer BFF routers. Functions: `bad_query`,
`date_from_ms`, `zero_filled_dates`, `rolling_key_for`, `provider_for_model`,
`row_total_tokens`, `by_day_from_stats`, `tokens_from_stats`, and 10 more.

[`routers/cowork_agent/bff/_visualizer_presenter.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/bff/_visualizer_presenter.py) · code · 12349 bytes

### filters.py

Visibility and validation predicates for the BFF layer. Functions: `is_valid_key`,
`is_valid_value`, `is_hidden_key`, `preview_value`, `is_hidden_name`, `is_root_only_hidden`.

[`routers/cowork_agent/bff/filters.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/bff/filters.py) · code · 3507 bytes

### secrets.py

BFF secrets routes — read & edit with curated shape. Defines the `router` application
object. HTTP routes: `GET /api/secrets`, `GET /api/secrets/{key}/reveal`, `PUT
/api/secrets`, `PATCH /api/secrets/{key}`, `DELETE /api/secrets/{key}`. Classes:
`SecretSummary`, `ListSecretsResponse`, `RevealResponse`, `SecretItem`, `PutSecretsRequest`,
`PatchSecretRequest`, `DeleteSecretResponse`.

[`routers/cowork_agent/bff/secrets.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/bff/secrets.py) · code · 6901 bytes

### visualizer.py

Project-scope BFF endpoints over `/.xo/`. Defines the `router` application object.

[`routers/cowork_agent/bff/visualizer.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/bff/visualizer.py) · code · 34298 bytes

### workspace_visualizer.py

Workspace-scope BFF endpoints over `~/xo-projects/.xo/`. Defines the `router` application
object. HTTP routes: `GET /api/xo-projects/usage`, `GET /api/xo-
projects/usage/summary/card`, `GET /api/xo-projects/usage/analytics`, `GET /api/xo-
projects/usage/sessions`, `GET /api/xo-projects/usage/summary`, `GET /api/xo-
projects/usage/sessions/{session_id}`, and 2 more.

[`routers/cowork_agent/bff/workspace_visualizer.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/bff/workspace_visualizer.py) · code · 27413 bytes

### xo_projects.py

GET /api/xo-projects — BFF list of user projects. Defines the `router` application object.
HTTP routes: `GET /api/xo-projects`, `GET /api/xo-projects/{project_id}/tree`. Classes:
`Project`, `ListProjectsResponse`, `TreeEntry`, `ProjectTreeResponse`. Functions:
`list_xo_projects`, `project_tree`.

[`routers/cowork_agent/bff/xo_projects.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/routers/cowork_agent/bff/xo_projects.py) · code · 5781 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
