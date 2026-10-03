<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/connectors/composio -->

# xo-space / services/cowork_agent/connectors/composio

Source: [services/cowork_agent/connectors/composio](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/connectors/composio) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Python module `__init__.py`.

[`services/cowork_agent/connectors/composio/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/composio/__init__.py) · code · 1 bytes

### action_prefs.py

Which individual Composio actions this workspace has switched off. Functions: `load_prefs`,
`get_toolkit_prefs`, `disabled_slugs`, `bulk_set`.

[`services/cowork_agent/connectors/composio/action_prefs.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/composio/action_prefs.py) · code · 4766 bytes

### byo_key.py

The user's own Composio API key, stored locally on this pod. Classes: `ComposioKeyRequired`.
Functions: `fingerprint`, `api_key`, `source`, `configured`, `require`, `user_id`, `save`,
`clear`, and 2 more.

[`services/cowork_agent/connectors/composio/byo_key.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/composio/byo_key.py) · code · 3697 bytes

### categories.py

Python module `categories.py`. Functions: `classified_toolkits`, `classify`.

[`services/cowork_agent/connectors/composio/categories.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/composio/categories.py) · code · 24325 bytes

### client.py

The Composio SDK client, using the user's own key (see :mod:.byo_key). Classes:
`ComposioError`, `ComposioNotFound`. Functions: `auth_config_for`, `connect`,
`connection_status`, `list_connections`, `set_alias`, `disconnect`, `list_tools`,
`create_session`, and 2 more.

[`services/cowork_agent/connectors/composio/client.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/composio/client.py) · code · 10482 bytes

### identity.py

Per-request identity for Composio, in bring-your-own-key mode. Functions: `resolve_user`,
`get_composio_user`. Built with FastAPI.

[`services/cowork_agent/connectors/composio/identity.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/composio/identity.py) · code · 1432 bytes

### mcp.py

Composio MCP install — one declarative writer, driven by the agent manifest. Classes:
`_Invalid`, `_Prune`, `McpTarget`, `_Refuse`. Functions: `load_target`,
`agents_with_targets`, `apply`.

[`services/cowork_agent/connectors/composio/mcp.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/composio/mcp.py) · code · 24785 bytes

### paths.py

Where Composio's local stores live: `sessions.json, action_prefs.json` and
`space_scope.json`. Functions: `store_dir`, `legacy_checkout_path`, `migrate_legacy`.

[`services/cowork_agent/connectors/composio/paths.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/composio/paths.py) · code · 1865 bytes

### service.py

Python module `service.py`. Classes: `ToolkitMeta`, `AliasInUseError`, `NoToolkitsEnabled`,
`GatewaySweep`. Functions: `toolkit_meta`, `multi_account_config`, `multi_account_enabled`,
`normalize_alias`, `assert_alias_free`, `initiate_connection`, `check_connection`,
`list_connections`, and 21 more.

[`services/cowork_agent/connectors/composio/service.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/composio/service.py) · code · 46643 bytes

### space_scope.py

What this workspace may reach: the per-workspace half of connector isolation. Functions:
`load`, `is_enabled`, `enabled_toolkits`, `pins`, `set_toolkit`, `unlink_account`,
`prune_to`, `adopt_connection`.

[`services/cowork_agent/connectors/composio/space_scope.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/connectors/composio/space_scope.py) · code · 9794 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
