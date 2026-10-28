<!-- quirq-wiki-generated repo=space-hub dir=app -->

# space-hub / app

Source: [app](https://github.com/quirq-ai/space-hub/tree/main/app) in [space-hub](https://github.com/quirq-ai/space-hub).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### OPENMUSE-LICENSE

Extensionless file `OPENMUSE-LICENSE`. MIT License.

[`app/OPENMUSE-LICENSE`](https://github.com/quirq-ai/space-hub/blob/main/app/OPENMUSE-LICENSE) · other · 1076 bytes

### build.mjs

Build the app into dist/: app.js and app.css (esbuild), plus the files in public/. The web
service serves dist/ at /-/app/ (SPACEHUB_APP_DIR).

[`app/build.mjs`](https://github.com/quirq-ai/space-hub/blob/main/app/build.mjs) · code · 740 bytes

### package-lock.json

Package-manager lockfile (package-lock.json, 75.9 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`app/package-lock.json`](https://github.com/quirq-ai/space-hub/blob/main/app/package-lock.json) · lockfile · 77757 bytes

### package.json

npm package manifest for `spacehub-app` v0.1.0. The hub's web app: open-chat's interface
over spaces and projects, served by the web service at /. Scripts: `build`, `typecheck`,
`test`.

[`app/package.json`](https://github.com/quirq-ai/space-hub/blob/main/app/package.json) · code · 771 bytes

### tsconfig.json

TypeScript compiler configuration for this package or app (paths, JSX mode, and strictness).
Downstream `tsc` and bundlers read it to typecheck and emit.

[`app/tsconfig.json`](https://github.com/quirq-ai/space-hub/blob/main/app/tsconfig.json) · code · 441 bytes

_Generated 2026-10-28 11:43 UTC from `main`._
