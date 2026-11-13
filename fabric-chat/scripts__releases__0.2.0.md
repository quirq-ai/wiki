<!-- quirq-wiki-generated repo=fabric-chat dir=scripts/releases/0.2.0 -->

# fabric-chat / scripts/releases/0.2.0

Source: [scripts/releases/0.2.0](https://github.com/quirq-ai/fabric-chat/tree/main/scripts/releases/0.2.0) in [fabric-chat](https://github.com/quirq-ai/fabric-chat).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### chat

Extensionless file `chat`. chat: runs this company's Fabric Chat server. It needs Docker and
nothing else.

[`scripts/releases/0.2.0/chat`](https://github.com/quirq-ai/fabric-chat/blob/main/scripts/releases/0.2.0/chat) · other · 7758 bytes

### compose.together.yaml

YAML file `compose.together.yaml`. Top-level keys: `# Used only when company.json names a
"dockerNetwork`, `# known by the name its company.json gives it. Nothing else joins it`,
`services`, `networks`. Used only when company.json names a "dockerNetwork": several
companies on one machine.

[`scripts/releases/0.2.0/compose.together.yaml`](https://github.com/quirq-ai/fabric-chat/blob/main/scripts/releases/0.2.0/compose.together.yaml) · code · 931 bytes

### compose.yaml

YAML file `compose.yaml`. Top-level keys: `# Fabric Chat`, `# The parts start in this
order`, `# "docker compose up`, `x-ctl`, `services`, `volumes`. Fabric Chat: everything one
company runs, on one server.

[`scripts/releases/0.2.0/compose.yaml`](https://github.com/quirq-ai/fabric-chat/blob/main/scripts/releases/0.2.0/compose.yaml) · code · 9579 bytes

_Generated 2026-11-13 13:30 UTC from `main`._
