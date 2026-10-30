<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/adapters/codex/runtime -->

# xo-space / services/cowork_agent/adapters/codex/runtime

Source: [services/cowork_agent/adapters/codex/runtime](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/adapters/codex/runtime) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

The codex runtime: storm's contract on codex's app-server (storm ch 03).

[`services/cowork_agent/adapters/codex/runtime/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/codex/runtime/__init__.py) · code · 447 bytes

### account.py

What a codex session knows about its account: the login it started with and the rate limits
codex reports (storm ch 03 §3.4, §9). Classes: `Window`, `UsageGuard`. Functions:
`login_fingerprint`, `account_fingerprint`, `logged_in`, `iso_from_epoch`, `windows`,
`worst`.

[`services/cowork_agent/adapters/codex/runtime/account.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/codex/runtime/account.py) · code · 9028 bytes

### core.py

The codex runtime: storm's contract (`adapters/contract.py`) on codex's app-server (storm ch
03). Classes: `_Executor`, `CodexRuntime`. Functions: `find_binary`, `models_from`,
`runtime`. Built with FastAPI.

[`services/cowork_agent/adapters/codex/runtime/core.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/codex/runtime/core.py) · code · 16430 bytes

### env.py

The env one codex app-server runs with, built from scratch at spawn time (storm ch 03 §3.3,
ch 16 §1). Functions: `codex_home`, `read_config`, `provider_key_vars`, `mcp_var_names`,
`credential_vars`, `session_env`.

[`services/cowork_agent/adapters/codex/runtime/env.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/codex/runtime/env.py) · code · 4941 bytes

### params.py

The app-server parameters for one session (storm ch 03 §3.2, §4). Functions:
`approval_policy`, `is_comms`, `mcp_servers`, `instructions`, `web_search`, `thread_params`,
`turn_params`, `context`, and 2 more.

[`services/cowork_agent/adapters/codex/runtime/params.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/codex/runtime/params.py) · code · 9714 bytes

### rpc.py

codex's app-server JSON-RPC, as one session's process speaks it (storm ch 03 §1). Classes:
`Line`, `RpcError`, `Rpc`. Functions: `classify`, `initialize_params`, `version_of`.

[`services/cowork_agent/adapters/codex/runtime/rpc.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/codex/runtime/rpc.py) · code · 5919 bytes

### session.py

One codex session: its own `codex app-server --listen stdio://` process serving one thread
and its sub-agents' threads (storm ch 03 §1–§5; one process per session, owner 2026-10-22,
so the engine sees codex exactly as it sees claude). Classes: `CodexSession`. Functions:
`_now`, `_native`, `_elicited_tool`, `_refusal`, `_cancel_and_wait`.

[`services/cowork_agent/adapters/codex/runtime/session.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/codex/runtime/session.py) · code · 52886 bytes

### support.py

What the codex runtime supports: `check(spec)` (storm ch 01 §6) and the feature list (ch 01
§4.8, ch 03 §2–§10). Functions: `check`, `features`.

[`services/cowork_agent/adapters/codex/runtime/support.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/codex/runtime/support.py) · code · 13852 bytes

### tools.py

codex's tool calls in the contract's neutral terms (storm ch 03 §2, §8.1). Classes: `Call`.
Functions: `one_line`, `unwrap`, `describe_command`, `change_paths`, `describe_change`,
`describe_file`, `file_changes`, `file_call_id`, and 11 more.

[`services/cowork_agent/adapters/codex/runtime/tools.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/codex/runtime/tools.py) · code · 15459 bytes

### transcript.py

Reading codex's own files (storm ch 03 §5.5, §10): its transcripts stay where codex writes
them; nothing is copied. Functions: `sessions_root`, `rollout`, `meta`, `list_sessions`,
`read_session`, `list_runs`, `read_run`.

[`services/cowork_agent/adapters/codex/runtime/transcript.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/codex/runtime/transcript.py) · code · 14779 bytes

### wire.py

codex's app-server notifications as contract events (storm ch 03 §5, §8). Classes: `Out`,
`_Block`, `_OpenTool`, `_Run`, `Wire`. Functions: `token_usage`, `thinking_steps`.

[`services/cowork_agent/adapters/codex/runtime/wire.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/codex/runtime/wire.py) · code · 46982 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
