<!-- quirq-wiki-generated repo=website dir=src/components/Team -->

# website / src/components/Team

Source: [src/components/Team](https://github.com/quirq-ai/website/tree/main/src/components/Team) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Crest.tsx

import React, { useEffect, useState } from 'react' import Modal from 'components/Modal'
import TeamPatch from 'components/TeamPatch' import ImageDrop, { Image } from
'components/ImageDrop' import Select from 'components/Select' import { CallToAction } from
'components/CallToAction' import { IconX } from '@posthog/icons' import { useUser } from
'hooks/useUser Notable exports: `Crest`.

[`src/components/Team/Crest.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Team/Crest.tsx) · code · 21351 bytes

### Description.tsx

import React from 'react' Notable exports: `Description`.

[`src/components/Team/Description.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Team/Description.tsx) · code · 1436 bytes

### Header.tsx

import Section from './Section' import React from 'react' import Crest from './Crest' import
Link from 'components/Link' import { IconArrowLeft } from '@posthog/icons' import TeamName
from './TeamName' import Description from './Description' import { CallToAction } from
'components/CallToAction' import TeamImage from './TeamImage' Notable exports: `Header`.

[`src/components/Team/Header.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Team/Header.tsx) · code · 3218 bytes

### Profile.tsx

import React from 'react' import { Avatar } from 'components/MainNav' import Stickers from
'components/ProfileStickers' import getAvatarURL from 'components/Squeak/util/getAvatar'
import Markdown from 'components/Squeak/components/Markdown' import { CallToAction } from
'components/CallToAction' Notable exports: `Profile`, `ProfileData`.

[`src/components/Team/Profile.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Team/Profile.tsx) · code · 2489 bytes

### Roadmap.tsx

import Link from 'components/Link' import React from 'react' import Section from './Section'
import { Change } from '../../templates/Changelog' import { UnderConsideration } from
'components/Roadmap/UnderConsideration' import { Fieldset } from 'components/OSFieldset'
Notable exports: `Roadmap`.

[`src/components/Team/Roadmap.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Team/Roadmap.tsx) · code · 1722 bytes

### Section.tsx

import React from 'react' Notable exports: `Section`.

[`src/components/Team/Section.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Team/Section.tsx) · code · 1045 bytes

### SpiritAnimal.tsx

import { Fieldset } from 'components/OSFieldset' import { OSSelect, OSTextarea } from
'components/OSForm' import React, { useEffect, useState } from 'react' import qs from 'qs'
Notable exports: `SpiritAnimal`.

[`src/components/Team/SpiritAnimal.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Team/SpiritAnimal.tsx) · code · 7736 bytes

### TeamImage.tsx

import React from 'react' import ImageDrop, { Image } from 'components/ImageDrop' import
CloudinaryImage from 'components/CloudinaryImage' export default function TeamImage({
values, setFieldValue, teamImage, editing, }: { values: any setFieldValue: (field: string,
value: any) => void teamImage: any editing: boolean }): JSX.Element | null { const
handleDrop Notable exports: `TeamImage`.

[`src/components/Team/TeamImage.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Team/TeamImage.tsx) · code · 1795 bytes

### TeamName.tsx

import React from 'react' import AutosizeInput from 'react-input-autosize' import {
normalizeSlug } from './utils' Notable exports: `TeamName`.

[`src/components/Team/TeamName.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Team/TeamName.tsx) · code · 2953 bytes

### index.tsx

import { AVATAR_FALLBACK_URL } from 'constants/index' import { PineappleText } from
'components/Job/Sidebar' import { InProgress } from 'components/Roadmap/InProgress' import {
Question } from 'components/Squeak' import useTeamUpdates from 'hooks/useTeamUpdates' import
{ graphql, navigate, useStaticQuery } from 'gatsby' import { kebabCase } from 'lib/utils'
Notable exports: `Team`, `TeamMemberCard`.

[`src/components/Team/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Team/index.tsx) · code · 35437 bytes

### utils.ts

import slugify from 'slugify' Notable exports: `normalizeSlug`.

[`src/components/Team/utils.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Team/utils.ts) · code · 123 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
