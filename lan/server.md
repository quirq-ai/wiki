<!-- quirq-wiki-generated repo=lan dir=server -->

# lan / server

Source: [server](https://github.com/quirq-ai/lan/tree/main/server) in [lan](https://github.com/quirq-ai/lan).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Dockerfile

Container build file `Dockerfile`. Base image `golang:1.27.2`. Exposes ports `8443`. Starts
with `["/lan-server"]`. Instructions used: `FROM`, `WORKDIR`, `COPY`, `RUN`, `ENV`,
`EXPOSE`, `ENTRYPOINT`.

[`server/Dockerfile`](https://github.com/quirq-ai/lan/blob/main/server/Dockerfile) · other · 330 bytes

### auth.go

Go file `auth.go`. package main.

[`server/auth.go`](https://github.com/quirq-ai/lan/blob/main/server/auth.go) · code · 2098 bytes

### go.mod

Mod file `go.mod`. module lan-server.

[`server/go.mod`](https://github.com/quirq-ai/lan/blob/main/server/go.mod) · code · 29 bytes

### headscale.go

Go file `headscale.go`. package main.

[`server/headscale.go`](https://github.com/quirq-ai/lan/blob/main/server/headscale.go) · code · 3968 bytes

### main.go

Go file `main.go`. lan-server: owns networks, members and invites, and is the only thing
that talks to Headscale. See ../DESIGN.md.

[`server/main.go`](https://github.com/quirq-ai/lan/blob/main/server/main.go) · code · 9072 bytes

### store.go

Go file `store.go`. package main.

[`server/store.go`](https://github.com/quirq-ai/lan/blob/main/server/store.go) · code · 2353 bytes

_Generated 2026-10-22 10:44 UTC from `main`._
