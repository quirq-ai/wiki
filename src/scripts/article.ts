/** Reader-only enhancements; every article and source link also works without JS. */
const readPanel = document.querySelector<HTMLElement>('[data-article-reader]');
const sourcePanel = document.querySelector<HTMLElement>(
  '[data-article-source]',
);
const viewLinks = document.querySelectorAll<HTMLAnchorElement>(
  '[data-article-view]',
);

function showView() {
  if (!readPanel || !sourcePanel) return;
  const source = new URLSearchParams(location.search).get('view') === 'source';
  readPanel.hidden = source;
  sourcePanel.hidden = !source;
  viewLinks.forEach((link) => {
    const active = link.dataset.articleView === (source ? 'source' : 'read');
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  const contents = document.querySelector<HTMLElement>('.contents-navigation');
  if (contents) contents.hidden = source;
}
if (readPanel && sourcePanel) {
  viewLinks.forEach((link) =>
    link.addEventListener('click', (event) => {
      if (
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      event.preventDefault();
      const url = new URL(location.href);
      if (link.dataset.articleView === 'source')
        url.searchParams.set('view', 'source');
      else url.searchParams.delete('view');
      url.hash = '';
      history.pushState(null, '', url);
      showView();
    }),
  );
  window.addEventListener('popstate', showView);
  showView();
}

document
  .querySelectorAll<HTMLElement>('.directory-browser')
  .forEach((browser) => {
    const input = browser.querySelector<HTMLInputElement>(
      '[data-directory-filter]',
    );
    const rows = [
      ...browser.querySelectorAll<HTMLTableRowElement>('[data-directory-row]'),
    ];
    const more = browser.querySelector<HTMLButtonElement>(
      '[data-directory-more]',
    );
    const status = browser.querySelector<HTMLElement>('[data-directory-count]');
    const empty = browser.querySelector<HTMLElement>('[data-directory-empty]');
    if (!input) return;
    let limit = 30;
    const update = () => {
      const query = input.value.toLocaleLowerCase().trim();
      const matches = rows.filter((row) =>
        (row.dataset.directoryPath || '').toLocaleLowerCase().includes(query),
      );
      const visible = new Set(matches.slice(0, limit));
      rows.forEach((row) => {
        row.hidden = !visible.has(row);
      });
      if (more) more.hidden = matches.length <= limit;
      if (empty) empty.hidden = matches.length > 0;
      if (status)
        status.textContent = `${Math.min(matches.length, limit)} of ${matches.length} folders`;
    };
    input.addEventListener('input', () => {
      limit = 30;
      update();
    });
    more?.addEventListener('click', () => {
      const previousVisible = new Set(rows.filter((row) => !row.hidden));
      limit += 30;
      update();
      rows
        .find((row) => !row.hidden && !previousVisible.has(row))
        ?.querySelector<HTMLAnchorElement>('a')
        ?.focus();
    });
    browser
      .querySelector('[data-directory-reset]')
      ?.addEventListener('click', () => {
        input.value = '';
        limit = 30;
        update();
        input.focus();
      });
    update();
  });

document
  .querySelectorAll<HTMLButtonElement>('[data-copy-code]')
  .forEach((button) => {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const code = button.closest('.code-block')?.querySelector('pre code');
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code.textContent || '');
        button.textContent = 'Copied';
      } catch {
        button.textContent = 'Select code to copy';
      }
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 2400);
    });
  });

export {};
