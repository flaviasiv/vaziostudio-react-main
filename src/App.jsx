import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Supernova from './pages/Supernova';
import Botteghe from './pages/Botteghe';
import BuddyNutrition from './pages/BuddyNutrition';
import Lata from './pages/Lata';
import ClicksCorres from './pages/ClicksCorres';
import Estadio97 from './pages/Estadio97';
import AstroPay from './pages/AstroPay';
import PuraTerapia from './pages/PuraTerapia';

function ScrollToTop({ lenisRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function AppContent({ theme, toggleTheme }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      lerp: 0.12,
    });

    lenisRef.current = lenis;

    const handleKeyScroll = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      const scrollY = window.scrollY;
      const pageH = window.innerHeight;
      const docH = document.body.scrollHeight;

      switch (e.key) {
        case 'End':
          e.preventDefault();
          lenis.scrollTo(docH);
          break;
        case 'Home':
          e.preventDefault();
          lenis.scrollTo(0);
          break;
        case 'PageDown':
          e.preventDefault();
          lenis.scrollTo(scrollY + pageH);
          break;
        case 'PageUp':
          e.preventDefault();
          lenis.scrollTo(scrollY - pageH);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyScroll);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('keydown', handleKeyScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop lenisRef={lenisRef} />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supernova" element={<Supernova />} />
        <Route path="/botteghe" element={<Botteghe />} />
        <Route path="/buddynutrition" element={<BuddyNutrition />} />
        <Route path="/lata" element={<Lata />} />
        <Route path="/clickscorres" element={<ClicksCorres />} />
        <Route path="/estadio97" element={<Estadio97 />} />
        <Route path="/astropay" element={<AstroPay />} />
        <Route path="/pura-terapia" element={<PuraTerapia />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <HelmetProvider>
      <Router>
        <AppContent theme={theme} toggleTheme={toggleTheme} />
      </Router>
    </HelmetProvider>
  );
}

export default App;
