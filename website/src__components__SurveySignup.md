<!-- quirq-wiki-generated repo=website dir=src/components/SurveySignup -->

# website / src/components/SurveySignup

Source: [src/components/SurveySignup](https://github.com/quirq-ai/website/tree/main/src/components/SurveySignup) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“SurveySignup”). A no-login email form that records a sign-up as a
PostHog Survey response by firing posthog.capture('survey sent', { $survey_id,
$survey_response: email }).

[`src/components/SurveySignup/README.md`](https://github.com/quirq-ai/website/blob/main/src/components/SurveySignup/README.md) · code · 4190 bytes

### index.tsx

import React, { useEffect, useState } from 'react' import Input from
'components/OSForm/input' import OSButton from 'components/OSButton' import Link from
'components/Link' import { IconCheckCircle } from '@posthog/icons' import { IconDiscord }
from 'components/OSIcons/Icons' import { useApp } from '../../context/App' import usePostHog
from '../../hooks/useP Notable exports: `SurveySignup`.

[`src/components/SurveySignup/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/SurveySignup/index.tsx) · code · 7213 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
