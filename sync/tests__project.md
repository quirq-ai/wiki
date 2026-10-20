<!-- quirq-wiki-generated repo=sync dir=tests/project -->

# sync / tests/project

Source: [tests/project](https://github.com/quirq-ai/sync/tree/main/tests/project) in [sync](https://github.com/quirq-ai/sync).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### conftest.py

A small world of real git repos: a bare origin, a seed clone that pushes to it, and a
projects folder holding the working clone app that the commands act on. Classes: `World`.
Functions: `git`, `commit`, `git_identity`, `world`, `run`. Contains tests.

[`tests/project/conftest.py`](https://github.com/quirq-ai/sync/blob/main/tests/project/conftest.py) · code · 2507 bytes

### test_project_add.py

Python module `test_project_add.py`. Functions: `leftovers`,
`test_add_clones_a_repo_with_no_manifest`, `test_existing_folder_is_refused_and_kept`,
`test_failed_clone_leaves_nothing_behind`,
`test_a_half_clone_from_an_earlier_run_is_replaced`,
`test_url_that_reads_as_an_option_is_usage`, `test_name_that_is_a_path_is_usage`.

[`tests/project/test_project_add.py`](https://github.com/quirq-ai/sync/blob/main/tests/project/test_project_add.py) · code · 1949 bytes

### test_project_check.py

Python module `test_project_check.py`. Functions: `only`, `test_current`,
`test_remote_moved_is_fetch_needed_and_check_fetches_nothing`, `test_behind_once_fetched`,
`test_ahead_has_nothing_to_receive`, `test_diverged`,
`test_unreachable_remote_is_a_failure_not_current`, `test_folder_of_clones`, and 5 more.
Contains tests.

[`tests/project/test_project_check.py`](https://github.com/quirq-ai/sync/blob/main/tests/project/test_project_check.py) · code · 3811 bytes

### test_project_cli.py

How project hangs under a parser: qqsync's own, and one built the way qq sync builds its.
Functions: `qq_sync_parser`, `test_bare_sync_is_left_alone`, `test_qq_sync_project_check`,
`test_options_before_the_subcommand_are_kept`,
`test_update_options_on_a_subcommand_are_usage`,
`test_errors_go_to_stderr_with_the_caller_s_prefix`. Contains tests.

[`tests/project/test_project_cli.py`](https://github.com/quirq-ai/sync/blob/main/tests/project/test_project_cli.py) · code · 1765 bytes

### test_project_github.py

The GitHub backend against a scripted gh: what it asks for, and how it reads the answers.
Classes: `FakeGh`.

[`tests/project/test_project_github.py`](https://github.com/quirq-ai/sync/blob/main/tests/project/test_project_github.py) · code · 7927 bytes

### test_project_identity.py

Python module `test_project_identity.py`. Functions: `test_normalize`, `test_default_name`.
Contains tests.

[`tests/project/test_project_identity.py`](https://github.com/quirq-ai/sync/blob/main/tests/project/test_project_identity.py) · code · 1183 bytes

### test_project_update.py

Python module `test_project_update.py`.

[`tests/project/test_project_update.py`](https://github.com/quirq-ai/sync/blob/main/tests/project/test_project_update.py) · code · 5980 bytes

_Generated 2026-10-20 10:30 UTC from `main`._
