export function fmtLat(lat: number, digits = 4): string {
  return `${Math.abs(lat).toFixed(digits)}° ${lat >= 0 ? 'N' : 'S'}`;
}

export function fmtLon(lon: number, digits = 4): string {
  return `${Math.abs(lon).toFixed(digits)}° ${lon >= 0 ? 'E' : 'W'}`;
}

export function fmtCoords(lat: number, lon: number, digits = 4): string {
  return `${fmtLat(lat, digits)}, ${fmtLon(lon, digits)}`;
}

export function fmtDistance(m: number): string {
  if (m >= 100_000) return `${Math.round(m / 1000).toLocaleString()} km`;
  if (m >= 1000) return `${(m / 1000).toFixed(m >= 10_000 ? 0 : 1)} km`;
  return `${Math.round(m)} m`;
}

export function fmtAltitude(m: number): string {
  if (m >= 1_000_000) return `${(m / 1000).toLocaleString(undefined, { maximumFractionDigits: 0 })} km`;
  if (m >= 10_000) return `${(m / 1000).toFixed(1)} km`;
  return `${Math.round(m).toLocaleString()} m`;
}

export function fmtElevation(m: number | undefined): string {
  if (m == null) return '—';
  return `${m >= 0 ? '' : '−'}${Math.abs(Math.round(m)).toLocaleString()} m`;
}

/** a "nice" scale-bar length (1, 2, 5 × 10ⁿ metres) not longer than maxM */
export function niceLength(maxM: number): number {
  const p = 10 ** Math.floor(Math.log10(maxM));
  for (const k of [5, 2, 1]) if (k * p <= maxM) return k * p;
  return p;
}

export function round(n: number, d = 1): string {
  return n.toFixed(d).replace(/\.0+$/, '');
}
