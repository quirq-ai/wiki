<!-- quirq-wiki-generated repo=ui dir=library/website/source/src/lib -->

# ui / library/website/source/src/lib

Source: [library/website/source/src/lib](https://github.com/quirq-ai/ui/tree/main/library/website/source/src/lib) in [ui](https://github.com/quirq-ai/ui).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### externalLinks.ts

Rule (AGENTS.md): every link that leaves this site opens in a window on this site, the page
in an iframe (/launch/web/<address>). A page that refuses frames, can't be reached or isn't
there shows "Oops" with an Open in new tab button instead. Links marked with
NEW_TAB_ATTRIBUTE (the Open in new tab buttons themselves), and clicks with a modifier key,
open in a new tab.

[`library/website/source/src/lib/externalLinks.ts`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/lib/externalLinks.ts) · code · 4482 bytes

### frameCheck.ts

Whether a web page can open in a window on this site, in an iframe. A site decides that with
its response headers (X-Frame-Options, or CSP frame-ancestors), and the browser hides the
answer from the page that frames it: a refused frame just shows the browser's own error.

[`library/website/source/src/lib/frameCheck.ts`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/lib/frameCheck.ts) · code · 13401 bytes

### quirqApps.ts

import config from '../../quirq.apps.json' import snapshot from '../data/quirq-
repositories.json' import { buildQuirqApps } from '../../scripts/lib/quirq-catalog.mjs'
import type { QuirqRole } from './quirqRoles' import type { QuirqIcon } from
'../components/QuirqAppIcon/glyphs' Notable exports: `getQuirqApps`, `getLaunchTarget`,
`getQuirqApp`, `QuirqApp`, `quirqConfig`, `quirqSnapshot`.

[`library/website/source/src/lib/quirqApps.ts`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/lib/quirqApps.ts) · code · 2009 bytes

### quirqAvatar.ts

A small configuration and storage adapter over the vendored Blobatar renderer, modeled on
Euler's euler-avatar.js. Avatars render locally from a name (the seed); nothing calls a
service. Notable exports: `normalizeAvatarConfig`, `avatarSvg`, `avatarUri`,
`loadAvatarConfig`, `saveAvatarConfig`, `useQuirqAvatar`, `AVATAR_STORAGE_KEY`,
`QUIRQY_WINDOW`, and 8 more.

[`library/website/source/src/lib/quirqAvatar.ts`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/lib/quirqAvatar.ts) · code · 6917 bytes

### quirqDocs.ts

A repository's documentation, read in the visitor's browser. The list of Markdown files
comes from GitHub's git trees API: one anonymous, rate-limited request per repository per
visit (an unchanged tree revalidates as a 304, which GitHub doesn't count). Each file comes
from raw.githubusercontent.com, which is outside the API's rate limit and caches files for
up to 5 minutes.

[`library/website/source/src/lib/quirqDocs.ts`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/lib/quirqDocs.ts) · code · 8233 bytes

### quirqLiveApps.ts

The organization's repository list, read live in the visitor's browser from GitHub's public
REST API, so a repository created, renamed, described or deleted in the organization shows
on the desktop, in Home base and in search without a rebuild. No token or backend.

[`library/website/source/src/lib/quirqLiveApps.ts`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/lib/quirqLiveApps.ts) · code · 8000 bytes

### quirqProjects.ts

import config from '../../quirq.projects.json' import snapshot from '../data/quirq-
projects.json' import { buildQuirqProjects, DEFAULT_PROJECT_RULE, PHASES, projectRuleText }
from '../../scripts/lib/quirq-phases.mjs' Notable exports: `getQuirqProjectGroups`,
`PhaseId`, `Phase`, `QuirqProject`, `QuirqProjectGroup`, `quirqPhases`, `projectsFetchedAt`,
`starsSource`.

[`library/website/source/src/lib/quirqProjects.ts`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/lib/quirqProjects.ts) · code · 1667 bytes

### quirqReadmeLinks.ts

The links in the organization's profile README, as the desktop shows them: each is an app
icon (its look) that opens where the link points (its target). Pure functions, so they can
be tested. Notable exports: `readmeLinkApp`, `readmeLinkLook`, `canFrameReadmeLink`,
`readmeLinkAddress`, `readmeLinkTarget`, `readmeLinks`, `readmeLinkNamed`, `readmeLinkAt`,
and 8 more.

[`library/website/source/src/lib/quirqReadmeLinks.ts`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/lib/quirqReadmeLinks.ts) · code · 8631 bytes

### quirqRoles.ts

import { QUIRQ_ROLES } from '../../scripts/lib/quirq-catalog.mjs' Notable exports:
`roleKeywords`, `QuirqRole`, `quirqRoles`, `roleInfo`.

[`library/website/source/src/lib/quirqRoles.ts`](https://github.com/quirq-ai/ui/blob/main/library/website/source/src/lib/quirqRoles.ts) · code · 1485 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
