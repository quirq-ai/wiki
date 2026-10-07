<!-- quirq-wiki-generated repo=monitoring dir=tests/model -->

# monitoring / tests/model

Source: [tests/model](https://github.com/quirq-ai/monitoring/tree/main/tests/model) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### repo.test.ts

describe("repo view", () => { it("is null for a name that is not a repo name, with no
request at all", async () => { const fixtures = await withFixtures(); expect(await
buildRepoView("../etc/passwd")).toBeNull(); expect(await buildRepoView("a b")).toBeNull();
expect(fixtures.log.requests).toBe(0); expect(isRepoName("innernet")).toBe(true); })
Automated test file.

[`tests/model/repo.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/model/repo.test.ts) · code · 2118 bytes

### snapshot.test.ts

const fixture = (path: string) => readFileSync(new URL(../fixtures/${path},
import.meta.url), "utf8"); const today = () => new Date().toISOString().slice(0, 10)
Automated test file.

[`tests/model/snapshot.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/model/snapshot.test.ts) · code · 26839 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
