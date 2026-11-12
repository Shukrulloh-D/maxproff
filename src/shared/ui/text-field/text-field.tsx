import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import { cx } from "@/shared/lib/cx";
import "./text-field.css";

export interface TextFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
> {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const TextField = ({
  label,
  value,
  onChange,
  error,
  id,
  className,
  ...input
}: TextFieldProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  return (
    <div className={cx("text-field", error && "text-field-invalid", className)}>
      {label && (
        <label className="text-field-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className="text-field-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...input}
      />
      {error && (
        <p id={errorId} className="text-field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
