import type { APIRoute } from 'astro';
import raw from './criteria.md?raw';
import { markdownTwin } from '../lib/markdown-twin';

/** The listing criteria as markdown, from the same source the page itself renders. */
export const GET: APIRoute = ({ site }) => markdownTwin(raw, `${site?.origin ?? ''}/criteria/`);
