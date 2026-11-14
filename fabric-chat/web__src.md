<!-- quirq-wiki-generated repo=fabric-chat dir=web/src -->

# fabric-chat / web/src

Source: [web/src](https://github.com/quirq-ai/fabric-chat/tree/main/web/src) in [fabric-chat](https://github.com/quirq-ai/fabric-chat).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### App.tsx

export function App() { const [net, setNet] = useState(null); const [problem, setProblem] =
useState(null); const [route, setRoute] = useState(readRoute); A company's own server only:
who is signed in. Undefined until the server has been asked. const [user, setUser] =
useState(undefined) Notable exports: `App`.

[`web/src/App.tsx`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/App.tsx) · code · 4054 bytes

### Chat.tsx

The chat screen for one signed-in person: workspaces, conversations, the open conversation
and the ledger panel. It keeps itself current by listening to the blocks the person's own
company's peer commits. Notable exports: `Chat`.

[`web/src/Chat.tsx`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/Chat.tsx) · code · 22756 bytes

### Companies.tsx

"Other companies", for an administrator on a company's own server: this company's card, the
workspaces it shares, starting one, and accepting an invitation to one. Sharing a workspace
takes three steps, and nothing secret changes hands in any of them: 1. The two
administrators send each other their company's card. 2. One of them starts the workspace
from the other's card, and sends back an invitation. 3. The other accepts it.

[`web/src/Companies.tsx`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/Companies.tsx) · code · 21555 bytes

### Company.tsx

What a company's own server shows that the sandbox does not: a sign-in form, the page behind
an invitation link, and the list of people an administrator looks after. Notable exports:
`CompanySignIn`, `AcceptInvite`, `PeopleDialog`.

[`web/src/Company.tsx`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/Company.tsx) · code · 16750 bytes

### Compare.tsx

Several people side by side, each in their own frame. Send a message in one and watch which
of the others receive it. Notable exports: `Compare`.

[`web/src/Compare.tsx`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/Compare.tsx) · code · 2950 bytes

### Conversation.tsx

One open conversation: its header, its messages and the box to write in. Notable exports:
`ConversationPane`, `PendingPost`.

[`web/src/Conversation.tsx`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/Conversation.tsx) · code · 16940 bytes

### Guide.tsx

The short explanation behind the "How it works" button: what each thing in the app is on
Fabric. The sandbox explains three companies sharing a ledger. A company's own server
explains one. Notable exports: `Guide`.

[`web/src/Guide.tsx`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/Guide.tsx) · code · 9686 bytes

### Ledger.tsx

The panel on the right: the ledger as this person's own company's peer holds it. Blocks the
chain, newest first, and the transactions in each block Transaction one transaction, step by
step, and which companies hold the message it wrote Network every company's nodes, whether
they agree, and switches to stop and start them Notable exports: `LedgerPanel`, `LedgerTab`.

[`web/src/Ledger.tsx`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/Ledger.tsx) · code · 30156 bytes

### SignIn.tsx

The first screen: choose who you are. There are no passwords in this demo. What you choose
is a real identity all the same: a certificate that person's company signed, with its own
key. Notable exports: `SignIn`.

[`web/src/SignIn.tsx`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/SignIn.tsx) · code · 7052 bytes

### api.ts

Calls to the app server. In the sandbox every call that acts as a person names them in the
x-chat-user header. On a company's own server the browser's session cookie says who is
calling, and the header is ignored. Notable exports: `ApiError`, `SIGNED_OUT`, `TxDetail`,
`Enrolment`, `Added`, `account`, `api`.

[`web/src/api.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/api.ts) · code · 7017 bytes

### bits.tsx

Small parts used all over: the network's facts, avatars, storage dots, hashes, dialogs.
Notable exports: `makeNet`, `useNet`, `listNames`, `initials`, `shortClock`, `dayOf`,
`scopeWords`, `Avatar`, and 14 more.

[`web/src/bits.tsx`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/bits.tsx) · code · 10670 bytes

### chatctx.ts

What every part of the chat screen needs to know: who is signed in, which workspace is open,
and how to turn an ID such as bob@BirchMSP into a name and a company. Notable exports:
`useChat`, `parseConv`, `ChatCtx`, `ChatContext`, `Active`, `Selection`, `keyOf`.

[`web/src/chatctx.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/chatctx.ts) · code · 1441 bytes

### dialogs.tsx

The two dialogs of the chat screen: starting a conversation, and looking at your own
identity. Notable exports: `NewConversation`, `IdentityCard`.

[`web/src/dialogs.tsx`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/dialogs.tsx) · code · 11441 bytes

### main.tsx

createRoot(document.getElementById("root")!).render(.

[`web/src/main.tsx`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/main.tsx) · code · 315 bytes

### route.ts

Where the page is, kept in the address so it survives a reload and can sit in a frame.

[`web/src/route.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/route.ts) · code · 2051 bytes

### styles.css

Fabric Chat. One stylesheet: tokens, then each part of the screen from the outside in.
Leading class selectors include `mono`, `dim`, `small`, `good`, `warn`, `error`, `row`,
`primary`, and 135 more. Defines or consumes CSS custom properties (design tokens).

[`web/src/styles.css`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/styles.css) · code · 39024 bytes

### types.ts

The shapes the API returns. Most are defined once, on the server, and only their types are
used here. Notable exports: `Org`, `Workspace`, `NetworkInfo`, `Role`, `SessionUser`,
`Member`, `CardView`, `SharedWorkspace`, and 8 more.

[`web/src/types.ts`](https://github.com/quirq-ai/fabric-chat/blob/main/web/src/types.ts) · code · 4830 bytes

_Generated 2026-11-14 12:35 UTC from `main`._
