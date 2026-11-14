<!-- quirq-wiki-generated repo=executor dir=. -->

# executor / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/executor/tree/main) in [executor](https://github.com/quirq-ai/executor).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .dockerignore

`.dockerignore` tells git or Docker which paths to omit. It currently lists 3 pattern(s)
including `.env*`, `test/`, `node_modules/`. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.dockerignore`](https://github.com/quirq-ai/executor/blob/main/.dockerignore) · other · 26 bytes

### .gitattributes

Extensionless file `.gitattributes`. text=auto eol=lf.

[`.gitattributes`](https://github.com/quirq-ai/executor/blob/main/.gitattributes) · other · 19 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 3 pattern(s)
including `node_modules/`, `.env`, `.env.*`. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/executor/blob/main/.gitignore) · other · 26 bytes

### Dockerfile

Container build file `Dockerfile`. Base image `node:22-bookworm-slim`. Exposes ports `8080`.
Starts with `["node", "/app/executor.mjs"]`. Instructions used: `FROM`, `RUN`, `WORKDIR`,
`COPY`, `ENV`, `EXPOSE`, `CMD`.

[`Dockerfile`](https://github.com/quirq-ai/executor/blob/main/Dockerfile) · other · 1541 bytes

### README.md

The project README (“Executor”). The sandbox an AI coding agent works in. One executor runs
for one chat: it is a container that connects out to an OpenAI Agents API session (a
self_hosted environment) and runs the shell commands the agent asks for, in a workspace
folder, as an unprivileged user.

[`README.md`](https://github.com/quirq-ai/executor/blob/main/README.md) · code · 5038 bytes

### config.mjs

Settings Launchpad gives the executor through its env (see launchpad-template/agents-
executor.yaml). They become a command line and a directory, so each is checked before use.
Notable exports: `readConfig`.

[`config.mjs`](https://github.com/quirq-ai/executor/blob/main/config.mjs) · code · 1096 bytes

### executor.mjs

Executor supervisor: the only process the Launchpad app runs. * reads its session
(environment id, remote URL, environment key) from env, set by Launchpad when the hub
creates this app; * runs ONE `codex exec-server --remote <REMOTE_URL> --environment-id
<ENVIRONMENT_ID>`, restarting it if it dies; * answers GET /healthz on PORT for Launchpad's
probes. It only dials out to OpenAI; nothing calls into it except the health probe.

[`executor.mjs`](https://github.com/quirq-ai/executor/blob/main/executor.mjs) · code · 4300 bytes

### package.json

npm package manifest for `agents-executor` v0.1.0. Agents Hub executor: runs codex exec-
server for one OpenAI Agents API session, configured by Launchpad. Scripts: `start`, `test`.

[`package.json`](https://github.com/quirq-ai/executor/blob/main/package.json) · code · 350 bytes

_Generated 2026-11-14 12:35 UTC from `main`._
