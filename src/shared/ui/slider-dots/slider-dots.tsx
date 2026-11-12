import { cx } from "@/shared/lib/cx";
import "./slider-dots.css";

interface SliderDotsProps {
  count: number;
  index: number;
  onSelect: (index: number) => void;
  className?: string;
}

export const SliderDots = ({
  count,
  index,
  onSelect,
  className,
}: SliderDotsProps) => (
  <div
    className={cx("slider-dots", className)}
    role="group"
    aria-label="Выбор слайда"
  >
    {Array.from({ length: count }, (_, position) => (
      <button
        key={position}
        type="button"
        className={cx("slider-dot", position === index && "slider-dot-active")}
        aria-label={`Слайд ${position + 1}`}
        aria-current={position === index}
        onClick={() => onSelect(position)}
      />
    ))}
  </div>
);
