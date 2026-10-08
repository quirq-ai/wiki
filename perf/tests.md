<!-- quirq-wiki-generated repo=perf dir=tests -->

# perf / tests

Source: [tests](https://github.com/quirq-ai/perf/tree/main/tests) in [perf](https://github.com/quirq-ai/perf).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### conftest.py

Python module `conftest.py`. Functions: `next_dist`, `git`, `product_repo`. Contains tests.

[`tests/conftest.py`](https://github.com/quirq-ai/perf/blob/main/tests/conftest.py) · code · 2068 bytes

### test_bench.py

Python module `test_bench.py`. Functions: `write`, `test_read_values_sorted`,
`test_read_errors`. Contains tests.

[`tests/test_bench.py`](https://github.com/quirq-ai/perf/blob/main/tests/test_bench.py) · code · 1181 bytes

### test_cli.py

Python module `test_cli.py`. Functions: `test_version`, `test_pending_record_history`,
`test_record_twice_is_refused`, `test_record_needs_dist_or_error`, `test_merge`,
`test_merge_refuses_other_repos_and_mislabelled_records`, `test_record_bench_then_bundle`,
`test_merge_takes_only_pending_commits_of_this_run`, and 4 more. Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/perf/blob/main/tests/test_cli.py) · code · 11940 bytes

### test_codeowners.py

Python module `test_codeowners.py`. Functions:
`test_codeowners_names_suraj_for_exactly_the_trust_paths`. Contains tests.

[`tests/test_codeowners.py`](https://github.com/quirq-ai/perf/blob/main/tests/test_codeowners.py) · code · 816 bytes

### test_publish_guard.py

Python module `test_publish_guard.py`. Functions:
`test_publish_runs_only_for_perf_runs_on_main`. Contains tests.

[`tests/test_publish_guard.py`](https://github.com/quirq-ai/perf/blob/main/tests/test_publish_guard.py) · code · 506 bytes

### test_record.py

Python module `test_record.py`. Functions: `test_make_ok_and_failed`, `test_make_rejects`,
`test_first_parent_and_pending`, `test_git_error_is_actionable`, `test_backlog`,
`test_since_first`. Contains tests.

[`tests/test_record.py`](https://github.com/quirq-ai/perf/blob/main/tests/test_record.py) · code · 2923 bytes

### test_results.py

Python module `test_results.py`. Functions: `rec`,
`test_github_run_is_about_the_measured_repo`, `test_bundle_round_trips_with_metrics`,
`test_raw_keeps_bench_samples`, `test_failed_record_is_an_unexpected_crash`. Contains tests.

[`tests/test_results.py`](https://github.com/quirq-ai/perf/blob/main/tests/test_results.py) · code · 2697 bytes

### test_size.py

Python module `test_size.py`. Functions: `test_next_build_values`,
`test_next_build_is_deterministic`, `test_no_manifest_means_no_shared_value`,
`test_unfinished_build_is_an_error`. Contains tests.

[`tests/test_size.py`](https://github.com/quirq-ai/perf/blob/main/tests/test_size.py) · code · 1763 bytes

### test_store.py

Python module `test_store.py`. Functions: `rec`, `test_put_and_read`,
`test_ok_is_never_replaced`, `test_failed_is_retried_up_to_the_limit`,
`test_bad_records_are_refused`, `test_put_many_is_all_or_nothing`, `test_unknown_backend`,
`test_bad_line_is_reported`, and 4 more. Contains tests.

[`tests/test_store.py`](https://github.com/quirq-ai/perf/blob/main/tests/test_store.py) · code · 5315 bytes

### test_workflows.py

Python module `test_workflows.py`. Functions: `test_tools_qqperf_runs_from_source`,
`test_publish_uses_the_qqresults_pin`, `test_trusted_jobs_install_nothing`. Contains tests.

[`tests/test_workflows.py`](https://github.com/quirq-ai/perf/blob/main/tests/test_workflows.py) · code · 1121 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
