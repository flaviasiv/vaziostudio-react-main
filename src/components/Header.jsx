import { Link, NavLink } from 'react-router-dom';
import { useLang } from '../i18n/useLang';
import HandMark from './HandMark';

export default function Header() {
  const { t, toggle } = useLang();
  return (
    <header className="header">
      <div className="header__bar container">
        <Link to="/" className="header__logo" aria-label={t.nav.home}>
          <HandMark className="header__hand" />
          Vazio
        </Link>
        <nav className="header__nav" aria-label={t.nav.aria}>
          <NavLink to="/works">{t.nav.work}</NavLink>
          <Link to="/#method">{t.nav.method}</Link>
          <Link to="/#faq">{t.nav.faq}</Link>
        </nav>
        <div className="header__actions">
          <a href="#contact" className="btn btn--solid btn--small">
            {t.cta}
          </a>
          <button type="button" className="header__lang" onClick={toggle} aria-label={t.nav.switchLabel}>
            {t.nav.switchTo}
          </button>
        </div>
      </div>
    </header>
  );
}
