<!-- quirq-wiki-generated repo=instants dir=tests/e2e -->

# instants / tests/e2e

Source: [tests/e2e](https://github.com/quirq-ai/instants/tree/main/tests/e2e) in [instants](https://github.com/quirq-ai/instants).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### instants.spec.ts

import { parseActivityEntry, parseTimelineEntry, parseLogEntries, } from "../../engine/log-
schema.mjs"; UI behavior must not depend on third-party photo or font servers being online.
test.beforeEach(async ({ page }) => { await page.route(
/https:\/\/(images\.unsplash\.com|fonts\.(googleapis|gstatic)\.com)/, (route) =>
route.abort(), ); }); const dock = (page.

[`tests/e2e/instants.spec.ts`](https://github.com/quirq-ai/instants/blob/main/tests/e2e/instants.spec.ts) · code · 38839 bytes

_Generated 2026-10-10 11:27 UTC from `main`._
