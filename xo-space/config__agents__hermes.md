<!-- quirq-wiki-generated repo=xo-space dir=config/agents/hermes -->

# xo-space / config/agents/hermes

Source: [config/agents/hermes](https://github.com/quirq-ai/xo-space/tree/main/config/agents/hermes) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### agent.sh

Hermes OneClick Setup & Gateway Manager Combined setup + gateway management in a single
script. Modeled after openclaw.sh but targeting Hermes Agent. Shebang `#!/usr/bin/env bash`.
Functions: `log`, `log_success`, `log_warn`, `log_error`, `load_env`, `rotate_log`,
`acquire_lock`, `clean_stale_pid`, `find_orphan_gateways`, `kill_orphan_gateways`, and 22
more.

[`config/agents/hermes/agent.sh`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/hermes/agent.sh) · code · 33932 bytes

### capabilities.json

JSON document `capabilities.json` whose top-level keys are `models`, `data`, `channels`,
`secrets`, `remote_control`. Structured data consumed by the surrounding app or tooling.

[`config/agents/hermes/capabilities.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/hermes/capabilities.json) · code · 681 bytes

### manifest.json

JSON document `manifest.json` whose top-level keys are `name`, `binary`, `install_url`,
`home_dir`, `env_file`, `config_file`, `agents_dir`, `provisioning_log`, `cwd`,
`cli_timeout_seconds`, `api`, `model_prefix`, and 6 more. Structured data consumed by the
surrounding app or tooling.

[`config/agents/hermes/manifest.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/hermes/manifest.json) · code · 4726 bytes

### settings.json

JSON document `settings.json` whose top-level keys are `gateway_token_env`, `timeout`,
`startup_skills`. Structured data consumed by the surrounding app or tooling.

[`config/agents/hermes/settings.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/hermes/settings.json) · code · 109 bytes

### setup.sh

config/agents/hermes/setup.sh — install + configure Hermes. Shebang `#!/usr/bin/env bash`.
Functions: `log`, `log_success`, `log_warn`, `log_error`, `install_apt_prereqs`,
`install_uv`, `install_node`, `write_env_file`, `export_channel_flags`,
`export_whatsapp_creds`, and 1 more.

[`config/agents/hermes/setup.sh`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/hermes/setup.sh) · code · 11702 bytes

### troubleshoot.py

Cross-check xo-project intent against the live Hermes install. Runnable as a script via `if
__name__ == '__main__'`. Classes: `Report`. Functions: `expand`, `load_json`,
`parse_env_file`, `dig`, `enabled_keys`, `env_var_present`, `check_install`,
`check_config_file`, and 5 more.

[`config/agents/hermes/troubleshoot.py`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/hermes/troubleshoot.py) · code · 12184 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
