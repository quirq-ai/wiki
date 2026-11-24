<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/control -->

# xo-space / services/cowork_agent/storm/control

Source: [services/cowork_agent/storm/control](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/control) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Control inside a running turn (plan W3): what ends a session's work at the moment the
founder acts (Stop, pause, "Wait", "never") or an account crosses its threshold.

[`services/cowork_agent/storm/control/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/control/__init__.py) · code · 1062 bytes

### founder.py

The founder's Stop, pause and resume on a scope, what the founder's own message lifts, and
the founder's paid-usage mode (w2-w3 design §4; plan W2). Classes: `Acted`, `PaidSet`.
Functions: `stop`, `pause`, `resume`, `set_paid`, `own_message`, `live`.

[`services/cowork_agent/storm/control/founder.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/control/founder.py) · code · 13119 bytes

### halt.py

What `Engine.halt` did to one session, and the event that records it. Classes: `Halted`.
Functions: `_ms`.

[`services/cowork_agent/storm/control/halt.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/control/halt.py) · code · 1956 bytes

### marker.py

The XO process marker: one environment variable on every process the engine starts for a
session, naming the Space's store, the session and the epoch. Classes: `Mark`. Functions:
`space_of`, `marked`, `parse`, `environ_of`, `belongs_to`, `forget_own`.

[`services/cowork_agent/storm/control/marker.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/control/marker.py) · code · 5756 bytes

### sweep.py

Find and stop every process that carries a session's marker (plan W3). Classes: `Marked`,
`Swept`. Functions: `sweep`, `sweep_all`, `scan`, `stop`.

[`services/cowork_agent/storm/control/sweep.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/control/sweep.py) · code · 7261 bytes

_Generated 2026-11-24 16:34 UTC from `main`._
