<!-- quirq-wiki-generated repo=depot dir=tests -->

# depot / tests

Source: [tests](https://github.com/quirq-ai/depot/tree/main/tests) in [depot](https://github.com/quirq-ai/depot).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### conftest.py

Python module `conftest.py`. Functions: `_isolated`. Contains tests.

[`tests/conftest.py`](https://github.com/quirq-ai/depot/blob/main/tests/conftest.py) · code · 274 bytes

### test_build.py

V0-DEP-03: qq build and qq test run the same adapter actions as CI. Functions:
`parity_adapters`, `repo`, `junit`, `test_local_and_ci_junit_match`,
`test_failures_match_too`, `test_build_only_builds`, `test_outside_a_repo`,
`test_synced_toolchains_are_passed`. Contains tests.

[`tests/test_build.py`](https://github.com/quirq-ai/depot/blob/main/tests/test_build.py) · code · 3578 bytes

### test_change.py

V0-DEP-04: qq upload, try, land and status over a fake gh and a fake qqgate. Functions:
`git`, `world`, `qq`, `wait_for`, `notify_cmd`,
`test_try_returns_a_run_id_at_once_and_the_verdict_is_pushed_later`,
`test_the_verdict_is_pushed_even_if_the_verdicts_directory_goes`,
`test_a_red_check_is_pushed_as_refused`, and 18 more. Contains tests.

[`tests/test_change.py`](https://github.com/quirq-ai/depot/blob/main/tests/test_change.py) · code · 15734 bytes

### test_cli.py

Python module `test_cli.py`. Functions: `test_version`, `test_no_command_prints_help`,
`test_plugin_subcommand`, `test_pin_error_exits_2`, `test_broken_plugin_is_skipped`.
Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/depot/blob/main/tests/test_cli.py) · code · 1599 bytes

### test_codeowners.py

Python module `test_codeowners.py`. Functions:
`test_codeowners_names_suraj_for_exactly_the_trust_paths`. Contains tests.

[`tests/test_codeowners.py`](https://github.com/quirq-ai/depot/blob/main/tests/test_codeowners.py) · code · 847 bytes

### test_fresh_machine.py

V0-DEP-01 done-when: on a fresh machine qq installs and runs the version the repo pins.
Functions: `git`, `mirror`, `fresh_machine`, `consumer`, `qq`,
`test_installs_and_runs_pinned_version`, `test_pin_by_commit`,
`test_outside_a_repo_runs_the_launcher`, and 1 more. Contains tests.

[`tests/test_fresh_machine.py`](https://github.com/quirq-ai/depot/blob/main/tests/test_fresh_machine.py) · code · 4784 bytes

### test_pin.py

Python module `test_pin.py`. Functions: `write_manifest`, `test_find_manifest_walks_up`,
`test_no_manifest_no_pin`, `test_manifest_without_qq_table`, `test_reads_pin`,
`test_invalid_manifest_is_an_error`, `test_is_self`, `test_key`, and 12 more. Contains
tests.

[`tests/test_pin.py`](https://github.com/quirq-ai/depot/blob/main/tests/test_pin.py) · code · 8318 bytes

### test_sync.py

V0-DEP-02: qq sync and qq fetch get a repo's pinned toolchains and dependencies. Classes:
`Registry`. Functions: `parity_adapters`, `sha256`, `tool_tarball`, `git`, `dep_repo`,
`product`, `test_fresh_clone_is_buildable_after_sync`, `test_test_fails_without_sync`, and
26 more. Contains tests.

[`tests/test_sync.py`](https://github.com/quirq-ai/depot/blob/main/tests/test_sync.py) · code · 19260 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
