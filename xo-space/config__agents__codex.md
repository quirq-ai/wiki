<!-- quirq-wiki-generated repo=xo-space dir=config/agents/codex -->

# xo-space / config/agents/codex

Source: [config/agents/codex](https://github.com/quirq-ai/xo-space/tree/main/config/agents/codex) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### capabilities.json

JSON document `capabilities.json` whose top-level keys are `models`, `data`, `channels`,
`secrets`, `remote_control`. Structured data consumed by the surrounding app or tooling.

[`config/agents/codex/capabilities.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/codex/capabilities.json) · code · 685 bytes

### manifest.json

JSON document `manifest.json` whose top-level keys are `name`, `binary`, `install_url`,
`home_dir`, `env_file`, `config_file`, `agents_dir`, `workspace_dir`, `provisioning_log`,
`precreate_home_for_skills`, `cwd`, `cli_timeout_seconds`, and 5 more. Structured data
consumed by the surrounding app or tooling.

[`config/agents/codex/manifest.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/codex/manifest.json) · code · 1028 bytes

### settings.json

JSON document `settings.json` whose top-level keys are `cli_path_env`, `cowork_root`,
`timeout`. Structured data consumed by the surrounding app or tooling.

[`config/agents/codex/settings.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/codex/settings.json) · code · 92 bytes

### setup.sh

config/agents/codex/setup.sh — install + configure the codex (OpenAI Codex CLI) agent.
Shebang `#!/usr/bin/env bash`. Functions: `log`, `log_success`, `log_warn`, `log_error`,
`prov`, `install_apt_prereqs`, `install_node`, `write_repo_env_file`, `seed_agent_env`,
`check_codex_cli`, and 1 more.

[`config/agents/codex/setup.sh`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/codex/setup.sh) · code · 10522 bytes

### troubleshoot.py

Check the live codex install against its manifest.json paths. Runnable as a script via `if
__name__ == '__main__'`. Classes: `Report`. Functions: `expand`, `load_json`,
`check_install`, `check_config_file`, `check_env_file`, `main`.

[`config/agents/codex/troubleshoot.py`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/codex/troubleshoot.py) · code · 5749 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
