<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/project_sharing -->

# xo-space / services/cowork_agent/project_sharing

Source: [services/cowork_agent/project_sharing](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/project_sharing) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Cross-workspace commit relay client (pull-based, workspace-anchored). Functions: `log_line`.

[`services/cowork_agent/project_sharing/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/project_sharing/__init__.py) · code · 865 bytes

### clone.py

Clone a repo that was shared with this workspace into the projects root. Classes:
`CloneResult`. Functions: `temp_dir_for`, `cleanup_stale_temp_dirs`, `classify_failure`,
`clone_shared_repo`.

[`services/cowork_agent/project_sharing/clone.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/project_sharing/clone.py) · code · 7820 bytes

### config.py

The relay's only reader of environment and auth. Functions: `workspace_id`, `enabled`,
`watch_branch`, `poll_interval`, `jitter_ratio`, `auto_clone`, `clone_timeout`,
`jittered_interval`, and 2 more.

[`services/cowork_agent/project_sharing/config.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/project_sharing/config.py) · code · 2634 bytes

### git_ops.py

Async git plumbing for the commit relay. Every function is failure-tolerant: git errors
return None/False/empty — the relay must degrade, never crash. Functions: `origin_url`,
`remote_head`, `local_remote_head`, `enumerate_hashes`, `fetch_origin`, `commit_present`,
`recent_commits`, `clone`, and 3 more.

[`services/cowork_agent/project_sharing/git_ops.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/project_sharing/git_ops.py) · code · 6476 bytes

### poller.py

The relay loop. One flat cadence (PROJECT_SHARING_POLL_INTERVAL_SECONDS, default 60,
jittered) or sooner when nudged. Functions: `reset_for_tests`, `nudge`, `local_repo_map`,
`run_tick`, `wait_for_next_tick`, `run_relay_poller`.

[`services/cowork_agent/project_sharing/poller.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/project_sharing/poller.py) · code · 11931 bytes

### repo_identity.py

Canonical repo identity for the commit relay. Functions: `normalize_repo`.

[`services/cowork_agent/project_sharing/repo_identity.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/project_sharing/repo_identity.py) · code · 1280 bytes

### service.py

Router-facing facade for the relay. Raises typed errors; knows nothing about HTTP. Classes:
`RelayError`, `ProjectNotFound`, `NoGitOrigin`, `WorkspaceUnconfigured`, `ApplyFailed`,
`SwarmError`. Functions: `status_snapshot`, `project_commits`, `apply`, `check_now`,
`members`, `share`, `revoke`.

[`services/cowork_agent/project_sharing/service.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/project_sharing/service.py) · code · 6122 bytes

### state.py

Per-repo relay state, machine-local, under ~/.quirq/sharing/. Functions: `relay_state_dir`,
`state_path`, `load_last_reported`, `save_last_reported`, `load_cloned_at`,
`save_cloned_at`, `load_cursor`, `save_cursor`, and 4 more.

[`services/cowork_agent/project_sharing/state.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/project_sharing/state.py) · code · 5059 bytes

### status.py

In-memory relay status. Volatile by design: restarts empty and repopulates on the first
tick. Functions: `reset`, `set_parked`, `record_poll`, `record_available`, `record_fetch`,
`record_synced`, `record_clone_started`, `record_clone_result`, and 6 more.

[`services/cowork_agent/project_sharing/status.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/project_sharing/status.py) · code · 8464 bytes

### watcher.py

Publish step: detect that origin/ advanced, enumerate the new hashes, report {repo,
workspace_id, commits} to swarm. Functions: `run_tick_repo`.

[`services/cowork_agent/project_sharing/watcher.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/project_sharing/watcher.py) · code · 2821 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
