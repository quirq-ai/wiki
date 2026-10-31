<!-- quirq-wiki-generated repo=space-hub dir=scripts -->

# space-hub / scripts

Source: [scripts](https://github.com/quirq-ai/space-hub/tree/main/scripts) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### cleanup-junk-orgs.sh

Removes the empty orgs that xo made by mistake on hub.quirq.dev. Between xo 1ef9c04 and
82dac60, with a hub found by xo login, xo ran spacehub space create NAME, which makes an org
since this repo's #5; xo 6e6d79b makes projects instead. Shebang `#!/bin/bash`.

[`scripts/cleanup-junk-orgs.sh`](https://github.com/quirq-ai/space-hub/blob/main/scripts/cleanup-junk-orgs.sh) · code · 2852 bytes

### e2e.sh

End-to-end test: starts a throwaway SpacetimeDB on a spare port, publishes the module, then
drives the spacehub CLI and real git through git-remote-quirq (and git-remote-spacehub for
old spacehub:// URLs). scripts/e2e.sh (needs: spacetime, git, node 22+, python3)
SPACEHUB_E2E_SERVER=ws://127.0.0.1:3000 scripts/e2e.sh against a running server, e.g.

[`scripts/e2e.sh`](https://github.com/quirq-ai/space-hub/blob/main/scripts/e2e.sh) · code · 65137 bytes

### install-cli.sh

Install the spacehub client globally, the way gh is installed: puts spacehub and git-remote-
quirq (plus git-remote-spacehub, for older clones) on your PATH. Needs Node 22+ and git.
scripts/install-cli.sh (npm's global prefix) scripts/install-cli.sh --prefix ~/.local
Shebang `#!/usr/bin/env bash`. Fails fast (`set -e`).

[`scripts/install-cli.sh`](https://github.com/quirq-ai/space-hub/blob/main/scripts/install-cli.sh) · code · 2105 bytes

### setup.sh

Install, build and publish spacehub. scripts/setup.sh publish to the local server (spacetime
start) scripts/setup.sh maincloud publish to SpacetimeDB Maincloud The database name
defaults to "spacehub"; override with SPACEHUB_DB. Shebang `#!/usr/bin/env bash`. Fails fast
(`set -e`).

[`scripts/setup.sh`](https://github.com/quirq-ai/space-hub/blob/main/scripts/setup.sh) · code · 1086 bytes

_Generated 2026-10-31 11:18 UTC from `main`._
