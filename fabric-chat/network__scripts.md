<!-- quirq-wiki-generated repo=fabric-chat dir=network/scripts -->

# fabric-chat / network/scripts

Source: [network/scripts](https://github.com/quirq-ai/fabric-chat/tree/main/network/scripts) in [fabric-chat](https://github.com/quirq-ai/fabric-chat).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### artifacts.sh

Makes the test certificates, each channel's first block and the chaincode package. Runs once
in a throwaway tools container, with .generated mounted at /work. Shebang `#!/bin/bash`.
Fails fast (`set -e`).

[`network/scripts/artifacts.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/network/scripts/artifacts.sh) · code · 2088 bytes

### chaincode.sh

Deploys the chaincode the Fabric 2.x way: every company installs the package on its own peer
and approves the definition for itself. Once more than half have approved, one of them
commits it. Safe to run again: anything already in place is skipped. Shebang `#!/bin/bash`.
Functions: `committed_sequence`.

[`network/scripts/chaincode.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/network/scripts/chaincode.sh) · code · 3766 bytes

### channels.sh

Joins each company's orderer and peer to the channels it belongs to. Safe to run again:
anything already done is skipped. Shebang `#!/bin/bash`. Functions: `join_orderer`,
`join_peer`.

[`network/scripts/channels.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/network/scripts/channels.sh) · code · 1884 bytes

### enrol.sh

enrol.sh Runs inside a company's CA container. Registers the person with the CA, then enrols
them: makes a private key, has the CA sign a certificate for it, and leaves both in the
company's wallet folder. That certificate is the person's identity on the network. Prints
"enrolled" or "already enrolled". Shebang `#!/bin/bash`. Fails fast (`set -e`).

[`network/scripts/enrol.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/network/scripts/enrol.sh) · code · 1765 bytes

### heights.sh

Prints one line of JSON per channel and company: how many blocks that company's peer holds
and the hash of its newest block. Equal hashes mean the companies hold the same ledger.
Shebang `#!/bin/bash`.

[`network/scripts/heights.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/network/scripts/heights.sh) · code · 760 bytes

### lib.sh

Shared by the scripts that run inside the tools container. The facts about the network come
from /work/net.env, which network/generate.mjs writes. Shebang `#!/bin/bash`. Functions:
`use_org`, `orderer_tls`, `retry`. Fails fast (`set -e`).

[`network/scripts/lib.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/network/scripts/lib.sh) · code · 1574 bytes

_Generated 2026-11-13 13:30 UTC from `main`._
