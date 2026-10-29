import { Plus } from '@phosphor-icons/react';
import { useLang } from '../i18n/useLang';

export default function Faq() {
  const { t } = useLang();
  return (
    <section id="faq" className="faq container" aria-labelledby="faq-title">
      <h2 id="faq-title" className="section-title faq__title">{t.faq.title}</h2>
      <div className="faq__list">
        {t.faq.items.map((item) => (
          <details key={item.q} name="faq" className="faq__item">
            <summary>
              <span>{item.q}</span>
              <Plus size={22} aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
