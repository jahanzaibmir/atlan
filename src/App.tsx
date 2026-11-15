import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Body, Category } from './data/types';
import { SITE_BY_ID, sitesOn } from './data';
import { GlobeEngine, HAS_ION } from './globe/engine';
import { DEFAULT_LAYERS } from './globe/layers';
import TopBar, { BrandMark } from './components/TopBar';
import Controls from './components/Controls';
import PinLayer from './components/PinLayer';
import SitePanel from './components/SitePanel';
import ShastraChat from './components/ShastraChat';
import StatusBar from './components/StatusBar';
import CompareModal from './components/CompareModal';
import MethodModal from './components/MethodModal';
import type { User } from './auth';

function parseHash(): { body: Body; id: string | null } {
  const [b, id] = window.location.hash.replace(/^#\/?/, '').split('/');
  const site = id ? SITE_BY_ID[id] : undefined;
  if (site) return { body: site.body, id: site.id };
  if (b === 'moon' || b === 'mars' || b === 'earth') return { body: b, id: null };
  return { body: 'earth', id: null };
}

export default function App({ user: _user, onLogout: _onLogout }: { user: User; onLogout: () => void }) {
  const initial = useMemo(parseHash, []);
  const [body, setBody] = useState<Body>(initial.body);
  const [selectedId, setSelectedId] = useState<string | null>(initial.id);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [layers, setLayers] = useState(() => structuredClone(DEFAULT_LAYERS));
  const [terrain3d, setTerrain3d] = useState(HAS_ION);
  const [compare, setCompare] = useState<{ a: string; b: string } | null>(null);
  const [method, setMethod] = useState(false);
  const [showPins, setShowPins] = useState(true);
  const [shastra, setShastra] = useState(false);
  const [engine, setEngine] = useState<GlobeEngine | null>(null);
  const [mounted, setMounted] = useState<Body | null>(null);
  const [booting, setBooting] = useState(true);
  const [fading, setFading] = useState(false);

  const globeRef = useRef<HTMLDivElement>(null);
  const creditRef = useRef<HTMLDivElement>(null);
  const pendingFly = useRef<string | null>(initial.id);
  const firstMount = useRef(true);

  const ready = Boolean(engine) && mounted === body && !fading;

  // ---------- engine lifecycle ----------
  useEffect(() => {
    const e = new GlobeEngine(globeRef.current!, creditRef.current!, { space: true, terrain3d: HAS_ION });
    setEngine(e);
    return () => e.destroy();
  }, []);

  useEffect(() => {
    if (!engine) return;
    let cancelled = false;
    engine.options.terrain3d = terrain3d;
    const first = firstMount.current;
    firstMount.current = false;
    setFading(true);
    const run = async () => {
      if (!first) await new Promise((r) => setTimeout(r, 380));
      if (cancelled) return;
      const ls = layers[body];
      await engine.mount(body, ls.base, ls.overlays);
      if (cancelled) return;
      await engine.whenTilesLoaded(first ? 4500 : 1600);
      if (cancelled) return;
      setMounted(body);
      setFading(false);
      setBooting(false);
      const id = pendingFly.current;
      pendingFly.current = null;
      const site = id ? SITE_BY_ID[id] : undefined;
      if (site && site.body === body) setTimeout(() => engine.flyToSite(site, first ? 2.4 : 2), first ? 300 : 80);
      else engine.startSpin();
    };
    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [engine, body, terrain3d]);

  // ---------- url ----------
  useEffect(() => {
    const h = selectedId ? `#/${body}/${selectedId}` : `#/${body}`;
    if (window.location.hash !== h) history.replaceState(null, '', h);
  }, [body, selectedId]);

  // ---------- navigation ----------
  const goTo = useCallback(
    (id: string | null) => {
      setSelectedId(id);
      setHoverId(null);
      if (!id) return;
      const site = SITE_BY_ID[id];
      if (!site) return;
      if (site.body !== body) {
        pendingFly.current = id;
        setCategory(null);
        setBody(site.body);
      } else {
        if (category && !site.categories.includes(category)) setCategory(null);
        engine?.flyToSite(site);
      }
    },
    [body, engine, category],
  );

  const switchBody = useCallback(
    (b: Body) => {
      if (b === body) return;
      setSelectedId(null);
      setCategory(null);
      pendingFly.current = null;
      setBody(b);
    },
    [body],
  );

  // ---------- filtering ----------
  const bodySites = useMemo(() => sitesOn(body), [body]);
  const visible = useMemo(() => bodySites.filter((s) => !category || s.categories.includes(category)), [bodySites, category]);
  const pinSites = useMemo(() => {
    const sel = selectedId ? SITE_BY_ID[selectedId] : undefined;
    return sel && sel.body === body && !visible.includes(sel) ? [...visible, sel] : visible;
  }, [visible, selectedId, body]);
  const noDim = useMemo(() => new Set<string>(), []);

  // ---------- keyboard ----------
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
      if (e.key === 'Escape') {
        if (compare) setCompare(null);
        else if (method) setMethod(false);
        else if (selectedId) goTo(null);
      } else if (e.key === '1') switchBody('earth');
      else if (e.key === '2') switchBody('moon');
      else if (e.key === '3') switchBody('mars');
      else if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && !compare && !method && visible.length) {
        const i = visible.findIndex((s) => s.id === selectedId);
        const n = e.key === 'ArrowRight' ? (i + 1) % visible.length : (i - 1 + visible.length) % visible.length;
        goTo(visible[i < 0 ? 0 : n].id);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [compare, method, selectedId, visible, goTo, switchBody]);

  const selected = selectedId ? SITE_BY_ID[selectedId] ?? null : null;
  const panelSite = selected && selected.body === body ? selected : null;

  return (
    <div className="app space">
      <div className="globe" ref={globeRef} />
      <div className={`globe-fade${fading && !booting ? ' on' : ''}`} />

      <div className={showPins ? 'pins-visible' : 'pins-hidden'}>
        <PinLayer engine={engine} ready={ready} sites={pinSites} dimmed={noDim} selectedId={selectedId} hoverId={hoverId} onSelect={(id) => goTo(id)} onHover={setHoverId} />
      </div>

      <TopBar body={body} onBody={switchBody} category={category} onCategory={setCategory} onPick={(id) => goTo(id)} onMethod={() => setMethod(true)} showPins={showPins} onTogglePins={() => setShowPins((p) => !p)} shastraOpen={shastra} onToggleShastra={() => setShastra((o) => !o)} />

      <Controls
        engine={engine}
        ready={ready}
        body={body}
        base={layers[body].base}
        overlays={layers[body].overlays}
        onBase={(id) => {
          setLayers((l) => ({ ...l, [body]: { ...l[body], base: id } }));
          engine?.setBase(id);
        }}
        onOverlay={(id, on) => {
          setLayers((l) => ({ ...l, [body]: { ...l[body], overlays: on ? [...l[body].overlays, id] : l[body].overlays.filter((x) => x !== id) } }));
          engine?.setOverlay(id, on);
        }}
        terrain3d={terrain3d}
        onTerrain3d={(on) => {
          if (selectedId) pendingFly.current = selectedId;
          setTerrain3d(on);
        }}
      />

      <SitePanel
        site={panelSite}
        onClose={() => goTo(null)}
        onGo={(id) => goTo(id)}
        onFly={(id) => {
          const s = SITE_BY_ID[id];
          if (s) engine?.flyToSite(s);
        }}
        onCompare={(a, b) => setCompare({ a, b })}
      />

      <ShastraChat open={shastra} onClose={() => setShastra(false)} body={body} site={panelSite} />

      <StatusBar engine={engine} ready={ready} creditRef={creditRef} />

      {compare && (
        <CompareModal
          aId={compare.a}
          bId={compare.b}
          onClose={() => setCompare(null)}
          onPickTwin={(b) => setCompare((c) => (c ? { ...c, b } : c))}
          onGo={(id) => {
            setCompare(null);
            goTo(id);
          }}
        />
      )}
      {method && <MethodModal onClose={() => setMethod(false)} />}

      <div className={`loader${booting ? '' : ' done'}`}>
        <div className="loader-inner">
          <BrandMark size={40} />
          <div className="brand-name">Atlan</div>
          <div className="loader-bar">
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}
