<!-- quirq-wiki-generated repo=lan dir=deploy/headscale -->

# lan / deploy/headscale

Source: [deploy/headscale](https://github.com/quirq-ai/lan/tree/main/deploy/headscale) in [lan](https://github.com/quirq-ai/lan).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Dockerfile

Container build file `Dockerfile`. Base image `headscale/headscale:0.29.5`. Exposes ports
`8080`. Starts with `["/entrypoint.sh"]`. Instructions used: `FROM`, `RUN`, `COPY`,
`EXPOSE`, `ENTRYPOINT`.

[`deploy/headscale/Dockerfile`](https://github.com/quirq-ai/lan/blob/main/deploy/headscale/Dockerfile) · other · 902 bytes

### config.yaml

YAML file `config.yaml`. Top-level keys: `# Headscale config for lan. Docs`, `listen_addr`,
`metrics_listen_addr`, `grpc_listen_addr`, `noise`, `prefixes`, `# https`, `derp`,
`database`, `policy`, and 4 more. Headscale config for lan. Docs:
https://headscale.net/stable/ref/configuration/ server_url and the DERP public IP come from
env (HEADSCALE_SERVER_URL, HEADSCALE_DERP_SERVER_IPV4), set in docker-compose.yml from .env.

[`deploy/headscale/config.yaml`](https://github.com/quirq-ai/lan/blob/main/deploy/headscale/config.yaml) · code · 1283 bytes

### entrypoint.sh

Starts Headscale and, if LAN_HEADSCALE_API_KEY is set, seeds that API key into its database,
so lan-server can use the same key without anyone running headscale apikeys create inside
the container. Shebang `#!/bin/sh`. Fails fast (`set -e`).

[`deploy/headscale/entrypoint.sh`](https://github.com/quirq-ai/lan/blob/main/deploy/headscale/entrypoint.sh) · code · 2391 bytes

_Generated 2026-10-25 10:15 UTC from `main`._
