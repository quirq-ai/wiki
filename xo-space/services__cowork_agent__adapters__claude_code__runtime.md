<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/adapters/claude_code/runtime -->

# xo-space / services/cowork_agent/adapters/claude_code/runtime

Source: [services/cowork_agent/adapters/claude_code/runtime](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/adapters/claude_code/runtime) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

The claude_code runtime: storm's contract (`adapters/contract.py`) on Claude Code's stream-
json control protocol (storm ch 02). Classes: `_Executor`, `ClaudeRuntime`. Functions:
`find_binary`, `runtime`. Built with FastAPI.

[`services/cowork_agent/adapters/claude_code/runtime/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/claude_code/runtime/__init__.py) · code · 15979 bytes

### account.py

What a claude session knows about its account: the login it started with and the rate limits
claude reports (storm ch 02 §2.3, §6). Classes: `_Window`, `UsageGuard`. Functions:
`login_fingerprint`, `account_fingerprint`.

[`services/cowork_agent/adapters/claude_code/runtime/account.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/claude_code/runtime/account.py) · code · 6233 bytes

### command.py

The `claude` command line for one session, and the files it reads (storm ch 02 §2.1, §3).
Classes: `RunFiles`. Functions: `claude_mode`, `permission_mode`, `credential_ask_rules`,
`tool_rules`, `is_comms`, `mcp_config`, `settings`, `system_text`, and 4 more.

[`services/cowork_agent/adapters/claude_code/runtime/command.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/claude_code/runtime/command.py) · code · 11804 bytes

### env.py

The env one `claude` session runs with, built from scratch at spawn time (storm ch 02 §2.2,
ch 16 §1). Functions: `mcp_var_names`, `session_env`.

[`services/cowork_agent/adapters/claude_code/runtime/env.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/claude_code/runtime/env.py) · code · 3959 bytes

### probe.py

Model-free questions to the claude CLI (storm ch 02 §7): its version, its login, and an
`initialize` round trip (models, account, capabilities). Functions: `spawn_cli`, `run`,
`initialize`.

[`services/cowork_agent/adapters/claude_code/runtime/probe.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/claude_code/runtime/probe.py) · code · 4365 bytes

### session.py

One claude session: a long-lived stream-json control-protocol process (storm ch 02 §1–§4).
Classes: `ClaudeSession`. Functions: `_now`, `_cancel_and_wait`, `_content_blocks`.

[`services/cowork_agent/adapters/claude_code/runtime/session.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/claude_code/runtime/session.py) · code · 43900 bytes

### support.py

What the claude runtime supports: `check(spec)` (storm ch 01 §6) and the feature list (ch 01
§4.8, ch 02 §8). Functions: `check`, `features`.

[`services/cowork_agent/adapters/claude_code/runtime/support.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/claude_code/runtime/support.py) · code · 12748 bytes

### tools.py

claude's tools in the contract's neutral terms (storm ch 02 §3.2, §5.2). Classes: `Call`.
Functions: `rules_for`, `mcp_parts`, `content_sha256`, `describe_call`, `one_line`.

[`services/cowork_agent/adapters/claude_code/runtime/tools.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/claude_code/runtime/tools.py) · code · 8860 bytes

### transcript.py

Reading claude's own files (storm ch 02 §7): its transcripts stay where claude writes them;
nothing is copied. Functions: `projects_root`, `list_sessions`, `read_session`, `list_runs`,
`read_run`, `remove_empty_project_folder`, `session_file`.

[`services/cowork_agent/adapters/claude_code/runtime/transcript.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/claude_code/runtime/transcript.py) · code · 19551 bytes

### wire.py

claude's stream-json output as contract events (storm ch 02 §4.3–§5). Classes: `Out`,
`ContentCounter`, `_Block`, `_OpenTool`, `Wire`. Functions: `iso_from_epoch`, `token_usage`,
`thinking_steps`, `plan_items`.

[`services/cowork_agent/adapters/claude_code/runtime/wire.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/claude_code/runtime/wire.py) · code · 35913 bytes

_Generated 2026-10-29 11:52 UTC from `main`._
