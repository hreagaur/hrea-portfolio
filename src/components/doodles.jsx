// Placeholder doodles — replace these with your own SVG drawings.
// Tip: export each doodle from Illustrator/Procreate as SVG and paste it here,
// or use <img src="/doodles/alien.svg" alt="" width="84" />.

const s = { fill: 'none', stroke: '#1F3B2D', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const DOODLES = {
  bulb: (
    <svg width="70" height="90" viewBox="0 0 70 90" {...s}>
      <path d="M35 18 C22 18 14 28 14 39 C14 48 20 53 24 59 L24 66 L46 66 L46 59 C50 53 56 48 56 39 C56 28 48 18 35 18 Z" fill="#D9A441" />
      <path d="M26 72 L44 72 M28 78 L42 78" />
      <path d="M35 2 L35 9 M8 14 L13 19 M62 14 L57 19 M2 40 L8 40 M68 40 L62 40" />
    </svg>
  ),
  spiral: (
    <svg width="70" height="70" viewBox="0 0 70 70" {...s} stroke="#A63F22">
      <path d="M35 35 a3 3 0 0 1 6 0 a6 6 0 0 1 -12 0 a9 9 0 0 1 18 0 a12 12 0 0 1 -24 0 a15 15 0 0 1 30 0 a18 18 0 0 1 -36 0 a21 21 0 0 1 42 0" />
    </svg>
  ),
  eye: (
    <svg width="80" height="50" viewBox="0 0 80 50" {...s}>
      <path d="M4 25 C20 4 60 4 76 25 C60 46 20 46 4 25 Z" fill="#FFFFFF" />
      <circle cx="40" cy="25" r="11" fill="#2F6F73" />
      <circle cx="40" cy="25" r="5" fill="#1F3B2D" />
      <path d="M14 10 L10 4 M28 6 L26 0 M52 6 L54 0 M66 10 L70 4" />
    </svg>
  ),
  alien: (
    <svg width="84" height="84" viewBox="0 0 84 84" {...s}>
      <path d="M30 18 L24 6 M54 18 L60 6" />
      <circle cx="24" cy="6" r="3" fill="#D9A441" />
      <circle cx="60" cy="6" r="3" fill="#D9A441" />
      <path d="M42 16 C62 16 72 30 72 44 C72 62 56 78 42 78 C28 78 12 62 12 44 C12 30 22 16 42 16 Z" fill="#B9C9A0" />
      <ellipse cx="30" cy="44" rx="8" ry="11" fill="#1F3B2D" />
      <ellipse cx="54" cy="44" rx="8" ry="11" fill="#1F3B2D" />
      <path d="M36 64 Q42 68 48 64" />
    </svg>
  ),
  ufo: (
    <svg width="110" height="80" viewBox="0 0 110 80" {...s}>
      <path d="M35 34 C35 18 75 18 75 34" fill="#FFFFFF" />
      <ellipse cx="55" cy="38" rx="48" ry="12" fill="#A63F22" />
      <circle cx="30" cy="38" r="2.5" fill="#F2E8D5" stroke="none" />
      <circle cx="55" cy="41" r="2.5" fill="#F2E8D5" stroke="none" />
      <circle cx="80" cy="38" r="2.5" fill="#F2E8D5" stroke="none" />
      <path d="M40 56 L32 76 M55 56 L55 78 M70 56 L78 76" strokeDasharray="3 5" />
    </svg>
  ),
  what: <span className="doodle__text doodle__text--big">?!</span>,
  hmm: <span className="doodle__text">hmm…</span>,
  leaf: (
    <svg width="60" height="90" viewBox="0 0 60 90" {...s}>
      <path d="M30 86 C30 60 30 30 30 4 M30 20 C22 16 16 18 12 24 M30 20 C38 16 44 18 48 24 M30 36 C20 32 13 35 8 42 M30 36 C40 32 47 35 52 42 M30 52 C20 48 12 52 6 60 M30 52 C40 48 48 52 54 60" />
    </svg>
  ),
  star: (
    <svg width="56" height="56" viewBox="0 0 56 56" {...s}>
      <path d="M28 4 L33 22 L52 28 L33 34 L28 52 L23 34 L4 28 L23 22 Z" fill="#D9A441" />
    </svg>
  ),
  planet: (
    <svg width="96" height="70" viewBox="0 0 96 70" {...s}>
      <circle cx="48" cy="35" r="20" fill="#A63F22" />
      <ellipse cx="48" cy="38" rx="44" ry="10" transform="rotate(-12 48 38)" />
    </svg>
  ),
  brush: (
    <svg width="90" height="90" viewBox="0 0 90 90" {...s}>
      <path d="M82 8 L42 48" />
      <path d="M42 48 C32 44 20 52 22 64 C23 72 16 78 8 82 C26 86 46 80 48 64 C49 58 46 52 42 48 Z" fill="#A63F22" />
    </svg>
  ),
};
