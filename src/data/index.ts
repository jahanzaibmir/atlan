import type { Body, Category, Dimension, Site, TwinLink } from './types';

export * from './types';

// every module in ./sites exports one or more Site[] arrays
const modules = import.meta.glob<Record<string, Site[]>>('./sites/*.ts', { eager: true });
const raw: Site[] = Object.values(modules).flatMap((m) => Object.values(m).flat());

const REGION_ORDER: Record<string, number> = { India: 0, USA: 1 };
const regionRank = (s: Site) => (s.body !== 'earth' ? 0 : REGION_ORDER[s.country ?? ''] ?? 2);

export const SITES: Site[] = raw.map((s) => ({ ...s, twins: [...s.twins] }));

export const SITE_BY_ID: Record<string, Site> = Object.fromEntries(SITES.map((s) => [s.id, s]));

// Moon/Mars sites list their Earth analogs: derived from every Earth site's twin links.
for (const earth of SITES.filter((s) => s.body === 'earth')) {
  for (const t of earth.twins) {
    const target = SITE_BY_ID[t.id];
    if (!target) {
      console.warn(`[data] ${earth.id} links to unknown twin ${t.id}`);
      continue;
    }
    if (!target.twins.some((x) => x.id === earth.id)) {
      target.twins.push({ id: earth.id, match: t.match, why: t.why });
    }
  }
}
for (const s of SITES) s.twins.sort((a, b) => b.match - a.match);
SITES.sort((a, b) => regionRank(a) - regionRank(b) || (bestMatch(b) ?? 0) - (bestMatch(a) ?? 0));

export function sitesOn(body: Body): Site[] {
  return SITES.filter((s) => s.body === body);
}

export function resolveTwins(site: Site): (TwinLink & { site: Site })[] {
  return site.twins
    .map((t) => ({ ...t, site: SITE_BY_ID[t.id] }))
    .filter((t): t is TwinLink & { site: Site } => Boolean(t.site));
}

export function bestMatch(site: Site): number | undefined {
  return site.twins.length ? Math.max(...site.twins.map((t) => t.match)) : undefined;
}

export const DIMENSIONS: { key: Dimension; label: string; hint: string }[] = [
  { key: 'terrain', label: 'Terrain', hint: 'Landform morphology and scale' },
  { key: 'geology', label: 'Geology', hint: 'Rock and mineral composition, formation process' },
  { key: 'thermal', label: 'Thermal', hint: 'Temperature regime and extremes' },
  { key: 'water', label: 'Water / Ice', hint: 'State and distribution of water and ice' },
  { key: 'atmosphere', label: 'Atmosphere', hint: 'Pressure, aridity, UV and dust processes' },
  { key: 'biology', label: 'Biology', hint: 'Low-biomass and habitability conditions' },
  { key: 'subsurface', label: 'Subsurface', hint: 'Caves, lava tubes, buried ice' },
  { key: 'operations', label: 'Operations', hint: 'Value for rover, EVA, habitat and drilling rehearsal' },
];

export const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'impact', label: 'Impact' },
  { key: 'volcanic', label: 'Volcanic' },
  { key: 'lava-tube', label: 'Caves & tubes' },
  { key: 'ice', label: 'Ice & permafrost' },
  { key: 'aeolian', label: 'Dunes & dust' },
  { key: 'hydrothermal', label: 'Hydrothermal' },
  { key: 'evaporite', label: 'Salts & evaporites' },
  { key: 'sedimentary', label: 'Sedimentary' },
  { key: 'highland', label: 'Highlands' },
  { key: 'polar', label: 'Polar' },
  { key: 'habitat', label: 'Habitat ops' },
];

export function categoryLabel(c: Category): string {
  return CATEGORIES.find((x) => x.key === c)?.label ?? c;
}
