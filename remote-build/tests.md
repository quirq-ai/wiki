<!-- quirq-wiki-generated repo=remote-build dir=tests -->

# remote-build / tests

Source: [tests](https://github.com/quirq-ai/remote-build/tree/main/tests) in [remote-build](https://github.com/quirq-ai/remote-build).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### conftest.py

Python module `conftest.py`. Functions: `repo`. Contains tests.

[`tests/conftest.py`](https://github.com/quirq-ai/remote-build/blob/main/tests/conftest.py) · code · 371 bytes

### test_cache.py

Python module `test_cache.py`. Classes: `Counting`, `Down`. Functions: `pinned_image`,
`env`, `test_rerun_is_a_reported_hit_that_restores_outputs`, `test_changed_input_misses`,
`test_stale_request_is_refused_not_served_from_cache`,
`test_uncacheable_and_failed_actions_always_run`, `test_missing_blobs_are_a_miss`,
`test_fallback_is_typed_counted_and_reported`, and 9 more. Contains tests.

[`tests/test_cache.py`](https://github.com/quirq-ai/remote-build/blob/main/tests/test_cache.py) · code · 9811 bytes

### test_cli.py

Python module `test_cli.py`. Functions: `result`, `compare`,
`test_compare_passes_on_same_digests`,
`test_compare_fails_on_different_outputs_or_failures`, `test_selftest_local`,
`test_unknown_backend_is_exit_2`, `test_compare_checks_digests_against_files_here`. Contains
tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/remote-build/blob/main/tests/test_cli.py) · code · 1988 bytes

### test_executor.py

Python module `test_executor.py`. Functions: `test_backends_are_discovered`,
`test_unknown_backend_names_the_known_ones`,
`test_local_runs_the_selftest_deterministically`, `test_result_round_trips`. Contains tests.

[`tests/test_executor.py`](https://github.com/quirq-ai/remote-build/blob/main/tests/test_executor.py) · code · 1330 bytes

### test_github_backend.py

The github backend against a fake GitHub API whose "runner" is the real worker, run locally.
Classes: `FakeGitHub`.

[`tests/test_github_backend.py`](https://github.com/quirq-ai/remote-build/blob/main/tests/test_github_backend.py) · code · 11710 bytes

### test_repo.py

Repo-shape checks that hold from the first commit. Functions:
`test_codeowners_names_suraj_for_exactly_the_trust_paths`. Contains tests.

[`tests/test_repo.py`](https://github.com/quirq-ai/remote-build/blob/main/tests/test_repo.py) · code · 850 bytes

### test_request.py

Python module `test_request.py`.

[`tests/test_request.py`](https://github.com/quirq-ai/remote-build/blob/main/tests/test_request.py) · code · 3687 bytes

### test_worker.py

Python module `test_worker.py`. Functions: `write_request`,
`test_worker_packs_result_outputs_and_log`, `test_worker_reports_a_typed_error`,
`test_worker_source_outputs`, `test_unresolvable_placeholder_is_a_typed_error`,
`test_output_symlink_out_of_the_repo_is_not_sent_back`,
`test_worker_source_without_source_leaves_a_typed_error`. Contains tests.

[`tests/test_worker.py`](https://github.com/quirq-ai/remote-build/blob/main/tests/test_worker.py) · code · 2953 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
