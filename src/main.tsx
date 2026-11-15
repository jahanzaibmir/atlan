import { createRoot } from 'react-dom/client';
import { useState, useCallback } from 'react';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import './styles/app.css';
import { getUser, clearUser, type User } from './auth';
import LandingPage from './components/LandingPage';
import App from './App';

(window as unknown as { CESIUM_BASE_URL: string }).CESIUM_BASE_URL = CESIUM_BASE_URL;

function Root() {
  const [user, setUser] = useState<User | null>(getUser);

  const handleLogin = useCallback((u: User) => setUser(u), []);
  const handleLogout = useCallback(() => {
    clearUser();
    setUser(null);
  }, []);

  if (!user) return <LandingPage onLogin={handleLogin} />;
  return <App user={user} onLogout={handleLogout} />;
}

createRoot(document.getElementById('root')!).render(<Root />);
