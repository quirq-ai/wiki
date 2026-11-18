<!-- quirq-wiki-generated repo=xo-space dir=utils/commands -->

# xo-space / utils/commands

Source: [utils/commands](https://github.com/quirq-ai/xo-space/tree/main/utils/commands) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Subprocess command-runner utility. Classes: `CommandResult`, `LineTooLong`, `LiveProcess`,
`_StreamProtocol`, `StreamProcess`, `CommandSpecError`, `CommandSpec`, `PtyProcess`.
Functions: `spawn_detached`, `archive_path_for`, `run`, `run_watched`, `run_sync`,
`run_chain`, `live_processes`, `process_start_ticks`, and 9 more.

[`utils/commands/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/utils/commands/__init__.py) · code · 74275 bytes

### scheduler.py

Manual and fixed-interval commands: the job store and the tick. Classes: `SchedulerError`,
`UnknownJobError`, `JobRunningError`, `ConcurrencyLimitError`, `AgentJobsUnavailable`,
`_Run`, `TickReport`. Functions: `jobs_file`, `state_file`, `runs_file`, `log_file`,
`scheduler_enabled`, `max_concurrent`, `now_utc`, `stamp`, and 20 more.

[`utils/commands/scheduler.py`](https://github.com/quirq-ai/xo-space/blob/main/utils/commands/scheduler.py) · code · 48782 bytes

_Generated 2026-11-18 14:40 UTC from `main`._
