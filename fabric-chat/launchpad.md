<!-- quirq-wiki-generated repo=fabric-chat dir=launchpad -->

# fabric-chat / launchpad

Source: [launchpad](https://github.com/quirq-ai/fabric-chat/tree/main/launchpad) in [fabric-chat](https://github.com/quirq-ai/fabric-chat).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .gitattributes

Extensionless file `.gitattributes`. *.sh text eol=lf.

[`launchpad/.gitattributes`](https://github.com/quirq-ai/fabric-chat/blob/main/launchpad/.gitattributes) · other · 17 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 1 pattern(s)
including `first-password`. Generated and secret files matching these patterns are not in
the clone the wiki summarizes.

[`launchpad/.gitignore`](https://github.com/quirq-ai/fabric-chat/blob/main/launchpad/.gitignore) · other · 15 bytes

### Dockerfile

Container build file `Dockerfile`. Base image `fabric-chat-ctl:${RELEASE}`. Exposes ports
`3000`. Starts with `["tini", "--", "/opt/solo/start.sh"]`. Instructions used: `FROM`,
`RUN`, `COPY`, `ENV`, `EXPOSE`, `ENTRYPOINT`, `CMD`.

[`launchpad/Dockerfile`](https://github.com/quirq-ai/fabric-chat/blob/main/launchpad/Dockerfile) · other · 3226 bytes

### README.md

The project README (“Fabric Chat in one container (XO Launchpad)”). A normal Fabric Chat
node is seven containers that ./chat up starts with Docker Compose. A host like XO Launchpad
runs one image behind one web address, so this folder builds one image that holds all seven
parts and starts them in the same order, with the same admin scripts.

[`launchpad/README.md`](https://github.com/quirq-ai/fabric-chat/blob/main/launchpad/README.md) · code · 5987 bytes

### start.sh

start.sh: runs one company's whole Fabric Chat node inside this one container. Shebang
`#!/bin/bash`. Functions: `say`, `step`, `stop_all`, `die`, `run`, `once`, `alive`,
`listening`, `wait_for`, `field`, and 1 more.

[`launchpad/start.sh`](https://github.com/quirq-ai/fabric-chat/blob/main/launchpad/start.sh) · code · 13612 bytes

### waiting.mjs

Answers on the chat's port while the node is still starting, which takes about a minute the
first time. A host that checks the port sees it answer at once, and a person who opens the
address sees how far the start has got instead of an error. start.sh stops it just before
the chat app takes the port over.

[`launchpad/waiting.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/launchpad/waiting.mjs) · code · 2036 bytes

_Generated 2026-11-14 12:35 UTC from `main`._
