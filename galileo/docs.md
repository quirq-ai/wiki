<!-- quirq-wiki-generated repo=galileo dir=docs -->

# galileo / docs

Source: [docs](https://github.com/quirq-ai/galileo/tree/main/docs) in [galileo](https://github.com/quirq-ai/galileo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### ARCHITECTURE.md

Markdown page “How galileo works”. galileo is one Node.js process on this machine. It keeps
a list of sources (apps on ports, and files or folders), gives each one its own address on
one port, and serves telescope, the bar and router that shows them one at a time. It starts
nothing and writes nothing but its own list.

[`docs/ARCHITECTURE.md`](https://github.com/quirq-ai/galileo/blob/main/docs/ARCHITECTURE.md) · code · 12244 bytes

### DECISIONS.md

Markdown page “Why galileo works the way it does”. The decisions behind galileo v0, each
with what it costs. When a change goes against one of them, update this file in the same
change.

[`docs/DECISIONS.md`](https://github.com/quirq-ai/galileo/blob/main/docs/DECISIONS.md) · code · 10004 bytes

### REFERENCE.md

Markdown page “galileo reference”. The exact behavior of galileo v0: commands, settings,
addresses, routes, headers, files and data. [ARCHITECTURE.md](ARCHITECTURE.md) explains how
the parts fit; [DECISIONS.md](DECISIONS.md) explains why.

[`docs/REFERENCE.md`](https://github.com/quirq-ai/galileo/blob/main/docs/REFERENCE.md) · code · 12531 bytes

### ROADMAP.md

Markdown page “What's next for galileo”. galileo v0 is small on purpose: sources (ports and
files), telescope's bar and router, and the bridge. It is out so people can try it and say
what should come next. Nothing on this page works yet; as a part ships, it moves into the
other docs.

[`docs/ROADMAP.md`](https://github.com/quirq-ai/galileo/blob/main/docs/ROADMAP.md) · code · 2569 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
