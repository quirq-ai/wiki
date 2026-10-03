<!-- quirq-wiki-generated repo=euler dir=. -->

# euler / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/euler/tree/main) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .dockerignore

`.dockerignore` tells git or Docker which paths to omit. It currently lists 13 pattern(s)
including `.git`, `.gitignore`, `.env`, `.quirq`, `.xo`, `venv`, `__pycache__`, `*.py[cod]`,
and 5 more. Generated and secret files matching these patterns are not in the clone the wiki
summarizes.

[`.dockerignore`](https://github.com/quirq-ai/euler/blob/main/.dockerignore) · other · 109 bytes

### .env.example

Environment template `.env.example` (values omitted from the wiki). Euler: environment
variables. Keys: `HOST`, `PORT`, `STAGE`, `UVICORN_RELOAD`, `EULER_WATCHER_ENABLED`,
`EULER_WATCHER_INTERVAL_S`, `EULER_TIMELINE_PATH`. Copy to `.env` locally; never commit real
credentials.

[`.env.example`](https://github.com/quirq-ai/euler/blob/main/.env.example) · code · 1594 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 34 pattern(s)
including `.env`, `.env.local`, `.env.*.local`, `.env.backup`, `.env.bak*`, `.claude/`,
`experiments/`, `__pycache__/`, and 26 more. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/euler/blob/main/.gitignore) · other · 507 bytes

### CLAUDE.md

The Claude Code instructions (“Euler - Project Memory”). - FastAPI service on port 2718 that
runs a background watcher loop. - The watcher tick logs helloworld and reloads timeline.json
each pass. - Setup, configuration and startup mirror xo-space (euler.sh, .env,
requirements.txt, venv/, python server.py).

[`CLAUDE.md`](https://github.com/quirq-ai/euler/blob/main/CLAUDE.md) · code · 871 bytes

### Dockerfile

Container build file `Dockerfile`. Base image `python:3.12-slim`. Exposes ports `2718`.
Starts with `["python", "server.py"]`. Instructions used: `FROM`, `ENV`, `WORKDIR`, `COPY`,
`RUN`, `EXPOSE`, `CMD`.

[`Dockerfile`](https://github.com/quirq-ai/euler/blob/main/Dockerfile) · other · 496 bytes

### README.md

The project README (“Euler”). A small Python watcher service. It boots a FastAPI server on
port 2718 and runs a background tick loop that logs helloworld and reloads timeline.json on
every pass. The setup, configuration and startup commands mirror xo-space so the two
projects are operated the same way.

[`README.md`](https://github.com/quirq-ai/euler/blob/main/README.md) · code · 2366 bytes

### euler.sh

Euler local runner and process manager Usage: ./euler.sh
{dev|install|start|stop|restart|status|logs} Shebang `#!/usr/bin/env bash`. Functions:
`read_dotenv_value`, `log`, `log_success`, `log_warn`, `log_error`, `resolve_python_cmd`,
`cleanup_lock`, `acquire_lock`, `clean_stale_pid`, `is_running`, and 18 more.

[`euler.sh`](https://github.com/quirq-ai/euler/blob/main/euler.sh) · code · 15147 bytes

### pytest.ini

INI config `pytest.ini`. Sections: `pytest`. pytest defaults for this repository.

[`pytest.ini`](https://github.com/quirq-ai/euler/blob/main/pytest.ini) · code · 394 bytes

### requirements-dev.txt

Txt file `requirements-dev.txt`. Euler development / test dependencies.

[`requirements-dev.txt`](https://github.com/quirq-ai/euler/blob/main/requirements-dev.txt) · code · 379 bytes

### requirements.txt

Txt file `requirements.txt`. Euler dependencies.

[`requirements.txt`](https://github.com/quirq-ai/euler/blob/main/requirements.txt) · code · 246 bytes

### server.py

Euler Server FastAPI server that hosts the Euler watcher. Runnable as a script via `if
__name__ == '__main__'`. Defines the `app` application object. HTTP routes: `GET /`, `GET
/health`, `GET /api/watcher`, `GET /api/timeline`. Functions: `lifespan`, `root`,
`health_check`, `watcher_status`, `timeline`. Built with FastAPI.

[`server.py`](https://github.com/quirq-ai/euler/blob/main/server.py) · code · 2886 bytes

### timeline.json

JSON document `timeline.json` whose top-level keys are `events`. Structured data consumed by
the surrounding app or tooling.

[`timeline.json`](https://github.com/quirq-ai/euler/blob/main/timeline.json) · code · 222 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
