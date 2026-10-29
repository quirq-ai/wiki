<!-- quirq-wiki-generated repo=space-hub dir=cli/src -->

# space-hub / cli/src

Source: [cli/src](https://github.com/quirq-ai/space-hub/tree/main/cli/src) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### admin.ts

The web service acting as the hub admin (the identity that owns the database, whose token
the entrypoint hands it), over SpacetimeDB's HTTP API on the internal port: SQL reads of
private tables, reducer calls and new identities. Shared by the xo API (xo.ts) and GitHub
sign-in (signin.ts), with their small JSON-over-HTTP helpers. Notable exports: `json`,
`readJson`, `stdb`, `select`, `call`, `newIdentity`, `Reply`, `AdminHttp`.

[`cli/src/admin.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/admin.ts) · code · 3617 bytes

### agentrun.ts

spacehub agent run: an agent at work. One folder holds the agent's own space (its
definition) and every space it is connected to, each a space folder kept current by
autosync, pushing as the agent: <dir>/<agent>/home/... its own projects
<dir>/<space>/<project>/... each connected space One connection per space, so each shows the
agent as running there ("agent" presence, with the host).

[`cli/src/agentrun.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/agentrun.ts) · code · 5372 bytes

### agenttemplate.ts

The starter definition `spacehub agent create` puts in an agent's home project, in the xo-
agent-template layout. Owners rewrite it; the agent keeps MEMORY.md and memory/ current as
it works (autosync pushes them). Notable exports: `agentTemplate`.

[`cli/src/agenttemplate.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/agenttemplate.ts) · code · 1891 bytes

### app.ts

The hub's app: open-chat's interface over the whole hub. The proxy sends the hub's own pages
here; the module still renders the code views (tree, blob, raw, commits, commit, refs,
activity) and the guide.

[`cli/src/app.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/app.ts) · code · 9821 bytes

### autosync.ts

Autosync keeps a working copy and its branch on the hub converged while several agents edit
the same space. Each step: 1. commits every local change (git add -A) as one checkpoint
commit; 2. if the hub's branch holds commits this copy lacks, rebases the local commits onto
it (git pull --rebase); 3. pushes when this copy is ahead. `space sync --watch --auto` runs
a step every few seconds and on every push the hub reports.

[`cli/src/autosync.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/autosync.ts) · code · 10519 bytes

### avatar.ts

Avatars for the app: GET /-/avatar/<name> answers with an image for any builder, org or
agent. A name backed by a GitHub account (a builder who signed up with GitHub, an org linked
to one) gets its GitHub picture, fetched here so visitors' browsers never contact GitHub;
everyone else gets initials on a color derived from the name. Answers are cached in memory.
Notable exports: `initialsSvg`, `handleAvatar`, `AvatarDeps`.

[`cli/src/avatar.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/avatar.ts) · code · 4035 bytes

### cli.ts

spacehub: the client for a spacehub server, shaped like gh. `auth` manages who you are on
which server, `space` manages the hub's top-level spaces (builders' personal spaces, orgs
and agents), and `project` (alias `repo`) manages the git projects inside them. Moving code
is plain git through git-remote-quirq, on a remote always named quirq that points at a quirq
URL (quirq://hub.quirq.dev/<space>/<project>).

[`cli/src/cli.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/cli.ts) · code · 63490 bytes

### config.ts

Where spacehub lives and who you are there. Stored in ~/.spacehub/config.json (override the
folder with SPACEHUB_HOME). Tokens are kept per server because each SpacetimeDB server
issues its own identities. Notable exports: `configFile`, `normalizeServer`, `loadConfig`,
`saveSettings`, `saveToken`, `removeToken`, `githubLogin`, `Config`, and 2 more.

[`cli/src/config.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/config.ts) · code · 2923 bytes

### conn.ts

One connection to the spacehub database plus small read helpers. Reads are short-lived
subscriptions: subscribe, take what arrived, unsubscribe. Notable exports: `quietSdkLogs`,
`connectTo`, `connect`, `snapshot`, `findProject`, `findSpace`, `spaceRoles`, `projectsIn`,
and 6 more.

[`cli/src/conn.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/conn.ts) · code · 4898 bytes

### device.ts

GitHub's device flow, run by the hub for its OAuth App (signin.ts): the hub asks GitHub for
a code, the CLI shows it, the person enters it on github.com and says yes, and the hub,
polling GitHub with the device code only it holds, receives a token with no scopes. The
token never leaves the hub, so no other server can be handed it to replay here.

[`cli/src/device.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/device.ts) · code · 3977 bytes

### devicelogin.ts

The CLI's side of a hub's device sign-in (signin.ts): ask the hub for a GitHub code, show
it, then ask the hub until GitHub has said yes. GitHub gives the token to the hub; it never
passes through here. Notable exports: `deviceSignIn`.

[`cli/src/devicelogin.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/devicelogin.ts) · code · 2999 bytes

### git.ts

Thin wrappers over git plumbing: list objects to send, read raw objects, check which objects
exist, and write fetched objects back as a packfile. Notable exports: `git`,
`objectsToSend`, `presentObjects`, `PackWriter`, `RawObject`.

[`cli/src/git.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/git.ts) · code · 6712 bytes

### github.ts

GitHub to the hub, for the web service: - GitHub's API: an account, its public repositories,
one repository; - mirrorProject: bring one project in step with a GitHub repository by
refplan's rules (work done on the hub is never thrown away); - GithubSync: keep every space
linked to a GitHub user or organization in step, as the hub admin, on request and every so
often.

[`cli/src/github.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/github.ts) · code · 14318 bytes

### live.ts

Live pages for the web UI, served by the web service: GET /-/live.js the page script (no
inline code, so the CSP stays strict) GET /-/live?path=<page> Server-Sent Events: the page's
new <main> on every change The service keeps one subscription to the hub's small tables
(builders, spaces and their members, projects, refs, collaborators, presence, imports,
builder credits).

[`cli/src/live.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/live.ts) · code · 11985 bytes

### livepage.ts

What the browser side of live pages needs, free of the SDK so tests can load it: the page
script, which pages are live, and the parts of a rendered page that the script swaps in. See
live.ts. Notable exports: `liveTopic`, `pageParts`, `LIVE_JS`.

[`cli/src/livepage.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/livepage.ts) · code · 2997 bytes

### refplan.ts

What a GitHub sync changes in one project. Each ref is seen three ways: GitHub's value now
(G), the hub's value now (H), and GitHub's value at the last sync (L, from ref_sync).

[`cli/src/refplan.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/refplan.ts) · code · 5291 bytes

### remote.ts

git-remote-quirq: lets plain git talk to a quirq hub. git clone -o quirq
quirq://hub.quirq.dev/alice/notes git push quirq main git fetch quirq git starts this
program for any quirq:// URL (and, as git-remote-spacehub, for spacehub:// URLs of older
clones) and speaks the remote helper protocol on stdin/stdout (see `man gitremote-helpers`).

[`cli/src/remote.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/remote.ts) · code · 11561 bytes

### signin.ts

Sign up and sign in with GitHub, served by the web service.

[`cli/src/signin.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/signin.ts) · code · 13565 bytes

### spacesync.ts

A whole space in one folder: a clone of every project of a space side by side, like quirq's
DEPS, kept current by one process with one connection. <dir>/.spacehub/space.json {"hub":
"<server>", "space": "acme", "projects": ["site", ...]} <dir>/<project>/ a normal clone with
its quirq remote `space sync` once fast-forwards every project (cloning new ones); --watch
does it on every push; --auto runs autosync in every project.

[`cli/src/spacesync.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/spacesync.ts) · code · 8848 bytes

### url.ts

Hub URLs. A hub remote is always called "quirq" and always points at a quirq URL:
quirq://hub.quirq.dev/alice/notes a project on a named hub quirq://alice/notes a project on
the hub you are logged in to (hub.quirq.dev unless you chose another) URLs we write always
name the host, so a clone keeps working whatever server the CLI is logged in to later.

[`cli/src/url.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/url.ts) · code · 3125 bytes

### web.ts

spacehub web service: the write side of the web UI.

[`cli/src/web.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/web.ts) · code · 24678 bytes

### xo.ts

xo.quirq.dev's door to the hub, served by the web service at /-/api/xo/v1/.

[`cli/src/xo.ts`](https://github.com/quirq-ai/space-hub/blob/main/cli/src/xo.ts) · code · 5742 bytes

_Generated 2026-10-29 11:52 UTC from `main`._
