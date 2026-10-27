<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/presets -->

# xo-space / services/cowork_agent/storm/presets

Source: [services/cowork_agent/storm/presets](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/presets) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Presets: every storm surface becomes a `SessionSpec` (design ch 10). Functions: `build`.

[`services/cowork_agent/storm/presets/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/presets/__init__.py) · code · 1520 bytes

### common.py

What every preset shares (design ch 10 §2) and the rules that read a runtime's feature list
instead of its name (ch 10 §5; §0.70, §0.90). Classes: `Intelligence`, `PresetContext`,
`PresetResult`, `PresetRefused`. Functions: `offered`, `thread_mode`, `default_effort`,
`intended_effort`, `role_prompt`, `fingerprint`.

[`services/cowork_agent/storm/presets/common.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/presets/common.py) · code · 5860 bytes

### coordinators.py

The workspace and project coordinators (design ch 10 §4.2, §4.3). Functions: `build`.

[`services/cowork_agent/storm/presets/coordinators.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/presets/coordinators.py) · code · 2415 bytes

### plain_chat.py

Plain chat: one session with its agent, as `/api/chat/prompt` starts it (design ch 10 §4.1;
owner decisions ch 10 §13.3–§13.5). Functions: `build`.

[`services/cowork_agent/storm/presets/plain_chat.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/presets/plain_chat.py) · code · 2211 bytes

### thread.py

A thread, and a job run, which is a thread (design ch 10 §4.4, §4.5). Functions: `build`.

[`services/cowork_agent/storm/presets/thread.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/presets/thread.py) · code · 1762 bytes

_Generated 2026-10-27 11:09 UTC from `main`._
