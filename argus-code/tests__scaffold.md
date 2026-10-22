<!-- quirq-wiki-generated repo=argus-code dir=tests/scaffold -->

# argus-code / tests/scaffold

Source: [tests/scaffold](https://github.com/quirq-ai/argus-code/tree/main/tests/scaffold) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`tests/scaffold/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/scaffold/__init__.py) · empty · 0 bytes

### test_bundled_template.py

The bundled default template must ship with the expected files. Functions:
`test_default_template_has_expected_files`, `test_default_template_ships_a_skill_file`,
`test_claude_md_is_at_template_root_not_under_dotclaude`. Contains tests.

[`tests/scaffold/test_bundled_template.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/scaffold/test_bundled_template.py) · code · 1345 bytes

### test_cli_claude.py

End-to-end CLI behavior for the argus claude command tree. Functions:
`test_init_scaffolds_default_into_dir`, `test_init_skips_existing_and_protects_claude_md`,
`test_init_unknown_template_errors_with_list`, `test_template_list_shows_default`,
`test_template_create_then_list_roundtrip`, `test_template_create_default_is_blocked`,
`test_template_create_per_folder_prompt`. Contains tests.

[`tests/scaffold/test_cli_claude.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/scaffold/test_cli_claude.py) · code · 4023 bytes

### test_scaffold_containment.py

Scaffolding must read and write only inside its intended directories.

[`tests/scaffold/test_scaffold_containment.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/scaffold/test_scaffold_containment.py) · code · 5808 bytes

### test_scaffolder.py

scaffold_project copies a template into a project with skip/force rules. Functions:
`test_copies_all_files_into_project`, `test_claude_md_lands_at_root_not_under_dotclaude`,
`test_skips_existing_files_without_force`,
`test_force_overwrites_existing_non_claude_files`,
`test_claude_md_never_overwritten_even_with_force`. Contains tests.

[`tests/scaffold/test_scaffolder.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/scaffold/test_scaffolder.py) · code · 2827 bytes

### test_snapshot.py

snapshot_template saves a project's .claude/ into a named user template. Functions:
`test_candidates_exclude_session_dirs`, `test_candidates_empty_when_no_dotclaude`,
`test_snapshot_copies_picked_subdirs_and_safe_top_files`,
`test_snapshot_rejects_reserved_name`, `test_snapshot_rejects_existing_template`,
`test_snapshot_rejects_missing_dotclaude`. Contains tests.

[`tests/scaffold/test_snapshot.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/scaffold/test_snapshot.py) · code · 2700 bytes

### test_snapshot_secrets.py

template create must not snapshot credentials into a reusable template.

[`tests/scaffold/test_snapshot_secrets.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/scaffold/test_snapshot_secrets.py) · code · 9884 bytes

### test_storage.py

Two-tier template storage: bundled (read-only) + user (~/.argus/templates).

[`tests/scaffold/test_storage.py`](https://github.com/quirq-ai/argus-code/blob/main/tests/scaffold/test_storage.py) · code · 1861 bytes

_Generated 2026-10-22 10:44 UTC from `main`._
