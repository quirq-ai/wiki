<!-- quirq-wiki-generated repo=website dir=src/components/Community -->

# website / src/components/Community

Source: [src/components/Community](https://github.com/quirq-ai/website/tree/main/src/components/Community) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Layout.tsx

import Layout from 'components/Layout' import PostLayout from 'components/PostLayout' import
{ TableOfContents } from 'components/PostLayout/types' import SEO from 'components/seo'
import React from 'react' import Sidebar from './Sidebar' import { communityMenu } from
'../../navs' Notable exports: `CommunityLayout`, `SectionTitle`.

[`src/components/Community/Layout.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Community/Layout.tsx) · code · 1510 bytes

### Sidebar.tsx

import React, { useEffect, useState } from 'react' import Link from 'components/Link' import
{ Authentication, EditProfile } from 'components/Squeak' import { useUser } from
'hooks/useUser' import Modal from 'components/Modal' import { CallToAction } from
'components/CallToAction' Notable exports: `Sidebar`, `Avatar`, `Login`, `Profile`.

[`src/components/Community/Sidebar.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Community/Sidebar.tsx) · code · 7600 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
