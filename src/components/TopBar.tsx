import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { Search, BookOpen, MessageCircle, ChevronDown, MapPin } from 'lucide-react';
import type { Body, Category, Site } from '../data/types';
import { CATEGORIES, SITES, sitesOn } from '../data';
import { BODY_LABEL } from '../data/planets';

export type Region = 'all' | 'USA' | 'India' | 'Global';

export function regionOf(s: Site): Region {
  if (s.country === 'USA') return 'USA';
  if (s.country === 'India') return 'India';
  return 'Global';
}

interface Props {
  body: Body;
  onBody: (b: Body) => void;
  category: Category | null;
  onCategory: (c: Category | null) => void;
  onPick: (id: string) => void;
  onMethod: () => void;
  showPins: boolean;
  onTogglePins: () => void;
  shastraOpen: boolean;
  onToggleShastra: () => void;
}

const BODY_COLOR: Record<Body, string> = { earth: 'var(--earth)', moon: '#a9adb3', mars: 'var(--mars)' };

export function BrandMark({ size = 26 }: { size?: number }) {
  return (
    <svg className="brand-mark" width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="9" fill="currentColor" />
      <ellipse cx="16" cy="16" rx="14.5" ry="5.2" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(-24 16 16)" />
      <circle cx="27.6" cy="10.4" r="2.2" fill="#c0532c" />
    </svg>
  );
}

export default function TopBar(p: Props) {
  const searchRef = useRef<HTMLInputElement>(null);
  const [chipsOpen, setChipsOpen] = useState(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const onBody = sitesOn(p.body);
  const isExtra = p.body !== 'earth';
  const cats = isExtra ? CATEGORIES.filter((c) => onBody.some((s) => s.categories.includes(c.key))) : [];

  return (
    <div className="topbar">
      <div className="brand glass">
        <BrandMark />
        <span className="brand-name">Atlan</span>
      </div>

      <div className="top-center">
        <div className="segmented glass" role="tablist" aria-label="Planetary body">
          {(['earth', 'moon', 'mars'] as Body[]).map((b, i) => (
            <button key={b} role="tab" aria-selected={p.body === b} className={p.body === b ? 'on' : ''} onClick={() => p.onBody(b)} title={`${BODY_LABEL[b]} (${i + 1})`}>
              <span className="body-dot" style={{ background: BODY_COLOR[b] }} />
              {BODY_LABEL[b]}
              <span className="count">{sitesOn(b).length}</span>
              {b !== 'earth' && p.body === b && (
                <span
                  className={`chips-toggle${chipsOpen ? ' open' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setChipsOpen((o) => !o);
                  }}
                  role="button"
                  aria-label={chipsOpen ? 'Hide filters' : 'Show filters'}
                >
                  <ChevronDown size={13} />
                </span>
              )}
            </button>
          ))}
        </div>
        {isExtra && (
          <div className={`chips${chipsOpen ? '' : ' collapsed'}`}>
            {cats.map((c) => {
              const n = onBody.filter((s) => s.categories.includes(c.key)).length;
              return (
                <button
                  key={c.key}
                  className={`chip${p.category === c.key ? ' on' : ''}`}
                  onClick={() => p.onCategory(p.category === c.key ? null : c.key)}
                  disabled={n === 0 && p.category !== c.key}
                  style={n === 0 ? { opacity: 0.45 } : undefined}
                >
                  {c.label}
                  <span className="n">{n}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="top-right">
        <SearchBox ref={searchRef} onPick={p.onPick} />
        <div className="top-actions glass">
          <button className={`icon-btn pin-toggle${p.showPins ? ' active' : ''}`} onClick={p.onTogglePins} title={p.showPins ? 'Hide pins' : 'Show pins'}>
            <MapPin size={17} />
          </button>
          <button className="icon-btn" onClick={p.onMethod} title="Method & data">
            <BookOpen size={17} />
          </button>
          <button className={`icon-btn${p.shastraOpen ? ' active' : ''}`} onClick={p.onToggleShastra} title="Shastra AI">
            <MessageCircle size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

const SearchBox = forwardRef<HTMLInputElement, { onPick: (id: string) => void }>(function SearchBox({ onPick }, ref) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [hl, setHl] = useState(0);
  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    return SITES.filter((s) => `${s.name} ${s.subtitle} ${s.region} ${s.country ?? ''} ${s.body}`.toLowerCase().includes(t)).slice(0, 10);
  }, [q]);

  const pick = (id: string) => {
    onPick(id);
    setQ('');
    setOpen(false);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  return (
    <div className="search glass">
      <Search size={16} color="var(--text-3)" />
      <input
        ref={ref}
        value={q}
        placeholder="Search places, craters, missions"
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
          setHl(0);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHl((h) => Math.min(results.length - 1, h + 1));
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHl((h) => Math.max(0, h - 1));
          } else if (e.key === 'Enter' && results[hl]) pick(results[hl].id);
          else if (e.key === 'Escape') {
            setQ('');
            (e.target as HTMLInputElement).blur();
          }
        }}
      />
      {!q && <span className="kbd">/</span>}
      {open && results.length > 0 && (
        <div className="search-results glass-strong">
          {results.map((s, i) => (
            <button key={s.id} className={`search-item${i === hl ? ' hl' : ''}`} onMouseDown={(e) => e.preventDefault()} onClick={() => pick(s.id)} onMouseEnter={() => setHl(i)}>
              <span className="body-dot" style={{ background: BODY_COLOR[s.body] }} />
              <span style={{ minWidth: 0 }}>
                <div className="t">{s.name}</div>
                <div className="s">{s.subtitle}</div>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
});
