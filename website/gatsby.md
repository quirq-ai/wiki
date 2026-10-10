<!-- quirq-wiki-generated repo=website dir=gatsby -->

# website / gatsby

Source: [gatsby](https://github.com/quirq-ai/website/tree/main/gatsby) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### algoliaConfig.js

const Slugger = require('github-slugger') const settings =
require('./algoliaSettings.json').

[`gatsby/algoliaConfig.js`](https://github.com/quirq-ai/website/blob/main/gatsby/algoliaConfig.js) · code · 14870 bytes

### algoliaSettings.json

JSON document `algoliaSettings.json` whose top-level keys are `searchableAttributes`,
`customRanking`, `attributesForFaceting`, `unretrievableAttributes`, `minProximity`,
`removeWordsIfNoResults`. Structured data consumed by the surrounding app or tooling.

[`gatsby/algoliaSettings.json`](https://github.com/quirq-ai/website/blob/main/gatsby/algoliaSettings.json) · code · 479 bytes

### createPages.ts

import { GatsbyNode } from 'gatsby' Notable exports: `createPages`.

[`gatsby/createPages.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/createPages.ts) · code · 50509 bytes

### createResolvers.ts

import { GatsbyNode } from 'gatsby' Notable exports: `createResolvers`.

[`gatsby/createResolvers.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/createResolvers.ts) · code · 2864 bytes

### createSchemaCustomization.ts

import { GatsbyNode } from 'gatsby' Notable exports: `createSchemaCustomization`.

[`gatsby/createSchemaCustomization.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/createSchemaCustomization.ts) · code · 25587 bytes

### emitWebpackGraphPlugin.js

const fs = require('fs') const path = require('path').

[`gatsby/emitWebpackGraphPlugin.js`](https://github.com/quirq-ai/website/blob/main/gatsby/emitWebpackGraphPlugin.js) · code · 5003 bytes

### enrichVideos.ts

import fs from 'fs/promises' import path from 'path' import { videos } from
'../src/data/videos' Notable exports: `enrichVideos`.

[`gatsby/enrichVideos.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/enrichVideos.ts) · code · 3609 bytes

### onCreateNode.ts

import { getPublicID, replacePath, stripFrontmatter } from './utils' import {
createFilePath, createRemoteFileNode } from 'gatsby-source-filesystem' Notable exports:
`onPreInit`, `onCreateNode`.

[`gatsby/onCreateNode.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/onCreateNode.ts) · code · 20185 bytes

### onPostBuild.ts

import path from 'path' import fs from 'fs' Notable exports: `onPostBuild`.

[`gatsby/onPostBuild.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/onPostBuild.ts) · code · 13457 bytes

### onPreBootstrap.ts

import { GatsbyNode } from 'gatsby' Notable exports: `PAGEVIEW_CACHE_KEY`,
`MCP_TOOLS_CACHE_KEY`, `onPreBootstrap`.

[`gatsby/onPreBootstrap.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/onPreBootstrap.ts) · code · 8365 bytes

### postBuildTasks.ts

import chromium from 'chrome-aws-lambda' import path from 'path' import fs from 'fs' import
nodeFetch from 'node-fetch' Notable exports: `createCareersOG`, `createOGImages`,
`createOrUpdateStrapiPosts`.

[`gatsby/postBuildTasks.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/postBuildTasks.ts) · code · 15909 bytes

### quirqRoutes.test.cjs

const assert = require('node:assert/strict') const fs = require('node:fs') const path =
require('node:path') const vm = require('node:vm') const test = require('node:test') const {
createRequire } = require('node:module') const ts = require('typescript') const {
buildQuirqApps } = require('../scripts/lib/quirq-catalog.mjs') Automated test file.

[`gatsby/quirqRoutes.test.cjs`](https://github.com/quirq-ai/website/blob/main/gatsby/quirqRoutes.test.cjs) · code · 5776 bytes

### rawMarkdownUtils.ts

import path from 'path' import fs from 'fs' import { SdkReferenceData } from
'../src/templates/sdk/SdkReference' import { getLanguageFromSdkId, hasConcreteVersion,
isLatestVersion, typeHasPage, } from '../src/components/SdkReferences/utils' import {
createTurndownService, extractTitleFromHtml, extractMainContent, postProcessMarkdown,
preprocessHtmlForTabs, } Notable exports: `generateRawMarkdownPages`, `generateOpenApiSpec`

[`gatsby/rawMarkdownUtils.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/rawMarkdownUtils.ts) · code · 52062 bytes

### sourceNodes.ts

import { GatsbyNode } from 'gatsby' Notable exports: `sourceNodes`.

[`gatsby/sourceNodes.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/sourceNodes.ts) · code · 61149 bytes

### standardSite.test.ts

Quick unit checks for the Standard.site document-building logic. Run: npx tsx
gatsby/standardSite.test.ts (Pure-function verification — the full gatsby build needs 16GB
RAM.).

[`gatsby/standardSite.test.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/standardSite.test.ts) · code · 3893 bytes

### standardSite.ts

Standard.site document sync. Notable exports: `rkeyFromSlug`, `htmlToText`, `buildRecord`,
`canonical`, `syncStandardSiteDocuments`.

[`gatsby/standardSite.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/standardSite.ts) · code · 12257 bytes

### turndownService.test.ts

import assert from 'node:assert/strict' import { test } from 'node:test' import {
createTurndownService, extractTitleFromHtml, postProcessMarkdown, preprocessHtmlForTabs, }
from './turndownService.ts' Automated test file.

[`gatsby/turndownService.test.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/turndownService.test.ts) · code · 3702 bytes

### turndownService.ts

One shared document for every page. A new JSDOM per page leaks through the selector engine's
cache (about 18 MB per page across thousands of pages). Notable exports:
`preprocessHtmlForTabs`, `extractTitleFromHtml`, `extractMainContent`,
`createTurndownService`, `postProcessMarkdown`.

[`gatsby/turndownService.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/turndownService.ts) · code · 13630 bytes

### utils.test.ts

getPublicID must ignore the transformation and version segments that Cloudinary allows
before the public ID, and must keep folder segments that are part of it. Automated test
file.

[`gatsby/utils.test.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/utils.test.ts) · code · 2030 bytes

### utils.ts

Replacing '/' would result in empty string which is invalid Notable exports: `flattenMenu`,
`replacePath`, `stripFrontmatter`, `getPublicID`.

[`gatsby/utils.ts`](https://github.com/quirq-ai/website/blob/main/gatsby/utils.ts) · code · 1821 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
