<!-- quirq-wiki-generated repo=remote-build dir=src/qqrbe -->

# remote-build / src/qqrbe

Source: [src/qqrbe](https://github.com/quirq-ai/remote-build/tree/main/src/qqrbe) in [remote-build](https://github.com/quirq-ai/remote-build).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

quirq infra executor interface and action cache (quirq-ai/remote-build).

[`src/qqrbe/__init__.py`](https://github.com/quirq-ai/remote-build/blob/main/src/qqrbe/__init__.py) · code · 79 bytes

### cache.py

The local action cache and the fallback counters (V0-RBE-02). Classes: `Fallback`, `Stats`,
`ActionCache`, `CachingExecutor`, `FallbackExecutor`. Functions: `_hex`, `_note`,
`_atomic_write`.

[`src/qqrbe/cache.py`](https://github.com/quirq-ai/remote-build/blob/main/src/qqrbe/cache.py) · code · 11601 bytes

### cli.py

qqrbe: run REAPI-shaped actions on an executor backend. Runnable as a script via `if
__name__ == '__main__'`. Functions: `parse_options`, `cache_dir`, `build_executor`,
`cmd_exec`, `cmd_selftest`, `cmd_compare`, `cmd_worker`, `cmd_worker_source`, and 3 more.

[`src/qqrbe/cli.py`](https://github.com/quirq-ai/remote-build/blob/main/src/qqrbe/cli.py) · code · 7776 bytes

### errors.py

Typed executor failures. Each has a stable reason, the key fallbacks are counted by.
Classes: `ExecutorError`, `BadRequest`, `BackendNotFound`, `BackendUnavailable`,
`RemoteExecutionFailed`, `InputRootMismatch`, `PlatformMismatch`.

[`src/qqrbe/errors.py`](https://github.com/quirq-ai/remote-build/blob/main/src/qqrbe/errors.py) · code · 1446 bytes

### executor.py

The executor interface: run one REAPI-shaped action on a backend, get an ActionResult.
Classes: `ActionResult`, `Executor`. Functions: `load`, `available`.

[`src/qqrbe/executor.py`](https://github.com/quirq-ai/remote-build/blob/main/src/qqrbe/executor.py) · code · 4009 bytes

### request.py

What an executor is asked to run, and how it travels between machines. Classes: `Source`,
`ExecRequest`. Functions: `action_from_json`, `input_files`, `verify_input_root`,
`check_platform`.

[`src/qqrbe/request.py`](https://github.com/quirq-ai/remote-build/blob/main/src/qqrbe/request.py) · code · 8492 bytes

### selftest.py

A small deterministic action, to show every backend gives the same output digest for it.
Functions: `host_pin`, `request`.

[`src/qqrbe/selftest.py`](https://github.com/quirq-ai/remote-build/blob/main/src/qqrbe/selftest.py) · code · 1709 bytes

### worker.py

The remote side of a backend: run one request on this machine and pack the result.
Functions: `read_request`, `run`, `source_outputs`.

[`src/qqrbe/worker.py`](https://github.com/quirq-ai/remote-build/blob/main/src/qqrbe/worker.py) · code · 4088 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
