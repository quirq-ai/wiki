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
  await page.getByRole('radio', { name: 'Large', exact: true }).check();
  await page.getByRole('radio', { name: 'Wide', exact: true }).check();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-font', 'large');
  await expect(page.locator('html')).toHaveAttribute('data-width', 'wide');
  await page.screenshot({ path: 'test-results/home-wide.png', fullPage: true });
});

test('the search icon focuses the search field', async ({ page }) => {
  await page.goto('/');
  await page.locator('.header-search-icon').click();
  await expect(page.locator('#wiki-search')).toBeFocused();
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
  await page.getByRole('radio', { name: 'Large', exact: true }).check();
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
  // Agents get the article's Markdown twin, copied and in the prompt.
  await page.locator('[data-agent-copy]').click();
  await expect(page.locator('#tool-status')).toContainText(/agents copied/i);
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    'http://127.0.0.1:4321/wiki/galileo/src.md',
  );
  const claude = page.getByRole('link', { name: 'Open in Claude' });
  await expect(claude).toHaveAttribute('target', '_blank');
  expect(
    decodeURIComponent((await claude.getAttribute('href')) ?? ''),
  ).toContain(
    'https://claude.ai/new?q=Read http://127.0.0.1:4321/wiki/galileo/src.md',
  );
  const markdown = await page.request.get('/wiki/galileo/src.md');
  expect(await markdown.text()).toContain('# ');
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

test('phone controls are at least 44px tall and the open menu stays in the page', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const url of [
    '/',
    '/wiki/readme/',
    '/wiki/monitoring/_index/',
    '/wiki/galileo/src/',
    '/repositories/',
    '/recent-changes/',
    '/search/?q=release',
  ]) {
    await page.goto(url);
    // Reveal every control a reader can reach: diagram sources and copy buttons
    // appear once their scripts run, and the contents button sits in the menu.
    await page.getByRole('button', { name: 'Toggle navigation' }).click();
    await page.waitForLoadState('networkidle');
    const small = await page.evaluate(() =>
      [
        ...document.querySelectorAll<HTMLElement>(
          'a[href], button, summary, input:not([type="radio"]):not([type="checkbox"]), select',
        ),
      ]
        .filter((element) => {
          const box = element.getBoundingClientRect();
          if (box.width === 0 || box.height === 0) return false;
          if (getComputedStyle(element).visibility === 'hidden') return false;
          // Links inside running text are exempt (WCAG 2.5.8, inline): an
          // inline link whose block holds other words. A link standing alone
          // in its block, or laid out as a box, is a target of its own.
          if (
            element.tagName === 'A' &&
            getComputedStyle(element).display === 'inline'
          ) {
            let block = element.parentElement;
            while (
              block &&
              getComputedStyle(block).display.startsWith('inline')
            )
              block = block.parentElement;
            const own = (element.textContent ?? '').trim();
            if (block && (block.textContent ?? '').trim() !== own) return false;
          }
          if (element.closest('.header-search') && element.tagName === 'INPUT')
            return false; // 42px field inside its 44px search box
          return box.height < 44 || box.width < 24;
        })
        .map(
          (element) =>
            `${element.outerHTML.slice(0, 70)} ${Math.round(element.getBoundingClientRect().width)}x${Math.round(element.getBoundingClientRect().height)}`,
        ),
    );
    expect(small, url).toEqual([]);
  }
  await page.goto('/');
  await page.getByRole('button', { name: 'Toggle navigation' }).click();
  const menu = page.locator('#site-navigation');
  await expect(menu).toBeVisible();
  expect(
    await menu.evaluate((element) => {
      const style = getComputedStyle(element);
      return [style.position, style.overflowY];
    }),
  ).toEqual(['static', 'visible']);
});

test('every appearance option is reachable on a short landscape phone', async ({
  page,
}) => {
  await page.setViewportSize({ width: 740, height: 360 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Reading appearance' }).click();
  // Wide is the last option in the panel.
  const wide = page.getByRole('radio', { name: 'Wide', exact: true });
  await wide.scrollIntoViewIfNeeded();
  await wide.check();
  await expect(page.locator('html')).toHaveAttribute('data-width', 'wide');
  expect(
    await page
      .locator('#appearance')
      .evaluate((element) => getComputedStyle(element).overflowY),
  ).toBe('visible');
});

test('long unbroken repository text never pushes a phone page sideways', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const token = 'x'.repeat(260);
  for (const url of ['/', '/wiki/monitoring/_index/', '/recent-changes/']) {
    await page.goto(url);
    const width = await page.evaluate((longToken) => {
      for (const element of document.querySelectorAll(
        // Text that comes from source repositories, not the site's own labels.
        '.directory-entry, .main-content td:not(.file-count):not(.numeric), .article-lead, .main-content dt, .change-name, .change-description, .main-content h3, .feature-lead, .article-paths a',
      ))
        element.append(longToken);
      return [
        document.documentElement.scrollWidth,
        document.documentElement.clientWidth,
      ];
    }, token);
    expect(width[0], url).toBeLessThanOrEqual(width[1]);
  }
});

test('the wiki stays light when the system asks for dark', async ({
  browser,
}) => {
  const context = await browser.newContext({ colorScheme: 'dark' });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/');
  expect(
    await page.evaluate(() => getComputedStyle(document.body).backgroundColor),
  ).toBe('rgb(255, 255, 255)');
  await expect(page.getByRole('radio', { name: 'Dark' })).toHaveCount(0);
  await context.close();
});
