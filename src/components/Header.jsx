import { site } from '../data/site.js';

export default function Header({ onMenu, menuOpen, logoVisible }) {
  return (
    <header className="header">
      <a href="#top" className="header__logo" aria-label={`${site.name}, back to top`} style={{ opacity: logoVisible ? 1 : 0 }}>
        <img src="/logo.png" alt="" width="50" height="40" />
      </a>
      <span className="header__loc">{site.location}</span>
      <button
        type="button"
        className="pill pill--primary header__menu"
        onClick={onMenu}
        aria-expanded={menuOpen}
        aria-controls="side-menu"
      >
        Menu
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <path d="M1 2 H19" />
          <path d="M7 10 H19" />
        </svg>
      </button>
    </header>
  );
}
