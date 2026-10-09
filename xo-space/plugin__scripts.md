<!-- quirq-wiki-generated repo=xo-space dir=plugin/scripts -->

# xo-space / plugin/scripts

Source: [plugin/scripts](https://github.com/quirq-ai/xo-space/tree/main/plugin/scripts) in [xo-space](https://github.com/quirq-ai/xo-space).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### discover.sh

Read-only local discovery. Requires only bash, curl, and POSIX awk. Keep LF line endings
(see .gitattributes): bash cannot run this file with CRLF. A pointer is a last-known-
location hint; discovery never installs or starts anything. stdout contains exactly one JSON
object (running, installed, or not_installed). QUIRQ_DISCOVER_PORTS replaces the fallback
ports, not the pointer port.

[`plugin/scripts/discover.sh`](https://github.com/quirq-ai/xo-space/blob/main/plugin/scripts/discover.sh) · code · 7667 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
