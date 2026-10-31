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
`StoreRefused`, `StoreFailed`, `StoredEvent`, `Tx`, `Store`. Functions: `store_path`,
`event_from_row`.

[`services/cowork_agent/storm/store/db.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/store/db.py) · code · 17887 bytes

### lock.py

The engine lock: one engine per state root, held for the server's life (ch 07 §9.1).
Classes: `EngineElsewhere`, `EngineLock`. Functions: `lock_path`.

[`services/cowork_agent/storm/store/lock.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/store/lock.py) · code · 2364 bytes

### recovery.py

Boot recovery: put the store back in order after the server stopped without warning (ch 07
§9.3). Classes: `RecoveryReport`. Functions: `recover`, `hand_back`, `scrub`,
`dropped_message`, `last_step`.

[`services/cowork_agent/storm/store/recovery.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/store/recovery.py) · code · 15741 bytes

### retention.py

The daily retention prune (design ch 08 §6; §0.106): what the store and the raw turn logs
keep, as fixed values, not settings. Classes: `Pruned`. Functions: `prune`.

[`services/cowork_agent/storm/store/retention.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/store/retention.py) · code · 8256 bytes

### schema.sql

Sql file `schema.sql`. -- Storm's store, schema version 1 (design ch 08 §2, with the columns
chapters -- 07, 11, 14, 15 and 16 own). One SQLite file, ~/.quirq/engine/xo.db. -- Every
state change is one transaction that updates these projection rows -- and appends one or
more events rows; events.seq is the one global order -- (the state log and the change feed).
Times are UTC text ending in Z; JSON -- columns hold valid JSON. Ids carry thei.

[`services/cowork_agent/storm/store/schema.sql`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/store/schema.sql) · code · 19241 bytes

_Generated 2026-10-31 11:18 UTC from `main`._
