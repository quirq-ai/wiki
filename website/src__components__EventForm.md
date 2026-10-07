<!-- quirq-wiki-generated repo=website dir=src/components/EventForm -->

# website / src/components/EventForm

Source: [src/components/EventForm](https://github.com/quirq-ai/website/tree/main/src/components/EventForm) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### SuggestionDropdown.tsx

import React from 'react' Notable exports: `SuggestionDropdown`, `SuggestionItem`,
`suggestionOptionId`.

[`src/components/EventForm/SuggestionDropdown.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/EventForm/SuggestionDropdown.tsx) · code · 1708 bytes

### index.tsx

import React from 'react' import { useFormik } from 'formik' import * as Yup from 'yup'
import { OSInput, OSTextarea } from 'components/OSForm' import OSButton from
'components/OSButton' import { graphql, useStaticQuery } from 'gatsby' import dayjs from
'dayjs' import utc from 'dayjs/plugin/utc' import timezone from 'dayjs/plugin/timezone'
import { useUser } Notable exports: `EventForm`.

[`src/components/EventForm/index.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/EventForm/index.tsx) · code · 59460 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
