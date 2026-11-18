<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/records -->

# xo-space / services/cowork_agent/storm/records

Source: [services/cowork_agent/storm/records](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/records) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Storm's records (record design v2): what the founder decided and what the agents were asked
and delivered, kept so that every change can be traced and checked. Classes:
`RecordInvalid`. Functions: `check_asker`.

[`services/cowork_agent/storm/records/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/records/__init__.py) · code · 1739 bytes

### goals.py

The founder's goals: what they asked for, with an end time (record design v2 §2, §4, §5
rules 6 to 8; w5-w7-design W5). Classes: `Goal`. Functions: `get`, `of_chat`, `create`,
`move`.

[`services/cowork_agent/storm/records/goals.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/records/goals.py) · code · 5010 bytes

### intents.py

The founder's intents: the rows, how they are written, and which one holds (record design v2
§2, §5 rules 1 to 3; w2-w3-design §1 and §2). Classes: `IntentInvalid`, `Intent`. Functions:
`load`, `set_intent`, `clear_intent`, `scope_chain`, `chain`, `session_run`, `run_state`,
`paid_mode`.

[`services/cowork_agent/storm/records/intents.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/records/intents.py) · code · 10733 bytes

### leases.py

Leases: one holder at a time of a shared thing, a browser seat or a port (record design v2
§2, §4, §5 rules 7 and 9, §6 invariant 4; w5-w7-design W6). Classes: `Lease`, `LeaseHeld`.
Functions: `get`, `held`, `live`, `of_session`, `of_process`, `of_tasks`, `expired`,
`next_expiry`, and 2 more.

[`services/cowork_agent/storm/records/leases.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/records/leases.py) · code · 6462 bytes

### ledger.py

The ledger: one entry per change to a record the founder relies on, chained by hash (record
design v2 §2, §5 rules 7 and 8, §6 invariant 9). Classes: `Finding`. Functions:
`row_sha256`, `intent_record`, `request_key`, `append`, `append_row`, `verify`.

[`services/cowork_agent/storm/records/ledger.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/records/ledger.py) · code · 11100 bytes

### orphans.py

No orphan work (record design v2 §5 rule 9, §6 invariant 6): when a task or a goal ends, its
timers expire, its leases are released and the wakes its timers queued that no session has
taken yet are dropped, all in the transaction that ends it. Functions: `settle`.

[`services/cowork_agent/storm/records/orphans.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/records/orphans.py) · code · 2166 bytes

### results.py

Results: what a thread reported it delivered (record design v2 §2, §3, §5 rules 6 to 8, §6
invariant 10; w5-w7-design W5). Classes: `Result`. Functions: `of_task`, `create`.

[`services/cowork_agent/storm/records/results.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/records/results.py) · code · 3389 bytes

### tasks.py

Tasks: one thread's piece of work (record design v2 §2, §4, §5 rules 6 to 8; w5-w7-design
W5). Classes: `Task`, `Report`. Functions: `get`, `reports`, `report_count`, `by_key`,
`of_thread`, `of_chat`, `create`, `report`, and 1 more.

[`services/cowork_agent/storm/records/tasks.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/records/tasks.py) · code · 7284 bytes

### timers.py

Timers: every wake set for later, and every agent job (record design v2 §2, §4, §5 rules 5
to 7 and 9; w5-w7-design W6). Classes: `Timer`. Functions: `on`, `get`, `by_key`,
`addressed`, `jobs`, `armed_in`, `due`, `next_due`, and 7 more.

[`services/cowork_agent/storm/records/timers.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/records/timers.py) · code · 13012 bytes

_Generated 2026-11-18 14:40 UTC from `main`._
