<!-- quirq-wiki-generated repo=xo-cowork-api dir=services/cowork_agent/visualizer/workspace -->

# xo-cowork-api / services/cowork_agent/visualizer/workspace

Source: [services/cowork_agent/visualizer/workspace](https://github.com/quirq-ai/xo-cowork-api/tree/main/services/cowork_agent/visualizer/workspace) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Workspace-tier sinks — aggregate per-project `.xo/` files into `~/xo-projects/.xo/`
workspace state.

[`services/cowork_agent/visualizer/workspace/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/workspace/__init__.py) · code · 423 bytes

### activity.py

`~/xo-projects/.xo/activity.json` — union of every project's open sessions, tagged with
`project_id`. Functions: `apply`.

[`services/cowork_agent/visualizer/workspace/activity.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/workspace/activity.py) · code · 1667 bytes

### sessions_augment.py

`~/xo-projects/.xo/sessions/sessions-augment.json` — union of every project's per-project
augment file. Functions: `apply`.

[`services/cowork_agent/visualizer/workspace/sessions_augment.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/workspace/sessions_augment.py) · code · 1292 bytes

### sessionslist.py

`~/xo-projects/.xo/sessions/sessionslist.json` — union of every project's adapter-written
`sessionslist.json`. Functions: `apply`.

[`services/cowork_agent/visualizer/workspace/sessionslist.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/workspace/sessionslist.py) · code · 1457 bytes

### stats.py

`~/xo-projects/.xo/stats.json` — workspace stats = sum of every project's `stats.json`.
Functions: `apply`.

[`services/cowork_agent/visualizer/workspace/stats.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/workspace/stats.py) · code · 7336 bytes

### timeline.py

`~/xo-projects/.xo/timeline.jsonl` — multiplexed workspace timeline. Functions: `apply`.

[`services/cowork_agent/visualizer/workspace/timeline.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/workspace/timeline.py) · code · 1683 bytes

### workspace_json.py

`~/xo-projects/.xo/workspace.json` — workspace identity + project discovery list. Functions:
`apply`.

[`services/cowork_agent/visualizer/workspace/workspace_json.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/workspace/workspace_json.py) · code · 1045 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
