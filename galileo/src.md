<!-- quirq-wiki-generated repo=galileo dir=src -->

# galileo / src

Source: [src](https://github.com/quirq-ai/galileo/tree/main/src) in [galileo](https://github.com/quirq-ai/galileo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### files.mjs

A files source, served read only on its own address. A folder serves its `index.html`, or
else a listing galileo makes; a single file serves that file alone, at `/`. Notable exports:
`pathSegments`, `insideSource`, `typeOf`, `looksLikeText`, `serveFiles`, `escapeHtml`.

[`src/files.mjs`](https://github.com/quirq-ai/galileo/blob/main/src/files.mjs) · code · 12544 bytes

### inject.mjs

What galileo changes on the way through a source, kept as pure functions so the rules are
tested without a server (`npm test`). Notable exports: `shouldInject`, `bridgeTag`,
`framePolicy`, `rewriteSecurityHeaders`, `splitPolicies`, `rewritePolicy`,
`upstreamRequestHeaders`, `responseHeaders`, and 4 more.

[`src/inject.mjs`](https://github.com/quirq-ai/galileo/blob/main/src/inject.mjs) · code · 8139 bytes

### server.mjs

galileo, the inspector of a space. It keeps a list of sources (apps on ports of this
machine, and files or folders on it), gives each its own address, and serves telescope, the
bar and router that shows them one at a time. Notable exports: `createGalileo`, `logSource`.

[`src/server.mjs`](https://github.com/quirq-ai/galileo/blob/main/src/server.mjs) · code · 19353 bytes

### sources.mjs

galileo's sources: what it inspects, by name. A source is one of two kinds: Notable exports:
`isValidName`, `parseLocation`, `parseSourceSpec`, `routeForHost`, `sourceUrl`,
`galileoOrigins`, `portOf`, `createSources`, and 4 more.

[`src/sources.mjs`](https://github.com/quirq-ai/galileo/blob/main/src/sources.mjs) · code · 7963 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
