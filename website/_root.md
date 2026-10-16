<!-- quirq-wiki-generated repo=website dir=. -->

# website / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/website/tree/main) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .eslintignore

Extensionless file `.eslintignore`. gatsby/ gatsby* public static/scripts/.

[`.eslintignore`](https://github.com/quirq-ai/website/blob/main/.eslintignore) · other · 92 bytes

### .eslintrc.json

JSON document `.eslintrc.json` whose top-level keys are `env`, `extends`, `parserOptions`,
`parser`, `plugins`, `rules`. Structured data consumed by the surrounding app or tooling.

[`.eslintrc.json`](https://github.com/quirq-ai/website/blob/main/.eslintrc.json) · code · 644 bytes

### .example.env

Environment template `.example.env` (values omitted from the wiki). Keys:
`GATSBY_POSTHOG_KEY`. Copy to `.env` locally; never commit real credentials.

[`.example.env`](https://github.com/quirq-ai/website/blob/main/.example.env) · code · 36 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 17 pattern(s)
including `.cache`, `node_modules`, `!/src/vendor/pierre-trees/node_modules/`, `.pnp.*`,
`.pnpm-store*`, `/public`, `.DS_Store`, `.vscode`, and 9 more. Generated and secret files
matching these patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/website/blob/main/.gitignore) · other · 446 bytes

### .markdownlint-cli2.jsonc

Jsonc file `.markdownlint-cli2.jsonc`.

[`.markdownlint-cli2.jsonc`](https://github.com/quirq-ai/website/blob/main/.markdownlint-cli2.jsonc) · code · 1078 bytes

### .nvmrc

Extensionless file `.nvmrc`. 24.

[`.nvmrc`](https://github.com/quirq-ai/website/blob/main/.nvmrc) · other · 3 bytes

### .prettierignore

Extensionless file `.prettierignore`. *.md *.mdx *.lock .cache/ public/ node_modules/
static/ .github/workflows/qq-*.yml.

[`.prettierignore`](https://github.com/quirq-ai/website/blob/main/.prettierignore) · other · 215 bytes

### .prettierrc

Extensionless file `.prettierrc`. { "trailingComma": "es5", "tabWidth": 4, "semi": false,
"singleQuote": true, "printWidth": 120 }.

[`.prettierrc`](https://github.com/quirq-ai/website/blob/main/.prettierrc) · other · 107 bytes

### .vercelignore

Extensionless file `.vercelignore`. .git .cache .pnpm-store.

[`.vercelignore`](https://github.com/quirq-ai/website/blob/main/.vercelignore) · other · 23 bytes

### AGENTS.md

The agent/workspace instructions (“Working on quirq Home base”). This repository is quirq's
Gatsby 4 / React website, adapted from the PostHog desktop interface. Public repositories in
the configured GitHub organization become app pages inside a shared desktop. Read
[README.md](README.md) and the [app mapping guide](docs/quirq-app-mapping.md) before
changing the catalog or routes.

[`AGENTS.md`](https://github.com/quirq-ai/website/blob/main/AGENTS.md) · code · 17161 bytes

### CLAUDE.md

The Claude Code instructions (“Working on quirq Home base”). This repository is quirq's
Gatsby 4 / React website, adapted from the PostHog desktop interface. Public repositories in
the configured GitHub organization become app pages inside a shared desktop. Read
[README.md](README.md) and the [app mapping guide](docs/quirq-app-mapping.md) before
changing the catalog or routes.

[`CLAUDE.md`](https://github.com/quirq-ai/website/blob/main/CLAUDE.md) · code · 17161 bytes

### LICENSE

License text (Apache License). Governs use, modification, and distribution of this
repository. Read the full file in the source tree before depending on the project in a
product or redistribution.

[`LICENSE`](https://github.com/quirq-ai/website/blob/main/LICENSE) · other · 11357 bytes

### LICENSE.posthog

Posthog file `LICENSE.posthog`. For all content except the /contents/ folder.

[`LICENSE.posthog`](https://github.com/quirq-ai/website/blob/main/LICENSE.posthog) · code · 1490 bytes

### LICENSING.md

Markdown page “Licensing and attribution”. This repository combines quirq additions with
material inherited from [PostHog/posthog.com](https://github.com/PostHog/posthog.com),
starting from commit 4c27ff7578f24c75b40d1024e4e0cbd40c9922ba.

[`LICENSING.md`](https://github.com/quirq-ai/website/blob/main/LICENSING.md) · code · 2864 bytes

### README.md

The project README (“quirq home base”). Everything quirq builds. One little space.

[`README.md`](https://github.com/quirq-ai/website/blob/main/README.md) · code · 9620 bytes

### SECURITY.md

The security policy. Please report security problems in this website privately. Use GitHub's
private vulnerability reporting: open the repository's Security tab and choose Report a
vulnerability. If that option is not available, open an issue that asks for a private
contact, without any details of the problem, and a maintainer will reach out.

[`SECURITY.md`](https://github.com/quirq-ai/website/blob/main/SECURITY.md) · code · 448 bytes

### gatsby-browser.tsx

Every link that leaves the site opens in a window here, the page in an iframe, or "Oops"
with Open in new tab when it can't be shown (AGENTS.md): one listener for every link, HTML
inside content included. Notable exports: `onClientEntry`, `wrapRootElement`,
`onRouteUpdate`, `wrapPageElement`, `shouldUpdateScroll`.

[`gatsby-browser.tsx`](https://github.com/quirq-ai/website/blob/main/gatsby-browser.tsx) · code · 1742 bytes

### gatsby-config.js

require('dotenv').config({ path: .env.${process.env.NODE_ENV}.local })
require('dotenv').config({ path: .env.${process.env.NODE_ENV} }) require('dotenv').config()
const path = require('path').

[`gatsby-config.js`](https://github.com/quirq-ai/website/blob/main/gatsby-config.js) · code · 1347 bytes

### gatsby-node.ts

import path from 'path' import fs from 'fs' import { GatsbyNode } from 'gatsby' import {
getQuirqApps } from './src/lib/quirqApps' Notable exports: `createPages`, `onCreatePage`,
`preprocessSource`, `onCreateBabelConfig`, `onCreateWebpackConfig`.

[`gatsby-node.ts`](https://github.com/quirq-ai/website/blob/main/gatsby-node.ts) · code · 4904 bytes

### gatsby-ssr.js

const React = require('react') Notable exports: `wrapRootElement`, `wrapPageElement`,
`onRenderBody`.

[`gatsby-ssr.js`](https://github.com/quirq-ai/website/blob/main/gatsby-ssr.js) · code · 700 bytes

### package.json

npm package manifest for `quirq-home-base` v1.0.0. A customizable desktop for apps from the
quirq GitHub organization. Scripts: `apps:sync`, `apps:check`, `apps:prune`, `apps:test`,
`projects:sync`, `projects:check`, `build`, `start`, `serve`, `clean`, and 6 more.

[`package.json`](https://github.com/quirq-ai/website/blob/main/package.json) · code · 5063 bytes

### pnpm-lock.yaml

Package-manager lockfile (pnpm-lock.yaml, 616.3 KB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`pnpm-lock.yaml`](https://github.com/quirq-ai/website/blob/main/pnpm-lock.yaml) · lockfile · 631113 bytes

### pnpm-workspace.yaml

YAML file `pnpm-workspace.yaml`. Top-level keys: `packages`, `minimumReleaseAge`,
`minimumReleaseAgeExclude`, `blockExoticSubdeps`, `trustPolicy`, `publicHoistPattern`. Hoist
Gatsby's internal dependencies for webpack compatibility.

[`pnpm-workspace.yaml`](https://github.com/quirq-ai/website/blob/main/pnpm-workspace.yaml) · code · 348 bytes

### postcss.config.js

module.exports = () => ({ plugins: [require('tailwindcss/nesting'), require('tailwindcss'),
require('autoprefixer')], }).

[`postcss.config.js`](https://github.com/quirq-ai/website/blob/main/postcss.config.js) · code · 125 bytes

### quirq.apps.json

JSON document `quirq.apps.json` whose top-level keys are `organization`, `name`,
`frameOrigins`, `defaults`, `repositories`. Structured data consumed by the surrounding app
or tooling.

[`quirq.apps.json`](https://github.com/quirq-ai/website/blob/main/quirq.apps.json) · code · 4383 bytes

### quirq.projects.json

JSON document `quirq.projects.json` whose top-level keys are `organization`, `source`,
`projectRule`, `automation`, `groups`, `repositories`. Structured data consumed by the
surrounding app or tooling.

[`quirq.projects.json`](https://github.com/quirq-ai/website/blob/main/quirq.projects.json) · code · 5378 bytes

### safelist.txt

Txt file `safelist.txt`. text-blue text-purple text-lilac text-orange text-yellow text-red
text-salmon text-teal text-seagreen text-green text-pink bg-blue bg-purple bg-lilac bg-
orange bg-yellow bg-red bg-salmon bg-teal bg-seagreen bg-green bg-pink border-blue border-
purple border-lilac border-orange border-yellow border-red border-salmon border-teal border-
seagreen border-green border-pink h-8 pb-8.

[`safelist.txt`](https://github.com/quirq-ai/website/blob/main/safelist.txt) · code · 378 bytes

### tailwind.config.js

module.exports = { content: ['./src//*.{js,jsx,ts,tsx}', '!./src/vendor/',
'./safelist.txt'].

[`tailwind.config.js`](https://github.com/quirq-ai/website/blob/main/tailwind.config.js) · code · 10017 bytes

### tsconfig.json

JSON file `tsconfig.json` that did not parse from the prefix that was read. Open the source
file for the full document.

[`tsconfig.json`](https://github.com/quirq-ai/website/blob/main/tsconfig.json) · code · 1746 bytes

### vercel.json

JSON document `vercel.json` whose top-level keys are `$schema`, `framework`, `buildCommand`,
`outputDirectory`, `headers`, `redirects`, `rewrites`. Structured data consumed by the
surrounding app or tooling.

[`vercel.json`](https://github.com/quirq-ai/website/blob/main/vercel.json) · code · 1002 bytes

_Generated 2026-10-16 10:14 UTC from `main`._
