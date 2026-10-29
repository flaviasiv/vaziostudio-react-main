import { useEffect, useRef } from 'react';

/* Rosto simples cujos olhos seguem o ponteiro: o toque afetivo da home (ref: Resend). */
export default function Face({ className, alt }) {
  const svg = useRef(null);
  const left = useRef(null);
  const right = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduced || !fine) return undefined;

    const MAX = 4.2;
    const onMove = (e) => {
      const box = svg.current?.getBoundingClientRect();
      if (!box) return;
      const dx = e.clientX - (box.left + box.width / 2);
      const dy = e.clientY - (box.top + box.height / 2);
      const dist = Math.hypot(dx, dy) || 1;
      const k = Math.min(1, dist / 280) * MAX;
      const t = `translate(${(dx / dist) * k} ${(dy / dist) * k})`;
      left.current?.setAttribute('transform', t);
      right.current?.setAttribute('transform', t);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <svg
      ref={svg}
      className={className}
      viewBox="0 0 120 120"
      role="img"
      aria-label={alt}
    >
      <circle cx="60" cy="60" r="58" fill="var(--accent)" />
      <circle cx="42" cy="50" r="11" fill="#fff" />
      <circle cx="78" cy="50" r="11" fill="#fff" />
      <circle ref={left} cx="42" cy="50" r="5" fill="#0f1011" />
      <circle ref={right} cx="78" cy="50" r="5" fill="#0f1011" />
      <path d="M34 78c6 12 15 17 26 17s20-5 26-17" fill="none" stroke="#0f1011" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
