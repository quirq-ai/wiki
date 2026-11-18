<!-- quirq-wiki-generated repo=xo-space dir=scripts -->

# xo-space / scripts

Source: [scripts](https://github.com/quirq-ai/xo-space/tree/main/scripts) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### check_plugin_sync.sh

The Claude Code plugin (plugin/) and the Codex plugin (plugins/quirq/) share discovery logic
that must not drift. Run from the repo root; exits non-zero with a diff when the copies
disagree. Shebang `#!/usr/bin/env bash`. Functions: `compare`.

[`scripts/check_plugin_sync.sh`](https://github.com/quirq-ai/xo-space/blob/main/scripts/check_plugin_sync.sh) · code · 546 bytes

### check_route_parity.py

Route-parity guard for the agent-modular broker. Runnable as a script via `if __name__ ==
'__main__'`. Functions: `discover_agents`, `probe`, `main`.

[`scripts/check_route_parity.py`](https://github.com/quirq-ai/xo-space/blob/main/scripts/check_route_parity.py) · code · 5490 bytes

### install_shared_deps.sh

scripts/install_shared_deps.sh — install shared system deps once at boot. Shebang
`#!/usr/bin/env bash`. Functions: `log`, `log_success`, `log_warn`, `log_error`,
`apt_update_once`, `install_rclone`, `install_gh`, `install_gnupg`, `start_argus_daemon`.

[`scripts/install_shared_deps.sh`](https://github.com/quirq-ai/xo-space/blob/main/scripts/install_shared_deps.sh) · code · 5915 bytes

### list_runtime_mounts.py

Print host directories the Docker installer should expose to the runtime. Runnable as a
script via `if __name__ == '__main__'`. Functions: `runtime_mounts`.

[`scripts/list_runtime_mounts.py`](https://github.com/quirq-ai/xo-space/blob/main/scripts/list_runtime_mounts.py) · code · 2160 bytes

### storm_audit.py

Storm's audit: the numbers each step of the storm rebuild is measured against (the plan's §3
targets, the review's §5 table), read from a store. Runnable as a script via `if __name__ ==
'__main__'`. Functions: `open_read_only`, `since_time`, `audit`, `render`, `main`.

[`scripts/storm_audit.py`](https://github.com/quirq-ai/xo-space/blob/main/scripts/storm_audit.py) · code · 16806 bytes

### storm_load.py

Opt-in subscription load rehearsal on a new isolated store; never starts a server. Runnable
as a script via `if __name__ == '__main__'`. Functions: `subscription_ready`, `rehearsal`,
`main`.

[`scripts/storm_load.py`](https://github.com/quirq-ai/xo-space/blob/main/scripts/storm_load.py) · code · 5846 bytes

### storm_rehearse_upgrade.py

Rehearse this build's store upgrade on a copy of a real store. Runnable as a script via `if
__name__ == '__main__'`. Functions: `backup`, `facts`, `checks`, `open_copy`, `rehearse`,
`describe`, `main`.

[`scripts/storm_rehearse_upgrade.py`](https://github.com/quirq-ai/xo-space/blob/main/scripts/storm_rehearse_upgrade.py) · code · 7501 bytes

_Generated 2026-11-18 14:40 UTC from `main`._
