import { RefObject, useEffect, useState } from "react";

export function useInView(ref: RefObject<HTMLElement> | null) {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const element = ref?.current;
    if (!element) return;
    const options = {
      rootMargin: "10px",
      thresholds: 0.3,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      setIsInView(entries[0].isIntersecting);
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);
  }, [ref?.current]);

  return [isInView];
}
