<!-- quirq-wiki-generated repo=website dir=src/components/Squeak/util -->

# website / src/components/Squeak/util

Source: [src/components/Squeak/util](https://github.com/quirq-ai/website/tree/main/src/components/Squeak/util) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### getAvatar.ts

import { ProfileData, StrapiRecord } from 'lib/strapi' Notable exports: `getAvatarURL`.

[`src/components/Squeak/util/getAvatar.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/util/getAvatar.ts) · code · 413 bytes

### getLevel.ts

export const LEVELS = [ { threshold: 10, label: 'Hoglet', color: '#6B7280', borderOpacity:
'40', bgOpacity: '12', shimmer: null, }, { threshold: 50, label: 'Hogthusiast', color:
'#30ABC6', borderOpacity: '60', bgOpacity: '18', shimmer: null, }, { threshold: 100, label:
'PowerHog', color: '#2F80FA', borderOpacity: '80', bgOpacity: '20', shimmer: { colors: ['#
Notable exports: `getLevel`, `LEVELS`, `LevelInfo`.

[`src/components/Squeak/util/getLevel.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/util/getLevel.ts) · code · 1845 bytes

### topicGroups.ts

import qs from 'qs' Notable exports: `fetchTopicGroups`, `topicGroupsSorted`.

[`src/components/Squeak/util/topicGroups.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/util/topicGroups.ts) · code · 1638 bytes

### transformValues.ts

import uploadImage from './uploadImage' Notable exports: `transformValues`.

[`src/components/Squeak/util/transformValues.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/util/transformValues.ts) · code · 1268 bytes

### uploadImage.ts

export default async function uploadImage( image: string | Blob, jwt: string, ref?: { id:
number; type: string; field: string; folderId?: number } ) { const formData = new FormData()
formData.append('files', image) if (ref && ref.field && ref.id && ref.type) {
formData.append('refId', String(ref.id)) formData.append('ref', ref.type)
formData.append('field' Notable exports: `uploadImage`.

[`src/components/Squeak/util/uploadImage.ts`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/util/uploadImage.ts) · code · 1189 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
