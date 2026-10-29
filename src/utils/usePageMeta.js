import { useEffect } from 'react';

/* Título e descrição da aba, por rota. O idioma (html lang) fica no LangProvider. */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}
