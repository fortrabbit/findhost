/**
 * Free-text search over the built site, served by Pagefind's chunked index.
 *
 * Pagefind is generated after the build, so the module only exists in `dist` —
 * hence the ignored dynamic import, and the honest message when it is missing.
 */

interface PagefindResult {
  data: () => Promise<{ url: string; meta: { title?: string; summary?: string }; excerpt: string }>;
}

interface Pagefind {
  search: (query: string) => Promise<{ results: PagefindResult[] }>;
  preload?: (query: string) => Promise<void>;
}

const form = document.querySelector<HTMLFormElement>('[data-search-form]');
const input = document.querySelector<HTMLInputElement>('[data-search-input]');
const resultsEl = document.querySelector<HTMLElement>('[data-search-results]');
const summaryEl = document.querySelector<HTMLElement>('[data-search-summary]');

if (form && input && resultsEl && summaryEl) {
  let pagefind: Pagefind | null = null;

  const load = async () => {
    if (pagefind) return pagefind;
    try {
      // Hidden from the bundler on purpose: the module does not exist until
      // Pagefind runs after the build, and Vite's own dynamic-import helper
      // leaves an unresolved __VITE_PRELOAD__ behind if it tries to handle it.
      const importModule = new Function('path', 'return import(path)') as (path: string) => Promise<unknown>;
      pagefind = (await importModule('/pagefind/pagefind.js')) as Pagefind;
    } catch {
      summaryEl.textContent =
        'The search index is only built for the deployed site. Run `pnpm build` to try it locally.';
    }
    return pagefind;
  };

  /*
   * What to show under the title. Pagefind starts its excerpt at the match, so a
   * hit on a heading gives back the heading — and the result read "Heroku"
   * twice. The title is stripped off the front where it leads, and where that
   * leaves nothing the record's own sentence stands in.
   *
   * Only the leading copy goes: the same word later in the sentence is context,
   * and Pagefind has wrapped it in a <mark> worth keeping.
   */
  const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const describe = (excerpt: string, title: string, summary?: string) => {
    const leading = new RegExp(`^(?:<mark>)?\\s*${escape(title)}\\s*(?:</mark>)?[\\s.,:;–—-]*`, 'i');
    const trimmed = excerpt.replace(leading, '').trim();
    const words = trimmed.replace(/<[^>]*>/g, '').trim();

    return words ? trimmed : (summary ?? '');
  };

  const run = async (query: string) => {
    resultsEl.innerHTML = '';

    if (!query.trim()) {
      summaryEl.textContent = 'Type a word or two.';
      return;
    }

    const engine = await load();
    if (!engine) return;

    summaryEl.textContent = 'Searching…';
    const { results } = await engine.search(query);
    const shown = await Promise.all(results.slice(0, 30).map((result) => result.data()));

    summaryEl.textContent = `${results.length} ${results.length === 1 ? 'page' : 'pages'} match “${query}”.`;

    for (const hit of shown) {
      const item = document.createElement('li');
      const title = hit.meta.title ?? hit.url;

      const link = document.createElement('a');
      link.className = 'search-title';
      link.href = hit.url;
      link.textContent = title;
      item.append(link);

      const body = describe(hit.excerpt, title, hit.meta.summary);
      if (body) {
        const excerpt = document.createElement('p');
        excerpt.className = 'search-excerpt';
        excerpt.innerHTML = body;
        item.append(excerpt);
      }

      resultsEl.append(item);
    }
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value;
    history.replaceState(null, '', query ? `?q=${encodeURIComponent(query)}` : location.pathname);
    void run(query);
  });

  const initial = new URLSearchParams(location.search).get('q');
  if (initial) {
    input.value = initial;
    void run(initial);
  }
}

export {};
