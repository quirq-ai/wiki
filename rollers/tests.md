<!-- quirq-wiki-generated repo=rollers dir=tests -->

# rollers / tests

Source: [tests](https://github.com/quirq-ai/rollers/tree/main/tests) in [rollers](https://github.com/quirq-ai/rollers).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### innernet-pnpm-lock.yaml

YAML file `innernet-pnpm-lock.yaml`. Top-level keys: `lockfileVersion`, `settings`,
`importers`, `packages`, `snapshots`.

[`tests/innernet-pnpm-lock.yaml`](https://github.com/quirq-ai/rollers/blob/main/tests/innernet-pnpm-lock.yaml) · code · 73550 bytes

### promoted_support.py

Promotions for tests, built from the fixture with promoted.from_entry. Functions: `entry`,
`image`, `digest`. Contains tests.

[`tests/promoted_support.py`](https://github.com/quirq-ai/rollers/blob/main/tests/promoted_support.py) · code · 1325 bytes

### test_cli.py

Python module `test_cli.py`. Functions: `test_version`, `test_no_command_prints_help`,
`test_every_action_is_pinned_by_sha`, `test_repos_lists_the_toolchains_roller`,
`test_qqsync_pin_matches_pyproject`. Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/rollers/blob/main/tests/test_cli.py) · code · 1843 bytes

### test_codeowners.py

Python module `test_codeowners.py`. Functions:
`test_codeowners_names_suraj_for_exactly_the_trust_paths`. Contains tests.

[`tests/test_codeowners.py`](https://github.com/quirq-ai/rollers/blob/main/tests/test_codeowners.py) · code · 877 bytes

### test_dependabot.py

Python module `test_dependabot.py`. Functions: `test_dependabot_yml_follows_rollers_toml`,
`test_one_file_pair_per_dependabot_repo`, `test_land_workflow_is_valid_and_scoped`,
`test_land_workflow_uses_the_repos_slug`, `test_generated_step_runs_the_check`,
`test_nested_directory_prefixes_patterns`, `test_repo_without_a_slug_is_an_error`,
`test_unknown_backend_is_an_error`, and 9 more. Contains tests.

[`tests/test_dependabot.py`](https://github.com/quirq-ai/rollers/blob/main/tests/test_dependabot.py) · code · 11302 bytes

### test_land_check.py

Python module `test_land_check.py`.

[`tests/test_land_check.py`](https://github.com/quirq-ai/rollers/blob/main/tests/test_land_check.py) · code · 40370 bytes

### test_roll.py

Python module `test_roll.py`. Functions: `test_from_entry_is_sync_pin_form`,
`test_from_entry_rejects`, `test_load_needs_a_toolchains_checkout`,
`test_load_reads_through_qqtc`, `test_roll_changes_only_the_stale_pin_lines`,
`test_roll_of_a_current_manifest_is_a_no_op`, `test_roll_keeps_crlf`,
`test_roll_skips_pins_from_another_source`, and 16 more. Contains tests.

[`tests/test_roll.py`](https://github.com/quirq-ai/rollers/blob/main/tests/test_roll.py) · code · 9382 bytes

### test_rotation.py

Python module `test_rotation.py`. Classes: `FakeGitHub`, `Verified`. Functions: `writes`,
`run`, `test_repo_without_a_manifest_is_skipped`, `test_current_manifest_opens_nothing`,
`test_stale_manifest_gets_one_roll_pr_with_exactly_the_rolled_text`,
`test_auto_merge_is_off_by_default`, `test_existing_roll_is_refreshed_not_duplicated`,
`test_identical_roll_pushes_nothing`, and 20 more. Contains tests.

[`tests/test_rotation.py`](https://github.com/quirq-ai/rollers/blob/main/tests/test_rotation.py) · code · 15095 bytes

### tests_support.py

Shared samples for the land check tests: what GitHub returns for a clean Dependabot roll.
Functions: `registry`, `registry_from`, `npm_file`.

[`tests/tests_support.py`](https://github.com/quirq-ai/rollers/blob/main/tests/tests_support.py) · code · 5747 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
