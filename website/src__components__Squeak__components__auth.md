<!-- quirq-wiki-generated repo=website dir=src/components/Squeak/components/auth -->

# website / src/components/Squeak/components/auth

Source: [src/components/Squeak/components/auth](https://github.com/quirq-ai/website/tree/main/src/components/Squeak/components/auth) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### ForgotPassword.tsx

import React, { useState } from 'react' import { Field, Form, Formik } from 'formik' import
{ inputClasses, labelClasses } from '../Authentication' import Button from '../Button'
Provides a default export as the module's public entry.

[`src/components/Squeak/components/auth/ForgotPassword.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/auth/ForgotPassword.tsx) · code · 2706 bytes

### ResetPassword.tsx

import React, { useEffect, useRef, useState } from 'react' import { Field, Form, Formik }
from 'formik' import { useUser } from 'hooks/useUser' import { navigate } from 'gatsby'
import { inputClasses, labelClasses } from '../Authentication' import Button from
'../Button' Provides a default export as the module's public entry.

[`src/components/Squeak/components/auth/ResetPassword.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/auth/ResetPassword.tsx) · code · 3463 bytes

### SignIn.tsx

import React from 'react' import { Field, Form, Formik } from 'formik' import { User,
useUser } from 'hooks/useUser' import { inputClasses, labelClasses } from
'../Authentication' import Button from '../Button' Notable exports: `SignIn`.

[`src/components/Squeak/components/auth/SignIn.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/auth/SignIn.tsx) · code · 3106 bytes

### SignUp.tsx

import React from 'react' import { Field, Form, Formik } from 'formik' import { User,
useUser } from 'hooks/useUser' import { inputClasses, labelClasses } from
'../Authentication' import Button from '../Button' Notable exports: `SignUp`.

[`src/components/Squeak/components/auth/SignUp.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/auth/SignUp.tsx) · code · 4306 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
