<!-- quirq-wiki-generated repo=monitoring dir=tests/model -->

# monitoring / tests/model

Source: [tests/model](https://github.com/quirq-ai/monitoring/tree/main/tests/model) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### fold-runs.test.ts

const even = (n: number) => n % 2 === 0 Automated test file.

[`tests/model/fold-runs.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/model/fold-runs.test.ts) · code · 1720 bytes

### matrix.test.ts

function item(repo: string, at: string, state: TodayItem["state"] = "green"): TodayItem {
return { kind: "merged", repo, title: ${repo} at ${at}, at, url: https://github.com/quirq-
ai/${repo}, state }; } Automated test file.

[`tests/model/matrix.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/model/matrix.test.ts) · code · 1681 bytes

### repo.test.ts

describe("repo view", () => { it("is null for a name that is not a repo name, with no
request at all", async () => { const fixtures = await withFixtures(); expect(await
buildRepoView("../etc/passwd")).toBeNull(); expect(await buildRepoView("a b")).toBeNull();
expect(fixtures.log.requests).toBe(0); expect(isRepoName("innernet")).toBe(true); })
Automated test file.

[`tests/model/repo.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/model/repo.test.ts) · code · 3069 bytes

### snapshot.test.ts

const fixture = (path: string) => readFileSync(new URL(../fixtures/${path},
import.meta.url), "utf8"); const today = () => new Date().toISOString().slice(0, 10)
Automated test file.

[`tests/model/snapshot.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/model/snapshot.test.ts) · code · 31565 bytes

### stale.test.ts

const now = new Date("2026-10-08T12:00:00Z"); const readAgo = (seconds: number, maxAge:
number): Read => ({ fetchedAt: new Date(now.getTime() - seconds * 1000).toISOString(),
maxAge }) Automated test file.

[`tests/model/stale.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/model/stale.test.ts) · code · 2099 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
