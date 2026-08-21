import type { APIRoute } from 'astro';
import raw from './guide.md?raw';
import { markdownTwin } from '../lib/markdown-twin';

/**
 * The guide as markdown. It is authored as markdown already, so the twin is the
 * source with its frontmatter lifted into a heading and the credit line added —
 * no second copy of the prose, which is the only way the two cannot drift.
 */
export const GET: APIRoute = ({ site }) => markdownTwin(raw, `${site?.origin ?? ''}/guide/`);
