<!-- quirq-wiki-generated repo=space-hub dir=module/src -->

# space-hub / module/src

Source: [module/src](https://github.com/quirq-ai/space-hub/tree/main/module/src) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### diff.ts

Line diffs for the web UI: Myers' O(ND) algorithm plus unified hunks. Notable exports:
`diffLines`, `toHunks`, `EQUAL`, `DELETE`, `INSERT`, `Op`, `Hunk`.

[`module/src/diff.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/diff.ts) · code · 3275 bytes

### index.ts

spacehub: GitHub-shaped git hosting where the database is the server.

[`module/src/index.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/index.ts) · code · 18050 bytes

### markdown.ts

A small, safe Markdown renderer for READMEs and .md files. Everything is escaped first; raw
HTML in the source is shown as text, and links only keep http(s), mailto, #anchors or paths
inside the repository. Notable exports: `renderMarkdown`, `Resolve`.

[`module/src/markdown.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/markdown.ts) · code · 5625 bytes

### sha1.ts

Streaming SHA-1, used to verify that every uploaded git object really has the id it claims.
The module runtime has no crypto library, so this is a plain implementation of FIPS 180-1.
Notable exports: `objectHeader`, `Sha1`.

[`module/src/sha1.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/sha1.ts) · code · 2987 bytes

### store.ts

Reading git data back out of the tables; shared by the push rules and the web UI. Notable
exports: `objectKey`, `refKey`, `readObject`, `commitParents`, `Db`, `CHUNK_SIZE`.

[`module/src/store.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/store.ts) · code · 1589 bytes

### style.ts

Look and page shell shared by the module's web UI and the web service (sign in, sign up,
import), so both halves of the site match. Notable exports: `shell`, `navFor`, `esc`, `CSS`,
`PAGE_CSP`.

[`module/src/style.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/style.ts) · code · 8205 bytes

### ui.ts

The web UI: a GitHub-like view of everything in the database, rendered to HTML inside the
module. No JavaScript.

[`module/src/ui.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/ui.ts) · code · 49090 bytes

_Generated 2026-10-23 10:36 UTC from `main`._
