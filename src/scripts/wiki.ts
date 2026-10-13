/** Small, dependency-free enhancements shared by every wiki page. */
type Preference = 'theme' | 'font' | 'width';

const preferences: Record<
  Preference,
  { values: readonly string[]; fallback: string }
> = {
  theme: { values: ['light', 'dark', 'auto'], fallback: 'auto' },
  font: { values: ['small', 'standard', 'large'], fallback: 'standard' },
  width: { values: ['standard', 'wide'], fallback: 'standard' },
};

function readPreference(name: Preference): string {
  try {
    const value = localStorage.getItem(`wiki-${name}`);
    if (value && preferences[name].values.includes(value)) return value;
  } catch {
    // Private browsing and storage policies must not prevent the UI from working.
  }
  return preferences[name].fallback;
}

for (const name of Object.keys(preferences) as Preference[]) {
  const inputs = document.querySelectorAll<HTMLInputElement>(
    `input[name="${name}"]`,
  );
  const apply = (value: string) => {
    document.documentElement.dataset[name] = value;
    inputs.forEach((input) => {
      input.checked = input.value === value;
    });
  };
  apply(readPreference(name));
  inputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (!input.checked || !preferences[name].values.includes(input.value))
        return;
      apply(input.value);
      try {
        localStorage.setItem(`wiki-${name}`, input.value);
      } catch {
        /* Optional persistence. */
      }
    });
  });
}

const drawers = [
  { selector: '[data-menu-toggle]', panelId: 'site-navigation' },
  { selector: '[data-appearance-toggle]', panelId: 'appearance' },
].flatMap(({ selector, panelId }) => {
  const panel = document.getElementById(panelId);
  const buttons = [...document.querySelectorAll<HTMLButtonElement>(selector)];
  if (!panel || !buttons.length) return [];
  const setOpen = (open: boolean) => {
    panel.classList.toggle('is-open', open);
    panel.dataset.open = String(open);
    buttons.forEach((button) => {
      button.setAttribute('aria-controls', panelId);
      button.setAttribute('aria-expanded', String(open));
    });
  };
  setOpen(false);
  return [{ panel, buttons, setOpen }];
});

drawers.forEach((drawer) => {
  drawer.buttons.forEach((button) =>
    button.addEventListener('click', () => {
      const open = !drawer.panel.classList.contains('is-open');
      drawers.forEach((other) => other.setOpen(false));
      drawer.setOpen(open);
      if (open) {
        const firstControl =
          drawer.panel.querySelector<HTMLElement>('input:checked') ??
          drawer.panel.querySelector<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled])',
          );
        firstControl?.focus({ preventScroll: true });
      }
    }),
  );
  drawer.panel.addEventListener('click', (event) => {
    if (
      !drawer.panel.classList.contains('is-open') ||
      !(event.target instanceof Element)
    )
      return;
    if (
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    )
      return;
    const link = event.target.closest<HTMLAnchorElement>('a[href]');
    if (
      !link ||
      !link.hash ||
      link.pathname !== window.location.pathname ||
      link.search !== window.location.search ||
      link.origin !== window.location.origin
    )
      return;
    let target: HTMLElement | null;
    try {
      target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
    } catch {
      return;
    }
    if (!target) return;
    drawer.setOpen(false);
    const destination = target;
    requestAnimationFrame(() => {
      // Make a selected section reachable to keyboard readers after the drawer closes.
      if (!destination.hasAttribute('tabindex')) {
        destination.tabIndex = -1;
        destination.addEventListener(
          'blur',
          () => destination.removeAttribute('tabindex'),
          { once: true },
        );
      }
      destination.focus({ preventScroll: true });
    });
  });
});

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Node)) return;
  const target = event.target;
  drawers.forEach((drawer) => {
    if (
      !drawer.panel.contains(target) &&
      !drawer.buttons.some((button) => button.contains(target))
    ) {
      drawer.setOpen(false);
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const open = drawers.find((drawer) =>
      drawer.panel.classList.contains('is-open'),
    );
    if (open) {
      open.setOpen(false);
      open.buttons[0]?.focus();
    }
  }
  if (event.key !== '/' || event.altKey || event.ctrlKey || event.metaKey)
    return;
  const target = event.target;
  if (
    target instanceof HTMLElement &&
    (target.isContentEditable || target.closest('input, textarea, select'))
  )
    return;
  const search = document.getElementById('wiki-search');
  if (search instanceof HTMLInputElement) {
    event.preventDefault();
    search.focus();
    search.select();
  }
});

const contents = document.getElementById('contents-list');
document
  .querySelectorAll<HTMLButtonElement>('[data-contents-toggle]')
  .forEach((button) => {
    if (!contents) return;
    button.setAttribute('aria-controls', 'contents-list');
    button.setAttribute('aria-expanded', String(!contents.hidden));
    button.addEventListener('click', () => {
      contents.hidden = !contents.hidden;
      button.setAttribute('aria-expanded', String(!contents.hidden));
      button.textContent = contents.hidden ? 'show' : 'hide';
    });
  });

const sections = [
  ...document.querySelectorAll<HTMLAnchorElement>(
    '#contents-list a[href^="#"]',
  ),
].flatMap((link) => {
  let id: string;
  try {
    id = decodeURIComponent(link.hash.slice(1));
  } catch {
    return [];
  }
  const heading = document.getElementById(id);
  return heading ? [{ link, heading }] : [];
});

if (sections.length) {
  let current: HTMLAnchorElement | undefined;
  sections.forEach(({ link }) => {
    link.classList.remove('is-active');
    link.removeAttribute('aria-current');
  });
  const updateActiveSection = () => {
    let active = sections[0];
    for (const section of sections) {
      if (section.heading.getBoundingClientRect().top <= 150) active = section;
      else break;
    }
    // Near the end of an article, a clicked heading cannot always reach the top.
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2
    ) {
      const target = sections.find(
        ({ link }) => link.hash === window.location.hash,
      );
      if (target) {
        const bounds = target.heading.getBoundingClientRect();
        if (bounds.bottom > 0 && bounds.top < window.innerHeight)
          active = target;
      }
    }
    if (current === active?.link) return;
    current?.classList.remove('is-active');
    current?.removeAttribute('aria-current');
    current = active?.link;
    current?.classList.add('is-active');
    current?.setAttribute('aria-current', 'location');
  };
  let updateQueued = false;
  window.addEventListener(
    'scroll',
    () => {
      if (updateQueued) return;
      updateQueued = true;
      requestAnimationFrame(() => {
        updateQueued = false;
        updateActiveSection();
      });
    },
    { passive: true },
  );
  window.addEventListener('resize', updateActiveSection);
  window.addEventListener('hashchange', updateActiveSection);
  updateActiveSection();
}

document.querySelectorAll<HTMLElement>('[data-print]').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    window.print();
  });
});

const toolStatus = document.getElementById('tool-status');
let statusTimer: ReturnType<typeof setTimeout> | undefined;
function announce(message: string) {
  if (!toolStatus) return;
  clearTimeout(statusTimer);
  toolStatus.textContent = message;
  statusTimer = setTimeout(() => {
    toolStatus.textContent = '';
  }, 6000);
}

document.querySelectorAll<HTMLElement>('[data-copy-link]').forEach((button) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(window.location.href);
      announce('Link copied to clipboard.');
    } catch {
      announce(
        'Could not copy the link. You can copy it from the address bar.',
      );
    }
  });
});

let articleLinks: Promise<string[]> | undefined;
async function randomArticle(): Promise<string | undefined> {
  articleLinks ??= fetch('/articles.json')
    .then(async (response) => {
      if (!response.ok) throw new Error('Article directory unavailable');
      const data: unknown = await response.json();
      if (!Array.isArray(data)) throw new Error('Invalid article directory');
      return data.flatMap((entry: unknown) => {
        if (
          !entry ||
          typeof entry !== 'object' ||
          !('href' in entry) ||
          typeof entry.href !== 'string'
        )
          return [];
        const url = new URL(entry.href, window.location.origin);
        return url.origin === window.location.origin &&
          url.pathname !== window.location.pathname
          ? [url.pathname + url.search + url.hash]
          : [];
      });
    })
    .catch((error: unknown) => {
      articleLinks = undefined;
      throw error;
    });
  const links = await articleLinks;
  return links[Math.floor(Math.random() * links.length)];
}

document
  .querySelectorAll<HTMLAnchorElement>('[data-random]')
  .forEach((link) => {
    link.addEventListener('click', async (event) => {
      if (
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      )
        return;
      event.preventDefault();
      link.setAttribute('aria-busy', 'true');
      try {
        window.location.assign((await randomArticle()) ?? link.href);
      } catch {
        window.location.assign(link.href);
      } finally {
        link.removeAttribute('aria-busy');
      }
    });
  });

export {};
