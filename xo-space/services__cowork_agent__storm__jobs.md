<!-- quirq-wiki-generated repo=xo-space dir=services/cowork_agent/storm/jobs -->

# xo-space / services/cowork_agent/storm/jobs

Source: [services/cowork_agent/storm/jobs](https://github.com/quirq-ai/xo-space/tree/main/services/cowork_agent/storm/jobs) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Jobs: agent sessions started by a schedule (design ch 10 §4.5, ch 11 §14.6, ch 12 §5.8, ch
17 §2.8; §0.44, §0.51, §0.107). Classes: `Jobs`. Functions: `boot`, `shutdown`, `current`.

[`services/cowork_agent/storm/jobs/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/jobs/__init__.py) · code · 14638 bytes

### runs.py

A job's fire opens a thread, once (design ch 10 §4.5, ch 11 §7.1, ch 07 §4.1). Classes:
`JobRefused`, `_FireOpened`, `_StillWorking`. Functions: `wake_id`, `project_chat`,
`fitting`, `open_run`.

[`services/cowork_agent/storm/jobs/runs.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/jobs/runs.py) · code · 10655 bytes

### schedule.py

A job's schedule in plain words (design ch 12 §5.8: the `create_job` item shows "the exact
schedule … in plain words"), and the line a run's thread is rooted on ("Morning triage ·
09:00", ch 11 §7.1). Functions: `local`, `zone_name`, `interval`, `describe`, `fire_label`.

[`services/cowork_agent/storm/jobs/schedule.py`](https://github.com/quirq-ai/xo-space/blob/main/services/cowork_agent/storm/jobs/schedule.py) · code · 2693 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
