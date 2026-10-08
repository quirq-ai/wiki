<!-- quirq-wiki-generated repo=instants dir=examples/d1/db -->

# instants / examples/d1/db

Source: [examples/d1/db](https://github.com/quirq-ai/instants/tree/main/examples/d1/db) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### schema.ts

export const notes = sqliteTable("notes", { id: integer("id").primaryKey({ autoIncrement:
true }), title: text("title").notNull(), content: text("content").notNull().default(""),
createdAt: text("created_at").notNull().default(sqlCURRENT_TIMESTAMP), }) Notable exports:
`notes`.

[`examples/d1/db/schema.ts`](https://github.com/quirq-ai/instants/blob/main/examples/d1/db/schema.ts) · code · 370 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
