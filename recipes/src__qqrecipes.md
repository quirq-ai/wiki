<!-- quirq-wiki-generated repo=recipes dir=src/qqrecipes -->

# recipes / src/qqrecipes

Source: [src/qqrecipes](https://github.com/quirq-ai/recipes/tree/main/src/qqrecipes) in [recipes](https://github.com/quirq-ai/recipes).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

qqrecipes: one adapter per target kind, found by one loader, emitting REAPI-shaped actions.

[`src/qqrecipes/__init__.py`](https://github.com/quirq-ai/recipes/blob/main/src/qqrecipes/__init__.py) · code · 121 bytes

### bench.py

Run a bench action: start its service, measure, tear it down (V0-PRF-01). Classes:
`BenchResult`. Functions: `timed_get`, `nearest_rank`, `summarize`, `run`, `write_junit`.

[`src/qqrecipes/bench.py`](https://github.com/quirq-ai/recipes/blob/main/src/qqrecipes/bench.py) · code · 6490 bytes

### cli.py

qqrecipes: list adapters, check them against infra-config, plan and run a goal. Runnable as
a script via `if __name__ == '__main__'`. Functions: `cmd_kinds`, `check_kinds`,
`cmd_check_kinds`, `cmd_plan`, `parse_toolchains`, `cmd_execute`, `serve_foreground`,
`main`.

[`src/qqrecipes/cli.py`](https://github.com/quirq-ai/recipes/blob/main/src/qqrecipes/cli.py) · code · 10580 bytes

### contract.py

The adapter contract (plan §5.2): capabilities, actions, and what an adapter promises.
Classes: `State`, `ContractError`, `Target`, `Context`, `Service`, `Bench`, `Action`,
`Plan`, and 1 more. Functions: `is_placeholder_digest`, `host_platform`,
`recipes_fingerprint`.

[`src/qqrecipes/contract.py`](https://github.com/quirq-ai/recipes/blob/main/src/qqrecipes/contract.py) · code · 14482 bytes

### digest.py

Content digests for input roots and outputs. Classes: `NoMatch`. Functions: `normalize`,
`matches`, `list_files`, `file_sha`, `files_digest`, `input_root`, `path_digest`.

[`src/qqrecipes/digest.py`](https://github.com/quirq-ai/recipes/blob/main/src/qqrecipes/digest.py) · code · 5319 bytes

### loader.py

The one loader: a kind name resolves to its adapter. Classes: `AdapterNotFound`. Functions:
`module_name`, `kind_name`, `load`, `available`, `adapter_dir`.

[`src/qqrecipes/loader.py`](https://github.com/quirq-ai/recipes/blob/main/src/qqrecipes/loader.py) · code · 2890 bytes

### plan.py

From a manifest and a goal to an ordered list of Plans. Functions: `stages`, `context`,
`order`, `plan`.

[`src/qqrecipes/plan.py`](https://github.com/quirq-ai/recipes/blob/main/src/qqrecipes/plan.py) · code · 2735 bytes

### runner.py

Run actions on this machine. Core file: names no language or tool. Classes: `Env`,
`ActionResult`. Functions: `slug`, `run`, `junit_path`, `native_junit`,
`junit_has_failures`, `write_junit`.

[`src/qqrecipes/runner.py`](https://github.com/quirq-ai/recipes/blob/main/src/qqrecipes/runner.py) · code · 6553 bytes

### service.py

Deploy a service action to a canary test environment, probe it, tear it down (V0-REC-05).
Classes: `Probe`, `Deployment`, `_SameHostRedirects`. Functions: `free_port`, `get`,
`start`, `wait_ready`, `probe`, `group_alive`, `stop`, `deploy_and_probe`, and 1 more.

[`src/qqrecipes/service.py`](https://github.com/quirq-ai/recipes/blob/main/src/qqrecipes/service.py) · code · 9195 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
