<!-- quirq-wiki-generated repo=fabric-chat dir=chaincode/chat -->

# fabric-chat / chaincode/chat

Source: [chaincode/chat](https://github.com/quirq-ai/fabric-chat/tree/main/chaincode/chat) in [fabric-chat](https://github.com/quirq-ai/fabric-chat).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .dockerignore

`.dockerignore` tells git or Docker which paths to omit. It currently lists 2 pattern(s)
including `*_test.go`, `vendor/`. Generated and secret files matching these patterns are not
in the clone the wiki summarizes.

[`chaincode/chat/.dockerignore`](https://github.com/quirq-ai/fabric-chat/blob/main/chaincode/chat/.dockerignore) · other · 18 bytes

### Dockerfile

Container build file `Dockerfile`. Base image `golang:1.26-alpine`. Exposes ports `9999`.
Starts with `["/usr/local/bin/chat"]`. Instructions used: `FROM`, `WORKDIR`, `COPY`, `RUN`,
`EXPOSE`, `ENTRYPOINT`.

[`chaincode/chat/Dockerfile`](https://github.com/quirq-ai/fabric-chat/blob/main/chaincode/chat/Dockerfile) · other · 423 bytes

### chat.go

Go file `chat.go`. Package main is the chat chaincode: the rules every company's peer runs
before it will sign a change. The same code runs on each endorsing peer, and a transaction
only counts if they all got the same result. Functions that write take a scope and one JSON
document of details. Functions that read return JSON. Errors start with a code, such as
CHAT_NOT_MEMBER, that the app shows a message for.

[`chaincode/chat/chat.go`](https://github.com/quirq-ai/fabric-chat/blob/main/chaincode/chat/chat.go) · code · 20450 bytes

### chat_test.go

Go file `chat_test.go`. package main.

[`chaincode/chat/chat_test.go`](https://github.com/quirq-ai/fabric-chat/blob/main/chaincode/chat/chat_test.go) · code · 17666 bytes

### fake_test.go

Go file `fake_test.go`. package main.

[`chaincode/chat/fake_test.go`](https://github.com/quirq-ai/fabric-chat/blob/main/chaincode/chat/fake_test.go) · code · 10190 bytes

### go.mod

Mod file `go.mod`. module fabchat/chaincode/chat.

[`chaincode/chat/go.mod`](https://github.com/quirq-ai/fabric-chat/blob/main/chaincode/chat/go.mod) · code · 1357 bytes

### go.sum

Package-manager lockfile (go.sum, 6.1 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`chaincode/chat/go.sum`](https://github.com/quirq-ai/fabric-chat/blob/main/chaincode/chat/go.sum) · lockfile · 6209 bytes

### ledger.go

Go file `ledger.go`. package main.

[`chaincode/chat/ledger.go`](https://github.com/quirq-ai/fabric-chat/blob/main/chaincode/chat/ledger.go) · code · 11379 bytes

### main.go

Go file `main.go`. package main.

[`chaincode/chat/main.go`](https://github.com/quirq-ai/fabric-chat/blob/main/chaincode/chat/main.go) · code · 1435 bytes

### model.go

Go file `model.go`. package main.

[`chaincode/chat/model.go`](https://github.com/quirq-ai/fabric-chat/blob/main/chaincode/chat/model.go) · code · 5545 bytes

_Generated 2026-11-13 13:30 UTC from `main`._
