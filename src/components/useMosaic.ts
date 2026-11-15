import { useEffect, useRef, useState } from 'react';
import type { Site } from '../data/types';
import { groundWidthForSite, renderMosaicProgressive } from '../lib/mosaic';

/** Lazily renders a true-scale image for a site with progressive loading.
 *  Shows a fast low-res preview first, then upgrades to full resolution. */
export function useMosaic(site: Site | undefined, w: number, h: number, widthM?: number, lazy = false) {
  const [url, setUrl] = useState<string | null>(null);
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(!lazy);

  useEffect(() => {
    if (!lazy || visible) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [lazy, visible]);

  const width = site ? widthM ?? groundWidthForSite(site.view.range_km) : 0;
  useEffect(() => {
    if (!site || !visible) return;
    let alive = true;
    setUrl(null);
    const req = { body: site.body, lat: site.lat, lon: site.lon, widthM: width, w, h };
    renderMosaicProgressive(req, (previewUrl) => {
      if (alive) setUrl(previewUrl);
    }).then((fullUrl) => {
      if (alive && fullUrl) setUrl(fullUrl);
    });
    return () => {
      alive = false;
    };
  }, [site?.id, site?.body, site?.lat, site?.lon, width, w, h, visible]);

  return { url, ref, widthM: width };
}
