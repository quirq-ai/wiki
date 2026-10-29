<!-- quirq-wiki-generated repo=website dir=src/lib -->

# website / src/lib

Source: [src/lib](https://github.com/quirq-ai/website/tree/main/src/lib) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### externalLinks.test.ts

import test from 'node:test' import assert from 'node:assert/strict' import {
isAbsoluteWebUrl, leavesSite, openExternalLinksInWindows, webWindowPath, webWindowTitle,
webWindowUrl, } from './externalLinks.ts' Automated test file.

[`src/lib/externalLinks.test.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/externalLinks.test.ts) · code · 4626 bytes

### externalLinks.ts

Rule (AGENTS.md): every link that leaves this site opens in a window on this site, the page
in an iframe (/launch/web/<address>). A page that refuses frames, can't be reached or isn't
there shows "Oops" with an Open in new tab button instead. Links marked with
NEW_TAB_ATTRIBUTE (the Open in new tab buttons themselves), and clicks with a modifier key,
open in a new tab.

[`src/lib/externalLinks.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/externalLinks.ts) · code · 4482 bytes

### frameCheck.test.ts

import test from 'node:test' import assert from 'node:assert/strict' import {
ancestorAllowed, frameAncestors, followFrameCheck, frameVerdict, isFrameCheck,
isPublicAddress, isSharedHost, knownFrameCheck, probeableUrl, } from './frameCheck.ts'
Automated test file.

[`src/lib/frameCheck.test.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/frameCheck.test.ts) · code · 11874 bytes

### frameCheck.ts

Whether a web page can open in a window on this site, in an iframe. A site decides that with
its response headers (X-Frame-Options, or CSP frame-ancestors), and the browser hides the
answer from the page that frames it: a refused frame just shows the browser's own error.

[`src/lib/frameCheck.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/frameCheck.ts) · code · 13401 bytes

### landing.test.ts

import test from 'node:test' import assert from 'node:assert/strict' import { isLandingPath,
startsOnDesktop } from './landing.ts' Automated test file.

[`src/lib/landing.test.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/landing.test.ts) · code · 991 bytes

### landing.ts

A visit to the home page lands on the desktop with no window open; the dock's Home opens
Home base. Notable exports: `isLandingPath`, `startsOnDesktop`, `LANDING_STATE`.

[`src/lib/landing.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/landing.ts) · code · 847 bytes

### quirqAnalytics.ts

PostHog analytics and error tracking, on only when the build has GATSBY_POSTHOG_KEY (a
public project key). posthog-js can't be added with pnpm (the workspace trust policy), so
the browser loads PostHog's own script instead. A deployed site reaches PostHog through the
`/ingest` rewrites in vercel.json; `gatsby develop` has no rewrites and goes to PostHog
directly. Notable exports: `getPostHog`, `startAnalytics`.

[`src/lib/quirqAnalytics.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqAnalytics.ts) · code · 1713 bytes

### quirqApps.ts

import config from '../../quirq.apps.json' import snapshot from '../data/quirq-
repositories.json' import { buildQuirqApps } from '../../scripts/lib/quirq-catalog.mjs'
import type { QuirqRole } from './quirqRoles' import type { QuirqIcon } from
'../components/QuirqAppIcon/glyphs' Notable exports: `getQuirqApps`, `getLaunchTarget`,
`getQuirqApp`, `QuirqApp`, `quirqConfig`, `quirqSnapshot`.

[`src/lib/quirqApps.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqApps.ts) · code · 2009 bytes

### quirqAvatar.ts

A small configuration and storage adapter over the vendored Blobatar renderer, modeled on
Euler's euler-avatar.js. Avatars render locally from a name (the seed); nothing calls a
service. Notable exports: `normalizeAvatarConfig`, `avatarSvg`, `avatarUri`,
`loadAvatarConfig`, `saveAvatarConfig`, `useQuirqAvatar`, `AVATAR_STORAGE_KEY`,
`QUIRQY_WINDOW`, and 8 more.

[`src/lib/quirqAvatar.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqAvatar.ts) · code · 6919 bytes

### quirqDocs.test.ts

import test from 'node:test' import assert from 'node:assert/strict' import { docImageUrl,
docLabel, docSrcSet, isDocPath, readmeIn, readmeSummary, repositoryPath, themedMedia,
withoutTitle, } from './quirqDocs.ts' Automated test file.

[`src/lib/quirqDocs.test.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqDocs.test.ts) · code · 5648 bytes

### quirqDocs.ts

A repository's documentation, read in the visitor's browser. The list of Markdown files
comes from GitHub's git trees API: one anonymous, rate-limited request per repository per
visit (an unchanged tree revalidates as a 304, which GitHub doesn't count). Each file comes
from raw.githubusercontent.com, which is outside the API's rate limit and caches files for
up to 5 minutes.

[`src/lib/quirqDocs.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqDocs.ts) · code · 8233 bytes

### quirqLiveApps.ts

The organization's repository list, read live in the visitor's browser from GitHub's public
REST API, so a repository created, renamed, described or deleted in the organization shows
on the desktop, in Home base and in search without a rebuild. No token or backend.

[`src/lib/quirqLiveApps.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqLiveApps.ts) · code · 9899 bytes

### quirqProjectFilter.test.ts

import test from 'node:test' import assert from 'node:assert/strict' import {
projectGroupsOnly } from './quirqProjectFilter.ts' Automated test file.

[`src/lib/quirqProjectFilter.test.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqProjectFilter.test.ts) · code · 2632 bytes

### quirqProjectFilter.ts

The Projects page lists only repositories whose type (the organization's `role` property) is
project. Notable exports: `projectGroupsOnly`.

[`src/lib/quirqProjectFilter.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqProjectFilter.ts) · code · 1336 bytes

### quirqProjects.ts

import config from '../../quirq.projects.json' import snapshot from '../data/quirq-
projects.json' import { buildQuirqProjects, DEFAULT_PROJECT_RULE, PHASES, projectRuleText }
from '../../scripts/lib/quirq-phases.mjs' Notable exports: `getQuirqProjectGroups`,
`PhaseId`, `Phase`, `QuirqProject`, `QuirqProjectGroup`, `quirqPhases`, `projectsFetchedAt`,
`starsSource`.

[`src/lib/quirqProjects.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqProjects.ts) · code · 1812 bytes

### quirqReadmeLinks.test.ts

import test from 'node:test' import assert from 'node:assert/strict' import {
canFrameReadmeLink, readmeLinkAt, readmeLinkNamed, readmeLinkLabel, readmeLinkLook,
readmeLinks, readmeLinkTarget, } from './quirqReadmeLinks.ts' Automated test file.

[`src/lib/quirqReadmeLinks.test.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqReadmeLinks.test.ts) · code · 6886 bytes

### quirqReadmeLinks.ts

The links in the organization's profile README, as the desktop shows them: each is an app
icon (its look) that opens where the link points (its target). Pure functions, so they can
be tested. Notable exports: `readmeLinkApp`, `readmeLinkLook`, `canFrameReadmeLink`,
`readmeLinkAddress`, `readmeLinkTarget`, `readmeLinks`, `readmeLinkNamed`, `readmeLinkAt`,
and 8 more.

[`src/lib/quirqReadmeLinks.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqReadmeLinks.ts) · code · 8631 bytes

### quirqRoles.test.ts

import test from 'node:test' import assert from 'node:assert/strict' import { quirqRoles,
roleInfo, roleKeywords } from './quirqRoles.ts' Automated test file.

[`src/lib/quirqRoles.test.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqRoles.test.ts) · code · 750 bytes

### quirqRoles.ts

import { QUIRQ_ROLES } from '../../scripts/lib/quirq-catalog.mjs' Notable exports:
`roleKeywords`, `QuirqRole`, `quirqRoles`, `roleInfo`.

[`src/lib/quirqRoles.ts`](https://github.com/quirq-ai/website/blob/main/src/lib/quirqRoles.ts) · code · 1485 bytes

_Generated 2026-10-29 11:52 UTC from `main`._
