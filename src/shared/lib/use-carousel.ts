import { useCallback, useState } from "react";

export const useCarousel = (length: number) => {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (target: number) => setIndex(((target % length) + length) % length),
    [length],
  );
  const next = useCallback(
    () => setIndex((current) => (current + 1) % length),
    [length],
  );
  const prev = useCallback(
    () => setIndex((current) => (current - 1 + length) % length),
    [length],
  );

  return { index, goTo, next, prev };
};
