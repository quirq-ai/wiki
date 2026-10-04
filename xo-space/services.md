<!-- quirq-wiki-generated repo=xo-space dir=services -->

# xo-space / services

Source: [services](https://github.com/quirq-ai/xo-space/tree/main/services) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### background.py

What each long-running background task of this server is doing. Classes: `_Record`.
Functions: `redact`, `describe`, `register`, `tick_started`, `tick_succeeded`,
`tick_failed`, `snapshot`, `reset_for_tests`.

[`services/background.py`](https://github.com/quirq-ai/xo-space/blob/main/services/background.py) · code · 4895 bytes

### branding.py

Workspace display name and logo, saved together as one atomic setting. Classes:
`BrandingError`. Functions: `get_branding`, `save_branding`, `get_logo`.

[`services/branding.py`](https://github.com/quirq-ai/xo-space/blob/main/services/branding.py) · code · 6364 bytes

### errors.py

The typed failure the Space services raise. Classes: `ServiceError`. Built with FastAPI.

[`services/errors.py`](https://github.com/quirq-ai/xo-space/blob/main/services/errors.py) · code · 750 bytes

### periodic.py

The one loop skeleton behind the background pollers. Functions: `run_forever`.

[`services/periodic.py`](https://github.com/quirq-ai/xo-space/blob/main/services/periodic.py) · code · 1928 bytes

### project_management.py

Clone and remove local projects, with fresh sharing checks before removal. Functions:
`removal_status`, `remove_project`, `clone_project`.

[`services/project_management.py`](https://github.com/quirq-ai/xo-space/blob/main/services/project_management.py) · code · 20354 bytes

### setup_status.py

Read-only identity checks for Setup, using the existing auth transports. Functions:
`snapshot`.

[`services/setup_status.py`](https://github.com/quirq-ai/xo-space/blob/main/services/setup_status.py) · code · 3044 bytes

### telemetry_sources.py

Telemetry source configuration behind the Agents tab's Configure page. Classes:
`UnknownTelemetrySource`, `InvalidTelemetryPath`. Functions: `disabled_source_ids`,
`describe_source`, `list_sources`, `save_source`.

[`services/telemetry_sources.py`](https://github.com/quirq-ai/xo-space/blob/main/services/telemetry_sources.py) · code · 6433 bytes

### theme.py

The workspace's saved visual theme, separate from its name and logo. Classes: `ThemeError`.
Functions: `get_theme`, `save_theme`.

[`services/theme.py`](https://github.com/quirq-ai/xo-space/blob/main/services/theme.py) · code · 2390 bytes

### timestamps.py

Timestamp helpers shared by the Space packages. Functions: `now_iso`, `parse_ts`, `aware`,
`iso`.

[`services/timestamps.py`](https://github.com/quirq-ai/xo-space/blob/main/services/timestamps.py) · code · 1554 bytes

### usage_sync.py

usage_sync.py: Daily usage sync to xo-swarm-api. Functions: `usage_reporting_status`,
`start_usage_sync_scheduler`. Built with FastAPI.

[`services/usage_sync.py`](https://github.com/quirq-ai/xo-space/blob/main/services/usage_sync.py) · code · 18866 bytes

### xo_manifest.py

xo.json — agent capability + live-status manifest. Functions: `build_static_manifest`,
`resolve_agent_name`, `write_static_manifest`, `patch_status`, `seed_agent_status`.

[`services/xo_manifest.py`](https://github.com/quirq-ai/xo-space/blob/main/services/xo_manifest.py) · code · 9193 bytes

### xo_structure.py

The canonical `.xo/` directory every xo-project carries. Classes: `EnsureReport`. Functions:
`empty_documents`, `ensure_xo_structure`, `ensure_xo_structure_if_changed`.

[`services/xo_structure.py`](https://github.com/quirq-ai/xo-space/blob/main/services/xo_structure.py) · code · 10075 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
