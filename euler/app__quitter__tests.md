<!-- quirq-wiki-generated repo=euler dir=app/quitter/tests -->

# euler / app/quitter/tests

Source: [app/quitter/tests](https://github.com/quirq-ai/euler/tree/main/app/quitter/tests) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### engine.test.ts

test('snapshots stay stable, preserve earlier state, and reject external mutation', async ()
=> { const fixtures = createFixtures(); const engine = createDemoQuitterEngine(fixtures);
const before = engine.getSnapshot(); let notifications = 0; const unsubscribe =
engine.subscribe(() => notifications++); assert.equal(before, engine.getSnapshot());
assert.notEq Automated test file.

[`app/quitter/tests/engine.test.ts`](https://github.com/quirq-ai/euler/blob/main/app/quitter/tests/engine.test.ts) · code · 10030 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
