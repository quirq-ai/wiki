<!-- quirq-wiki-generated repo=xo-space dir=config/agents/openclaw -->

# xo-space / config/agents/openclaw

Source: [config/agents/openclaw](https://github.com/quirq-ai/xo-space/tree/main/config/agents/openclaw) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### agent.sh

OpenClaw OneClick Setup & Gateway Manager Combined setup + gateway management in a single
script. Shebang `#!/usr/bin/env bash`. Functions: `log`, `log_success`, `log_warn`,
`log_error`, `load_env`, `rotate_log`, `acquire_lock`, `clean_stale_pid`,
`find_orphan_gateways`, `kill_orphan_gateways`, and 22 more.

[`config/agents/openclaw/agent.sh`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/openclaw/agent.sh) · code · 36527 bytes

### capabilities.json

JSON document `capabilities.json` whose top-level keys are `models`, `data`, `channels`,
`secrets`, `remote_control`. Structured data consumed by the surrounding app or tooling.

[`config/agents/openclaw/capabilities.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/openclaw/capabilities.json) · code · 682 bytes

### manifest.json

JSON document `manifest.json` whose top-level keys are `name`, `binary`, `install_url`,
`home_dir`, `env_file`, `config_file`, `agents_dir`, `workspace_dir`, `provisioning_log`,
`cwd`, `cli_timeout_seconds`, `api`, and 7 more. Structured data consumed by the surrounding
app or tooling.

[`config/agents/openclaw/manifest.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/openclaw/manifest.json) · code · 4829 bytes

### settings.json

JSON document `settings.json` whose top-level keys are `cli_path_env`, `gateway_token_env`,
`anthropic_api_key_env`, `timeout`, `startup_skills`. Structured data consumed by the
surrounding app or tooling.

[`config/agents/openclaw/settings.json`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/openclaw/settings.json) · code · 206 bytes

### setup.sh

config/agents/openclaw/setup.sh — install + configure OpenClaw. Shebang `#!/usr/bin/env
bash`. Functions: `log`, `log_success`, `log_warn`, `log_error`, `install_apt_prereqs`,
`install_node`, `write_env_file`, `export_channel_flags`, `write_whatsapp_creds`,
`run_openclaw_setup`.

[`config/agents/openclaw/setup.sh`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/openclaw/setup.sh) · code · 10083 bytes

### troubleshoot.py

Cross-check xo-project intent against the live OpenClaw install. Runnable as a script via
`if __name__ == '__main__'`. Classes: `Report`. Functions: `expand`, `load_json`,
`parse_env_file`, `dig`, `enabled_keys`, `check_install`, `check_config_file`,
`check_env_file`, and 3 more.

[`config/agents/openclaw/troubleshoot.py`](https://github.com/quirq-ai/xo-space/blob/main/config/agents/openclaw/troubleshoot.py) · code · 9147 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
