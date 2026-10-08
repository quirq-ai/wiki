<!-- quirq-wiki-generated repo=euler dir=app/instants/db -->

# euler / app/instants/db

Source: [app/instants/db](https://github.com/quirq-ai/euler/tree/main/app/instants/db) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### index.ts

export function getDb() { if (!env.DB) { throw new Error( "Cloudflare D1 binding DB is
unavailable. Set the d1 field in .openai/hosting.json to DB or let your control plane inject
the real binding values before using the database." ); } Notable exports: `getDb`.

[`app/instants/db/index.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/db/index.ts) · code · 423 bytes

### schema.ts

Intentionally empty by default. Add Drizzle tables here when the site actually needs a
database. See examples/d1/db/schema.ts for an opt-in example.

[`app/instants/db/schema.ts`](https://github.com/quirq-ai/euler/blob/main/app/instants/db/schema.ts) · code · 169 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
