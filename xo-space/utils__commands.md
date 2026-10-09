<!-- quirq-wiki-generated repo=xo-space dir=utils/commands -->

# xo-space / utils/commands

Source: [utils/commands](https://github.com/quirq-ai/xo-space/tree/main/utils/commands) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Subprocess command-runner utility. Classes: `CommandResult`, `CommandSpecError`,
`CommandSpec`. Functions: `spawn_detached`, `archive_path_for`, `run`, `run_sync`,
`run_chain`, `safe_arg`, `split_command`, `run_spec`, and 1 more.

[`utils/commands/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/utils/commands/__init__.py) · code · 34084 bytes

### scheduler.py

Manual and fixed-interval commands: the job store and the tick. Classes: `SchedulerError`,
`UnknownJobError`, `JobRunningError`, `ConcurrencyLimitError`, `_Run`, `TickReport`.
Functions: `jobs_file`, `state_file`, `runs_file`, `log_file`, `scheduler_enabled`,
`max_concurrent`, `now_utc`, `stamp`, and 13 more.

[`utils/commands/scheduler.py`](https://github.com/quirq-ai/xo-space/blob/main/utils/commands/scheduler.py) · code · 31571 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
