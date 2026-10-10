<!-- quirq-wiki-generated repo=xo-space dir=plugins/quirq/scripts -->

# xo-space / plugins/quirq/scripts

Source: [plugins/quirq/scripts](https://github.com/quirq-ai/xo-space/tree/main/plugins/quirq/scripts) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### build_space_app.py

Bundle the real Space UI (space_ui/) into one self-contained MCP App view. Runnable as a
script via `if __name__ == '__main__'`. Functions: `fail`, `source_files`, `source_digest`,
`built_digest`, `body_markup`, `inline_css`, `npx`, `bundle_js`, and 3 more.

[`plugins/quirq/scripts/build_space_app.py`](https://github.com/quirq-ai/xo-space/blob/main/plugins/quirq/scripts/build_space_app.py) · code · 7176 bytes

### discover.sh

Read-only local discovery. Requires only bash, curl, and POSIX awk. Keep LF line endings
(see .gitattributes): bash cannot run this file with CRLF. A pointer is a last-known-
location hint; discovery never installs or starts anything. stdout contains exactly one JSON
object (running, installed, or not_installed). QUIRQ_DISCOVER_PORTS replaces the fallback
ports, not the pointer port.

[`plugins/quirq/scripts/discover.sh`](https://github.com/quirq-ai/xo-space/blob/main/plugins/quirq/scripts/discover.sh) · code · 7667 bytes

### package_plugin.py

Create a plugin-root upload ZIP or an optional local marketplace archive. Runnable as a
script via `if __name__ == '__main__'`. Functions: `build_space_app`, `package`.

[`plugins/quirq/scripts/package_plugin.py`](https://github.com/quirq-ai/xo-space/blob/main/plugins/quirq/scripts/package_plugin.py) · code · 3117 bytes

### space.sh

Codex plugin entry point. The plugin cache holds only this launcher; the checkout,
virtualenv and state belong to the chosen workspace. Shebang `#!/usr/bin/env bash`.
Functions: `fail`, `usage`, `absolute_directory`, `check_codex`, `install_space`,
`start_space`, `report_ready`, `start_status`, `json_quote`, `launch_server`.

[`plugins/quirq/scripts/space.sh`](https://github.com/quirq-ai/xo-space/blob/main/plugins/quirq/scripts/space.sh) · code · 9583 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
