<!-- quirq-wiki-generated repo=website dir=src/components/HogMap -->

# website / src/components/HogMap

Source: [src/components/HogMap](https://github.com/quirq-ai/website/tree/main/src/components/HogMap) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### EventsLayer.tsx

import { useEffect, useState } from 'react' import { EventItem } from './types' Notable
exports: `Coordinates`, `useEventsMapData`.

[`src/components/HogMap/EventsLayer.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/HogMap/EventsLayer.tsx) · code · 5342 bytes

### EventsMap.tsx

import React, { useEffect, useRef, useState, useCallback } from 'react' import {
useEventsMapData } from './EventsLayer' import { useUserLocation } from
'../../hooks/useUserLocation' type EventItem = { id: number date?: string name?: string
link?: string location?: { label?: string } } import { computeOffsets, getMapbox,
loadMapbox, ensureClusterSource, ensu Notable exports: `EventsMap`, `LAYER_EVENTS_UPCOMING`

[`src/components/HogMap/EventsMap.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/HogMap/EventsMap.tsx) · code · 22610 bytes

### PeopleMap.tsx

import { AVATAR_FALLBACK_URL } from 'constants/index' import React, { useEffect, useRef,
useState, useCallback, useMemo } from 'react' import { navigate, graphql, useStaticQuery }
from 'gatsby' import { useUserLocation } from '../../hooks/useUserLocation' import {
computeOffsets, getMapbox, loadMapbox, ensureClusterSource, ensureClusterLayers,
setClusterVisi Notable exports: `PeopleMap`.

[`src/components/HogMap/PeopleMap.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/HogMap/PeopleMap.tsx) · code · 22428 bytes

### PeopleMapSearch.tsx

import { AVATAR_FALLBACK_URL } from 'constants/index' import { IconPin } from
'@posthog/icons' import React, { useEffect, useMemo, useRef, useState } from 'react' Notable
exports: `PeopleMapSearch`.

[`src/components/HogMap/PeopleMapSearch.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/HogMap/PeopleMapSearch.tsx) · code · 11944 bytes

### PlaceDetail.tsx

import React, { useEffect, useState } from 'react' import { motion } from 'framer-motion'
import ScrollArea from 'components/RadixUI/ScrollArea' import OSButton from
'components/OSButton' import { useUser } from 'hooks/useUser' import { PlaceItem,
PlaceReview } from './types' import { getPlaceIcon } from './PlacesMap' import {
getPlaceReviews, addPlaceReview Notable exports: `PlaceDetail`.

[`src/components/HogMap/PlaceDetail.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/HogMap/PlaceDetail.tsx) · code · 16851 bytes

### PlacesLayer.tsx

import { useEffect, useState } from 'react' import { PlaceItem } from './types' import {
getPlaces } from './data' Notable exports: `Coordinates`, `usePlacesMapData`.

[`src/components/HogMap/PlacesLayer.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/HogMap/PlacesLayer.tsx) · code · 2931 bytes

### PlacesMap.tsx

import React, { useEffect, useRef, useState, useCallback } from 'react' import { PlaceType,
PlaceItem } from './types' import { useUser } from '../../hooks/useUser' import {
useUserLocation } from '../../hooks/useUserLocation' import SearchBar, { createSearchMarker
} from './SearchBar' import { usePlacesMapData, Coordinates } from './PlacesLayer' import {
re Notable exports: `PlacesMap`, `getPlaceIcon`.

[`src/components/HogMap/PlacesMap.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/HogMap/PlacesMap.tsx) · code · 18606 bytes

### SearchBar.tsx

import React, { useEffect, useRef, useState, useImperativeHandle } from 'react' import {
createRoot } from 'react-dom/client' import type mapboxgl from 'mapbox-gl' import { addPlace
} from './data' import { PlaceType } from './types' import OSButton from
'components/OSButton' Notable exports: `createSearchMarker`, `SearchBarHandle`.

[`src/components/HogMap/SearchBar.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/HogMap/SearchBar.tsx) · code · 20969 bytes

### data.ts

Fetch all places (public endpoint, no JWT required) Notable exports: `getPlaces`,
`addPlace`, `deletePlace`, `getPlaceReviews`, `addPlaceReview`, `deletePlaceReview`.

[`src/components/HogMap/data.ts`](https://github.com/quirq-ai/website/blob/main/src/components/HogMap/data.ts) · code · 7367 bytes

### hogMapUtils.ts

Compute small lat/lng offsets to spread overlapping markers Notable exports:
`computeOffsets`, `loadMapbox`, `getMapbox`, `ensureClusterSource`, `ensureClusterLayers`,
`setClusterVisibility`, `CLUSTER_ZOOM`, `isStyleReady`, and 1 more.

[`src/components/HogMap/hogMapUtils.ts`](https://github.com/quirq-ai/website/blob/main/src/components/HogMap/hogMapUtils.ts) · code · 6922 bytes

### types.ts

export enum PlaceType { RESTAURANT = 'Restaurant', COFFEE = 'Coffee', HOTEL = 'Hotel',
AIRBNB = 'Airbnb', CO_WORKING = 'Co-working', BAR = 'Bar', OFFSITE = 'Offsite', } export
interface PlaceItem { id: number name: string address: string latitude: number | null
longitude: number | null type: PlaceType } Notable exports: `PlaceType`, `PlaceItem`,
`PlaceTag`, `PlaceReview`.

[`src/components/HogMap/types.ts`](https://github.com/quirq-ai/website/blob/main/src/components/HogMap/types.ts) · code · 740 bytes

### usePeopleGeo.ts

import { useEffect, useMemo, useState } from 'react' Notable exports: `Coordinates`, `BBox`,
`GeocodedArea`, `GeoProfile`, `findEmployeeByName`, `buildMemberQuery`, `isWithinBbox`,
`useCoordsByQuery`, and 1 more.

[`src/components/HogMap/usePeopleGeo.ts`](https://github.com/quirq-ai/website/blob/main/src/components/HogMap/usePeopleGeo.ts) · code · 6603 bytes

_Generated 2026-10-10 11:28 UTC from `main`._
