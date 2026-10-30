<!-- quirq-wiki-generated repo=space-hub dir=app/test -->

# space-hub / app/test

Source: [app/test](https://github.com/quirq-ai/space-hub/tree/main/app/test) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### agenthub.test.ts

test("tasks from a list or {tasks}, newest activity first", () => { const tasks = toTasks({
tasks: [ { id: "a", title: "Old", status: "done", createdAt: "2026-10-29T10:00:00Z" }, { id:
"b", title: "", status: "running", created_at: "2026-10-29T09:00:00Z", updatedAt:
"2026-10-29T12:00:00Z", repo: "quirq-ai/space-hub" }, { title: "no id" }, ] });
assert.deepEq Automated test file.

[`app/test/agenthub.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/test/agenthub.test.ts) · code · 4612 bytes

### channels.test.ts

const entry = (path: string, kind: "file" | "directory", extra: Record = {}) => ({ name:
path.split("/").pop()!, path, kind, extension: kind === "file" ? path.split(".").pop()! :
"", size: 1, modifiedAt: "2026-10-29T00:00:00Z", ...extra }) Automated test file.

[`app/test/channels.test.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/test/channels.test.ts) · code · 3083 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
