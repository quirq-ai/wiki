<!-- quirq-wiki-generated repo=xo dir=docs -->

# xo / docs

Source: [docs](https://github.com/quirq-ai/xo/tree/main/docs) in [xo](https://github.com/quirq-ai/xo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### architecture.html

HTML document `architecture.html` titled “xo Architecture”. xo Architecture.

[`docs/architecture.html`](https://github.com/quirq-ai/xo/blob/main/docs/architecture.html) · code · 168109 bytes

### architecture.md

Markdown page “xo architecture”. One package, two halves: the xo command line on your
machine, and the xo server (xo serve, on Vercel at xo.quirq.dev through app.py), which holds
the Clerk Secret Key so the CLI never needs it. Standard library only. Setup is in
[quickstart.md](quickstart.md); the server's settings in [server.md](server.md).

[`docs/architecture.md`](https://github.com/quirq-ai/xo/blob/main/docs/architecture.md) · code · 47963 bytes

### deploy-vercel.md

Markdown page “Deploy the xo server on Vercel and test it”. The xo server (xo serve, see
[server.md](server.md)) runs on Vercel at https://xo.quirq.dev. Vercel runs the repo's root
app.py, which serves the same routes as a Python function, on Python 3.12 (pinned by
.python-version). Vercel's GitHub integration deploys it: every commit on main goes to
production by itself, so every merge to main ships xo.quirq.dev.

[`docs/deploy-vercel.md`](https://github.com/quirq-ai/xo/blob/main/docs/deploy-vercel.md) · code · 22436 bytes

### guide.md

Markdown page “xo user guide”. xo is one command line for two XO services and GitHub. One xo
login logs you in to all of them.

[`docs/guide.md`](https://github.com/quirq-ai/xo/blob/main/docs/guide.md) · code · 25575 bytes

### quickstart.md

Markdown page “xo quickstart”. Use this to set up xo, the command line for XO Cloud, on your
own Mac or Linux machine. It works the same for every user. Once it is set up, the [user
guide](guide.md) lists the commands.

[`docs/quickstart.md`](https://github.com/quirq-ai/xo/blob/main/docs/quickstart.md) · code · 7776 bytes

### server.md

Markdown page “xo server mode”. One package, two deployments.

[`docs/server.md`](https://github.com/quirq-ai/xo/blob/main/docs/server.md) · code · 41834 bytes

### test-xo-server.sh

Test a deployed xo server (docs/deploy-vercel.md, step 5). Run it from the checkout you
deployed Shebang `#!/usr/bin/env bash`. Functions: `pass`, `fail`, `xo`, `expect`.

[`docs/test-xo-server.sh`](https://github.com/quirq-ai/xo/blob/main/docs/test-xo-server.sh) · code · 8229 bytes

_Generated 2026-10-24 09:54 UTC from `main`._
