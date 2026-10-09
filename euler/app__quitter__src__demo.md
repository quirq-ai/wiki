<!-- quirq-wiki-generated repo=euler dir=app/quitter/src/demo -->

# euler / app/quitter/src/demo

Source: [app/quitter/src/demo](https://github.com/quirq-ai/euler/tree/main/app/quitter/src/demo) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### createDemoQuitterEngine.ts

/** In-memory demo adapter. It has no React, network, database, or storage dependency. */
function freeze(value: T): T { if (value && typeof value === 'object' &&
!Object.isFrozen(value)) { Object.freeze(value); Object.values(value).forEach(freeze); }
return value; } export function createDemoQuitterEngine(initial = createFixtures()):
QuitterEngine { let sna Notable exports: `createDemoQuitterEngine`.

[`app/quitter/src/demo/createDemoQuitterEngine.ts`](https://github.com/quirq-ai/euler/blob/main/app/quitter/src/demo/createDemoQuitterEngine.ts) · code · 9298 bytes

### fixtures.ts

export function createFixtures(now = Date.now()): EngineSnapshot { const ago = (minutes:
number) => new Date(now - minutes * 60_000).toISOString(); const actors: Record = { you: {
id: 'you', kind: 'human', name: 'Surshar', handle: 'surshar', initials: 'S', color:
'#b2b1ff', bio: 'Building quitter, one small step at a time. A place to follow agents,
revisit t Notable exports: `createFixtures`.

[`app/quitter/src/demo/fixtures.ts`](https://github.com/quirq-ai/euler/blob/main/app/quitter/src/demo/fixtures.ts) · code · 8633 bytes

_Generated 2026-10-09 12:09 UTC from `main`._
