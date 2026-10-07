<!-- quirq-wiki-generated repo=website dir=src/components/LoopGame -->

# website / src/components/LoopGame

Source: [src/components/LoopGame](https://github.com/quirq-ai/website/tree/main/src/components/LoopGame) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“LoopGame”). Ride the loop hype wave! is a canvas rollercoaster tracing
game for the "Are these loops or graphs?" blog post. It is registered as a global MDX
shortcode with no props.

[`src/components/LoopGame/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/LoopGame/README.md) · code · 4626 bytes

### index.tsx

import { render3d } from './render3d' import React, { useEffect, useRef, useState } from
'react' import OSButton from 'components/OSButton' import { Select } from
'components/RadixUI/Select' import maxImage from '../../images/max.png' import { buildTrack,
distance, createChallenge, DIFFICULTIES, FINISH, HEIGHT, launchRide, START, stepRide, WIDTH,
} from './p Notable exports: `LoopGame`.

[`src/components/LoopGame/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/LoopGame/index.tsx) · code · 19136 bytes

### physics.test.ts

import assert from 'node:assert/strict' import { test } from 'node:test' import {
buildTrack, createChallenge, FINISH, launchRide, START, stepRide } from './physics.ts'
import type { Difficulty, TrackPoint } from './physics.ts' Automated test file.

[`src/components/LoopGame/physics.test.ts`](https://github.com/quirq-ai/website/blob/main/src/components/LoopGame/physics.test.ts) · code · 3596 bytes

### physics.ts

export type Point = { x: number; y: number } export type TrackPoint = Point & { distance:
number; angle: number; turn: number; curvature: number } export type Ride = { distance:
number speed: number x: number y: number angle: number loops: number state: 'riding' |
'flying' | 'finished' | 'stalled' | 'crashed' vx: number vy: number reason: string
strainedFor Notable exports: `createChallenge`, `buildTrack`, `pointOnTrack`, `launchRide`

[`src/components/LoopGame/physics.ts`](https://github.com/quirq-ai/website/blob/main/src/components/LoopGame/physics.ts) · code · 7622 bytes

### render3d.ts

import { HEIGHT, WIDTH } from './physics' import type { Ride, TrackPoint } from './physics'
Notable exports: `render3d`.

[`src/components/LoopGame/render3d.ts`](https://github.com/quirq-ai/website/blob/main/src/components/LoopGame/render3d.ts) · code · 7803 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
