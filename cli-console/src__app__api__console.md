<!-- quirq-wiki-generated repo=cli-console dir=src/app/api/console -->

# cli-console / src/app/api/console

Source: [src/app/api/console](https://github.com/quirq-ai/cli-console/tree/main/src/app/api/console) in [cli-console](https://github.com/quirq-ai/cli-console).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### route.ts

export const runtime = "nodejs"; export const dynamic = "force-dynamic"; const
commandRequest = z.object({ tool: token, path: z.array(token).max(12).default([]) }); const
payload = z.discriminatedUnion("action", [ commandRequest.extend({ action:
z.literal("generate"), refresh: z.boolean().default(false) }), commandRequest.extend({
action: z.literal("import") Notable exports: `GET`, `POST`, `runtime`, `dynamic`.

[`src/app/api/console/route.ts`](https://github.com/quirq-ai/cli-console/blob/main/src/app/api/console/route.ts) · code · 2534 bytes

_Generated 2026-10-24 09:53 UTC from `main`._
