<!-- quirq-wiki-generated repo=space-hub dir=docker -->

# space-hub / docker

Source: [docker](https://github.com/quirq-ai/space-hub/tree/main/docker) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Caddyfile

Extensionless file `Caddyfile`. TLS front for docker compose. The server image already
filters paths, so this only terminates HTTPS and forwards.

[`docker/Caddyfile`](https://github.com/quirq-ai/space-hub/blob/main/docker/Caddyfile) · other · 314 bytes

### server-entrypoint.sh

Start SpacetimeDB on an internal port and the allowlist proxy on the public port, publish
(or update) the spacehub module, then start the web service (sign in, sign up, GitHub
import). A starting proxy holds the public port at once, so platform probes see it open, but
answers 503 to everything: nobody reaches SpacetimeDB until the module is published and the
hub admin claimed. Only then does the real allowlist proxy Shebang `#!/bin/sh`.

[`docker/server-entrypoint.sh`](https://github.com/quirq-ai/space-hub/blob/main/docker/server-entrypoint.sh) · code · 6625 bytes

### server.Caddyfile

Caddyfile file `server.Caddyfile`. Built into the server image. SpacetimeDB listens only
inside the container; this is the one public port.

[`docker/server.Caddyfile`](https://github.com/quirq-ai/space-hub/blob/main/docker/server.Caddyfile) · code · 1589 bytes

### starting.Caddyfile

Caddyfile file `starting.Caddyfile`. Built into the server image. Holds the public port
while the server starts (so platform probes see it open) and answers 503 to everything, so
nobody reaches SpacetimeDB before the entrypoint has published the module and claimed the
hub admin. server.Caddyfile takes the port over after that.

[`docker/starting.Caddyfile`](https://github.com/quirq-ai/space-hub/blob/main/docker/starting.Caddyfile) · code · 406 bytes

_Generated 2026-10-27 11:09 UTC from `main`._
