<!-- quirq-wiki-generated repo=instants dir=scripts/connector-preview -->

# instants / scripts/connector-preview

Source: [scripts/connector-preview](https://github.com/quirq-ai/instants/tree/main/scripts/connector-preview) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### connector-preview-session.mjs

import { mkdir, readFile, readdir, rename, rm, writeFile, } from "node:fs/promises"; import
{ driverMessageSchema, grantsSchema, sessionOptionsSchema, } from "./protocol.mjs".

[`scripts/connector-preview/connector-preview-session.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/connector-preview/connector-preview-session.mjs) · code · 6842 bytes

### host-binding.mjs

import { grantSchema, invocationSchema, sessionOptionsSchema, } from "./protocol.mjs"
Notable exports: `createPreviewBinding`, `readBounded`.

[`scripts/connector-preview/host-binding.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/connector-preview/host-binding.mjs) · code · 7793 bytes

### protocol.mjs

const name = z .string() .min(1) .max(256) .regex(/^[^\s/\x00-\x1f\x7f]+$/u); const fields =
{ connectorId: name, actionName: name } Notable exports: `invocationSchema`, `grantSchema`,
`grantsSchema`, `sessionOptionsSchema`, `driverMessageSchema`.

[`scripts/connector-preview/protocol.mjs`](https://github.com/quirq-ai/instants/blob/main/scripts/connector-preview/protocol.mjs) · code · 1781 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
