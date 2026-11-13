export const formatPhone = (raw: string): string => {
  let digits = raw.replace(/\D/g, "");

  if (digits.startsWith("7") || digits.startsWith("8")) {
    digits = digits.slice(1);
  }

  digits = digits.slice(0, 10);

  if (digits.length === 0) return "";

  const [code, first, second, third] = [
    digits.slice(0, 3),
    digits.slice(3, 6),
    digits.slice(6, 8),
    digits.slice(8, 10),
  ];

  let result = `+992 (${code}`;
  if (code.length === 3) result += ")";
  if (first) result += ` ${first}`;
  if (second) result += `-${second}`;
  if (third) result += `-${third}`;

  return result;
};

export const isPhoneComplete = (value: string): boolean =>
  value.replace(/\D/g, "").length === 11;
