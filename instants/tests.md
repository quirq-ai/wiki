<!-- quirq-wiki-generated repo=instants dir=tests -->

# instants / tests

Source: [tests](https://github.com/quirq-ai/instants/tree/main/tests) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### motion.test.mjs

import { classifySwipe, nearestSlide, isDoubleTap, } from "../lib/motion-core.mjs" Automated
test file.

[`tests/motion.test.mjs`](https://github.com/quirq-ai/instants/blob/main/tests/motion.test.mjs) · code · 1622 bytes

### projection.test.mjs

Test the shipped pure TypeScript projection without a Next runtime or a new loader
dependency. Its type-only imports disappear; typecheck runs separately. Automated test file.

[`tests/projection.test.mjs`](https://github.com/quirq-ai/instants/blob/main/tests/projection.test.mjs) · code · 9825 bytes

### session.test.mjs

import { mkdir, mkdtemp, readFile, readdir, rm, writeFile, } from "node:fs/promises"; import
{ appendActivity, createSessionDocument, isSessionId, MAX_EVENTS, parseActivityBatch,
parseSessionDocument, SessionError, } from "../engine/schema.mjs"; const now =
"2026-10-03T10:00:00.000Z"; const event = (type = "post.like", data = { postId: "p1", liked:
true }) = Automated test file.

[`tests/session.test.mjs`](https://github.com/quirq-ai/instants/blob/main/tests/session.test.mjs) · code · 10248 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
