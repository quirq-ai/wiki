<!-- quirq-wiki-generated repo=website dir=src/components/Squeak/components -->

# website / src/components/Squeak/components

Source: [src/components/Squeak/components](https://github.com/quirq-ai/website/tree/main/src/components/Squeak/components) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### Approval.tsx

import React from 'react' Notable exports: `Approval`.

[`src/components/Squeak/components/Approval.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Approval.tsx) · code · 558 bytes

### Authentication.tsx

import React, { useState, useRef } from 'react' import type { User } from 'hooks/useUser'
import ForgotPassword from './auth/ForgotPassword' import Avatar from './Avatar' import
SignUp from './auth/SignUp' import SignIn from './auth/SignIn' import ResetPassword from
'./auth/ResetPassword' import OSButton from 'components/OSButton' import { ToggleGroup }
from Notable exports: `inputClasses`, `labelClasses`, `Authentication`.

[`src/components/Squeak/components/Authentication.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Authentication.tsx) · code · 7003 bytes

### Avatar.tsx

import Link from 'components/Link' import React from 'react' Notable exports: `Avatar`.

[`src/components/Squeak/components/Avatar.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Avatar.tsx) · code · 2055 bytes

### Button.tsx

import { child, container } from 'components/CallToAction' import Spinner from
'components/Spinner' import React, { ButtonHTMLAttributes } from 'react' Notable exports:
`Button`.

[`src/components/Squeak/components/Button.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Button.tsx) · code · 793 bytes

### ClientPostMarkdown.tsx

import React from 'react' import Highlight, { defaultProps, Language } from 'prism-react-
renderer' import ReactMarkdown from 'react-markdown' import rehypeSanitize from 'rehype-
sanitize' import { ZoomImage } from 'components/ZoomImage' import { TransformImage } from
'react-markdown/lib/ast-to-react' import remarkGfm from 'remark-gfm' Notable exports:
`ClientPostMarkdown`.

[`src/components/Squeak/components/ClientPostMarkdown.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/ClientPostMarkdown.tsx) · code · 2656 bytes

### ConnectedAccounts.tsx

Account-settings section for linking/unlinking PostHog OAuth. - Employee accounts (provider
'posthog') are OAuth-only: shown connected, disconnect disabled (the backend refuses to
unlink a passwordless account). - Community accounts (provider 'local') can connect
(additive, keeps password) and disconnect freely. Provides a default export as the module's
public entry.

[`src/components/Squeak/components/ConnectedAccounts.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/ConnectedAccounts.tsx) · code · 4923 bytes

### Days.tsx

import React from 'react' import dayjs from 'dayjs' import relativeTime from
'dayjs/plugin/relativeTime' import Tooltip from 'components/RadixUI/Tooltip'
dayjs.extend(relativeTime) import Avatar from './Avatar' import getAvatarURL from
'../util/getAvatar' import Link from 'components/Link' Notable exports: `Days`.

[`src/components/Squeak/components/Days.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Days.tsx) · code · 3301 bytes

### EditProfile.tsx

import React, { useState, useEffect, useRef, ChangeEvent, ChangeEventHandler } from 'react'
import { Form, Field, Formik, FormikHandlers } from 'formik' import Button from
'components/CommunityQuestions/Button' import { Markdown } from 'components/Icons' import *
as Yup from 'yup' import TextareaAutosize from 'react-textarea-autosize' import { useUser }
from Notable exports: `EditProfile`.

[`src/components/Squeak/components/EditProfile.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/EditProfile.tsx) · code · 13029 bytes

### EditWrapper.tsx

import React, { useContext, useState } from 'react' import { useUser } from 'hooks/useUser'
import RichText from './RichText' import { useFormik } from 'formik' import transformValues
from '../util/transformValues' import OSButton from 'components/OSButton' import {
CurrentQuestionContext } from './Question' Notable exports: `EditWrapper`.

[`src/components/Squeak/components/EditWrapper.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/EditWrapper.tsx) · code · 4458 bytes

### LevelBadge.tsx

import React, { useCallback, useRef } from 'react' import { Link } from 'gatsby' import
getLevel from '../util/getLevel' import Tooltip from '../../RadixUI/Tooltip' Notable
exports: `LevelBadge`.

[`src/components/Squeak/components/LevelBadge.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/LevelBadge.tsx) · code · 4438 bytes

### Logo.tsx

import React from 'react' Notable exports: `Logo`.

[`src/components/Squeak/components/Logo.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Logo.tsx) · code · 8200 bytes

### Markdown.tsx

import React from 'react' import Highlight, { defaultProps, Language } from 'prism-react-
renderer' import ReactMarkdown, { Components } from 'react-markdown' import rehypeSanitize
from 'rehype-sanitize' import { ZoomImage } from 'components/ZoomImage' import {
TransformImage } from 'react-markdown/lib/ast-to-react' import remarkGfm from 'remark-gfm'
import { Notable exports: `Markdown`.

[`src/components/Squeak/components/Markdown.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Markdown.tsx) · code · 3514 bytes

### MarkdownLogo.tsx

import React from 'react' Notable exports: `MarkdownLogo`.

[`src/components/Squeak/components/MarkdownLogo.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/MarkdownLogo.tsx) · code · 1564 bytes

### Profile.tsx

import React from 'react' import { StrapiRecord, ProfileData } from 'lib/strapi' import
Avatar from './Avatar' import getAvatarURL from '../util/getAvatar' import Link from
'components/Link' Notable exports: `Profile`.

[`src/components/Squeak/components/Profile.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Profile.tsx) · code · 1019 bytes

### Question.tsx

import React, { useState, createContext, useEffect, useContext, useRef } from 'react' import
{ Replies } from './Replies' import { Profile } from './Profile' import { QuestionData,
StrapiData, StrapiRecord, TopicData } from 'lib/strapi' import LevelBadge from
'./LevelBadge' import Days from './Days' import Markdown from './Markdown' import {
QuestionForm } f Notable exports: `Question`, `CurrentQuestionContext`.

[`src/components/Squeak/components/Question.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Question.tsx) · code · 36421 bytes

### QuestionForm.tsx

import React, { useState, useRef, useEffect } from 'react' import { Field, Form, Formik }
from 'formik' import { useUser, User } from 'hooks/useUser' import { Approval } from
'./Approval' import Authentication from './Authentication' import Avatar from './Avatar'
import RichText from './RichText' import getAvatarURL from '../util/getAvatar' import {
usePost Notable exports: `Select`, `QuestionForm`.

[`src/components/Squeak/components/QuestionForm.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/QuestionForm.tsx) · code · 18221 bytes

### QuestionSkeleton.tsx

import React from 'react' Notable exports: `QuestionSkeleton`.

[`src/components/Squeak/components/QuestionSkeleton.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/QuestionSkeleton.tsx) · code · 900 bytes

### Questions.tsx

import React, { useRef } from 'react' import { Question } from './Question' import {
QuestionForm } from './QuestionForm' import { useQuestions } from 'hooks/useQuestions'
Notable exports: `Questions`.

[`src/components/Squeak/components/Questions.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Questions.tsx) · code · 2450 bytes

### Replies.tsx

import React, { useContext } from 'react' import { StrapiData, ReplyData } from 'lib/strapi'
import Avatar from './Avatar' import Reply from './Reply' import { CurrentQuestionContext }
from './Question' import getAvatarURL from '../util/getAvatar' import { useUser } from
'hooks/useUser' Notable exports: `Replies`.

[`src/components/Squeak/components/Replies.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Replies.tsx) · code · 7946 bytes

### Reply.tsx

import React, { useContext, useMemo, useState, useRef, useEffect } from 'react' import {
useUser } from 'hooks/useUser' import Days from './Days' import Markdown from './Markdown'
import { StrapiRecord, ReplyData } from 'lib/strapi' import Avatar from './Avatar' import
getAvatarURL from '../util/getAvatar' import { CurrentQuestionContext } from './Question'
Notable exports: `Reply`.

[`src/components/Squeak/components/Reply.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Reply.tsx) · code · 23968 bytes

### RichText.tsx

import React, { ChangeEvent, useEffect, useRef, useState, useCallback, useContext, useMemo }
from 'react' import MarkdownLogo from './MarkdownLogo' import { useDropzone } from 'react-
dropzone' import Spinner from 'components/Spinner' import Markdown from './Markdown' import
slugify from 'slugify' import { Edit } from 'components/Icons' import Tooltip from 'c
Notable exports: `RichText`.

[`src/components/Squeak/components/RichText.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/RichText.tsx) · code · 28580 bytes

### Squeak.tsx

import React from 'react' import { Questions } from './Questions' import { usePost } from
'components/PostLayout/hooks' import { useApp } from '../../../context/App' Notable exports:
`Squeak`.

[`src/components/Squeak/components/Squeak.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/Squeak.tsx) · code · 674 bytes

### SubscribeButton.tsx

import Tooltip from 'components/RadixUI/Tooltip' import { User, useUser } from
'hooks/useUser' import React, { useEffect, useState } from 'react' import { useQuestion }
from '../hooks/useQuestion' import { IconBell } from '@posthog/icons' import SideModal from
'components/Modal/SideModal' import Authentication from './Authentication' import OSButton
from 'co Notable exports: `SubscribeButton`, `Button`.

[`src/components/Squeak/components/SubscribeButton.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/SubscribeButton.tsx) · code · 3379 bytes

### TopicSelector.tsx

import React from 'react' import { Popover } from '@headlessui/react' import { StrapiRecord,
TopicData } from 'lib/strapi' import useSWR from 'swr' import { CheckIcon } from
'@heroicons/react/outline' import { useQuestion } from '../hooks/useQuestion' Notable
exports: `TopicSelector`.

[`src/components/Squeak/components/TopicSelector.tsx`](https://github.com/quirq-ai/website/blob/main/src/components/Squeak/components/TopicSelector.tsx) · code · 2924 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
