<!-- quirq-wiki-generated repo=space-hub dir=app/src/hooks -->

# space-hub / app/src/hooks

Source: [app/src/hooks](https://github.com/quirq-ai/space-hub/tree/main/app/src/hooks) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

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

_Generated 2026-10-28 11:43 UTC from `main`._
