export function revealNavigationTarget(hash: string, smooth = true) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const target = document.getElementById(hash ? hash.slice(1) : 'main-content');
  if (hash) target?.scrollIntoView({ behavior: reduced || !smooth ? 'auto' : 'smooth' });
  else window.scrollTo({ top: 0, behavior: reduced || !smooth ? 'auto' : 'smooth' });
  if (!reduced && target?.animate) {
    // Highlight the destination without moving its layout or interrupting scrolling.
    target.animate([
      { boxShadow: 'inset 0 2px 0 rgba(212,184,135,0)', backgroundColor: 'rgba(212,184,135,0)' },
      { boxShadow: 'inset 0 2px 0 rgba(212,184,135,.65)', backgroundColor: 'rgba(212,184,135,.06)', offset: .25 },
      { boxShadow: 'inset 0 2px 0 rgba(212,184,135,0)', backgroundColor: 'rgba(212,184,135,0)' },
    ], { duration: 1100, easing: 'ease-out' });
  }
}
