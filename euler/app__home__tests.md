<!-- quirq-wiki-generated repo=euler dir=app/home/tests -->

# euler / app/home/tests

Source: [app/home/tests](https://github.com/quirq-ai/euler/tree/main/app/home/tests) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### build.test.mjs

async function fixture(t, content, name = 'home.mjs', type = 'text/javascript;
charset=utf-8') { const directory = await mkdtemp(join(tmpdir(), 'euler home build '));
t.after(() => rm(directory, { recursive: true, force: true, maxRetries: 5, retryDelay: 50
})); const file = join(directory, name); if (content !== undefined) await writeFile(file,
content); ret Automated test file.

[`app/home/tests/build.test.mjs`](https://github.com/quirq-ai/euler/blob/main/app/home/tests/build.test.mjs) · code · 2097 bytes

### dock.test.mjs

const html = 'Innernet 🌿 caféनमस्ते'; const css = ''; const preload = ''; const script = '';
const markup = css + preload + script; const decorated = html.replace('', ${markup}); const
policy = "default-src 'self'; script-src 'self'; frame-ancestors 'none'" Automated test
file.

[`app/home/tests/dock.test.mjs`](https://github.com/quirq-ai/euler/blob/main/app/home/tests/dock.test.mjs) · code · 9903 bytes

### euler-avatar.test.mjs

import { AVATAR_STORAGE_KEY, avatarBackgrounds, avatarExpressions, avatarShapes, avatarSvg,
avatarTraits, avatarUri, defaultAvatarConfig, loadAvatarConfig, normalizeAvatarConfig,
resolveAvatarTraits, saveAvatarConfig, } from '../public/euler-avatar.js'; const
memoryStorage = (initial) => { const values = new Map(initial === undefined ? [] :
[[AVATAR_STORAGE_ Automated test file.

[`app/home/tests/euler-avatar.test.mjs`](https://github.com/quirq-ai/euler/blob/main/app/home/tests/euler-avatar.test.mjs) · code · 8815 bytes

### euler-dock.test.mjs

const origin = 'http://localhost:2713' Automated test file.

[`app/home/tests/euler-dock.test.mjs`](https://github.com/quirq-ai/euler/blob/main/app/home/tests/euler-dock.test.mjs) · code · 4572 bytes

_Generated 2026-10-04 11:24 UTC from `main`._
