import type { ReactNode } from "react";
import { cx } from "@/shared/lib/cx";
import { Reveal } from "../reveal";
import "./section.css";

interface SectionProps {
  id?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: "white" | "gray";
  className?: string;
  children: ReactNode;
}

export const Section = ({
  id,
  title,
  subtitle,
  tone = "white",
  className,
  children,
}: SectionProps) => (
  <section id={id} className={cx("section", `section-${tone}`, className)}>
    <div className="page-container">
      <Reveal>
        <header className="section-head">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </header>
        {children}
      </Reveal>
    </div>
  </section>
);
