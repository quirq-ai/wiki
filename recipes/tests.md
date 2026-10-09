<!-- quirq-wiki-generated repo=recipes dir=tests -->

# recipes / tests

Source: [tests](https://github.com/quirq-ai/recipes/tree/main/tests) in [recipes](https://github.com/quirq-ai/recipes).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### conftest.py

Python module `conftest.py`. Functions: `repo`. Contains tests.

[`tests/conftest.py`](https://github.com/quirq-ai/recipes/blob/main/tests/conftest.py) · code · 1175 bytes

### test_bench.py

Python module `test_bench.py`. Functions: `bench_action`,
`test_startup_samples_every_start`, `test_latency_times_each_path`,
`test_a_bad_path_fails_the_bench`, `test_a_service_that_never_starts_fails`,
`test_needs_a_bench_action`, `test_nearest_rank`, `target`, and 3 more. Contains tests.

[`tests/test_bench.py`](https://github.com/quirq-ai/recipes/blob/main/tests/test_bench.py) · code · 5132 bytes

### test_cli.py

Python module `test_cli.py`. Functions: `use_fake`,
`test_execute_runs_the_goal_and_writes_results`, `test_execute_fails_on_a_failing_test`,
`test_plan_json_shows_declared_missing`, `test_bad_manifest_is_a_clear_error`,
`test_check_kinds`. Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/recipes/blob/main/tests/test_cli.py) · code · 2336 bytes

### test_digest.py

Python module `test_digest.py`. Functions: `test_matches`,
`test_list_files_skips_git_and_qq_and_ignored`, `test_list_files_without_git`,
`test_input_root_is_stable_and_content_addressed`, `test_path_digest`,
`test_dot_slash_and_brackets`, `test_glob_matching_nothing_is_an_error`,
`test_list_files_from_a_subdirectory_of_a_checkout`. Contains tests.

[`tests/test_digest.py`](https://github.com/quirq-ai/recipes/blob/main/tests/test_digest.py) · code · 2735 bytes

### test_guard.py

Python module `test_guard.py`. Functions: `test_core_names_no_language_or_tool`,
`test_guard_catches_a_named_tool_and_an_adapter_import`. Contains tests.

[`tests/test_guard.py`](https://github.com/quirq-ai/recipes/blob/main/tests/test_guard.py) · code · 1178 bytes

### test_loader.py

Python module `test_loader.py`.

[`tests/test_loader.py`](https://github.com/quirq-ai/recipes/blob/main/tests/test_loader.py) · code · 1681 bytes

### test_node_app.py

Python module `test_node_app.py`. Functions: `manifest`, `app`, `step`,
`test_capabilities_match_kinds_toml`, `test_innernet_shape`,
`test_typecheck_falls_back_to_tsc_and_vitest_writes_junit`,
`test_test_script_without_vitest`, `test_clear_errors`, and 6 more. Contains tests.

[`tests/test_node_app.py`](https://github.com/quirq-ai/recipes/blob/main/tests/test_node_app.py) · code · 5925 bytes

### test_plan.py

Python module `test_plan.py`.

[`tests/test_plan.py`](https://github.com/quirq-ai/recipes/blob/main/tests/test_plan.py) · code · 3957 bytes

### test_property_tests.py

V0-REC-04: property tests run as ordinary tests, deterministic and time-boxed. Functions:
`step`, `test_pytest_loads_the_gate_plugin`,
`test_gate_profile_is_deterministic_and_bounded`, `node_manifest`,
`test_node_property_setup_only_with_fast_check`, `test_property_setup_script_writes_config`,
`test_examples_have_property_tests`, `test_repo_profile_is_respected`. Contains tests.

[`tests/test_property_tests.py`](https://github.com/quirq-ai/recipes/blob/main/tests/test_property_tests.py) · code · 4668 bytes

### test_python_adapters.py

Python module `test_python_adapters.py`. Functions: `manifest`, `actions`,
`test_capabilities_match_kinds_toml`, `test_test_goal_plan`, `test_service_actions`,
`test_missing_requirements_is_a_clear_error`, `test_bad_pytest_args`, `test_compile_roots`,
and 4 more. Contains tests.

[`tests/test_python_adapters.py`](https://github.com/quirq-ai/recipes/blob/main/tests/test_python_adapters.py) · code · 6187 bytes

### test_repo.py

Repo-shape checks that hold from the first commit. Functions:
`test_codeowners_names_suraj_for_exactly_the_trust_paths`,
`test_workflow_actions_are_pinned_to_commit_shas`. Contains tests.

[`tests/test_repo.py`](https://github.com/quirq-ai/recipes/blob/main/tests/test_repo.py) · code · 1348 bytes

### test_runner.py

Python module `test_runner.py`.

[`tests/test_runner.py`](https://github.com/quirq-ai/recipes/blob/main/tests/test_runner.py) · code · 4375 bytes

### test_service.py

Python module `test_service.py`. Functions: `svc`, `test_deploy_probe_teardown`,
`test_failing_probe_fails_the_deploy`, `test_service_that_exits_is_not_ready`,
`test_never_ready_times_out_and_is_killed`, `test_teardown_kills_the_process_group`,
`alive`, `test_rejects_unknown_backend_and_non_service`, and 5 more. Contains tests.

[`tests/test_service.py`](https://github.com/quirq-ai/recipes/blob/main/tests/test_service.py) · code · 5961 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
