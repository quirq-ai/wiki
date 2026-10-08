<!-- quirq-wiki-generated repo=euler dir=app/instants/docs -->

# euler / app/instants/docs

Source: [app/instants/docs](https://github.com/quirq-ai/euler/tree/main/app/instants/docs) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### architecture.md

Markdown page “Architecture”. Instants has two parts: the UI presents work and the people
waiting for a response; the engine records a person's activity and rebuilds their private
demo state. Both ship in one Next.js application. The split is a code boundary, not a pair
of separately deployed services.

[`app/instants/docs/architecture.md`](https://github.com/quirq-ai/euler/blob/main/app/instants/docs/architecture.md) · code · 6214 bytes

### engine.md

Markdown page “Engine architecture”. The engine keeps one simple activity journal for a
person's demo session. The UI derives the current state by applying that activity to
data/mock.json. There is no database, separate message service, or duplicated snapshot of
every view.

[`app/instants/docs/engine.md`](https://github.com/quirq-ai/euler/blob/main/app/instants/docs/engine.md) · code · 12418 bytes

### motion.md

Markdown page “Motion system”. Instants uses native browser scrolling plus CSS transitions
and keyframes. The goal is responsive, familiar feedback with small reusable pieces. The
easing curves approximate a spring-like feel; this is not a physical spring solver or a
reproduction of any proprietary app's motion engine.

[`app/instants/docs/motion.md`](https://github.com/quirq-ai/euler/blob/main/app/instants/docs/motion.md) · code · 5649 bytes

### ui.md

Markdown page “UI architecture”. The UI helps a teammate see what needs their input, open
the context, and respond. It preserves the familiar photo feed, light/dark themes, desktop
sidebar, and mobile glass dock while giving them a collaboration purpose.

[`app/instants/docs/ui.md`](https://github.com/quirq-ai/euler/blob/main/app/instants/docs/ui.md) · code · 7955 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
