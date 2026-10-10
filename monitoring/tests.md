<!-- quirq-wiki-generated repo=monitoring dir=tests -->

# monitoring / tests

Source: [tests](https://github.com/quirq-ai/monitoring/tree/main/tests) in [monitoring](https://github.com/quirq-ai/monitoring).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### contrast.test.ts

const css = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8"); const {
light, dark, darkSystem } = parseTokenBlocks(css) Automated test file.

[`tests/contrast.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/contrast.test.ts) · code · 694 bytes

### fixture-server.test.ts

describe("fixture server tokens", () => { const now = new Date("2026-10-06T12:00:00Z");
it("renders relative times and days", () => { expect(renderTokens("{{now}}",
now)).toBe("2026-10-06T12:00:00Z"); expect(renderTokens("{{now-90m}}",
now)).toBe("2026-10-06T10:30:00Z"); expect(renderTokens("{{now-2d}}",
now)).toBe("2026-10-04T12:00:00Z"); expect(renderToken Automated test file.

[`tests/fixture-server.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/fixture-server.test.ts) · code · 674 bytes

### live-check.ts

Runs every source once against the live branches and prints one line each: counts and
states, never whole files. `pnpm live` (set GITHUB_TOKEN for the API sources). Nothing here
asserts: a source that is down prints its reason, which is the point.

[`tests/live-check.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/live-check.ts) · code · 5436 bytes

### read-only.test.ts

The dashboard is read-only and the token never leaves api.github.com. These tests hold that
at the source level (the code) and at the wire (the fixture server counts every request).
Automated test file.

[`tests/read-only.test.ts`](https://github.com/quirq-ai/monitoring/blob/main/tests/read-only.test.ts) · code · 2780 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
