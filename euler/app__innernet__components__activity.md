<!-- quirq-wiki-generated repo=euler dir=app/innernet/components/activity -->

# euler / app/innernet/components/activity

Source: [app/innernet/components/activity](https://github.com/quirq-ai/euler/tree/main/app/innernet/components/activity) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### browser-history.tsx

import { clearBrowserHistory, clearServerHistory, currentSessionId, fetchServerHistory,
readBrowserHistory, sentDropped, sentSessions, type BrowserHistory as Saved, } from
"./trail" Notable exports: `BrowserHistory`. Marked `'use client'` so it runs in the
browser.

[`app/innernet/components/activity/browser-history.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/activity/browser-history.tsx) · code · 5878 bytes

### database-card.tsx

The history page's small Database card: where the history is kept besides its files (or the
demo visitor's browser), what the database holds, and the ways to move it. Plain markup:
Store now is an ordinary form posting to app/api/db/store/route.ts, so the card needs no
script of its own. Notable exports: `DatabaseCard`.

[`app/innernet/components/activity/database-card.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/activity/database-card.tsx) · code · 7197 bytes

### format-notes.tsx

The side column of the history page, under the Database card: how the history is kept. The
folder, a line, and how any other app joins in with one line of shell. Notable exports:
`FormatNotes`.

[`app/innernet/components/activity/format-notes.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/activity/format-notes.tsx) · code · 4994 bytes

### history-nav.tsx

Back and forward through this tab's trail, and the way to the full history. The buttons step
the trail's cursor and navigate; the recorder logs the step as "back" or "forward". At
either end the button is disabled. Rendered by every header, through <BrandLinks>
(components/brand-nav.tsx). Notable exports: `HistoryNav`. Wired into a Next.js app (App
Router or Next APIs). Marked `'use client'` so it runs in the browser.

[`app/innernet/components/activity/history-nav.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/activity/history-nav.tsx) · code · 4834 bytes

### recorder.tsx

Mounted once, in the root layout. Every route change becomes one event: "search" for a
results page, "back" or "forward" for a step along the trail (the header's buttons, or the
browser's own when it lands on the neighbouring page), "visit" for everything else. A reload
is not a new event. Automated browsers (screenshots, tests) are not recorded, so the history
holds only what a person did.

[`app/innernet/components/activity/recorder.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/activity/recorder.tsx) · code · 4637 bytes

### session-list.tsx

The sessions of the history page, newest first and grouped by day, each one a disclosure
that opens onto its events merged across every app that wrote to it. Plain markup with no
hooks, so the server renders it from the files on this machine and the demo's browser
renders it from localStorage. Notable exports: `duration`, `AppBadge`, `SessionList`. Wired
into a Next.js app (App Router or Next APIs).

[`app/innernet/components/activity/session-list.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/activity/session-list.tsx) · code · 11670 bytes

### shared.ts

The activity history format, shared by the server (lib/activity.ts), the route that writes
it (app/api/activity/route.ts) and the browser (the recorder, the demo's localStorage copy,
the history page). Plain functions only: nothing here touches the file system or the window.

[`app/innernet/components/activity/shared.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/activity/shared.ts) · code · 7753 bytes

### this-tab.tsx

The server cannot know which session is this tab's (its id lives in sessionStorage), so once
the page has loaded this marks it: the "This tab" badge shows, and the session opens if the
newest one is not it. Notable exports: `ThisTab`. Marked `'use client'` so it runs in the
browser.

[`app/innernet/components/activity/this-tab.tsx`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/activity/this-tab.tsx) · code · 839 bytes

### trail.ts

import { APP, DEMO_MAX_IDS, DEMO_RETENTION_DAYS, DEMO_SESSION_RE, MAX_DEMO_BODY,
MAX_EVENT_BYTES, SESSION_RE, demoPath, newSessionId, sessionStart, type ActivityEvent, }
from "./shared" Notable exports: `sessionId`, `currentSessionId`, `readTrail`, `writeTrail`,
`setPendingMove`, `moving`, `takePendingMove`, `record`, and 13 more.

[`app/innernet/components/activity/trail.ts`](https://github.com/quirq-ai/euler/blob/main/app/innernet/components/activity/trail.ts) · code · 10998 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
