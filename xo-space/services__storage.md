<!-- quirq-wiki-generated repo=xo-space dir=services/storage -->

# xo-space / services/storage

Source: [services/storage](https://github.com/quirq-ai/xo-space/tree/main/services/storage) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

File primitives every part of a Space builds on.

[`services/storage/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/storage/__init__.py) · code · 1163 bytes

### atomic_write.py

Atomic file writes for the records this system keeps on disk. Classes:
`CorruptDocumentError`, `_Unset`, `ChangeGate`. Functions: `write_json_atomic`,
`create_file_exclusive`, `create_json_exclusive`, `append_jsonl`, `read_stamped_document`,
`unsupported_schema_message`, `write_json_owned`, `write_json_atomic_if_changed`.

[`services/storage/atomic_write.py`](https://github.com/quirq-ai/xo-space/blob/main/services/storage/atomic_write.py) · code · 13772 bytes

### flock.py

Advisory file lock helper, used for files written by both the watcher and the BFF API
endpoints. Functions: `locked`.

[`services/storage/flock.py`](https://github.com/quirq-ai/xo-space/blob/main/services/storage/flock.py) · code · 2329 bytes

### layout.py

The folders of the machine-local state root (`~/.quirq/`). Functions: `projects_dir`,
`sessions_dir`, `inbox_dir`, `connections_dir`, `sharing_dir`, `usage_dir`, `settings_dir`,
`secrets_dir`, and 4 more.

[`services/storage/layout.py`](https://github.com/quirq-ai/xo-space/blob/main/services/storage/layout.py) · code · 2967 bytes

### migrations.py

Moving the state root's files from where earlier releases kept them. Classes: `Move`.
Functions: `migrate_layout`.

[`services/storage/migrations.py`](https://github.com/quirq-ai/xo-space/blob/main/services/storage/migrations.py) · code · 8552 bytes

### paths.py

Canonical machine-local state roots for Quirq. Functions: `legacy_state_dir`.

[`services/storage/paths.py`](https://github.com/quirq-ai/xo-space/blob/main/services/storage/paths.py) · code · 903 bytes

### reader.py

Pure JSON readers for visualizer and watcher state. Functions: `read_json`,
`read_jsonl_tail_reverse`, `merge_session_record`, `merge_sessionslist`,
`adapter_field_names`, `augment_field_names`.

[`services/storage/reader.py`](https://github.com/quirq-ai/xo-space/blob/main/services/storage/reader.py) · code · 8176 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
