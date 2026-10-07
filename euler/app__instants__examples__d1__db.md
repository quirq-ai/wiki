<!-- quirq-wiki-generated repo=euler dir=app/instants/examples/d1/db -->

# euler / app/instants/examples/d1/db

Source: [app/instants/examples/d1/db](https://github.com/quirq-ai/euler/tree/main/app/instants/examples/d1/db) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### schema.ts

export const notes = sqliteTable("notes", { id: integer("id").primaryKey({ autoIncrement:
true }), title: text("title").notNull(), content: text("content").notNull().default(""),
createdAt: text("created_at").notNull().default(sqlCURRENT_TIMESTAMP), }) Notable exports:
`notes`.

[`app/instants/examples/d1/db/schema.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/examples/d1/db/schema.ts) · code · 370 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
