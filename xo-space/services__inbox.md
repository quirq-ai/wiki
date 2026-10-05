<!-- quirq-wiki-generated repo=xo-space dir=services/inbox -->

# xo-space / services/inbox

Source: [services/inbox](https://github.com/quirq-ai/xo-space/tree/main/services/inbox) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Space inbox: one human-readable `~/.quirq/inbox/inbox.json` holding information that arrived
in the workspace, its seen/done state, and the feeder cursors.

[`services/inbox/__init__.py`](https://github.com/quirq-ai/xo-space/blob/main/services/inbox/__init__.py) · code · 1332 bytes

### feeders.py

Feeders: turn what arrived in the workspace into inbox items. Classes: `Watched`,
`FeedResult`. Functions: `timeline`, `todos`, `sharing`, `issues`, `connections`, `feeder`.

[`services/inbox/feeders.py`](https://github.com/quirq-ai/xo-space/blob/main/services/inbox/feeders.py) · code · 20352 bytes

### service.py

Router-facing facade for the inbox. Raises :class:InboxError; knows nothing about HTTP.
Functions: `refresh`, `list_items`, `create_item`, `update_item`, `update_many`,
`delete_item`.

[`services/inbox/service.py`](https://github.com/quirq-ai/xo-space/blob/main/services/inbox/service.py) · code · 8898 bytes

### store.py

The inbox file: `~/.quirq/inbox/inbox.json (under QUIRQ_STATE_ROOT`). Classes: `InboxError`.
Functions: `is_project_id`, `is_pid`, `pid_for`, `is_url`, `is_link_path`, `validate_link`,
`build_item`, `source_config`, and 11 more.

[`services/inbox/store.py`](https://github.com/quirq-ai/xo-space/blob/main/services/inbox/store.py) · code · 18970 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
