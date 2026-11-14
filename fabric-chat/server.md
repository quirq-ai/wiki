<!-- quirq-wiki-generated repo=fabric-chat dir=server -->

# fabric-chat / server

Source: [server](https://github.com/quirq-ai/fabric-chat/tree/main/server) in [fabric-chat](https://github.com/quirq-ai/fabric-chat).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### accounts.ts

Accounts and sessions on a company's own server: who may sign in, and with what password. An
account is the app's side of a person. Their identity on the ledger is a certificate and a
key (see wallet.ts); the account is what lets them use it: a password, a role, and whether
they have accepted their invitation yet. Everything is kept in two small files in the app's
own data volume.

[`server/accounts.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/accounts.ts) · code · 13431 bytes

### api.ts

The HTTP API the browser uses. Every route under /api/w/:ws acts as one person and goes to
that person's own company's peer. In the sandbox there are no passwords: choosing a person
on the first screen is the sign-in, and each request names that person in the x-chat-user
header. On a company's own server a person signs in with a password, and each request is
theirs because of its session cookie (company.ts).

[`server/api.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/api.ts) · code · 21260 bytes

### backup.mjs

Backs up and restores everything one company's server holds. ./chat backup and ./chat
restore run it for a few seconds, inside a container that sees every volume, while all else
is stopped.

[`server/backup.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/server/backup.mjs) · code · 10749 bytes

### ca.ts

Adding a person on a company's own server: its certificate authority (CA) registers them and
signs a certificate for a new key. The app does this with its own CA identity, people-
registrar, which may register people and nothing else. It uses Fabric CA's command-line
client, in a folder that lives in memory only, so the new private key touches no disk before
the wallet has locked it. Notable exports: `enrolPerson`.

[`server/ca.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/ca.ts) · code · 3646 bytes

### chat.ts

What the chat app does, in terms of chaincode calls. Reads ask the person's own company's
peer. Writes become transactions, signed with the person's own key. Notable exports:
`whoami`, `directory`, `join`, `overview`, `place`, `createConversation`, `addMembers`,
`messages`, and 16 more.

[`server/chat.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/chat.ts) · code · 13823 bytes

### check.ts

Checks the running network end to end: that messages travel, and that each privacy claim the
app makes is true on the ledger itself. Usage: npm run test:app (the network must be up and
seeded).

[`server/check.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/check.ts) · code · 10419 bytes

### company.ts

What a company's own server adds to the app: real sign-in, an administrator who adds people,
and the first-run steps that make the first administrator. A person signs in with their
handle and a password. The server answers with a session cookie. An administrator adds a
person: the company's CA signs them a certificate, they join the home workspace, and the
administrator gets a one-time link to pass on.

[`server/company.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/company.ts) · code · 26183 bytes

### config.ts

The facts about the Fabric network this app sits on. The app runs in one of two ways:
sandbox three made-up companies on one laptop, for seeing how Fabric works. This one server
plays all three, with no sign-in. The facts come from .generated (npm run net:up). company
one real company's own server. One company, real sign-in. The facts come from the folder the
node's admin tool wrote for the app (./chat up).

[`server/config.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/config.ts) · code · 12525 bytes

### decode.ts

Turns a block, as a peer delivers it, into plain facts the UI can show: who signed each
transaction, which peers endorsed it, what it read and wrote, and whether it was accepted. A
block is nested envelopes.

[`server/decode.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/decode.ts) · code · 10866 bytes

### desk.ts

Requests from the chat app to the node's agent, on a company's own server. Sharing a
workspace with another company takes the node administrator's key: it joins the company's
orderer and peer to a new ledger. The app is what browsers reach, so it does not hold that
key. It leaves a request in a folder the two share (the "desk"), and the agent, which does
hold the key, answers there. See ctl/agent.sh for the four requests it knows.

[`server/desk.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/desk.ts) · code · 2527 bytes

### fabric.ts

The app's connection to Fabric, through the Gateway service every 2.5 peer runs. The app
talks to one peer only: the peer of the person's own company. For a read, that peer runs the
chaincode and answers. For a write, the same peer does the rest of the work itself: 1.
endorse it runs the chaincode, and asks other companies' peers to run it too and sign the
result 2.

[`server/fabric.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/fabric.ts) · code · 14855 bytes

### index.ts

Starts the app: the API, the live block feeds and the web pages, all on one port. npm run
dev pages served by Vite, with reload on change npm run build && npm start pages served from
dist/ On a company's own server (CHAT_NODE set, see config.ts) it always serves the built
pages.

[`server/index.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/index.ts) · code · 3565 bytes

### ledger.ts

Each company's app server follows the blocks its own peer commits, from block 0 onwards.
That stream is what makes the chat live: nothing is pushed from one company to another
outside the ledger. Alice's message reaches Bob because Birch's peer committed the block
that holds it, and Birch's app server saw that block arrive. Notable exports: `startFeeds`,
`feedOf`, `stopFeeds`, `feedsReady`, `Feed`.

[`server/ledger.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/ledger.ts) · code · 4796 bytes

### operator.mjs

The commands ./chat runs inside the app's container, for the person who runs the server.
node build/operator.mjs welcome where the app is, and the first administrator's link node
build/operator.mjs admin-link [handle] a new one-time link for an administrator They talk to
a door that listens inside the container only (see operatorDoor in company.ts).

[`server/operator.mjs`](https://github.com/quirq-ai/fabric-chat/blob/main/server/operator.mjs) · code · 2687 bytes

### people.ts

People and their identities. On Fabric a person is not a row in a users table: they are a
certificate their company's CA signed, plus the private key that goes with it. The sandbox
keeps every person's key in .generated/wallets and signs on their behalf, the way a
company's own app server would for its staff.

[`server/people.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/people.ts) · code · 7755 bytes

### seed.ts

Puts the people and a few conversations on the ledger, so the app has something to show.
Usage: npm run seed. Running it again changes nothing: whatever is already there is left
alone. Every line below is a real transaction, signed by the person named and endorsed by
the peers of the companies that keep the conversation.

[`server/seed.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/seed.ts) · code · 7442 bytes

### wallet.ts

Where a company's own server keeps each person's identity: their certificate, and their
private key locked with AES-256-GCM. The key that locks them is made when the server is
first set up and lives in a different volume from the wallet, so a copy of the wallet alone
gives nobody a usable key. The server itself can still unlock every key: it signs on
people's behalf, the way a company's mail server sends on theirs.

[`server/wallet.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/wallet.ts) · code · 3041 bytes

### xologin.ts

"Sign in with XO": an optional second way in, next to a handle and a password. XO's accounts
are kept by Clerk. The xo server (quirq-ai/xo) says where Clerk's sign-in is and which
public OAuth client to use (GET /login), the same one `xo login` uses. The chat sends the
browser there with a one-time verifier's hash (OAuth's authorization code flow with PKCE).

[`server/xologin.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/server/xologin.ts) · code · 7166 bytes

_Generated 2026-11-14 12:35 UTC from `main`._
