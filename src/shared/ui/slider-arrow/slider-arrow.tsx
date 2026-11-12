import { cx } from "@/shared/lib/cx";
import { Icon } from "../icon/icon";
import "./slider-arrow.css";

interface SliderArrowProps {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}

export const SliderArrow = ({
  direction,
  onClick,
  className,
}: SliderArrowProps) => (
  <button
    type="button"
    className={cx("slider-arrow", className)}
    onClick={onClick}
    aria-label={direction === "prev" ? "Назад" : "Вперёд"}
  >
    <Icon
      name={direction === "prev" ? "arrow-left" : "arrow-right"}
      size={22}
    />
  </button>
);
