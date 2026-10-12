import { useLang } from '../i18n/useLang';
import '../styles/header.css';

export default function Header() {
  const { t, toggle } = useLang();
  const links = [
    { href: '#work', label: t.nav.work },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__logo" aria-label={t.nav.home}>
          Vazio
        </a>
        <nav aria-label={t.nav.aria}>
          <ul className="header__nav">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
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
