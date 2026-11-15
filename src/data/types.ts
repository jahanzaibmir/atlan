export type Body = 'earth' | 'moon' | 'mars';

export type Category =
  | 'impact'
  | 'volcanic'
  | 'lava-tube'
  | 'ice'
  | 'aeolian'
  | 'hydrothermal'
  | 'evaporite'
  | 'sedimentary'
  | 'highland'
  | 'polar'
  | 'habitat';

/** Analog dimensions, scored 0–100 for an Earth site against its primary twin. */
export type Dimension =
  | 'terrain'
  | 'geology'
  | 'thermal'
  | 'water'
  | 'atmosphere'
  | 'biology'
  | 'subsurface'
  | 'operations';

export interface Fact {
  label: string;
  value: string;
  note?: string;
}

export interface SourceRef {
  name: string;
  agency: string;
  url?: string;
  kind?: 'dataset' | 'paper' | 'mission' | 'web';
}

export interface TwinLink {
  /** id of a site on another body */
  id: string;
  /** 0–100 overall analog strength for this pairing */
  match: number;
  /** one sentence naming the specific shared feature or process */
  why: string;
}

export interface Site {
  id: string;
  body: Body;
  name: string;
  /** short line under the name, e.g. "Impact crater · Arizona, USA" */
  subtitle: string;
  /** state / province (Earth) or quadrangle / region (Moon, Mars) */
  region: string;
  /** Earth only */
  country?: string;
  /** decimal degrees, east-positive longitude (planetocentric for Moon/Mars) */
  lat: number;
  lon: number;
  /** Earth: metres above sea level. Moon/Mars: metres relative to the body's datum */
  elevation_m?: number;
  categories: Category[];
  /** Earth only. anchor = established analog with literature; candidate = under-recognized / proposed */
  tier?: 'anchor' | 'candidate';
  /** camera framing when the site is selected */
  view: { range_km: number; pitch_deg?: number; heading_deg?: number };
  /** 2–3 sentences */
  summary: string;
  /** 3–5 short facts, each ≤ 12 words */
  highlights: string[];
  /** Earth → Moon/Mars twins (first one is the primary twin). Moon/Mars sites leave this empty; reverse links are derived. */
  twins: TwinLink[];
  /** Earth only: per-dimension match (0–100) against twins[0] */
  scores?: Record<Dimension, number>;
  /** Earth: why it is analogous. Moon/Mars: why it matters as an exploration target */
  analogous: string[];
  /** Earth: where the analogy breaks down. Moon/Mars: what no Earth site can reproduce here */
  breaks: string[];
  /** Earth: what to rehearse / test here. Moon/Mars: key open exploration questions */
  rehearse: string[];
  geology: {
    setting: string;
    rocks: string;
    minerals?: string;
    age?: string;
    features?: string;
  };
  /** Site facts with units. Earth sites: physical facts only (size, depth, salinity, pH…) — climate comes from NASA POWER at build time */
  environment: Fact[];
  /** Earth: analog campaigns and studies. Moon/Mars: missions and their status */
  missions: string[];
  /** Earth only */
  access?: { nearest: string; season: string; notes?: string };
  sources: SourceRef[];
}
