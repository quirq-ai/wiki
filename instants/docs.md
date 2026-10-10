<!-- quirq-wiki-generated repo=instants dir=docs -->

# instants / docs

Source: [docs](https://github.com/quirq-ai/instants/tree/main/docs) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### agent-data-architecture.md

Markdown page “Instants as a visual workspace for agent data”. Status: two-log foundation
implemented, October 7, 2026. [The runtime overview](architecture.md) and [engine
guide](engine.md) describe the shipped behavior. This document also retains the target
connector architecture; future discovery, queries and delivery are explicitly separated from
the current implementation.

[`docs/agent-data-architecture.md`](https://github.com/quirq-ai/instants/blob/main/docs/agent-data-architecture.md) · code · 27984 bytes

### architecture.md

Markdown page “Architecture”. Instants has two code responsibilities in one Next.js
application: UI presents work and engine normalizes, saves and replays data. The active data
store has two persistent files per private profile, not a database plus a session snapshot.

[`docs/architecture.md`](https://github.com/quirq-ai/instants/blob/main/docs/architecture.md) · code · 7999 bytes

### engine.md

Markdown page “Engine architecture”. Instants persists two JSONL logs for each private
profile. timeline.jsonl contains the feed and its supporting records; activity.jsonl
contains the viewer's interactions. React receives a replayed view of those logs through a
data provider. It does not import the mock fixture as live application state.

[`docs/engine.md`](https://github.com/quirq-ai/instants/blob/main/docs/engine.md) · code · 13203 bytes

### motion.md

Markdown page “Motion system”. Instants uses native browser scrolling plus CSS transitions
and keyframes. The goal is responsive, familiar feedback with small reusable pieces. The
easing curves approximate a spring-like feel; this is not a physical spring solver or a
reproduction of any proprietary app's motion engine.

[`docs/motion.md`](https://github.com/quirq-ai/instants/blob/main/docs/motion.md) · code · 5649 bytes

### ui.md

Markdown page “UI architecture”. The UI turns imported agent history and local work into a
feed a person can read and work through. It preserves the established layout, light/dark
themes, desktop sidebar and mobile glass dock. Text-only agent updates are complete cards;
imported data does not need a photograph or invented reactions.

[`docs/ui.md`](https://github.com/quirq-ai/instants/blob/main/docs/ui.md) · code · 9126 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
