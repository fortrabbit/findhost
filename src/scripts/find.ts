/**
 * The find view — the only JavaScript this site ships.
 *
 * It is deliberately generic: everything it knows about the dataset comes from
 * providers.json, so an eleventh facet is an entry in fields.yml and nothing here.
 */

import { bandIndex, priceBands, priceSentence, sliceHeight } from '../lib/price';

/*
 * The same gauge PriceGauge.astro draws, built in the DOM. Two renderers of one
 * shape is a drift risk, so both read their geometry from lib/price.ts and this
 * one is checked against the server-rendered markup by a test.
 */
function gauge(from: string | undefined, to: string | undefined): HTMLElement | null {
  const start = bandIndex(from);
  if (start < 0) return null;

  const end = bandIndex(to) === -1 ? start : bandIndex(to);

  const bars = document.createElement('span');
  bars.className = 'price-gauge-bars';
  bars.setAttribute('role', 'img');
  bars.setAttribute('aria-label', priceSentence(from, to) ?? '');

  priceBands.forEach((_, index) => {
    const bar = document.createElement('span');
    bar.className = 'price-gauge-bar';
    if (index >= start && index <= end) {
      bar.classList.add('is-covered');
      bar.style.height = `${Math.round(sliceHeight(index) * 100)}%`;
    }
    bars.append(bar);
  });

  const wrap = document.createElement('span');
  wrap.className = 'price-gauge price-gauge-sm';
  wrap.append(bars);
  return wrap;
}

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
  notApplicable: number;
}

interface ProviderRow {
  id: string;
  name: string;
  description?: string;
  publishedByUs?: boolean;
  greenWebId?: number | null;
  priceFrom?: string;
  priceTo?: string;
  figure?: { emoji: string; color: string; textColor: string };
  facets: Record<string, string | string[]>;
  notApplicable: string[];
}

/**
 * One row, built to the same shape ProviderList.astro renders — the filtered
 * view and the server-rendered one have to be indistinguishable, or filtering
 * would quietly change what a row looks like.
 */
function row(provider: ProviderRow): HTMLLIElement {
  const item = document.createElement('li');
  if (!provider.description) item.className = 'one-line';

  const tile = document.createElement('span');
  tile.className = provider.figure ? 'provider-tile' : 'provider-tile letter';
  tile.setAttribute('aria-hidden', 'true');
  if (provider.figure) {
    tile.style.background = provider.figure.color;
    tile.style.color = provider.figure.textColor;
    tile.textContent = provider.figure.emoji;
  } else {
    tile.textContent = provider.name.slice(0, 1).toLowerCase();
  }
  item.append(tile);

  const body = document.createElement('div');
  body.className = 'provider-body';

  const name = document.createElement('span');
  name.className = 'provider-name';

  const link = document.createElement('a');
  link.href = `/providers/${provider.id}/`;
  link.textContent = provider.name;
  name.append(link);

  if (provider.greenWebId) {
    const mark = document.createElement('span');
    mark.className = 'green-mark';
    mark.title = 'Listed in the Green Web Foundation directory';
    mark.textContent = '🌿';
    name.append(mark);
  }

  if (provider.publishedByUs) {
    const marker = document.createElement('span');
    marker.className = 'self-marker';
    marker.textContent = 'published by us';
    name.append(marker);
  }

  body.append(name);

  if (provider.description) {
    const description = document.createElement('p');
    description.textContent = provider.description;
    body.append(description);
  }

  item.append(body);

  const drawn = gauge(provider.priceFrom, provider.priceTo);
  if (drawn) {
    const meta = document.createElement('span');
    meta.className = 'provider-meta';
    meta.append(drawn);
    item.append(meta);
  }

  return item;
}

const filtersEl = document.querySelector<HTMLElement>('[data-find-filters]');
const resultsEl = document.querySelector<HTMLElement>('[data-find-results]');
const summaryEl = document.querySelector<HTMLElement>('[data-find-summary]');
const fallbackEl = document.querySelector<HTMLElement>('[data-find-fallback]');

if (filtersEl && resultsEl && summaryEl) {
  const response = await fetch('/providers.json');
  const { facets, providers, drafts } = (await response.json()) as {
    facets: Facet[];
    providers: ProviderRow[];
    drafts: ProviderRow[];
  };

  /*
   * Hidden records are shown only when asked for, never counted in the register,
   * and never filtered — a stub has almost no fields, so running it through the
   * facets would drop it on the first tick and imply we had checked.
   */
  let showDrafts = false;

  const selected = new Map<string, Set<string>>();

  /*
   * The query string is the state. A facet value page carries its narrowing in
   * its path instead and ships no filters at all — it links here with the value
   * already set, because a tick that contradicted the URL would leave the
   * heading, the prose and the address bar disagreeing.
   */
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
    history.replaceState(null, '', query ? `${location.pathname}?${query}` : location.pathname);
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

  /*
   * The same rule lib/facets.ts states, restated rather than imported: this file
   * is bundled for the browser and must not pull the content collections in
   * behind it. `regions` is indexed by the map, not by a page of its own.
   */
  const facetIndex = (facetId: string) => (facetId === 'regions' ? '/map/' : `/${facetId}/`);

  /* Every tick's box, and the tail it sits in when it sits in one. */
  const boxes: { facet: string; value: string; input: HTMLInputElement; reveal?: () => void }[] = [];

  /*
   * The panel is built once and then only synced. Rebuilding it on every tick
   * re-sorted the values under the pointer that had just chosen one, closed any
   * tail the reader had opened and dropped focus to the body. Nothing in it
   * depends on the selection except which boxes are ticked and whether a tail
   * holding a ticked box is open, so those are the only two things that move.
   */
  const buildFilters = () => {
    for (const facet of facets) {
      // A div rather than a fieldset: fieldsets size to their widest content
      // regardless of the column they sit in, which pushed the filters over the
      // results. role=group keeps the semantics a fieldset was there for.
      const group = document.createElement('div');
      group.className = 'find-facet';
      group.setAttribute('role', 'group');
      group.setAttribute('aria-labelledby', `facet-${facet.id}`);

      /*
       * The heading is the way to the facet's own page, the same arrow each
       * value carries — the filter narrows this list, the page is where anything
       * written about the facet lives.
       */
      const heading = document.createElement('h2');
      heading.className = 'find-facet-title';
      heading.id = `facet-${facet.id}`;

      const headingLink = document.createElement('a');
      headingLink.href = facetIndex(facet.id);
      headingLink.textContent = facet.label;
      heading.append(headingLink, document.createTextNode(' '));

      const headingJump = document.createElement('a');
      headingJump.className = 'find-jump';
      headingJump.href = facetIndex(facet.id);
      headingJump.textContent = '→';
      headingJump.setAttribute('aria-hidden', 'true');
      headingJump.tabIndex = -1;
      heading.append(headingJump);

      group.append(heading);

      /*
       * Commonest first. Ordering values by how many records hold them is a fact
       * about the dataset; providers themselves stay alphabetical.
       */
      const inUse = facet.values
        .filter((value) => value.count > 0)
        .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, 'en'));

      // The tail goes in its own container so one button reveals it in place.
      const shown = 5;
      const tail = document.createElement('div');
      tail.className = 'find-tail';
      tail.hidden = true;

      const more = document.createElement('button');
      more.type = 'button';
      more.className = 'find-more';
      more.setAttribute('aria-expanded', 'false');
      more.textContent = `${inUse.length - shown} more`;
      more.addEventListener('click', () => {
        tail.hidden = !tail.hidden;
        more.setAttribute('aria-expanded', String(!tail.hidden));
        more.textContent = tail.hidden ? `${inUse.length - shown} more` : 'Fewer';
      });

      const reveal = () => {
        if (!tail.hidden) return;
        tail.hidden = false;
        more.setAttribute('aria-expanded', 'true');
        more.textContent = 'Fewer';
      };

      for (const [index, value] of inUse.entries()) {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.value = value.id;
        input.addEventListener('change', () => {
          const next = new Set(selected.get(facet.id) ?? []);
          if (input.checked) next.add(value.id);
          else next.delete(value.id);
          if (next.size) selected.set(facet.id, next);
          else selected.delete(facet.id);
          writeUrl();
          renderResults();
        });

        const count = document.createElement('span');
        count.className = 'find-count';
        count.textContent = String(value.count);

        label.append(input, document.createTextNode(` ${value.label} `), count);

        // Every facet value is also a page. Filtering narrows this list; the page
        // is where anything worth writing about that value lives.
        const jump = document.createElement('a');
        jump.className = 'find-jump';
        jump.href = `/${facet.id}/${value.id}/`;
        jump.textContent = '→';
        jump.title = `Open the ${value.label} page`;
        jump.setAttribute('aria-label', `Open the ${value.label} page`);
        label.append(jump);

        const inTail = index >= shown;
        (inTail ? tail : group).append(label);
        boxes.push({ facet: facet.id, value: value.id, input, reveal: inTail ? reveal : undefined });
      }

      if (inUse.length > shown) group.append(tail, more);

      if (facet.unknown > 0 || facet.notApplicable > 0) {
        const unknown = document.createElement('p');
        unknown.className = 'annotation';
        unknown.textContent = [
          facet.unknown > 0 ? `${facet.unknown} unknown` : '',
          facet.notApplicable > 0 ? `${facet.notApplicable} n/a` : '',
        ]
          .filter(Boolean)
          .join(' · ');
        group.append(unknown);
      }

      filtersEl.append(group);
    }

    if (drafts.length) {
      const group = document.createElement('div');
      group.className = 'find-facet find-drafts';

      const heading = document.createElement('h2');
      heading.className = 'find-facet-title';
      heading.textContent = 'Stubs';
      group.append(heading);

      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.checked = showDrafts;
      input.addEventListener('change', () => {
        showDrafts = input.checked;
        renderResults();
      });

      const count = document.createElement('span');
      count.className = 'find-count';
      count.textContent = String(drafts.length);

      label.append(input, document.createTextNode(' Show these too '), count);
      group.append(label);

      const note = document.createElement('p');
      note.className = 'annotation';
      note.textContent = 'Started and unfinished, or considered and out of scope. Not counted, not filtered.';
      group.append(note);

      filtersEl.append(group);
    }
  };

  /* A ticked box the reader cannot see is a filter nobody trusts, so its tail opens. */
  const syncFilters = () => {
    for (const box of boxes) {
      box.input.checked = selected.get(box.facet)?.has(box.value) ?? false;
      if (box.input.checked) box.reveal?.();
    }
  };

  const letterOf = (name: string) => {
    const initial = name.replace(/^the /i, '').charAt(0).toUpperCase();
    return /[A-Z]/.test(initial) ? initial : '#';
  };

  const renderResults = () => {
    const found = matches();

    resultsEl.innerHTML = '';

    let letter = '';
    let list: HTMLUListElement | null = null;

    for (const provider of found) {
      const initial = letterOf(provider.name);

      if (initial !== letter) {
        letter = initial;
        const anchor = initial === '#' ? 'other' : initial.toLowerCase();

        const section = document.createElement('section');
        section.className = 'letter-group';
        section.id = anchor;

        const heading = document.createElement('h2');
        const anchorLink = document.createElement('a');
        anchorLink.className = 'anchor-link';
        anchorLink.href = `#${anchor}`;
        anchorLink.textContent = '#';
        heading.append(anchorLink, document.createTextNode(initial === '#' ? '0–9' : initial));
        section.append(heading);

        list = document.createElement('ul');
        list.className = 'provider-list';
        section.append(list);
        resultsEl.append(section);
      }

      list?.append(row(provider));
    }

    if (showDrafts && drafts.length) {
      const section = document.createElement('section');
      section.className = 'letter-group';

      const heading = document.createElement('h2');
      heading.textContent = 'Not in the register';
      section.append(heading);

      const note = document.createElement('p');
      note.className = 'annotation';
      note.textContent =
        'Records started and not finished, or considered and failed against a numbered inclusion criterion. They are not part of the count above and the filters do not apply to them.';
      section.append(note);

      const list = document.createElement('ul');
      list.className = 'provider-list';
      for (const draft of drafts) list.append(row(draft));
      section.append(list);

      resultsEl.append(section);
    }

    // With nothing selected this says exactly what the server rendered. A visitor
    // with JavaScript should not be told "150 of 150" where a visitor without it
    // is told "150" — the script is here to narrow the list, not to restate it.
    const noun = providers.length === 1 ? 'record' : 'records';
    const parts = [
      activeFacets().length
        ? `${found.length} of ${providers.length} ${noun}, sorted alphabetically.`
        : `${providers.length} ${noun}, sorted alphabetically.`,
    ];
    summaryEl.textContent = parts.join(' ');
  };

  window.addEventListener('popstate', () => {
    readUrl();
    syncFilters();
    renderResults();
  });

  readUrl();
  buildFilters();
  syncFilters();
  renderResults();
  fallbackEl?.remove();
}

export {};
