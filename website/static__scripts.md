<!-- quirq-wiki-generated repo=website dir=static/scripts -->

# website / static/scripts

Source: [static/scripts](https://github.com/quirq-ai/website/tree/main/static/scripts) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### theme-init.js

(function () { window.__onThemeChange = function () {} var darkQuery =
window.matchMedia('(prefers-color-scheme: dark)') function resolve(theme) { return theme ===
'system' ? (darkQuery.matches ? 'dark' : 'light') : theme } Applies a light or dark theme;
the preference ('system', 'light' or 'dark') is kept separately. function setTheme(newTheme)
{ window.__t.

[`static/scripts/theme-init.js`](https://github.com/quirq-ai/website/blob/main/static/scripts/theme-init.js) · code · 2583 bytes

_Generated 2026-10-09 12:10 UTC from `main`._
