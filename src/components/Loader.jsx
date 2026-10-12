import { useEffect, useState } from 'react';
import { useLang } from '../i18n/useLang';
import { markLoaderSeen } from '../utils/loaderSeen';
import '../styles/loader.css';

/* Wordmark que se preenche em negativo enquanto o contador avança (ref: Lusion). */
export default function Loader({ onReveal }) {
  const { t } = useLang();
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const total = reduced ? 300 : 1600;
    const start = performance.now();
    let frame;

    const tick = (now) => {
      const p = Math.min(1, (now - start) / total);
      setCount(Math.round(p * 100));
      if (p < 1) frame = requestAnimationFrame(tick);
      else setLeaving(true);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!leaving) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    onReveal();
    const t = setTimeout(() => {
      markLoaderSeen();
      setGone(true);
    }, reduced ? 0 : 900);
    return () => clearTimeout(t);
  }, [leaving, onReveal]);

  if (gone) return null;

  return (
    <div className={`loader${leaving ? ' loader--leaving' : ''}`} role="status" aria-label={t.loading}>
      <div className="loader__mark" aria-hidden="true">
        <span>Vazio</span>
        <span className="loader__neg">Vazio</span>
      </div>
      <span className="loader__count" aria-hidden="true">{String(count).padStart(3, '0')}</span>
    </div>
  );
}
