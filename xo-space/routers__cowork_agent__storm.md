<!-- quirq-wiki-generated repo=xo-space dir=routers/cowork_agent/storm -->

# xo-space / routers/cowork_agent/storm

Source: [routers/cowork_agent/storm](https://github.com/quirq-ai/xo-space/tree/main/routers/cowork_agent/storm) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Storm's routes, all under `/api/chat/` (design ch 17): thin handlers over
`services.cowork_agent.storm`, one file per route group.

[`routers/cowork_agent/storm/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/__init__.py) · code · 1463 bytes

### attachments.py

Files the owner attaches to a message (hub #30) Defines the `router` application object.
HTTP routes: `POST /api/chat/chats/{chat_id}/attachments`, `GET
/api/chat/chats/{chat_id}/attachments/{att_id}`. Functions: `upload`, `read`.

[`routers/cowork_agent/storm/attachments.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/attachments.py) · code · 4984 bytes

### chats.py

Workspace and project chats, their messages, threads, hops and memory (design ch 17 §2.2; ch
11) Defines the `router` application object. HTTP routes: `GET /api/chat/chats`, `GET
/api/chat/chats/{chat_id}`, `PATCH /api/chat/chats/{chat_id}`, `GET
/api/chat/chats/{chat_id}/messages`, `POST /api/chat/chats/{chat_id}/messages`, `GET
/api/chat/chats/{chat_id}/threads`, and 5 more.

[`routers/cowork_agent/storm/chats.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/chats.py) · code · 7632 bytes

### comms.py

`xo_comms`, the MCP server storm's sessions talk through (design ch 12 §2.2; ch 17 §2.9).
Defines the `router` application object. Functions: `space_comms`, `space_comms_stream`,
`space_comms_end`.

[`routers/cowork_agent/storm/comms.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/comms.py) · code · 5650 bytes

### errors.py

`http_error` for storm's typed failures, keeping the extra field a client acts on: the
feature-list key of a `501 unsupported` (ch 17 §1), the count a `409 would_stop_runs` must
be confirmed with, the sentence a rule must be made with (`400 rule_sentence_mismatch`, ch
15 §3), what removing a worktree would lose with its confirmation (`409 would_lose_work`, ch
13 §4.3), and the stored summary of a run whose transcript is gone (`410 transcript_gone`

[`routers/cowork_agent/storm/errors.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/errors.py) · code · 921 bytes

### review.py

Storm's review queue (ch 17 §2.5; ch 15 §5–§7) Defines the `router` application object. HTTP
routes: `GET /api/chat/review`, `GET /api/chat/review/{item_id}`, `POST
/api/chat/review/{item_id}/decision`. Classes: `DecisionBody`. Functions: `list_review`,
`get_review`, `decide`.

[`routers/cowork_agent/storm/review.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/review.py) · code · 3541 bytes

### router.py

The Space's router and its decision models (design ch 17 §2.6; ch 11 §14.1–§14.3; §0.81)
Defines the `router` application object. HTTP routes: `GET /api/chat/router`, `PUT
/api/chat/router`, `GET /api/chat/router/models`, `POST /api/chat/router/models`, `DELETE
/api/chat/router/models/{provider}`. Classes: `RouterSettings`, `DecisionModel`. Functions:
`get_router`, `put_router`, `list_models`, `connect_model`, `disconnect_model`.

[`routers/cowork_agent/storm/router.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/router.py) · code · 2885 bytes

### rules.py

The person's rules (ch 17 §2.5; ch 15 §3, §3.1) Defines the `router` application object.
HTTP routes: `GET /api/chat/rules`, `POST /api/chat/rules`, `DELETE
/api/chat/rules/{rule_id}`. Classes: `McpTool`, `RuleMatch`, `RuleBody`. Functions:
`list_rules`, `make_rule`, `revoke_rule`.

[`routers/cowork_agent/storm/rules.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/rules.py) · code · 3822 bytes

### runs.py

Storm's sub-agent runs (ch 17 §2.3; ch 14 §4, §11) Defines the `router` application object.
HTTP routes: `GET /api/chat/sessions/{session_id}/runs`, `GET /api/chat/runs/{run_id}`, `GET
/api/chat/runs/{run_id}/transcript`, `POST /api/chat/sessions/{session_id}/runs/stop`, `POST
/api/chat/runs/{run_id}/stop`. Functions: `list_runs`, `get_run`, `read_transcript`,
`stop_all`, `stop_run`.

[`routers/cowork_agent/storm/runs.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/runs.py) · code · 4014 bytes

### runtimes.py

Storm's runtimes (ch 17 §2.7) Defines the `router` application object. HTTP routes: `GET
/api/chat/runtimes`, `GET /api/chat/runtimes/{name}/models`. Functions: `list_runtimes`,
`runtime_models`.

[`routers/cowork_agent/storm/runtimes.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/runtimes.py) · code · 2593 bytes

### sessions.py

Storm's sessions (ch 17 §2.1) Defines the `router` application object. HTTP routes: `GET
/api/chat/sessions`, `GET /api/chat/sessions/{session_id}`, `PATCH
/api/chat/sessions/{session_id}`. Classes: `SessionUpdate`. Functions: `list_sessions`,
`get_session`, `update_session`.

[`routers/cowork_agent/storm/sessions.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/sessions.py) · code · 2555 bytes

### status.py

`GET /api/chat/status`: the engine at a glance (ch 07 §11; ch 17 §2.7): sessions by state,
warm and parked counts, the queue by priority and pool, each pool's state and reset time,
the memory guard's reading, open review items, wake-to-start and start-to-first-token times.
Defines the `router` application object. HTTP routes: `GET /api/chat/status`. Functions:
`chat_status`.

[`routers/cowork_agent/storm/status.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/status.py) · code · 768 bytes

### stream.py

Storm's streams and its state log (ch 17 §2.4; ch 09 §6) Defines the `router` application
object. HTTP routes: `GET /api/chat/stream`, `GET /api/chat/sessions/{session_id}/stream`,
`GET /api/chat/events`. Functions: `global_stream`, `session_stream`, `state_log`.

[`routers/cowork_agent/storm/stream.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/stream.py) · code · 3828 bytes

### worktrees.py

Storm's worktrees (ch 13 §4, §6; ch 17) Defines the `router` application object. HTTP
routes: `GET /api/chat/worktrees`, `DELETE /api/chat/worktrees/{chat_id}/{thread_ts}`.
Functions: `list_worktrees`, `remove_worktree`.

[`routers/cowork_agent/storm/worktrees.py`](https://github.com/quirq-ai/xo-space/blob/main/routers/cowork_agent/storm/worktrees.py) · code · 1759 bytes

_Generated 2026-10-31 11:18 UTC from `main`._
