import { useState } from 'react';
import { site } from '../data/site.js';

export default function Contact() {
  const [boardOk, setBoardOk] = useState(false);

  return (
    <section id="contact" className="snap contact">
      <div className="contact__main">
        <div>
          <span className="label">want to</span>
          <h2 className="h2">
            say hi<span className="accent">?</span>
          </h2>
        </div>
        <a className="contact__email" href={`mailto:${site.email}`}>{site.email} ↗</a>
        <div className="contact__links">
          <a className="pill pill--primary" href={site.links.behance} target="_blank" rel="noreferrer">Behance ↗</a>
          <a className="pill pill--primary" href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>

      <div className="laststop">
        <div className="laststop__board">
          {site.stationBoard && (
            <img
              src={site.stationBoard}
              alt="Illustration of the Mangaluru Central station board"
              onLoad={() => setBoardOk(true)}
              onError={() => setBoardOk(false)}
              style={{ display: boardOk ? 'block' : 'none' }}
            />
          )}
          {!boardOk && <span>[Mangaluru Central board illustration]</span>}
        </div>
        <span className="laststop__note">you’ve reached the last stop.</span>
      </div>

      <footer className="footer">
        <span>Designed &amp; built in Mangaluru</span>
        <span>© {new Date().getFullYear()} {site.fullName}</span>
      </footer>
    </section>
  );
}
