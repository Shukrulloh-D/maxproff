import type { ReactNode } from "react";
import { cx } from "@/shared/lib/cx";
import { useInView } from "@/shared/lib/use-in-view";
import "./reveal.css";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

export const Reveal = ({ children, className }: RevealProps) => {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cx("reveal", visible && "reveal-visible", className)}
    >
      {children}
    </div>
  );
};
