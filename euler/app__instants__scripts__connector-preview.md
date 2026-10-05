<!-- quirq-wiki-generated repo=euler dir=app/instants/scripts/connector-preview -->

# euler / app/instants/scripts/connector-preview

Source: [app/instants/scripts/connector-preview](https://github.com/quirq-ai/euler/tree/main/app/instants/scripts/connector-preview) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### connector-preview-session.mjs

import { mkdir, readFile, readdir, rename, rm, writeFile, } from "node:fs/promises"; import
{ driverMessageSchema, grantsSchema, sessionOptionsSchema, } from "./protocol.mjs".

[`app/instants/scripts/connector-preview/connector-preview-session.mjs`](https://github.com/quirq-ai/euler/blob/main/app/instants/scripts/connector-preview/connector-preview-session.mjs) · code · 6842 bytes

### host-binding.mjs

import { grantSchema, invocationSchema, sessionOptionsSchema, } from "./protocol.mjs"
Notable exports: `createPreviewBinding`, `readBounded`.

[`app/instants/scripts/connector-preview/host-binding.mjs`](https://github.com/quirq-ai/euler/blob/main/app/instants/scripts/connector-preview/host-binding.mjs) · code · 7793 bytes

### protocol.mjs

const name = z .string() .min(1) .max(256) .regex(/^[^\s/\x00-\x1f\x7f]+$/u); const fields =
{ connectorId: name, actionName: name } Notable exports: `invocationSchema`, `grantSchema`,
`grantsSchema`, `sessionOptionsSchema`, `driverMessageSchema`.

[`app/instants/scripts/connector-preview/protocol.mjs`](https://github.com/quirq-ai/euler/blob/main/app/instants/scripts/connector-preview/protocol.mjs) · code · 1781 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
