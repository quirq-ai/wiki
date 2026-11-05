<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/adapters/antigravity/runtime -->

# xo-space / services/cowork_agent/adapters/antigravity/runtime

Source: [services/cowork_agent/adapters/antigravity/runtime](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/adapters/antigravity/runtime) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

The agy runtime: storm's contract on agy's headless stream-json (storm ch 04).

[`services/cowork_agent/adapters/antigravity/runtime/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/__init__.py) · code · 457 bytes

### account.py

What an agy session knows about its account: the login it started with and agy's own usage
windows (storm ch 04 §10). Classes: `Window`, `UsageGuard`. Functions: `login_fingerprint`,
`account_fingerprint`, `logged_in`, `command_data`, `parse_usage`, `json_response`,
`group_of`, `agy_error`, and 2 more.

[`services/cowork_agent/adapters/antigravity/runtime/account.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/account.py) · code · 11302 bytes

### argv.py

The command line of one agy process (storm ch 04 §1). Functions: `argv`, `user_line`,
`schema_text`.

[`services/cowork_agent/adapters/antigravity/runtime/argv.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/argv.py) · code · 2300 bytes

### core.py

The agy runtime: storm's contract (`adapters/contract.py`) on agy's headless stream-json
(storm ch 04). Classes: `_Executor`, `AgyRuntime`. Functions: `find_binary`, `models_from`,
`runtime`. Built with FastAPI.

[`services/cowork_agent/adapters/antigravity/runtime/core.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/core.py) · code · 16628 bytes

### env.py

The env one agy process runs with, built from scratch at spawn time (storm ch 04 §10, ch 16
§1), and where agy keeps its files. Functions: `agy_home`, `config_root`, `token_file`,
`brain_dir`, `session_env`, `probe_env`.

[`services/cowork_agent/adapters/antigravity/runtime/env.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/env.py) · code · 3855 bytes

### hooks.py

One session's socket: where XO's agy plugin reaches the runtime (storm ch 04 §3; ch 17
§2.9). Classes: `Handler`, `HookServer`. Functions: `socket_folder`.

[`services/cowork_agent/adapters/antigravity/runtime/hooks.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/hooks.py) · code · 9690 bytes

### install.py

XO's agy plugin: written into agy's global customization root
(`~/.gemini/config/plugins/xo/`) before a session starts, and by agy's `setup.sh` (storm ch
04 §2; owner decision §0.14: installed with backups). Runnable as a script via `if __name__
== '__main__'`. Classes: `InstallFailed`. Functions: `plugin_dir`, `agy_server_name`,
`spec_server_name`, `files`, `installed_names`, `ensure`, `main`.

[`services/cowork_agent/adapters/antigravity/runtime/install.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/install.py) · code · 7646 bytes

### mcp_relay.py

The HTTP side of XO's agy MCP relay (storm ch 04 §2; ch 12 §2.1). Classes: `Upstream`.
Functions: `unmounted`, `always_load`.

[`services/cowork_agent/adapters/antigravity/runtime/mcp_relay.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/mcp_relay.py) · code · 5743 bytes

### procs.py

What agy leaves running when it ends (storm ch 04 §7). Functions: `descendants`, `stop`.

[`services/cowork_agent/adapters/antigravity/runtime/procs.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/procs.py) · code · 2708 bytes

### session.py

"""One agy session: an agy stream-json process for its conversation, and the socket XO's
plugin reaches it through (storm ch 04 §1–§9).

[`services/cowork_agent/adapters/antigravity/runtime/session.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/session.py) · code · 70020 bytes

### support.py

What the agy runtime supports: `check(spec)` (storm ch 01 §6) and the feature list (ch 01
§4.8, ch 04 §5). Functions: `check`, `features`.

[`services/cowork_agent/adapters/antigravity/runtime/support.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/support.py) · code · 14395 bytes

### tools.py

agy's tool calls in the contract's neutral terms (storm ch 04 §8). Classes: `Call`.
Functions: `one_line`, `absolute`, `direct_mcp`, `describe`, `protected_paths`, `protected`,
`protected_any`, `inside`, and 2 more.

[`services/cowork_agent/adapters/antigravity/runtime/tools.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/tools.py) · code · 13532 bytes

### transcript.py

agy's own files read as the contract's transcript (storm ch 04 §9, §10; §0.110), and the
live follower of a sub-agent's steps. Classes: `Tail`. Functions: `transcript_file`,
`steps`, `parse_lines`, `result_text`, `message_text`, `items`, `page`, `read`, and 4 more.

[`services/cowork_agent/adapters/antigravity/runtime/transcript.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/transcript.py) · code · 13828 bytes

### wire.py

agy's stream-json output as contract events (storm ch 04 §7, §8). Classes: `Out`, `_Tool`,
`_Run`, `_Turn`, `Wire`. Functions: `usage_of`.

[`services/cowork_agent/adapters/antigravity/runtime/wire.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/wire.py) · code · 21599 bytes

_Generated 2026-11-05 13:35 UTC from `main`._
