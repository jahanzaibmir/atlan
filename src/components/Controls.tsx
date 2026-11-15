import { useEffect, useRef, useState } from 'react';
import { Plus, Minus, House, Layers, Map as MapIcon, Check } from 'lucide-react';
import * as Cesium from 'cesium';
import type { GlobeEngine } from '../globe/engine';
import { HAS_ION } from '../globe/engine';
import { LAYERS } from '../globe/layers';
import type { Body } from '../data/types';

interface Props {
  engine: GlobeEngine | null;
  ready: boolean;
  body: Body;
  base: string;
  overlays: string[];
  onBase: (id: string) => void;
  onOverlay: (id: string, on: boolean) => void;
  terrain3d: boolean;
  onTerrain3d: (on: boolean) => void;
}

export default function Controls({ engine, ready, body, base, overlays, onBase, onOverlay, terrain3d, onTerrain3d }: Props) {
  const needle = useRef<SVGSVGElement>(null);
  const [is2D, setIs2D] = useState(false);
  const [layersOpen, setLayersOpen] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!engine || !ready) return;
    const update = () => {
      try {
        const cs = engine.cameraState();
        if (!cs) return;
        if (needle.current) needle.current.style.transform = `rotate(${-Cesium.Math.toDegrees(cs.heading)}deg)`;
        setIs2D(engine.is2D());
      } catch { /* ignore during morph */ }
    };
    const offR = engine.onRender(update);
    update();
    return () => {
      offR();
    };
  }, [engine, ready]);

  useEffect(() => {
    if (!layersOpen) return;
    const close = (e: PointerEvent) => {
      if (popRef.current && !popRef.current.contains(e.target as Node)) setLayersOpen(false);
    };
    window.addEventListener('pointerdown', close);
    return () => window.removeEventListener('pointerdown', close);
  }, [layersOpen]);

  const defs = LAYERS[body];

  return (
    <div className="controls">
      <div className="control-group glass">
        <button className={`icon-btn${!is2D ? ' active' : ''}`} title="3D globe" onClick={() => is2D ? engine?.toggle2D() : engine?.toggleTilt()}>
          <span className="mode-label">3D</span>
        </button>
        <button
          className={`icon-btn${is2D ? ' active' : ''}`}
          title="Flat map (2D)"
          onClick={() => engine?.toggle2D()}
        >
          <MapIcon size={17} />
        </button>
      </div>
      <div className="control-group glass">
        <button className="icon-btn" title="Zoom in" onClick={() => engine?.zoom(0.55)}>
          <Plus size={18} />
        </button>
        <button className="icon-btn" title="Zoom out" onClick={() => engine?.zoom(1.6)}>
          <Minus size={18} />
        </button>
      </div>
      <div className="control-group glass" style={{ position: 'relative' }} ref={popRef}>
        <button className="icon-btn" title="Reset north" onClick={() => engine?.resetNorth()}>
          <svg ref={needle} className="compass-needle" width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2.5 15.5 12h-7z" fill="#c0532c" />
            <path d="M12 21.5 8.5 12h7z" fill="currentColor" opacity="0.55" />
          </svg>
        </button>
        <button className="icon-btn" title="Whole globe" onClick={() => engine?.flyHome()}>
          <House size={17} />
        </button>
        <button className={`icon-btn${layersOpen ? ' active' : ''}`} title="Map layers" onClick={() => setLayersOpen((o) => !o)}>
          <Layers size={17} />
        </button>
        {layersOpen && (
          <div className="layers-pop glass-strong">
            <h4>Base map</h4>
            {defs
              .filter((d) => d.kind === 'base')
              .map((d) => (
                <button key={d.id} className="layer-row" onClick={() => onBase(d.id)}>
                  <span className={`radio${base === d.id ? ' on' : ''}`} />
                  <span>
                    <div className="t">{d.label}</div>
                    <div className="d">{d.description}</div>
                  </span>
                </button>
              ))}
            {defs.some((d) => d.kind === 'overlay') && (
              <>
                <div className="layers-sep" />
                <h4>Overlays</h4>
                {defs
                  .filter((d) => d.kind === 'overlay')
                  .map((d) => {
                    const on = overlays.includes(d.id);
                    return (
                      <button key={d.id} className="layer-row" onClick={() => onOverlay(d.id, !on)}>
                        <span className={`check${on ? ' on' : ''}`}>{on && <Check size={11} strokeWidth={3} />}</span>
                        <span>
                          <div className="t">{d.label}</div>
                          <div className="d">{d.description}</div>
                        </span>
                      </button>
                    );
                  })}
              </>
            )}
            <div className="layers-sep" />
            <div className="toggle-row">
              <span>
                3D terrain
                <div className="d" style={{ fontSize: 11.5, color: 'var(--text-3)', fontWeight: 400 }}>
                  {HAS_ION ? 'Real elevation and mountains' : 'Needs a Cesium ion token to enable'}
                </div>
              </span>
              <button className={`switch${terrain3d && HAS_ION ? ' on' : ''}`} disabled={!HAS_ION} onClick={() => onTerrain3d(!terrain3d)} aria-label="Toggle 3D terrain" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
