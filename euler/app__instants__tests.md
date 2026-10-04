<!-- quirq-wiki-generated repo=euler dir=app/instants/tests -->

# euler / app/instants/tests

Source: [app/instants/tests](https://github.com/quirq-ai/euler/tree/main/app/instants/tests) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### app-path.test.mjs

function paths(basePath) { return JSON.parse(execFileSync(process.execPath, ["--input-
type=module", "-e", ` import { appPath } from './lib/app-path.mjs';
console.log(JSON.stringify([ '/', '/api/session', '/work/example.svg',
'/motion?view=1#demo', '/app/instants/api/session', 'https://example.com/photo.png',
'//example.com/photo.png', 'data:image/png;base64 Automated test file.

[`app/instants/tests/app-path.test.mjs`](https://github.com/quirq-ai/euler/blob/main/app/instants/tests/app-path.test.mjs) · code · 1303 bytes

### motion.test.mjs

import { classifySwipe, nearestSlide, isDoubleTap, } from "../lib/motion-core.mjs" Automated
test file.

[`app/instants/tests/motion.test.mjs`](https://github.com/quirq-ai/euler/blob/main/app/instants/tests/motion.test.mjs) · code · 1622 bytes

### projection.test.mjs

Test the shipped pure TypeScript projection without a Next runtime or a new loader
dependency. Its type-only imports disappear; typecheck runs separately. Automated test file.

[`app/instants/tests/projection.test.mjs`](https://github.com/quirq-ai/euler/blob/main/app/instants/tests/projection.test.mjs) · code · 9825 bytes

### session.test.mjs

import { mkdir, mkdtemp, readFile, readdir, rm, writeFile, } from "node:fs/promises"; import
{ appendActivity, createSessionDocument, isSessionId, MAX_EVENTS, parseActivityBatch,
parseSessionDocument, SessionError, } from "../engine/schema.mjs"; const now =
"2026-10-03T10:00:00.000Z"; const event = (type = "post.like", data = { postId: "p1", liked:
true }) = Automated test file.

[`app/instants/tests/session.test.mjs`](https://github.com/quirq-ai/euler/blob/main/app/instants/tests/session.test.mjs) · code · 10248 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
