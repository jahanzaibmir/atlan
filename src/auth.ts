export interface User {
  name: string;
  email: string;
  picture: string;
  sub: string;
}

const STORAGE_KEY = 'atlan_user';

export function getUser(): User | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setUser(user: User) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function clearUser() {
  localStorage.removeItem(STORAGE_KEY);
}

export function decodeJwt(token: string): User | null {
  try {
    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
    return {
      name: decoded.name ?? decoded.email ?? 'User',
      email: decoded.email ?? '',
      picture: decoded.picture ?? '',
      sub: decoded.sub ?? '',
    };
  } catch {
    return null;
  }
}

const CLIENT_ID = (import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined)?.trim() ?? '';
export const HAS_GOOGLE = CLIENT_ID.length > 0;

let gsiLoaded = false;

export function loadGsi(): Promise<void> {
  if (gsiLoaded) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = () => { gsiLoaded = true; resolve(); };
    script.onerror = () => reject(new Error('Failed to load Google Sign-In'));
    document.head.appendChild(script);
  });
}

export function initGoogle(onLogin: (user: User) => void): Promise<void> {
  return loadGsi().then(() => {
    const google = (window as any).google;
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: (response: { credential: string }) => {
        const user = decodeJwt(response.credential);
        if (user) {
          setUser(user);
          onLogin(user);
        }
      },
    });
  });
}

export function renderGoogleButton(el: HTMLElement) {
  const google = (window as any).google;
  if (!google?.accounts?.id) return;
  google.accounts.id.renderButton(el, {
    type: 'standard',
    theme: 'outline',
    size: 'large',
    width: 320,
    text: 'continue_with',
    shape: 'pill',
  });
}
