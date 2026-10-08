<!-- quirq-wiki-generated repo=gate dir=tests -->

# gate / tests

Source: [tests](https://github.com/quirq-ai/gate/tree/main/tests) in [gate](https://github.com/quirq-ai/gate).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/__init__.py`](https://github.com/quirq-ai/gate/blob/main/tests/__init__.py) · empty · 0 bytes

### conftest.py

Python module `conftest.py`. Functions: `infra_config_root`, `config_root`, `cfg`. Contains
tests.

[`tests/conftest.py`](https://github.com/quirq-ai/gate/blob/main/tests/conftest.py) · code · 841 bytes

### test_cli.py

Python module `test_cli.py`. Functions: `test_no_command_is_a_usage_error`,
`test_bad_config_path_is_a_clear_error`,
`test_bad_observed_file_cannot_look_like_a_refusal`, `test_crash_is_could_not_decide`,
`test_not_onboarded_has_its_own_exit_code`. Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/gate/blob/main/tests/test_cli.py) · code · 1987 bytes

### test_codeowners.py

Python module `test_codeowners.py`. Functions:
`test_codeowners_names_suraj_for_exactly_the_trust_paths`. Contains tests.

[`tests/test_codeowners.py`](https://github.com/quirq-ai/gate/blob/main/tests/test_codeowners.py) · code · 911 bytes

### test_github.py

Python module `test_github.py`. Functions:
`test_generated_workflows_produce_every_required_check`,
`test_missing_merge_group_trigger_is_caught`, `test_renamed_job_is_caught`,
`test_rule_pins_checks_to_github_actions`, `fake_api`, `run`,
`test_observe_takes_newest_run`, `test_pending_rerun_fails_closed`, and 5 more.

[`tests/test_github.py`](https://github.com/quirq-ai/gate/blob/main/tests/test_github.py) · code · 5892 bytes

### test_guard.py

Python module `test_guard.py`. Functions: `terms`, `core_repo`,
`test_planted_pytest_string_fails`, `test_python_pieces_are_caught`,
`test_other_files_are_grepped`, `test_words_inside_other_words_do_not_match`,
`test_tests_docs_and_ci_are_not_core`,
`test_language_names_are_findings_outside_reviewed_files`, and 9 more. Contains tests.

[`tests/test_guard.py`](https://github.com/quirq-ai/gate/blob/main/tests/test_guard.py) · code · 4458 bytes

### test_required.py

Python module `test_required.py`.

[`tests/test_required.py`](https://github.com/quirq-ai/gate/blob/main/tests/test_required.py) · code · 2274 bytes

### test_settings.py

Python module `test_settings.py`.

[`tests/test_settings.py`](https://github.com/quirq-ai/gate/blob/main/tests/test_settings.py) · code · 54926 bytes

### test_timing.py

Python module `test_timing.py`.

[`tests/test_timing.py`](https://github.com/quirq-ai/gate/blob/main/tests/test_timing.py) · code · 8249 bytes

### test_verdict.py

Python module `test_verdict.py`. Functions: `test_red_check_is_refused`,
`test_missing_check_is_refused_not_passed`, `test_running_and_skipped_are_not_green`,
`test_green_passes`, `test_cli_refuses_red_pr_in_both_repos`, `test_cli_passes_green`.
Contains tests.

[`tests/test_verdict.py`](https://github.com/quirq-ai/gate/blob/main/tests/test_verdict.py) · code · 1519 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
