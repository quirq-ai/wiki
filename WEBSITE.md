# Quirq Wiki website

The website turns the Markdown snapshot already committed in this repository into a searchable, encyclopedia-style knowledge base. The encyclopedia layout includes article tabs, a contents sidebar, source and history links, reading preferences, a repository directory, and a recent-changes page. The branding belongs to Quirq; this is an independent project.

## Architecture

```text
Public source repositories in quirq-ai
                ↓
Python wiki generator / GitHub Actions sync
                ↓
Generated Markdown + .quirq-wiki-manifest.json, committed here
                ↓
Astro + TypeScript → static HTML, CSS, small browser scripts
                ↓
Pagefind → static full-text search index
                ↓
Vercel → files served from its CDN
```

Astro renders the complete article content during the build. Browsing articles does not require a server function, database, authentication service, or a client-side application framework. The deployed site reads the committed snapshot; it does not contact GitHub to fetch documentation on each visit.

The manifest is the inventory of source repositories and records the snapshot date, source commit, default branch, and last push. The content loader reads `README.md`, `INDEX.md`, and the Markdown files directly inside each manifest-listed repository directory. It deliberately includes leading-dot names: `.github` is a real documented repository, and folders such as `.github` and `.vscode` also produce articles. Application code, development dependencies, and test fixtures are excluded from article discovery.

One generated directory page describes the files directly inside that source directory. Its filename encodes nested folders with `__`; for example, `galileo/src__utils.md` describes `galileo/src/utils/`. `_root.md` describes repository-root files, and `_index.md` lists that repository's directory pages. The site retains those names in URLs so the relationship to the source is visible and stable.

Markdown passes through an abstract syntax tree parser, GitHub-flavored Markdown support, raw HTML parsing, HTML sanitization, link resolution, and HTML serialization. The article model distinguishes repository indexes, directory articles, and general documentation. Generated file headings, summary paragraphs, source links, file types, sizes, and snapshot metadata are parsed as separate fields, so the interface can format them according to their meaning. Tables and formatted documentation survive; executable HTML from content is removed. Heading IDs are derived from the original headings, including a suffix for repeated headings, and drive the contents sidebar. Links to other indexed Markdown pages become website links. Links to tooling files and directories remain accessible through the wiki's GitHub repository.

## How articles become readable

Directory articles use a short title such as **Scenes**, with the complete source hierarchy in linked breadcrumbs. An introduction and compact facts panel establish the repository, directory, file count, and snapshot context. A file overview links directly to each detailed section. Those sections retain the documented file names, descriptions, exports, and source links while displaying source metadata separately from explanatory prose. File sizes use readable units. Existing article URLs and file-heading anchors remain usable.

Repository overview pages provide a directory browser with readable source paths and a filter. Directory articles link to documented child folders. A directory with no files of its own has an explicit empty state and still offers its child folders where present; it is not treated as a missing article. File summaries that describe empty source files also retain that fact.

The source corpus is a snapshot of generated file summaries, not a checkout of every original source file. The website preserves what those summaries actually say. It does not invent missing explanations, recover complete upstream README chapters, or claim that a summarized code fragment is the entire file. Original files are available through their source links. To improve the underlying explanations, update the upstream documentation or the Python generator and refresh the snapshot.

Code fences receive syntax highlighting at build time through Shiki. Code blocks include language labels and a copy control, in a light color theme. Mermaid fences become diagram figures that load their renderer only when near the viewport; the original definition remains available under **Diagram source**, including when JavaScript is disabled or rendering fails. Wide tables have their own keyboard-accessible scrolling region instead of widening the entire page.

## Website files

| Location                              | Responsibility                                                                                                                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/lib/wiki.ts`                     | Load and validate the manifest, discover articles, render Markdown, resolve links, and derive repository statistics.                                                     |
| `src/lib/article.ts`                  | Parse generated pages into structured directory, file, repository, and source metadata for article presentation.                                                         |
| `src/lib/presentation.ts`             | Format dates, file sizes, and source-excerpt code fences for the reading view.                                                                                           |
| `src/lib/rich-markdown.ts`            | Enhance sanitized Markdown with build-time code highlighting, accessible table containers, and diagram figures.                                                          |
| `src/layouts/WikiLayout.astro`        | Shared page frame, navigation, article tools, metadata, contents, and appearance controls.                                                                               |
| `src/components/`                     | Structured articles, file summaries, directory browsers, facts panels, icons, and Quirq branding.                                                                        |
| `src/pages/`                          | Static routes for articles, the home page, repository directory, recent changes, search, and not-found page.                                                             |
| `src/styles/wiki.css`                 | Encyclopedia typography, responsive layout, tables, the light color theme, and print presentation.                                                                       |
| `src/styles/touch.css`                | Phone touch targets (44px) and the in-page mobile menu; unlayered so it wins over both stylesheets.                                                                      |
| `src/styles/article.css`              | Structured article layout and typography, file overviews, metadata, source excerpts, syntax highlighting, diagrams, directory navigation, and responsive reading styles. |
| `src/scripts/wiki.ts`                 | Reading preferences, mobile navigation, keyboard shortcut, contents tracking, printing, link copying, and random articles.                                               |
| `src/scripts/article.ts`              | Switch reading/source views, filter directory tables, and copy code with progressive enhancement.                                                                        |
| `src/scripts/search.ts`               | On-demand search loading, results, pagination, URL state, and development fallback.                                                                                      |
| `src/scripts/diagrams.ts`             | Load Mermaid on demand and render visible diagrams with source fallback.                                                                                                 |
| `public/`                             | Static site assets copied into the build.                                                                                                                                |
| `astro.config.mjs`                    | Static output and consistent trailing-slash URLs.                                                                                                                        |
| `vercel.json`                         | Vercel build and static deployment configuration.                                                                                                                        |
| `tests/content.test.ts`               | Content rendering and source-to-route behavior.                                                                                                                          |
| `tests/article.test.ts`               | Semantic parsing, preserved summaries and anchors, generated metadata, and source hierarchy.                                                                             |
| `tests/rich-markdown.test.ts`         | Highlighting, code preservation, diagram fallback, table semantics, and safe rendering.                                                                                  |
| `tests/site.test.mjs`                 | Integrity checks against the actual production build.                                                                                                                    |
| `tests/browser/wiki.spec.ts`          | Browser checks for navigation, search, preferences, mobile layout, and reading without JavaScript.                                                                       |
| `tests/browser/reading.spec.ts`       | Reading checks for deep paths, file summaries, directory hierarchy, empty directories, diagrams, code, and narrow screens.                                               |
| `playwright.config.ts`                | Chromium configuration and the production-preview server used by browser tests.                                                                                          |
| `.github/workflows/website-check.yml` | Automated website validation on pull requests and pushes to `main`.                                                                                                      |

The existing `quirq_wiki/` package remains the documentation generator. The website is a presentation layer over its output. Website tooling directories are reserved in the generator's stale-repository cleanup rules; build outputs and installed dependencies are ignored by Git.

## Routes and interactions

| URL                     | Content                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------- |
| `/`                     | Main page with an introduction, repository entry points, and snapshot information.                |
| `/repositories/`        | Directory of repositories from the manifest.                                                      |
| `/recent-changes/`      | Repository push dates recorded in the current snapshot. This is not a live GitHub activity feed.  |
| `/search/?q=router`     | Search results for a shareable query.                                                             |
| `/wiki/readme/`         | This repository's original README content.                                                        |
| `/wiki/index/`          | The generated organization-wide index.                                                            |
| `/wiki/galileo/_index/` | An example repository overview.                                                                   |
| `/wiki/galileo/src/`    | An example directory article.                                                                     |
| `/articles.json`        | A compact article directory used by random navigation and fallback search.                        |
| `/activity/`            | Commits, pull requests, issues, releases and failed runs from the last 7 days, from `_activity/`. |
| `/activity/qq/`         | One repository's activity for the last 30 days, linked from its repository page.                  |
| `/sizes/`               | Files and size per repository and for the organization, with the daily history, from `_sizes/`.   |
| `/wiki/galileo/src.md`  | An article's committed Markdown, for agents (every article has one).                              |
| `/llms.txt`             | A Markdown map of every article's Markdown twin, for agents.                                      |
| `/robots.txt`           | Allows all crawlers and names the sitemap.                                                        |
| `/sitemap.xml`          | Every page, activity page and article.                                                            |

The Tools menu on each page copies a link for agents (the article's `.md` twin) and opens Claude or ChatGPT with a prompt that names that link; opening one also copies the link.

The article's View source tab shows its original committed Markdown within the site and supports browser back navigation. Without JavaScript, its link opens the source file on GitHub. Individual file source links open the original upstream files, and View history opens the article's GitHub commit history. Article edits belong in the upstream source repository or the generator; generated Markdown is overwritten by a later sync. The root `README.md` can be edited, but its generated repository-map markers must be preserved.

Text size and content width preferences persist in local storage. The wiki has one light color theme and does not follow the system's dark setting. The site applies saved preferences before the document is displayed, where browser storage is available. The `/` keyboard shortcut focuses search when the reader is outside a text field. Standard links and article content remain usable with JavaScript disabled; search and preference controls need JavaScript.

Pagefind indexes the generated HTML and produces static search assets as described in its [official getting-started guide](https://pagefind.app/docs/). This site loads the search library only on the search page when a query is entered, and paginates results in the browser. Queries do not go to a hosted search service. In the development server, where the production index does not exist, search falls back to article titles and summaries and labels that reduced scope. Use a production preview to verify full-text search.

## Local development

Use Node.js 24 and npm. Python is required only when testing or updating the documentation generator.

```sh
npm ci
npm run dev
```

The development server prints its local URL, normally `http://127.0.0.1:4321`. Changes to the UI use Astro's development workflow. Restart the development server after regenerating the Markdown snapshot if its cached article inventory needs to refresh.

Run the quality checks and build:

```sh
npm run check
npm run format:check
npm test
npm run build
npm run test:site
npm run preview
```

`npm run check` checks Astro and TypeScript. `npm test` checks content parsing, sanitization, routes, and source metadata. `npm run build` runs `astro build && pagefind --site dist`; the Pagefind step is required for production full-text search. `npm run test:site` requires that completed build and checks every manifest article, local links and assets, article anchors, Pagefind files, and the absence of source files in the deployed output. `npm run preview` serves `dist/` for final review.

`npm run format:check` verifies the website's source formatting. Use `npm run format` to apply the shared Prettier and Astro formatting rules. These commands are scoped to website code and tests, so generated repository Markdown remains untouched.

Run browser tests against a completed production build:

```sh
npm run build
npx playwright install chromium
npm run test:browser
```

The suite starts a production preview at `http://127.0.0.1:4321`; stop any development server using that port first. Tests cover desktop and mobile layout, article anchors, full-text search and pagination, repository filters, saved preferences, keyboard navigation, and article reading without JavaScript. Reading regressions also cover the deeply nested explainer-film scenes page, preserved file summaries, source hierarchy navigation, directory-only articles, diagram rendering, and highlighted code. Screenshots and failure traces are saved under `test-results/`. To use an existing local Chromium installation, optionally set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to its absolute executable path before running the suite. This is a local test setting, not a deployment requirement.

The `Website checks` GitHub Actions workflow runs on pull requests, pushes to `main`, and manual dispatch. It installs the locked dependencies with Node.js 24, checks types, runs content tests, builds Astro and Pagefind, validates the generated output, installs Chromium with its Linux dependencies, and runs browser tests. Failed runs retain browser diagnostics for seven days. The original Python CI remains separate.

For the original Python generator:

```sh
python -m pip install -e ".[dev]"
python -m pytest
python -m quirq_wiki generate --out .
```

On Windows, use `python -X utf8 -m pytest` when Python defaults to a legacy text encoding. The generator writes UTF-8, and several existing tests read its files using Python's default encoding.

To refresh a single repository safely, use `python -m quirq_wiki generate --out . --repo galileo`, then rebuild the website. The existing generator's narrower `--changed-paths` mode has a preexisting stale-page cleanup limitation: it can remove unchanged directory pages during an incremental run. Prefer a full organization or full repository refresh until that generator behavior is addressed.

## Deploying on Vercel

Import this Git repository into Vercel and configure the project as follows:

| Setting          | Value                      |
| ---------------- | -------------------------- |
| Root directory   | `.` — this wiki repository |
| Framework preset | Astro                      |
| Node.js version  | 24.x                       |
| Install command  | `npm ci`                   |
| Build command    | `npm run build`            |
| Output directory | `dist`                     |

`vercel.json` sends a Content-Security-Policy. Inline scripts are allowed only by their SHA-256 hash, so after changing an inline script, run `npm run build && npm run test:site`: the test prints any hash missing from `script-src`, and the new hash goes into `vercel.json`. Pagefind needs `'wasm-unsafe-eval'`; Mermaid needs inline styles. `frame-ancestors` lets only the wiki itself and `quirq.dev` (with and without `www.`) show it in a frame, so it opens in quirq.dev's app window; inside a frame, links to other sites open in a new tab.

This follows [Astro's static deployment guidance for Vercel](https://docs.astro.build/en/guides/deploy/vercel/); a server adapter is unnecessary. No environment variables or API keys are required. Optionally set `SITE_URL` to the final absolute origin, for example `https://wiki.example.com`, to emit canonical page URLs. Without it, the build uses Vercel's `VERCEL_PROJECT_PRODUCTION_URL`, which Vercel sets on every build, so `llms.txt`, `robots.txt` and the sitemap carry absolute links. Avoid using a temporary preview URL as the permanent canonical origin.

Commit `package-lock.json` so local development, continuous integration, and Vercel use the same dependency versions. Deploy the generated `dist/` output; the source snapshots and the Python package are inputs to the build, not files served to readers. The site includes a static 404 page for unknown URLs.

The existing wiki sync workflow refreshes the committed snapshot daily, manually, or on a `quirq-wiki-sync` repository dispatch. After Vercel's Git integration is connected, commits to its configured production branch trigger a fresh website build; pull requests receive preview deployments according to the project's Vercel settings. A source repository push becomes visible on the website only after the documentation sync commits the new snapshot and deployment completes. Repository timestamps are taken from that snapshot and should not be read as a live status signal.

## Performance and maintenance

Article HTML and highlighted code are generated ahead of time and can be delivered directly as static files. Typography uses local system font stacks, and shared icons are small SVGs. Reading enhancements are ordinary TypeScript compiled to browser JavaScript. There is no React hydration or runtime Markdown rendering. The full-text search index is split into Pagefind assets and is loaded only as needed. Mermaid is an optional diagram enhancement loaded on diagram pages near the viewport; ordinary articles do not require the renderer.

Snapshot totals, repository descriptions, file counts, source commits, and dates come from the actual content rather than parallel hand-maintained copies. A rebuild picks up new manifest-listed repositories and new generated Markdown pages automatically. If a snapshot is incomplete or malformed, treat the build or integrity-test failure as a content issue and refresh the affected repository.

Keep explanatory generator prose in the generator, source-specific facts upstream, and interface text in Astro components. When changing URL conventions or heading generation, run both the content tests and built-site integrity tests: the README, repository indexes, sidebar anchors, and search results all depend on those mappings. When changing the appearance or controls, inspect a production preview at desktop and mobile widths, with keyboard navigation, and long article tables.

Search indexes the rendered article descriptions and file details. Repeated source metadata and interface controls are excluded where marked with `data-pagefind-ignore`, keeping results focused on the actual content. Article descriptions come from meaningful summary text rather than the generated `Source:` preamble.
