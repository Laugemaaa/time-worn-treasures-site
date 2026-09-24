import { useEffect, useRef, useState } from "react";

export function useDeferredMedia(rootMargin = "1200px 0px") {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || ready) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReady(true);
        observer.disconnect();
      }
    }, { rootMargin });

    observer.observe(element);
    return () => observer.disconnect();
  }, [ready, rootMargin]);

  return { ref, ready };
}
