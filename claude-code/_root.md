<!-- quirq-wiki-generated repo=claude-code dir=. -->

# claude-code / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/claude-code/tree/main) in [claude-code](https://github.com/quirq-ai/claude-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .dockerignore

`.dockerignore` tells git or Docker which paths to omit. It currently lists 3 pattern(s)
including `.git`, `*.md`, `launchpad`. Generated and secret files matching these patterns
are not in the clone the wiki summarizes.

[`.dockerignore`](https://github.com/quirq-ai/claude-code/blob/main/.dockerignore) · other · 20 bytes

### Dockerfile

Container build file `Dockerfile`. Base image `node:22-bookworm-slim`. Exposes ports `8080`.
Starts with `["node", "/app/server.mjs"]`. Instructions used: `FROM`, `RUN`, `WORKDIR`,
`COPY`, `ENV`, `EXPOSE`, `CMD`.

[`Dockerfile`](https://github.com/quirq-ai/claude-code/blob/main/Dockerfile) · other · 1247 bytes

### README.md

The project README (“claude-code”). One container that runs [Claude
Code](https://code.claude.com) with Remote Control on. You sign in once with your own Claude
subscription, then drive the session from [claude.ai/code](https://claude.ai/code) or the
Claude app. No API key is needed.

[`README.md`](https://github.com/quirq-ai/claude-code/blob/main/README.md) · code · 2766 bytes

### server.mjs

claude-code container: sign in to Claude Code with your own subscription, then run `claude
remote-control` so you can drive the session from claude.ai/code or the Claude app.

[`server.mjs`](https://github.com/quirq-ai/claude-code/blob/main/server.mjs) · code · 10712 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
