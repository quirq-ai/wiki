<!-- quirq-wiki-generated repo=argus-code dir=tests/daemon -->

# argus-code / tests/daemon

Source: [tests/daemon](https://github.com/quirq-ai/argus-code/tree/main/tests/daemon) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/daemon/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/daemon/__init__.py) · empty · 0 bytes

### test_logs.py

argusd.log setup, tail, and rotation-aware follow. Functions: `test_log_path`,
`test_tail_lines_returns_last_n`, `test_tail_lines_missing_file`,
`test_setup_file_logging_writes_to_argusd_log`, `test_follow_survives_rotation`. Contains
tests.

[`tests/daemon/test_logs.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/daemon/test_logs.py) · code · 2064 bytes

### test_no_claude_dir.py

argusd must survive a missing `~/.claude` — issue #11.

[`tests/daemon/test_no_claude_dir.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/daemon/test_no_claude_dir.py) · code · 5931 bytes

### test_pidfile.py

PID file lifecycle + cross-platform liveness. Functions: `test_write_read_remove_roundtrip`,
`test_read_returns_none_on_garbage`, `test_remove_is_idempotent`,
`test_is_running_true_for_current_process`, `test_is_running_false_for_dead_pid`. Contains
tests.

[`tests/daemon/test_pidfile.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/daemon/test_pidfile.py) · code · 1183 bytes

### test_pidfile_identity.py

A stale PID file must never make argus act on an unrelated process (H6). Classes:
`_FakeKernel32`, `_FakeKernel32Image`.

[`tests/daemon/test_pidfile_identity.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/daemon/test_pidfile_identity.py) · code · 10132 bytes

### test_process.py

Detached spawn + stop. Subprocess/Win32 calls are mocked. Classes: `_FakePopen`. Functions:
`test_spawn_daemon_uses_python_module_invocation`,
`test_stop_daemon_returns_false_when_not_running`,
`test_stop_daemon_signals_live_pid_posix`, `test_stop_daemon_terminates_live_pid_windows`.
Contains tests.

[`tests/daemon/test_process.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/daemon/test_process.py) · code · 3036 bytes

### test_service.py

Foreground daemon entry point: collision guard, PID lifecycle, signals. Classes:
`_FakeRuntime`. Functions: `test_run_foreground_writes_pid_runs_and_cleans_up`,
`test_run_foreground_refuses_when_live_daemon_exists`. Contains tests.

[`tests/daemon/test_service.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/daemon/test_service.py) · code · 2640 bytes

### test_spawn_safe_path.py

The detached daemon must not import from the caller's working directory. Functions:
`test_daemon_argv_disables_the_cwd_path_entry`, `test_dash_P_actually_blocks_cwd_shadowing`.
Contains tests.

[`tests/daemon/test_spawn_safe_path.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/daemon/test_spawn_safe_path.py) · code · 2438 bytes

### test_yield.py

argus start chooses read_only based on daemon liveness. Functions:
`test_live_daemon_forces_read_only`, `test_stale_pid_is_not_read_only`,
`test_absent_pid_is_not_read_only`. Contains tests.

[`tests/daemon/test_yield.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/daemon/test_yield.py) · code · 815 bytes

_Generated 2026-10-23 10:35 UTC from `main`._
