<!-- quirq-wiki-generated repo=xo-cowork-api dir=services/cowork_agent/xo_projects_sync -->

# xo-cowork-api / services/cowork_agent/xo_projects_sync

Source: [services/cowork_agent/xo_projects_sync](https://github.com/quirq-ai/xo-cowork-api/tree/main/services/cowork_agent/xo_projects_sync) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

xo-projects-sync — encrypted GitHub-backed backup/restore for xo-projects.

[`services/cowork_agent/xo_projects_sync/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/xo_projects_sync/__init__.py) · code · 83 bytes

### backup.py

Backup orchestration — single-project and all-projects. Classes: `BackupResult`. Functions:
`backup_one`, `backup_all`.

[`services/cowork_agent/xo_projects_sync/backup.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/xo_projects_sync/backup.py) · code · 7700 bytes

### config.py

Runtime + .env config for xo-projects-sync. Classes: `SyncConfig`. Functions: `load_config`,
`repo_name_for`, `upsert_env`.

[`services/cowork_agent/xo_projects_sync/config.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/xo_projects_sync/config.py) · code · 5044 bytes

### crypto.py

GPG symmetric encryption + chunking. Classes: `GpgUnavailableError`, `GpgFailedError`.
Functions: `check_gpg_available`, `list_parts`, `encrypt_to_chunks`, `decrypt_from_chunks`.

[`services/cowork_agent/xo_projects_sync/crypto.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/xo_projects_sync/crypto.py) · code · 6737 bytes

### github.py

GitHub access: token resolution, repo existence/creation, git operations on ephemeral
clones. Classes: `GitHubAuth`, `AuthMissingError`, `GitHubAPIError`. Functions:
`resolve_auth`, `discover_owner`, `repo_exists`, `create_repo`, `list_xo_project_repos`,
`shallow_clone`, `commit_and_push_in`.

[`services/cowork_agent/xo_projects_sync/github.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/xo_projects_sync/github.py) · code · 13231 bytes

### manifest.py

Snapshot manifest schema. Classes: `SnapshotManifest`. Functions: `sha256_file`,
`sha256_files_concat`, `utc_timestamp_id`, `utc_iso_now`.

[`services/cowork_agent/xo_projects_sync/manifest.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/xo_projects_sync/manifest.py) · code · 3413 bytes

### restore.py

Restore orchestration — single-project and all-projects. Classes: `RestoreResult`,
`ProjectExistsError`, `SnapshotNotFoundError`, `ChecksumMismatchError`, `SnapshotSummary`,
`ProjectSummary`. Functions: `list_remote_projects`, `restore_one`, `restore_all`.

[`services/cowork_agent/xo_projects_sync/restore.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/xo_projects_sync/restore.py) · code · 12988 bytes

### tarball.py

Tar.gz building + extraction for project snapshots. Functions: `build_tarball`,
`extract_tarball`.

[`services/cowork_agent/xo_projects_sync/tarball.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/xo_projects_sync/tarball.py) · code · 6059 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
