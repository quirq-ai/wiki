<!-- quirq-wiki-generated repo=xo-space dir=config/agents/antigravity -->

# xo-space / config/agents/antigravity

Source: [config/agents/antigravity](https://github.com/quirq-ai/xo-space/tree/main/config/agents/antigravity) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### capabilities.json

JSON document `capabilities.json` whose top-level keys are `models`, `data`, `channels`,
`secrets`, `remote_control`. Structured data consumed by the surrounding app or tooling.

[`config/agents/antigravity/capabilities.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/antigravity/capabilities.json) · code · 457 bytes

### manifest.json

JSON document `manifest.json` whose top-level keys are `name`, `binary`, `install_url`,
`home_dir`, `env_file`, `config_file`, `agents_dir`, `workspace_dir`, `provisioning_log`,
`cwd`, `cli_timeout_seconds`, `api`, and 6 more. Structured data consumed by the surrounding
app or tooling.

[`config/agents/antigravity/manifest.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/antigravity/manifest.json) · code · 1835 bytes

### settings.json

JSON document `settings.json` whose top-level keys are `cli_path_env`, `timeout`,
`default_model`. Structured data consumed by the surrounding app or tooling.

[`config/agents/antigravity/settings.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/antigravity/settings.json) · code · 100 bytes

### setup.sh

config/agents/antigravity/setup.sh — install + configure the antigravity (agy) agent.
Shebang `#!/usr/bin/env bash`. Functions: `log`, `log_success`, `log_warn`, `log_error`,
`write_env_file`, `check_agy_cli`, `check_login`, `seed_onboarding_state`.

[`config/agents/antigravity/setup.sh`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/antigravity/setup.sh) · code · 10033 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
