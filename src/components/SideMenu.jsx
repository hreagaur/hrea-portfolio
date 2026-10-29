import { useEffect, useRef } from 'react';
import { site } from '../data/site.js';

const ITEMS = [
  { label: 'The artist', href: '#top' },
  { label: 'Works', href: '#works' },
  { label: 'Field notes', href: '#notes' },
  { label: 'My head', href: '#head' },
  { label: 'Say hi', href: '#contact' },
];

export default function SideMenu({ open, onClose }) {
  const closeRef = useRef(null);

  // Move focus into the menu when it opens
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <>
      {open && <button type="button" className="menu-backdrop" aria-label="Close menu" onClick={onClose} />}
      <aside id="side-menu" className={`side-menu${open ? ' is-open' : ''}`} aria-label="Site menu" aria-hidden={!open}>
        <div className="side-menu__top">
          <button ref={closeRef} type="button" className="pill pill--dark side-menu__close" onClick={onClose} tabIndex={open ? 0 : -1}>
            Close
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M2 2 L14 14" />
              <path d="M14 2 L2 14" />
            </svg>
          </button>
        </div>

        <nav className="side-menu__nav">
          {ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="menu-link"
              style={{ transitionDelay: open ? `${0.2 + i * 0.08}s` : '0s' }}
              onClick={onClose}
              tabIndex={open ? 0 : -1}
            >
              <span className="menu-link__label">
                {item.label}
                <svg className="menu-link__circle" viewBox="0 0 200 100" preserveAspectRatio="none" fill="none" aria-hidden="true">
                  <path d="M44 10 C112 3 186 8 193 46 C198 82 142 96 94 95 C42 94 7 80 7 50 C8 22 52 7 112 6 C150 5 178 11 188 20" />
                </svg>
              </span>
            </a>
          ))}
        </nav>

        <div className="side-menu__social">
          <a className="pill pill--light" href={site.links.behance} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>Behance ↗</a>
          <a className="pill pill--light" href={site.links.linkedin} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>LinkedIn ↗</a>
          <a className="pill pill--light" href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>Email ↗</a>
        </div>
      </aside>
    </>
  );
}
