import { useEffect, useMemo, useRef, useState } from 'react';
import type { Cartesian3 } from 'cesium';
import type { GlobeEngine } from '../globe/engine';
import type { Site } from '../data/types';
import { bestMatch } from '../data';
import { CategoryIcon } from '../lib/icons';
import { useMosaic } from './useMosaic';

interface Props {
  engine: GlobeEngine | null;
  ready: boolean;
  sites: Site[];
  dimmed: Set<string>;
  selectedId: string | null;
  hoverId: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}

const CLUSTER_PX = 38;

export default function PinLayer({ engine, ready, sites, dimmed, selectedId, hoverId, onSelect, onHover }: Props) {
  const pinRefs = useRef(new Map<string, HTMLDivElement>());
  const countRefs = useRef(new Map<string, HTMLSpanElement>());
  const clusters = useRef(new Map<string, string[]>());
  const hoverRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const positions = useRef(new Map<string, Cartesian3>());

  const selRef = useRef(selectedId);
  selRef.current = selectedId;
  const hoverIdRef = useRef(hoverId);
  hoverIdRef.current = hoverId;

  // priority: selected first, then stronger analogs keep their own pin when clustering
  const ordered = useMemo(() => [...sites].sort((a, b) => (bestMatch(b) ?? 0) - (bestMatch(a) ?? 0)), [sites]);

  useEffect(() => {
    if (!engine || !ready) return;
    positions.current.clear();
    for (const s of sites) positions.current.set(s.id, engine.position(s.lat, s.lon, engine.siteHeight(s)));

    const update = () => {
      const occ = engine.occluder();
      const cs = engine.cameraState();
      const showLabels = cs ? cs.height < engine.radius * 0.18 : false;
      layerRef.current?.classList.toggle('labels', showLabels);

      const placed: { id: string; x: number; y: number; members: string[] }[] = [];
      const sel = selRef.current;
      const list = sel ? [...ordered].sort((a, b) => (a.id === sel ? -1 : b.id === sel ? 1 : 0)) : ordered;
      const screen = new Map<string, { x: number; y: number } | null>();

      for (const s of list) {
        const pos = positions.current.get(s.id);
        const p = pos ? engine.project(pos, occ) : null;
        screen.set(s.id, p);
        if (!p) continue;
        const near = placed.find((c) => Math.abs(c.x - p.x) < CLUSTER_PX && Math.abs(c.y - p.y) < CLUSTER_PX);
        if (near && s.id !== sel) near.members.push(s.id);
        else placed.push({ id: s.id, x: p.x, y: p.y, members: [s.id] });
      }

      const leaders = new Map(placed.map((c) => [c.id, c]));
      clusters.current = new Map(placed.map((c) => [c.id, c.members]));
      for (const s of sites) {
        const el = pinRefs.current.get(s.id);
        if (!el) continue;
        const p = screen.get(s.id);
        const lead = leaders.get(s.id);
        if (!p || !lead) {
          el.style.display = 'none';
          continue;
        }
        el.style.display = 'block';
        el.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0)`;
        const isCluster = lead.members.length > 1;
        el.classList.toggle('cluster', isCluster);
        el.style.zIndex = s.id === sel ? '5' : isCluster ? '3' : '2';
        const c = countRefs.current.get(s.id);
        if (c && isCluster) c.textContent = String(lead.members.length);
      }

      const hc = hoverRef.current;
      const hid = hoverIdRef.current;
      if (hc) {
        const p = hid ? screen.get(hid) : null;
        const visible = hid && p && leaders.has(hid) && (leaders.get(hid)?.members.length ?? 0) === 1 && hid !== sel;
        if (visible && p) {
          const w = 248;
          const left = Math.min(window.innerWidth - w - 12, Math.max(12, p.x - w / 2));
          const top = p.y - 26 - 226 > 70 ? p.y - 26 - 226 : p.y + 30;
          hc.style.transform = `translate3d(${left}px, ${top}px, 0)`;
          hc.classList.add('on');
        } else hc.classList.remove('on');
      }
    };

    const offR = engine.onRender(update);
    update();
    engine.requestRender();
    return () => {
      offR();
    };
  }, [engine, ready, sites, ordered]);

  useEffect(() => {
    engine?.requestRender();
  }, [engine, selectedId, hoverId, dimmed]);

  const hoverSite = sites.find((s) => s.id === hoverId);

  const handleClick = (id: string) => {
    const members = clusters.current.get(id);
    if (members && members.length > 1 && engine) {
      const pts = members.map((m) => sites.find((s) => s.id === m)!).filter(Boolean);
      engine.flyToPoints(pts);
      return;
    }
    onSelect(id);
  };

  return (
    <>
      <div className="pins" ref={layerRef}>
        {sites.map((s) => (
          <div
            key={s.id}
            className={`pin${s.id === selectedId ? ' selected' : ''}${dimmed.has(s.id) ? ' dim' : ''}`}
            ref={(el) => {
              if (el) pinRefs.current.set(s.id, el);
              else pinRefs.current.delete(s.id);
            }}
            onPointerEnter={() => onHover(s.id)}
            onPointerLeave={() => onHover(null)}
          >
            <button
              className="pin-dot"
              style={{ ['--tier' as string]: s.tier === 'candidate' ? 'var(--accent)' : 'transparent' }}
              aria-label={s.name}
              onClick={() => handleClick(s.id)}
            >
              <CategoryIcon category={s.categories[0]} size={16} />
            </button>
            <button
              className="pin-count"
              aria-label="Zoom to cluster"
              onClick={() => handleClick(s.id)}
              ref={(el) => {
                if (el) countRefs.current.set(s.id, el as unknown as HTMLSpanElement);
              }}
            />
            <span className="pin-label">{s.name}</span>
          </div>
        ))}
      </div>
      <HoverCard site={hoverSite} cardRef={hoverRef} />
    </>
  );
}

function HoverCard({ site, cardRef }: { site: Site | undefined; cardRef: React.RefObject<HTMLDivElement | null> }) {
  const [shown, setShown] = useState<Site | undefined>(site);
  useEffect(() => {
    if (site) setShown(site);
  }, [site]);
  const { url } = useMosaic(shown, 496, 256);
  const match = shown ? bestMatch(shown) : undefined;
  return (
    <div className="hover-card glass-strong" ref={cardRef}>
      <div className="img" style={{ backgroundImage: url ? `url(${url})` : undefined }} />
      {shown && (
        <div className="body">
          <div className="t">{shown.name}</div>
          <div className="s">{shown.subtitle}</div>
          <div className="m">
            {shown.tier && <span className={`tag ${shown.tier}`}>{shown.tier === 'anchor' ? 'Established analog' : 'Proposed analog'}</span>}
            {match != null && <span className="tag">Best match {match}</span>}
          </div>
        </div>
      )}
    </div>
  );
}
