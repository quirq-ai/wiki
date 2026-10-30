<!-- quirq-wiki-generated repo=xo-space dir=tests/fixtures/quirq-state/engine -->

# xo-space / tests/fixtures/quirq-state/engine

Source: [tests/fixtures/quirq-state/engine](https://github.com/quirq-ai/xo-space/tree/main/tests/fixtures/quirq-state/engine) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### xo.db.sql

Sql file `xo.db.sql`. -- The sample of ~/.quirq/engine/xo.db, as text (a binary database is
never -- committed). Load it into an empty file with `sqlite3 xo.db , review::, … session_id
TEXT NOT NULL REFERENCES sessions (id) ON DELETE CASCADE, priority TEXT NOT NULL CHECK
(priority IN ('now', 'next', 'later')), reason TEXT NOT NULL, envelope TEXT, meta TEXT NOT
NULL DEFAULT '{}' CHECK (json_valid(meta)), state TEXT NOT NULL CHECK (state IN.

[`tests/fixtures/quirq-state/engine/xo.db.sql`](https://github.com/quirq-ai/xo-space/blob/main/tests/fixtures/quirq-state/engine/xo.db.sql) · code · 30943 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
