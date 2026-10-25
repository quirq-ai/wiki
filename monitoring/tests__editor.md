<!-- quirq-wiki-generated repo=monitoring dir=tests/editor -->

# monitoring / tests/editor

Source: [tests/editor](https://github.com/quirq-ai/monitoring/tree/main/tests/editor) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### codeowners.test.ts

const gate = readFileSync("tests/fixtures/raw/gate/main/.github/CODEOWNERS", "utf8")
Automated test file.

[`tests/editor/codeowners.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/editor/codeowners.test.ts) · code · 3106 bytes

### generated.test.ts

const config = (name: string) => readFileSync(tests/fixtures/raw/infra-
config/main/config/${name}, "utf8") Automated test file.

[`tests/editor/generated.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/editor/generated.test.ts) · code · 2167 bytes

### plan.test.ts

const KEY = "k".repeat(40); const gateToml =
readFileSync("tests/fixtures/raw/gate/main/settings/github.toml", "utf8"); const fakeGh =
resolve("tests/fake-gh"); let log: string; const saved = { ...process.env } Automated test
file.

[`tests/editor/plan.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/editor/plan.test.ts) · code · 14865 bytes

### proxy.test.ts

In gh mode every page reads through the person's gh login, so a DNS-rebinding page (any Host
that is not loopback) is refused before anything renders or reads. Wired into a Next.js app
(App Router or Next APIs). Automated test file.

[`tests/editor/proxy.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/editor/proxy.test.ts) · code · 1609 bytes

### toml-fields.test.ts

const gate = readFileSync("tests/fixtures/raw/gate/main/settings/github.toml", "utf8");
const repos = readFileSync("tests/fixtures/raw/infra-config/main/config/repos.toml", "utf8")
Automated test file.

[`tests/editor/toml-fields.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/editor/toml-fields.test.ts) · code · 5137 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
