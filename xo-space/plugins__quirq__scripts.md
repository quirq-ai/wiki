<!-- quirq-wiki-generated repo=xo-space dir=plugins/quirq/scripts -->

# xo-space / plugins/quirq/scripts

Source: [plugins/quirq/scripts](https://github.com/quirq-ai/xo-space/tree/main/plugins/quirq/scripts) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### discover.sh

Read-only local discovery. Requires only bash, curl, and POSIX awk. A pointer is a last-
known-location hint; discovery never installs or starts anything. stdout contains exactly
one JSON object (running, installed, or not_installed). QUIRQ_DISCOVER_PORTS replaces the
fallback ports, not the pointer port. Only verified pointer-port discoveries inherit pointer
paths. Shebang `#!/usr/bin/env bash`.

[`plugins/quirq/scripts/discover.sh`](https://github.com/quirq-ai/xo-space/blob/main/plugins/quirq/scripts/discover.sh) · code · 7585 bytes

### space.sh

Codex plugin entry point. The plugin cache holds only this launcher; the checkout,
virtualenv and state belong to the chosen workspace. Shebang `#!/usr/bin/env bash`.
Functions: `fail`, `usage`, `absolute_directory`, `check_codex`, `install_space`,
`start_space`.

[`plugins/quirq/scripts/space.sh`](https://github.com/quirq-ai/xo-space/blob/main/plugins/quirq/scripts/space.sh) · code · 7856 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
