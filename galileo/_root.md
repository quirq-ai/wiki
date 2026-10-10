<!-- quirq-wiki-generated repo=galileo dir=. -->

# galileo / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/galileo/tree/main) in [galileo](https://github.com/quirq-ai/galileo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .example.env

Environment template `.example.env` (values omitted from the wiki). Copy to .env.local. Read
by `npm start` (src/server.mjs); what the shell sets wins. Keys: `PORT`. Copy to `.env`
locally; never commit real credentials.

[`.example.env`](https://github.com/quirq-ai/galileo/blob/main/.example.env) · code · 220 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 3 pattern(s)
including `data/`, `node_modules/`, `.env.local`. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/galileo/blob/main/.gitignore) · other · 162 bytes

### AGENTS.md

The agent/workspace instructions (“AGENTS.md: working on galileo”). galileo is the inspector
of a space: it keeps a list of sources (apps on ports of this machine, and files or folders
on it), gives each its own address, and serves telescope, the bar and router that shows them
one at a time. This is v0, small on purpose so people can try it. This file is the contract
for agents and people changing it.

[`AGENTS.md`](https://github.com/quirq-ai/galileo/blob/main/AGENTS.md) · code · 6859 bytes

### CLAUDE.md

The Claude Code instructions. @AGENTS.md.

[`CLAUDE.md`](https://github.com/quirq-ai/galileo/blob/main/CLAUDE.md) · code · 11 bytes

### README.md

The project README (“galileo”). The inspector of a space: the apps and files on this
machine, one at a time, under one bar.

[`README.md`](https://github.com/quirq-ai/galileo/blob/main/README.md) · code · 6304 bytes

### demo.mjs

The demo: galileo with one source of each shape.

[`demo.mjs`](https://github.com/quirq-ai/galileo/blob/main/demo.mjs) · code · 2940 bytes

### index.mjs

galileo as a library: `createGalileo()` returns its server, not yet listening, and the
handlers it is made of (`handle`, `upgrade`), for tests and for a program that starts
galileo itself. Notable exports: `createGalileo`, `logSource`, `parseLocation`,
`parseSourceSpec`, `sourceUrl`.

[`index.mjs`](https://github.com/quirq-ai/galileo/blob/main/index.mjs) · code · 346 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 252 bytes). It pins the exact dependency tree
for reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`package-lock.json`](https://github.com/quirq-ai/galileo/blob/main/package-lock.json) · lockfile · 252 bytes

### package.json

npm package manifest for `galileo` v0.4.0. The inspector of a space: ports and files on this
machine as sources, each at its own address, shown one at a time under telescope, galileo's
bar and router. CLI bins: `galileo`. Scripts: `demo`, `start`, `sample`, `test`. Entry
`index.mjs`.

[`package.json`](https://github.com/quirq-ai/galileo/blob/main/package.json) · code · 601 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
