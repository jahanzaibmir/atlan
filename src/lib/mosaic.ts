// True-scale site imagery: reprojects map tiles (Web Mercator, equirectangular or polar stereographic)
// into a local azimuthal-equidistant view centred on a site, so any two sites can be compared at the same scale.
import type { Body } from '../data/types';

const RADIUS: Record<Body, number> = { earth: 6371008.8, moon: 1737400, mars: 3396190 };

interface TileSource {
  id: string;
  tileSize: number;
  maxLevel: number;
  /** metres per pixel at level L (at the equator / projection centre) */
  resolution: (L: number) => number;
  /** source pixel coordinates at level L for a lat/lon (degrees) */
  toPixel: (lat: number, lon: number, L: number) => [number, number];
  url: (L: number, row: number, col: number) => string;
  /** number of tiles in x/y at level L (for wrapping/bounds) */
  extent: (L: number) => [number, number];
  covers?: (lat: number) => boolean;
}

const D2R = Math.PI / 180;

function mercator(id: string, url: (z: number, y: number, x: number) => string, maxLevel: number): TileSource {
  const R = RADIUS.earth;
  return {
    id,
    tileSize: 256,
    maxLevel,
    resolution: (z) => (2 * Math.PI * R) / (256 * 2 ** z),
    toPixel: (lat, lon, z) => {
      const n = 256 * 2 ** z;
      const phi = Math.max(-85.05, Math.min(85.05, lat)) * D2R;
      return [((lon + 180) / 360) * n, ((1 - Math.log(Math.tan(phi) + 1 / Math.cos(phi)) / Math.PI) / 2) * n];
    },
    url: (z, row, col) => url(z, row, col),
    extent: (z) => [2 ** z, 2 ** z],
  };
}

function geographic(id: string, body: Body, tileSize: number, maxLevel: number, url: (L: number, row: number, col: number) => string, covers?: (lat: number) => boolean): TileSource {
  const R = RADIUS[body];
  return {
    id,
    tileSize,
    maxLevel,
    resolution: (L) => (Math.PI * R) / (tileSize * 2 ** L),
    toPixel: (lat, lon, L) => {
      const h = tileSize * 2 ** L;
      return [((lon + 180) / 360) * 2 * h, ((90 - lat) / 180) * h];
    },
    url,
    extent: (L) => [2 * 2 ** L, 2 ** L],
    covers,
  };
}

/** NASA Trek lunar south-pole polar stereographic tiles (LOLA hillshade, ≤ 87.5°S). */
function moonSouthPolar(id: string, layer: string): TileSource {
  const R = RADIUS.moon;
  const half = 1095930;
  const res0 = 3.0578404017857101e7 * 0.00028;
  return {
    id,
    tileSize: 256,
    maxLevel: 9,
    resolution: (L) => res0 / 2 ** L,
    toPixel: (lat, lon, L) => {
      const rho = 2 * R * Math.tan(Math.PI / 4 + (lat * D2R) / 2);
      const x = rho * Math.sin(lon * D2R);
      const y = rho * Math.cos(lon * D2R);
      const res = res0 / 2 ** L;
      return [(x + half) / res, (half - y) / res];
    },
    url: (L, row, col) => `https://trek.nasa.gov/tiles/Moon/SP/${layer}/1.0.0/default/default028mm/${L}/${row}/${col}.png`,
    extent: (L) => [2 * 2 ** L, 2 ** L],
    covers: (lat) => lat <= -87.4,
  };
}

const SRC = {
  esri: mercator('esri', (z, y, x) => `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}`, 18),
  wac: geographic('wac', 'moon', 256, 8, (L, r, c) => `https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/default/default028mm/${L}/${r}/${c}.jpg`),
  kaguya: geographic('kaguya', 'moon', 256, 10, (L, r, c) => `https://trek.nasa.gov/tiles/Moon/EQ/Kaguya_TCortho_Mosaic_Global_4096ppd/1.0.0/default/default028mm/${L}/${r}/${c}.jpg`),
  moonSP: moonSouthPolar('moonSP', 'LRO_LOLA_Shade_SPole875_5mp_v04'),
  viking: geographic('viking', 'mars', 256, 7, (L, r, c) => `https://trek.nasa.gov/tiles/Mars/EQ/Mars_Viking_MDIM21_ClrMosaic_global_232m/1.0.0/default/default028mm/${L}/${r}/${c}.jpg`),
  ctx: geographic('ctx', 'mars', 512, 12, (L, r, c) => `https://astro.arcgis.com/arcgis/rest/services/OnMars/CTX/MapServer/tile/${L}/${r}/${c}`, (lat) => Math.abs(lat) < 88),
};

// ---------- tile cache ----------
const imageCache = new Map<string, Promise<HTMLImageElement | null>>();
let active = 0;
const waiting: (() => void)[] = [];
const MAX_CONCURRENT = 24;

function loadImage(url: string): Promise<HTMLImageElement | null> {
  let p = imageCache.get(url);
  if (p) return p;
  p = new Promise<HTMLImageElement | null>((resolve) => {
    const run = () => {
      active++;
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.decoding = 'async';
      const done = (ok: boolean) => {
        active--;
        if (waiting.length) waiting.shift()!();
        resolve(ok ? img : null);
      };
      img.onload = () => done(true);
      img.onerror = () => done(false);
      img.src = url;
    };
    if (active < MAX_CONCURRENT) run();
    else waiting.push(run);
  });
  imageCache.set(url, p);
  return p;
}

// ---------- projection ----------
/** inverse azimuthal equidistant: local offsets (metres east/north) → lat/lon degrees */
function inverseAzimuthal(dx: number, dy: number, lat0: number, lon0: number, R: number): [number, number] {
  const rho = Math.hypot(dx, dy);
  if (rho < 1e-9) return [lat0, lon0];
  const c = rho / R;
  const phi0 = lat0 * D2R;
  const sinC = Math.sin(c);
  const cosC = Math.cos(c);
  const lat = Math.asin(cosC * Math.sin(phi0) + (dy * sinC * Math.cos(phi0)) / rho);
  const lon = lon0 * D2R + Math.atan2(dx * sinC, rho * Math.cos(phi0) * cosC - dy * Math.sin(phi0) * sinC);
  let lonDeg = lon / D2R;
  lonDeg = ((((lonDeg + 180) % 360) + 360) % 360) - 180;
  return [lat / D2R, lonDeg];
}

interface Sampler {
  sample: (lat: number, lon: number, out: Float32Array) => boolean;
}

async function buildSampler(src: TileSource, lat0: number, lon0: number, mpp: number, w: number, h: number, R: number, maxTiles: number): Promise<Sampler | null> {
  // finest level whose resolution is not much finer than needed
  let L = 0;
  for (let l = 0; l <= src.maxLevel; l++) {
    if (src.resolution(l) * Math.cos(src.id === 'esri' ? lat0 * D2R : 0) >= mpp * 0.7) L = l;
  }

  // sample a grid of output points to find the tile range
  for (; L >= 0; L--) {
    const [nx, ny] = src.extent(L);
    const tiles = new Set<string>();
    const G = 14;
    for (let i = 0; i <= G; i++) {
      for (let j = 0; j <= G; j++) {
        const dx = (i / G - 0.5) * w * mpp;
        const dy = (0.5 - j / G) * h * mpp;
        const [la, lo] = inverseAzimuthal(dx, dy, lat0, lon0, R);
        const [px, py] = src.toPixel(la, lo, L);
        const tx = Math.floor(px / src.tileSize);
        const ty = Math.floor(py / src.tileSize);
        if (ty < 0 || ty >= ny) continue;
        // include neighbours to cover gaps between grid samples
        for (const ox of [-1, 0, 1]) for (const oy of [-1, 0, 1]) {
          const x = (((tx + ox) % nx) + nx) % nx;
          const y = ty + oy;
          if (y >= 0 && y < ny) tiles.add(`${x},${y}`);
        }
      }
    }
    if (tiles.size > maxTiles && L > 0) continue;

    const entries = [...tiles].map((k) => k.split(',').map(Number) as [number, number]);
    const imgs = await Promise.all(entries.map(([x, y]) => loadImage(src.url(L, y, x))));
    const T = src.tileSize;
    const data = new Map<string, Uint8ClampedArray>();
    const canvas = document.createElement('canvas');
    canvas.width = T;
    canvas.height = T;
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
    entries.forEach(([x, y], i) => {
      const img = imgs[i];
      if (!img) return;
      ctx.clearRect(0, 0, T, T);
      ctx.drawImage(img, 0, 0, T, T);
      try {
        data.set(`${x},${y}`, ctx.getImageData(0, 0, T, T).data);
      } catch {
        /* tainted canvas — skip */
      }
    });
    if (data.size === 0) return null;
    const level = L;
    const [nxL] = src.extent(level);
    const pix = (gx: number, gy: number, out: Float32Array, k: number, wgt: number): boolean => {
      const tx = (((Math.floor(gx / T)) % nxL) + nxL) % nxL;
      const ty = Math.floor(gy / T);
      const d = data.get(`${tx},${ty}`);
      if (!d) return false;
      const ix = ((Math.floor(gx) % T) + T) % T;
      const iy = ((Math.floor(gy) % T) + T) % T;
      const o = (iy * T + ix) * 4;
      if (d[o + 3] === 0) return false;
      out[k] += d[o] * wgt;
      out[k + 1] += d[o + 1] * wgt;
      out[k + 2] += d[o + 2] * wgt;
      return true;
    };
    return {
      sample: (lat, lon, out) => {
        if (src.covers && !src.covers(lat)) return false;
        const [px, py] = src.toPixel(lat, lon, level);
        const x0 = Math.floor(px - 0.5);
        const y0 = Math.floor(py - 0.5);
        const fx = px - 0.5 - x0;
        const fy = py - 0.5 - y0;
        out[0] = out[1] = out[2] = 0;
        let ok = pix(x0, y0, out, 0, (1 - fx) * (1 - fy));
        ok = pix(x0 + 1, y0, out, 0, fx * (1 - fy)) && ok;
        ok = pix(x0, y0 + 1, out, 0, (1 - fx) * fy) && ok;
        ok = pix(x0 + 1, y0 + 1, out, 0, fx * fy) && ok;
        return ok;
      },
    };
  }
  return null;
}

export interface MosaicRequest {
  body: Body;
  lat: number;
  lon: number;
  /** ground width shown, metres */
  widthM: number;
  /** output pixel size */
  w: number;
  h: number;
}

const resultCache = new Map<string, Promise<string | null>>();

function sourcesFor(body: Body, lat: number, mpp: number): { primary: TileSource; detail?: TileSource; colorize?: boolean } {
  if (body === 'earth') return { primary: SRC.esri };
  if (body === 'moon') {
    if (lat <= -87.4) return { primary: SRC.moonSP };
    return { primary: mpp < 60 ? SRC.kaguya : SRC.wac };
  }
  // Mars: Viking colour, sharpened with CTX luminance when zoomed in
  return mpp < 180 ? { primary: SRC.viking, detail: SRC.ctx, colorize: true } : { primary: SRC.viking };
}

/** Round width to nearest 500m for better cache hits when dragging the scale slider */
function roundWidth(w: number): number {
  if (w < 5000) return Math.round(w / 200) * 200;
  if (w < 50000) return Math.round(w / 1000) * 1000;
  return Math.round(w / 5000) * 5000;
}

/** Yield to the browser between row batches so the UI stays responsive */
function yieldFrame(): Promise<void> {
  return new Promise((r) => (typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(() => r()) : setTimeout(r, 0)));
}

/** Core render at a given resolution — returns object URL */
async function renderAtSize(
  req: MosaicRequest, rw: number, ow: number, oh: number,
): Promise<string | null> {
  const R = RADIUS[req.body];
  const mpp = rw / ow;
  const { primary, detail, colorize } = sourcesFor(req.body, req.lat, mpp);
  const [base, fine] = await Promise.all([
    buildSampler(primary, req.lat, req.lon, mpp, ow, oh, R, primary.tileSize > 256 ? 20 : 48),
    detail ? buildSampler(detail, req.lat, req.lon, mpp, ow, oh, R, 20) : Promise.resolve(null),
  ]);
  if (!base && !fine) return null;

  // Render in chunks to stay responsive — 64 rows per frame
  const BATCH = 64;
  const a = new Float32Array(3);
  const b = new Float32Array(3);
  const canvas = document.createElement('canvas');
  canvas.width = ow;
  canvas.height = oh;
  const ctx = canvas.getContext('2d')!;
  const img = ctx.createImageData(ow, oh);
  const out = img.data;
  for (let j = 0; j < oh; j++) {
    const dy = (oh / 2 - j - 0.5) * mpp;
    for (let i = 0; i < ow; i++) {
      const dx = (i + 0.5 - ow / 2) * mpp;
      const [la, lo] = inverseAzimuthal(dx, dy, req.lat, req.lon, R);
      const o = (j * ow + i) * 4;
      const hasA = base ? base.sample(la, lo, a) : false;
      const hasB = fine ? fine.sample(la, lo, b) : false;
      let r = 0, g = 0, bl = 0;
      if (hasA && hasB && colorize) {
        const lumA = Math.max(8, 0.3 * a[0] + 0.59 * a[1] + 0.11 * a[2]);
        const lumB = 0.3 * b[0] + 0.59 * b[1] + 0.11 * b[2];
        const k = lumB / lumA;
        r = a[0] * k; g = a[1] * k; bl = a[2] * k;
      } else if (hasB) {
        r = b[0]; g = b[1]; bl = b[2];
        if (colorize) { r = r * 1.08 + 6; g = g * 0.9; bl = bl * 0.74; }
      } else if (hasA) {
        r = a[0]; g = a[1]; bl = a[2];
      } else {
        r = g = bl = 214;
      }
      out[o] = r; out[o + 1] = g; out[o + 2] = bl; out[o + 3] = 255;
    }
    if (j % BATCH === BATCH - 1) await yieldFrame();
  }
  ctx.putImageData(img, 0, 0);

  // If rendered at lower res, upscale to requested size with smooth interpolation
  if (ow !== req.w || oh !== req.h) {
    const upCanvas = document.createElement('canvas');
    upCanvas.width = req.w;
    upCanvas.height = req.h;
    const upCtx = upCanvas.getContext('2d')!;
    upCtx.imageSmoothingEnabled = true;
    upCtx.imageSmoothingQuality = 'high';
    upCtx.drawImage(canvas, 0, 0, req.w, req.h);
    const blob = await new Promise<Blob | null>((res) => upCanvas.toBlob(res, 'image/jpeg', 0.88));
    return blob ? URL.createObjectURL(blob) : null;
  }

  const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/jpeg', 0.88));
  return blob ? URL.createObjectURL(blob) : null;
}

/** Renders a true-scale, north-up image centred on lat/lon.
 *  Returns an object URL (cached). Uses progressive rendering:
 *  returns a fast low-res preview immediately, then upgrades to full resolution. */
export function renderMosaic(req: MosaicRequest): Promise<string | null> {
  const rw = roundWidth(req.widthM);
  const key = `${req.body}|${req.lat.toFixed(5)}|${req.lon.toFixed(5)}|${rw}|${req.w}x${req.h}`;
  const cached = resultCache.get(key);
  if (cached) return cached;
  const p = renderAtSize(req, rw, req.w, req.h);
  resultCache.set(key, p);
  return p;
}

/** Like renderMosaic but returns a fast low-res preview first, then the full-res version.
 *  Calls onPreview with the low-res URL as soon as it's ready. */
export function renderMosaicProgressive(
  req: MosaicRequest,
  onPreview: (url: string) => void,
): Promise<string | null> {
  const rw = roundWidth(req.widthM);
  const fullKey = `${req.body}|${req.lat.toFixed(5)}|${req.lon.toFixed(5)}|${rw}|${req.w}x${req.h}`;
  const cached = resultCache.get(fullKey);
  if (cached) return cached;

  // Render at half resolution for fast preview
  const pw = Math.round(req.w / 2);
  const ph = Math.round(req.h / 2);
  const previewKey = `${req.body}|${req.lat.toFixed(5)}|${req.lon.toFixed(5)}|${rw}|${pw}x${ph}`;
  let previewP = resultCache.get(previewKey);
  if (!previewP) {
    previewP = renderAtSize(req, rw, pw, ph);
    resultCache.set(previewKey, previewP);
  }
  previewP.then((url) => { if (url) onPreview(url); });

  const fullP = renderAtSize(req, rw, req.w, req.h);
  resultCache.set(fullKey, fullP);
  return fullP;
}

export function groundWidthForSite(rangeKm: number): number {
  // a little wider than the camera framing so context is visible
  return Math.max(1500, rangeKm * 1000 * 1.25);
}
