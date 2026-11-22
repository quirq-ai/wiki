<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/store -->

# xo-space / services/cowork_agent/storm/store

Source: [services/cowork_agent/storm/store](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/store) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Storm's store: the SQLite file `~/.quirq/engine/xo.db`, the engine lock, and boot recovery
(design ch 08; ch 07 §9).

[`services/cowork_agent/storm/store/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/store/__init__.py) · code · 872 bytes

### db.py

Storm's store: one SQLite file, one writer, one global sequence (ch 08). Classes:
`StoreRefused`, `StoreFailed`, `StoredEvent`, `Tx`, `Store`, `_Table`, `_Structure`.
Functions: `store_path`, `event_from_row`.

[`services/cowork_agent/storm/store/db.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/store/db.py) · code · 27397 bytes

### lock.py

The engine lock: one engine per state root, held for the server's life (ch 07 §9.1).
Classes: `EngineElsewhere`, `EngineLock`. Functions: `lock_path`.

[`services/cowork_agent/storm/store/lock.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/store/lock.py) · code · 2364 bytes

### migrations.py

Bringing an older store to this build's schema, in place (ch 08 §2). Classes:
`MigrationMismatch`. Functions: `steps_from`, `rehearse`, `migrate`.

[`services/cowork_agent/storm/store/migrations.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/store/migrations.py) · code · 15768 bytes

### recovery.py

Boot recovery: put the store back in order after the server stopped without warning (ch 07
§9.3). Classes: `RecoveryReport`. Functions: `recover`, `own_work`, `hand_back`, `scrub`,
`dropped_message`, `last_step`.

[`services/cowork_agent/storm/store/recovery.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/store/recovery.py) · code · 18088 bytes

### retention.py

The daily retention prune (design ch 08 §6; §0.106): what the store and the raw turn logs
keep, as fixed values, not settings. Classes: `Pruned`. Functions: `prune`.

[`services/cowork_agent/storm/store/retention.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/store/retention.py) · code · 8365 bytes

### schema.sql

Sql file `schema.sql`. -- Storm's store, schema version 6 (design ch 08 §2, with the columns
chapters -- 07, 11, 14, 15 and 16 own; v2 adds what a person catching up reads: a --
thread's git state and summary, a chat's seen mark, and what it made; v3 -- adds the
founder's intents, the ledger, a review item's subject, and the -- goals, tasks, results,
timers and leases, per the record design v2, and -- drops the pools' own copies of usage.

[`services/cowork_agent/storm/store/schema.sql`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/store/schema.sql) · code · 33297 bytes

_Generated 2026-11-22 13:40 UTC from `main`._
