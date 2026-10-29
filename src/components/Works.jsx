import { useRef, useState } from 'react';
import { works, CATEGORIES } from '../data/works.js';
import Placeholder from './Placeholder.jsx';

const TONES = ['#E3D3B5', '#D8C4A0', '#E8DCC4'];

export default function Works() {
  const [filter, setFilter] = useState('All');
  const trackRef = useRef(null);
  const shown = filter === 'All' ? works : works.filter((w) => w.category === filter);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  const pick = (c) => {
    setFilter(c);
    if (trackRef.current) trackRef.current.scrollLeft = 0;
  };

  return (
    <section id="works" className="snap works">
      <div className="section-head works__head">
        <div>
          <span className="label">selected</span>
          <h2 className="h2">works.</h2>
        </div>
        <div className="works__filters" role="group" aria-label="Filter works">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className={`pill ${filter === c ? 'pill--primary' : 'pill--soft'}`}
              aria-pressed={filter === c}
              onClick={() => pick(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="works__track" ref={trackRef}>
        {shown.length === 0 && <p className="works__empty">Nothing in {filter} yet.</p>}
        {shown.map((w, i) => {
          const Card = w.link ? 'a' : 'div';
          const linkProps = w.link ? { href: w.link, target: '_blank', rel: 'noreferrer' } : {};
          return (
            <Card key={`${w.title}-${i}`} className="work-card" {...linkProps}>
              <Placeholder src={w.image} alt={w.title} label="[artwork]" tone={TONES[i % TONES.length]} className="work-card__img" />
              <div className="work-card__meta">
                <span className="work-card__title">{w.title}</span>
                <span className="work-card__tag">{w.category}</span>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="works__controls">
        <button type="button" className="pill pill--primary pill--icon" aria-label="Previous works" onClick={() => scroll(-1)}>←</button>
        <button type="button" className="pill pill--primary pill--icon" aria-label="Next works" onClick={() => scroll(1)}>→</button>
      </div>

      <div className="marquee" aria-hidden="true">
        <span>{'view all works  →  ·  '.repeat(10)}</span>
      </div>
    </section>
  );
}
