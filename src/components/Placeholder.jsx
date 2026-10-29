// Shows your image if there is one, otherwise a labelled placeholder box.
export default function Placeholder({ src, alt, label, className = '', tone = '#E3D3B5' }) {
  if (src) return <img className={`media ${className}`} src={src} alt={alt} loading="lazy" />;
  return (
    <div className={`media media--empty ${className}`} style={{ background: tone }} role="img" aria-label={alt || label}>
      <span>{label}</span>
    </div>
  );
}
