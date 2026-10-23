<!-- quirq-wiki-generated repo=space-hub dir=cli/src -->

# space-hub / cli/src

Source: [cli/src](https://github.com/quirq-ai/space-hub/tree/main/cli/src) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### cli.ts

spacehub: the client for a spacehub server, shaped like gh. `auth` manages who you are on
which server; `space` (alias `repo`) manages spaces. Moving code is plain git through git-
remote-spacehub (spacehub://owner/name).

[`cli/src/cli.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/cli.ts) · code · 19413 bytes

### config.ts

Where spacehub lives and who you are there. Stored in ~/.spacehub/config.json (override the
folder with SPACEHUB_HOME). Tokens are kept per server because each SpacetimeDB server
issues its own identities. Notable exports: `configFile`, `normalizeServer`, `loadConfig`,
`saveSettings`, `saveToken`, `removeToken`, `builderFrom`, `Config`, and 2 more.

[`cli/src/config.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/config.ts) · code · 2725 bytes

### conn.ts

One connection to the spacehub database plus small read helpers. Reads are short-lived
subscriptions: subscribe, take what arrived, unsubscribe. Notable exports: `quietSdkLogs`,
`connectTo`, `connect`, `snapshot`, `findSpace`, `listRefs`, `findUser`, `errorMessage`, and
2 more.

[`cli/src/conn.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/conn.ts) · code · 3687 bytes

### git.ts

Thin wrappers over git plumbing: list objects to send, read raw objects, check which objects
exist, and write fetched objects back as a packfile. Notable exports: `git`,
`objectsToSend`, `presentObjects`, `PackWriter`, `RawObject`.

[`cli/src/git.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/git.ts) · code · 6712 bytes

### remote.ts

git-remote-spacehub: lets plain git talk to spacehub. git clone spacehub://alice/notes git
push origin main git fetch origin git starts this program for any spacehub:// URL and speaks
the remote helper protocol on stdin/stdout (see `man gitremote-helpers`). We implement the
`list`, `fetch` and `push` capabilities on top of the spacehub reducers and subscriptions.

[`cli/src/remote.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/remote.ts) · code · 11430 bytes

### web.ts

spacehub web service: the write side of the web UI.

[`cli/src/web.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/web.ts) · code · 20569 bytes

_Generated 2026-10-23 10:36 UTC from `main`._
