const numberFormat = new Intl.NumberFormat("ru-RU");

export const formatNumber = (value: number): string =>
  numberFormat.format(value);

export const formatPrice = (value: number): string =>
  `${formatNumber(value)} руб.`;
