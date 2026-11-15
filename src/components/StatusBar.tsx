import { useEffect, useRef } from 'react';
import type { GlobeEngine } from '../globe/engine';
import { fmtAltitude, fmtLat, fmtLon } from '../lib/format';

export default function StatusBar({ engine, ready, creditRef }: { engine: GlobeEngine | null; ready: boolean; creditRef: React.RefObject<HTMLDivElement | null> }) {
  const cursor = useRef<HTMLSpanElement>(null);
  const alt = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!engine || !ready) return;
    const canvas = engine.viewer?.scene.canvas;
    let raf = 0;
    let last: PointerEvent | null = null;
    const onMove = (e: PointerEvent) => {
      last = e;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (!last || !cursor.current || !canvas) return;
        const r = canvas.getBoundingClientRect();
        const ll = engine.pickLatLon(last.clientX - r.left, last.clientY - r.top);
        cursor.current.textContent = ll ? `${fmtLat(ll.lat, 3)}  ${fmtLon(ll.lon, 3)}` : '';
      });
    };
    const updateAlt = () => {
      const cs = engine.cameraState();
      if (cs && alt.current) alt.current.textContent = `Eye altitude ${fmtAltitude(cs.height)}`;
    };
    canvas?.addEventListener('pointermove', onMove);
    const off = engine.onCamera(updateAlt);
    updateAlt();
    return () => {
      canvas?.removeEventListener('pointermove', onMove);
      off();
      cancelAnimationFrame(raf);
    };
  }, [engine, ready]);

  return (
    <div className="statusbar">
      <div className="left">
        <span ref={alt} />
        <span ref={cursor} />
      </div>
      <div className="credits" ref={creditRef} />
    </div>
  );
}
