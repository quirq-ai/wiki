<!-- quirq-wiki-generated repo=xo-cowork-api dir=services/cowork_agent/registry -->

# xo-cowork-api / services/cowork_agent/registry

Source: [services/cowork_agent/registry](https://github.com/quirq-ai/xo-cowork-api/tree/main/services/cowork_agent/registry) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

The agent framework: discovery, configuration, and dispatch wiring.

[`services/cowork_agent/registry/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/registry/__init__.py) · code · 491 bytes

### adapter_registry.py

Adapter resolution — no hardcoded agent list. Functions: `get_adapter`, `list_adapters`.

[`services/cowork_agent/registry/adapter_registry.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/registry/adapter_registry.py) · code · 1812 bytes

### agent_env.py

Helpers for the active agent's `.env` file. Functions: `parse_env_file`,
`serialize_env_file`, `load_env_entries`, `save_env_entries`, `upsert_env_entry`.

[`services/cowork_agent/registry/agent_env.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/registry/agent_env.py) · code · 4831 bytes

### agent_registry.py

Agent manifest registry. Classes: `AgentManifest`. Functions: `get_active_agent`,
`get_agent`, `all_agents`.

[`services/cowork_agent/registry/agent_registry.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/registry/agent_registry.py) · code · 9418 bytes

### agent_settings.py

Helpers for the active agent's JSON `config_file` (e.g. Functions: `merge_settings_env`,
`clear_settings_env`, `read_settings_env`.

[`services/cowork_agent/registry/agent_settings.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/registry/agent_settings.py) · code · 3989 bytes

### settings.py

Environment, paths, and constants for the cowork_agent subsystem. Functions:
`load_agent_config`.

[`services/cowork_agent/registry/settings.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/registry/settings.py) · code · 3267 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
