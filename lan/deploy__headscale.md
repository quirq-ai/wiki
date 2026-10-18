<!-- quirq-wiki-generated repo=lan dir=deploy/headscale -->

# lan / deploy/headscale

Source: [deploy/headscale](https://github.com/quirq-ai/lan/tree/main/deploy/headscale) in [lan](https://github.com/quirq-ai/lan).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### config.yaml

YAML file `config.yaml`. Top-level keys: `# Headscale config for lan. Docs`, `listen_addr`,
`metrics_listen_addr`, `grpc_listen_addr`, `noise`, `prefixes`, `# https`, `derp`,
`database`, `policy`, and 4 more. Headscale config for lan. Docs:
https://headscale.net/stable/ref/configuration/ server_url and the DERP public IP come from
env (HEADSCALE_SERVER_URL, HEADSCALE_DERP_SERVER_IPV4), set in docker-compose.yml from .env.

[`deploy/headscale/config.yaml`](https://github.com/quirq-ai/lan/blob/main/deploy/headscale/config.yaml) · code · 1283 bytes

_Generated 2026-10-18 09:59 UTC from `main`._
