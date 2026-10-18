<!-- quirq-wiki-generated repo=xo dir=. -->

# xo / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/xo/tree/main) in [xo](https://github.com/quirq-ai/xo).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .dockerignore

`.dockerignore` tells git or Docker which paths to omit. It currently lists 6 pattern(s)
including `*`, `!pyproject.toml`, `!README.md`, `!LICENSE`, `!src/`, `src/**/__pycache__`.
Generated and secret files matching these patterns are not in the clone the wiki summarizes.

[`.dockerignore`](https://github.com/quirq-ai/xo/blob/main/.dockerignore) · other · 63 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 7 pattern(s)
including `__pycache__/`, `*.pyc`, `*.egg-info/`, `build/`, `dist/`, `.venv/`, `.qq/`.
Generated and secret files matching these patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/xo/blob/main/.gitignore) · other · 56 bytes

### .python-version

Extensionless file `.python-version`. 3.12.

[`.python-version`](https://github.com/quirq-ai/xo/blob/main/.python-version) · other · 5 bytes

### .vercelignore

Extensionless file `.vercelignore`. Never upload local secrets or build leftovers to Vercel
(its default list skips .env.local, not .env).

[`.vercelignore`](https://github.com/quirq-ai/xo/blob/main/.vercelignore) · other · 150 bytes

### AGENTS.md

The agent/workspace instructions (“Agent guide”). Read README.md first.

[`AGENTS.md`](https://github.com/quirq-ai/xo/blob/main/AGENTS.md) · code · 1920 bytes

### Dockerfile

Container build file `Dockerfile`. Base image `python:3.14.6-slim`. Exposes ports `8787`.
Starts with `["xo", "serve", "--host", "0.0.0.0", "--port", "8787"]`. Instructions used:
`FROM`, `ENV`, `WORKDIR`, `COPY`, `RUN`, `EXPOSE`, `CMD`.

[`Dockerfile`](https://github.com/quirq-ai/xo/blob/main/Dockerfile) · other · 930 bytes

### LICENSE

License text (Apache License). Governs use, modification, and distribution of this
repository. Read the full file in the source tree before depending on the project in a
product or redistribution.

[`LICENSE`](https://github.com/quirq-ai/xo/blob/main/LICENSE) · other · 11358 bytes

### README.md

The project README (“xo”). xo is the command line for the [XO
Cloud](https://dev.xo.builders) core API. Every endpoint is a command, and xo sends your XO
API key on each request without ever printing it.

[`README.md`](https://github.com/quirq-ai/xo/blob/main/README.md) · code · 17966 bytes

### app.py

Vercel's entrypoint: the xo server (xo serve) as a WSGI app. Defines the `app` application
object.

[`app.py`](https://github.com/quirq-ai/xo/blob/main/app.py) · code · 347 bytes

### pyproject.toml

TOML config `pyproject.toml`. Sections: `build-system`, `project`, `project.optional-
dependencies`, `project.scripts`, `tool.setuptools.dynamic`,
`tool.setuptools.packages.find`, `tool.setuptools.package-data`, `tool.pytest.ini_options`.
Python project metadata and tool configuration.

[`pyproject.toml`](https://github.com/quirq-ai/xo/blob/main/pyproject.toml) · code · 880 bytes

_Generated 2026-10-18 10:00 UTC from `main`._
