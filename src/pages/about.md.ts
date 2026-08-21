import type { APIRoute } from 'astro';
import raw from './about.md?raw';
import { markdownTwin } from '../lib/markdown-twin';

/** The about page as markdown, from the same source the page itself renders. */
export const GET: APIRoute = ({ site }) => markdownTwin(raw, `${site?.origin ?? ''}/about/`);
