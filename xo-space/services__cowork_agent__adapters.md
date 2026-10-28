<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/adapters -->

# xo-space / services/cowork_agent/adapters

Source: [services/cowork_agent/adapters](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/adapters) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`services/cowork_agent/adapters/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/__init__.py) · empty · 0 bytes

### base.py

Python module `base.py`. Classes: `BaseAgentAdapter`.

[`services/cowork_agent/adapters/base.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/base.py) · code · 3500 bytes

### cli_status.py

Shared CLI invocation for the per-agent status adapters. Classes: `CliStatusError`,
`CliResult`. Functions: `resolve_binary`, `run_cli`.

[`services/cowork_agent/adapters/cli_status.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/cli_status.py) · code · 4068 bytes

### contract.py

The runtime contract: the one interface storm's core runs any session through. Classes:
`SystemPrompt`, `ToolPolicy`, `PermissionPolicy`, `CliLimits`, `McpServer`, `HostTool`,
`AgentDef`, `SessionSpec`, and 57 more.

[`services/cowork_agent/adapters/contract.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/contract.py) · code · 32174 bytes

### env_whitelist.py

The shared part of every storm runtime's process environment (storm ch 16 §1). Classes:
`NeverList`. Functions: `stored_env`, `decision_model_key_names`, `never_list`, `base_env`,
`referenced_vars`, `log_dropped`.

[`services/cowork_agent/adapters/env_whitelist.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/env_whitelist.py) · code · 9277 bytes

### loader.py

Dynamic capability resolver — the single seam every agent-specific module is reached
through. Functions: `load_capability`, `try_load_capability`, `list_capability_providers`.

[`services/cowork_agent/adapters/loader.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/loader.py) · code · 4040 bytes

### usage_common.py

Shared usage aggregation over normalized usage entries. Classes: `Source`. Functions:
`resolve_tz`, `empty_tokens`, `date_from_ms`, `window_to_ms`, `collect_entries`,
`build_summary`, `analytics`, `summary_card`, and 4 more.

[`services/cowork_agent/adapters/usage_common.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/usage_common.py) · code · 30100 bytes

_Generated 2026-10-28 11:43 UTC from `main`._
