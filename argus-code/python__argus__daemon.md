<!-- quirq-wiki-generated repo=argus-code dir=python/argus/daemon -->

# argus-code / python/argus/daemon

Source: [python/argus/daemon](https://github.com/quirq-ai/argus-code/tree/main/python/argus/daemon) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`python/argus/daemon/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/daemon/__init__.py) · empty · 0 bytes

### logging.py

argusd log file: rotating handler + tail/follow helpers. Functions: `log_path`,
`setup_file_logging`, `tail_lines`, `follow`.

[`python/argus/daemon/logging.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/daemon/logging.py) · code · 3293 bytes

### pidfile.py

`~/.argus/argusd.pid` lifecycle, liveness, and identity checks. Classes: `PidRecord`.
Functions: `path`, `write`, `read_record`, `read`, `remove`, `check`, `is_ours`, `live_pid`,
and 3 more.

[`python/argus/daemon/pidfile.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/daemon/pidfile.py) · code · 9319 bytes

### process.py

Spawn the daemon as a detached process; stop a running daemon. Functions: `daemon_argv`,
`spawn_daemon`, `wait_for_pidfile`, `stop_daemon`.

[`python/argus/daemon/process.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/daemon/process.py) · code · 4236 bytes

### service.py

Blocking foreground daemon mode (`argus daemon run`). Classes: `DaemonAlreadyRunning`.
Functions: `run_foreground`.

[`python/argus/daemon/service.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/daemon/service.py) · code · 2707 bytes

_Generated 2026-10-31 11:17 UTC from `main`._
