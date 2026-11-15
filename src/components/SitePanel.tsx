import { useEffect, useMemo, useRef, useState } from 'react';
import { X, Copy, Check, Navigation, Columns2, ExternalLink, CircleCheck, CircleX, ArrowUpRight, Locate, GripVertical } from 'lucide-react';
import type { Dimension, Site } from '../data/types';
import { DIMENSIONS, resolveTwins, SITE_BY_ID, categoryLabel } from '../data';
import { PLANETS, BODY_LABEL } from '../data/planets';
import { climateFor, type Climate } from '../data/climate';
import { fmtCoords, fmtElevation, fmtDistance, niceLength } from '../lib/format';
import { useMosaic } from './useMosaic';
import { Ring, Radar, ClimateChart, MonthlyBars, ThermalEnvelope, type EnvelopeRow } from './charts';

interface Props {
  site: Site | null;
  onClose: () => void;
  onGo: (id: string) => void;
  onFly: (id: string) => void;
  onCompare: (a: string, b: string) => void;
}

type Tab = 'overview' | 'analog' | 'environment' | 'field' | 'science' | 'sources';

const DAYS = [31, 28.25, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const BODY_TEMPS: Record<string, EnvelopeRow[]> = {
  moon: [
    { label: 'Moon · equator', min: -173, max: 127, color: '#8b9097', note: 'Diviner day/night range' },
    { label: 'Moon · polar shadow', min: -248, max: -200, color: '#5b6068', note: 'Permanently shadowed regions' },
  ],
  mars: [{ label: 'Mars · surface', min: -125, max: 20, color: '#c0532c', note: 'Typical surface range' }],
};
const EARTH_RECORD: EnvelopeRow = { label: 'Earth · record air', min: -89.2, max: 56.7, color: '#b8bfc9', note: 'Vostok / Death Valley' };

export default function SitePanel({ site, onClose, onGo, onFly, onCompare }: Props) {
  const [shown, setShown] = useState<Site | null>(site);
  const [tab, setTab] = useState<Tab>('overview');
  const scrollRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (site) {
      setShown(site);
      setTab('overview');
      scrollRef.current?.scrollTo({ top: 0 });
    }
  }, [site?.id]);

  const onResizeStart = (e: React.PointerEvent) => {
    e.preventDefault();
    const panel = panelRef.current;
    if (!panel) return;
    const startX = e.clientX;
    const startW = panel.offsetWidth;
    const onMove = (ev: PointerEvent) => {
      const dx = startX - ev.clientX;
      const next = Math.min(Math.max(startW + dx, 380), 800);
      panel.style.width = `${next}px`;
    };
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  const s = shown;
  const isEarth = s?.body === 'earth';
  const tabs: { key: Tab; label: string }[] = isEarth
    ? [
        { key: 'overview', label: 'Overview' },
        { key: 'analog', label: 'Analog' },
        { key: 'environment', label: 'Climate' },
        { key: 'field', label: 'Field' },
        { key: 'sources', label: 'Sources' },
      ]
    : [
        { key: 'overview', label: 'Overview' },
        { key: 'science', label: 'Science' },
        { key: 'environment', label: 'Environ.' },
        { key: 'sources', label: 'Sources' },
      ];

  return (
    <aside ref={panelRef} className={`panel glass-strong${site ? ' open' : ''}`} aria-hidden={!site}>
      <div className="panel-resize" onPointerDown={onResizeStart}>
        <GripVertical size={14} />
      </div>
      {s && (
        <div className="panel-scroll" ref={scrollRef}>
          <Hero site={s} onClose={onClose} />
          <div className="panel-head">
            <h1 className="panel-title">{s.name}</h1>
            <div className="panel-sub">{s.subtitle}</div>
            <Coords site={s} />
            <div className="panel-actions">
              <button className="btn primary" onClick={() => onFly(s.id)}>
                <Navigation size={14} /> Fly here
              </button>
              {s.twins[0] && (
                <button className="btn accent" onClick={() => onCompare(isEarth ? s.id : s.twins[0].id, isEarth ? s.twins[0].id : s.id)}>
                  <Columns2 size={14} /> Compare
                </button>
              )}
              {!isEarth && (
                <a className="btn ghost" href={externalLink(s)} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'var(--text-1)' }}>
                  <ExternalLink size={14} /> NASA Trek
                </a>
              )}
            </div>
          </div>
          <nav className="tabs">
            {tabs.map((t) => (
              <button key={t.key} className={`tab${tab === t.key ? ' on' : ''}`} onClick={() => setTab(t.key)}>
                {t.label}
              </button>
            ))}
          </nav>
          {tab === 'overview' && <Overview site={s} onGo={onGo} />}
          {tab === 'analog' && isEarth && <AnalogTab site={s} onGo={onGo} />}
          {tab === 'science' && !isEarth && <ScienceTab site={s} />}
          {tab === 'environment' && (isEarth ? <EarthEnvironment site={s} /> : <PlanetEnvironment site={s} />)}
          {tab === 'field' && isEarth && <FieldGuide site={s} />}
          {tab === 'sources' && <Sources site={s} />}
        </div>
      )}
    </aside>
  );
}

function externalLink(s: Site): string {
  if (s.body === 'earth') {
    const d = Math.round(s.view.range_km * 1000 * 1.6);
    return `https://earth.google.com/web/@${s.lat},${s.lon},${Math.max(0, s.elevation_m ?? 0)}a,${d}d,35y,0h,45t,0r`;
  }
  return `https://trek.nasa.gov/${s.body}/`;
}

function Hero({ site, onClose }: { site: Site; onClose: () => void }) {
  const W = 904;
  const H = 432;
  const { url, widthM } = useMosaic(site, W, H);
  const mpp = widthM / W;
  const barM = niceLength(mpp * 140 * 2);
  const barPx = barM / mpp / 2;
  return (
    <div className="hero" style={{ backgroundImage: url ? `url(${url})` : undefined }}>
      <div className="hero-top">
        <div className="hero-badges">
          <span className={`tag ${site.body}`}>
            <span className="dot" />
            {BODY_LABEL[site.body]}
          </span>
          {site.tier && <span className={`tag ${site.tier}`}>{site.tier === 'anchor' ? 'Established analog' : 'Proposed analog'}</span>}
        </div>
        <button className="icon-btn" onClick={onClose} aria-label="Close">
          <X size={17} />
        </button>
      </div>
      <div className="hero-bottom">
        <div className="scalebar">
          <span>{fmtDistance(barM)}</span>
          <i style={{ width: barPx }} />
        </div>
        <span>{imageCredit(site)}</span>
      </div>
    </div>
  );
}

function imageCredit(s: Site): string {
  if (s.body === 'earth') return 'Esri · Maxar';
  if (s.body === 'moon') return s.lat <= -87.4 ? 'NASA LRO LOLA' : 'NASA LRO · JAXA Kaguya';
  return 'NASA Viking · MRO CTX';
}

function Coords({ site }: { site: Site }) {
  const [copied, setCopied] = useState(false);
  const text = `${site.lat.toFixed(5)}, ${site.lon.toFixed(5)}`;
  return (
    <div className="coords">
      <Locate size={13} />
      <span>{fmtCoords(site.lat, site.lon)}</span>
      {site.elevation_m != null && <span>· {fmtElevation(site.elevation_m)}</span>}
      <button
        onClick={() => {
          navigator.clipboard?.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1400);
        }}
        title="Copy coordinates"
      >
        {copied ? <Check size={12} /> : <Copy size={12} />} {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}

function TwinRow({ twin, onGo }: { twin: ReturnType<typeof resolveTwins>[number]; onGo: (id: string) => void }) {
  const { url, ref } = useMosaic(twin.site, 152, 152, undefined, true);
  return (
    <button className="twin" onClick={() => onGo(twin.site.id)} ref={ref as React.RefObject<HTMLButtonElement>}>
      <span className="twin-img" style={{ backgroundImage: url ? `url(${url})` : undefined }} />
      <span className="twin-body">
        <span className="twin-name">
          {twin.site.name}
          <ArrowUpRight size={13} color="var(--text-3)" />
        </span>
        <span className={`tag ${twin.site.body}`} style={{ alignSelf: 'flex-start' }}>
          <span className="dot" />
          {BODY_LABEL[twin.site.body]} · {twin.site.region}
        </span>
        <span className="twin-why">{twin.why}</span>
        <span className="twin-foot">
          <span className="meter">
            <i style={{ width: `${twin.match}%` }} />
          </span>
          <span className="meter-val">{twin.match}</span>
        </span>
      </span>
    </button>
  );
}

function Overview({ site, onGo }: { site: Site; onGo: (id: string) => void }) {
  const twins = resolveTwins(site);
  return (
    <>
      <div className="section">
        <p className="lead">{site.summary}</p>
        <ul className="highlights">
          {site.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 14 }}>
          {site.categories.map((c) => (
            <span key={c} className="tag">
              {categoryLabel(c)}
            </span>
          ))}
        </div>
      </div>
      <div className="section">
        <h3>
          {site.body === 'earth' ? 'Planetary twins' : 'Earth analogs'}
          <span className="hint">{site.body === 'earth' ? 'match score 0–100' : `${twins.length} linked sites`}</span>
        </h3>
        {twins.length ? twins.map((t) => <TwinRow key={t.id} twin={t} onGo={onGo} />) : <div className="empty-note">No linked sites yet.</div>}
      </div>
    </>
  );
}

function describeScores(scores: Record<Dimension, number>) {
  const sorted = DIMENSIONS.map((d) => ({ ...d, v: scores[d.key] })).sort((a, b) => b.v - a.v);
  return { top: sorted.slice(0, 2), bottom: sorted.slice(-2).reverse() };
}

function AnalogTab({ site, onGo }: { site: Site; onGo: (id: string) => void }) {
  const twin = site.twins[0] ? SITE_BY_ID[site.twins[0].id] : undefined;
  const climate = climateFor(site.id);
  const scores = site.scores;
  const desc = scores ? describeScores(scores) : null;
  return (
    <>
      {scores && twin && (
        <div className="section">
          <h3>
            Match against primary twin
            <span className="hint">curated rubric · see Method</span>
          </h3>
          <div className="score-hero">
            <Ring value={site.twins[0].match} />
            <div className="score-copy">
              <div className="t">
                <button onClick={() => onGo(twin.id)} style={{ fontWeight: 620, textDecoration: 'underline', textDecorationColor: 'var(--hairline-strong)', textUnderlineOffset: 3 }}>
                  {twin.name}
                </button>{' '}
                · {BODY_LABEL[twin.body]}
              </div>
              {desc && (
                <div className="d">
                  Strongest on <b>{desc.top.map((d) => d.label.toLowerCase()).join(' and ')}</b>; weakest on <b>{desc.bottom.map((d) => d.label.toLowerCase()).join(' and ')}</b>.
                </div>
              )}
            </div>
          </div>
          <div className="chart-box" style={{ marginTop: 6 }}>
            <Radar axes={DIMENSIONS.map((d) => ({ label: d.label, value: scores[d.key], hint: d.hint }))} />
          </div>
        </div>
      )}
      <div className="section">
        <h3>Why it is analogous</h3>
        <ul className="bullets good">
          {site.analogous.map((a) => (
            <li key={a}>
              <span className="ic">
                <CircleCheck size={13} />
              </span>
              {a}
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h3>Where the analogy breaks down</h3>
        <ul className="bullets bad">
          {site.breaks.map((a) => (
            <li key={a}>
              <span className="ic">
                <CircleX size={13} />
              </span>
              {a}
            </li>
          ))}
        </ul>
      </div>
      {twin && (
        <div className="section">
          <h3>
            Here vs {twin.name}
            <span className="hint">conditions no site can fake</span>
          </h3>
          <EarthVsTwin site={site} twin={twin} climate={climate} />
        </div>
      )}
    </>
  );
}

export function EarthVsTwin({ site, twin, climate }: { site: Site; twin: Site; climate?: Climate }) {
  const p = PLANETS[twin.body];
  const ps = climate?.annual.PS;
  const tmin = climate?.annual.T2M_MIN;
  const tmax = climate?.annual.T2M_MAX;
  const rows: [string, string, string][] = [
    ['Gravity', '1 g · 9.81 m/s²', `${p.gravityRel} · ${p.gravity} m/s²`],
    ['Surface pressure', ps != null ? `${ps.toFixed(1)} kPa` : '~101 kPa', p.pressure],
    ['Air temperature', tmin != null && tmax != null ? `${tmin.toFixed(0)} to ${tmax.toFixed(0)} °C` : '—', p.tempRange],
    ['Atmosphere', '78% N₂ · 21% O₂', p.atmosphere],
    ['Day length', '24 h', p.dayLength],
    ['Radiation shield', 'Magnetosphere + thick air', p.magnetosphere],
    ['Signal delay', 'Real time', p.signalDelay],
  ];
  return (
    <table className="cmp-table">
      <thead>
        <tr>
          <th />
          <th>{site.name.length > 22 ? 'This site' : site.name}</th>
          <th>{BODY_LABEL[twin.body]}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([k, a, b]) => (
          <tr key={k}>
            <td>{k}</td>
            <td>{a}</td>
            <td>{b}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function EarthEnvironment({ site }: { site: Site }) {
  const c = climateFor(site.id);
  const twin = site.twins[0] ? SITE_BY_ID[site.twins[0].id] : undefined;
  const precipYear = c ? c.monthly.PRECTOTCORR?.reduce((a, v, i) => a + v * DAYS[i], 0) : undefined;
  const envelope = useMemo<EnvelopeRow[]>(() => {
    const rows: EnvelopeRow[] = [];
    if (c) rows.push({ label: 'This site', min: c.annual.T2M_MIN, max: c.annual.T2M_MAX, color: '#2552e8', note: 'NASA POWER 2001–2025' });
    rows.push(EARTH_RECORD);
    if (twin) rows.push(...(BODY_TEMPS[twin.body] ?? []));
    return rows;
  }, [c, twin]);

  return (
    <>
      {c ? (
        <>
          <div className="section">
            <h3>
              Climate at a glance
              <span className="hint">NASA POWER · 2001–2025</span>
            </h3>
            <div className="kpis">
              <Kpi l="Mean air temp" v={c.annual.T2M.toFixed(1)} u="°C" />
              <Kpi l="Extreme low" v={c.annual.T2M_MIN.toFixed(0)} u="°C" />
              <Kpi l="Extreme high" v={c.annual.T2M_MAX.toFixed(0)} u="°C" />
              <Kpi l="Daily swing" v={c.annual.T2M_RANGE?.toFixed(1) ?? '—'} u="°C" />
              <Kpi l="Precipitation" v={precipYear != null ? Math.round(precipYear).toLocaleString() : '—'} u="mm/yr" />
              <Kpi l="Pressure" v={c.annual.PS.toFixed(1)} u="kPa" n={`${Math.round(c.annual.PS / PLANETS.mars.pressureKPa)}× Mars`} />
              <Kpi l="Sunlight" v={c.annual.ALLSKY_SFC_SW_DWN?.toFixed(1) ?? '—'} u="kWh/m²/d" />
              <Kpi l="Humidity" v={c.annual.RH2M?.toFixed(0) ?? '—'} u="%" />
              <Kpi l="Frost days" v={c.annual.FROST_DAYS != null ? Math.round(c.annual.FROST_DAYS * 12).toString() : '—'} u="/yr" />
            </div>
          </div>
          <div className="section">
            <h3>
              Monthly air temperature
              <span className="hint">mean · extremes</span>
            </h3>
            <div className="chart-box">
              <ClimateChart mean={c.monthly.T2M} max={c.monthly.T2M_MAX} min={c.monthly.T2M_MIN} />
            </div>
            <div className="legend-row">
              <span>
                <i style={{ background: 'var(--ink)' }} />
                Monthly mean
              </span>
              <span>
                <i style={{ background: 'rgba(37,82,232,0.3)', height: 8 }} />
                Lowest–highest recorded
              </span>
            </div>
          </div>
          <div className="section">
            <h3>
              Precipitation
              <span className="hint">mm per month</span>
            </h3>
            <MonthlyBars values={c.monthly.PRECTOTCORR.map((v, i) => v * DAYS[i])} unit="mm" color="#2e6fd0" />
          </div>
          <div className="section">
            <h3>
              Thermal envelope
              <span className="hint">where Earth stops being {twin ? BODY_LABEL[twin.body] : 'alien'}</span>
            </h3>
            <ThermalEnvelope rows={envelope} />
            <div className="source-note">
              Bars on a shared axis show how much of the target's temperature range any Earth site can reach. The gap is where hardware needs thermal-vacuum chambers instead of field tests.
            </div>
          </div>
        </>
      ) : (
        <div className="section">
          <div className="empty-note">Climate data loading — check back shortly.</div>
        </div>
      )}
      {site.environment.length > 0 && (
        <div className="section">
          <h3>Physical setting</h3>
          <Facts facts={site.environment} />
        </div>
      )}
      {c && (
        <div className="section">
          <div className="source-note" style={{ marginTop: 0 }}>
            NASA POWER climatology (MERRA-2 / CERES), grid cell centred at {fmtCoords(c.grid.lat, c.grid.lon, 2)}. Values are ~50 km averages, so local extremes (crater floors, summits) can differ.
          </div>
        </div>
      )}
    </>
  );
}

function PlanetEnvironment({ site }: { site: Site }) {
  const p = PLANETS[site.body];
  const e = PLANETS.earth;
  const rows: [string, string, string][] = [
    ['Gravity', `${p.gravityRel} · ${p.gravity} m/s²`, `${e.gravityRel}`],
    ['Surface pressure', p.pressure, e.pressure],
    ['Atmosphere', p.atmosphere, e.atmosphere],
    ['Temperature', p.tempRange, e.tempRange],
    ['Day length', p.dayLength, e.dayLength],
    ['Magnetic field', p.magnetosphere, e.magnetosphere],
    ['Signal delay', p.signalDelay, '—'],
  ];
  return (
    <>
      <div className="section">
        <h3>Site conditions</h3>
        <Facts facts={site.environment} />
      </div>
      <div className="section">
        <h3>
          {p.name} vs Earth
          <span className="hint">body-wide</span>
        </h3>
        <table className="cmp-table">
          <thead>
            <tr>
              <th />
              <th>{p.name}</th>
              <th>Earth</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([k, a, b]) => (
              <tr key={k}>
                <td>{k}</td>
                <td>{a}</td>
                <td>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="section">
        <h3>Thermal envelope</h3>
        <ThermalEnvelope rows={[...(BODY_TEMPS[site.body] ?? []), EARTH_RECORD]} />
        <div className="source-note">No place on Earth reaches the cold end of this range — those conditions are rehearsed in thermal-vacuum chambers, not in the field.</div>
      </div>
    </>
  );
}

function ScienceTab({ site }: { site: Site }) {
  return (
    <>
      <div className="section">
        <h3>Why it matters</h3>
        <ul className="bullets good">
          {site.analogous.map((a) => (
            <li key={a}>
              <span className="ic">
                <CircleCheck size={13} />
              </span>
              {a}
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h3>What no Earth analog can reproduce</h3>
        <ul className="bullets bad">
          {site.breaks.map((a) => (
            <li key={a}>
              <span className="ic">
                <CircleX size={13} />
              </span>
              {a}
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h3>Open questions</h3>
        <ul className="bullets num">
          {site.rehearse.map((a, i) => (
            <li key={a}>
              <span className="ic">{i + 1}</span>
              {a}
            </li>
          ))}
        </ul>
      </div>
      <Geology site={site} />
      <Missions site={site} title="Missions" />
    </>
  );
}

function FieldGuide({ site }: { site: Site }) {
  return (
    <>
      <div className="section">
        <h3>What to rehearse here</h3>
        <ul className="bullets num">
          {site.rehearse.map((a, i) => (
            <li key={a}>
              <span className="ic">{i + 1}</span>
              {a}
            </li>
          ))}
        </ul>
      </div>
      <Geology site={site} />
      <Missions site={site} title="Analog campaigns & studies" />
      {site.access && (
        <div className="section">
          <h3>Access & logistics</h3>
          <div className="access">
            <div className="kpi">
              <div className="l">Nearest base</div>
              <div className="v">{site.access.nearest}</div>
            </div>
            <div className="kpi">
              <div className="l">Best season</div>
              <div className="v">{site.access.season}</div>
            </div>
          </div>
          {site.access.notes && <div className="source-note">{site.access.notes}</div>}
        </div>
      )}
    </>
  );
}

function Geology({ site }: { site: Site }) {
  const g = site.geology;
  const items: [string, string | undefined][] = [
    ['Setting', g.setting],
    ['Rocks', g.rocks],
    ['Minerals', g.minerals],
    ['Age', g.age],
    ['Key features', g.features],
  ];
  return (
    <div className="section">
      <h3>Geology</h3>
      <div className="geo-grid">
        {items
          .filter(([, v]) => v)
          .map(([l, v]) => (
            <div className="geo-item" key={l}>
              <div className="l">{l}</div>
              <div className="v">{v}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

function Missions({ site, title }: { site: Site; title: string }) {
  if (!site.missions.length) return null;
  return (
    <div className="section">
      <h3>{title}</h3>
      <ul className="bullets neutral">
        {site.missions.map((m) => (
          <li key={m}>
            <span className="ic">
              <ArrowUpRight size={12} />
            </span>
            {m}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Sources({ site }: { site: Site }) {
  const c = site.body === 'earth' ? climateFor(site.id) : undefined;
  const app = [
    ...(c ? [{ name: 'NASA POWER climatology 2001–2025 (MERRA-2, CERES)', agency: 'NASA LaRC', url: 'https://power.larc.nasa.gov/', kind: 'dataset' }] : []),
    site.body === 'earth'
      ? { name: 'World Imagery basemap', agency: 'Esri, Maxar, Earthstar Geographics', url: 'https://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9', kind: 'dataset' }
      : site.body === 'moon'
        ? { name: 'LRO WAC, Kaguya TC and LOLA mosaics via Moon Trek', agency: 'NASA / JAXA', url: 'https://trek.nasa.gov/moon/', kind: 'dataset' }
        : { name: 'Viking MDIM 2.1 and MRO CTX mosaics via Mars Trek', agency: 'NASA JPL / Caltech', url: 'https://trek.nasa.gov/mars/', kind: 'dataset' },
  ];
  return (
    <>
      <div className="section">
        <h3>References for this site</h3>
        <div className="sources">
          {site.sources.map((s) => {
            const inner = (
              <>
                <span className="k">{s.kind ?? 'source'}</span>
                <span>
                  <div className="n">{s.name}</div>
                  <div className="a">{s.agency}</div>
                </span>
              </>
            );
            return s.url ? (
              <a key={s.name} className="source" href={s.url} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                {inner}
              </a>
            ) : (
              <div key={s.name} className="source">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
      <div className="section">
        <h3>Data shown in this app</h3>
        <div className="sources">
          {app.map((s) => (
            <a key={s.name} className="source" href={s.url} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
              <span className="k">{s.kind}</span>
              <span>
                <div className="n">{s.name}</div>
                <div className="a">{s.agency}</div>
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export function Facts({ facts }: { facts: Site['environment'] }) {
  return (
    <dl className="facts">
      {facts.map((f) => (
        <div className="fact" key={f.label}>
          <dt>{f.label}</dt>
          <dd>
            {f.value}
            {f.note && <span className="note">{f.note}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Kpi({ l, v, u, n }: { l: string; v: string; u?: string; n?: string }) {
  return (
    <div className="kpi">
      <div className="l">{l}</div>
      <div className="v">
        {v}
        {u && <small>{u}</small>}
      </div>
      {n && <div className="n">{n}</div>}
    </div>
  );
}
