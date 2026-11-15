import type { Body } from './types';

export interface PlanetProfile {
  body: Body;
  name: string;
  gravity: number; // m/s²
  gravityRel: string;
  pressure: string;
  pressureKPa: number;
  atmosphere: string;
  dayLength: string;
  radiusKm: number;
  tempRange: string;
  signalDelay: string;
  magnetosphere: string;
}

export const PLANETS: Record<Body, PlanetProfile> = {
  earth: {
    body: 'earth',
    name: 'Earth',
    gravity: 9.81,
    gravityRel: '1 g',
    pressure: '1013 hPa',
    pressureKPa: 101.3,
    atmosphere: '78% N₂ · 21% O₂',
    dayLength: '24 h',
    radiusKm: 6371,
    tempRange: '−89 °C to +57 °C (air, recorded)',
    signalDelay: '—',
    magnetosphere: 'Global dipole field',
  },
  moon: {
    body: 'moon',
    name: 'Moon',
    gravity: 1.62,
    gravityRel: '0.17 g',
    pressure: '~3 × 10⁻¹⁵ bar (exosphere)',
    pressureKPa: 0,
    atmosphere: 'None (tenuous exosphere)',
    dayLength: '29.5 Earth days',
    radiusKm: 1737.4,
    tempRange: '−173 °C to +127 °C (equator); below −240 °C in polar shadow',
    signalDelay: '~1.3 s one-way',
    magnetosphere: 'None (local crustal anomalies)',
  },
  mars: {
    body: 'mars',
    name: 'Mars',
    gravity: 3.71,
    gravityRel: '0.38 g',
    pressure: '~6 hPa (varies 4–12 hPa)',
    pressureKPa: 0.61,
    atmosphere: '95% CO₂ · 2.8% N₂ · 2% Ar',
    dayLength: '24 h 39 min (sol)',
    radiusKm: 3389.5,
    tempRange: '−125 °C to +20 °C (surface)',
    signalDelay: '3–22 min one-way',
    magnetosphere: 'None (remnant crustal fields)',
  },
};

export const BODY_LABEL: Record<Body, string> = {
  earth: 'Earth',
  moon: 'Moon',
  mars: 'Mars',
};
