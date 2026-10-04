<!-- quirq-wiki-generated repo=euler dir=docs -->

# euler / docs

Source: [docs](https://github.com/quirq-ai/euler/tree/main/docs) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### app-updates.md

Markdown page “Maintaining Euler's app sources”. Euler includes Innernet, Quitter, and
Instants as ordinary tracked directories under app/. Each directory is a Git subtree
connected to its standalone upstream repository. You choose when to check for updates and
which app to merge.

[`docs/app-updates.md`](https://github.com/quirq-ai/euler/blob/main/docs/app-updates.md) · code · 10191 bytes

### architecture.md

Markdown page “Euler architecture”. Euler's root Node HTTP host serves Home and three
precompiled applications under one origin. Application source is committed under app/: Home
lives in app/home alongside innernet, quitter, and instants. Home owns all Euler UI,
including the dock and shared browser resources. The repository root owns hosting, security,
configuration, builds, and app lifecycle.

[`docs/architecture.md`](https://github.com/quirq-ai/euler/blob/main/docs/architecture.md) · code · 11532 bytes

### euler.md

Markdown page “Using Euler”. Euler is the shared host in [quirq-
ai/euler](https://github.com/quirq-ai/euler), with Home and the bundled applications
maintained in app/. Follow the [repository setup instructions](../README.md) to install,
build, and launch it at http://localhost:2713.

[`docs/euler.md`](https://github.com/quirq-ai/euler/blob/main/docs/euler.md) · code · 5812 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
