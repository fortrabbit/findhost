/**
 * The find view — the only JavaScript this site ships.
 *
 * It is deliberately generic: everything it knows about the dataset comes from
 * providers.json, so an eleventh facet is a taxonomy entry and nothing here.
 */

interface FacetValue {
  id: string;
  label: string;
  count: number;
}

interface Facet {
  id: string;
  label: string;
  field: string;
  multiple: boolean;
  values: FacetValue[];
  unknown: number;
}

interface ProviderRow {
  id: string;
  name: string;
  description?: string;
  publishedByUs?: boolean;
  facets: Record<string, string | string[]>;
}

const filtersEl = document.querySelector<HTMLElement>('[data-find-filters]');
const resultsEl = document.querySelector<HTMLElement>('[data-find-results]');
const summaryEl = document.querySelector<HTMLElement>('[data-find-summary]');
const fallbackEl = document.querySelector<HTMLElement>('[data-find-fallback]');

if (filtersEl && resultsEl && summaryEl) {
  const response = await fetch('/providers.json');
  const { facets, providers } = (await response.json()) as { facets: Facet[]; providers: ProviderRow[] };

  const selected = new Map<string, Set<string>>();

  const readUrl = () => {
    const params = new URLSearchParams(location.search);
    selected.clear();
    for (const facet of facets) {
      const value = params.get(facet.id);
      if (value) selected.set(facet.id, new Set(value.split(',').filter(Boolean)));
    }
  };

  const writeUrl = () => {
    const params = new URLSearchParams();
    for (const [facetId, values] of selected) {
      if (values.size) params.set(facetId, [...values].join(','));
    }
    const query = params.toString();
    history.replaceState(null, '', query ? `?${query}` : location.pathname);
  };

  const holds = (provider: ProviderRow, field: string, value: string) => {
    const held = provider.facets[field];
    if (held === undefined) return false;
    return Array.isArray(held) ? held.includes(value) : held === value;
  };

  const activeFacets = () => facets.filter((facet) => (selected.get(facet.id)?.size ?? 0) > 0);

  const matches = () =>
    providers.filter((provider) =>
      activeFacets().every((facet) =>
        [...selected.get(facet.id)!].some((value) => holds(provider, facet.field, value)),
      ),
    );

  /**
   * With most fields optional, a filter that silently drops unknowns hides most
   * of the market. So we say how many records were set aside and why.
   */
  const excluded = () =>
    activeFacets()
      .map((facet) => ({
        label: facet.label,
        count: providers.filter((provider) => provider.facets[facet.field] === undefined).length,
      }))
      .filter((entry) => entry.count > 0);

  const renderFilters = () => {
    filtersEl.innerHTML = '';

    for (const facet of facets) {
      const chosen = selected.get(facet.id) ?? new Set<string>();
      const fieldset = document.createElement('fieldset');
      fieldset.className = 'find-facet';

      const legend = document.createElement('legend');
      legend.textContent = facet.label;
      fieldset.append(legend);

      for (const value of facet.values) {
        if (!value.count) continue;

        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.value = value.id;
        input.checked = chosen.has(value.id);
        input.addEventListener('change', () => {
          const next = new Set(selected.get(facet.id) ?? []);
          if (input.checked) next.add(value.id);
          else next.delete(value.id);
          if (next.size) selected.set(facet.id, next);
          else selected.delete(facet.id);
          writeUrl();
          render();
        });

        const count = document.createElement('span');
        count.className = 'find-count';
        count.textContent = String(value.count);

        label.append(input, document.createTextNode(` ${value.label} `), count);
        fieldset.append(label);
      }

      if (facet.unknown > 0) {
        const unknown = document.createElement('p');
        unknown.className = 'annotation';
        unknown.textContent = `${facet.unknown} unknown`;
        fieldset.append(unknown);
      }

      filtersEl.append(fieldset);
    }
  };

  const renderResults = () => {
    const found = matches();

    resultsEl.innerHTML = '';
    for (const provider of found) {
      const item = document.createElement('li');

      const link = document.createElement('a');
      link.href = `/provider/${provider.id}/`;
      link.textContent = provider.name;
      item.append(link);

      if (provider.publishedByUs) {
        const marker = document.createElement('span');
        marker.className = 'self-marker';
        marker.textContent = 'published by us';
        item.append(marker);
      }

      if (provider.description) {
        const description = document.createElement('p');
        description.textContent = provider.description;
        item.append(description);
      }

      resultsEl.append(item);
    }

    const dropped = excluded();
    const parts = [
      `${found.length} of ${providers.length} ${providers.length === 1 ? 'record' : 'records'}, sorted alphabetically.`,
    ];
    if (dropped.length) {
      parts.push(
        `Set aside as unknown: ${dropped.map((entry) => `${entry.count} without ${entry.label.toLowerCase()}`).join(', ')}.`,
      );
    }
    summaryEl.textContent = parts.join(' ');
  };

  const render = () => {
    renderFilters();
    renderResults();
  };

  window.addEventListener('popstate', () => {
    readUrl();
    render();
  });

  readUrl();
  render();
  fallbackEl?.remove();
}

export {};
