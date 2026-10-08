<!-- quirq-wiki-generated repo=euler dir=app/home -->

# euler / app/home

Source: [app/home](https://github.com/quirq-ai/euler/tree/main/app/home) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### README.md

The project README (“Euler Home”). Home is Euler's built-in application for app status,
lifecycle controls, workspace statistics, and avatar customization. It owns Euler's built-in
UI, including the shared dock shown on mounted app pages. Its source lives beside the other
apps in app/home, and its page remains at / on Euler's address.

[`app/home/README.md`](https://github.com/quirq-ai/euler/blob/main/app/home/README.md) · code · 3365 bytes

### assets.mjs

Home owns the complete Euler UI, including the dock shared with mounted apps. Only these
explicit browser assets are served; URLs and relative imports stay stable. Notable exports:
`homeAssets`.

[`app/home/assets.mjs`](https://github.com/quirq-ai/euler/blob/main/app/home/assets.mjs) · code · 1782 bytes

### build.mjs

const run = promisify(execFile) Notable exports: `buildHome`.

[`app/home/build.mjs`](https://github.com/quirq-ai/euler/blob/main/app/home/build.mjs) · code · 1397 bytes

### package.json

npm package manifest for `@quirq-ai/euler-home` v1.0.0. Euler Home: app controls, workspace
statistics, and avatar customization. Scripts: `setup`, `dev`, `start`, `build`, `test`.

[`app/home/package.json`](https://github.com/quirq-ai/euler/blob/main/app/home/package.json) · code · 453 bytes

### project.json

JSON document `project.json` whose top-level keys are `name`, `projectType`, `sourceRoot`,
`targets`. Structured data consumed by the surrounding app or tooling.

[`app/home/project.json`](https://github.com/quirq-ai/euler/blob/main/app/home/project.json) · code · 832 bytes

### server.mjs

Home owns the workspace UI, including the dock displayed on other apps. The host calls this
interface after enforcing its request security policy. Notable exports: `homeApplication`.

[`app/home/server.mjs`](https://github.com/quirq-ai/euler/blob/main/app/home/server.mjs) · code · 1996 bytes

_Generated 2026-10-08 12:19 UTC from `main`._
