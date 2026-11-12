import { useRef } from "react";
import type { PointerEvent } from "react";

export const useSwipe = (
  onPrev: () => void,
  onNext: () => void,
  threshold = 50,
) => {
  const startX = useRef<number | null>(null);

  return {
    onPointerDown: (event: PointerEvent<HTMLElement>) => {
      startX.current = event.clientX;
    },
    onPointerUp: (event: PointerEvent<HTMLElement>) => {
      if (startX.current === null) return;

      const delta = event.clientX - startX.current;
      startX.current = null;

      if (Math.abs(delta) < threshold) return;
      if (delta < 0) onNext();
      else onPrev();
    },
    onPointerCancel: () => {
      startX.current = null;
    },
  };
};
