<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/comms -->

# xo-space / services/cowork_agent/storm/comms

Source: [services/cowork_agent/storm/comms](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/comms) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

`xo_comms`: the MCP server every storm session talks through, served by xo-space itself at
`POST /mcp/space-comms` (design ch 12).

[`services/cowork_agent/storm/comms/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/comms/__init__.py) · code · 526 bytes

### args.py

Reading a tool call's arguments: each check refuses with one plain sentence the agent can
act on (ch 12 §7). Functions: `text`, `ids`, `flag`, `choice`, `limit`.

[`services/cowork_agent/storm/comms/args.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/comms/args.py) · code · 2213 bytes

### calls.py

Who is calling, and running one tool call (design ch 12 §1, §2.2, §7). Classes:
`CommsError`, `TokenRefused`, `Caller`, `ToolCall`. Functions: `resolve`, `caller_of`,
`tool_list`, `call`, `current_turn`.

[`services/cowork_agent/storm/comms/calls.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/comms/calls.py) · code · 9724 bytes

### handlers.py

Every `xo_comms` tool's handler, by name (the tools' table is `tools.py; which role has
which is tools.ROLE_TOOLS`).

[`services/cowork_agent/storm/comms/handlers.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/comms/handlers.py) · code · 1686 bytes

### jobs.py

The job tools, for every role (design ch 12 §5.8; ch 11 §14.6; §0.107). Functions:
`create_job`, `list_jobs`, `cancel_job`.

[`services/cowork_agent/storm/comms/jobs.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/comms/jobs.py) · code · 11251 bytes

### owner.py

The tools that reach the person (design ch 12 §5.2–§5.5): asks, the coordinators' view of
the review queue, and proposing a project. Functions: `ask_owner`, `withdraw_ask`,
`list_review`, `annotate_review`, `propose_project`.

[`services/cowork_agent/storm/comms/owner.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/comms/owner.py) · code · 12164 bytes

### talk.py

The tools agents speak, route and read with (design ch 12 §3–§5, §5.9; the PoC's `comms.py
and workspace.py`). Functions: `post_message`, `reply`, `update_status`, `react`,
`no_reply_needed`, `no_such_project`, `forward_to_project`, `start_thread_session`, and 12
more.

[`services/cowork_agent/storm/comms/talk.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/comms/talk.py) · code · 32560 bytes

### tools.py

The `xo_comms` tools: each one's schema and kind, and which roles have it (design ch 12
§3–§5, §0.54). Functions: `kind`, `terminal_tools`, `tools_for`, `endpoint_url`,
`server_for`.

[`services/cowork_agent/storm/comms/tools.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/comms/tools.py) · code · 20215 bytes

### work.py

The tools for a session's own work (design ch 12 §5.6, §5.7; ch 11 §8): chat memory, the
project's todos and sharing files. Functions: `read_memory`, `update_memory`, `add_todo`,
`update_todo`, `list_todos`, `share_files`.

[`services/cowork_agent/storm/comms/work.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/comms/work.py) · code · 8569 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
