<!-- quirq-wiki-generated repo=website dir=src/components/Squeak/components/Classic -->

# website / src/components/Squeak/components/Classic

Source: [src/components/Squeak/components/Classic](https://github.com/quirq-ai/website/tree/main/src/components/Squeak/components/Classic) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### ForgotPassword.tsx

import React, { useEffect, useState } from 'react' import { useFormik } from 'formik' import
{ CallToAction } from 'components/CallToAction' import { useApp } from
'../../../../context/App' import { useWindow } from '../../../../context/Window' import
Wizard from 'components/Wizard' import { SQUEAK_HOST } from 'lib/strapi' Provides a default
export as the module's public entry.

[`src/components/Squeak/components/Classic/ForgotPassword.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Classic/ForgotPassword.tsx) · code · 5913 bytes

### PostHogButton.tsx

import React from 'react' import { CallToAction } from 'components/CallToAction' import {
Logo } from '@posthog/brand/logo' import { SQUEAK_HOST } from 'lib/strapi' Provides a
default export as the module's public entry.

[`src/components/Squeak/components/Classic/PostHogButton.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Classic/PostHogButton.tsx) · code · 972 bytes

### PostHogDisambiguation.tsx

import React, { useRef, useState } from 'react' import { CallToAction } from
'components/CallToAction' import { useUser } from 'hooks/useUser' import Input from
'components/OSForm/input' import Wizard from 'components/Wizard' import { IconSpinner } from
'@posthog/icons' Provides a default export as the module's public entry.

[`src/components/Squeak/components/Classic/PostHogDisambiguation.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Classic/PostHogDisambiguation.tsx) · code · 6770 bytes

### Register.tsx

import React, { useEffect, useState } from 'react' import { useFormik } from 'formik' import
{ CallToAction } from 'components/CallToAction' import { useApp } from
'../../../../context/App' import { useWindow } from '../../../../context/Window' import {
useUser } from '../../../../hooks/useUser' import Wizard from 'components/Wizard' Provides a
default export as the module's public entry.

[`src/components/Squeak/components/Classic/Register.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Classic/Register.tsx) · code · 7409 bytes

### ResetPassword.tsx

import React, { useEffect, useState } from 'react' import { useFormik } from 'formik' import
{ CallToAction } from 'components/CallToAction' import { useApp } from
'../../../../context/App' import { useWindow } from '../../../../context/Window' import {
useUser } from '../../../../hooks/useUser' import Wizard from 'components/Wizard' import {
navigate } from Provides a default export as the module's public entry.

[`src/components/Squeak/components/Classic/ResetPassword.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Classic/ResetPassword.tsx) · code · 7042 bytes

### SignIn.tsx

import React, { useEffect, useState } from 'react' import { useFormik } from 'formik' import
{ CallToAction } from 'components/CallToAction' import { useApp } from
'../../../../context/App' import { useWindow } from '../../../../context/Window' import {
User, useUser } from '../../../../hooks/useUser' import Wizard from 'components/Wizard'
import Input from Provides a default export as the module's public entry.

[`src/components/Squeak/components/Classic/SignIn.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Classic/SignIn.tsx) · code · 7129 bytes

_Generated 2026-10-08 12:20 UTC from `main`._
