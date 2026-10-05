<!-- quirq-wiki-generated repo=recipes dir=src/qqrecipes/adapters/node_app -->

# recipes / src/qqrecipes/adapters/node_app

Source: [src/qqrecipes/adapters/node_app](https://github.com/quirq-ai/recipes/tree/main/src/qqrecipes/adapters/node_app) in [recipes](https://github.com/quirq-ai/recipes).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### __init__.py

node-app: a Next.js app managed with pnpm, on the pinned Node toolchain (which bundles
pnpm). Classes: `NodeApp`.

[`src/qqrecipes/adapters/node_app/__init__.py`](https://github.com/quirq-ai/recipes/blob/main/src/qqrecipes/adapters/node_app/__init__.py) · code · 7763 bytes

### qq_property_setup.mjs

Run by the node-app adapter before vitest (V0-REC-04), in the app directory. It makes fast-
check property tests deterministic and time-boxed in the gate without the repo changing
anything: it writes .qq/qq-fast-check.mjs (a vitest setup file that configures fast-check
globally) and .qq/vitest.config.mjs, which wraps the repo's own vitest config, if any, and
adds that setup file.

[`src/qqrecipes/adapters/node_app/qq_property_setup.mjs`](https://github.com/quirq-ai/recipes/blob/main/src/qqrecipes/adapters/node_app/qq_property_setup.mjs) · code · 1919 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
