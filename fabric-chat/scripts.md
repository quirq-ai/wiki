<!-- quirq-wiki-generated repo=fabric-chat dir=scripts -->

# fabric-chat / scripts

Source: [scripts](https://github.com/quirq-ai/fabric-chat/tree/main/scripts) in [fabric-chat](https://github.com/quirq-ai/fabric-chat).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### companies-check.mjs

End-to-end check of companies sharing a workspace. Launches three throwaway companies, each
from node-template in a folder of its own, with its own keys and its own Docker project.
Then does, through each company's own app, what their administrators would do: swap cards,
start a shared workspace, accept the invitation. Nothing crosses from one company to another
except a card and an invitation, both public.

[`scripts/companies-check.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/scripts/companies-check.mjs) · code · 22583 bytes

### company-check.mjs

End-to-end check of a company's own server. Launches a throwaway company from node-template,
walks through what a company does on its first day (the first administrator, adding people,
chatting, members-only conversations, passwords, a restart), and removes it again. Every
check talks to the real app over HTTP, and behind it to a real peer, orderer and certificate
authority.

[`scripts/company-check.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/scripts/company-check.mjs) · code · 30392 bytes

### company.mjs

Starts one more company on this machine, from node-template. npm run company -- "Dune
Freight" dune.example npm run company -- "Dune Freight" dune.example --port 8083 --admin
dana "Dana Okafor" Each company gets a folder of its own under companies/, with its own
Docker project, keys and volumes.

[`scripts/company.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/scripts/company.mjs) · code · 4363 bytes

### images.mjs

Builds the three images a company's own server runs, tagged with this repository's version:
fabric-chat-chaincode the chat's rules fabric-chat-ctl the admin tool that sets a node up
fabric-chat-app the chat app Usage: npm run images build them on this machine npm run images
-- --push ghcr.io/quirq-ai/fabric-chat and send them to a registry, where a company's server
can get them Sending needs "docker login" to that registry first.

[`scripts/images.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/scripts/images.mjs) · code · 2990 bytes

### lib.mjs

Shared by the end-to-end checks that launch throwaway companies from node-template. Notable
exports: `docker`, `checker`, `Browser`, `Company`, `root`, `images`, `sleep`, `tokenOf`,
and 1 more.

[`scripts/lib.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/scripts/lib.mjs) · code · 6839 bytes

### rig.mjs

A stand-in for the internet, for checks that need more than one server. Each "server" is a
container that runs a Docker of its own, at an address of its own.

[`scripts/rig.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/scripts/rig.mjs) · code · 13730 bytes

### servers-check.mjs

End-to-end check of two companies on two servers. This machine stands in for the internet
(see rig.mjs). Each company gets a server that holds Docker and nothing else.

[`scripts/servers-check.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/scripts/servers-check.mjs) · code · 28328 bytes

### upgrade-check.mjs

Moves two running companies that share a workspace from the release before this one to this
one, in place and one after the other, as would happen between real companies. It needs the
older release's files and its three images on this machine: npm run test:upgrade --
scripts/releases/0.2.0 0.2.0 scripts/releases keeps the chat script and compose files each
earlier release came with. It uses ports 4795 to 4797 on this machine.

[`scripts/upgrade-check.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/scripts/upgrade-check.mjs) · code · 13821 bytes

_Generated 2026-11-13 13:30 UTC from `main`._
