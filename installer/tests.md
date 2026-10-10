<!-- quirq-wiki-generated repo=installer dir=tests -->

# installer / tests

Source: [tests](https://github.com/quirq-ai/installer/tree/main/tests) in [installer](https://github.com/quirq-ai/installer).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### conftest.py

Python module `conftest.py`. Functions: `doc`, `entry`, `write`, `checkout`. Contains tests.

[`tests/conftest.py`](https://github.com/quirq-ai/installer/blob/main/tests/conftest.py) · code · 1203 bytes

### test_check_pins.py

Python module `test_check_pins.py`. Functions: `problems`, `test_accepts_pinned`,
`test_refuses_unpinned_or_unreadable`, `test_unparseable_fails`,
`test_symlinked_local_actions`, `test_ignores_run_blocks`,
`test_checks_composite_actions_anywhere`, `test_this_repo_is_clean`, and 2 more. Contains
tests.

[`tests/test_check_pins.py`](https://github.com/quirq-ai/installer/blob/main/tests/test_check_pins.py) · code · 3477 bytes

### test_checkout.py

Python module `test_checkout.py`. Functions: `git`, `commit`, `upstream`, `run`, `co`,
`test_checkout_follows_the_manifest_not_names`, `test_checkout_refuses_dirty_and_foreign`,
`test_checkout_missing_commit`, and 19 more. Contains tests.

[`tests/test_checkout.py`](https://github.com/quirq-ai/installer/blob/main/tests/test_checkout.py) · code · 15203 bytes

### test_cli.py

Python module `test_cli.py`. Functions: `run`, `test_resolve_formats`, `test_exit_codes`,
`test_verify`, `test_verify_not_a_checkout`, `test_show`,
`test_verify_untracked_and_hidden_changes`, `test_verify_subdirectory_is_an_error`, and 2
more. Contains tests.

[`tests/test_cli.py`](https://github.com/quirq-ai/installer/blob/main/tests/test_cli.py) · code · 4107 bytes

### test_codeowners.py

Python module `test_codeowners.py`. Functions:
`test_codeowners_names_suraj_for_exactly_the_trust_paths`. Contains tests.

[`tests/test_codeowners.py`](https://github.com/quirq-ai/installer/blob/main/tests/test_codeowners.py) · code · 874 bytes

### test_manifest.py

Python module `test_manifest.py`. Functions: `test_resolves_commit_and_digest`,
`test_absent_file_is_not_published`, `test_absent_repo_or_channel_is_not_published`,
`test_empty_repos_is_not_published`, `test_invalid_manifest_is_refused`,
`test_invalid_entry_elsewhere_still_refuses`, `test_duplicate_keys_are_refused`,
`test_not_json_is_refused`, and 10 more. Contains tests.

[`tests/test_manifest.py`](https://github.com/quirq-ai/installer/blob/main/tests/test_manifest.py) · code · 5974 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
