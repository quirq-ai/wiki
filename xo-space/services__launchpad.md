<!-- quirq-wiki-generated repo=xo-space dir=services/launchpad -->

# xo-space / services/launchpad

Source: [services/launchpad](https://github.com/quirq-ai/xo-space/tree/main/services/launchpad) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### API.md

Markdown page “Launchpad deploy: the HTTP contract”. The Space's deploy API, for xo-
coworker's Deploy panel. Everything runs in the xo-space server; the browser never sees a
GitHub token or the XO key.

[`services/launchpad/API.md`](https://github.com/quirq-ai/xo-space/blob/main/services/launchpad/API.md) · code · 27728 bytes

### __init__.py

Deploying a project to XO Launchpad.

[`services/launchpad/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/launchpad/__init__.py) · code · 920 bytes

### agent.py

Ask an agent to deploy: a project thread that prepares the project. Classes: `_Exists`.
Functions: `project_facts`, `brief`, `ask_agent`.

[`services/launchpad/agent.py`](https://github.com/quirq-ai/xo-space/blob/main/services/launchpad/agent.py) · code · 7912 bytes

### flow.json

JSON document `flow.json` whose top-level keys are `schema`, `name`, `title`, `summary`,
`config`, `requirements`, `states`, `steps`, `decisions`, `failures`, `detect`, `templates`,
and 4 more. Structured data consumed by the surrounding app or tooling.

[`services/launchpad/flow.json`](https://github.com/quirq-ai/xo-space/blob/main/services/launchpad/flow.json) · code · 34480 bytes

### launchpad.py

"""The XO Launchpad deploy script: the one executor of flow.json. Built with FastAPI.

[`services/launchpad/launchpad.py`](https://github.com/quirq-ai/xo-space/blob/main/services/launchpad/launchpad.py) · code · 143880 bytes

### runs.py

Deploy runs: the launchpad script as a server-side process. Classes: `DeployRefused`, `Run`.
Functions: `project_path`, `launchpad_url`, `github_login`, `script_env`, `cli_installed`,
`check`, `deploy_argv`, `start_deploy`, and 11 more.

[`services/launchpad/runs.py`](https://github.com/quirq-ai/xo-space/blob/main/services/launchpad/runs.py) · code · 25718 bytes

_Generated 2026-11-18 14:40 UTC from `main`._
