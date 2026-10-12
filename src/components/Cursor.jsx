import { useEffect, useRef } from 'react';
import '../styles/cursor.css';

/* Seguidor em negativo (ref: Monopo). O cursor nativo continua visível. */
export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = ref.current;
    if (!fine || !el) return undefined;

    let x = -100;
    let y = -100;
    let cx = x;
    let cy = y;
    let frame;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      el.classList.add('cursor--on');
      const t = e.target.closest?.('[data-cursor], a, button');
      el.dataset.mode = t ? t.dataset.cursor || 'link' : '';
    };
    const onLeave = () => el.classList.remove('cursor--on');

    const loop = () => {
      const k = reduced ? 1 : 0.18;
      cx += (x - cx) * k;
      cy += (y - cy) * k;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <div className="cursor__shape">
        <svg className="cursor__smile" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10.5" />
          <circle cx="8.5" cy="9.5" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="9.5" r="0.7" fill="currentColor" stroke="none" />
          <path d="M7.5 14.5c1 1.8 2.6 2.7 4.5 2.7s3.5-.9 4.5-2.7" />
        </svg>
      </div>
    </div>
  );
}
