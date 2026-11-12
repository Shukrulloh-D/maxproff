import { formatPhone } from "@/shared/lib/phone";
import { TextField } from "../text-field";
import type { TextFieldProps } from "../text-field";

type PhoneFieldProps = Omit<
  TextFieldProps,
  "type" | "inputMode" | "autoComplete" | "maxLength"
>;

export const PhoneField = ({ onChange, ...props }: PhoneFieldProps) => (
  <TextField
    type="tel"
    inputMode="tel"
    autoComplete="tel"
    maxLength={18}
    placeholder="+7 (___) ___-__-__"
    onChange={(raw) => onChange(formatPhone(raw))}
    {...props}
  />
);
