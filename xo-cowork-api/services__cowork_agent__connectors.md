<!-- quirq-wiki-generated repo=xo-cowork-api dir=services/cowork_agent/connectors -->

# xo-cowork-api / services/cowork_agent/connectors

Source: [services/cowork_agent/connectors](https://github.com/quirq-ai/xo-cowork-api/tree/main/services/cowork_agent/connectors) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

External-service connectors for the cowork_agent subsystem.

[`services/cowork_agent/connectors/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/connectors/__init__.py) · code · 419 bytes

### gdrive_rclone.py

Google Drive connector via rclone (CLI mode — no daemon, no port). Functions:
`mkdir_remote_path`, `delete_remote_folder`, `upload_file_to_remote`, `list_remote_folders`.

[`services/cowork_agent/connectors/gdrive_rclone.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/connectors/gdrive_rclone.py) · code · 6494 bytes

### github_cli_auth.py

GitHub connector — gh auth login (CLI device-flow) approach. Classes: `_Session`. Functions:
`start_login`, `poll_login`, `cancel_login`. Built with FastAPI.

[`services/cowork_agent/connectors/github_cli_auth.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/connectors/github_cli_auth.py) · code · 11593 bytes

### github_connector.py

GitHub connector — PAT (Personal Access Token) approach. Functions: `get_github_token`,
`get_github_auth_method`, `save_github_token`, `delete_github_token`, `validate_token`,
`get_status`.

[`services/cowork_agent/connectors/github_connector.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/connectors/github_connector.py) · code · 4716 bytes

### manus_connector.py

Manus AI connector — API key approach. Functions: `get_manus_key`, `save_manus_key`,
`delete_manus_key`, `validate_key`, `get_status`.

[`services/cowork_agent/connectors/manus_connector.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/connectors/manus_connector.py) · code · 3708 bytes

### onedrive_rclone.py

Microsoft OneDrive connector via rclone (rclone backend type onedrive). Functions:
`_resolve_default_drive`, `_build_config_section`, `_remote_summary`.

[`services/cowork_agent/connectors/onedrive_rclone.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/connectors/onedrive_rclone.py) · code · 5155 bytes

### rclone_connector.py

Shared rclone connector — generic CLI plumbing + an OAuth-flow engine driven by a per-
provider descriptor. Classes: `_PipeReader`, `RcloneSession`, `RcloneProvider`,
`RcloneConnector`. Functions: `ensure_rclone_running`, `rclone_available`.

[`services/cowork_agent/connectors/rclone_connector.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/connectors/rclone_connector.py) · code · 26731 bytes

### rclone_oauth_lock.py

Cross-connector OAuth port lock. Functions: `register_sessions`, `has_active_oauth`,
`cancel_all_active_oauth`.

[`services/cowork_agent/connectors/rclone_oauth_lock.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/connectors/rclone_oauth_lock.py) · code · 3028 bytes

### token_store.py

token_store — the single owner of mcp-tokens.json. Functions: `read_all`, `write_all`,
`get_entry`, `set_entry`, `delete_entry`.

[`services/cowork_agent/connectors/token_store.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/connectors/token_store.py) · code · 2040 bytes

### vercel_connector.py

Vercel connector — supports both API Token and OAuth 2.1 (Authorization Code + PKCE).
Functions: `get_oauth_client`, `register_oauth_client`, `ensure_oauth_client`,
`get_vercel_token`, `save_vercel_token`, `save_oauth_tokens`, `delete_vercel_token`,
`start_oauth_flow`, and 5 more.

[`services/cowork_agent/connectors/vercel_connector.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/connectors/vercel_connector.py) · code · 15607 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
