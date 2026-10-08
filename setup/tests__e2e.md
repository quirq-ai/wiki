<!-- quirq-wiki-generated repo=setup dir=tests/e2e -->

# setup / tests/e2e

Source: [tests/e2e](https://github.com/quirq-ai/setup/tree/main/tests/e2e) in [setup](https://github.com/quirq-ai/setup).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### as-darwin.mjs

Preloaded with node --import so the real CLI runs as it would on a Mac (CI's e2e runs on
Linux).

[`tests/e2e/as-darwin.mjs`](https://github.com/quirq-ai/setup/blob/main/tests/e2e/as-darwin.mjs) · code · 165 bytes

### form.spec.ts

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", ".."); const SHOTS =
join(ROOT, "test-results", "screenshots"); The line that gets a repo: qq fetch, or git clone
on a Mac, where qq fetch stops after cloning. const GET = process.platform === "darwin" ?
"git clone" : "qq fetch"; const AS_DARWIN = ["--import", pathToFileURL(join(ROOT, "tests".

[`tests/e2e/form.spec.ts`](https://github.com/quirq-ai/setup/blob/main/tests/e2e/form.spec.ts) · code · 13974 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
