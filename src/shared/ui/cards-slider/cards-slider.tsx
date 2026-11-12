import { Children, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { SliderDots } from "../slider-dots";
import "./cards-slider.css";

interface CardsSliderProps {
  columns: 2 | 3 | 4;
  tabletColumns?: 1 | 2 | 3;
  label: string;
  children: ReactNode;
}

type SliderStyle = CSSProperties & {
  "--columns": number;
  "--tablet-columns": number;
};

export const CardsSlider = ({
  columns,
  tabletColumns = 2,
  label,
  children,
}: CardsSliderProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const items = Children.toArray(children);
  const style: SliderStyle = {
    "--columns": columns,
    "--tablet-columns": tabletColumns,
  };

  const handleScroll = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const reachedEnd =
      track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;

    setIndex(
      reachedEnd
        ? items.length - 1
        : Math.round(track.scrollLeft / (first.offsetWidth + gap)),
    );
  };

  const goTo = (target: number) => {
    const track = trackRef.current;
    const card = track?.children[target] as HTMLElement | undefined;
    if (!track || !card) return;

    const padding = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    track.scrollTo({ left: card.offsetLeft - padding, behavior: "smooth" });
  };

  return (
    <div className="cards-slider" style={style}>
      <div
        ref={trackRef}
        className="cards-slider-track"
        role="group"
        aria-label={label}
        onScroll={handleScroll}
      >
        {items.map((item, position) => (
          <div key={position} className="cards-slider-item">
            {item}
          </div>
        ))}
      </div>
      <SliderDots
        className="cards-slider-dots"
        count={items.length}
        index={index}
        onSelect={goTo}
      />
    </div>
  );
};
