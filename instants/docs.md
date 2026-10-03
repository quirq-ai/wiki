<!-- quirq-wiki-generated repo=instants dir=docs -->

# instants / docs

Source: [docs](https://github.com/quirq-ai/instants/tree/main/docs) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### architecture.md

Markdown page “Architecture”. Instants has two parts: the UI presents work and the people
waiting for a response; the engine records a person's activity and rebuilds their private
demo state. Both ship in one Next.js application. The split is a code boundary, not a pair
of separately deployed services.

[`docs/architecture.md`](https://github.com/quirq-ai/instants/blob/main/docs/architecture.md) · code · 6214 bytes

### engine.md

Markdown page “Engine architecture”. The engine keeps one simple activity journal for a
person's demo session. The UI derives the current state by applying that activity to
data/mock.json. There is no database, separate message service, or duplicated snapshot of
every view.

[`docs/engine.md`](https://github.com/quirq-ai/instants/blob/main/docs/engine.md) · code · 12418 bytes

### motion.md

Markdown page “Motion system”. Instants uses native browser scrolling plus CSS transitions
and keyframes. The goal is responsive, familiar feedback with small reusable pieces. The
easing curves approximate a spring-like feel; this is not a physical spring solver or a
reproduction of any proprietary app's motion engine.

[`docs/motion.md`](https://github.com/quirq-ai/instants/blob/main/docs/motion.md) · code · 5649 bytes

### ui.md

Markdown page “UI architecture”. The UI helps a teammate see what needs their input, open
the context, and respond. It preserves the familiar photo feed, light/dark themes, desktop
sidebar, and mobile glass dock while giving them a collaboration purpose.

[`docs/ui.md`](https://github.com/quirq-ai/instants/blob/main/docs/ui.md) · code · 7955 bytes

_Generated 2026-10-03 10:43 UTC from `main`._
