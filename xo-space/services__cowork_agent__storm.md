<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm -->

# xo-space / services/cowork_agent/storm

Source: [services/cowork_agent/storm](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Storm: sessions, threads, operations and routing management.

[`services/cowork_agent/storm/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/__init__.py) · code · 389 bytes

### authority.py

XO's own message tags in an agent's output (the plan's W8). Classes: `EnvelopeScanner`.

[`services/cowork_agent/storm/authority.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/authority.py) · code · 1993 bytes

### composio.py

Composio in a storm session, mounted exactly as today's chat mounts it (owner §0.108; design
ch 10 §4.1). Functions: `marker`, `mounted`, `redact_token`, `filled`.

[`services/cowork_agent/storm/composio.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/composio.py) · code · 4216 bytes

### health.py

Whether each runtime is usable now: one view the routes, the chats and the runtime choice
read (mixed-runtime plan, step 3). Classes: `Health`. Functions: `check`, `check_all`.

[`services/cowork_agent/storm/health.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/health.py) · code · 6013 bytes

### made.py

What a chat's threads made (v2): the files they shared or wrote, the links in their replies,
and their branches, one row each in `made`. Classes: `MadeRefused`, `Made`. Functions:
`current`, `item_id`, `shared_path`, `file_id`, `links`, `address`. Contains tests.

[`services/cowork_agent/storm/made.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/made.py) · code · 24496 bytes

### person_edits.py

Telling an agent what the person changed in its folder (owner's choice B, 5 Nov 2026).
Classes: `PersonEdits`. Functions: `note_text`.

[`services/cowork_agent/storm/person_edits.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/person_edits.py) · code · 4494 bytes

### plain.py

Plain chat on storm: what `POST /api/chat/prompt, /api/chat/abort` and `GET
/api/chat/active` do (design ch 17 §2.1, §3; ch 10 §4.1; owner §0.108, §0.109; sedc 09 #5,
#6, #12). Classes: `PlainRefused`, `Session`, `Adopted`, `Route`, `Prompt`, `_Claimed`,
`_AdoptedMeanwhile`. Functions: `running`, `route`, `prompt`, `abort`, `active`, `find`,
`request_digest`.

[`services/cowork_agent/storm/plain.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/plain.py) · code · 27843 bytes

### redact.py

Redaction of what XO itself stores (storm ch 16 §3; §0.76). Classes: `_Matcher`, `_Secrets`.
Functions: `redact`, `redact_data`, `watch_env`, `add_token`, `drop_token`, `redact_logs`.

[`services/cowork_agent/storm/redact.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/redact.py) · code · 14425 bytes

### runtime_policy.py

Which runtime a new thread runs on (mixed-runtime plan, step 5). Classes: `PolicyRefused`,
`NoRuntime`, `Policy`, `Choice`. Functions: `project_key`, `effective`, `validate`,
`choose`, `read`, `write`.

[`services/cowork_agent/storm/runtime_policy.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/runtime_policy.py) · code · 9440 bytes

### timers.py

The timer loop: every armed timer goes off at its time or on its event, and a lease ends
with its holder's process or its time (record design v2 §4, §5 rules 5 and 9; w5-w7-design
W6). Classes: `TimerLoop`. Functions: `_release`, `_processes`.

[`services/cowork_agent/storm/timers.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/timers.py) · code · 17754 bytes

_Generated 2026-11-23 16:38 UTC from `main`._
