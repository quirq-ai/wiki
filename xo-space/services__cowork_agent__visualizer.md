<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/visualizer -->

# xo-space / services/cowork_agent/visualizer

Source: [services/cowork_agent/visualizer](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/visualizer) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Visualizer subsystem.

[`services/cowork_agent/visualizer/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/__init__.py) · code · 715 bytes

### argus_index.py

Argus stats builder — pre-aggregated session telemetry for the Space UI. Functions:
`build_argus_stats`.

[`services/cowork_agent/visualizer/argus_index.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/argus_index.py) · code · 11459 bytes

### atomic_write.py

Moved to services.storage.atomic_write; this import path stays valid.

[`services/cowork_agent/visualizer/atomic_write.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/atomic_write.py) · code · 170 bytes

### categorized_graph.py

Categorized XO-project graph used by the Space Dashboard. Functions: `classify_project`,
`build_categorized_graph`.

[`services/cowork_agent/visualizer/categorized_graph.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/categorized_graph.py) · code · 14712 bytes

### discovery.py

Shared session-row discovery for adapter visualizer sources. Functions:
`iter_sessionslist_rows`.

[`services/cowork_agent/visualizer/discovery.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/discovery.py) · code · 774 bytes

### flock.py

Moved to services.storage.flock; this import path stays valid.

[`services/cowork_agent/visualizer/flock.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/flock.py) · code · 156 bytes

### git_provenance.py

Git provenance for one project — its origin URL and default branch. Functions:
`sanitize_remote_url`, `is_git_repo`, `git_provenance`.

[`services/cowork_agent/visualizer/git_provenance.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/git_provenance.py) · code · 2717 bytes

### github_mirror.py

`~/.quirq/projects//github/issues.json` — the GitHub issue mirror. Classes: `MirrorState`.
Functions: `mirror_path`, `read_mirror`, `load_state`, `record_pages`, `record_failure`,
`reset_mirror`.

[`services/cowork_agent/visualizer/github_mirror.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/github_mirror.py) · code · 15045 bytes

### migrate.py

T21 — the one-time, idempotent move of the pre-T19 runtime tier. Functions:
`migrate_runtime_layout`.

[`services/cowork_agent/visualizer/migrate.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/migrate.py) · code · 5130 bytes

### peers_store.py

CRUD over `/.xo/peers.json` — the collaborator roster. Classes: `PeersStoreError`.
Functions: `create_peer`, `read_roster`, `list_peers`, `get_peer`, `update_peer`,
`delete_peer`.

[`services/cowork_agent/visualizer/peers_store.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/peers_store.py) · code · 11257 bytes

### project_index.py

Backend-neutral project routing for the watcher. Functions: `project_id_for_cwd`.

[`services/cowork_agent/visualizer/project_index.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/project_index.py) · code · 1463 bytes

### reader.py

Moved to services.storage.reader; this import path stays valid.

[`services/cowork_agent/visualizer/reader.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/reader.py) · code · 158 bytes

### session_telemetry.py

Aggregate every installed read-only session telemetry capability. Classes:
`SessionTelemetryUnavailable`. Functions: `build_session_telemetry`. Built with FastAPI.

[`services/cowork_agent/visualizer/session_telemetry.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/session_telemetry.py) · code · 15549 bytes

### source_loader.py

Dynamic loader for the active agent's visualizer source module. Functions:
`load_source_module`.

[`services/cowork_agent/visualizer/source_loader.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/source_loader.py) · code · 1575 bytes

### space_index.py

Space graph builder — maps `~/xo-projects` to the xo-atlas space.json shape. Functions:
`build_space_data`, `materialize`.

[`services/cowork_agent/visualizer/space_index.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/space_index.py) · code · 21602 bytes

### state.py

Watcher-owned state directory. Functions: `watcher_state_dir`, `watcher_heartbeat_path`,
`legacy_watcher_state_dir`, `watcher_activity_dir`, `project_activity_path`,
`workspace_activity_path`.

[`services/cowork_agent/visualizer/state.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/state.py) · code · 2532 bytes

### store_common.py

Shapes shared by the stores that own an authored document — workitems, peers and the runtime
claims file. Classes: `StoreError`, `Unset`. Functions: `now_iso`, `ordered`,
`corrupt_message`, `write_owned`.

[`services/cowork_agent/visualizer/store_common.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/store_common.py) · code · 2492 bytes

### todo_status.py

The todo lifecycle status vocabulary — one definition, one place.

[`services/cowork_agent/visualizer/todo_status.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/todo_status.py) · code · 663 bytes

### todos_store.py

CRUD over `/.xo/todos.json` — and the todo event source. Classes: `TodosStoreError`.
Functions: `is_deleted`, `create_todo`, `get_todo`, `update_todo`, `delete_todo`.

[`services/cowork_agent/visualizer/todos_store.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/todos_store.py) · code · 13812 bytes

### watcher.py

Watcher main loop — drains the runtime source(s), fans events to sinks, refreshes the
workspace tier, and persists offsets. Classes: `Watcher`. Functions: `start_watcher`. Built
with FastAPI.

[`services/cowork_agent/visualizer/watcher.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/watcher.py) · code · 15245 bytes

### workitem_claims.py

Agent claims over workitems, and the derived `in_progress` (plan §5.4). Classes:
`WorkitemClaimsError`. Functions: `grace_seconds`, `claims_path_for`, `read_claims`,
`read_claims_quiet`, `claim_workitem`, `release_workitem`, `release_workitem_quiet`,
`live_session_ids`, and 2 more.

[`services/cowork_agent/visualizer/workitem_claims.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/workitem_claims.py) · code · 11824 bytes

### workitem_projection.py

The read-time projection: .xo/workitems.json joined with the mirror. Functions:
`mirror_issues`, `adopted_node_id`, `tracked_node_ids`, `project_workitem`,
`project_workitems`.

[`services/cowork_agent/visualizer/workitem_projection.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/workitem_projection.py) · code · 6080 bytes

### workitems_store.py

CRUD over `/.xo/workitems.json` — the durable work surface. Classes: `WorkitemsStoreError`.
Functions: `emit_workitem_events`, `is_deleted`, `is_adopted`, `create_workitem`,
`get_workitem`, `list_workitems`, `update_workitem`, `delete_workitem`, and 2 more.

[`services/cowork_agent/visualizer/workitems_store.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/workitems_store.py) · code · 33897 bytes

### workspace_index.py

Workspace discovery — every project the watcher should track. Functions:
`project_index_scope`, `list_project_pids`, `list_project_ids`, `iter_project_xo_dirs`,
`workspace_root`. Built with FastAPI.

[`services/cowork_agent/visualizer/workspace_index.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/workspace_index.py) · code · 3266 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
