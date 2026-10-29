import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Troca de rota: vai ao topo, ou à âncora do hash (/#method). O scroll suave do CSS fica para os cliques dentro da página. */
export default function ScrollManager() {
  const { key, hash } = useLocation();
  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [key, hash]);
  return null;
}
