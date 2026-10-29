import Reveal from './Reveal';
import { useLang } from '../i18n/useLang';

/* O toque afetivo (ref: Resend): o estúdio fala como gente, assinado, sem rótulo. */
export default function Note() {
  const { t } = useLang();
  return (
    <section className="note container">
      <Reveal as="blockquote" className="note__quote">
        <p>{t.note.text}</p>
        <footer>{t.note.sign}</footer>
      </Reveal>
    </section>
  );
}
