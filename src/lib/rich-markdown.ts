import { bundledLanguages, codeToHast, type BundledLanguage } from 'shiki';
import type {
  Element,
  ElementContent,
  Properties,
  Root,
  RootContent,
} from 'hast';

function element(
  tagName: string,
  properties: Properties,
  children: ElementContent[] = [],
): Element {
  return { type: 'element', tagName, properties, children };
}

function text(value: string): ElementContent {
  return { type: 'text', value };
}

function nodeText(node: RootContent): string {
  if (node.type === 'text') return node.value;
  if (node.type === 'element') return node.children.map(nodeText).join('');
  return '';
}

const languageNames: Record<string, string> = {
  bash: 'Shell',
  sh: 'Shell',
  shell: 'Shell',
  shellscript: 'Shell',
  js: 'JavaScript',
  javascript: 'JavaScript',
  jsx: 'JavaScript / JSX',
  ts: 'TypeScript',
  typescript: 'TypeScript',
  tsx: 'TypeScript / JSX',
  py: 'Python',
  python: 'Python',
  json: 'JSON',
  jsonc: 'JSON with comments',
  yaml: 'YAML',
  yml: 'YAML',
  html: 'HTML',
  css: 'CSS',
  sql: 'SQL',
  md: 'Markdown',
  markdown: 'Markdown',
  mermaid: 'Mermaid',
  text: 'Plain text',
  txt: 'Plain text',
  plaintext: 'Plain text',
};

function languageOf(code: Element): string {
  const classes = code.properties.className;
  return (
    (Array.isArray(classes) ? classes : [])
      .map(String)
      .find((name) => name.startsWith('language-'))
      ?.slice('language-'.length)
      .toLowerCase() ?? 'text'
  );
}

async function codeBlock(pre: Element, code: Element): Promise<Element> {
  const language = languageOf(code);
  const label = languageNames[language] ?? language;
  const source = nodeText(code);
  // Unknown fences remain readable. Shiki handles known grammars server-side;
  // no syntax-highlighting runtime is shipped to article readers.
  const grammar = Object.hasOwn(bundledLanguages, language)
    ? (language as BundledLanguage)
    : 'text';
  const highlighted = await codeToHast(source, {
    lang: grammar,
    themes: { light: 'github-light', dark: 'github-dark' },
  });
  const highlightedPre = highlighted.children.find(
    (child): child is Element =>
      child.type === 'element' && child.tagName === 'pre',
  );
  if (!highlightedPre) return pre;
  highlightedPre.properties = {
    ...pre.properties,
    ...highlightedPre.properties,
    tabIndex: 0,
    ariaLabel: `${label} code`,
  };
  const highlightedCode = highlightedPre.children.find(
    (child): child is Element =>
      child.type === 'element' && child.tagName === 'code',
  );
  if (highlightedCode) {
    highlightedCode.properties = {
      ...code.properties,
      ...highlightedCode.properties,
    };
  }
  return element('div', { className: ['code-block'] }, [
    element('div', { className: ['code-toolbar'], dataPagefindIgnore: true }, [
      element('span', { className: ['code-language'] }, [text(label)]),
      element(
        'button',
        {
          type: 'button',
          className: ['code-copy'],
          dataCopyCode: '',
          ariaLabel: `Copy ${label} code`,
          hidden: true,
        },
        [text('Copy')],
      ),
    ]),
    highlightedPre,
  ]);
}

function diagramKind(source: string): string {
  // Match an actual statement rather than comments or a YAML configuration key.
  const kind = source.match(
    /^\s*(flowchart|graph|sequenceDiagram|classDiagram|stateDiagram(?:-v2)?|erDiagram|gantt|pie|journey|gitGraph|mindmap|timeline|quadrantChart|C4\w*)\b/m,
  )?.[1];
  const names: Record<string, string> = {
    graph: 'Flowchart',
    flowchart: 'Flowchart',
    sequenceDiagram: 'Sequence diagram',
    classDiagram: 'Class diagram',
    stateDiagram: 'State diagram',
    'stateDiagram-v2': 'State diagram',
    erDiagram: 'Entity relationship diagram',
    gantt: 'Gantt chart',
    pie: 'Pie chart',
    journey: 'User journey',
    gitGraph: 'Git graph',
    mindmap: 'Mind map',
    timeline: 'Timeline',
    quadrantChart: 'Quadrant chart',
  };
  return (kind && names[kind]) || 'Diagram';
}

async function diagramBlock(
  pre: Element,
  code: Element,
  index: number,
): Promise<Element> {
  const source = nodeText(code);
  const title = source.match(/^\s*accTitle\s*:\s*(.+)$/m)?.[1]?.trim();
  const caption = `Figure ${index}. ${title || diagramKind(source)}`;
  return element('figure', { className: ['diagram-block'] }, [
    element('figcaption', {}, [text(caption)]),
    element('div', {
      className: ['diagram-canvas'],
      dataMermaid: '',
      dataDiagramLabel: caption,
      role: 'region',
      tabIndex: 0,
      ariaLabel: caption,
      hidden: true,
    }),
    element(
      'p',
      {
        className: ['diagram-status'],
        role: 'status',
        dataPagefindIgnore: true,
      },
      [text('Diagram source is available below.')],
    ),
    element('details', { className: ['diagram-source'] }, [
      element('summary', {}, [text('Diagram source')]),
      await codeBlock(pre, code),
    ]),
    element('noscript', {}, [
      element('p', {}, [
        text(
          'Enable JavaScript to display this diagram, or expand Diagram source to read its definition.',
        ),
      ]),
    ]),
  ]);
}

function tableLabel(table: Element): string {
  const caption = table.children.find(
    (child): child is Element =>
      child.type === 'element' && child.tagName === 'caption',
  );
  const headers: string[] = [];
  const visit = (node: Element, inTableHead = false) => {
    if (node.tagName === 'th') {
      headers.push(nodeText(node).trim());
      if (inTableHead) node.properties.scope ??= 'col';
    }
    node.children.forEach((child) => {
      if (child.type === 'element')
        visit(child, inTableHead || node.tagName === 'thead');
    });
  };
  visit(table);
  if (caption) return nodeText(caption).trim() || 'Data table';
  return headers.length
    ? `Table: ${headers.filter(Boolean).join(', ').slice(0, 150)}`
    : 'Data table';
}

/** Enhance already-sanitized HTML without reparsing strings as executable HTML. */
export function richMarkdown() {
  return async (tree: Root): Promise<void> => {
    let diagramIndex = 0;
    const visit = async (parent: Root | Element): Promise<void> => {
      for (let index = 0; index < parent.children.length; index++) {
        const child = parent.children[index];
        if (child?.type !== 'element') continue;
        if (child.tagName === 'pre') {
          const code = child.children.find(
            (node): node is Element =>
              node.type === 'element' && node.tagName === 'code',
          );
          if (
            code &&
            child.children.every(
              (node) =>
                node === code || (node.type === 'text' && !node.value.trim()),
            )
          ) {
            parent.children[index] =
              languageOf(code) === 'mermaid'
                ? await diagramBlock(child, code, ++diagramIndex)
                : await codeBlock(child, code);
            continue;
          }
        }
        await visit(child);
        if (child.tagName === 'table') {
          parent.children[index] = element(
            'div',
            {
              className: ['table-scroll'],
              role: 'region',
              tabIndex: 0,
              ariaLabel: tableLabel(child),
            },
            [child],
          );
        }
      }
    };
    await visit(tree);
  };
}
