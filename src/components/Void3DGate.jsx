import { lazy, Suspense, useEffect, useState } from 'react';

const Void3D = lazy(() => import('./Void3D'));

/* O 3D (e o three.js) carrega em qualquer largura, só não com movimento reduzido.
   Sem ele a classe .has-3d não existe e o hero mostra a mão estática. */
export default function Void3DGate() {
  const [on] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  useEffect(() => {
    document.documentElement.classList.toggle('has-3d', on);
    return () => document.documentElement.classList.remove('has-3d');
  }, [on]);
  if (!on) return null;
  return (
    <Suspense fallback={null}>
      <Void3D />
    </Suspense>
  );
}
