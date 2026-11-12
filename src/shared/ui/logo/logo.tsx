import { cx } from "@/shared/lib/cx";
import "./logo.css";

interface LogoProps {
  light?: boolean;
}

export const Logo = ({ light = false }: LogoProps) => (
  <a
    href="#top"
    className={cx("logo", light && "logo-light")}
    aria-label="МаксПрофф — на главную"
  >
    Max<span>Proff</span>
  </a>
);
