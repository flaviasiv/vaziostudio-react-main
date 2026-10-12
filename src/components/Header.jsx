import { Link } from 'react-router-dom';
import { useLang } from '../i18n/useLang';
import '../styles/header.css';

export default function Header() {
  const { t, toggle } = useLang();
  const links = [
    { to: { pathname: '/', hash: '#work' }, label: t.nav.work },
    { to: { pathname: '/', hash: '#about' }, label: t.nav.about },
    { to: { hash: '#contact' }, label: t.nav.contact },
  ];

  return (
    <header className="header" id="top">
      <div className="header__inner">
        <Link to="/" className="header__logo" aria-label={t.nav.home}>
          Vazio
        </Link>
        <nav aria-label={t.nav.aria}>
          <ul className="header__nav">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
            <li>
              <button type="button" className="header__lang" onClick={toggle} aria-label={t.nav.switchLabel}>
                {t.nav.switchTo}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
