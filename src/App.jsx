import { useCallback, useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Loader from './components/Loader';
import { loaderAlreadySeen } from './utils/loaderSeen';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './pages/Home';
import Case from './pages/Case';
import { useLang } from './i18n/useLang';

export default function App() {
  const { t } = useLang();
  const { pathname, hash, key } = useLocation();
  const lenis = useRef(null);
  const [seen] = useState(loaderAlreadySeen);
  const [ready, setReady] = useState(seen);
  const reveal = useCallback(() => setReady(true), []);

  // trava o scroll enquanto o loading está na tela
  useEffect(() => {
    document.documentElement.classList.toggle('is-loading', !seen && !ready);
    return () => document.documentElement.classList.remove('is-loading');
  }, [seen, ready]);

  // scroll suave com inércia
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const instance = new Lenis({ autoRaf: true, lerp: 0.1 });
    lenis.current = instance;
    return () => {
      instance.destroy();
      lenis.current = null;
    };
  }, []);

  // navegação: vai para a âncora (#work, #top...) ou para o topo da nova página
  useEffect(() => {
    const target = hash ? document.querySelector(hash) : null;
    if (lenis.current) {
      if (target) lenis.current.scrollTo(target);
      else lenis.current.scrollTo(0, { immediate: true });
    } else if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return (
    <>
      <a href="#main" className="skip-link">{t.skip}</a>
      {!seen && <Loader onReveal={reveal} />}
      <Cursor />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home ready={ready} />} />
          <Route path="/work/:slug" element={<Case />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Contact />
    </>
  );
}
