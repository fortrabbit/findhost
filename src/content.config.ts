import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { parse as parseYaml } from 'yaml';
import { z } from 'zod';

/**
 * This file is a governance artifact, not a type definition.
 *
 * Four fields are required — id, name, urls.home, category. Everything else is
 * optional, so absent means unknown, renders as `?`, and the build stays green.
 * Nothing here may express a rank, score, boost or weight; scripts/validate.ts
 * asserts that no such field has appeared.
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

const providers = defineCollection({
  loader: glob({ base: 'src/content/providers', pattern: '**/*.md' }),
  schema: z.object({
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
      sla: publicUrl.optional(),
      docs: publicUrl.optional(),
    }),
    category: z.enum(['paas', 'vps', 'iaas', 'shared', 'serverless', 'server-management', 'vanity-hosting', 'lcnc']),

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
    runtimeVersions: z.record(z.string(), z.array(z.string())).optional(),
    deployMethods: z.array(z.string()).optional(),
    sshAccess: z.enum(['full', 'limited', 'none']).optional(),
    managedDatabases: z.array(z.string()).optional(),
    persistentStorage: z.boolean().optional(),
    backupsIncluded: z.enum(['included', 'paid-addon', 'none']).optional(),
    restrictions: z.array(z.string()).optional(),

    /*
     * Pricing — bands only. This is not a price tracker.
     *
     * entryPriceBand is the cheapest way to run one small production app with
     * every mandatory component included, which is the only reading that
     * survives per-seat licences and per-project fees charged on top.
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
     * Bands, in US dollars, because the dataset is international and the euro
     * was quietly making Europe the default reader. Rendered as coins, never as
     * a currency the reader may not use, and never coloured or sorted — a
     * six-step scale is close enough to a rating to need the guard.
     */
    entryPriceBand: z.enum(['free-tier', 'under-5', '5-15', '15-50', '50-150', '150-500', 'over-500']).optional(),
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
      })
      .optional(),
    renewalMultiple: z.number().nullable().optional(),
    freeTier: z.enum(['permanent', 'trial', 'none']).optional(),
    contractMinimum: z.enum(['none', 'monthly', 'annual', 'multi-year']).optional(),

    // Regions
    regions: z.array(z.string().length(2)).optional(),
    runsOn: z.array(z.string()).nullable().optional(),
    gdprDpa: z.enum(['standard', 'on-request', 'unclear']).optional(),

    // Environmental impact — what a provider publishes, never a judgement of it.
    // The value is the distinction: offsets, annual matching and 24/7 carbon-free
    // are three different claims that marketing routinely blurs into one.
    energyClaim: z.enum(['24-7-cfe', 'annual-matched', 'offset', 'none-published']).optional(),
    sustainabilityUrl: publicUrl.optional(),
    pue: z.number().nullable().optional(),
    certifications: z.array(z.string()).optional(),
    carbonReport: z.enum(['published', 'parent-only', 'none']).optional(),
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
     * not the ones that matter when a site is down. Whether that line costs
     * extra is supportTiering's job, not this field's.
     */
    supportChannels: z.array(z.enum(['email', 'chat', 'phone', 'forum'])).optional(),
    supportHours: z.enum(['24-7', 'business-hours', 'community-only']).optional(),
    supportTiering: z.enum(['all-plans', 'paid-upgrade', 'enterprise-only']).optional(),

    // Openness & lock-in
    dataExport: z.enum(['standard-tools', 'provider-tools', 'manual', 'none']).optional(),
    proprietaryLockIn: z.array(z.string()).optional(),

    // Automation & agent support — the axis nobody else records
    apiAvailable: z.enum(['public', 'partner-only', 'none']).optional(),
    cliTool: z.enum(['official', 'third-party', 'none']).optional(),
    mcpServer: z.enum(['official', 'community', 'none']).optional(),
    iacSupport: z.array(z.string()).optional(),
    agentReadyDocs: z.array(z.string()).optional(),

    // Meta & provenance
    checkedAt: z.coerce.date().optional(),
    sources: z.array(z.object({ field: z.string(), url: publicUrl, checkedAt: z.coerce.date() })).optional(),
    /*
     * Entries are never deleted — for a dataset published by a competitor,
     * removal is the power that has to be given up. A provider that dies or
     * leaves scope keeps its page and changes status.
     */
    status: z
      .enum(['active', 'acquired', 'renamed', 'winding-down', 'discontinued', 'unverifiable', 'delisted-on-request'])
      .optional(),
    editorialNote: z.string().optional(),
    ai: z.enum(['none', 'grammar', 'co-authored', 'authored']).optional(),

    // Display only — never filterable, never sortable, never counted
    figure: figure.optional(),
    caveat: caveat.optional(),

    /** Set on our own record. Renders the "published by us" marker. */
    publishedByUs: z.boolean().optional(),
  }),
});

/**
 * Providers that were considered and not listed, with the numbered criterion
 * they failed. Published because a scope test nobody can audit is not a scope
 * test — and because "why is my competitor listed and I am not" deserves a diff
 * rather than an argument.
 */
const rejected = defineCollection({
  loader: glob({ base: 'src/content/rejected', pattern: '**/*.md' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    url: publicUrl,
    /** The numbered inclusion criterion that failed. */
    criterion: z.number().int().min(1).max(6),
    checkedAt: z.coerce.date(),
    /** Set when the failure is "we could not find it", not "it does not exist". */
    boundedSearch: z.boolean().optional(),
    ai: z.enum(['none', 'grammar', 'co-authored', 'authored']).optional(),
  }),
});

/** The explainer that heads each category listing. */
const categories = defineCollection({
  loader: glob({ base: 'src/content/categories', pattern: '**/*.md' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().max(200).optional(),
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

export const collections = { providers, rejected, categories, guide, notes, taxonomy };
