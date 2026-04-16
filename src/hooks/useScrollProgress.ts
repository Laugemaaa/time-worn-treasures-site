import { useEffect, useState } from "react";

/**
 * Returns smoothed scroll progress (0..1) over a given pixel range starting from page top.
 * Uses requestAnimationFrame to avoid layout thrash.
 */
export function useScrollProgress(maxScroll = 800) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const y = window.scrollY || window.pageYOffset;
      const p = Math.max(0, Math.min(1, y / maxScroll));
      setProgress(p);
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [maxScroll]);

  return progress;
}
