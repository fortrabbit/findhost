import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';
import { vocabulary } from './lib/fields';

/**
 * This file is a governance artifact, not a type definition.
 *
 * Four fields are required of a listed record — id, name, urls.home, category.
 * Everything else is optional, so absent means unknown, renders as `?`, and the
 * build stays green. Nothing here may express a rank, score, boost or weight;
 * scripts/validate.ts asserts that no such field has appeared.
 *
 * Every closed vocabulary comes from src/data/fields.yml, which also carries the
 * label each value is shown under and the section of the record page it appears
 * in. A field with a `vocabulary()` call here has an entry there; the rest —
 * identity, provenance, and the display-only pieces — are rendered by markup
 * written for them and are the schema's alone.
 */

const affiliateParams = /[?&](ref|aff|affiliate|partner|utm_[a-z]+|fpr|via)=/i;

const publicUrl = z
  .url()
  .refine((value) => value.startsWith('https://'), 'Must be https')
  .refine((value) => !affiliateParams.test(value), 'Affiliate parameters are not allowed in any URL');

/** Generative identity: an emoji and two hex values, no image file. */
const figure = z.object({
  emoji: z.string().min(1),
  color: z.string(),
  textColor: z.string(),
  text: z.string(),
});

/** The reservation. Attributed and dated, because it is a judgement, not a property. */
const caveat = figure.extend({
  by: z.string(),
  on: z.coerce.date(),
});

const providerFields = z
  .object({
    // Required — the four fields without which a record is not a record.
    id: z.string(),
    name: z.string(),
    /*
     * Pages the provider operates, and which the dataset may cite — a `sources`
     * entry points at one of these. `social` is deliberately not in here: those
     * are accounts, not documents, and citing a LinkedIn profile is not the same
     * act as citing a terms page. `terms` is the one that earns its keep:
     * promotional versus renewal pricing is flagged by no structured data
     * anywhere, so renewalMultiple can only be read off it by a person.
     */
    urls: z.object({
      home: publicUrl,
      pricing: publicUrl.optional(),
      status: publicUrl.optional(),
      terms: publicUrl.optional(),
      docs: publicUrl.optional(),
    }),
    /*
     * Required of a listed record — see the superRefine below. A hidden one is
     * allowed to be a stub. More than one is normal rather than exceptional:
     * DigitalOcean sells droplets, an app platform and functions, and naming
     * one of the three made the other two invisible to a filter.
     */
    category: z.array(z.enum(vocabulary('category'))).nonempty().optional(),

    // Identity
    description: z.string().max(200).optional(),
    mark: z.string().optional(),
    logo: z.string().optional(),
    founded: z.number().int().optional(),
    hqCountry: z.enum(vocabulary('hqCountry')).optional(),
    ownership: z.enum(vocabulary('ownership')).optional(),
    parent: z.string().optional(),

    // Classification
    whoManagesOs: z.enum(vocabulary('whoManagesOs')).optional(),
    /*
     * More than one can be true at once: Laravel Forge provisions onto your own
     * cloud account *and* resells its own VPS, and panels are increasingly doing
     * both. Absent still means unknown — a provider that sells no infrastructure
     * at all is already saying so through `category: server-management`.
     */
    infraContract: z.array(z.enum(vocabulary('infraContract'))).optional(),
    specialisation: z.array(z.enum(vocabulary('specialisation'))).optional(),
    /** What a provider positions itself for, in its own words — not our verdict on fit. */
    useCases: z.array(z.enum(vocabulary('useCases'))).optional(),
    /** Who the provider sells to, in its own words. Separate from what it is used for. */
    audience: z.array(z.enum(vocabulary('audience'))).optional(),
    /**
     * Named software the provider documents support for. Most people search for
     * "WordPress hosting", not "PHP hosting" — the runtime is the precise
     * question and the software is the one people actually ask.
     */
    software: z.array(z.enum(vocabulary('software'))).optional(),

    // Tech stack
    runtimes: z.array(z.enum(vocabulary('runtimes'))).optional(),
    deployMethods: z.array(z.enum(vocabulary('deployMethods'))).optional(),
    sshAccess: z.enum(vocabulary('sshAccess')).optional(),
    managedDatabases: z.array(z.enum(vocabulary('managedDatabases'))).optional(),
    gpuCapacity: z.array(z.enum(vocabulary('gpuCapacity'))).optional(),
    persistentStorage: z.boolean().optional(),
    backupsIncluded: z.enum(vocabulary('backupsIncluded')).optional(),

    /*
     * Pricing — bands only. This is not a price tracker.
     *
     * renewalMultiple is renewal ÷ introductory, so 3.3 means a €2.99 offer
     * that renews at €9.99. A value below 1 would mean the price falls, which
     * happens to nobody.
     */
    /*
     * How the bill is computed, by what happens at the margin:
     *   fixed-tier         the bill does not change with usage
     *   plan-plus-overage  a plan fee, an included allowance, metered above it
     *   per-resource       per unit provisioned, whether or not it is used
     *   usage-based        metered consumption, no plan fee
     *   hourly             per hour a resource exists
     *   credit             prepaid credits drawn down
     *   per-server-licence a licence per server you already own
     */
    pricingModel: z.enum(vocabulary('pricingModel')).optional(),
    /*
     * What it costs to run something here, as a range across seven bands in US
     * dollars a month — see lib/price.ts for the scale and why it triples.
     *
     * Dollars because the dataset is international and the euro was quietly
     * making Europe the default reader. A range rather than a single figure
     * because a starting price answers "can I afford to begin" and nothing else:
     * shared hosting starts and ends within a few pounds of itself, and a
     * hyperscaler starting at the same number has no ceiling worth naming.
     *
     * `priceFrom` is the cheapest way to run one small production app with every
     * mandatory component included, and it follows the STANDING price, never the
     * introductory one. Stacking the floor tier of every component into
     * something nobody would call a production app is the cheaper reading and
     * the wrong one — including on our own record.
     *
     * `priceTo` depends on what is being sold. Where a provider publishes a plan
     * ladder, it is the top of that ladder. Where it meters resources with no
     * ladder to end, it is where a serious deployment lands — never the largest
     * invoice the provider could theoretically issue, which for a hyperscaler is
     * a number with no meaning. Where neither can be established, absent.
     *
     * A free tier is not on this scale. `freeTier` records it, because free
     * describes what a provider gives away and this describes what it charges.
     */
    priceFrom: z.enum(vocabulary('priceFrom')).optional(),
    priceTo: z.enum(vocabulary('priceTo')).optional(),

    /*
     * How the bill arrives, which is where the unpleasant surprises live. None
     * of it is a price, so none of it rots the way a figure does.
     */
    currencies: z.array(z.enum(vocabulary('currencies'))).optional(),
    billingPeriods: z.array(z.enum(vocabulary('billingPeriods'))).optional(),
    /** Paid before the month or after it. Arrears means usage you have already run up. */
    billingTiming: z.enum(vocabulary('billingTiming')).optional(),
    /*
     * How long you can still be billed after deciding to leave, worst case, on
     * the cheapest ordinary terms.
     *
     * This replaced a cancellation-policy enum, which described the paperwork
     * and answered the wrong question. "Cancel any time" and "no refund for the
     * paid term" are both true of almost every host at once, and neither tells
     * you what you actually want to know, which is how long the money keeps
     * going out. A notice period and a minimum term are the same fact to a
     * customer — time — so they are recorded as time and they add up.
     */
    exitWithin: z.enum(vocabulary('exitWithin')).optional(),
    /*
     * The exact starting figure in the provider's own currency, shown beside the
     * coins so nobody reads a conversion we invented. One number with a date,
     * not a series — this is not a price tracker.
     */
    entryPrice: z
      .object({
        amount: z.number(),
        currency: z.enum(vocabulary('currencies')),
        period: z.enum(['month', 'year', 'hour']).default('month'),
        /*
         * True where the figure is a teaser rather than what the customer keeps
         * paying. Without this the field silently fills with introductory rates,
         * which is what affiliate sites publish and why their prices never match
         * anyone's invoice.
         */
        introductory: z.boolean().optional(),
      })
      .optional(),
    renewalMultiple: z.number().nullable().optional(),
    freeTier: z.enum(vocabulary('freeTier')).optional(),
    contractMinimum: z.enum(vocabulary('contractMinimum')).optional(),

    /*
     * Regions. Absent means unknown; `null` means the question does not apply —
     * a control panel that provisions onto your own cloud account operates no
     * regions of its own, and counting it as missing data makes every "N records
     * do not say" line on the map wrong.
     */
    regions: z
      .array(z.enum(vocabulary('regions')))
      .nullable()
      .optional(),
    runsOn: z
      .array(z.enum(vocabulary('runsOn')))
      .nullable()
      .optional(),
    gdprDpa: z.enum(vocabulary('gdprDpa')).optional(),

    /*
     * Environmental impact — what a provider publishes, never a judgement of it.
     * The value is the distinction: offsets, annual matching and 24/7 carbon-free
     * are three different claims that marketing routinely blurs into one.
     *
     * `grid-mix-disclosed` is for a published supply mix rather than a claim
     * about it — o2switch prints "~94% décarbonée, ~6% carbonée (2019)", which
     * is more information than most and fits none of the other values.
     */
    energyClaim: z.enum(vocabulary('energyClaim')).optional(),
    sustainabilityUrl: publicUrl.optional(),
    certifications: z.array(z.enum(vocabulary('certifications'))).optional(),
    /**
     * Where a provider talks in public. Not a facet — nobody filters by "has a
     * Facebook page" — but a dormant account is checkable, and a company's own
     * GitHub says more about a developer platform than its marketing does.
     */
    social: z
      .object({
        x: publicUrl.optional(),
        bluesky: publicUrl.optional(),
        mastodon: publicUrl.optional(),
        linkedin: publicUrl.optional(),
        github: publicUrl.optional(),
        facebook: publicUrl.optional(),
        youtube: publicUrl.optional(),
        discord: publicUrl.optional(),
      })
      .optional(),

    /** Green Web Foundation directory id — someone else's verification, linked rather than copied. */
    greenWebId: z.number().int().nullable().optional(),

    /*
     * Support. supportHours answers one question only: when can you reach a
     * human about a production problem. A provider running a business-hours
     * sales line and a 24-hour technical line is `24-7` — the office hours are
     * not the ones that matter when a site is down.
     *
     * It describes the CHEAPEST PAID PLAN, because that is where the buyer this
     * dataset serves actually stands. Hours that only arrive at enterprise are
     * supportTiering's job; without that rule every platform reads `24-7` on the
     * strength of a tier almost nobody buys.
     */
    supportChannels: z.array(z.enum(vocabulary('supportChannels'))).optional(),
    supportHours: z.enum(vocabulary('supportHours')).optional(),
    supportTiering: z.enum(vocabulary('supportTiering')).optional(),

    /*
     * Included — what comes with the hosting and what has to be bought
     * elsewhere. One field per thing rather than one list, because a list can
     * only say what is included: absent would mean both "they do not offer it"
     * and "nobody has checked", and the difference is the whole question. Three
     * answers rather than two, because "sold separately" is the ordinary case.
     */
    domainRegistration: z.enum(vocabulary('domainRegistration')).optional(),
    dnsHosting: z.enum(vocabulary('dnsHosting')).optional(),
    emailHosting: z.enum(vocabulary('emailHosting')).optional(),
    cdnIncluded: z.enum(vocabulary('cdnIncluded')).optional(),
    testDomain: z.enum(vocabulary('testDomain')).optional(),

    // Automation & agent support — the axis nobody else records
    apiAvailable: z.enum(vocabulary('apiAvailable')).optional(),
    cliTool: z.enum(vocabulary('cliTool')).optional(),
    mcpServer: z.enum(vocabulary('mcpServer')).optional(),
    iacSupport: z.array(z.enum(vocabulary('iacSupport'))).optional(),

    // Meta & provenance
    checkedAt: z.coerce.date().optional(),
    sources: z.array(z.object({ field: z.string(), url: publicUrl, checkedAt: z.coerce.date() })).optional(),
    /*
     * Entries are never deleted — for a dataset published by a competitor,
     * removal is the power that has to be given up. A provider that dies or
     * leaves scope keeps its page and changes status.
     *
     * Two of these hide the record: `draft` is one we have started and not
     * finished, `out-of-scope` is one considered and failed against a numbered
     * criterion. Both keep a page, so a decision has somewhere to be argued
     * with, and neither is listed, counted or indexed. See lib/providers.ts —
     * the filter lives in one place so no page can forget it.
     */
    status: z.enum(vocabulary('status')).optional(),
    /** The numbered inclusion criterion an out-of-scope record failed. */
    criterion: z.number().int().min(1).max(6).optional(),
    /** Set where the failure is "we could not find it", not "it does not exist". */
    boundedSearch: z.boolean().optional(),
    editorialNote: z.string().optional(),
    ai: z.enum(vocabulary('ai')).optional(),

    // Display only — never filterable, never sortable, never counted
    figure: figure.optional(),
    caveat: caveat.optional(),

    /** Set on our own record. Renders the "published by us" marker. */
    publishedByUs: z.boolean().optional(),
  })
  /*
   * The required-field rule, which only a listed record has to satisfy. Hiding
   * a record is how an unfinished one is admitted without lowering the bar for
   * the ones on show, and an out-of-scope record has to name the criterion it
   * failed — otherwise "not listed" is an assertion rather than a decision.
   */
  .superRefine((record, ctx) => {
    const hidden = record.status === 'draft' || record.status === 'out-of-scope';

    if (!hidden && !record.category?.length) {
      ctx.addIssue({
        code: 'custom',
        path: ['category'],
        message: 'Required unless the record is draft or out-of-scope',
      });
    }

    if (record.status === 'out-of-scope' && !record.criterion) {
      ctx.addIssue({
        code: 'custom',
        path: ['criterion'],
        message: 'An out-of-scope record must name the criterion it failed',
      });
    }
  });

const providers = defineCollection({
  loader: glob({ base: 'src/content/providers', pattern: '**/*.md' }),
  schema: providerFields,
});

/**
 * An optional explainer for a facet value, keyed `<facet>/<value>` —
 * `software/wordpress.md`, `category/paas.md` — or for a whole facet, keyed
 * `<facet>` — `category.md`, which heads /categories/.
 *
 * Written only where there is something true and useful to say; a value without
 * one is still a good page, and inventing filler for every value is what the
 * sites this dataset exists to correct do for a living.
 */
const notes = defineCollection({
  loader: glob({ base: 'src/content/notes', pattern: '**/*.md' }),
  schema: z.object({
    /** The browser title. A facet's note also takes the heading; a value's does not, so page and filter agree. */
    title: z.string().optional(),
    description: z.string().max(200).optional(),
    /** The opening line, set larger than the body. `description` is for search results; this is for the reader. */
    lead: z.string().optional(),
    figure: figure.optional(),
    ai: z.enum(vocabulary('ai')).optional(),
  }),
});

export const collections = { providers, notes };
