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
import). The proxy comes up first so platform probes see an open port at once; /healthz only
turns 200 once SpacetimeDB answers. Publishing never passes --delete-data: a breaking schema
change makes startup fail instead of wiping spaces. Shebang `#!/bin/sh`.

[`docker/server-entrypoint.sh`](https://github.com/quirq-ai/space-hub/blob/main/docker/server-entrypoint.sh) · code · 2405 bytes

### server.Caddyfile

Caddyfile file `server.Caddyfile`. Built into the server image. SpacetimeDB listens only
inside the container; this is the one public port.

[`docker/server.Caddyfile`](https://github.com/quirq-ai/space-hub/blob/main/docker/server.Caddyfile) · code · 1257 bytes

_Generated 2026-10-23 10:36 UTC from `main`._
