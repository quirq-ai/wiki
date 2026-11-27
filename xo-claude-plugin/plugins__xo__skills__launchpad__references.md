<!-- quirq-wiki-generated repo=xo-claude-plugin dir=plugins/xo/skills/launchpad/references -->

# xo-claude-plugin / plugins/xo/skills/launchpad/references

Source: [plugins/xo/skills/launchpad/references](https://github.com/quirq-ai/xo-claude-plugin/tree/main/plugins/xo/skills/launchpad/references) in [xo-claude-plugin](https://github.com/quirq-ai/xo-claude-plugin).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### dockerfiles.md

Markdown page “Dockerfile recipes for Launchpad”. Launchpad runs the image on linux/amd64
and sends traffic to the app's port. Every recipe below listens on 0.0.0.0 and reads PORT,
so the port given to xo_app.py up --port must match the PORT default here. Adapt versions
and commands to the project; keep the final image small and free of secrets.

[`plugins/xo/skills/launchpad/references/dockerfiles.md`](https://github.com/quirq-ai/xo-claude-plugin/blob/main/plugins/xo/skills/launchpad/references/dockerfiles.md) · code · 3149 bytes

_Generated 2026-11-27 15:42 UTC from `main`._
