<!-- quirq-wiki-generated repo=website dir=src/components/WizardFrameworksTeaser -->

# website / src/components/WizardFrameworksTeaser

Source: [src/components/WizardFrameworksTeaser](https://github.com/quirq-ai/website/tree/main/src/components/WizardFrameworksTeaser) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“WizardFrameworksTeaser”). Short “Supports Next.js, React, Python, and N
more” line (labels from taxonomy) with a tooltip listing every wizard-supported stack
(logos, docs links, “Coming soon” for status: wip). Uses getWizardFrameworkRows() from
installation-taxonomy.ts.

[`src/components/WizardFrameworksTeaser/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/WizardFrameworksTeaser/README.md) · code · 285 bytes

### index.tsx

import React, { useMemo, useState } from 'react' import Link from 'components/Link' import
Tooltip from 'components/RadixUI/Tooltip' import { getWizardFrameworkRows } from
'constants/installation-taxonomy' Notable exports: `WizardFrameworksTeaser`,
`WizardTeaserRow`.

[`src/components/WizardFrameworksTeaser/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/WizardFrameworksTeaser/index.tsx) · code · 4202 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
