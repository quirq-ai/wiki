import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';

const repositoryCount = JSON.parse(
  readFileSync('.quirq-wiki-manifest.json', 'utf8'),
).repos.length;
const articleCount = JSON.parse(
  readFileSync('dist/articles.json', 'utf8'),
).length;

test('main page displays real content and a clean desktop layout', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Welcome to Quirq Wiki' }),
  ).toBeVisible();
  await expect(page.locator('.welcome-stats')).toContainText(
    articleCount.toLocaleString('en-US'),
  );
  await expect(page.locator('#site-navigation')).toBeVisible();
  await expect(page.locator('#appearance')).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: 'test-results/home-desktop.png',
    fullPage: true,
  });
  expect(errors).toEqual([]);
});

test('article navigation preserves content and working heading anchors', async ({
  page,
}) => {
  await page.goto('/wiki/galileo/src/');
  await expect(page.locator('h1')).toHaveText('Source');
  await expect(page.locator('.structured-article')).toContainText(
    'createGalileo',
  );
  await page
    .locator('#contents-list')
    .getByRole('link', { name: 'server.mjs', exact: true })
    .click();
  await expect(page).toHaveURL(/#servermjs$/);
  await expect(page.locator('#servermjs')).toBeInViewport();
  await page.screenshot({
    path: 'test-results/article-desktop.png',
    fullPage: true,
  });
});

test('full text search finds file-level symbols and handles no results', async ({
  page,
}) => {
  await page.goto('/search/?q=createGalileo');
  await expect(page.locator('.search-result').first()).toBeVisible({
    timeout: 15000,
  });
  await expect(page.locator('#search-status')).not.toContainText(
    'Preview search',
  );
  await expect(page.locator('#search-results')).toContainText('galileo');
  await page.locator('#search-query').fill('"zzzznonexistentuniqueterm99999"');
  await page
    .locator('[data-search-form]')
    .last()
    .getByRole('button', { name: 'Search', exact: true })
    .click();
  await expect(page.locator('#search-status')).toContainText(
    /no results|no articles|0 results/i,
  );
});

test('search pagination and browser back restore results', async ({ page }) => {
  await page.goto('/search/?q=source');
  await expect(page.locator('.search-result')).toHaveCount(10, {
    timeout: 15000,
  });
  await page.locator('#search-more').click();
  await expect(page.locator('.search-result')).toHaveCount(20);
  await page.locator('#wiki-search').fill('createGalileo');
  await page.locator('.header-search button').click();
  await expect(page).toHaveURL(/q=createGalileo/);
  await expect(page.locator('#search-results')).toContainText('galileo');
  await page.goBack();
  await expect(page.locator('#search-query')).toHaveValue('source');
  await expect(page.locator('.search-result')).toHaveCount(10);
});

test('directory filters combine language and text and can reset', async ({
  page,
}) => {
  await page.goto('/repositories/');
  await page.getByLabel('Filter repositories').fill('galileo');
  await expect(page.locator('[data-repository]:visible')).toHaveCount(1);
  await expect(page.locator('[data-repository]:visible')).toContainText(
    'galileo',
  );
  await page.getByLabel('Filter by language').selectOption('Python');
  await expect(page.locator('#repository-empty')).toBeVisible();
  await page.getByRole('button', { name: 'Clear filters' }).click();
  await expect(page.locator('[data-repository]:visible')).toHaveCount(
    repositoryCount,
  );
});

test('reading preferences persist across reloads', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('radio', { name: 'Dark', exact: true }).check();
  await page.getByRole('radio', { name: 'Large', exact: true }).check();
  await page.getByRole('radio', { name: 'Wide', exact: true }).check();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.locator('html')).toHaveAttribute('data-font', 'large');
  await expect(page.locator('html')).toHaveAttribute('data-width', 'wide');
  await page.screenshot({ path: 'test-results/home-dark.png', fullPage: true });
});

test('mobile has no overflow and navigation and appearance drawers work', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.locator('#site-navigation')).not.toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: 'test-results/home-mobile.png',
    fullPage: true,
  });
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  await expect(page.locator('#site-navigation')).toBeVisible();
  await page
    .locator('#site-navigation')
    .getByRole('link', { name: 'All repositories' })
    .click();
  await expect(page.locator('h1')).toHaveText('All repositories');
  await page.getByRole('button', { name: 'Reading appearance' }).click();
  await expect(page.locator('#appearance')).toBeVisible();
  await page.getByRole('radio', { name: 'Dark', exact: true }).check();
  await page.keyboard.press('Escape');
  await expect(page.locator('#appearance')).not.toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test('hidden source directories serve correctly and articles work without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/wiki/.github/_index/');
  await expect(page.locator('h1')).toHaveText('.github');
  await expect(page.locator('.directory-index')).toBeVisible();
  await page.goto('http://127.0.0.1:4321/wiki/galileo/src/');
  await expect(page.locator('.structured-article')).toContainText(
    'createGalileo',
  );
  await context.close();
});

test('keyboard shortcut and random article navigate successfully', async ({
  page,
}) => {
  await page.goto('/');
  await page.keyboard.press('/');
  await expect(page.locator('#wiki-search')).toBeFocused();
  await page.locator('[data-random]').click();
  await expect(page).toHaveURL(/\/wiki\/.+/);
  await expect(page.locator('[data-article-reader]')).toBeVisible();
});

test('article tools copy the URL, print, and hide the table of contents', async ({
  page,
  context,
}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/wiki/galileo/src/');
  await page.locator('[data-contents-toggle]').click();
  await expect(page.locator('#contents-list')).toBeHidden();
  await page.locator('[data-contents-toggle]').click();
  await expect(page.locator('#contents-list')).toBeVisible();
  await page.locator('.tools-menu summary').click();
  await page.locator('[data-copy-link]').click();
  await expect(page.locator('#tool-status')).toContainText(/copied/i);
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain(
    '/wiki/galileo/src/',
  );
  await page.evaluate(() => {
    window.print = () => {
      document.documentElement.dataset.printRequested = 'true';
    };
  });
  await page.locator('[data-print]').click();
  await expect(page.locator('html')).toHaveAttribute(
    'data-print-requested',
    'true',
  );
});
