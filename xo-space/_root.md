<!-- quirq-wiki-generated repo=xo-space dir=. -->

# xo-space / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/xo-space/tree/main) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .dockerignore

`.dockerignore` tells git or Docker which paths to omit. It currently lists 14 pattern(s)
including `.git`, `.gitignore`, `.env`, `.quirq`, `.xo`, `venv`, `__pycache__`, `*.py[cod]`,
and 6 more. Generated and secret files matching these patterns are not in the clone the wiki
summarizes.

[`.dockerignore`](https://github.com/quirq-ai/xo-space/blob/main/.dockerignore) · other · 114 bytes

### .env.example

Environment template `.env.example` (values omitted from the wiki). XO Space: environment
variables. Keys: `HOST`, `PORT`, `STAGE`, `UVICORN_RELOAD`, `QUIRQ_SKIP_BOOT_INSTALL`,
`AGENT_NAME`, `XO_PROJECTS_ROOT`, `QUIRQ_STATE_ROOT`, `AI_WORKSPACE_ROOT`,
`QUIRQ_WATCHER_SOURCE_MODE`, `XO_RC_DIR`, `CLAUDE_CLI_PATH`, and 13 more. Copy to `.env`
locally; never commit real credentials.

[`.env.example`](https://github.com/quirq-ai/xo-space/blob/main/.env.example) · code · 18249 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 59 pattern(s)
including `.env`, `.env.local`, `.env.*.local`, `.env.backup`, `.env.bak*`, `main.tf`,
`.claude/`, `experiments/`, and 51 more. Generated and secret files matching these patterns
are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/xo-space/blob/main/.gitignore) · other · 1399 bytes

### AGENTS.md

The agent/workspace instructions (“XO Cowork API - Codex Project Instructions”). - FastAPI
backend that brokers chat and auth flows. - Uses local coding CLIs (claude or codex) for
assistant responses. - Keep API behavior backward compatible by default.

[`AGENTS.md`](https://github.com/quirq-ai/xo-space/blob/main/AGENTS.md) · code · 4118 bytes

### CLAUDE.md

The Claude Code instructions (“XO Cowork API - Project Memory”). - FastAPI backend that
brokers chat and auth flows. - Uses local claude CLI for coding/assistant responses. -
Primary API behavior should remain backward compatible.

[`CLAUDE.md`](https://github.com/quirq-ai/xo-space/blob/main/CLAUDE.md) · code · 4210 bytes

### CONTRIBUTING.md

The contributor guide (“Contributing to xo-space”). Thanks for helping. xo-space is the
open-source local control plane for AI coding agents — Claude Code, Codex, OpenClaw, Hermes,
Antigravity, and Cursor for telemetry — plus the Space UI that shows what those agents did
to your projects. This guide is the short path from "I found something" to "it's merged".

[`CONTRIBUTING.md`](https://github.com/quirq-ai/xo-space/blob/main/CONTRIBUTING.md) · code · 17232 bytes

### DEVELOPING.md

The developer guide (“Developing xo-space”). A practical guide to working in this codebase:
how it's wired, where things live, how to run and validate it, and how to add a new agent
backend without touching core code.

[`DEVELOPING.md`](https://github.com/quirq-ai/xo-space/blob/main/DEVELOPING.md) · code · 60376 bytes

### Dockerfile

Container build file `Dockerfile`. Base image `python:3.12-slim`. Exposes ports `5002`.
Starts with `["python", "server.py"]`. Instructions used: `FROM`, `ENV`, `WORKDIR`, `RUN`,
`COPY`, `EXPOSE`, `CMD`.

[`Dockerfile`](https://github.com/quirq-ai/xo-space/blob/main/Dockerfile) · other · 1099 bytes

### INSTALLATION.md

The installation guide (“Install and run Quirq”). Add the marketplace with codex plugin
marketplace add quirq-ai/xo-space, then open Plugins → Quirq → XO Space and click Install.
In a new Codex task, say “Open XO Space” or “Install XO Space in ~/work.” The plugin handles
first setup and opens the local UI; fresh installs use the Codex backend.

[`INSTALLATION.md`](https://github.com/quirq-ai/xo-space/blob/main/INSTALLATION.md) · code · 12485 bytes

### LICENSE

License text (MIT License). Governs use, modification, and distribution of this repository.
Read the full file in the source tree before depending on the project in a product or
redistribution.

[`LICENSE`](https://github.com/quirq-ai/xo-space/blob/main/LICENSE) · other · 1070 bytes

### README.md

The project README (“XO Space”). Build, observe and measure agentic work — locally, across
every coding agent you use.

[`README.md`](https://github.com/quirq-ai/xo-space/blob/main/README.md) · code · 26820 bytes

### RELEASING.md

The release guide (“Releasing XO Space”). A release is an annotated SemVer tag on main plus
a GitHub Release. Pull requests merge into main continuously; a release is cut when the
maintainers decide, after testing and validation on the development staging branch. Not
every merge is a release, and a release is not cut right after a merge. The tag gives that
version a name, a changelog and something to quote in a bug report.

[`RELEASING.md`](https://github.com/quirq-ai/xo-space/blob/main/RELEASING.md) · code · 3272 bytes

### cowork-api.sh

XO Space API local runner and process manager Usage: ./cowork-api.sh
{dev|install|start|stop|restart|status|logs} Shebang `#!/usr/bin/env bash`. Functions:
`read_dotenv_value`, `log`, `log_success`, `log_warn`, `log_error`, `resolve_python_cmd`,
`cleanup_lock`, `acquire_lock`, `clean_stale_pid`, `is_running`, and 18 more.

[`cowork-api.sh`](https://github.com/quirq-ai/xo-space/blob/main/cowork-api.sh) · code · 15155 bytes

### cowork-update.sh

Safe updater for current branch: 1) stash local changes 2) pull latest from origin/ 3) apply
stash back (without dropping it if apply fails) Shebang `#!/usr/bin/env bash`. Functions:
`log`, `log_success`, `log_warn`, `log_error`.

[`cowork-update.sh`](https://github.com/quirq-ai/xo-space/blob/main/cowork-update.sh) · code · 2399 bytes

### install.sh

install.sh — set up and run Quirq natively. Shebang `#!/usr/bin/env bash`. Functions:
`fail`, `require_command`, `resolve_repo_dir`, `fetch_repo`, `ensure_uv`,
`sync_dependencies`, `report_tool`, `check_optional_tools`, `print_reporting_notice`,
`saved_root_from_file`, and 10 more.

[`install.sh`](https://github.com/quirq-ai/xo-space/blob/main/install.sh) · code · 28235 bytes

### pytest.ini

INI config `pytest.ini`. Sections: `pytest`. pytest defaults for this repository.

[`pytest.ini`](https://github.com/quirq-ai/xo-space/blob/main/pytest.ini) · code · 828 bytes

### requirements-dev.txt

Txt file `requirements-dev.txt`. XO Space API — development / test dependencies.

[`requirements-dev.txt`](https://github.com/quirq-ai/xo-space/blob/main/requirements-dev.txt) · code · 1213 bytes

### requirements.txt

Txt file `requirements.txt`. XO Space API Dependencies.

[`requirements.txt`](https://github.com/quirq-ai/xo-space/blob/main/requirements.txt) · code · 2565 bytes

### server.py

XO Space API Server FastAPI server that interfaces with local Claude Code CLI. Runnable as a
script via `if __name__ == '__main__'`. Defines the `app` application object. HTTP routes:
`GET /`, `GET /health`, `GET /debug/ai-auth`, `GET /sessions`, `DELETE
/sessions/{project_id}`, `POST /gateway/restart`, and 4 more. Classes: `AskQuestionRequest`.

[`server.py`](https://github.com/quirq-ai/xo-space/blob/main/server.py) · code · 51956 bytes

### uninstall.sh

uninstall.sh — remove everything install.sh created, keeping your projects. Shebang
`#!/usr/bin/env bash`. Functions: `fail`, `usage`, `parse_args`, `resolve_repo_dir`,
`resolve_workspace_dir`, `saved_root_from_file`, `read_env_value`, `resolve_roots`,
`guard_path`, `remove_path`, and 7 more.

[`uninstall.sh`](https://github.com/quirq-ai/xo-space/blob/main/uninstall.sh) · code · 15758 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
