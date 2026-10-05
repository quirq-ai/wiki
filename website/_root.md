<!-- quirq-wiki-generated repo=website dir=. -->

# website / (repository root)

Source: [(repository root)](https://github.com/quirq-ai/website/tree/main) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### .codespellignore

Extensionless file `.codespellignore`. postgresql posthog clickhouse captable vie coo dne
frome dota wit crate halp doubleclick fastr pullrequest.

[`.codespellignore`](https://github.com/quirq-ai/website/blob/main/.codespellignore) · other · 107 bytes

### .eslintignore

Extensionless file `.eslintignore`. gatsby/ gatsby* mdxImportGen.js public static/scripts/.

[`.eslintignore`](https://github.com/quirq-ai/website/blob/main/.eslintignore) · other · 55 bytes

### .eslintrc.json

JSON document `.eslintrc.json` whose top-level keys are `env`, `extends`, `parserOptions`,
`parser`, `plugins`, `rules`. Structured data consumed by the surrounding app or tooling.

[`.eslintrc.json`](https://github.com/quirq-ai/website/blob/main/.eslintrc.json) · code · 644 bytes

### .gitignore

`.gitignore` tells git or Docker which paths to omit. It currently lists 33 pattern(s)
including `.cache`, `node_modules`, `.pnp.*`, `.pnpm-store*`, `/public`, `/og-images`,
`.DS_Store`, `/bundle-report`, and 25 more. Generated and secret files matching these
patterns are not in the clone the wiki summarizes.

[`.gitignore`](https://github.com/quirq-ai/website/blob/main/.gitignore) · other · 832 bytes

### .imgbotconfig

Extensionless file `.imgbotconfig`. { "schedule": "daily", "aggressiveCompression": "false"
}.

[`.imgbotconfig`](https://github.com/quirq-ai/website/blob/main/.imgbotconfig) · other · 66 bytes

### .markdownlint-cli2.jsonc

Jsonc file `.markdownlint-cli2.jsonc`.

[`.markdownlint-cli2.jsonc`](https://github.com/quirq-ai/website/blob/main/.markdownlint-cli2.jsonc) · code · 824 bytes

### .nvmrc

Extensionless file `.nvmrc`. 22.

[`.nvmrc`](https://github.com/quirq-ai/website/blob/main/.nvmrc) · other · 2 bytes

### .prettierignore

Extensionless file `.prettierignore`. *.md *.mdx *.lock .cache/ public/ node_modules/
static/.

[`.prettierignore`](https://github.com/quirq-ai/website/blob/main/.prettierignore) · other · 56 bytes

### .prettierrc

Extensionless file `.prettierrc`. { "trailingComma": "es5", "tabWidth": 4, "semi": false,
"singleQuote": true, "printWidth": 120 }.

[`.prettierrc`](https://github.com/quirq-ai/website/blob/main/.prettierrc) · other · 107 bytes

### .vale.ini

INI config `.vale.ini`. Sections: `formats`, `*.{md,mdx}`, `**/docs/**/*.{md,mdx}`,
`**/{blog,newsletter,tutorials}/**/*.{md,mdx}`.

[`.vale.ini`](https://github.com/quirq-ai/website/blob/main/.vale.ini) · code · 964 bytes

### .vercelignore

Extensionless file `.vercelignore`. .git .cache .pnpm-store.

[`.vercelignore`](https://github.com/quirq-ai/website/blob/main/.vercelignore) · other · 23 bytes

### AGENTS.md

The agent/workspace instructions (“Working on Quirq Home base”). This repository is Quirq's
Gatsby 4 / React website, adapted from the PostHog desktop interface. Public repositories in
the configured GitHub organization become app pages inside a shared desktop. Read
[README.md](README.md) and the [app mapping guide](docs/quirq-app-mapping.md) before
changing the catalog or routes.

[`AGENTS.md`](https://github.com/quirq-ai/website/blob/main/AGENTS.md) · code · 5180 bytes

### CLAUDE.md

The Claude Code instructions (“Working on Quirq Home base”). This repository is Quirq's
Gatsby 4 / React website, adapted from the PostHog desktop interface. Public repositories in
the configured GitHub organization become app pages inside a shared desktop. Read
[README.md](README.md) and the [app mapping guide](docs/quirq-app-mapping.md) before
changing the catalog or routes.

[`CLAUDE.md`](https://github.com/quirq-ai/website/blob/main/CLAUDE.md) · code · 5180 bytes

### LICENSE

License text (Apache License). Governs use, modification, and distribution of this
repository. Read the full file in the source tree before depending on the project in a
product or redistribution.

[`LICENSE`](https://github.com/quirq-ai/website/blob/main/LICENSE) · other · 11357 bytes

### LICENSE.posthog

Posthog file `LICENSE.posthog`. For all content except the /contents/ folder.

[`LICENSE.posthog`](https://github.com/quirq-ai/website/blob/main/LICENSE.posthog) · code · 1490 bytes

### LICENSING.md

Markdown page “Licensing and attribution”. This repository combines Quirq additions with
material inherited from [PostHog/posthog.com](https://github.com/PostHog/posthog.com),
starting from commit 4c27ff7578f24c75b40d1024e4e0cbd40c9922ba.

[`LICENSING.md`](https://github.com/quirq-ai/website/blob/main/LICENSING.md) · code · 1663 bytes

### README.md

The project README (“Quirq home base”). A customizable desktop for the apps, experiments,
and open source projects in the [Quirq GitHub organization](https://github.com/quirq-ai).

[`README.md`](https://github.com/quirq-ai/website/blob/main/README.md) · code · 14704 bytes

### SECURITY.md

The security policy (“Reporting a Vulnerability”). Security vulnerabilities and other
security related findings can be reported via our [vulnerability disclosure
program](https://bugcrowd.com/engagements/posthog-vdp-pro) or by emailing [security-
reports@posthog.com](mailto:security-reports@posthog.com).

[`SECURITY.md`](https://github.com/quirq-ai/website/blob/main/SECURITY.md) · code · 451 bytes

### STYLEGUIDE.md

Markdown page “Documentation style guide”. This style guide explains our standards and
guidelines for contributors to the PostHog documentation.

[`STYLEGUIDE.md`](https://github.com/quirq-ai/website/blob/main/STYLEGUIDE.md) · code · 4051 bytes

### WARP.md

Markdown page “WARP.md”. This file provides guidance to WARP (warp.dev) when working with
code in this repository.

[`WARP.md`](https://github.com/quirq-ai/website/blob/main/WARP.md) · code · 4336 bytes

### gatsby-browser.tsx

import React from 'react' import { initKea, wrapElement } from './kea' import '@fontsource-
variable/ibm-plex-sans' import '@fontsource-variable/ibm-plex-sans/wght-italic.css' import
'./src/styles/global.css' import { Provider as ToastProvider } from './src/context/Toast'
import { RouteUpdateArgs } from 'gatsby' import Wrapper from './src/components/Wrapper'
Notable exports: `wrapRootElement`, `onRouteUpdate`, `wrapPageElement`

[`gatsby-browser.tsx`](https://github.com/quirq-ai/website/blob/main/gatsby-browser.tsx) · code · 1265 bytes

### gatsby-config.js

require('dotenv').config({ path: .env.${process.env.NODE_ENV}.local })
require('dotenv').config({ path: .env.${process.env.NODE_ENV} }) const path =
require('path').

[`gatsby-config.js`](https://github.com/quirq-ai/website/blob/main/gatsby-config.js) · code · 1491 bytes

### gatsby-node.ts

import path from 'path' import fs from 'fs' import { GatsbyNode } from 'gatsby' import {
getQuirqApps } from './src/lib/quirqApps' Notable exports: `createPages`, `onCreatePage`,
`preprocessSource`, `onCreateBabelConfig`, `onCreateWebpackConfig`.

[`gatsby-node.ts`](https://github.com/quirq-ai/website/blob/main/gatsby-node.ts) · code · 3944 bytes

### gatsby-ssr.js

Implement Gatsby's SSR (Server Side Rendering) APIs in this file. Notable exports:
`wrapRootElement`, `wrapPageElement`, `onRenderBody`, `onPreRenderHTML`.

[`gatsby-ssr.js`](https://github.com/quirq-ai/website/blob/main/gatsby-ssr.js) · code · 1433 bytes

### greptile.json

JSON document `greptile.json` whose top-level keys are `commentTypes`, `instructions`,
`customContext`, `ignorePatterns`, `triggerOnUpdates`, `shouldUpdateDescription`,
`disabledLabels`, `excludeAuthors`. Structured data consumed by the surrounding app or
tooling.

[`greptile.json`](https://github.com/quirq-ai/website/blob/main/greptile.json) · code · 4281 bytes

### kea.js

import React from 'react' import { Provider } from 'react-redux' import { getContext,
resetContext } from 'kea' import { loadersPlugin } from 'kea-loaders' import { routerPlugin
} from 'kea-router' import { localStoragePlugin } from 'kea-localstorage' Notable exports:
`initKea`, `wrapElement`.

[`kea.js`](https://github.com/quirq-ai/website/blob/main/kea.js) · code · 541 bytes

### package.json

npm package manifest for `quirq-home-base` v1.0.0. A customizable desktop for apps from the
Quirq GitHub organization. Scripts: `apps:sync`, `apps:check`, `apps:test`, `prebuild-move`,
`build-move`, `prebuild`, `build`, `prebuild:minimal`, `build:minimal`, `start`, and 28
more.

[`package.json`](https://github.com/quirq-ai/website/blob/main/package.json) · code · 13464 bytes

### pnpm-lock.yaml

Package-manager lockfile (pnpm-lock.yaml, 1.4 MB). It pins the exact dependency tree for
reproducible installs. Treat this as a generated blob: read the companion manifest
(`package.json`, `pyproject.toml`, or `requirements.txt`) for declared dependencies instead
of this file.

[`pnpm-lock.yaml`](https://github.com/quirq-ai/website/blob/main/pnpm-lock.yaml) · lockfile · 1428685 bytes

### pnpm-workspace.yaml

YAML file `pnpm-workspace.yaml`. Top-level keys: `packages`, `minimumReleaseAge`,
`minimumReleaseAgeExclude`, `blockExoticSubdeps`, `trustPolicy`, `publicHoistPattern`. Hoist
Gatsby's internal dependencies for webpack compatibility.

[`pnpm-workspace.yaml`](https://github.com/quirq-ai/website/blob/main/pnpm-workspace.yaml) · code · 546 bytes

### postcss.config.js

module.exports = () => ({ plugins: [require('tailwindcss/nesting'), require('tailwindcss'),
require('autoprefixer')], }).

[`postcss.config.js`](https://github.com/quirq-ai/website/blob/main/postcss.config.js) · code · 125 bytes

### quirq.apps.json

JSON document `quirq.apps.json` whose top-level keys are `organization`, `name`, `defaults`,
`repositories`. Structured data consumed by the surrounding app or tooling.

[`quirq.apps.json`](https://github.com/quirq-ai/website/blob/main/quirq.apps.json) · code · 1948 bytes

### safelist.txt

Txt file `safelist.txt`. from-[color-mix(in_srgb,rgb(var(--bg))_0%,transparent)] via-[color-
mix(in_srgb,rgb(var(--bg))_75%,transparent)] to-[rgb(var(--bg))] [&_ul]:mb-0 [&_a]:text-
white [&_img]:w-[724px] [&_img]:max-w-[724px] @xl:max-w-2xs @2xl:basis-3/12 @2xl:basis-4/12
@2xl:basis-5/12 @2xl:basis-6/12 @2xl:basis-7/12 @2xl:basis-8/12 @2xl:basis-9/12 @2xl:ml-8
@2xl:mr-8 @2xl:pl-0 @2xl:w-1/2 @2xl:w-2/5 @2xl:w-3/5 [&_.bg-front]:fill-yellow [&_.

[`safelist.txt`](https://github.com/quirq-ai/website/blob/main/safelist.txt) · code · 10503 bytes

### tailwind.config.js

module.exports = { content: ['./src//*.{js,jsx,ts,tsx}',
'./contents//*.{js,jsx,ts,tsx,mdx}', './safelist.txt'], options: { safelist: [ use
safelist.txt ], }, darkMode: 'class', // or 'media' or 'class' theme: { screens: { '2xs':
'425px', xs: '482px', sm: '640px', => @media (min-width: 640px) { ... }.

[`tailwind.config.js`](https://github.com/quirq-ai/website/blob/main/tailwind.config.js) · code · 24544 bytes

### tsconfig.json

JSON file `tsconfig.json` that did not parse from the prefix that was read. Open the source
file for the full document.

[`tsconfig.json`](https://github.com/quirq-ai/website/blob/main/tsconfig.json) · code · 2001 bytes

### vercel.json

JSON document `vercel.json` whose top-level keys are `$schema`, `framework`, `buildCommand`,
`outputDirectory`. Structured data consumed by the surrounding app or tooling.

[`vercel.json`](https://github.com/quirq-ai/website/blob/main/vercel.json) · code · 153 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
