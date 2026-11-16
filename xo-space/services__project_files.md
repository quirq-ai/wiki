<!-- quirq-wiki-generated repo=xo-space dir=services/project_files -->

# xo-space / services/project_files

Source: [services/project_files](https://github.com/quirq-ai/xo-space/tree/main/services/project_files) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

A project's files, as the person sees and edits them (Space-level).

[`services/project_files/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/project_files/__init__.py) · code · 938 bytes

### address.py

Where a project file is, and what Space lets the person do with it. Classes: `Place`,
`FileRefused`, `Target`. Functions: `project_not_found`, `file_not_found`, `invalid_path`,
`place_changed`, `version_of`, `clean_relative`, `project_root`, `worktree_of`, and 6 more.

[`services/project_files/address.py`](https://github.com/quirq-ai/xo-space/blob/main/services/project_files/address.py) · code · 10992 bytes

### changes.py

What a thread's worktree changed, or the project's own checkout (`GET /changes`), with git's
own patch for each file. Classes: `Change`, `_Repo`. Functions: `not_found`, `changes`.

[`services/project_files/changes.py`](https://github.com/quirq-ai/xo-space/blob/main/services/project_files/changes.py) · code · 33206 bytes

### edits.py

The edit log: every save the person makes in Files, and the versions it replaced, so a save
can be undone after a reload, and an agent engine can tell its agents what the person
changed. Classes: `Edit`. Functions: `now_precise`, `state_dir`, `record`, `is_secret_name`,
`entries`, `find`, `kept_version`, `listing`, and 3 more.

[`services/project_files/edits.py`](https://github.com/quirq-ai/xo-space/blob/main/services/project_files/edits.py) · code · 17110 bytes

### history.py

Git history of one file inside a project, for the previewer. Functions: `owning_repository`,
`file_git_history`, `safe_repo_path`, `read_file_at_commit`.

[`services/project_files/history.py`](https://github.com/quirq-ai/xo-space/blob/main/services/project_files/history.py) · code · 10866 bytes

### read.py

One project file's text, for preview and for the editor (`GET /file`). Classes: `FileText`.
Functions: `suffix`, `kind_of`, `looks_like_text`, `is_utf8_text`, `line_endings`,
`previewable`, `unsupported`, `read_text`.

[`services/project_files/read.py`](https://github.com/quirq-ai/xo-space/blob/main/services/project_files/read.py) · code · 6297 bytes

### save.py

The guarded save (`PUT /file) and undo (POST /edits/{id}/undo`). Classes: `Saved`.
Functions: `check_place`, `encode`, `save`, `undo`.

[`services/project_files/save.py`](https://github.com/quirq-ai/xo-space/blob/main/services/project_files/save.py) · code · 13250 bytes

### writer_key.py

The UI writer key: proof that a save came through the coworker UI's proxy. Functions:
`key_path`, `ensure`, `current`, `matches`.

[`services/project_files/writer_key.py`](https://github.com/quirq-ai/xo-space/blob/main/services/project_files/writer_key.py) · code · 3864 bytes

_Generated 2026-11-16 14:06 UTC from `main`._
