/** Loaded only by articles containing diagrams; Mermaid loads near the viewport. */
type Mermaid = typeof import('mermaid').default;

let mermaidPromise: Promise<Mermaid> | undefined;
let renderQueue = Promise.resolve();
let sequence = 0;

function loadMermaid(): Promise<Mermaid> {
  return (mermaidPromise ??= import('mermaid').then(({ default: mermaid }) => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      suppressErrorRendering: true,
      maxTextSize: 50_000,
      maxEdges: 500,
      theme: 'neutral',
      fontFamily: 'Arial, Helvetica, sans-serif',
      htmlLabels: false,
      flowchart: {
        htmlLabels: false,
        useMaxWidth: true,
        wrappingWidth: 240,
        minNodeWidth: 180,
      },
      // Diagram frontmatter and init directives cannot relax these guarantees.
      secure: [
        'secure',
        'securityLevel',
        'startOnLoad',
        'maxTextSize',
        'maxEdges',
        'suppressErrorRendering',
        'htmlLabels',
      ],
    });
    return mermaid;
  }));
}

async function renderDiagram(canvas: HTMLElement): Promise<void> {
  const figure = canvas.closest<HTMLElement>('.diagram-block');
  const source = figure?.querySelector<HTMLElement>('.diagram-source pre code');
  const status = figure?.querySelector<HTMLElement>('.diagram-status');
  const details = figure?.querySelector<HTMLDetailsElement>('.diagram-source');
  if (!figure || !source || !status || !details) return;
  const definition = source.textContent ?? '';
  status.textContent = 'Loading diagram…';
  figure.dataset.diagramState = 'loading';
  try {
    if (definition.length > 50_000)
      throw new Error('Diagram exceeds rendering limit');
    const mermaid = await loadMermaid();
    // Parsing first avoids injecting Mermaid's error graphic on invalid input.
    if (!(await mermaid.parse(definition, { suppressErrors: true }))) {
      throw new Error('Invalid diagram source');
    }
    const { svg } = await mermaid.render(
      `wiki-diagram-${++sequence}`,
      definition,
    );
    // Only Mermaid's strictly sanitized SVG reaches this sink. The original
    // fenced Markdown stays a text node and is never assigned to innerHTML.
    canvas.innerHTML = svg;
    canvas.hidden = false;
    const diagram = canvas.querySelector('svg');
    if (diagram) {
      diagram.setAttribute('role', 'img');
      // Preserve readable labels on a narrow screen. Larger diagrams scroll
      // inside the focusable canvas instead of shrinking to microscopic text.
      const intrinsicWidth = diagram.viewBox.baseVal.width;
      if (Number.isFinite(intrinsicWidth) && intrinsicWidth > 0) {
        diagram.style.minWidth = `${Math.ceil(intrinsicWidth * 0.85)}px`;
      }
      if (!diagram.hasAttribute('aria-labelledby')) {
        diagram.setAttribute(
          'aria-label',
          canvas.dataset.diagramLabel ?? 'Diagram',
        );
      }
    }
    figure.dataset.diagramState = 'ready';
    status.textContent = 'Diagram loaded.';
    status.classList.add('visually-hidden');
  } catch {
    canvas.hidden = true;
    canvas.replaceChildren();
    figure.dataset.diagramState = 'error';
    status.textContent =
      'This diagram could not be displayed. Its original source is shown below.';
    details.open = true;
  }
}

function enqueue(canvas: HTMLElement): void {
  if (canvas.dataset.diagramQueued) return;
  canvas.dataset.diagramQueued = 'true';
  // Mermaid maintains internal parser state; render visible diagrams in order.
  renderQueue = renderQueue.then(() => renderDiagram(canvas));
}

const diagrams = document.querySelectorAll<HTMLElement>('[data-mermaid]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const figure = entry.target;
        const canvas = figure.querySelector<HTMLElement>('[data-mermaid]');
        if (canvas) enqueue(canvas);
        observer.unobserve(figure);
      }
    },
    { rootMargin: '240px' },
  );
  diagrams.forEach((canvas) => {
    const figure = canvas.closest('.diagram-block');
    if (figure) observer.observe(figure);
  });
} else {
  diagrams.forEach(enqueue);
}
