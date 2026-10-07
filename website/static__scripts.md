<!-- quirq-wiki-generated repo=website dir=static/scripts -->

# website / static/scripts

Source: [static/scripts](https://github.com/quirq-ai/website/tree/main/static/scripts) in [website](https://github.com/quirq-ai/website).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### theme-init.js

(function () { window.__onThemeChange = function () {} function setTheme(newTheme) {
window.__theme = newTheme preferredTheme = newTheme document.body.className = newTheme
window.__onThemeChange(newTheme) } var preferredTheme var darkQuery =
window.matchMedia('(prefers-color-scheme: dark)') darkQuery.addListener(function (e) { if
(!localStorage.getItem('them.

[`static/scripts/theme-init.js`](https://github.com/quirq-ai/website/blob/main/static/scripts/theme-init.js) · code · 2036 bytes

_Generated 2026-10-07 12:09 UTC from `main`._
