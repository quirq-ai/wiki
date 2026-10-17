<!-- quirq-wiki-generated repo=monitoring dir=tests/model -->

# monitoring / tests/model

Source: [tests/model](https://github.com/quirq-ai/monitoring/tree/main/tests/model) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### board-view.test.ts

const cell = (state: Cell["state"]): Cell => ({ state, text: state, url:
"https://github.com/quirq-ai", source: "test" }) Automated test file.

[`tests/model/board-view.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/model/board-view.test.ts) · code · 2487 bytes

### calendar.test.ts

const item = (at: string, state: TodayItem["state"], extra: Partial = {}): TodayItem => ({
kind: "merged", repo: "innernet", title: "t", at, url: https://github.com/quirq-
ai/innernet/pull/${at}, state, ...extra, }) Automated test file.

[`tests/model/calendar.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/model/calendar.test.ts) · code · 3199 bytes

### gardener.test.ts

const A = "1111111111111111111111111111111111111111"; const B =
"2222222222222222222222222222222222222222"; const C =
"3333333333333333333333333333333333333333" Automated test file.

[`tests/model/gardener.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/model/gardener.test.ts) · code · 15914 bytes

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

_Generated 2026-10-17 09:47 UTC from `main`._
