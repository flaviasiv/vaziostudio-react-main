import { ArrowUpRight } from '@phosphor-icons/react';
import Reveal from './Reveal';
import { useLang } from '../i18n/useLang';

const EMAIL = 'flavia@vaziodesignstudio.com';

export default function Contact() {
  const { t } = useLang();
  return (
    <footer id="contact" className="contact container">
      <Reveal as="h2" className="contact__title">
        {t.contact.title}
      </Reveal>
      <Reveal delay={0.1}>
        <a href={`mailto:${EMAIL}`} className="contact__cta" data-cursor="Mail">
          {t.cta}
          <ArrowUpRight size={40} aria-hidden="true" />
        </a>
      </Reveal>
      <div className="contact__bar">
        <span>{t.contact.rights}</span>
        <span>{t.contact.place}</span>
        <a href="#top">{t.contact.top}</a>
      </div>
    </footer>
  );
}
