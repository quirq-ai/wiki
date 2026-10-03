<!-- quirq-wiki-generated repo=euler dir=services -->

# euler / services

Source: [services](https://github.com/quirq-ai/euler/tree/main/services) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

Empty file `__init__.py` in the source tree. It is present (often as a placeholder or
`.gitkeep` stand-in) but contains no content to describe.

[`services/__init__.py`](https://github.com/quirq-ai/euler/blob/main/services/__init__.py) · empty · 0 bytes

### periodic.py

The one loop skeleton behind background pollers. Functions: `run_forever`.

[`services/periodic.py`](https://github.com/quirq-ai/euler/blob/main/services/periodic.py) · code · 1420 bytes

### watcher.py

The Euler watcher: a periodic tick that logs and reloads `timeline.json`. Classes:
`WatcherState`. Functions: `watcher_enabled`, `watcher_interval_s`, `timeline_path`,
`load_timeline`, `tick`, `run`.

[`services/watcher.py`](https://github.com/quirq-ai/euler/blob/main/services/watcher.py) · code · 3529 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
