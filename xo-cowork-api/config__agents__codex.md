<!-- quirq-wiki-generated repo=xo-cowork-api dir=config/agents/codex -->

# xo-cowork-api / config/agents/codex

Source: [config/agents/codex](https://github.com/quirq-ai/xo-cowork-api/tree/main/config/agents/codex) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### capabilities.json

JSON document `capabilities.json` whose top-level keys are `models`, `data`, `channels`,
`secrets`. Structured data consumed by the surrounding app or tooling.

[`config/agents/codex/capabilities.json`](https://github.com/quirq-ai/xo-cowork-api/blob/main/config/agents/codex/capabilities.json) · code · 644 bytes

### manifest.json

JSON document `manifest.json` whose top-level keys are `name`, `binary`, `home_dir`,
`env_file`, `config_file`, `agents_dir`, `workspace_dir`, `provisioning_log`,
`precreate_home_for_skills`, `cwd`, `cli_timeout_seconds`, `api`, and 3 more. Structured
data consumed by the surrounding app or tooling.

[`config/agents/codex/manifest.json`](https://github.com/quirq-ai/xo-cowork-api/blob/main/config/agents/codex/manifest.json) · code · 716 bytes

### settings.json

JSON document `settings.json` whose top-level keys are `cli_path_env`, `cowork_root`,
`timeout`. Structured data consumed by the surrounding app or tooling.

[`config/agents/codex/settings.json`](https://github.com/quirq-ai/xo-cowork-api/blob/main/config/agents/codex/settings.json) · code · 92 bytes

### setup.sh

config/agents/codex/setup.sh — install + configure the codex (OpenAI Codex CLI) agent.
Shebang `#!/usr/bin/env bash`. Functions: `log`, `log_success`, `log_warn`, `log_error`,
`prov`, `install_apt_prereqs`, `install_node`, `write_repo_env_file`, `seed_agent_env`,
`check_codex_cli`, and 1 more.

[`config/agents/codex/setup.sh`](https://github.com/quirq-ai/xo-cowork-api/blob/main/config/agents/codex/setup.sh) · code · 10362 bytes

### troubleshoot.py

Check the live codex install against its manifest.json paths. Runnable as a script via `if
__name__ == '__main__'`. Classes: `Report`. Functions: `expand`, `load_json`,
`check_install`, `check_config_file`, `check_env_file`, `main`.

[`config/agents/codex/troubleshoot.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/config/agents/codex/troubleshoot.py) · code · 5754 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
