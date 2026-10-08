<!-- quirq-wiki-generated repo=test-pipelines dir=tests -->

# test-pipelines / tests

Source: [tests](https://github.com/quirq-ai/test-pipelines/tree/main/tests) in [test-pipelines](https://github.com/quirq-ai/test-pipelines).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### conftest.py

Python module `conftest.py`. Functions: `junit_dir`. Contains tests.

[`tests/conftest.py`](https://github.com/quirq-ai/test-pipelines/blob/main/tests/conftest.py) · code · 160 bytes

### test_cli.py

Python module `test_cli.py`. Functions: `test_version`. Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/test-pipelines/blob/main/tests/test_cli.py) · code · 221 bytes

### test_codeowners.py

Python module `test_codeowners.py`. Functions:
`test_codeowners_names_suraj_for_exactly_the_trust_paths`. Contains tests.

[`tests/test_codeowners.py`](https://github.com/quirq-ai/test-pipelines/blob/main/tests/test_codeowners.py) · code · 889 bytes

### test_collect_report.py

A partial collect must not publish a scorecard that looks complete (AUDIT N7). Classes:
`_Opener`.

[`tests/test_collect_report.py`](https://github.com/quirq-ai/test-pipelines/blob/main/tests/test_collect_report.py) · code · 12959 bytes

### test_explicit_base.py

An explicit base (--base, the sink's base input) must be a full commit id (AUDIT N6).
Functions: `state`, `test_recheck_refuses_the_comparison_but_keeps_the_run`,
`test_a_bad_base_is_ignored_when_nothing_is_compared`, `sink_args`, `main_bundle`,
`test_the_sink_writes_the_bundle_and_fails_the_verdict`,
`test_without_rerun_a_bad_base_changes_nothing`. Contains tests.

[`tests/test_explicit_base.py`](https://github.com/quirq-ai/test-pipelines/blob/main/tests/test_explicit_base.py) · code · 3358 bytes

### test_failures.py

import hashlib import io import json import re import zipfile from pathlib import Path
Contains tests.

[`tests/test_failures.py`](https://github.com/quirq-ai/test-pipelines/blob/main/tests/test_failures.py) · code · 65604 bytes

### test_junit.py

Python module `test_junit.py`. Functions: `parse`, `test_pytest_report_is_normalized`,
`test_runner_dialects`, `test_vitest_failure_keeps_message`,
`test_nested_suites_and_missing_classname`, `test_bad_reports_fail_loudly`,
`test_entity_bomb_is_refused`, `test_long_messages_are_truncated`, and 13 more. Contains
tests.

[`tests/test_junit.py`](https://github.com/quirq-ai/test-pipelines/blob/main/tests/test_junit.py) · code · 14013 bytes

### test_retry.py

Python module `test_retry.py`. Functions: `git`, `repo_with`, `first_run`, `state`,
`sink_it`, `statuses`, `test_planted_failure_that_also_fails_on_base_does_not_block`,
`test_a_failure_the_change_introduced_blocks`, and 47 more. Contains tests.

[`tests/test_retry.py`](https://github.com/quirq-ai/test-pipelines/blob/main/tests/test_retry.py) · code · 43694 bytes

### test_scorecard.py

Python module `test_scorecard.py`.

[`tests/test_scorecard.py`](https://github.com/quirq-ai/test-pipelines/blob/main/tests/test_scorecard.py) · code · 17393 bytes

### test_sink.py

Python module `test_sink.py`. Functions: `good_reports`, `test_bundle_round_trip`,
`test_bundles_are_write_once`, `test_no_reports_still_stores_a_failed_run`, `gh_env`,
`test_github_merge_group_is_a_gate_run`, `test_github_pull_request_and_push`,
`test_github_backend_outside_actions_says_so`, and 9 more. Contains tests.

[`tests/test_sink.py`](https://github.com/quirq-ai/test-pipelines/blob/main/tests/test_sink.py) · code · 9223 bytes

### test_store.py

Python module `test_store.py`.

[`tests/test_store.py`](https://github.com/quirq-ai/test-pipelines/blob/main/tests/test_store.py) · code · 54081 bytes

### test_verdict.py

Python module `test_verdict.py`. Functions: `res`, `test_all_pass_passes`,
`test_failure_fails_and_is_listed`, `test_no_results_is_not_a_pass`,
`test_a_repeated_id_with_mixed_outcomes_is_not_flaky`,
`test_a_report_without_cases_is_not_a_pass`. Contains tests.

[`tests/test_verdict.py`](https://github.com/quirq-ai/test-pipelines/blob/main/tests/test_verdict.py) · code · 1328 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
