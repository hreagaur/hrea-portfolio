import { useRef, useState } from 'react';
import { site } from '../data/site.js';
import { DOODLES } from './doodles.jsx';

// Where each doodle lands when the head "pops" [x%, y%, rotation°]
const SPOTS = {
  bulb: [50, 10, -6],
  spiral: [34, 15, 10],
  eye: [66, 14, -8],
  alien: [20, 32, -12],
  ufo: [80, 28, 8],
  what: [28, 50, -10],
  hmm: [73, 48, 6],
  leaf: [11, 64, -14],
  star: [89, 60, 18],
  planet: [84, 84, -6],
  brush: [15, 86, 12],
};

export default function InsideMyHead() {
  const [pop, setPop] = useState(false);
  const [faceOk, setFaceOk] = useState(false);
  const cursorRef = useRef(null);

  // Negative-colour cursor, only inside this section
  const onMove = (e) => {
    const c = cursorRef.current;
    if (!c) return;
    c.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    c.classList.add('is-on');
    c.classList.toggle('is-hover', !!e.target.closest('a, button'));
  };
  const onLeave = () => cursorRef.current?.classList.remove('is-on');

  return (
    <section id="head" className="snap head" aria-label="Inside my head" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="head__title">
        <span className="label">inside my</span>
        <h2 className="h2">head.</h2>
      </div>

      {Object.entries(SPOTS).map(([key, [x, y, r]], i) => (
        <div
          key={key}
          className="doodle"
          aria-hidden="true"
          style={{
            left: pop ? `${x}%` : '50%',
            top: pop ? `${y}%` : '58%',
            opacity: pop ? 1 : 0,
            transform: pop ? `translate(-50%, -50%) scale(1) rotate(${r}deg)` : 'translate(-50%, -50%) scale(0) rotate(-40deg)',
            transitionDelay: pop ? `${i * 0.05}s` : '0s',
          }}
        >
          {DOODLES[key]}
        </div>
      ))}

      <button
        type="button"
        className={`head__face${pop ? ' is-popped' : ''}`}
        onClick={() => setPop((p) => !p)}
        aria-pressed={pop}
        aria-label={pop ? 'Close my head' : 'Peek inside my head'}
      >
        {site.face && (
          <img src={site.face} alt="" onLoad={() => setFaceOk(true)} onError={() => setFaceOk(false)} style={{ display: faceOk ? 'block' : 'none' }} />
        )}
        {!faceOk && <span>[your face]</span>}
      </button>

      <span className="head__hint" aria-hidden="true">{pop ? 'ok, that’s enough' : '← click my head'}</span>

      <div ref={cursorRef} className="cursor" aria-hidden="true" />
    </section>
  );
}
