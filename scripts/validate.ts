/**
 * Guards zod cannot express. Runs in CI on every pull request, after the build.
 *
 * Everything here fails loudly with a filename, because the alternative is a
 * malformed contribution merging and rendering wrong.
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { parse as parseYaml } from 'yaml';
import {
  asideOf,
  borrowedFrom,
  dictionaryFile,
  facetFields,
  fieldOf,
  fields,
  isDerived,
  groupNames,
  hiddenStatuses,
  renderModes,
  reservedSegments,
  slugOf,
  sourcesOf,
} from '../src/lib/fields.ts';
import { priceBands } from '../src/lib/price.ts';

const providersDir = 'src/content/providers';
const notesDir = 'src/content/notes';
const schemaFile = 'src/content.config.ts';
const publicDir = 'public';

const errors: string[] = [];
const fail = (file: string, message: string) => errors.push(`${file}: ${message}`);

const frontmatter = (raw: string) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  return parseYaml(match[1]) as Record<string, unknown>;
};

/*
 * The dictionary first. Everything downstream — the schema's enums, the record
 * page's rows, the filter panel — is built from it, so a duplicate entry or a
 * facet without a vocabulary is a silent hole rather than a loud one.
 */
const seenField = new Set<string>();
const seenFacet = new Set<string>();
const seenOrder = new Map<number, string>();

/*
 * The one exception to the URL-safety rule below, and the only kind there will
 * be: a field whose values are ISO codes and whose address keeps them. ISO 4217
 * is conventionally uppercase and is used as such wherever the dataset is read
 * as data, so /currencies/EUR/ is the URL. `regions` holds ISO 3166 and is not
 * here, because it slugs from the label — /regions/germany/ is the address and
 * DE is only how the record reads. A facet whose values are words takes
 * lowercase ids.
 */
const uppercaseSegments = new Set(['currencies']);

for (const field of fields) {
  if (seenField.has(field.id)) fail(dictionaryFile, `duplicate entry for "${field.id}"`);
  seenField.add(field.id);

  if (!field.label) fail(dictionaryFile, `"${field.id}" has no label`);

  if (field.group && !groupNames.includes(field.group as (typeof groupNames)[number])) {
    fail(dictionaryFile, `"${field.id}" is in group "${field.group}", which is not one of: ${groupNames.join(', ')}`);
  }

  if (field.render && !renderModes.includes(field.render)) {
    fail(dictionaryFile, `"${field.id}" renders as "${field.render}", which is not one of: ${renderModes.join(', ')}`);
  }

  /*
   * A borrowed vocabulary that resolves to nothing leaves the field unvalidated
   * below. Checked on this field's own resolved list, not the target's: the
   * target may itself borrow, and asking it directly answers the wrong question.
   */
  const borrowed = borrowedFrom.get(field.id);
  if (borrowed && !field.values.length) {
    const target = fieldOf.has(borrowed)
      ? `"${borrowed}", which resolves to none`
      : `"${borrowed}", which is not a field`;
    fail(dictionaryFile, `"${field.id}" borrows values from ${target}`);
  }

  // Only the panel reads `ordered`, and only facets reach the panel.
  if (field.ordered && !field.facet) {
    fail(dictionaryFile, `"${field.id}" is marked ordered but is not a facet, so nothing sorts it`);
  }

  if (field.facet) {
    if (seenFacet.has(field.facet)) fail(dictionaryFile, `two fields claim the facet "${field.facet}"`);
    seenFacet.add(field.facet);

    if (!field.values.length) fail(dictionaryFile, `"${field.id}" is a facet with no values to filter by`);

    /*
     * A record page may hold more than a facet does; it may never hold less. A
     * filterable field with no `group` is one a reader can narrow the register
     * by and then not find on the record it led them to, which reads as the
     * dataset having lost the fact between two pages.
     *
     * A derived field carries no row of its own — nothing records it — so what
     * has to be shown is the field each of its values reads.
     */
    const shown = isDerived(field.id)
      ? [...new Set(field.values.flatMap(sourcesOf).map((source) => source.from))].filter(
          (source) => !fieldOf.get(source)?.group,
        )
      : field.group
        ? []
        : [field.id];

    for (const missing of shown) {
      fail(
        dictionaryFile,
        `"${missing}" is filterable through "${field.facet}" but has no group, so no record shows it`,
      );
    }

    if (!/^[a-z0-9-]+$/.test(field.facet)) fail(dictionaryFile, `facet "${field.facet}" is not a usable URL segment`);

    // Absent, a facet sorts silently last; shared, two facets swap places between builds.
    if (field.filterOrder === undefined) fail(dictionaryFile, `"${field.id}" is a facet with no filterOrder`);
    else {
      const claimed = seenOrder.get(field.filterOrder);
      if (claimed) fail(dictionaryFile, `"${field.id}" and "${claimed}" both claim filterOrder ${field.filterOrder}`);
      seenOrder.set(field.filterOrder, field.id);
    }
  }

  /*
   * A derived field is computed from others, so it is all or nothing: one value
   * without a `from` would read as unheld on every record, and the box would sit
   * in the panel counting zero with nothing to say why.
   */
  const derivedValues = field.values.filter((value) => sourcesOf(value).length);
  if (derivedValues.length && derivedValues.length !== field.values.length) {
    fail(dictionaryFile, `"${field.id}" derives some values and not others, so the rest can never be held`);
  }

  for (const value of derivedValues) {
    /* Declaring both would leave one of them silently ignored. */
    if (value.sources && (value.from || value.when)) {
      fail(dictionaryFile, `"${field.id}" value "${value.id}" declares both "sources" and "from" — one or the other`);
    }

    for (const { from, when } of sourcesOf(value)) {
      const source = fieldOf.get(from);
      if (!source) {
        fail(dictionaryFile, `"${field.id}" value "${value.id}" reads "${from}", which is not a field`);
        continue;
      }

      if (!when.length) {
        fail(dictionaryFile, `"${field.id}" value "${value.id}" reads "${from}" without saying which values count`);
        continue;
      }

      /*
       * A `when` naming a value the source does not have matches nothing, for
       * ever. A yes/no field carries no vocabulary to check against — its two
       * answers are the render mode rather than a list — so it is checked
       * against those two instead of skipped.
       */
      const vocabulary =
        source.render === 'yes-no' ? new Set(['true', 'false']) : new Set(source.values.map((entry) => entry.id));
      for (const wanted of when) {
        if (wanted === '*') continue;
        if (!vocabulary.has(wanted)) {
          fail(
            dictionaryFile,
            `"${field.id}" value "${value.id}" waits for "${from}: ${wanted}", which does not exist`,
          );
        }
      }
    }
  }

  const values = new Set<string>();
  const segments = new Map<string, string>();
  for (const value of field.values) {
    if (values.has(value.id)) fail(dictionaryFile, `"${field.id}" lists "${value.id}" twice`);
    values.add(value.id);
    if (!value.label) fail(dictionaryFile, `"${field.id}" value "${value.id}" has no label`);

    if (!field.facet) continue;

    /*
     * The segment rather than the id, because for three fields they differ: one
     * slugs from the label, and a value may override both with a `slug` of its
     * own. What has to be typeable is whatever ends up in the URL, and what has
     * to be unique is the same string — two values resolving to one address is a
     * page that lists the wrong records and a build that says nothing.
     */
    const segment = slugOf(field, value);
    if (!uppercaseSegments.has(field.id) && !/^[a-z0-9-]+$/.test(segment)) {
      fail(
        dictionaryFile,
        `"${field.id}" value "${value.id}" addresses "${segment}", which is not a usable URL segment`,
      );
    }

    const twin = segments.get(segment);
    if (twin) fail(dictionaryFile, `"${field.id}" values "${twin}" and "${value.id}" both address "${segment}"`);
    else segments.set(segment, value.id);
  }

  // An implication naming nothing never fires, which reads in the diff as a rule that holds.
  const declared = new Set(field.values.map((value) => value.id));
  for (const value of field.values) {
    for (const required of value.implies ?? []) {
      if (required === value.id) fail(dictionaryFile, `"${field.id}" value "${value.id}" implies itself`);
      else if (!declared.has(required)) {
        fail(dictionaryFile, `"${field.id}" value "${value.id}" implies "${required}", which the field does not list`);
      }
    }
  }
}

/*
 * The price gauge is the other consumer that cannot read the dictionary: it is
 * bundled for the browser, and lib/fields.ts reads the file off disk. So the
 * bands are written twice on purpose, and the second copy is checked here.
 */
const bandsInDictionary = (fieldOf.get('priceFrom')?.values ?? []).map((value) => `${value.id}: ${value.label}`);
const bandsInCode = priceBands.map((band) => `${band.id}: ${band.label}`);
if (bandsInDictionary.join(' | ') !== bandsInCode.join(' | ')) {
  fail(
    'src/lib/price.ts',
    `the gauge's bands no longer match priceFrom in ${dictionaryFile}\n    dictionary: ${bandsInDictionary.join(', ')}\n    gauge:      ${bandsInCode.join(', ')}`,
  );
}

/*
 * The third consumer that cannot read the dictionary, and the only one outside
 * the build: GitHub renders the issue form from the file, so the categories a
 * reporter ticks are a hand-written copy of the vocabulary. Checked here for the
 * same reason the price bands are — a value added to `category` and not to the
 * form is a category nobody can report a provider under, and nothing else would
 * ever say so.
 */
const issueForm = '.github/ISSUE_TEMPLATE/add-provider.yml';
if (existsSync(issueForm)) {
  const form = parseYaml(readFileSync(issueForm, 'utf8')) as {
    body?: { id?: string; attributes?: { options?: { label?: string }[] } }[];
  };
  const offered = (form.body ?? []).find((entry) => entry.id === 'category')?.attributes?.options ?? [];
  const inForm = offered.map((option) => String(option.label));
  const inDictionary = (fieldOf.get('category')?.values ?? []).map((value) => value.label);

  if (inForm.join(' | ') !== inDictionary.join(' | ')) {
    const missing = inDictionary.filter((label) => !inForm.includes(label));
    const extra = inForm.filter((label) => !inDictionary.includes(label));
    fail(
      issueForm,
      `the categories offered no longer match the dictionary${missing.length ? `\n    missing: ${missing.join(', ')}` : ''}${extra.length ? `\n    not a category: ${extra.join(', ')}` : ''}${!missing.length && !extra.length ? ' — same values, different order' : ''}`,
    );
  }
}

/*
 * The schema is the one consumer that cannot be derived from the dictionary —
 * zod needs the field written out — so it is the one that can silently fall
 * behind. A field the schema does not name is stripped from every record by the
 * content loader, with no error and no rendered row.
 */
const schema = readFileSync(schemaFile, 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\/\/[^\n]*/g, '');

for (const field of fields) {
  // A derived field is computed from the ones below it and never written down,
  // so the schema must not name it — a record carrying one would be asserting
  // by hand what the build works out.
  if (isDerived(field.id)) {
    if (new RegExp(`(^|\\s)${field.id}:`, 'm').test(schema)) {
      fail(schemaFile, `"${field.id}" is derived in ${dictionaryFile}, so no record may carry it`);
    }
    continue;
  }

  // A key or a vocabulary() call, not a mention: the schema's comments name
  // fields it deliberately no longer carries, and `cancellation` in a sentence
  // about why it was dropped would otherwise vouch for `cancellation` returning.
  const declared = new RegExp(`(^|\\s)${field.id}:`, 'm').test(schema) || schema.includes(`vocabulary('${field.id}')`);
  if (!declared) {
    fail(schemaFile, `"${field.id}" is in ${dictionaryFile} but not in the schema, so records carrying it lose it`);
  }
}

/*
 * Notes are keyed by the path they head: <facet>.md for a facet, <facet>/<value>.md
 * for one of its values. Nothing else reads them, so a typo in either segment is
 * a file that renders nowhere while llms.txt still publishes a link to it.
 */
const noteKeys = (dir: string, prefix = ''): string[] =>
  existsSync(dir)
    ? readdirSync(dir).flatMap((name) => {
        const path = join(dir, name);
        if (statSync(path).isDirectory()) return noteKeys(path, `${prefix}${name}/`);
        return name.endsWith('.md') ? [`${prefix}${name.replace(/\.md$/, '')}`] : [];
      })
    : [];

/*
 * The exception to the rule above: the groups beside the register are pages
 * with prose and no facet behind them, so their notes are filed under `aside/`.
 * Two come from the dictionary; the stubs are ours.
 */
const asideNotes = new Set([...[...asideOf.values()].map((group) => group.key), 'stubs']);

/*
 * The same exception for pages that are neither a facet nor a group beside the
 * register. /reach/ introduces a list and earns an introduction; the root of
 * notes/ is facet names, so it is filed under `page/` rather than beside them.
 */
const pageNotes = new Set(['reach']);

for (const key of noteKeys(notesDir)) {
  const [segment, value, ...rest] = key.split('/');
  const field = fields.find((candidate) => candidate.facet === segment);

  if (segment === 'page') {
    if (!value || rest.length || !pageNotes.has(value)) {
      fail(`${notesDir}/${key}.md`, `a page note is page/<name>.md, one of: ${[...pageNotes].join(', ')}`);
    }
    continue;
  }

  if (segment === 'aside') {
    if (!value || rest.length || !asideNotes.has(value)) {
      fail(`${notesDir}/${key}.md`, `an aside note is aside/<group>.md, one of: ${[...asideNotes].join(', ')}`);
    }
    continue;
  }

  if (!field) {
    const named = fieldOf.get(segment!);
    const hint = named?.facet ? ` — that field is filed under "${named.facet}"` : '';
    fail(`${notesDir}/${key}.md`, `"${segment}" is not a facet${hint}`);
    continue;
  }

  if (rest.length) fail(`${notesDir}/${key}.md`, 'a note is <facet>.md or <facet>/<value>.md, never deeper');
  else if (value && !field.values.some((entry) => entry.id === value)) {
    fail(`${notesDir}/${key}.md`, `"${value}" is not a value of ${field.id}`);
  }
}

const files = readdirSync(providersDir).filter((name) => name.endsWith('.md'));
const seen = new Map<string, string>();

const records = files.map((file) => ({ file, data: frontmatter(readFileSync(join(providersDir, file), 'utf8')) }));

/*
 * Records live at the root — /hetzner/ — so a provider id, a facet slug and a
 * page name are all drawing on one namespace. They come from different
 * vocabularies, brands against common nouns, which is why nothing collides
 * today; that is a happy accident and not a rule, so it is checked.
 *
 * Both directions matter. A facet named after an existing provider and a
 * provider named after an existing facet are the same bug arriving from
 * opposite ends, and either one silently resolves a URL to the wrong page.
 */
const slugs = files.map((file) => file.replace(/\.md$/, ''));
const claimed = new Map<string, string>();

for (const segment of reservedSegments) claimed.set(segment, 'a page or a generated file');
for (const field of facetFields) {
  const taken = claimed.get(field.facet!);
  if (taken) fail(dictionaryFile, `facet "${field.facet}" is already ${taken}`);
  claimed.set(field.facet!, `the facet for "${field.id}"`);
}

for (const slug of slugs) {
  const taken = claimed.get(slug);
  if (taken) fail(`${providersDir}/${slug}.md`, `"${slug}" is already ${taken} — records share the root with both`);
  else claimed.set(slug, 'a provider record');
}

/*
 * Every key any record uses. A `sources` entry names either one of these — a
 * field, which gets a numbered marker beside its value — or a claim made in the
 * prose, which is cited inline. Knowing which is which is what lets the guard
 * below tell a stale citation from a prose one.
 */
const fieldNames = new Set(records.flatMap(({ data }) => (data ? Object.keys(data) : [])));

/*
 * Roughly what a unit of each currency is worth in dollars, for one purpose: to
 * catch a record whose `entryPrice` contradicts its own `priceFrom` band. The
 * bands trible in width, so a rate being a year out of date cannot cause a false
 * failure — and the check below allows a quarter either way on top of that. This
 * is not a conversion anybody should read a price from, and nothing renders it.
 */
const roughlyInDollars: Record<string, number> = {
  USD: 1,
  EUR: 1.1,
  GBP: 1.3,
  CHF: 1.1,
  CAD: 0.75,
  AUD: 0.65,
  NZD: 0.6,
  SEK: 0.1,
  DKK: 0.15,
  PLN: 0.25,
  JPY: 0.007,
  INR: 0.012,
  MYR: 0.22,
  BRL: 0.18,
  ARS: 0.001,
  ZAR: 0.055,
  MXN: 0.05,
  KES: 0.008,
  VND: 0.00004,
};

/** The dollar floor of each band, in the order lib/price.ts declares them. */
const bandFloor: Record<string, number> = { xs: 0, sm: 5, md: 15, lg: 50, xl: 150, '2xl': 500, '3xl': 1500 };
const bandCeiling: Record<string, number> = { xs: 5, sm: 15, md: 50, lg: 150, xl: 500, '2xl': 1500, '3xl': Infinity };

/** The vocabulary of every relation field: the register, including the records beside it. */
const recordIds = new Set(slugs);
const relationFields = fields.filter((field) => field.relation);

// Kept apart in the count only. Every guard below runs on a hidden record too —
// a rejected name is still published, and a field this dataset may never carry
// is no more acceptable on a page nobody links to.
let hidden = 0;
let aside = 0;

/*
 * A `sources` entry cites either a field, which earns a numbered marker beside
 * its value, or a claim made in the prose, which is named in words — "2021 fire".
 * Only the first kind can be typo'd into silence, and the two are told apart by
 * shape: a camelCase word that names no field is a misspelt field, not a claim.
 */
const citable = new Set([...fields.map((field) => field.id), 'notes', 'urls', 'sustainabilityUrl']);

/*
 * An interior capital, which no prose claim has and nearly every field id does.
 * A single lowercase word is left alone deliberately: "outage" is as plausible a
 * claim as "regions" is a field, and refusing the first to catch the second
 * would make the guard something contributors work around.
 */
const looksLikeField = (name: string) => /^[a-z]+[A-Z][A-Za-z0-9]*$/.test(name);

// A ranking field is the one thing this dataset may never grow. CI4, mechanically.
const forbidden = ['rank', 'ranking', 'score', 'rating', 'boost', 'weight', 'stars', 'position', 'featured'];

/**
 * The advertised starting price and the band it is filed under have to agree.
 * They are recorded separately and drift apart silently: one is read off a
 * pricing page, the other is a judgement about what a small production setup
 * costs, and when the judgement changes nobody goes back to the number.
 */
function checkPriceBand(file: string, data: Record<string, unknown>) {
  const entry = data.entryPrice as
    { amount?: number; currency?: string; period?: string; introductory?: boolean } | undefined;
  const band = data.priceFrom as string | undefined;
  if (!entry?.amount || !entry.currency || !band || bandFloor[band] === undefined) return;

  const rate = roughlyInDollars[entry.currency];
  if (!rate) return;

  // Hours are the awkward one: a cent an hour is four euros a month, not a cent.
  const perMonth: Record<string, number> = { year: 1 / 12, month: 1, hour: 730 };
  const dollars = entry.amount * (perMonth[String(entry.period)] ?? 1) * rate;

  /*
   * An introductory price is allowed to sit below the band: `priceFrom` follows
   * the standing price on purpose, and the whole point of recording both is that
   * the advertised number is not the one that recurs. A STANDING price below the
   * band is a misfiling, and the reason this check exists — a record can say
   * "starts at EUR 2.50" and "starts at $5 to $15" at the same time, on the same
   * page, and nothing noticed.
   */
  if (!entry.introductory && dollars < bandFloor[band] * 0.75) {
    fail(file, `entryPrice is about $${dollars.toFixed(2)} a month, below the "${band}" band it is filed under`);
  } else if (dollars > bandCeiling[band] * 1.25) {
    fail(file, `entryPrice is about $${dollars.toFixed(2)} a month, above the "${band}" band it is filed under`);
  }
}

/**
 * The note sits directly under the figure on the record page, so the two lines
 * are read together — and a note that echoes the line above it says nothing.
 * Krystal's figure said "B Corp paperwork" and its note opened "A B Corp that…",
 * which is the whole failure in one example.
 */
const commonWords = new Set(
  'the a an and it is of to in for on that with not its you your as at by or from what who this are be more than one no all any can has have their'.split(
    ' ',
  ),
);

const meaningfulWords = (text: string) =>
  new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, ' ')
      .split(/\s+/)
      .filter((word) => word.length > 2 && !commonWords.has(word)),
  );

function checkFavoriteNote(file: string, data: Record<string, unknown>) {
  const figureText = String((data.figure as { text?: string } | undefined)?.text ?? '');
  const note = String(data.favoriteNote ?? '');
  if (!figureText || !note) return;

  const inNote = meaningfulWords(note);
  const echoed = [...meaningfulWords(figureText)].filter((word) => inNote.has(word));
  if (echoed.length) fail(file, `favoriteNote repeats the figure above it: ${echoed.join(', ')}`);
}

/**
 * A relation names another record. Nothing else can check it: zod cannot see the
 * collection from inside the schema that defines it, and a typo here is silent —
 * the value renders as a link to a page that does not exist, or as a parent
 * nobody can follow back.
 */
function checkRelations(file: string, data: Record<string, unknown>, slug: string) {
  for (const field of relationFields) {
    const held = data[field.id];
    if (held === undefined || held === null) continue;

    for (const target of Array.isArray(held) ? held : [held]) {
      if (String(target) === slug) fail(file, `"${field.id}" points at its own record`);
      else if (!recordIds.has(String(target))) {
        fail(file, `"${field.id}" names "${String(target)}", which is not a record — relations are provider ids`);
      }
    }
  }
}

/**
 * A source for a field the record does not carry numbers a footnote nothing
 * points at, and claims the fact was checked when the page shows no fact. It
 * happens when a band is pulled and its citation is left behind.
 */
function checkSources(file: string, data: Record<string, unknown>) {
  for (const source of (data.sources ?? []) as { field?: string }[]) {
    const field = String(source.field);
    /*
     * A social account is its own evidence: the URL either resolves to the
     * provider's profile or it does not, and a citation saying we looked adds a
     * numbered footnote to a fact nobody disputes.
     */
    if (field === 'social') fail(file, 'cites a source for "social" — a profile link vouches for itself');
    else if (looksLikeField(field) && !citable.has(field)) {
      fail(file, `cites a source for "${field}", which is not a field`);
    } else if (fieldNames.has(field) && data[field] === undefined) {
      fail(file, `cites a source for "${field}", which this record does not carry`);
    }
  }
}

/** Every value a record holds has to be one the dictionary defines, with whatever it implies. */
function checkVocabulary(file: string, data: Record<string, unknown>) {
  for (const field of fields) {
    if (!field.values.length || isDerived(field.id)) continue;

    const value = data[field.id];
    if (value === undefined || value === null) continue;

    const allowed = new Set(field.values.map((entry) => entry.id));
    const used = Array.isArray(value) ? value.map(String) : [String(value)];

    for (const entry of used) {
      if (!allowed.has(entry)) fail(file, `${field.id} "${entry}" is not defined in ${dictionaryFile}`);
    }

    /*
     * One value that cannot be held without another. A record offering
     * WooCommerce and not WordPress is missing from the page that exists for
     * exactly that record, and a filter is only worth ticking if it holds.
     */
    for (const entry of field.values) {
      if (!entry.implies?.length || !used.includes(entry.id)) continue;

      const missing = entry.implies.filter((required) => !used.includes(required));
      if (missing.length) {
        fail(file, `${field.id} "${entry.id}" implies ${missing.map((id) => `"${id}"`).join(', ')}, which is not held`);
      }
    }
  }
}

/** The one thing this dataset may never grow, and the assets a record points at. */
function checkRecordShape(file: string, data: Record<string, unknown>) {
  for (const key of Object.keys(data)) {
    if (forbidden.includes(key.toLowerCase())) {
      fail(file, `"${key}" is a ranking field — this dataset carries no scores`);
    }
  }

  for (const asset of ['mark', 'logo'] as const) {
    const value = data[asset];
    if (typeof value === 'string' && !existsSync(join(publicDir, value))) {
      fail(file, `${asset} "${value}" is not in ${publicDir}/`);
    }
  }
}

for (const { file, data } of records) {
  if (!data) {
    fail(file, 'no frontmatter');
    continue;
  }

  const slug = file.replace(/\.md$/, '');

  if (hiddenStatuses.has(String(data.status))) hidden += 1;
  else if (asideOf.has(String(data.status))) aside += 1;

  if (data.id !== slug) {
    fail(file, `id "${String(data.id)}" does not match the filename — the id is the URL`);
  }

  const duplicate = seen.get(String(data.id));
  if (duplicate) fail(file, `duplicate id, already used by ${duplicate}`);
  seen.set(String(data.id), file);

  checkPriceBand(file, data);
  checkFavoriteNote(file, data);
  checkRelations(file, data, slug);
  checkRecordShape(file, data);
  checkSources(file, data);
  checkVocabulary(file, data);
}

/*
 * A note for a value no record holds. The page it heads is never generated —
 * facetRoutes only emits values in use — so the note renders nowhere while
 * llms.txt goes on publishing a link to it. Checked last, because it is the one
 * dictionary question only the records can answer.
 */
for (const key of noteKeys(notesDir)) {
  const [segment, value] = key.split('/');
  if (!value) continue;

  const field = fields.find((candidate) => candidate.facet === segment);
  if (!field) continue;

  /*
   * A derived value is held by nobody literally — no record carries the field —
   * so it has to be computed the way lib/facets.ts computes it, from the source
   * field each value reads.
   */
  const option = field.values.find((candidate) => candidate.id === value);
  const sources = option ? sourcesOf(option) : [];

  const held = records.some(({ data }) =>
    sources.length
      ? sources.some(({ from, when }) => {
          const carried = data?.[from];
          if (carried === undefined || carried === null) return false;
          const answers = Array.isArray(carried) ? carried.map(String) : [String(carried)];
          return when.includes('*') ? answers.length > 0 : answers.some((answer) => when.includes(answer));
        })
      : (() => {
          const carried = data?.[field.id];
          return Array.isArray(carried) ? carried.map(String).includes(value) : String(carried) === value;
        })(),
  );

  if (!held) fail(`${notesDir}/${key}.md`, `no record holds ${field.id} "${value}", so the page it heads is not built`);
}

if (errors.length) {
  console.error(`\n${errors.length} problem${errors.length === 1 ? '' : 's'}:\n`);
  for (const error of errors) console.error(`  ${error}`);
  console.error('');
  process.exit(1);
}

console.log(
  `${files.length - hidden - aside} in the register, ${aside} beside it, ${hidden} hidden, ${fields.length} fields, ${facetFields.length} of them facets, no problems.`,
);
