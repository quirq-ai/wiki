<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm -->

# xo-space / services/cowork_agent/storm

Source: [services/cowork_agent/storm](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Storm: sessions, threads, operations and routing management.

[`services/cowork_agent/storm/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/__init__.py) · code · 389 bytes

### composio.py

Composio in a storm session, mounted exactly as today's chat mounts it (owner §0.108; design
ch 10 §4.1). Functions: `marker`, `mounted`, `redact_token`, `filled`.

[`services/cowork_agent/storm/composio.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/composio.py) · code · 4216 bytes

### plain.py

Plain chat on storm: what `POST /api/chat/prompt, /api/chat/abort` and `GET
/api/chat/active` do (design ch 17 §2.1, §3; ch 10 §4.1; owner §0.108, §0.109; sedc 09 #5,
#6, #12). Classes: `PlainRefused`, `Session`, `Adopted`, `Route`, `Prompt`, `_Claimed`,
`_AdoptedMeanwhile`. Functions: `running`, `route`, `prompt`, `abort`, `active`, `find`,
`request_digest`.

[`services/cowork_agent/storm/plain.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/plain.py) · code · 27499 bytes

### redact.py

Redaction of what XO itself stores (storm ch 16 §3; §0.76). Classes: `_Matcher`, `_Secrets`.
Functions: `redact`, `redact_data`, `watch_env`, `add_token`, `drop_token`, `redact_logs`.

[`services/cowork_agent/storm/redact.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/redact.py) · code · 14425 bytes

_Generated 2026-10-29 11:52 UTC from `main`._
