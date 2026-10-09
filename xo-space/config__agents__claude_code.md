<!-- quirq-wiki-generated repo=xo-space dir=config/agents/claude_code -->

# xo-space / config/agents/claude_code

Source: [config/agents/claude_code](https://github.com/quirq-ai/xo-space/tree/main/config/agents/claude_code) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### capabilities.json

JSON document `capabilities.json` whose top-level keys are `models`, `data`, `channels`,
`secrets`, `remote_control`. Structured data consumed by the surrounding app or tooling.

[`config/agents/claude_code/capabilities.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/claude_code/capabilities.json) · code · 684 bytes

### manifest.json

JSON document `manifest.json` whose top-level keys are `name`, `binary`, `install_url`,
`home_dir`, `env_file`, `config_file`, `agents_dir`, `workspace_dir`, `provisioning_log`,
`precreate_home_for_skills`, `cwd`, `cli_timeout_seconds`, and 8 more. Structured data
consumed by the surrounding app or tooling.

[`config/agents/claude_code/manifest.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/claude_code/manifest.json) · code · 2169 bytes

### settings.json

JSON document `settings.json` whose top-level keys are `cli_path_env`, `cowork_root`,
`timeout`. Structured data consumed by the surrounding app or tooling.

[`config/agents/claude_code/settings.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/claude_code/settings.json) · code · 94 bytes

### setup.sh

config/agents/claude_code/setup.sh — install + configure the claude_code agent. Shebang
`#!/usr/bin/env bash`. Functions: `log`, `log_success`, `log_warn`, `log_error`,
`install_apt_prereqs`, `install_node`, `write_env_file`, `ensure_claude_cli`,
`install_login_guard`, `claude`, and 1 more.

[`config/agents/claude_code/setup.sh`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/claude_code/setup.sh) · code · 13614 bytes

### troubleshoot.py

Check the live claude_code install against its commands.json paths. Runnable as a script via
`if __name__ == '__main__'`. Classes: `Report`. Functions: `expand`, `load_json`,
`check_install`, `check_config_file`, `check_env_file`, `main`.

[`config/agents/claude_code/troubleshoot.py`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/claude_code/troubleshoot.py) · code · 5192 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
