<!-- quirq-wiki-generated repo=fabric-chat dir=docs/lab -->

# fabric-chat / docs/lab

Source: [docs/lab](https://github.com/quirq-ai/fabric-chat/tree/main/docs/lab) in [fabric-chat](https://github.com/quirq-ai/fabric-chat).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Lab scripts”). These are the throwaway scripts behind the table "What
was tested for this guide" in [many-companies.md](../many-companies.md). They were run once,
on 12 November 2026, against copies of this project. They are a record of what was proven,
not part of the product: step 2 of the build order turns them into proper commands.

[`docs/lab/README.md`](https://github.com/quirq-ai/fabric-chat/blob/main/docs/lab/README.md) · code · 1926 bytes

### connect-two-companies.mjs

Lab only. Connects two companies that were set up separately: Aster (in ./lab) and Dune (in
./dune). Each has its own folder, its own keys and its own Docker project. The only things
that cross from one to the other are public: a "company card" each way, and the new
channel's first block.

[`docs/lab/connect-two-companies.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/docs/lab/connect-two-companies.mjs) · code · 11208 bytes

### one-company.network.json

JSON document `one-company.network.json` whose top-level keys are `name`, `domain`, `about`,
`fabric`, `consensus`, `orgs`, `workspaces`, `chaincode`, `ports`. Structured data consumed
by the surrounding app or tooling.

[`docs/lab/one-company.network.json`](https://github.com/quirq-ai/fabric-chat/blob/main/docs/lab/one-company.network.json) · code · 1043 bytes

### talk.ts

Lab only. One person does one thing on one channel, through their own company's peer. usage:
tsx server/pairtalk.ts <handle> <channel> join|create|post|read [text].

[`docs/lab/talk.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/docs/lab/talk.ts) · code · 2137 bytes

### three-companies.network.json

JSON document `three-companies.network.json` whose top-level keys are `name`, `domain`,
`about`, `fabric`, `consensus`, `orgs`, `workspaces`, `chaincode`, `ports`. Structured data
consumed by the surrounding app or tooling.

[`docs/lab/three-companies.network.json`](https://github.com/quirq-ai/fabric-chat/blob/main/docs/lab/three-companies.network.json) · code · 2319 bytes

### who-needs-whom.ts

Lab only: checks the claims the many-companies guide makes about who needs whom. a company's
own workspace needs nobody else's nodes a two-company workspace needs both companies' peers
and both orderers.

[`docs/lab/who-needs-whom.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/docs/lab/who-needs-whom.ts) · code · 6009 bytes

_Generated 2026-11-13 13:30 UTC from `main`._
