<!-- quirq-wiki-generated repo=fabric-chat dir=node-template -->

# fabric-chat / node-template

Source: [node-template](https://github.com/quirq-ai/fabric-chat/tree/main/node-template) in [fabric-chat](https://github.com/quirq-ai/fabric-chat).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitattributes

Extensionless file `.gitattributes`. The chat command and compose.yaml run under Linux, so
every file keeps Unix line endings on every machine.

[`node-template/.gitattributes`](https://github.com/quirq-ai/fabric-chat/blob/main/node-template/.gitattributes) · other · 128 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 5 pattern(s)
including `.env`, `.env.new`, `compose.generated.yaml`, `compose.generated.yaml.new`,
`backups/`. Generated and secret files matching these patterns are not in the clone the wiki
summarizes.

[`node-template/.gitignore`](https://github.com/quirq-ai/fabric-chat/blob/main/node-template/.gitignore) · other · 213 bytes

### LICENSE

License text (MIT License). Governs use, modification, and distribution of this repository.
Read the full file in the source tree before depending on the project in a product or
redistribution.

[`node-template/LICENSE`](https://github.com/quirq-ai/fabric-chat/blob/main/node-template/LICENSE) · other · 1062 bytes

### README.md

The project README (“Your company's Fabric Chat server”). This folder is everything one
company needs to run its own team chat on its own Hyperledger Fabric node, and to share a
workspace with other companies that do the same: three files, and Docker.

[`node-template/README.md`](https://github.com/quirq-ai/fabric-chat/blob/main/node-template/README.md) · code · 18090 bytes

### chat

Extensionless file `chat`. chat: runs this company's Fabric Chat server. It needs Docker and
nothing else.

[`node-template/chat`](https://github.com/quirq-ai/fabric-chat/blob/main/node-template/chat) · other · 13523 bytes

### company.json

JSON document `company.json` whose top-level keys are `name`, `id`, `color`, `hosts`,
`admin`, `listen`, `images`, `release`. Structured data consumed by the surrounding app or
tooling.

[`node-template/company.json`](https://github.com/quirq-ai/fabric-chat/blob/main/node-template/company.json) · code · 418 bytes

### compose.yaml

YAML file `compose.yaml`. Top-level keys: `# Fabric Chat`, `# The parts start in this
order`, `# "docker compose up`, `# and ./chat writes it into compose.generated.yaml, next to
this file`, `x-ctl`, `services`, `volumes`. Fabric Chat: everything one company runs, on one
server.

[`node-template/compose.yaml`](https://github.com/quirq-ai/fabric-chat/blob/main/node-template/compose.yaml) · code · 11605 bytes

_Generated 2026-11-14 12:35 UTC from `main`._
