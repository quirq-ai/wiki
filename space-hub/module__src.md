<!-- quirq-wiki-generated repo=space-hub dir=module/src -->

# space-hub / module/src

Source: [module/src](https://github.com/quirq-ai/space-hub/tree/main/module/src) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### chat.ts

Chat turns saved from the app: one JSON line per turn appended to `<conversation>.log.jsonl`
beside a conversation file, committed to the project's default branch. This is the format
open-chat's hub backend writes, so either can read the other's chats. The reducer
(append_chat in index.ts) runs it as one transaction, so two writers cannot race.

[`module/src/chat.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/chat.ts) · code · 7678 bytes

### code.ts

The app's code views as JSON: branches and tags, a folder or file at any ref, history, one
commit with its diffs, and every path of a project (for search). They reuse the git helpers
of the server-rendered pages (ui.ts), so both views of a project always agree.

[`module/src/code.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/code.ts) · code · 9649 bytes

### diff.ts

Line diffs for the web UI: Myers' O(ND) algorithm plus unified hunks. Notable exports:
`diffLines`, `toHunks`, `EQUAL`, `DELETE`, `INSERT`, `Op`, `Hunk`.

[`module/src/diff.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/diff.ts) · code · 3275 bytes

### guide.ts

The hub's guide: what it is, who can use it, how to use it, use cases. One source for both
the full page (/-/guide) and the short version at the top of the home page. Keep it plain
and short; the README has the rest. HUB is the remote name and URL scheme git uses (quirq,
quirq://<host>/<space>/<project>). The sign-up wording follows the hub's accounts setting:
open (register a name) or github (sign up with GitHub from the CLI).

[`module/src/guide.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/guide.ts) · code · 13943 bytes

### index.ts

spacehub: GitHub-shaped git hosting where the database is the server. The hub has GitHub's
two levels.

[`module/src/index.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/index.ts) · code · 66612 bytes

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
exports: `objectKey`, `refKey`, `memberKey`, `roleKey`, `ownsSpace`, `inSpace`,
`readObject`, `commitParents`, and 3 more.

[`module/src/store.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/store.ts) · code · 2903 bytes

### style.ts

Look and page shell shared by the module's web UI and the web service (sign in, sign up,
import), so both halves of the site match. Notable exports: `shell`, `navFor`, `sideFor`,
`esc`, `CSS`, `PAGE_CSP`.

[`module/src/style.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/style.ts) · code · 19254 bytes

### ui.ts

The web UI: a GitHub-like view of everything in the database, rendered to HTML inside the
module. Pages work without JavaScript; behind the server's proxy, live pages (home, spaces,
projects) also load /-/live.js, which swaps in each new rendering the web service streams
when their data changes.

[`module/src/ui.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/ui.ts) · code · 74046 bytes

### workspace.ts

The workspace API: the hub as one tree of folders and files, as JSON, for the app the web
service serves at /, /<space> and /<space>/<project>. It speaks open-chat's snapshot format,
so the app renders conversations, collections, feeds, documents and previews exactly as
open-chat does.

[`module/src/workspace.ts`](https://github.com/quirq-ai/space-hub/blob/main/module/src/workspace.ts) · code · 24156 bytes

_Generated 2026-10-28 11:43 UTC from `main`._
