<!-- quirq-wiki-generated repo=quirqy dir=src/branding -->

# quirqy / src/branding

Source: [src/branding](https://github.com/quirq-ai/quirqy/tree/quirq/src/branding) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### logo-editor.css

Stylesheet `logo-editor.css` for layout and visual treatment in this folder. Leading class
selectors include `brand-logo-button`, `brand-logo-edit`, `brand-mark`, `logo-editor-
header`, `logo-editor-close`, `logo-editor-preview`, `logo-editor-formats`, `logo-editor-
actions`. Defines or consumes CSS custom properties (design tokens).

[`src/branding/logo-editor.css`](https://github.com/quirq-ai/quirqy/blob/quirq/src/branding/logo-editor.css) · code · 3489 bytes

### logo-editor.js

import { DEFAULT_LOGO_URL, MAX_LOGO_DATA_URL_LENGTH, getLogoUrl, hasCustomLogo,
saveCustomLogo, resetCustomLogo, subscribeLogo, } from './logo-preference.js' Notable
exports: `prepareLogo`, `mountLogoEditor`.

[`src/branding/logo-editor.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/branding/logo-editor.js) · code · 8497 bytes

### logo-preference.js

export const DEFAULT_LOGO_URL = '/quirq-logo.svg'; export const MAX_LOGO_DATA_URL_LENGTH =
1_500_000 Notable exports: `createLogoPreference`, `DEFAULT_LOGO_URL`,
`MAX_LOGO_DATA_URL_LENGTH`.

[`src/branding/logo-preference.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/branding/logo-preference.js) · code · 4853 bytes

### logo-preference.test.js

const KEY = 'quirq-observatory.custom-logo.v1'; const PNG = 'data:image/png;base64,iVBORw0KG
goAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='; const
OTHER_PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42
mP8/x8AAusB9Wl6pAAAAABJRU5ErkJggg=='; const record = dataUrl => JSON.stringify({ ver
Automated test file.

[`src/branding/logo-preference.test.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/branding/logo-preference.test.js) · code · 9310 bytes

_Generated 2026-10-31 11:18 UTC from `quirq`._
