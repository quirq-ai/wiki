<!-- quirq-wiki-generated repo=galileo dir=test -->

# galileo / test

Source: [test](https://github.com/quirq-ai/galileo/tree/main/test) in [galileo](https://github.com/quirq-ai/galileo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### files.test.mjs

The pure rules of a files source: which request paths are refused before the disk is
touched, which real paths are inside a source, and how a file says what it is. Serving is
tested end to end in galileo.test.mjs. `npm test`. Automated test file.

[`test/files.test.mjs`](https://github.com/quirq-ai/galileo/blob/main/test/files.test.mjs) · code · 2381 bytes

### galileo.test.mjs

galileo end to end, in-process: port sources (the sample app, with its strict security
headers, and a small server that redirects, sets cookies and speaks WebSocket), files
sources in a scratch folder, and real HTTP in between, every request routed by its Host
header. `npm test`. Automated test file.

[`test/galileo.test.mjs`](https://github.com/quirq-ai/galileo/blob/main/test/galileo.test.mjs) · code · 21259 bytes

### inject.test.mjs

What galileo changes on the way through a source: which responses get the bridge, how
framing is limited to galileo, and how a page's policy lets the bridge run. `npm test`.
Automated test file.

[`test/inject.test.mjs`](https://github.com/quirq-ai/galileo/blob/main/test/inject.test.mjs) · code · 8380 bytes

### sources.test.mjs

Sources: names, where a source is, which source a Host means, and the list galileo keeps.
`npm test`. Automated test file.

[`test/sources.test.mjs`](https://github.com/quirq-ai/galileo/blob/main/test/sources.test.mjs) · code · 7000 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
