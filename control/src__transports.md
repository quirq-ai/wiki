<!-- quirq-wiki-generated repo=control dir=src/transports -->

# control / src/transports

Source: [src/transports](https://github.com/quirq-ai/control/tree/main/src/transports) in [control](https://github.com/quirq-ai/control).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### dir.js

Directory transport: the queue is a plain directory tree. Works on a local disk, a shared
mount, or any folder kept in sync by another tool. The git transport builds on this layout.
<root>/nodes/<node>/jobs/<id>.json <root>/nodes/<node>/cancel/<id>.json
<root>/nodes/<node>/results/<id>.json <root>/nodes/<node>/results/<id>.log Notable exports:
`DirTransport`.

[`src/transports/dir.js`](https://github.com/quirq-ai/control/blob/main/src/transports/dir.js) · code · 4464 bytes

### git.js

Git transport: the queue is a git repository (a local clone). This is the "repo as job
queue" approach: the controller commits jobs and pushes, the controlled node pulls, runs,
commits results and pushes. Any git host works. Whoever can push to the repository can
submit jobs, but jobs still need a trusted signature and must pass the node's policy before
anything runs. Notable exports: `GitTransport`.

[`src/transports/git.js`](https://github.com/quirq-ai/control/blob/main/src/transports/git.js) · code · 2775 bytes

### index.js

const BACKENDS = { dir: DirTransport, git: GitTransport } Notable exports:
`registerTransport`, `createTransport`.

[`src/transports/index.js`](https://github.com/quirq-ai/control/blob/main/src/transports/index.js) · code · 536 bytes

_Generated 2026-11-09 14:29 UTC from `main`._
