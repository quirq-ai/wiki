<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/visualizer/sinks -->

# xo-space / services/cowork_agent/visualizer/sinks

Source: [services/cowork_agent/visualizer/sinks](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/visualizer/sinks) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Sinks — apply events to watcher-owned state files.

[`services/cowork_agent/visualizer/sinks/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/sinks/__init__.py) · code · 59 bytes

### activity.py

Machine-local live-presence snapshot sink, one file per project. Functions: `reset_caches`,
`apply`.

[`services/cowork_agent/visualizer/sinks/activity.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/sinks/activity.py) · code · 3736 bytes

### project_json.py

`project.json` sink — one-shot identity fill. Functions: `fill_identity`, `refresh_git`.

[`services/cowork_agent/visualizer/sinks/project_json.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/sinks/project_json.py) · code · 5420 bytes

### sessions_augment.py

`sessions/sessions-augment.json` sink — watcher-owned per-session counters. Functions:
`apply`, `forget_task`.

[`services/cowork_agent/visualizer/sinks/sessions_augment.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/sinks/sessions_augment.py) · code · 8789 bytes

### stats.py

`stats.json` sink — rolling 7d/30d + by_runtime + by_session. Functions: `apply`.

[`services/cowork_agent/visualizer/sinks/stats.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/sinks/stats.py) · code · 12352 bytes

### timeline.py

`timeline.jsonl` sink — append-only event log with rotation. Functions: `apply`,
`apply_quiet`.

[`services/cowork_agent/visualizer/sinks/timeline.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/visualizer/sinks/timeline.py) · code · 6935 bytes

_Generated 2026-10-02 18:35 UTC from `main`._
