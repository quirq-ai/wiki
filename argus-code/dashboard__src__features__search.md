<!-- quirq-wiki-generated repo=argus-code dir=dashboard/src/features/search -->

# argus-code / dashboard/src/features/search

Source: [dashboard/src/features/search](https://github.com/quirq-ai/argus-code/tree/main/dashboard/src/features/search) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### SearchPage.tsx

const ROLES = [ { k: 'prompt', l: 'Your prompts' }, { k: 'user', l: 'Your replies' }, { k:
'assistant', l: 'Assistant' }, { k: 'thinking', l: 'Thinking' }, { k: 'tool_result', l:
'Tool output' }, ]; const ROLE_KIND: Record = { prompt: 'good', user: 'good', assistant:
'info' }; An assistant reply is labelled with the agent that wrote it (from the session id).
Notable exports: `SearchPage`.

[`dashboard/src/features/search/SearchPage.tsx`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/search/SearchPage.tsx) · code · 6974 bytes

### cleanSnippet.test.ts

it('strips command wrappers and keeps stdout content', () => {
expect(cleanSnippet('/model\nmodel\n')).toBe(''); expect(cleanSnippet('Set model to
X')).toBe('Set model to X'); expect(cleanSnippet('Caveat: ignore real text')).toBe('real
text'); }) Automated test file.

[`dashboard/src/features/search/cleanSnippet.test.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/search/cleanSnippet.test.ts) · code · 677 bytes

### cleanSnippet.ts

Strip Claude Code's command wrappers from a snippet for display (the index itself is
untouched). Notable exports: `cleanSnippet`, `splitMarks`.

[`dashboard/src/features/search/cleanSnippet.ts`](https://github.com/quirq-ai/argus-code/blob/main/dashboard/src/features/search/cleanSnippet.ts) · code · 947 bytes

_Generated 2026-10-23 10:35 UTC from `main`._
