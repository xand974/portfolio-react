import { RefObject, useEffect, useState } from "react";

export const useSmoothScroll = (ref: RefObject<HTMLDivElement>) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = (e: Event) => {
      setPosition({ x: element.scrollLeft, y: element.scrollTop });

      element.style.transform = `matrix(1, 0, 0, 1, 0, ${element.scrollTop} )`;
    };
    element.addEventListener("scroll", handleScroll);

    return () => element.removeEventListener("scroll", handleScroll);
  }, [ref.current]);

  return [position];
};
