<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/adapters/grokbot -->

# xo-space / services/cowork_agent/adapters/grokbot

Source: [services/cowork_agent/adapters/grokbot](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/adapters/grokbot) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Grok Bot host gateway adapter and capabilities.

[`services/cowork_agent/adapters/grokbot/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/grokbot/__init__.py) · code · 54 bytes

### adapter.py

Grok Bot Plane-B adapter — chat through a running local host gateway. Classes:
`GrokbotAdapter`.

[`services/cowork_agent/adapters/grokbot/adapter.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/grokbot/adapter.py) · code · 3899 bytes

### gateway.py

Thin async HTTP client for a running Grok Bot host gateway. Classes: `GrokbotGatewayError`,
`GrokbotHistoryGateway`, `GrokbotGateway`. Functions: `_headers`, `_raise_http`.

[`services/cowork_agent/adapters/grokbot/gateway.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/grokbot/gateway.py) · code · 9244 bytes

### oneshot.py

One-shot / send-and-wait loops over the Grok Bot gateway. Functions: `resolve_target_agent`,
`wait_for_idle`, `run_turn`.

[`services/cowork_agent/adapters/grokbot/oneshot.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/grokbot/oneshot.py) · code · 7899 bytes

### paths.py

Grok Bot on-disk layout + gateway discovery. Classes: `SandInvalidAgentIdError`,
`GatewayDiscovery`. Functions: `sand_root_candidates`, `resolve_sand_root`, `agents_dir`,
`transcripts_dir`, `gateway_json_paths`, `is_safe_folder_id`, `is_valid_sand_agent_id`,
`assert_valid_sand_agent_id`, and 8 more.

[`services/cowork_agent/adapters/grokbot/paths.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/grokbot/paths.py) · code · 9722 bytes

### session_seats.py

Persist Space-to-host identity in the shared, per-session index. Functions:
`indexed_sessions`, `lookup_seat`, `remember_seat`.

[`services/cowork_agent/adapters/grokbot/session_seats.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/grokbot/session_seats.py) · code · 1788 bytes

### sessions.py

Space-indexed Grok Bot sessions with text history read from the gateway. Functions:
`enrich_project_session`, `resolve_native_file`, `list_native_sessions`, `owns_session`,
`get_messages`, `set_session_directory`.

[`services/cowork_agent/adapters/grokbot/sessions.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/grokbot/sessions.py) · code · 4962 bytes

### transcript.py

The gateway's transcript envelopes and turn correlation keys. Functions:
`transcript_entries`, `message_text`, `current_turn_reply`.

[`services/cowork_agent/adapters/grokbot/transcript.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/adapters/grokbot/transcript.py) · code · 2358 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
