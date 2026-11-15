import { useCallback, useEffect, useRef, useState } from 'react';
import { Mail, Smartphone, ArrowRight, Globe, MapPin, Layers } from 'lucide-react';
import { BrandMark } from './TopBar';
import { HAS_GOOGLE, initGoogle, renderGoogleButton, type User } from '../auth';

interface Props {
  onLogin: (user: User) => void;
}

function useCountUp(target: number, duration = 1600, delay = 400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const t0 = performance.now() + delay;
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - t0;
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return; }
      const p = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * ease));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, delay]);
  return val;
}

function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    el.style.setProperty('--mx', String(dx));
    el.style.setProperty('--my', String(dy));
  }, []);
  return { ref, onMove };
}

export default function LandingPage({ onLogin }: Props) {
  const googleRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [note, setNote] = useState('');
  const { ref: lpRef, onMove } = useParallax();

  const sites = useCountUp(307, 1400, 600);
  const bodies = useCountUp(3, 800, 800);
  const methods = useCountUp(12, 1000, 1000);

  useEffect(() => {
    if (!HAS_GOOGLE) { setReady(true); return; }
    initGoogle(onLogin)
      .then(() => {
        setReady(true);
        if (googleRef.current) renderGoogleButton(googleRef.current);
      })
      .catch(() => { setReady(true); setNote('Could not load Google Sign-In'); });
  }, [onLogin]);

  useEffect(() => {
    if (ready && HAS_GOOGLE && googleRef.current) renderGoogleButton(googleRef.current);
  }, [ready]);

  const guest = () => onLogin({ name: 'Explorer', email: '', picture: '', sub: 'guest' });

  return (
    <div className="lp" ref={lpRef} onMouseMove={onMove}>
      <div className="lp-mesh">
        <div className="lp-blob lp-blob-1" />
        <div className="lp-blob lp-blob-2" />
        <div className="lp-blob lp-blob-3" />
      </div>

      {/* floating decorative rings */}
      <div className="lp-ring lp-ring-1" />
      <div className="lp-ring lp-ring-2" />

      <div className="lp-grain" />

      <div className="lp-center">
        <div className="lp-brand">
          <BrandMark size={32} />
          <span>Atlan</span>
        </div>

        <h1 className="lp-title">Explore three worlds</h1>

        {/* live stats */}
        <div className="lp-stats">
          <div className="lp-stat">
            <MapPin size={16} />
            <strong>{sites}+</strong>
            <span>Sites</span>
          </div>
          <div className="lp-stat-dot" />
          <div className="lp-stat">
            <Globe size={16} />
            <strong>{bodies}</strong>
            <span>Worlds</span>
          </div>
          <div className="lp-stat-dot" />
          <div className="lp-stat">
            <Layers size={16} />
            <strong>{methods}+</strong>
            <span>Methods</span>
          </div>
        </div>

        <div className="lp-card">
          <p className="lp-card-head">Get started</p>

          {HAS_GOOGLE ? (
            <div ref={googleRef} className="lp-google-wrap" />
          ) : (
            <button className="lp-btn" onClick={() => setNote('Add VITE_GOOGLE_CLIENT_ID to .env')}>
              <GoogleIcon />
              Continue with Google
            </button>
          )}

          <button className="lp-btn" onClick={() => setNote('Email sign-in coming soon')}>
            <Mail size={18} />
            Continue with Email
          </button>

          <button className="lp-btn lp-btn-dark" onClick={() => setNote('iOS app coming soon')}>
            <Smartphone size={18} />
            Continue with Apple
          </button>

          <div className="lp-sep" />

          <button className="lp-guest" onClick={guest}>
            Skip for now — explore as guest <ArrowRight size={14} />
          </button>

          {note && <p className="lp-note">{note}</p>}
        </div>

        <p className="lp-legal">
          By continuing you agree to the Terms&nbsp;of&nbsp;Service
          and&nbsp;Privacy&nbsp;Policy.
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#34A853" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.99 23.99 0 0 0 0 24c0 3.77.9 7.35 2.56 10.52l7.97-5.93z" />
      <path fill="#FBBC05" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.93C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}
