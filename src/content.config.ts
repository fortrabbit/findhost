import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { parse as parseYaml } from 'yaml';
import { z } from 'zod';

/**
 * This file is a governance artifact, not a type definition.
 *
 * Four fields are required — id, name, url, category. Everything else is
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
    url: publicUrl,
    category: z.enum(['paas', 'vps', 'iaas', 'shared', 'managed-wp', 'dedicated', 'serverless', 'lcnc']),

    // Identity
    pricingUrl: publicUrl.optional(),
    statusUrl: publicUrl.optional(),
    description: z.string().max(200).optional(),
    mark: z.string().optional(),
    logo: z.string().optional(),
    founded: z.number().int().optional(),
    hqCountry: z.string().length(2).optional(),
    ownership: z.enum(['independent', 'vc-backed', 'pe-owned', 'public', 'subsidiary']).optional(),
    parent: z.string().optional(),

    // Classification
    alsoOffers: z.array(z.string()).optional(),
    whoManagesOs: z.enum(['you', 'panel-assisted', 'provider']).optional(),
    infraContract: z.enum(['owns-metal', 'resells-iaas', 'byo-iaas']).optional(),
    specialisation: z.array(z.string()).optional(),

    // Tech stack
    runtimes: z.array(z.string()).optional(),
    runtimeVersions: z.record(z.string(), z.array(z.string())).optional(),
    deployMethods: z.array(z.string()).optional(),
    sshAccess: z.enum(['full', 'limited', 'none']).optional(),
    managedDatabases: z.array(z.string()).optional(),
    persistentStorage: z.boolean().optional(),
    backupsIncluded: z.enum(['included', 'paid-addon', 'none']).optional(),
    restrictions: z.array(z.string()).optional(),

    // Pricing — bands only. This is not a price tracker.
    pricingModel: z.enum(['fixed-tier', 'per-resource', 'usage-based', 'hourly', 'credit']).optional(),
    entryPriceBand: z.enum(['free-tier', '<5', '5-15', '15-50', '50-150', '150+']).optional(),
    renewalMultiple: z.number().nullable().optional(),
    freeTier: z.enum(['permanent', 'trial', 'none']).optional(),
    contractMinimum: z.enum(['none', 'monthly', 'annual', 'multi-year']).optional(),

    // Regions
    regions: z.array(z.string().length(2)).optional(),
    runsOn: z.array(z.string()).nullable().optional(),
    gdprDpa: z.enum(['standard', 'on-request', 'unclear']).optional(),

    // Support
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
    status: z.enum(['active', 'acquired', 'discontinued']).optional(),
    editorialNote: z.string().optional(),
    ai: z.enum(['none', 'grammar', 'co-authored', 'authored']).optional(),

    // Display only — never filterable, never sortable, never counted
    figure: figure.optional(),
    caveat: caveat.optional(),

    /** Set on our own record. Renders the "published by us" marker. */
    publishedByUs: z.boolean().optional(),
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

export const collections = { providers, taxonomy };
