import { useLang } from '../i18n/useLang';

/* Pilha de cartões com position: sticky. Cada etapa cobre a anterior ao rolar; a ordem é o argumento. */
export default function Method() {
  const { t } = useLang();
  return (
    <section id="method" className="method container" aria-labelledby="method-title">
      <h2 id="method-title" className="section-title">{t.method.title}</h2>
      <ol className="method__stack">
        {t.method.steps.map((step, i) => (
          <li key={step.verb} className={`method__card method__card--${i + 1}`} style={{ '--i': i }}>
            <h3 className="method__verb">{step.verb}</h3>
            <p className="method__text">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
