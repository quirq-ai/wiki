<!-- quirq-wiki-generated repo=xo-space dir=services/doctor -->

# xo-space / services/doctor

Source: [services/doctor](https://github.com/quirq-ai/xo-space/tree/main/services/doctor) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

xo-doctor: tells a person when Quirq's on-disk state stopped being consistent. Built with
FastAPI.

[`services/doctor/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/doctor/__init__.py) · code · 325 bytes

### catalog.py

What each state file is, what its damage costs, and the safe next step. Classes: `About`,
`_Missing`. Functions: `about`, `level_for`, `labels`, `fill`, `read_evidence`.

[`services/doctor/catalog.py`](https://github.com/quirq-ai/xo-space/blob/main/services/doctor/catalog.py) · code · 25636 bytes

### checks.py

The doctor's checks. Each takes a Context, returns findings, and writes nothing. Functions:
`roots`, `disk_space`, `reads`, `space_identity`, `duplicate_ids`, `stale_temps`,
`private_permissions`, `layout_moves`, and 2 more.

[`services/doctor/checks.py`](https://github.com/quirq-ai/xo-space/blob/main/services/doctor/checks.py) · code · 34986 bytes

### context.py

What one doctor run knows: the roots, the time, and what it already read. Classes:
`Context`. Functions: `_components_snapshot`, `_root`.

[`services/doctor/context.py`](https://github.com/quirq-ai/xo-space/blob/main/services/doctor/context.py) · code · 4458 bytes

### history.py

History files: the Space timeline and each project's timeline (#188 RC5). Functions:
`check`.

[`services/doctor/history.py`](https://github.com/quirq-ai/xo-space/blob/main/services/doctor/history.py) · code · 4465 bytes

### inventory.py

The state files the doctor knows: where they live, how much they matter, and which schema
versions this xo-space reads (architecture §7.2-7.3). Classes: `Spec`. Functions:
`spec_for`, `schema_file_versions`, `stamp_required`, `accepted`, `names`, `walk_files`.

[`services/doctor/inventory.py`](https://github.com/quirq-ai/xo-space/blob/main/services/doctor/inventory.py) · code · 11234 bytes

### leftovers.py

Leftover runtime data: `/projects//` no project uses. Classes: `Leftover`, `Survey`,
`DoctorError`. Functions: `describe_unknown`, `survey`, `too_recent`, `check`, `move_aside`.

[`services/doctor/leftovers.py`](https://github.com/quirq-ai/xo-space/blob/main/services/doctor/leftovers.py) · code · 19914 bytes

### liveness.py

Is each background part of the Space alive and succeeding? Functions: `watcher_enabled`,
`stale_after`, `heartbeat_age`, `watcher_dead`, `watcher_alive`, `usage_state_path`,
`watcher`, `components`, and 5 more.

[`services/doctor/liveness.py`](https://github.com/quirq-ai/xo-space/blob/main/services/doctor/liveness.py) · code · 32192 bytes

### model.py

The vocabulary of a doctor report: levels, findings, check results. Classes: `Finding`,
`CheckResult`. Functions: `worst`, `rank`, `printable`, `ago`, `size`, `compose_why`, `ev`,
`moment`.

[`services/doctor/model.py`](https://github.com/quirq-ai/xo-space/blob/main/services/doctor/model.py) · code · 5421 bytes

### projects.py

Project folders and the runtime keys each one uses. Classes: `Project`. Functions:
`is_safe_runtime_key`, `scan`.

[`services/doctor/projects.py`](https://github.com/quirq-ai/xo-space/blob/main/services/doctor/projects.py) · code · 4094 bytes

### reading.py

Reading the disk without trusting it. Classes: `ReadResult`, `Tree`. Functions: `classify`,
`read_tail`, `measure_tree`, `readable_dir`.

[`services/doctor/reading.py`](https://github.com/quirq-ai/xo-space/blob/main/services/doctor/reading.py) · code · 9811 bytes

### relate.py

One entry per underlying problem (#188 design §10). Functions: `relate`.

[`services/doctor/relate.py`](https://github.com/quirq-ai/xo-space/blob/main/services/doctor/relate.py) · code · 5201 bytes

### run.py

Run every check with error isolation and assemble the report (architecture §5). Functions:
`run_checks`.

[`services/doctor/run.py`](https://github.com/quirq-ai/xo-space/blob/main/services/doctor/run.py) · code · 5251 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
