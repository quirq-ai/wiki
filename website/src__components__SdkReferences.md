<!-- quirq-wiki-generated repo=website dir=src/components/SdkReferences -->

# website / src/components/SdkReferences

Source: [src/components/SdkReferences](https://github.com/quirq-ai/website/tree/main/src/components/SdkReferences) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Accordion.tsx

import React from 'react' import { Chevron } from 'components/Icons' Provides a default
export as the module's public entry.

[`src/components/SdkReferences/Accordion.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SdkReferences/Accordion.tsx) · code · 754 bytes

### Examples.tsx

import React from 'react' import { SingleCodeBlock } from '../CodeBlock' import languageMap
from '../CodeBlock/languages' import Tab from 'components/Tab' Provides a default export as
the module's public entry.

[`src/components/SdkReferences/Examples.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SdkReferences/Examples.tsx) · code · 1663 bytes

### Parameters.tsx

import React from 'react' import ReactMarkdown from 'react-markdown' import TypeLink from
'./TypeLink' Notable exports: `Parameter`.

[`src/components/SdkReferences/Parameters.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SdkReferences/Parameters.tsx) · code · 3609 bytes

### Return.tsx

import React from 'react' import TypeLink from './TypeLink' import { TABLE_CLASSES } from
'../../constants' Provides a default export as the module's public entry.

[`src/components/SdkReferences/Return.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SdkReferences/Return.tsx) · code · 2978 bytes

### TypeLink.tsx

import Link from '../Link' import React from 'react' Provides a default export as the
module's public entry.

[`src/components/SdkReferences/TypeLink.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SdkReferences/TypeLink.tsx) · code · 1974 bytes

### utils.test.ts

Versioned SDK reference path parsing, used by the version-unavailable page. Automated test
file.

[`src/components/SdkReferences/utils.test.ts`](https://github.com/quirq-ai/website/blob/main/src/components/SdkReferences/utils.test.ts) · code · 1581 bytes

### utils.ts

export const SDK_LANGUAGE_BY_ID = { 'posthog-js': 'ts', 'posthog-python': 'python',
'posthog-php': 'php', 'posthog-ruby': 'ruby', 'posthog-go': 'go', 'posthog-java': 'java',
'posthog-node': 'node', 'posthog-ios': 'swift', 'posthog-android': 'java', 'posthog-react-
native': 'react-native', 'posthog-flutter': 'flutter', } as const Notable exports:
`SDK_LANGUAGE_BY_ID`, `SupportedSdkId`, `SUPPORTED_SDK_IDS`, `getLanguageFromSdkId`

[`src/components/SdkReferences/utils.ts`](https://github.com/quirq-ai/website/blob/main/src/components/SdkReferences/utils.ts) · code · 2325 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
