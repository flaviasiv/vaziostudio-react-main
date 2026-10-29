import { useEffect } from 'react';
import { useLang } from '../i18n/useLang';

const TOTAL_MS = 1600;

/* Abertura: a palavra aparece em tinta sobre papel e um círculo a inverte para papel sobre tinta (ref: Lusion).
   Dura 1,6 s, pode ser pulada e não roda com movimento reduzido. */
export default function Loader({ onDone }) {
  const { t } = useLang();

  useEffect(() => {
    const id = setTimeout(onDone, TOTAL_MS);
    return () => clearTimeout(id);
  }, [onDone]);

  return (
    <div className="loader" role="status" aria-label={t.loader.label}>
      <div className="loader__layer loader__layer--base" aria-hidden="true">
        <span>Vazio</span>
      </div>
      <div className="loader__layer loader__layer--invert" aria-hidden="true">
        <span>Vazio</span>
      </div>
      <button type="button" className="loader__skip" onClick={onDone}>
        {t.loader.skip}
      </button>
    </div>
  );
}
