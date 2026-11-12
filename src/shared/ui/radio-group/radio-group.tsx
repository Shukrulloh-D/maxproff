import { useId } from "react";
import { cx } from "@/shared/lib/cx";
import "./radio-group.css";

export interface RadioOption<T extends string | number> {
  value: T;
  label: string;
}

interface RadioGroupProps<T extends string | number> {
  legend: string;
  options: ReadonlyArray<RadioOption<T>>;
  value: T;
  onChange: (value: T) => void;
  variant?: "dot" | "chip";
  layout?: "row" | "grid";
}

export const RadioGroup = <T extends string | number>({
  legend,
  options,
  value,
  onChange,
  variant = "dot",
  layout = "row",
}: RadioGroupProps<T>) => {
  const name = useId();

  return (
    <fieldset
      className={cx(
        "radio-group",
        `radio-group-${variant}`,
        `radio-group-${layout}`,
      )}
    >
      <legend className="radio-group-legend">{legend}</legend>
      <div className="radio-group-options">
        {options.map((option) => (
          <label key={option.value} className="radio-option">
            <input
              type="radio"
              name={name}
              checked={option.value === value}
              onChange={() => onChange(option.value)}
            />
            {variant === "dot" && <span className="radio-mark" />}
            <span className="radio-label">{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};
