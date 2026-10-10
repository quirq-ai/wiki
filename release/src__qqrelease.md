<!-- quirq-wiki-generated repo=release dir=src/qqrelease -->

# release / src/qqrelease

Source: [src/qqrelease](https://github.com/quirq-ai/release/tree/main/src/qqrelease) in [release](https://github.com/quirq-ai/release).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

quirq infra (qq) release: lkgr, channel pointers, rollback and the daily canary.

[`src/qqrelease/__init__.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/__init__.py) · code · 109 bytes

### canary.py

V0-REL-03: the daily canary pipeline v0 (plan §5.8). Classes: `Stage`, `CouldNotRun`,
`Selection`, `CanaryRun`. Functions: `canary_repos`, `held_path`, `is_held`, `release_hold`,
`errors_path`, `run_path`, `select`, `artifact_digest`, and 9 more.

[`src/qqrelease/canary.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/canary.py) · code · 35990 bytes

### channels.py

V0-REL-02: channel pointers and rollback. Functions: `ref_of`, `channel_cfg`, `check_repo`,
`source_ref`, `check_automatic`, `plan_promote`, `rollback_target`, `named_since`, and 7
more.

[`src/qqrelease/channels.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/channels.py) · code · 10946 bytes

### cli.py

qqrelease: release's command line. qq channel ... Runnable as a script via `if __name__ ==
'__main__'`. Functions: `cmd_lkgr`, `cmd_repos`, `cmd_promote`, `cmd_rollback`, `cmd_show`,
`add_channel`, `cmd_canary_plan`, `cmd_canary_stages`, and 10 more.

[`src/qqrelease/cli.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/cli.py) · code · 20508 bytes

### config.py

infra-config, read through its own loader and validator at the commit pinned in pins.toml.
Functions: `load`, `repos`, `backend_name`, `lkgr_ref`.

[`src/qqrelease/config.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/config.py) · code · 1783 bytes

### errors.py

Python module `errors.py`. Classes: `ReleaseError`.

[`src/qqrelease/errors.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/errors.py) · code · 122 bytes

### executor.py

The release executor: the only code that moves lkgr and channels/*. Functions: `now_iso`,
`plan`, `finish_pending`, `move`.

[`src/qqrelease/executor.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/executor.py) · code · 7163 bytes

### lkgr.py

V0-REL-01: advance lkgr to the newest main commit whose required post-submit builders are
all green. Classes: `Decision`. Functions: `all_green`, `any_red`, `decide`.

[`src/qqrelease/lkgr.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/lkgr.py) · code · 4181 bytes

### operations.py

Operations: every external effect is keyed and recorded before it happens (plan §2 rule 5,
§5.4). Classes: `Operation`, `Pointer`. Functions: `key_of`.

[`src/qqrelease/operations.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/operations.py) · code · 4544 bytes

### report.py

V0-REL-04: the daily canary report (plan §5.8 "Everything else goes into one daily canary
report"). Functions: `title`, `build`, `write`.

[`src/qqrelease/report.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/report.py) · code · 4621 bytes

### store.py

The release state store: the record of every pointer and every operation. Classes: `Store`.
Functions: `_check_name`, `_read_json`.

[`src/qqrelease/store.py`](https://github.com/quirq-ai/release/blob/main/src/qqrelease/store.py) · code · 7068 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
