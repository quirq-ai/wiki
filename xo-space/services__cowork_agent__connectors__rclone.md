<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/connectors/rclone -->

# xo-space / services/cowork_agent/connectors/rclone

Source: [services/cowork_agent/connectors/rclone](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/connectors/rclone) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

rclone — the shared engine behind the file-storage connectors.

[`services/cowork_agent/connectors/rclone/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/rclone/__init__.py) · code · 1117 bytes

### connector.py

Shared rclone connector — generic CLI plumbing + an OAuth-flow engine driven by a per-
provider descriptor. Classes: `_PipeReader`, `RcloneSession`, `RcloneProvider`,
`RcloneConnector`. Functions: `ensure_rclone_running`, `rclone_available`.

[`services/cowork_agent/connectors/rclone/connector.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/rclone/connector.py) · code · 28446 bytes

### oauth_lock.py

Cross-connector OAuth port lock. Functions: `register_sessions`, `has_active_oauth`,
`cancel_all_active_oauth`.

[`services/cowork_agent/connectors/rclone/oauth_lock.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/rclone/oauth_lock.py) · code · 3032 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
