<!-- quirq-wiki-generated repo=xo-space dir=tests/fixtures/quirq-state/engine -->

# xo-space / tests/fixtures/quirq-state/engine

Source: [tests/fixtures/quirq-state/engine](https://github.com/quirq-ai/xo-space/tree/main/tests/fixtures/quirq-state/engine) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### xo.db.sql

Sql file `xo.db.sql`. -- The sample of ~/.quirq/engine/xo.db, as text (a binary database is
never -- committed). Load it into an empty file with `sqlite3 xo.db /.xo/made/ once its
worktree was removed. CREATE TABLE made ( id TEXT PRIMARY KEY, seq INTEGER NOT NULL, chat_id
TEXT NOT NULL REFERENCES chats (id) ON DELETE CASCADE, thread_ts TEXT, message_id TEXT,
turn_id TEXT, kind TEXT NOT NULL CHECK (kind IN ('file', 'image', 'link', 'branch.

[`tests/fixtures/quirq-state/engine/xo.db.sql`](https://github.com/quirq-ai/xo-space/blob/main/tests/fixtures/quirq-state/engine/xo.db.sql) · code · 44567 bytes

_Generated 2026-11-26 15:54 UTC from `main`._
