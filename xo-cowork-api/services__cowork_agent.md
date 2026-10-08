<!-- quirq-wiki-generated repo=xo-cowork-api dir=services/cowork_agent -->

# xo-cowork-api / services/cowork_agent

Source: [services/cowork_agent](https://github.com/quirq-ai/xo-cowork-api/tree/main/services/cowork_agent) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Support modules for the cowork_agent router package.

[`services/cowork_agent/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/__init__.py) · code · 200 bytes

### helpers.py

Stateless utility helpers shared across the bridge. Functions: `ms_to_iso`, `iso_now`,
`short_id`, `normalize_agent_id`, `parse_jsonl`, `strip_workspace_preamble`, `derive_title`,
`derive_title_native_claude`. Built with FastAPI.

[`services/cowork_agent/helpers.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/helpers.py) · code · 7858 bytes

### project_layout.py

Canonical project layout for ~/xo-projects//. Functions: `xo_projects_root`,
`workspace_xo_dir`, `project_dir`, `xo_dir`, `sessions_dir`, `memory_dir`, `state_dir`,
`artifacts_dir`, and 10 more.

[`services/cowork_agent/project_layout.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/project_layout.py) · code · 12905 bytes

### providers_status_lib.py

Shared building blocks for /providers/status. Functions: `parse_env_file`,
`codex_oauth_connected`, `claude_auth_status`, `claude_oauth_connected`,
`build_providers_status`.

[`services/cowork_agent/providers_status_lib.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/providers_status_lib.py) · code · 8857 bytes

### scopes.py

Centralised scope→handle resolution for the BFF layer. Classes: `ScopeNotFound`,
`SecretsScope`, `_XoReader`, `VisualizerScope`, `WorkspaceVisualizerScope`. Functions:
`resolve_scope`.

[`services/cowork_agent/scopes.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/scopes.py) · code · 9996 bytes

### skill_catalog.py

On-demand skill install catalog. Classes: `UnknownSkillError`, `InstallInProgressError`.
Functions: `load_catalog`, `install`, `install_startup_skills`.

[`services/cowork_agent/skill_catalog.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/skill_catalog.py) · code · 12779 bytes

### skill_installer.py

Bundled-skill installer. Functions: `install_xo_skills`, `link_global_skill`.

[`services/cowork_agent/skill_installer.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/skill_installer.py) · code · 6239 bytes

### xo_cowork_state.py

xo-cowork machine-local UI/installation state. Functions: `get_state`, `update_state`.

[`services/cowork_agent/xo_cowork_state.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/xo_cowork_state.py) · code · 1797 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
