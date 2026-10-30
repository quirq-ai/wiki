<!-- quirq-wiki-generated repo=lan dir=deploy -->

# lan / deploy

Source: [deploy](https://github.com/quirq-ai/lan/tree/main/deploy) in [lan](https://github.com/quirq-ai/lan).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .env.example

Environment template `.env.example` (values omitted from the wiki). Copy to .env and fill
in. Keys: `HS_DOMAIN`, `LAN_DOMAIN`, `PUBLIC_IPV4`, `HEADSCALE_API_KEY`, `CLERK_ISSUER`,
`CLERK_OAUTH_CLIENT_ID`. Copy to `.env` locally; never commit real credentials.

[`deploy/.env.example`](https://github.com/quirq-ai/lan/blob/main/deploy/.env.example) · code · 649 bytes

### Caddyfile

Extensionless file `Caddyfile`. {$HS_DOMAIN} { reverse_proxy headscale:8080 }.

[`deploy/Caddyfile`](https://github.com/quirq-ai/lan/blob/main/deploy/Caddyfile) · other · 97 bytes

### README.md

The project README (“Deploy the lan server stack”). One VPS with Docker. It runs Caddy (TLS)
→ Headscale (control plane + embedded DERP relay) and lan-server.

[`deploy/README.md`](https://github.com/quirq-ai/lan/blob/main/deploy/README.md) · code · 1681 bytes

### docker-compose.yml

YAML file `docker-compose.yml`. Top-level keys: `# lan server stack`, `# Setup`, `services`,
`volumes`. lan server stack: Headscale (control + DERP relay) + lan-server, behind Caddy
(TLS). Setup: see deploy/README.md.

[`deploy/docker-compose.yml`](https://github.com/quirq-ai/lan/blob/main/deploy/docker-compose.yml) · code · 1260 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
