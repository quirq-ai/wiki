<!-- quirq-wiki-generated repo=xo-cowork-api dir=. -->

# xo-cowork-api / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/xo-cowork-api/tree/main) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .env.example

Environment template `.env.example` (values omitted from the wiki). XO Cowork API
Environment Variables. Keys: `HOST`, `PORT`, `STAGE`, `CHAT_API_BASE_URL`,
`XO_AUTH_START_PATH`, `XO_AUTH_STATUS_PATH`, `XO_AUTH_CONSUME_PATH`, `XO_GET_USER_ID_PATH`,
`CLAUDE_CLI_PATH`, `CLAUDE_TIMEOUT`, `CLAUDE_PERMISSION_MODE`, `AI_WORKSPACE_ROOT`, and 8
more. Copy to `.env` locally; never commit real credentials.

[`.env.example`](https://github.com/quirq-ai/xo-cowork-api/blob/main/.env.example) · code · 5512 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 49 pattern(s)
including `.env`, `.env.local`, `.env.*.local`, `.env.backup`, `main.tf`, `.claude/`,
`experiments/`, `__pycache__/`, and 41 more. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/xo-cowork-api/blob/main/.gitignore) · other · 817 bytes

### AGENTS.md

The agent/workspace instructions (“XO Cowork API - Codex Project Instructions”). - FastAPI
backend that brokers chat and auth flows. - Uses local coding CLIs (claude or codex) for
assistant responses. - Keep API behavior backward compatible by default.

[`AGENTS.md`](https://github.com/quirq-ai/xo-cowork-api/blob/main/AGENTS.md) · code · 2227 bytes

### CLAUDE.md

The Claude Code instructions (“XO Cowork API - Project Memory”). - FastAPI backend that
brokers chat and auth flows. - Uses local claude CLI for coding/assistant responses. -
Primary API behavior should remain backward compatible.

[`CLAUDE.md`](https://github.com/quirq-ai/xo-cowork-api/blob/main/CLAUDE.md) · code · 2902 bytes

### DEVELOPING.md

The developer guide (“Developing xo-cowork-api”). A practical guide to working in this
codebase: how it's wired, where things live, how to run and validate it, and how to add a
new agent backend without touching core code.

[`DEVELOPING.md`](https://github.com/quirq-ai/xo-cowork-api/blob/main/DEVELOPING.md) · code · 12138 bytes

### Dockerfile

Container build file `Dockerfile`. Base image `python:3.12-slim`. Exposes ports `5002`.
Starts with `["python", "server.py"]`. Instructions used: `FROM`, `ENV`, `WORKDIR`, `COPY`,
`RUN`, `EXPOSE`, `CMD`.

[`Dockerfile`](https://github.com/quirq-ai/xo-cowork-api/blob/main/Dockerfile) · other · 245 bytes

### README.md

The project README (“xo-cowork-api”). The local control plane for AI coding agents. One
workspace, many runtimes — Claude Code, OpenClaw, Codex, Hermes, Antigravity, and whatever
comes next.

[`README.md`](https://github.com/quirq-ai/xo-cowork-api/blob/main/README.md) · code · 21589 bytes

### cowork-api.sh

XO Cowork API process manager Usage: ./cowork-api.sh
{install|start|stop|restart|status|logs} Shebang `#!/usr/bin/env bash`. Functions: `log`,
`log_success`, `log_warn`, `log_error`, `resolve_python_cmd`, `cleanup_lock`,
`acquire_lock`, `clean_stale_pid`, `is_running`, `find_port_pids`, and 12 more.

[`cowork-api.sh`](https://github.com/quirq-ai/xo-cowork-api/blob/main/cowork-api.sh) · code · 8771 bytes

### cowork-update.sh

Safe updater for current branch: 1) stash local changes 2) pull latest from origin/ 3) apply
stash back (without dropping it if apply fails) Shebang `#!/usr/bin/env bash`. Functions:
`log`, `log_success`, `log_warn`, `log_error`.

[`cowork-update.sh`](https://github.com/quirq-ai/xo-cowork-api/blob/main/cowork-update.sh) · code · 2399 bytes

### requirements.txt

Txt file `requirements.txt`. XO Cowork API Dependencies.

[`requirements.txt`](https://github.com/quirq-ai/xo-cowork-api/blob/main/requirements.txt) · code · 602 bytes

### server.py

XO Cowork API Server FastAPI server that interfaces with local Claude Code CLI. Runnable as
a script via `if __name__ == '__main__'`. Defines the `app` application object. HTTP routes:
`GET /`, `GET /health`, `GET /debug/ai-auth`, `GET /sessions`, `DELETE
/sessions/{project_id}`, `POST /gateway/restart`, and 4 more. Classes: `AskQuestionRequest`,
`ChatAPIClient`.

[`server.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/server.py) · code · 35912 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
