import { useCallback, useEffect, useMemo, useState } from 'react';
import { content, DEFAULT_LANG } from './content';
import { LangContext } from './useLang';

const STORAGE_KEY = 'vazio-lang';

const readSaved = () => {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v && content[v] ? v : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
};

export default function LangProvider({ children }) {
  const [lang, setLang] = useState(readSaved);
  const t = content[lang];

  const toggle = useCallback(() => {
    setLang((l) => (l === 'en' ? 'pt' : 'en'));
  }, []);

  // mantém <html lang>, título e descrição em sincronia com o idioma
  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* sem localStorage: o idioma volta ao padrão na próxima visita */
    }
  }, [lang, t]);

  const value = useMemo(() => ({ lang, t, toggle }), [lang, t, toggle]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
