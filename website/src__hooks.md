<!-- quirq-wiki-generated repo=website dir=src/hooks -->

# website / src/hooks

Source: [src/hooks](https://github.com/quirq-ai/website/tree/main/src/hooks) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### useHorizontalScrollFade.tsx

import React, { useCallback, useEffect, useRef, useState } from 'react' Notable exports:
`useHorizontalScrollFade`, `HorizontalScrollFades`.

[`src/hooks/useHorizontalScrollFade.tsx`](https://github.com/quirq-ai/website/blob/main/src/hooks/useHorizontalScrollFade.tsx) · code · 3742 bytes

### useInactivityDetection.ts

import { useEffect, useState, useRef, useCallback } from 'react' import {
INACTIVITY_TIMEOUTS } from '../constants' import { useAppActions } from '../context/App'
Notable exports: `useInactivityDetection`.

[`src/hooks/useInactivityDetection.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useInactivityDetection.ts) · code · 3750 bytes

### usePostHog.ts

import type { PostHog } from '../types/posthog' import { getPostHog } from
'../lib/quirqAnalytics' Provides a default export as the module's public entry.

[`src/hooks/usePostHog.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/usePostHog.ts) · code · 291 bytes

### useWindowLayoutAttributes.ts

import { useAppWindows } from '../context/App' Notable exports: `useWindowLayoutAttributes`.

[`src/hooks/useWindowLayoutAttributes.ts`](https://github.com/quirq-ai/website/blob/main/src/hooks/useWindowLayoutAttributes.ts) · code · 551 bytes

_Generated 2026-10-17 09:48 UTC from `main`._
