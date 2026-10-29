import { useCallback, useState } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Contact from './components/Contact';
import Void3DGate from './components/Void3DGate';
import ScrollManager from './components/ScrollManager';
import Home from './pages/Home';
import Works from './pages/Works';
import WorkCase from './pages/WorkCase';
import { loaderSeen, markLoaderSeen } from './utils/loader';
import { useLang } from './i18n/useLang';

/* Cursor, cabeçalho e rodapé ficam montados entre as rotas. A mão 3D e a abertura são só da home. */
function Layout() {
  const { t } = useLang();
  const { pathname } = useLocation();
  const [seen] = useState(() => loaderSeen() || pathname !== '/');
  const [ready, setReady] = useState(seen);
  const reveal = useCallback(() => {
    markLoaderSeen();
    setReady(true);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">{t.skip}</a>
      <ScrollManager />
      {!ready && <Loader onDone={reveal} />}
      <Cursor />
      {pathname === '/' && <Void3DGate />}
      <Header />
      <main id="main">
        <Outlet context={{ ready }} />
      </main>
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="works" element={<Works />} />
        <Route path="works/:slug" element={<WorkCase />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
