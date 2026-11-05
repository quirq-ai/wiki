<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/adapters/antigravity/runtime/plugin -->

# xo-space / services/cowork_agent/adapters/antigravity/runtime/plugin

Source: [services/cowork_agent/adapters/antigravity/runtime/plugin](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/adapters/antigravity/runtime/plugin) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### xo_agy_hook.py

XO's agy hook: agy runs it for its lifecycle events (PreToolUse, SessionStart,
PreInvocation, Stop), with the event's JSON on stdin, and prints the answer. Runnable as a
script via `if __name__ == '__main__'`. Functions: `refusal`, `ask`, `main`.

[`services/cowork_agent/adapters/antigravity/runtime/plugin/xo_agy_hook.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/plugin/xo_agy_hook.py) · code · 2598 bytes

### xo_agy_mcp.py

XO's agy MCP relay: agy starts it as a stdio MCP server, one per name XO mounts
(`xo_agy_mcp.py `), and it relays every JSON-RPC message to the session's runtime over its
socket. Runnable as a script via `if __name__ == '__main__'`. Functions: `write`, `inert`,
`relay`, `main`.

[`services/cowork_agent/adapters/antigravity/runtime/plugin/xo_agy_mcp.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/antigravity/runtime/plugin/xo_agy_mcp.py) · code · 3108 bytes

_Generated 2026-11-05 13:35 UTC from `main`._
