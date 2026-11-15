import { useEffect, useMemo, useState } from 'react';
import { X, ArrowLeftRight, CircleCheck, CircleX, ChevronDown, ChevronUp, Maximize2, Minimize2 } from 'lucide-react';
import type { Dimension, Site } from '../data/types';
import { DIMENSIONS, SITE_BY_ID, resolveTwins } from '../data';
import { BODY_LABEL, PLANETS } from '../data/planets';
import { climateFor } from '../data/climate';
import { fmtCoords, fmtDistance, niceLength } from '../lib/format';
import { groundWidthForSite } from '../lib/mosaic';
import { useMosaic } from './useMosaic';
import { Ring } from './charts';
import { EarthVsTwin } from './SitePanel';

interface Props {
  aId: string;
  bId: string;
  onClose: () => void;
  onPickTwin: (bId: string) => void;
  onGo: (id: string) => void;
}

const W = 760;
const H = 570;

const DIM_COLORS: Record<Dimension, string> = {
  terrain: '#2e6fd0',
  geology: '#7c5cbf',
  thermal: '#c0532c',
  water: '#2b8a57',
  atmosphere: '#d4880e',
  biology: '#16857a',
  subsurface: '#8b6f47',
  operations: '#555e6e',
};

function scoreGrade(v: number): { label: string; color: string } {
  if (v >= 80) return { label: 'Excellent', color: '#2b8a57' };
  if (v >= 60) return { label: 'Good', color: '#2e6fd0' };
  if (v >= 40) return { label: 'Moderate', color: '#d4880e' };
  return { label: 'Weak', color: '#c0532c' };
}

type Section = 'dimensions' | 'environment' | 'analysis';

export default function CompareModal({ aId, bId, onClose, onPickTwin, onGo }: Props) {
  const a = SITE_BY_ID[aId];
  const b = SITE_BY_ID[bId];
  const [mode, setMode] = useState<'true' | 'fit'>('true');
  const baseWidth = groundWidthForSite(a.view.range_km);
  const [logW, setLogW] = useState(Math.log10(baseWidth));
  const [expandedDim, setExpandedDim] = useState<Dimension | null>(null);
  const [section, setSection] = useState<Section>('dimensions');
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    setLogW(Math.log10(groundWidthForSite(a.view.range_km)));
  }, [aId]);

  const trueW = 10 ** logW;
  const wa = mode === 'true' ? trueW : groundWidthForSite(a.view.range_km);
  const wb = mode === 'true' ? trueW : groundWidthForSite(b.view.range_km);
  const link = a.twins.find((t) => t.id === bId);
  const twins = resolveTwins(a);
  const climate = climateFor(a.id);

  const sortedDims = useMemo(() => {
    if (!a.scores) return [];
    return DIMENSIONS.map((d) => ({ ...d, value: a.scores![d.key] })).sort((x, y) => y.value - x.value);
  }, [a.scores]);

  const strongest = sortedDims.slice(0, 2);
  const weakest = sortedDims.slice(-2).reverse();

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`modal glass-strong cmp-modal${fullscreen ? ' cmp-fullscreen' : ''}`} role="dialog" aria-label="Side-by-side comparison">
        <div className="modal-head">
          <div>
            <h2>
              {a.name} <ArrowLeftRight size={16} style={{ verticalAlign: '-2px', margin: '0 6px', color: 'var(--text-3)' }} /> {b.name}
            </h2>
            <p>{link?.why ?? 'Side-by-side comparison'}</p>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button className="icon-btn" onClick={() => setFullscreen((f) => !f)} aria-label="Toggle fullscreen">
              {fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            <button className="icon-btn" onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>
          </div>
        </div>
        <div className="modal-body">
          {/* toolbar */}
          <div className="cmp-toolbar">
            <div className="segmented" style={{ background: 'var(--fill-1)' }}>
              <button className={mode === 'true' ? 'on' : ''} onClick={() => setMode('true')} style={{ height: 32 }}>
                Same scale
              </button>
              <button className={mode === 'fit' ? 'on' : ''} onClick={() => setMode('fit')} style={{ height: 32 }}>
                Fit each
              </button>
            </div>
            {mode === 'true' && (
              <>
                <span className="label">Width</span>
                <input className="range" type="range" min={3} max={6.3} step={0.01} value={logW} onChange={(e) => setLogW(Number(e.target.value))} />
                <span style={{ fontWeight: 600, fontSize: 13, minWidth: 64 }}>{fmtDistance(trueW)}</span>
              </>
            )}
            {twins.length > 1 && (
              <div className="cmp-twin-chips">
                {twins.map((t) => (
                  <button key={t.id} className={`chip${t.id === bId ? ' on' : ''}`} onClick={() => onPickTwin(t.id)}>
                    {t.site.name}
                    <span className="n">{t.match}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* imagery + central score */}
          <div className="cmp-imagery">
            <Pane site={a} widthM={wa} onGo={onGo} />
            <div className="cmp-score-bridge">
              {link && (
                <>
                  <Ring value={link.match} size={80} stroke={6} />
                  <span className="cmp-score-label">Overall match</span>
                </>
              )}
            </div>
            <Pane site={b} widthM={wb} onGo={onGo} />
          </div>

          {/* section nav */}
          <nav className="cmp-nav">
            <button className={section === 'dimensions' ? 'on' : ''} onClick={() => setSection('dimensions')}>
              Dimensions
            </button>
            <button className={section === 'environment' ? 'on' : ''} onClick={() => setSection('environment')}>
              Environment
            </button>
            <button className={section === 'analysis' ? 'on' : ''} onClick={() => setSection('analysis')}>
              Analysis
            </button>
          </nav>

          {/* Dimensions section */}
          {section === 'dimensions' && (
            <div className="cmp-section" key="dim">
              {a.scores ? (
                <>
                  <div className="cmp-dim-summary">
                    <div className="cmp-dim-tag good">
                      <CircleCheck size={13} />
                      Strongest: {strongest.map((d) => d.label).join(', ')}
                    </div>
                    <div className="cmp-dim-tag weak">
                      <CircleX size={13} />
                      Weakest: {weakest.map((d) => d.label).join(', ')}
                    </div>
                  </div>
                  <div className="cmp-dims">
                    {sortedDims.map((d, i) => (
                      <DimBar
                        key={d.key}
                        dim={d}
                        index={i}
                        expanded={expandedDim === d.key}
                        onToggle={() => setExpandedDim(expandedDim === d.key ? null : d.key)}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="empty-note">Dimension scores are defined against the primary twin only.</div>
              )}
              {a.twins[0]?.id !== bId && link && (
                <div className="source-note" style={{ marginTop: 12 }}>
                  Scores shown are rated against {SITE_BY_ID[a.twins[0]?.id]?.name} (primary twin). This pairing's overall match is {link.match}.
                </div>
              )}
            </div>
          )}

          {/* Environment section */}
          {section === 'environment' && (
            <div className="cmp-section" key="env">
              <div className="cmp-env-grid">
                <EnvKpi label="Gravity" siteVal="1 g" twinVal={PLANETS[b.body].gravityRel} />
                <EnvKpi label="Pressure" siteVal={climate?.annual.PS != null ? `${climate.annual.PS.toFixed(1)} kPa` : '~101 kPa'} twinVal={PLANETS[b.body].pressure} />
                <EnvKpi
                  label="Temperature"
                  siteVal={climate?.annual.T2M_MIN != null && climate?.annual.T2M_MAX != null ? `${climate.annual.T2M_MIN.toFixed(0)} to ${climate.annual.T2M_MAX.toFixed(0)} °C` : '—'}
                  twinVal={PLANETS[b.body].tempRange}
                />
                <EnvKpi label="Day length" siteVal="24 h" twinVal={PLANETS[b.body].dayLength} />
                <EnvKpi label="Atmosphere" siteVal="78% N₂ · 21% O₂" twinVal={PLANETS[b.body].atmosphere} />
                <EnvKpi label="Radiation" siteVal="Magnetosphere + thick air" twinVal={PLANETS[b.body].magnetosphere} />
              </div>
              <div className="cmp-env-table">
                <h3>Full comparison</h3>
                <EarthVsTwin site={a} twin={b} climate={climate} />
              </div>
            </div>
          )}

          {/* Analysis section */}
          {section === 'analysis' && (
            <div className="cmp-section" key="analysis">
              <div className="cmp-analysis-grid">
                <div className="cmp-analysis-col">
                  <h3>
                    <CircleCheck size={15} />
                    What holds up
                  </h3>
                  <ul>
                    {a.analogous.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div className="cmp-analysis-col breaks">
                  <h3>
                    <CircleX size={15} />
                    Where it breaks down
                  </h3>
                  <ul>
                    {a.breaks.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {link && (
                <div className="cmp-verdict">
                  <div className="cmp-verdict-score">
                    <Ring value={link.match} size={64} stroke={5} label="" />
                  </div>
                  <div className="cmp-verdict-text">
                    <strong>{a.name}</strong> is a <strong>{scoreGrade(link.match).label.toLowerCase()}</strong> analog for{' '}
                    <strong>{b.name}</strong> on {BODY_LABEL[b.body]}.{' '}
                    {strongest.length > 0 && (
                      <>
                        It excels in {strongest.map((d) => d.label.toLowerCase()).join(' and ')}
                        {weakest.length > 0 && <>, but falls short on {weakest.map((d) => d.label.toLowerCase()).join(' and ')}</>}.
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DimBar({
  dim,
  index,
  expanded,
  onToggle,
}: {
  dim: { key: Dimension; label: string; hint: string; value: number };
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const [animated, setAnimated] = useState(0);
  const grade = scoreGrade(dim.value);
  const color = DIM_COLORS[dim.key];

  useEffect(() => {
    const t = setTimeout(() => setAnimated(dim.value), 80 + index * 60);
    return () => clearTimeout(t);
  }, [dim.value, index]);

  return (
    <div className={`cmp-dim${expanded ? ' expanded' : ''}`} onClick={onToggle}>
      <div className="cmp-dim-head">
        <span className="cmp-dim-label">{dim.label}</span>
        <div className="cmp-dim-bar-wrap">
          <div className="cmp-dim-bar" style={{ width: `${animated}%`, background: color }} />
        </div>
        <span className="cmp-dim-val" style={{ color }}>{Math.round(dim.value)}</span>
        <span className="cmp-dim-grade" style={{ color: grade.color }}>{grade.label}</span>
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </div>
      {expanded && (
        <div className="cmp-dim-detail">
          <p>{dim.hint}</p>
        </div>
      )}
    </div>
  );
}

function EnvKpi({ label, siteVal, twinVal }: { label: string; siteVal: string; twinVal: string }) {
  return (
    <div className="cmp-env-kpi">
      <div className="cmp-env-kpi-label">{label}</div>
      <div className="cmp-env-kpi-row">
        <div className="cmp-env-kpi-val earth">
          <span className="dot earth" />
          {siteVal}
        </div>
        <div className="cmp-env-kpi-val target">
          <span className="dot target" />
          {twinVal}
        </div>
      </div>
    </div>
  );
}

function Pane({ site, widthM, onGo }: { site: Site; widthM: number; onGo: (id: string) => void }) {
  const { url } = useMosaic(site, W, H, widthM);
  const mpp = widthM / W;
  const bar = niceLength(widthM * 0.3);
  const barPct = (bar / mpp / W) * 100;
  return (
    <div className="cmp-pane">
      <div className={`img${url ? '' : ' loading'}`} style={{ backgroundImage: url ? `url(${url})` : undefined }}>
        {!url && <div className="cmp-shimmer" />}
        <span className={`tag lbl ${site.body}`} style={{ background: 'rgba(255,255,255,0.88)' }}>
          <span className="dot" />
          {BODY_LABEL[site.body]}
        </span>
        <div className="scalebar" style={{ width: '50%' }}>
          <span>{fmtDistance(bar)}</span>
          <i style={{ width: `${barPct * 2}%`, borderColor: '#fff' }} />
        </div>
      </div>
      <button className="name" onClick={() => onGo(site.id)} style={{ textAlign: 'left' }}>
        {site.name}
      </button>
      <div className="sub">
        {site.subtitle} · {fmtCoords(site.lat, site.lon, 2)}
      </div>
    </div>
  );
}
