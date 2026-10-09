<!-- quirq-wiki-generated repo=xo-cowork-api dir=services/cowork_agent/visualizer -->

# xo-cowork-api / services/cowork_agent/visualizer

Source: [services/cowork_agent/visualizer](https://github.com/quirq-ai/xo-cowork-api/tree/main/services/cowork_agent/visualizer) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Visualizer subsystem.

[`services/cowork_agent/visualizer/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/__init__.py) · code · 715 bytes

### argus_index.py

Argus stats builder — pre-aggregated session telemetry for the Space UI. Functions:
`build_argus_stats`.

[`services/cowork_agent/visualizer/argus_index.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/argus_index.py) · code · 8857 bytes

### atomic_write.py

Atomic file writes for the watcher's sinks. Functions: `write_json_atomic`, `append_jsonl`.

[`services/cowork_agent/visualizer/atomic_write.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/atomic_write.py) · code · 2231 bytes

### discovery.py

Shared session-row discovery for adapter visualizer sources. Functions:
`iter_sessionslist_rows`.

[`services/cowork_agent/visualizer/discovery.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/discovery.py) · code · 2564 bytes

### flock.py

Advisory file lock helper, used for files written by both the watcher and the BFF API
endpoints. Functions: `locked`.

[`services/cowork_agent/visualizer/flock.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/flock.py) · code · 3833 bytes

### project_index.py

Backend-neutral project routing for the watcher. Functions: `project_id_for_cwd`.

[`services/cowork_agent/visualizer/project_index.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/project_index.py) · code · 1261 bytes

### reader.py

Pure JSON readers for `/.xo/ and ~/xo-projects/.xo/`. Functions: `read_json`,
`read_jsonl_tail_reverse`, `merge_session_record`, `merge_sessionslist`,
`adapter_field_names`, `augment_field_names`.

[`services/cowork_agent/visualizer/reader.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/reader.py) · code · 8098 bytes

### source_loader.py

Dynamic loader for the active agent's visualizer source module. Functions:
`load_source_module`.

[`services/cowork_agent/visualizer/source_loader.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/source_loader.py) · code · 1575 bytes

### space_index.py

Space graph builder — maps `~/xo-projects` to the xo-atlas space.json shape. Functions:
`build_space_data`, `materialize`.

[`services/cowork_agent/visualizer/space_index.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/space_index.py) · code · 16562 bytes

### state.py

Watcher-owned state directory. Functions: `watcher_state_dir`.

[`services/cowork_agent/visualizer/state.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/state.py) · code · 1030 bytes

### todos_store.py

CRUD helpers over `/.xo/todos.json` for the agent-facing HTTP endpoints. Classes:
`TodosStoreError`. Functions: `create_todo`, `get_todo`, `update_todo`, `delete_todo`.

[`services/cowork_agent/visualizer/todos_store.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/todos_store.py) · code · 8750 bytes

### watcher.py

Watcher main loop — drains the runtime source(s), fans events to sinks, refreshes the
workspace tier, and persists offsets. Classes: `Watcher`. Functions: `start_watcher`. Built
with FastAPI.

[`services/cowork_agent/visualizer/watcher.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/watcher.py) · code · 8882 bytes

### workspace_index.py

Workspace discovery — every project the watcher should track. Functions: `list_project_ids`,
`iter_project_xo_dirs`, `workspace_root`.

[`services/cowork_agent/visualizer/workspace_index.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/workspace_index.py) · code · 1782 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
