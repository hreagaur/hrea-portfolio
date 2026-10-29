import { useEffect, useState } from 'react';

// Logo starts big in the centre, then shrinks into the header spot.
export default function Intro({ onDone }) {
  const [phase, setPhase] = useState('big');

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      onDone();
      return;
    }
    const t1 = setTimeout(() => setPhase('move'), 1100);
    const t2 = setTimeout(onDone, 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div className={`intro intro--${phase}`} aria-hidden="true">
      <div className="intro__bg" />
      <img className="intro__logo" src="/logo.png" alt="" width="50" height="40" />
    </div>
  );
}
