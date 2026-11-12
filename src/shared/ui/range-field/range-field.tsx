import { useId } from "react";
import type { CSSProperties } from "react";
import "./range-field.css";

interface RangeFieldProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}

type RangeStyle = CSSProperties & { "--fill": string };

export const RangeField = ({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: RangeFieldProps) => {
  const id = useId();
  const fill = ((value - min) / (max - min)) * 100;
  const style: RangeStyle = { "--fill": `${fill}%` };

  return (
    <div className="range-field">
      <div className="range-field-head">
        <label className="range-field-label" htmlFor={id}>
          {label}
        </label>
        <output className="range-field-value" htmlFor={id}>
          {value}
        </output>
      </div>
      <input
        id={id}
        className="range-field-input"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        style={style}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
  );
};
