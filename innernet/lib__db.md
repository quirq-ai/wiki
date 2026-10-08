<!-- quirq-wiki-generated repo=innernet dir=lib/db -->

# innernet / lib/db

Source: [lib/db](https://github.com/quirq-ai/innernet/tree/main/lib/db) in [innernet](https://github.com/quirq-ai/innernet).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### activity.ts

The history in the database, one row per line. On this machine the folders stay the source
(lib/activity.ts) and lib/db/ingest.ts keeps these rows in step with them; on the demo the
rows are the visitors' own events (lib/db/demo-history.ts). A row's uid is a hash of its
session, its app and the exact line, so storing a folder twice, or a line that is already
there, keeps one row.

[`lib/db/activity.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/activity.ts) · code · 6133 bytes

### demo-history.ts

The public demo's visitor history, in its Neon database (the activity table, as on a local
Innernet, with Innernet as the only app). It exists so a visitor's /activity page can show
the pages they opened, and nothing else may read it.

[`lib/db/demo-history.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/demo-history.ts) · code · 9316 bytes

### index-store.ts

The index in the database: its meta and disambiguation as two kv rows, its pages as one row
each in their own order. Storing is one transaction of four statements, the pages sent once
as a JSON array and spread by jsonb_array_elements, so 5,000 pages are one round trip rather
than 5,000. Rows that did not change are left alone, a page that only moved keeps its stored
data as it is, and pages gone from the index are deleted.

[`lib/db/index-store.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/index-store.ts) · code · 4737 bytes

### index.ts

export type { Db, DbKind, DbState, DbStateName, LockHolder, Row, Statement } from "./types"
Notable exports: `dbState`, `setDbOwner`, `getDb`, `closeDb`, `dbEnabled`,
`demoKeepsHistory`.

[`lib/db/index.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/index.ts) · code · 5788 bytes

### ingest.ts

This machine's history in its database, kept in step with the folders. The folders stay the
record and the interchange format: Innernet appends to <session>/innernet.jsonl, and any
other app appends to a file of its own beside it. Reading them into the database is cheap
because only what changed is read.

[`lib/db/ingest.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/ingest.ts) · code · 26112 bytes

### log.ts

What the database layer says, and how it keeps a secret out of what it says. A database that
fails must never break a page, so every failure is caught and told here instead, once per
process for each kind of trouble. Messages pass through `redact` on the way out: the demo's
connection string, its password and any postgres:// address become "[database url]",
whatever an error chose to quote.

[`lib/db/log.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/log.ts) · code · 1931 bytes

### neon.ts

Neon serverless Postgres over HTTPS: every query is one request with nothing kept open,
which suits short-lived server functions. Two databases come through here, and they never
mix: the demo's DATABASE_URL, set by the Vercel Marketplace on the demo's project. Only the
demo opens it; local mode refuses, whatever variables are set. yours the remote database
Sources can switch this machine's storage to (lib/storage.ts, ~/.innernet/remote.json).

[`lib/db/neon.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/neon.ts) · code · 2383 bytes

### pglite.ts

This machine's database: PGlite, a whole Postgres compiled to WebAssembly, running inside
the Innernet process on a folder of plain files. Nothing listens on a port and nothing
leaves the machine.

[`lib/db/pglite.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/pglite.ts) · code · 8840 bytes

### remote-sync.ts

A connected remote database, kept in step with this machine, both ways. This machine's own
database (PGlite) stays the one in use; the remote is a second copy that follows it and that
your other machines can share.

[`lib/db/remote-sync.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/remote-sync.ts) · code · 15034 bytes

### schema.ts

The schema, the same on both databases, made idempotently once per process.

[`lib/db/schema.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/schema.ts) · code · 4358 bytes

### status.ts

What the database holds and where, in one call, for the history page (/activity), Sources
and anything else that wants to say so. Never throws and never waits on the network: on this
machine it asks PGlite, which is in the process (the remote database, when connected,
reports through lib/db/remote-sync.ts); on the demo it reports what the last background
check of Neon saw, so rendering a page never queries Neon.

[`lib/db/status.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/status.ts) · code · 4749 bytes

### sync.ts

How the server keeps the index and the database in step, without ever making a page wait for
the database. getIndex() (lib/data.ts) stays synchronous and asks this module, which answers
at once from memory and does its database work in the background. local Whenever
data/index.json is loaded anew, it is stored in the database if that holds a different one
(by generatedAt).

[`lib/db/sync.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/sync.ts) · code · 10054 bytes

### tombstones.ts

History this machine has forgotten (a session folder or a line you deleted), remembered
while a remote database is connected, so the sync deletes it there too and never brings it
back down. Kept in this machine's database, under kv remote.forgotten: the newest 20,000
uids, which is far more lines than anyone deletes between two syncs. Notable exports:
`forgottenUids`, `rememberForgotten`.

[`lib/db/tombstones.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/tombstones.ts) · code · 1323 bytes

### types.ts

The database contract, shared by both drivers (lib/db/pglite.ts on this machine,
lib/db/neon.ts for Neon) and everything that talks to them. Same SQL for both: no ORM, just
text with $1 placeholders and plain rows back. Values travel as text, numbers or booleans.
JSON goes in as a string cast in the SQL ($1::jsonb) and comes back parsed.

[`lib/db/types.ts`](https://github.com/quirq-ai/innernet/blob/main/lib/db/types.ts) · code · 2319 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
