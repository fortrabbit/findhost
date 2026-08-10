import { labelOf, slugOf, type Field } from './fields.ts';

/*
 * The exact figure in the provider's own currency, so nobody reads a conversion
 * we invented. Intl gives us the right symbol and separators per currency.
 */
export function price(entry: { amount: number; currency: string; period: string } | undefined): string | undefined {
  if (!entry) return undefined;
  /*
   * Two decimal places is right for a monthly plan and wrong for an hourly rate.
   * Exoscale's cheapest instance is €0.0056 an hour, which rounds to €0.01 — a
   * figure 79% above the truth, published as a fact, in a dataset whose argument
   * is that everyone else's prices do not match the invoice. Below a unit the
   * places grow until two significant digits survive.
   */
  const whole = entry.amount % 1 === 0;
  const places = whole ? 0 : entry.amount >= 1 ? 2 : Math.min(6, Math.ceil(-Math.log10(Math.abs(entry.amount))) + 1);

  const money = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: entry.currency,
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: places,
  }).format(entry.amount);
  const per = { month: 'a month', year: 'a year', hour: 'an hour' }[entry.period] ?? 'a month';
  return `from ${money} ${per}`;
}

/*
 * Four different claims that marketing blurs into one word. The leaf is the
 * scannable part; the words are the honest part, and they are the dictionary's
 * own. The one rule that is not a label is the exclusion: `none-published` gets
 * no strip entry at all, an absent claim being no claim about absence.
 */
export function energy(claim: string | undefined): string | undefined {
  if (!claim || claim === 'none-published') return undefined;
  return labelOf('energyClaim', claim).toLowerCase();
}

/**
 * One value as the record page shows it. A vocabulary field gets the reader's
 * word for it, and where that vocabulary is also a facet the word is a link to
 * the page of everything else holding it — the same fact the filter panel
 * offers, arrived at from the other side.
 */
export interface Cell {
  text: string;
  href?: string;
  filter?: string;
}

/**
 * What the page needs to know beyond the field itself: every record's name, so a
 * relation can be drawn as one, and which facet values have a page, so nothing
 * links at a 404.
 */
export interface RecordContext {
  nameOf: Map<string, string>;
  hasPage: Set<string>;
}

const money = (entry: unknown): string | undefined => {
  const paid = entry as { amount: number; currency: string; period: string; introductory?: boolean };
  const said = price(paid);
  return said && paid.introductory ? `${said}, introductory` : said;
};

export function cells(field: Field, value: unknown, context: RecordContext): Cell[] {
  if (field.render === 'yes-no') return [{ text: value ? 'yes' : 'no' }];
  if (field.render === 'money') return [{ text: money(value) ?? '' }];
  if (field.render === 'multiple') return [{ text: `${String(value)}×` }];

  return (Array.isArray(value) ? value : [value]).map((entry) => {
    /*
     * A relation names another record, so the word shown is that record's name
     * and the link is its page. Read from this end only; the other end is drawn
     * by backlinks, from the same one line of frontmatter.
     */
    if (field.relation) {
      const id = String(entry);
      return { text: context.nameOf.get(id) ?? id, href: `/${id}/` };
    }

    const label = labelOf(field.id, entry);
    if (!field.facet) return { text: label };

    /*
     * A `noFilter` value is recorded and shown but never offered as a filter, so
     * no page is generated for it — "no shell" is a fact about this provider and
     * not a list anybody wants. Linking it was linking at a 404.
     */
    const option = field.values.find((candidate) => candidate.id === String(entry));
    if (option?.noFilter || !context.hasPage.has(`${field.id}:${String(entry)}`)) return { text: label };

    const slug = slugOf(field, { id: String(entry), label });
    return { text: label, href: `/${field.facet}/${slug}/`, filter: `${field.facet}:${label}` };
  });
}

/** The relation fields read backwards, and the word each one is drawn under. */
const backlinkLabels = [
  { label: 'Owns', field: 'parent' },
  { label: 'Runs here', field: 'runsOn' },
  { label: 'CDN for', field: 'cdnFrom' },
];

/**
 * The other end of every relation: who names this record as their parent, whose
 * compute runs here, who puts this network in front of theirs. Nothing is
 * recorded twice — GoDaddy's record does not list its brands, the brands name
 * GoDaddy — so the group a company owns is drawn rather than maintained.
 */
export function backlinks(
  everyRecord: { id: string; data: Record<string, unknown> }[],
  id: string,
): { label: string; cells: Cell[] }[] {
  return backlinkLabels
    .map(({ label, field }) => ({
      label,
      rows: everyRecord.filter((entry) => {
        const held = entry.data[field];
        return Array.isArray(held) ? held.includes(id) : held === id;
      }),
    }))
    .filter((group) => group.rows.length > 0)
    .map((group) => ({
      label: group.label,
      cells: group.rows
        .sort((a, b) => String(a.data.name).localeCompare(String(b.data.name), 'en'))
        .map((entry) => ({ text: String(entry.data.name), href: `/${entry.id}/` })),
    }));
}

export type Source = { field: string; url: string; checkedAt: Date };

/**
 * Group sources by URL, so one page cited for four fields is one footnote and
 * not four. Returns the numbered footnotes plus a lookup from field to number.
 */
export function footnotes(sources: Source[] | undefined) {
  const byUrl = new Map<string, { url: string; fields: string[]; checkedAt: Date }>();

  for (const source of sources ?? []) {
    const existing = byUrl.get(source.url);
    if (existing) existing.fields.push(source.field);
    else byUrl.set(source.url, { url: source.url, fields: [source.field], checkedAt: source.checkedAt });
  }

  const notes = [...byUrl.values()];
  const numberOf = new Map<string, number>();
  notes.forEach((note, index) => note.fields.forEach((field) => numberOf.set(field, index + 1)));

  return { notes, numberOf };
}
