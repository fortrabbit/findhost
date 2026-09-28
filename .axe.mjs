import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';
const axe = readFileSync(process.argv[2], 'utf8');
const pages = ['/a1-telekom-austria/', '/afrihost/', '/alibaba-cloud/', '/alphabet/', '/alwaysdata/', '/anaconda/', '/all-inkl/', '/appfog/', '/aruba-it/', '/aws/', '/antagonist/', '/bluehost/', '/bubble/', '/civo/', '/binary-lane/', '/cloudflare-workers/', '/cloudpanel/', '/cloudron/', '/cloud-in-a-bottle/', '/contabo/', '/coolify/', '/cpanel/', '/combell/', '/cyberpanel/', '/deno-land/', '/digitalocean/', '/cube-infrastructure/', '/diploi/', '/divio/', '/dokploy/', '/dinahosting/', '/dreamhost/', '/duda/', '/e2e-networks/', '/donweb/', '/exe/', '/firebase/', '/exabytes/', '/fly/', '/gcp/', '/', '/hetzner/', '/fortrabbit/', '/software/kirby/', '/categories/', '/regions/', '/regions/germany/', '/runtimes/php/regions/', '/about/', '/guide/', '/search/?q=php', '/categories/iaas/', '/categories/vanity-hosting/', '/categories/shared-hosting/', '/reach/', '/dbaas/', '/added/', '/badge/', '/stubs/', '/404.html', '/for-providers/'];
const b = await chromium.launch();
const out = {};
for (const scheme of ['light', 'dark']) for (const w of [1280, 375]) {
  const ctx = await b.newContext({ colorScheme: scheme, viewport: { width: w, height: 900 } });
  const p = await ctx.newPage();
  for (const path of pages) {
    await p.goto('http://localhost:4399' + path, { waitUntil: 'networkidle' });
    await p.addScriptTag({ content: axe });
    const r = await p.evaluate(() => axe.run(document, { runOnly: ['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice'] }));
    for (const v of r.violations) {
      const k = `${v.id} [${v.impact}] ${v.help}`;
      out[k] ??= { pages: new Set(), modes: new Set(), nodes: [] };
      out[k].pages.add(path); out[k].modes.add(`${scheme}/${w}`);
      for (const n of v.nodes.slice(0, 3)) if (out[k].nodes.length < 6) out[k].nodes.push(`${path}: ${n.target.join(' ')} — ${(n.failureSummary||'').split('\n').slice(1,2).join(' ').slice(0,200)}`);
    }
  }
  await ctx.close();
}
await b.close();
for (const [k, v] of Object.entries(out)) { console.log('\n## ' + k + '\n pages: ' + [...v.pages].join(' ') + '\n modes: ' + [...v.modes].join(' ')); v.nodes.forEach(n => console.log('  - ' + n)); }
if (!Object.keys(out).length) console.log('no violations');
