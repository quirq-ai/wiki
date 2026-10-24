<!-- quirq-wiki-generated repo=space-hub dir=cli/src -->

# space-hub / cli/src

Source: [cli/src](https://github.com/quirq-ai/space-hub/tree/main/cli/src) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### autosync.ts

Autosync keeps a working copy and its branch on the hub converged while several agents edit
the same space. Each step: 1. commits every local change (git add -A) as one checkpoint
commit; 2. if the hub's branch holds commits this copy lacks, rebases the local commits onto
it (git pull --rebase); 3. pushes when this copy is ahead. `space sync --watch --auto` runs
a step every few seconds and on every push the hub reports.

[`cli/src/autosync.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/autosync.ts) · code · 8024 bytes

### cli.ts

spacehub: the client for a spacehub server, shaped like gh. `auth` manages who you are on
which server, `space` manages the hub's top-level spaces (builders' personal spaces and team
spaces), and `project` (alias `repo`) manages the git projects inside them. Moving code is
plain git through git-remote-quirq, on a remote always named quirq that points at a quirq
URL (quirq://hub.quirq.dev/<space>/<project>).

[`cli/src/cli.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/cli.ts) · code · 39665 bytes

### config.ts

Where spacehub lives and who you are there. Stored in ~/.spacehub/config.json (override the
folder with SPACEHUB_HOME). Tokens are kept per server because each SpacetimeDB server
issues its own identities. Notable exports: `configFile`, `normalizeServer`, `loadConfig`,
`saveSettings`, `saveToken`, `removeToken`, `githubLogin`, `Config`, and 2 more.

[`cli/src/config.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/config.ts) · code · 2923 bytes

### conn.ts

One connection to the spacehub database plus small read helpers. Reads are short-lived
subscriptions: subscribe, take what arrived, unsubscribe. Notable exports: `quietSdkLogs`,
`connectTo`, `connect`, `snapshot`, `findProject`, `findHubSpace`, `spaceRoles`,
`projectsIn`, and 6 more.

[`cli/src/conn.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/conn.ts) · code · 4903 bytes

### git.ts

Thin wrappers over git plumbing: list objects to send, read raw objects, check which objects
exist, and write fetched objects back as a packfile. Notable exports: `git`,
`objectsToSend`, `presentObjects`, `PackWriter`, `RawObject`.

[`cli/src/git.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/git.ts) · code · 6712 bytes

### live.ts

Live pages for the web UI, served by the web service: GET /-/live.js the page script (no
inline code, so the CSP stays strict) GET /-/live?path=<page> Server-Sent Events: the page's
new <main> on every change The service keeps one subscription to the hub's small tables
(builders, spaces and their members, projects, refs, collaborators, presence, imports,
builder credits).

[`cli/src/live.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/live.ts) · code · 10572 bytes

### livepage.ts

What the browser side of live pages needs, free of the SDK so tests can load it: the page
script, which pages are live, and the parts of a rendered page that the script swaps in. See
live.ts. Notable exports: `liveTopic`, `pageParts`, `LIVE_JS`.

[`cli/src/livepage.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/livepage.ts) · code · 2997 bytes

### remote.ts

git-remote-quirq: lets plain git talk to a quirq hub. git clone -o quirq
quirq://hub.quirq.dev/alice/notes git push quirq main git fetch quirq git starts this
program for any quirq:// URL (and, as git-remote-spacehub, for spacehub:// URLs of older
clones) and speaks the remote helper protocol on stdin/stdout (see `man gitremote-helpers`).

[`cli/src/remote.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/remote.ts) · code · 11363 bytes

### url.ts

Hub URLs. A hub remote is always called "quirq" and always points at a quirq URL:
quirq://hub.quirq.dev/alice/notes a space on a named hub quirq://alice/notes a space on the
hub you are logged in to (hub.quirq.dev unless you chose another) URLs we write always name
the host, so a clone keeps working whatever server the CLI is logged in to later.

[`cli/src/url.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/url.ts) · code · 2197 bytes

### web.ts

spacehub web service: the write side of the web UI.

[`cli/src/web.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/web.ts) · code · 23075 bytes

### xo.ts

xo.quirq.dev's door to the hub, served by the web service at /-/api/xo/v1/.

[`cli/src/xo.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/xo.ts) · code · 8619 bytes

_Generated 2026-10-24 09:54 UTC from `main`._
