<!-- quirq-wiki-generated repo=argus-code dir=python/argus/scaffold -->

# argus-code / python/argus/scaffold

Source: [python/argus/scaffold](https://github.com/quirq-ai/argus-code/tree/main/python/argus/scaffold) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`python/argus/scaffold/__init__.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/scaffold/__init__.py) · empty · 0 bytes

### scaffolder.py

Copy a template directory into a project — the argus claude init core. Classes:
`ScaffoldResult`. Functions: `scaffold_project`.

[`python/argus/scaffold/scaffolder.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/scaffold/scaffolder.py) · code · 2887 bytes

### snapshot.py

Snapshot a project's .claude/ into a named user template (template create). Classes:
`SnapshotPlan`. Functions: `is_secret_file`, `plan_snapshot`, `secret_files_in`,
`snapshot_candidates`, `snapshot_template`.

[`python/argus/scaffold/snapshot.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/scaffold/snapshot.py) · code · 7214 bytes

### storage.py

Locate and resolve argus claude project-scaffolding templates. Functions:
`validate_template_name`, `bundled_templates_dir`, `user_templates_dir`, `list_templates`,
`resolve_template`.

[`python/argus/scaffold/storage.py`](https://github.com/quirq-ai/argus-code/blob/main/python/argus/scaffold/storage.py) · code · 2741 bytes

_Generated 2026-10-27 11:08 UTC from `main`._
