<!-- quirq-wiki-generated repo=fabric-chat dir=ctl -->

# fabric-chat / ctl

Source: [ctl](https://github.com/quirq-ai/fabric-chat/tree/main/ctl) in [fabric-chat](https://github.com/quirq-ai/fabric-chat).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Dockerfile

Container build file `Dockerfile`. Base image `hyperledger/fabric-ca:${CA_VERSION}`. Starts
with `["/opt/ctl/ctl"]`. Instructions used: `FROM`, `COPY`, `ENV`, `RUN`, `WORKDIR`,
`ENTRYPOINT`.

[`ctl/Dockerfile`](https://github.com/quirq-ai/fabric-chat/blob/main/ctl/Dockerfile) · other · 1199 bytes

### agent.sh

ctl agent: the one part of a company's server that stays up holding the node administrator's
key. Shebang `#!/bin/bash`. Functions: `run`, `handle`. Fails fast (`set -e`).

[`ctl/agent.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/ctl/agent.sh) · code · 4309 bytes

### compose.sh

ctl compose: reads company.json on standard input and prints compose.generated.yaml, the
part of the Docker Compose project that depends on the company's settings. compose.yaml says
what runs. This file says what is opened to the world outside this server, and nothing is
unless it is here Shebang `#!/bin/bash`.

[`ctl/compose.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/ctl/compose.sh) · code · 2686 bytes

### ctl

Extensionless file `ctl`. ctl : the admin tool for one company's Fabric Chat node. It runs
inside the company's own Docker Compose project, started by ./chat, and does the work that
needs Fabric's tools.

[`ctl/ctl`](https://github.com/quirq-ai/fabric-chat/blob/main/ctl/ctl) · other · 1193 bytes

### env.sh

ctl env: reads company.json on standard input, checks it, and prints the .env file Docker
Compose reads. Nothing here is secret: passwords and keys are made later and never leave
their volumes. Shebang `#!/bin/bash`.

[`ctl/env.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/ctl/env.sh) · code · 1545 bytes

### init.sh

ctl init: runs once the certificate authority is up. Has it issue a certificate to each
node, to the node's administrator and to the chat app, then makes the home workspace's first
block and the chaincode package. Safe to run again: whatever is already there is left alone.
Shebang `#!/bin/bash`. Functions: `tidy`, `issue`, `issue_tls`.

[`ctl/init.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/ctl/init.sh) · code · 11703 bytes

### lib.sh

Shared by the ctl commands: reads and checks company.json, and names the folders each
command works in. Every folder below is a Docker volume on the company's own server. Shebang
`#!/bin/bash`. Functions: `fail`, `retry`, `secret`, `node_ous`, `read_company`,
`use_admin`. Fails fast (`set -e`).

[`ctl/lib.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/ctl/lib.sh) · code · 10162 bytes

### prepare.sh

ctl prepare: the first step of ./chat up. Makes what must exist before any node starts: the
company's passwords and its root certificate. Everything is made on this server and stays in
its volumes. Safe to run again: whatever is already there is left alone. Shebang
`#!/bin/bash`.

[`ctl/prepare.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/ctl/prepare.sh) · code · 3835 bytes

### proxy.sh

ctl proxy: answers for the chat over HTTPS, and hands each request on to the chat app.
Shebang `#!/bin/bash`.

[`ctl/proxy.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/ctl/proxy.sh) · code · 1970 bytes

### setup.sh

ctl setup: runs once the peer and the orderer are up. Joins both to the home workspace and
deploys the chat's rules the Fabric 2.x way: install, approve, commit. Safe to run again:
whatever is already in place is skipped, so a second ./chat up takes a few seconds. Shebang
`#!/bin/bash`. Functions: `join_orderer`, `leads`, `join_peer`, `committed_sequence`.

[`ctl/setup.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/ctl/setup.sh) · code · 4548 bytes

### status.sh

ctl status: asks this company's own peer how much of each workspace's ledger it holds.
Shebang `#!/bin/bash`.

[`ctl/status.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/ctl/status.sh) · code · 1104 bytes

### workspaces.sh

Cards and workspaces: how this company's node comes to share a ledger with another
company's. Sourced after lib.sh, read_company and use_admin. Shebang `#!/bin/bash`.
Functions: `fingerprint`, `own_card`, `lay_card`, `keep_card`, `probe`, `reach`,
`write_rules`, `make_block`, `config_of`, `block_channel`, and 8 more.

[`ctl/workspaces.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/ctl/workspaces.sh) · code · 24689 bytes

_Generated 2026-11-14 12:35 UTC from `main`._
