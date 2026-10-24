<!-- quirq-wiki-generated repo=lan dir=e2e -->

# lan / e2e

Source: [e2e](https://github.com/quirq-ai/lan/tree/main/e2e) in [lan](https://github.com/quirq-ai/lan).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### headscale.yaml

YAML file `headscale.yaml`. Top-level keys: `server_url`, `listen_addr`,
`metrics_listen_addr`, `grpc_listen_addr`, `noise`, `prefixes`, `derp`, `database`,
`policy`, `dns`, and 3 more. Local Headscale for the e2e test. __DIR__ is replaced by
run.sh.

[`e2e/headscale.yaml`](https://github.com/quirq-ai/lan/blob/main/e2e/headscale.yaml) · code · 718 bytes

### run.sh

End-to-end test: real Headscale + lan-server (dev auth) + three lan nodes on this machine.
Checks the five "Done when" criteria from DESIGN.md. Shebang `#!/usr/bin/env bash`.
Functions: `ok`, `bad`, `step`, `cleanup`, `wait_log`, `as`.

[`e2e/run.sh`](https://github.com/quirq-ai/lan/blob/main/e2e/run.sh) · code · 6006 bytes

_Generated 2026-10-24 09:54 UTC from `main`._
