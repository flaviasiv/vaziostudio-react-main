import { useCallback, useEffect, useMemo, useState } from 'react';
import { content, DEFAULT_LANG } from './content';
import { LangContext } from './context';


function initialLang() {
  try {
    const saved = localStorage.getItem('vazio-lang');
    if (saved && content[saved]) return saved;
  } catch {
    /* storage bloqueado */
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : DEFAULT_LANG;
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
  }, [t]);

  const toggle = useCallback(() => {
    setLang((l) => {
      const next = l === 'en' ? 'pt' : 'en';
      try {
        localStorage.setItem('vazio-lang', next);
      } catch {
        /* ignora */
      }
      return next;
    });
  }, []);

  const value = useMemo(() => ({ lang, t, toggle }), [lang, t, toggle]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
