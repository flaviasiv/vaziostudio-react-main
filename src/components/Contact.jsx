import { ArrowUpRight } from '@phosphor-icons/react';
import Reveal from './Reveal';
import { useLang } from '../i18n/useLang';
import '../styles/contact.css';

const EMAIL = 'flavia@vaziodesignstudio.com';

export default function Contact() {
  const { t } = useLang();
  return (
    <footer id="contact" className="contact container">
      <Reveal as="h2" className="contact__title">
        {t.contact.title}
      </Reveal>

      <Reveal>
        <a href={`mailto:${EMAIL}`} className="contact__mail" data-cursor="smile">
          {EMAIL}
          <ArrowUpRight size={32} aria-hidden="true" />
        </a>
        <p className="contact__note">{t.contact.note}</p>
      </Reveal>

      <div className="contact__bar">
        <span>{t.contact.rights}</span>
        <span>{t.contact.place}</span>
        <a href="#top">{t.contact.top}</a>
      </div>
    </footer>
  );
}
