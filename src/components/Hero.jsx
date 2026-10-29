import { useState } from 'react';
import { site } from '../data/site.js';
import { works } from '../data/works.js';
import Placeholder from './Placeholder.jsx';
import Fern from './Fern.jsx';

export default function Hero() {
  const latest = works.find((w) => w.latest) || works[0];
  const [cutoutOk, setCutoutOk] = useState(false);

  return (
    <section id="top" className="snap bento" aria-label="About Hrea">
      <div className="bento__cell bento__name">
        <span className="label">Portfolio · {new Date().getFullYear()}</span>
        <h1 className="wordmark">
          {site.name}
          <span className="wordmark__dot">.</span>
        </h1>
      </div>

      <div className="bento__cell bento__roles">
        {site.roles.map((r) => (
          <span key={r}>{r}</span>
        ))}
      </div>

      <div className="bento__cell bento__fern">
        <Fern />
      </div>

      <div className="bento__cell bento__bio">
        <span className="label">the artist</span>
        <div className="bento__bio-text">
          <p className="body">{site.bio}</p>
          <p className="tools">
            <span className="tools__title">Tools</span> · {site.tools.join(' · ')}
          </p>
        </div>
        <a href="#works" className="text-link">See works ↓</a>
      </div>

      <div className="bento__cell bento__me">
        {site.cutout && (
          <img
            className="bento__cutout"
            src={site.cutout}
            alt="Hrea"
            onLoad={() => setCutoutOk(true)}
            onError={() => setCutoutOk(false)}
            style={{ display: cutoutOk ? 'block' : 'none' }}
          />
        )}
        {!cutoutOk && (
          <div className="bento__cutout-fallback" aria-hidden="true">
            <span>[your cutout photo]</span>
          </div>
        )}
      </div>

      {latest && (
        <a href="#works" className="bento__cell bento__latest">
          <span className="label">Latest work</span>
          <Placeholder src={latest.image} alt={latest.title} label="[latest painting]" className="bento__latest-img" />
          <span className="bento__latest-title">{latest.title}</span>
        </a>
      )}
    </section>
  );
}
