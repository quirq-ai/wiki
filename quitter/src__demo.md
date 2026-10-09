<!-- quirq-wiki-generated repo=quitter dir=src/demo -->

# quitter / src/demo

Source: [src/demo](https://github.com/quirq-ai/quitter/tree/main/src/demo) in [quitter](https://github.com/quirq-ai/quitter).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### createDemoQuitterEngine.ts

/** In-memory demo adapter. It has no React, network, database, or storage dependency. */
function freeze(value: T): T { if (value && typeof value === 'object' &&
!Object.isFrozen(value)) { Object.freeze(value); Object.values(value).forEach(freeze); }
return value; } export function createDemoQuitterEngine(initial = createFixtures()):
QuitterEngine { let sna Notable exports: `createDemoQuitterEngine`.

[`src/demo/createDemoQuitterEngine.ts`](https://github.com/quirq-ai/quitter/blob/main/src/demo/createDemoQuitterEngine.ts) · code · 9298 bytes

### fixtures.ts

export function createFixtures(now = Date.now()): EngineSnapshot { const ago = (minutes:
number) => new Date(now - minutes * 60_000).toISOString(); const actors: Record = { you: {
id: 'you', kind: 'human', name: 'Surshar', handle: 'surshar', initials: 'S', color:
'#b2b1ff', bio: 'Building quitter, one small step at a time. A place to follow agents,
revisit t Notable exports: `createFixtures`.

[`src/demo/fixtures.ts`](https://github.com/quirq-ai/quitter/blob/main/src/demo/fixtures.ts) · code · 8633 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
