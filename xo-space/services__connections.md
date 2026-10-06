<!-- quirq-wiki-generated repo=xo-space dir=services/connections -->

# xo-space / services/connections

Source: [services/connections](https://github.com/quirq-ai/xo-space/tree/main/services/connections) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Connections polling: one folder per Composio toolkit under `~/.quirq/connections// holding a
hand-editable config.json` (on/off, interval, which data to collect), a `state.json`
(cursors and the last result) and an append-only `events.jsonl` of collected items.

[`services/connections/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/connections/__init__.py) · code · 2682 bytes

### collectors.py

The collectors catalog: what to fetch from each toolkit and how to turn the answer into
`events.jsonl` lines. Functions: `catalog`, `collector`, `default_ids`, `identity_spec`,
`extract_identity`, `parse_any_ts`, `render_args`, `lookup`, and 2 more.

[`services/connections/collectors.py`](https://github.com/quirq-ai/xo-space/blob/main/services/connections/collectors.py) · code · 18115 bytes

### mcp_client.py

A minimal streamable-HTTP JSON-RPC client. Classes: `McpError`, `McpSession`. Functions:
`error_text`, `call_tool`, `list_tools`, `execute_tool`, `tool_result_json`.

[`services/connections/mcp_client.py`](https://github.com/quirq-ai/xo-space/blob/main/services/connections/mcp_client.py) · code · 22143 bytes

### poller.py

The connections poller: a standalone loop, deliberately not a watcher sink. Classes:
`_SessionUnavailable`. Functions: `poller_enabled`, `tick_seconds`, `reset_for_tests`,
`resolve_user_id`, `humanize_error`, `pinned_account_id`, `account_is_fresh`,
`resolve_account`, and 4 more.

[`services/connections/poller.py`](https://github.com/quirq-ai/xo-space/blob/main/services/connections/poller.py) · code · 28783 bytes

### service.py

Router-facing facade for polled connections. Functions: `list_connections`,
`get_connection`, `events`, `configure`, `remove`, `poll_now`, `refresh_account`,
`register_new_events_listener`, and 1 more.

[`services/connections/service.py`](https://github.com/quirq-ai/xo-space/blob/main/services/connections/service.py) · code · 11411 bytes

### store.py

The per-connection files: `~/.quirq/connections//`. Classes: `ConnectionsError`. Functions:
`connection_dir`, `list_configured`, `read_config`, `write_config`, `read_state`,
`update_state`, `remember_seen`, `append_events`, and 6 more.

[`services/connections/store.py`](https://github.com/quirq-ai/xo-space/blob/main/services/connections/store.py) · code · 23700 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
