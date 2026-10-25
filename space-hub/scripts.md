<!-- quirq-wiki-generated repo=space-hub dir=scripts -->

# space-hub / scripts

Source: [scripts](https://github.com/quirq-ai/space-hub/tree/main/scripts) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### e2e.sh

End-to-end test: starts a throwaway SpacetimeDB on a spare port, publishes the module, then
drives the spacehub CLI and real git through git-remote-quirq (and git-remote-spacehub for
old spacehub:// URLs). scripts/e2e.sh (needs: spacetime, git, node 22+, python3)
SPACEHUB_E2E_SERVER=ws://127.0.0.1:3000 scripts/e2e.sh against a running server, e.g.

[`scripts/e2e.sh`](https://github.com/quirq-ai/space-hub/blob/main/scripts/e2e.sh) · code · 47386 bytes

### install-cli.sh

Install the spacehub client globally, the way gh is installed: puts spacehub and git-remote-
quirq (plus git-remote-spacehub, for older clones) on your PATH. Needs Node 22+ and git.
scripts/install-cli.sh (npm's global prefix) scripts/install-cli.sh --prefix ~/.local
Shebang `#!/usr/bin/env bash`. Fails fast (`set -e`).

[`scripts/install-cli.sh`](https://github.com/quirq-ai/space-hub/blob/main/scripts/install-cli.sh) · code · 845 bytes

### setup.sh

Install, build and publish spacehub. scripts/setup.sh publish to the local server (spacetime
start) scripts/setup.sh maincloud publish to SpacetimeDB Maincloud The database name
defaults to "spacehub"; override with SPACEHUB_DB. Shebang `#!/usr/bin/env bash`. Fails fast
(`set -e`).

[`scripts/setup.sh`](https://github.com/quirq-ai/space-hub/blob/main/scripts/setup.sh) · code · 1083 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
