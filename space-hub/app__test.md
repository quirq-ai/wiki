<!-- quirq-wiki-generated repo=space-hub dir=app/test -->

# space-hub / app/test

Source: [app/test](https://github.com/quirq-ai/space-hub/tree/main/app/test) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### activity.test.ts

const at = (y: number, m: number, d: number, h = 12) => new Date(y, m - 1, d,
h).toISOString(); let nextId = 1; const item = (kind: string, agent: string, id =
String(nextId++)) => ({ id, at: at(2026, 11, 2), agent, kind, path: "quirq/quirq", subject:
"refs/heads/main", text: "", count: 1, oid: "" }) Automated test file.

[`app/test/activity.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/test/activity.test.ts) · code · 3707 bytes

### channels.test.ts

const entry = (path: string, kind: "file" | "directory", extra: Record = {}) => ({ name:
path.split("/").pop()!, path, kind, extension: kind === "file" ? path.split(".").pop()! :
"", size: 1, modifiedAt: "2026-10-29T00:00:00Z", ...extra }) Automated test file.

[`app/test/channels.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/test/channels.test.ts) · code · 3501 bytes

### instance-recovery.test.ts

const id = "ab".repeat(16) Automated test file.

[`app/test/instance-recovery.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/test/instance-recovery.test.ts) · code · 5770 bytes

### instants.test.ts

const record = (slug: string, over: Record = {}, post: Record = {}) => ({ slug, occurredAt:
"2026-11-04T13:29:10.000Z", generatedAt: "2026-11-06T17:14:41.671Z", meta: { git: { commits:
22, first: "2026-10-26T06:34:21.000Z", last: "2026-11-04T13:29:10.000Z" } }, post: { title:
Post ${slug}, kind: "Prototype", topic: "AI & Agents", status: "working", hook: "h"
Automated test file.

[`app/test/instants.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/test/instants.test.ts) · code · 3890 bytes

### media.test.ts

test("images and video by extension", () => { assert.equal(mediaOf("Library/logo.PNG"),
"image"); assert.equal(mediaOf("art/mark.svg"), "image");
assert.equal(mediaOf("Chat/demo/output/walkthrough.mp4"), "video");
assert.equal(mediaOf("clips/take.mov"), "video"); assert.equal(mediaOf("notes.md"),
undefined); assert.equal(mediaOf("mp4"), undefined); }) Automated test file.

[`app/test/media.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/test/media.test.ts) · code · 1142 bytes

### mermaid.test.ts

test("Mermaid files are .mmd and .mermaid", () => { assert.ok(isMermaid("docs/flow.mmd"));
assert.ok(isMermaid("Chat/plan/ARCH.MERMAID")); assert.ok(!isMermaid("notes.md"));
assert.ok(!isMermaid("mmd/readme.txt")); }) Automated test file.

[`app/test/mermaid.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/test/mermaid.test.ts) · code · 630 bytes

### onboard.test.ts

test("the org prompt creates the agent in the org and connects it there", () => { const
prompt = onboardPrompt({ space: "quirq", kind: "org", server: "wss://hub.quirq.dev" });
assert.match(prompt, /spacehub agent create --in quirq -d ""/); assert.match(prompt,
/spacehub agent connect quirq/); assert.match(prompt, /spacehub auth login --server
wss:\/\/hub\.qu Automated test file.

[`app/test/onboard.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/test/onboard.test.ts) · code · 1472 bytes

### path-fold.test.ts

space, project, three folders, the file. Automated test file.

[`app/test/path-fold.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/test/path-fold.test.ts) · code · 1669 bytes

### recovery-shell.test.ts

Exercise the actual shell components without browser effects or production data. Automated
test file.

[`app/test/recovery-shell.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/test/recovery-shell.test.ts) · code · 11906 bytes

### rooms.test.ts

A repo room's chat: a question's state now, and how many questions are left today (npm
test). Automated test file.

[`app/test/rooms.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/test/rooms.test.ts) · code · 3445 bytes

### workers.test.ts

test("tasks from a list or {tasks}, newest activity first", () => { const tasks = toTasks({
tasks: [ { id: "a", title: "Old", status: "done", createdAt: "2026-10-29T10:00:00Z" }, { id:
"b", title: "", status: "running", created_at: "2026-10-29T09:00:00Z", updatedAt:
"2026-10-29T12:00:00Z", repo: "quirq-ai/space-hub" }, { title: "no id" }, ] });
assert.deepEq Automated test file.

[`app/test/workers.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/test/workers.test.ts) · code · 11289 bytes

_Generated 2026-11-11 13:02 UTC from `main`._
