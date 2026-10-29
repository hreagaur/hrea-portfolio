import { notes } from '../data/notes.js';
import Placeholder from './Placeholder.jsx';

export default function FieldNotes() {
  return (
    <section id="notes" className="snap notes">
      <div className="section-head">
        <span className="label">from the</span>
        <h2 className="h2">field notes.</h2>
      </div>
      <div className="notes__grid">
        {notes.map((n) => (
          <article key={n.entry} className="note">
            <span className="note__entry">{n.entry}</span>
            <Placeholder src={n.image} alt={n.entry} label="[sketchbook page]" className="note__img" />
            <p className="body">{n.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
