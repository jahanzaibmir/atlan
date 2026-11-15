import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import type { Site } from '../data/types';
import { bestMatch, SITE_BY_ID } from '../data';
import { BODY_LABEL } from '../data/planets';
import { useMosaic } from './useMosaic';

interface Props {
  sites: Site[];
  title: string;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
  withPanel: boolean;
  collapsed: boolean;
  onCollapse: (c: boolean) => void;
}

export default function SiteStrip({ sites, title, selectedId, onSelect, onHover, withPanel, collapsed, onCollapse }: Props) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedId || !track.current) return;
    const el = track.current.querySelector<HTMLElement>(`[data-id="${selectedId}"]`);
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [selectedId]);

  const scroll = (dir: number) => track.current?.scrollBy({ left: dir * 500, behavior: 'smooth' });

  return (
    <section className={`strip${withPanel ? ' with-panel' : ''}${collapsed ? ' collapsed' : ''}`}>
      <div className="strip-head">
        <button className="strip-title glass" onClick={() => onCollapse(!collapsed)}>
          {collapsed ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {title}
          <span className="n">{sites.length} places</span>
        </button>
        {!collapsed && (
          <div className="strip-nav">
            <button className="icon-btn sm glass" onClick={() => scroll(-1)} aria-label="Scroll left">
              <ChevronLeft size={16} />
            </button>
            <button className="icon-btn sm glass" onClick={() => scroll(1)} aria-label="Scroll right">
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
      <div className="strip-track" ref={track}>
        {sites.map((s) => (
          <Card key={s.id} site={s} on={s.id === selectedId} onSelect={onSelect} onHover={onHover} />
        ))}
      </div>
    </section>
  );
}

function Card({ site, on, onSelect, onHover }: { site: Site; on: boolean; onSelect: (id: string) => void; onHover: (id: string | null) => void }) {
  const { url, ref } = useMosaic(site, 472, 140, undefined, true);
  const match = bestMatch(site);
  const twin = site.twins[0] ? SITE_BY_ID[site.twins[0].id] : undefined;
  return (
    <button
      className={`card${on ? ' on' : ''}`}
      data-id={site.id}
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={() => onSelect(site.id)}
      onMouseEnter={() => onHover(site.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="card-top">
        <div style={{ minWidth: 0 }}>
          <div className="card-name">{site.name}</div>
          <div className="card-sub">{site.region}{site.country && site.country !== site.region ? `, ${site.country}` : ''}</div>
        </div>
        {match != null && (
          <div className="card-score">
            {match}
            <small>{site.body === 'earth' ? 'match' : 'best'}</small>
          </div>
        )}
      </div>
      <div className="card-img" style={{ backgroundImage: url ? `url(${url})` : undefined }} />
      {twin && (
        <span className="card-twin">
          <span className="body-dot" style={{ width: 7, height: 7, background: twin.body === 'mars' ? 'var(--mars)' : twin.body === 'moon' ? '#a9adb3' : 'var(--earth)' }} />
          {site.body === 'earth' ? `${BODY_LABEL[twin.body]} twin · ${twin.name}` : `Earth analog · ${twin.name}`}
        </span>
      )}
    </button>
  );
}
