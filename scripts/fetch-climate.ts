// Fetches NASA POWER 2001–2025 climatology for every Earth site and caches it in src/data/climate.json.
// Run: node scripts/fetch-climate.ts   (Node ≥ 23 strips TypeScript types natively)
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outPath = join(root, 'src/data/climate.json');

const PARAMS = [
  'T2M',
  'T2M_MAX',
  'T2M_MIN',
  'T2M_RANGE',
  'TS',
  'PRECTOTCORR',
  'ALLSKY_SFC_SW_DWN',
  'ALLSKY_SFC_UV_INDEX',
  'RH2M',
  'WS2M',
  'PS',
  'FROST_DAYS',
];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

type Climate = {
  monthly: Record<string, number[]>;
  annual: Record<string, number>;
  grid: { lat: number; lon: number };
};

const force = process.argv.includes('--force');
const cache: Record<string, Climate> = existsSync(outPath) ? JSON.parse(readFileSync(outPath, 'utf8')) : {};
type SiteLike = { id: string; body: string; lat: number; lon: number };
const sitesDir = join(root, 'src/data/sites');
const sites: SiteLike[] = [];
for (const f of readdirSync(sitesDir).filter((f) => f.endsWith('.ts'))) {
  const mod = await import(pathToFileURL(join(sitesDir, f)).href);
  for (const v of Object.values(mod)) if (Array.isArray(v)) sites.push(...(v as SiteLike[]).filter((s) => s.body === 'earth'));
}

async function fetchOne(lat: number, lon: number): Promise<Climate> {
  const url =
    `https://power.larc.nasa.gov/api/temporal/climatology/point?parameters=${PARAMS.join(',')}` +
    `&community=RE&longitude=${lon.toFixed(4)}&latitude=${lat.toFixed(4)}&format=JSON`;
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      const p = json.properties.parameter as Record<string, Record<string, number>>;
      const monthly: Record<string, number[]> = {};
      const annual: Record<string, number> = {};
      for (const key of PARAMS) {
        if (!p[key]) continue;
        monthly[key] = MONTHS.map((m) => p[key][m]);
        annual[key] = p[key].ANN;
      }
      const [gLon, gLat] = json.geometry.coordinates as number[];
      return { monthly, annual, grid: { lat: gLat, lon: gLon } };
    }
    await new Promise((r) => setTimeout(r, 1500 * attempt));
  }
  throw new Error(`POWER request failed for ${lat},${lon}`);
}

let done = 0;
const queue = sites.filter((s) => force || !cache[s.id]);
async function worker() {
  while (queue.length) {
    const s = queue.shift()!;
    try {
      cache[s.id] = await fetchOne(s.lat, s.lon);
      console.log(`✓ ${s.id}`);
    } catch (e) {
      console.error(`✗ ${s.id}: ${(e as Error).message}`);
    }
    done++;
  }
}
await Promise.all([worker(), worker(), worker()]);

// keep only ids that still exist
const ids = new Set(sites.map((s) => s.id));
for (const k of Object.keys(cache)) if (!ids.has(k)) delete cache[k];
writeFileSync(outPath, JSON.stringify(cache));
console.log(`climate.json: ${Object.keys(cache).length} sites (${done} fetched)`);
