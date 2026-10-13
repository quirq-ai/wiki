import { expect, test } from '@playwright/test';

const scenesPath =
  '/wiki/agent-skills/skills__explainer-film__references__examples__quirq-infra__scenes/';

test('a deep directory reads as an article with six intact file summaries', async ({
  page,
}) => {
  await page.goto(scenesPath);
  await expect(page.locator('h1')).toHaveText('Scenes');
  await expect(page.locator('.article-lead')).toBeVisible();
  await expect(page.locator('.article-breadcrumb')).toContainText(
    'explainer-film',
  );
  await expect(
    page
      .locator('.article-breadcrumb')
      .getByRole('link', { name: 'Main page', exact: true }),
  ).toHaveCount(1);
  await expect(page.locator('.file-overview tbody tr')).toHaveCount(6);
  await expect(page.locator('.file-section')).toHaveCount(6);

  const firstFile = page.locator('.file-section').filter({
    has: page.locator('[id="02-thirteen-reposmjs"]'),
  });
  await expect(firstFile).toContainText('each with its Chromium counterpart');
  await expect(firstFile.locator('.file-metadata')).not.toContainText(
    '2854 bytes',
  );
  await expect(firstFile.locator('.file-metadata')).toContainText('2.9 kB');
  await expect(
    firstFile.locator('a[href$="/scenes/02-thirteen-repos.mjs"]'),
  ).toBeVisible();
  await expect(page.locator('.file-section').last()).toContainText('PLATE_CSS');
  await expect(page.locator('.file-section').last()).toContainText('plateHtml');

  await page.locator('.file-overview a[href="#05-presubmitmjs"]').click();
  await expect(page).toHaveURL(/#05-presubmitmjs$/);
  await expect(page.locator('[id="05-presubmitmjs"]')).toBeInViewport();
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.screenshot({
    path: 'test-results/reading-scenes-desktop.png',
    fullPage: true,
  });
});

test('source hierarchy links lead back to the real parent directory', async ({
  page,
}) => {
  await page.goto(scenesPath);
  await page
    .locator('.article-breadcrumb')
    .getByRole('link', { name: 'quirq-infra', exact: true })
    .click();
  await expect(page).toHaveURL(
    '/wiki/agent-skills/skills__explainer-film__references__examples__quirq-infra/',
  );
  await expect(page.locator('.child-directories')).toBeVisible();
  await page
    .locator('.child-directories')
    .getByRole('link', { name: /scenes/i })
    .click();
  await expect(page).toHaveURL(scenesPath);
});

test('repository directory filtering operates on readable source paths', async ({
  page,
}) => {
  await page.goto('/wiki/galileo/_index/');
  const browser = page.locator('.directory-browser');
  await expect(browser).toBeVisible();
  await page
    .getByLabel('Filter directories', { exact: true })
    .fill('sample-app');
  await expect(
    browser.getByRole('link', { name: /sample-app/ }).first(),
  ).toBeVisible();
  await expect(
    browser.locator('.directory-entry[href="/wiki/galileo/src/"]'),
  ).toBeHidden();
  await page.getByLabel('Filter directories', { exact: true }).fill('');
  await browser.locator('.directory-entry[href="/wiki/galileo/src/"]').click();
  await expect(page.locator('.file-section')).toContainText([
    'files.mjs',
    'inject.mjs',
    'server.mjs',
    'sources.mjs',
  ]);
});

test('generated code excerpts are labeled and separated from public interfaces', async ({
  page,
}) => {
  await page.goto('/wiki/docs/_root/');
  const config = page.locator('.file-section').filter({
    has: page.locator('#nextconfigmjs'),
  });
  await expect(config.locator('.excerpt-notice')).toContainText(
    'source excerpt',
  );
  await expect(config.locator('.source-excerpt pre.shiki')).toContainText(
    'const withMDX = createMDX()',
  );
  await expect(config.locator('.source-excerpt')).not.toContainText(
    "Provides a default export as the module's public entry",
  );
  await expect(config.locator('.file-interface')).toContainText('default');

  const readme = page.locator('.file-section').filter({
    has: page.locator('#readmemd'),
  });
  await expect(readme.locator('.file-description')).toContainText(
    'The project README',
  );
  await expect(readme.locator('.source-excerpt')).toHaveCount(0);
});

test('source view and browser back preserve the original article', async ({
  page,
}) => {
  await page.goto(scenesPath);
  await page.locator('[data-article-view="source"]').click();
  await expect(page).toHaveURL(/\?view=source$/);
  await expect(page.locator('[data-article-reader]')).toBeHidden();
  await expect(page.locator('[data-article-source]')).toBeVisible();
  await expect(page.locator('[data-article-source] pre')).toContainText(
    '# agent-skills / skills/explainer-film/references/examples/quirq-infra/scenes',
  );
  await expect(page.locator('[data-article-source] pre')).toContainText(
    '· code · 2854 bytes',
  );
  await page.goBack();
  await expect(page).toHaveURL(scenesPath);
  await expect(page.locator('[data-article-reader]')).toBeVisible();
  await expect(page.locator('.file-section')).toHaveCount(6);
});

test('directories without direct files offer useful child navigation', async ({
  page,
}) => {
  await page.goto('/wiki/recipes/examples/');
  await expect(page.locator('.empty-directory')).toBeVisible();
  await expect(page.locator('.file-section')).toHaveCount(0);
  await expect(page.locator('.child-directories')).toContainText('node-app');
  await page
    .locator('.child-directories')
    .getByRole('link', { name: /node-app/ })
    .click();
  await expect(page).toHaveURL('/wiki/recipes/examples__node-app/');
  await expect(page.locator('.file-section').first()).toBeVisible();
});

test('deep articles remain readable on a narrow screen and without scripts', async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:4321${scenesPath}`);
  await expect(page.locator('h1')).toHaveText('Scenes');
  await expect(page.locator('.file-section')).toHaveCount(6);
  await expect(page.locator('.file-section').last()).toContainText(
    'Shared shape of a plate scene',
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: 'test-results/reading-scenes-mobile.png',
    fullPage: true,
  });
  await context.close();
});

test('README diagrams render visually and code retains highlighted source', async ({
  page,
  context,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/wiki/readme/#layout');
  const diagrams = page.locator('.diagram-canvas[data-mermaid]');
  await expect(diagrams).toHaveCount(4);
  const layoutDiagram = diagrams.nth(1);
  await page.locator('.diagram-block').nth(1).scrollIntoViewIfNeeded();
  await expect(layoutDiagram.locator('svg')).toBeVisible({ timeout: 15000 });
  await expect(layoutDiagram).toContainText('galileo/');

  const code = page.locator('pre.shiki[aria-label="Shell code"]').first();
  await expect(code).toContainText('python3 -m pip install');
  expect(await code.locator('span[style]').count()).toBeGreaterThan(1);
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  const copyButton = page
    .getByRole('button', { name: 'Copy Shell code', exact: true })
    .first();
  await copyButton.click();
  await expect(copyButton).toHaveText('Copied');
  // Windows clipboard uses CRLF, while DOM text uses LF.
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied.replace(/\r\n/g, '\n')).toBe(
    (await code.locator('code').textContent())?.replace(/\r\n/g, '\n'),
  );
  expect(errors).toEqual([]);
});
