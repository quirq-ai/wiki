<!-- quirq-wiki-generated repo=xo-cowork-api dir=services/cowork_agent/visualizer/sinks -->

# xo-cowork-api / services/cowork_agent/visualizer/sinks

Source: [services/cowork_agent/visualizer/sinks](https://github.com/quirq-ai/xo-cowork-api/tree/main/services/cowork_agent/visualizer/sinks) in [xo-cowork-api](https://github.com/quirq-ai/xo-cowork-api).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Sinks — apply events to `/.xo/` state files.

[`services/cowork_agent/visualizer/sinks/__init__.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/sinks/__init__.py) · code · 873 bytes

### activity.py

`activity.json` sink — live presence snapshot per project. Functions: `apply`.

[`services/cowork_agent/visualizer/sinks/activity.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/sinks/activity.py) · code · 3835 bytes

### project_json.py

`project.json` sink — one-shot identity fill. Functions: `fill_identity`. Built with
FastAPI.

[`services/cowork_agent/visualizer/sinks/project_json.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/sinks/project_json.py) · code · 2273 bytes

### sessions_augment.py

`sessions/sessions-augment.json` sink — watcher-owned per-session counters. Functions:
`apply`.

[`services/cowork_agent/visualizer/sinks/sessions_augment.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/sinks/sessions_augment.py) · code · 7311 bytes

### stats.py

`stats.json` sink — rolling 7d/30d + by_runtime + by_session. Functions: `apply`.

[`services/cowork_agent/visualizer/sinks/stats.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/sinks/stats.py) · code · 12814 bytes

### timeline.py

`timeline.jsonl` sink — append-only event log with rotation. Functions: `apply`.

[`services/cowork_agent/visualizer/sinks/timeline.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/sinks/timeline.py) · code · 4355 bytes

### todos.py

`todos.json` sink — per-session todo list. Functions: `apply`.

[`services/cowork_agent/visualizer/sinks/todos.py`](https://github.com/quirq-ai/xo-cowork-api/blob/main/services/cowork_agent/visualizer/sinks/todos.py) · code · 5189 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
