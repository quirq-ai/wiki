<!-- quirq-wiki-generated repo=quirq_ai dir=app/dashboard -->

# quirq_ai / app/dashboard

Source: [app/dashboard](https://github.com/quirq-ai/quirq_ai/tree/main/app/dashboard) in [quirq_ai](https://github.com/quirq-ai/quirq_ai).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### charts.tsx

/** * The dashboard's chart kit: DOM-built, no library. * Everything here is single-series
consumption data (tokens, event counts, * bytes), and consumption stays monochrome by the
site's figure rule: colour * is value, and none of these charts measures delivered value.
One series * also means no legend; the panel title names it. * Mark discipline: thin mark
Notable exports: `Columns`, `CalendarFilter`, `FolderMap`, `ColumnPoint`.

[`app/dashboard/charts.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/dashboard/charts.tsx) · code · 14035 bytes

### dashboard.tsx

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode, } from "react";
import { compactCount, formatDuration, isoClock, readFolderState, type FolderNode, type
FolderPayload, type OpenSession, type SessionAugment, type SessionStats, type StatsWindow,
type TimelineEvent, } from "@/lib/quirq/folder"; /* -------------------------------------
Notable exports: `Dashboard`. Marked `'use client'` so it runs in the browser.

[`app/dashboard/dashboard.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/dashboard/dashboard.tsx) · code · 51804 bytes

### instance-panel.tsx

import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef,
useState, type FormEvent, type ReactNode, } from "react"; import { DEFAULT_ENDPOINT,
INSTANCE_ENDPOINT_STORAGE_KEY, INSTANCE_RECONNECT_STORAGE_KEY, formatAgo, formatBytes,
healthOf, probeInstance, secondsSince, type Connection, type ContractRow, type InstanceNode,
type Instan Notable exports: `InstanceProvider`, `InstanceConnect`, `InstanceDetail`.

[`app/dashboard/instance-panel.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/dashboard/instance-panel.tsx) · code · 46488 bytes

### page.tsx

export const metadata: Metadata = { title: "Dashboard", description: "The workspace's .quirq
folder, read straight off the disk: live presence, usage telemetry, the append-only
timeline, and every file in place.", } Notable exports: `DashboardPage`, `metadata`.

[`app/dashboard/page.tsx`](https://github.com/quirq-ai/quirq_ai/blob/main/app/dashboard/page.tsx) · code · 1001 bytes

_Generated 2026-10-06 12:18 UTC from `main`._
