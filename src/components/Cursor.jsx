import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/* Ponto que segue o ponteiro e vira um círculo com rótulo sobre elementos [data-cursor] (ref: Monopo).
   Só com ponteiro fino e sem movimento reduzido. O cursor nativo continua visível. */
export default function Cursor() {
  const [enabled] = useState(
    () =>
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [label, setLabel] = useState('');
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return undefined;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const el = e.target instanceof Element ? e.target.closest('[data-cursor]') : null;
      setLabel(el ? el.getAttribute('data-cursor') : '');
    };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerover', over, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', over);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;
  return (
    <motion.div className={`cursor${label ? ' cursor--label' : ''}`} style={{ x: sx, y: sy }} aria-hidden="true">
      <span>{label}</span>
    </motion.div>
  );
}
