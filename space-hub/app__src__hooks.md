<!-- quirq-wiki-generated repo=space-hub dir=app/src/hooks -->

# space-hub / app/src/hooks

Source: [app/src/hooks](https://github.com/quirq-ai/space-hub/tree/main/app/src/hooks) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### use-agenthub.ts

/** * A session's events, read from the start once and then only the new ones * (?after=),
every few seconds while the agent works and the tab is visible. * A finished session is read
once more, so its last events show. */ export function useTaskEvents(id: string, running:
boolean, every = 2500) { const [events, setEvents] = useState([]); const [error, setEr
Notable exports: `useTaskEvents`.

[`app/src/hooks/use-agenthub.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/hooks/use-agenthub.ts) · code · 2400 bytes

### use-channels.ts

export type Channels = { root: string; entries: Entry[]; last: Record } Notable exports:
`seenChannels`, `useChannels`, `Channels`, `channelSeenKey`, `ChannelsContext`,
`useChannelsHere`.

[`app/src/hooks/use-channels.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/hooks/use-channels.ts) · code · 3931 bytes

### use-chat.ts

/** * A conversation's new turns live in .log.jsonl beside it and * are saved to the hub as
the signed-in builder. blocked says why saving * cannot work (signed out, not a member).
Drafts stay in this browser tab. */ export function useChat(place: Place, conversationPath:
string | undefined, repliesPath: string | undefined, blocked: string | undefined, logEx
Notable exports: `useChat`.

[`app/src/hooks/use-chat.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/hooks/use-chat.ts) · code · 6279 bytes

### use-live.ts

Loads in flight that the reader is waiting for (not background re-checks): the progress bar
at the top of the window follows this count. Notable exports: `useLoading`, `useLive`,
`Live`.

[`app/src/hooks/use-live.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/hooks/use-live.ts) · code · 3384 bytes

### use-me.ts

/** Who is signed in (checked by the web service), and the spaces they belong to. */ export
function useMe() { const [me, setMe] = useState(); useEffect(() => { void fetch("/-/api/me",
{ cache: "no-store" }).then(response => (response.ok ? response.json() : { name: null
})).then(setMe).catch(() => setMe({ name: null })); }, []); const profile = useLive>(me?.
Notable exports: `useMe`, `recentProjects`, `rememberProject`.

[`app/src/hooks/use-me.ts`](https://github.com/quirq-ai/space-hub/blob/main/app/src/hooks/use-me.ts) · code · 1386 bytes

_Generated 2026-10-30 11:44 UTC from `main`._
