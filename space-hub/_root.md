<!-- quirq-wiki-generated repo=space-hub dir=. -->

# space-hub / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/space-hub/tree/main) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .dockerignore

`.dockerignore` tells git or Docker which paths to omit. It currently lists 5 pattern(s)
including `**/node_modules`, `**/dist`, `.git`, `*.log`, `scripts`. Generated and secret
files matching these patterns are not in the clone the wiki summarizes.

[`.dockerignore`](https://github.com/quirq-ai/space-hub/blob/main/.dockerignore) · other · 43 bytes

### .gitattributes

Extensionless file `.gitattributes`. Written by spacetime generate; do not edit by hand.

[`.gitattributes`](https://github.com/quirq-ai/space-hub/blob/main/.gitattributes) · other · 119 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 3 pattern(s)
including `node_modules/`, `dist/`, `*.log`. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/space-hub/blob/main/.gitignore) · other · 26 bytes

### Dockerfile

Container build file `Dockerfile`. Base image `--platform=$BUILDPLATFORM`. Exposes ports
`3000`. Starts with `["spacehub"]`. Instructions used: `FROM`, `COPY`, `WORKDIR`, `RUN`,
`ENTRYPOINT`, `CMD`, `ENV`, `EXPOSE`.

[`Dockerfile`](https://github.com/quirq-ai/space-hub/blob/main/Dockerfile) · other · 4337 bytes

### README.md

The project README (“spacehub”). Git hosting with a GitHub-style layout (owner/space),
stored in SpacetimeDB. Like GitHub, it has two halves.

[`README.md`](https://github.com/quirq-ai/space-hub/blob/main/README.md) · code · 12896 bytes

### docker-compose.yml

YAML file `docker-compose.yml`. Top-level keys: `# docker compose up -d --build plain HTTP
on`, `# Clients`, `# Admin (SQL, logs) stays inside the container`, `# docker compose exec
spacehub spacetime --root-dir /data logs --server http`, `services`, `volumes`. spacehub
server behind a Caddy TLS front.

[`docker-compose.yml`](https://github.com/quirq-ai/space-hub/blob/main/docker-compose.yml) · code · 1040 bytes

_Generated 2026-10-23 10:36 UTC from `main`._
