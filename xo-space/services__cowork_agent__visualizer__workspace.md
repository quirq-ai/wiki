<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/visualizer/workspace -->

# xo-space / services/cowork_agent/visualizer/workspace

Source: [services/cowork_agent/visualizer/workspace](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/visualizer/workspace) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Workspace-tier sinks — aggregate per-project `.xo/` files into `~/xo-projects/.xo/`
workspace state.

[`services/cowork_agent/visualizer/workspace/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/workspace/__init__.py) · code · 423 bytes

### activity.py

Machine-local union of every project's open sessions. Functions: `reset_caches`, `apply`.

[`services/cowork_agent/visualizer/workspace/activity.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/workspace/activity.py) · code · 1803 bytes

### projects_json.py

`/.xo/projects.json` — the projects registry (syncplan §5.2). Functions: `path`,
`legacy_path`, `git_refresh_seconds`, `reset_caches`, `build`, `apply`.

[`services/cowork_agent/visualizer/workspace/projects_json.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/workspace/projects_json.py) · code · 6121 bytes

### sessions_augment.py

`~/.quirq/cache/sessions/sessions-augment.json` — union of every project's per-project
augment file. Functions: `reset_caches`, `apply`.

[`services/cowork_agent/visualizer/workspace/sessions_augment.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/workspace/sessions_augment.py) · code · 2327 bytes

### sessionslist.py

`~/.quirq/cache/sessions/sessionslist.json` — union of every project's adapter-written
session index. Functions: `reset_caches`, `apply`.

[`services/cowork_agent/visualizer/workspace/sessionslist.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/workspace/sessionslist.py) · code · 1567 bytes

### space_json.py

`/.xo/space.json`: the Space record (syncplan §5.3). Functions: `refresh_seconds`,
`agent_touch_seconds`, `path`, `space_id`, `build`, `apply`.

[`services/cowork_agent/visualizer/workspace/space_json.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/workspace/space_json.py) · code · 8536 bytes

### stats.py

`~/.quirq/cache/stats.json` — workspace stats = sum of every project's runtime `stats.json`.
Functions: `reset_caches`, `apply`.

[`services/cowork_agent/visualizer/workspace/stats.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/workspace/stats.py) · code · 7762 bytes

### timeline.py

`~/.quirq/projects/timeline.jsonl`: the multiplexed workspace timeline. Functions: `apply`.

[`services/cowork_agent/visualizer/workspace/timeline.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/workspace/timeline.py) · code · 1155 bytes

### views.py

The Space data files — the three payloads `/xo/*.json` serves. Classes: `_Flight`.
Functions: `refresh_seconds`, `view_path`, `graph_path`, `sweep_abandoned`, `scaffold`,
`build`, `apply`, `age_seconds`, and 2 more.

[`services/cowork_agent/visualizer/workspace/views.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/workspace/views.py) · code · 11597 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
