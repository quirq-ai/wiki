<!-- quirq-wiki-generated repo=quitter dir=tests -->

# quitter / tests

Source: [tests](https://github.com/quirq-ai/quitter/tree/main/tests) in [quitter](https://github.com/quirq-ai/quitter).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### engine.test.ts

test('snapshots stay stable, preserve earlier state, and reject external mutation', async ()
=> { const fixtures = createFixtures(); const engine = createDemoQuitterEngine(fixtures);
const before = engine.getSnapshot(); let notifications = 0; const unsubscribe =
engine.subscribe(() => notifications++); assert.equal(before, engine.getSnapshot());
assert.notEq Automated test file.

[`tests/engine.test.ts`](https://github.com/quirq-ai/quitter/blob/main/tests/engine.test.ts) · code · 10030 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
