import { useCallback, useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Loader from './components/Loader';
import { loaderAlreadySeen } from './utils/loaderSeen';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import { useLang } from './i18n/useLang';

export default function App() {
  const { t } = useLang();
  const [seen] = useState(loaderAlreadySeen);
  const [ready, setReady] = useState(seen);
  const reveal = useCallback(() => setReady(true), []);

  // trava o scroll enquanto o loading está na tela
  useEffect(() => {
    document.documentElement.classList.toggle('is-loading', !seen && !ready);
    return () => document.documentElement.classList.remove('is-loading');
  }, [seen, ready]);

  // scroll suave com inércia; âncoras do menu passam pelo Lenis
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const lenis = new Lenis({ autoRaf: true, anchors: true, lerp: 0.1 });
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <a href="#work" className="skip-link">{t.skip}</a>
      {!seen && <Loader onReveal={reveal} />}
      <Cursor />
      <Header />
      <main>
        <Hero ready={ready} />
        <Works />
        <About />
      </main>
      <Contact />
    </>
  );
}
