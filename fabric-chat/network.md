<!-- quirq-wiki-generated repo=fabric-chat dir=network -->

# fabric-chat / network

Source: [network](https://github.com/quirq-ai/fabric-chat/tree/main/network) in [fabric-chat](https://github.com/quirq-ai/fabric-chat).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### generate.mjs

Writes the network's configuration files from network.json into .generated/. Usage: node
network/generate.mjs One company in network.json becomes: a peer (with its CouchDB state
database), a Raft orderer, a certificate authority and a chaincode container. One workspace
becomes one Fabric channel.

[`network/generate.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/network/generate.mjs) · code · 19890 bytes

### net.mjs

Starts and stops the Fabric Chat test network. It runs the same from PowerShell, Git Bash or
Linux: this file only calls Docker, and everything that needs Fabric's tools runs inside
containers.

[`network/net.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/network/net.mjs) · code · 7890 bytes

_Generated 2026-11-14 12:35 UTC from `main`._
