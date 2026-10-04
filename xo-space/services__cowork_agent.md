<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent -->

# xo-space / services/cowork_agent

Source: [services/cowork_agent](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Support modules for the cowork_agent router package.

[`services/cowork_agent/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/__init__.py) · code · 200 bytes

### coder_identity.py

Who and where we are: the Space id (`XO_SPACE_ID`, on Coder and off) and the workspace name
and owner Coder reports when it runs the pod. Functions: `xo_space_id`, `workspace_id`,
`workspace_name`, `owner_name`, `space_id`, `resolve_user_id`, `is_placeholder_user_id`.

[`services/cowork_agent/coder_identity.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/coder_identity.py) · code · 2380 bytes

### file_history.py

Git history of one file inside a project, for the previewer. Functions: `file_git_history`,
`read_file_at_commit`.

[`services/cowork_agent/file_history.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/file_history.py) · code · 9863 bytes

### github_poller.py

The GitHub issue poller: a standalone loop, deliberately not a watcher sink. Classes:
`_Budget`, `PollOutcome`. Functions: `poller_enabled`, `poll_interval_seconds`, `max_pages`,
`warn_repo_threshold`, `reset_state`, `budget_snapshot`, `auth_detect_enabled`,
`note_auth_change`, and 5 more.

[`services/cowork_agent/github_poller.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/github_poller.py) · code · 28515 bytes

### helpers.py

Stateless utility helpers shared across the bridge. Functions: `ms_to_iso`, `iso_now`,
`short_id`, `normalize_agent_id`, `parse_jsonl`, `strip_workspace_preamble`, `derive_title`,
`derive_title_native_claude`. Built with FastAPI.

[`services/cowork_agent/helpers.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/helpers.py) · code · 7858 bytes

### local_state.py

Moved to services.storage.paths; this import path stays valid.

[`services/cowork_agent/local_state.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/local_state.py) · code · 156 bytes

### opentelemetry_exporter.py

OpenTelemetry GenAI Semantic Conventions & OTLP Exporter implementation. Functions:
`build_otel_genai_spans`, `format_otlp_resource_spans`, `export_otlp_traces`,
`async_export_otlp_traces`. Built with FastAPI.

[`services/cowork_agent/opentelemetry_exporter.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/opentelemetry_exporter.py) · code · 12718 bytes

### project_layout.py

Canonical project layout for ~/xo-projects//. Functions: `xo_projects_root`,
`workspace_xo_dir`, `workspace_runtime_dir`, `workspace_sessions_dir`,
`workspace_timeline_path`, `xo_runtime_root`, `runtime_dir`, `runtime_sessions_dir`, and 27
more.

[`services/cowork_agent/project_layout.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/project_layout.py) · code · 30866 bytes

### providers_status_lib.py

Shared building blocks for /providers/status. Functions: `parse_env_file`,
`codex_oauth_connected`, `claude_auth_status`, `claude_oauth_connected`,
`build_providers_status`.

[`services/cowork_agent/providers_status_lib.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/providers_status_lib.py) · code · 8377 bytes

### quirq_catalog.py

Read-only, privacy-aware catalog of machine-local Quirq state. Functions: `quirq_catalog`.

[`services/cowork_agent/quirq_catalog.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/quirq_catalog.py) · code · 29043 bytes

### runtime_config.py

Validated machine-local runtime configuration and diagnostics. Functions: `restart_mode`,
`native_restart_pid`, `runtime_config_file`, `root_config_file`, `effective_settings`,
`saved_settings`, `configured_settings`, `secrets_restart_required`, and 11 more.

[`services/cowork_agent/runtime_config.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/runtime_config.py) · code · 24616 bytes

### scopes.py

Centralised scope→handle resolution for the BFF layer. Classes: `ScopeNotFound`,
`SecretsScope`, `_XoReader`, `VisualizerScope`, `WorkspaceVisualizerScope`,
`WorkitemRollup`. Functions: `resolve_scope`.

[`services/cowork_agent/scopes.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/scopes.py) · code · 23670 bytes

### self_update.py

Self-update for the xo-space checkout, via git. Classes: `UpdateError`. Functions:
`check_update_status`, `apply_update`.

[`services/cowork_agent/self_update.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/self_update.py) · code · 6735 bytes

### session_transcript.py

A session as a flat chat transcript: title plus role/content bubbles. Classes:
`SessionNotFound`. Functions: `truncate_title`, `build_transcript`, `load_transcript`.

[`services/cowork_agent/session_transcript.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/session_transcript.py) · code · 3959 bytes

### skill_catalog.py

On-demand skill install catalog. Classes: `UnknownSkillError`, `InstallInProgressError`.
Functions: `load_catalog`, `install`, `install_startup_skills`.

[`services/cowork_agent/skill_catalog.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/skill_catalog.py) · code · 14058 bytes

### skill_installer.py

Bundled-skill installer. Functions: `install_xo_skills`, `link_global_skill`.

[`services/cowork_agent/skill_installer.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/skill_installer.py) · code · 6239 bytes

### xo_cowork_state.py

Quirq machine-local UI/installation state. Functions: `get_state`, `update_state`.

[`services/cowork_agent/xo_cowork_state.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/xo_cowork_state.py) · code · 2462 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
