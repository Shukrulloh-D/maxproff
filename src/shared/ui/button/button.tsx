import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cx } from "@/shared/lib/cx";
import "./button.css";

type Variant = "primary" | "outline" | "outline-light";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const getClassName = ({
  variant = "primary",
  size = "md",
  block,
  className,
}: Omit<BaseProps, "children">) =>
  cx(
    "button",
    `button-${variant}`,
    `button-${size}`,
    block && "button-block",
    className,
  );

export const Button = (props: ButtonProps | LinkProps) => {
  if (props.href !== undefined) {
    const { variant, size, block, className, children, ...anchor } = props;
    return (
      <a
        className={getClassName({ variant, size, block, className })}
        {...anchor}
      >
        {children}
      </a>
    );
  }

  const {
    variant,
    size,
    block,
    className,
    children,
    type = "button",
    ...button
  } = props;
  return (
    <button
      type={type}
      className={getClassName({ variant, size, block, className })}
      {...button}
    >
      {children}
    </button>
  );
};
