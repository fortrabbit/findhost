import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { parse as parseYaml } from 'yaml';
import { z } from 'zod';

/**
 * This file is a governance artifact, not a type definition.
 *
 * Four fields are required of a listed record — id, name, urls.home, category.
 * Everything else is optional, so absent means unknown, renders as `?`, and the
 * build stays green. Nothing here may express a rank, score, boost or weight;
 * scripts/validate.ts asserts that no such field has appeared.
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
    /* Required of a listed record — see the superRefine below. A hidden one is allowed to be a stub. */
    category: z
      .enum(['paas', 'vps', 'iaas', 'shared', 'serverless', 'server-management', 'vanity-hosting', 'lcnc'])
      .optional(),

    // Identity
    description: z.string().max(200).optional(),
    mark: z.string().optional(),
    logo: z.string().optional(),
    founded: z.number().int().optional(),
    hqCountry: z.string().length(2).optional(),
    ownership: z.enum(['independent', 'vc-backed', 'pe-owned', 'public', 'subsidiary']).optional(),
    parent: z.string().optional(),

    // Classification
    alsoOffers: z.array(z.string()).optional(),
    whoManagesOs: z.enum(['you', 'panel-assisted', 'provider', 'container']).optional(),
    /*
     * More than one can be true at once: Laravel Forge provisions onto your own
     * cloud account *and* resells its own VPS, and panels are increasingly doing
     * both. Absent still means unknown — a provider that sells no infrastructure
     * at all is already saying so through `category: server-management`.
     */
    infraContract: z.array(z.enum(['owns-metal', 'resells-iaas', 'byo-iaas'])).optional(),
    specialisation: z.array(z.string()).optional(),
    /** What a provider positions itself for, in its own words — not our verdict on fit. */
    useCases: z.array(z.string()).optional(),
    /** Who the provider sells to, in its own words. Separate from what it is used for. */
    audience: z.array(z.string()).optional(),
    /**
     * Named software the provider documents support for. Most people search for
     * "WordPress hosting", not "PHP hosting" — the runtime is the precise
     * question and the software is the one people actually ask.
     */
    software: z.array(z.string()).optional(),

    // Tech stack
    runtimes: z.array(z.string()).optional(),
    deployMethods: z.array(z.string()).optional(),
    sshAccess: z.enum(['full', 'limited', 'none']).optional(),
    managedDatabases: z.array(z.string()).optional(),
    persistentStorage: z.boolean().optional(),
    backupsIncluded: z.enum(['included', 'paid-addon', 'none']).optional(),

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
    pricingModel: z
      .enum([
        'fixed-tier',
        'plan-plus-overage',
        'per-resource',
        'usage-based',
        'hourly',
        'credit',
        'per-server-licence',
      ])
      .optional(),
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
     * introductory one. `priceTo` is where a typical serious deployment lands,
     * not the largest invoice the provider could theoretically issue.
     *
     * A free tier is not on this scale. `freeTier` records it, because free
     * describes what a provider gives away and this describes what it charges.
     */
    priceFrom: z.enum(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']).optional(),
    priceTo: z.enum(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']).optional(),

    /*
     * How the bill arrives, which is where the unpleasant surprises live. None
     * of it is a price, so none of it rots the way a figure does.
     */
    currencies: z.array(z.string().length(3)).optional(),
    billingPeriods: z.array(z.enum(['hourly', 'daily', 'monthly', 'yearly', 'multi-year'])).optional(),
    /** Paid before the month or after it. Arrears means usage you have already run up. */
    billingTiming: z.enum(['advance', 'arrears']).optional(),
    cancellation: z.enum(['anytime', 'end-of-month', 'end-of-term', 'notice-period']).optional(),
    /*
     * The exact starting figure in the provider's own currency, shown beside the
     * coins so nobody reads a conversion we invented. One number with a date,
     * not a series — this is not a price tracker.
     */
    entryPrice: z
      .object({
        amount: z.number(),
        currency: z.string().length(3),
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
    freeTier: z.enum(['permanent', 'trial', 'none']).optional(),
    contractMinimum: z.enum(['none', 'monthly', 'annual', 'multi-year']).optional(),

    /*
     * Regions. Absent means unknown; `null` means the question does not apply —
     * a control panel that provisions onto your own cloud account operates no
     * regions of its own, and counting it as missing data makes every "N records
     * do not say" line on the map wrong.
     */
    regions: z.array(z.string().length(2)).nullable().optional(),
    runsOn: z.array(z.string()).nullable().optional(),
    gdprDpa: z.enum(['standard', 'on-request', 'unclear']).optional(),

    /*
     * Environmental impact — what a provider publishes, never a judgement of it.
     * The value is the distinction: offsets, annual matching and 24/7 carbon-free
     * are three different claims that marketing routinely blurs into one.
     *
     * `grid-mix-disclosed` is for a published supply mix rather than a claim
     * about it — o2switch prints "~94% décarbonée, ~6% carbonée (2019)", which
     * is more information than most and fits none of the other values.
     */
    energyClaim: z.enum(['24-7-cfe', 'annual-matched', 'offset', 'grid-mix-disclosed', 'none-published']).optional(),
    sustainabilityUrl: publicUrl.optional(),
    certifications: z.array(z.string()).optional(),
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
    supportChannels: z.array(z.enum(['email', 'chat', 'phone', 'forum'])).optional(),
    supportHours: z.enum(['24-7', 'business-hours', 'community-only']).optional(),
    supportTiering: z.enum(['all-plans', 'paid-upgrade', 'enterprise-only']).optional(),

    // Automation & agent support — the axis nobody else records
    apiAvailable: z.enum(['public', 'partner-only', 'none']).optional(),
    cliTool: z.enum(['official', 'third-party', 'none']).optional(),
    mcpServer: z.enum(['official', 'community', 'none']).optional(),
    iacSupport: z.array(z.string()).optional(),

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
    status: z
      .enum([
        'active',
        'acquired',
        'renamed',
        'winding-down',
        'discontinued',
        'unverifiable',
        'delisted-on-request',
        'draft',
        'out-of-scope',
      ])
      .optional(),
    /** The numbered inclusion criterion an out-of-scope record failed. */
    criterion: z.number().int().min(1).max(6).optional(),
    /** Set where the failure is "we could not find it", not "it does not exist". */
    boundedSearch: z.boolean().optional(),
    editorialNote: z.string().optional(),
    ai: z.enum(['none', 'grammar', 'co-authored', 'authored']).optional(),

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

    if (!hidden && !record.category) {
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

/** The explainer that heads each category listing. */
const categories = defineCollection({
  loader: glob({ base: 'src/content/categories', pattern: '**/*.md' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().max(200).optional(),
    lead: z.string().optional(),
    figure: figure.optional(),
    ai: z.enum(['none', 'grammar', 'co-authored', 'authored']).optional(),
  }),
});

/**
 * An optional explainer for a single facet value, keyed `<facet>/<value>` —
 * `software/wordpress.md`, `runtimes/go.md`. Written only where there is
 * something true and useful to say; a page without one is still a good page,
 * and inventing filler for every value is what the sites this dataset exists to
 * correct do for a living.
 */
const notes = defineCollection({
  loader: glob({ base: 'src/content/notes', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().optional(),
    ai: z.enum(['none', 'grammar', 'co-authored', 'authored']).optional(),
  }),
});

/** The cross-cutting explainers. Openly editorial, and structurally unable to name a winner. */
const guide = defineCollection({
  loader: glob({ base: 'src/content/guide', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200).optional(),
    /** The opening line, set larger than the body. `description` is for search results; this is for the reader. */
    lead: z.string().optional(),
    order: z.number().int().default(50),
    figure: figure.optional(),
    ai: z.enum(['none', 'grammar', 'co-authored', 'authored']).optional(),
  }),
});

/** Facet definitions are data, so adding an eleventh facet touches no TypeScript. */
const taxonomy = defineCollection({
  loader: file('src/data/taxonomy.yml', { parser: (text) => parseYaml(text) }),
  schema: z.object({
    id: z.string(),
    label: z.string(),
    field: z.string(),
    multiple: z.boolean().default(false),
    values: z.array(z.object({ id: z.string(), label: z.string() })),
  }),
});

export const collections = { providers, categories, guide, notes, taxonomy };
