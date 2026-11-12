import type { RadioOption } from "@/shared/ui/radio-group";

export type RepairKind = "cosmetic" | "capital" | "turnkey" | "designer";
export type Housing = "new" | "secondary";
export type Rooms = 1 | 2 | 3 | 4;

export interface CalcInput {
  repair: RepairKind;
  housing: Housing;
  rooms: Rooms;
  area: number;
}

export interface CalcResult {
  total: number;
  discount: number;
  days: number;
}

export const REPAIR_OPTIONS: RadioOption<RepairKind>[] = [
  { value: "cosmetic", label: "Косметический" },
  { value: "capital", label: "Капитальный" },
  { value: "turnkey", label: "Под ключ" },
  { value: "designer", label: "Дизайнерский" },
];

export const HOUSING_OPTIONS: RadioOption<Housing>[] = [
  { value: "new", label: "Новостройка" },
  { value: "secondary", label: "Вторичное жильё" },
];

export const ROOMS_OPTIONS: RadioOption<Rooms>[] = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
];

export const AREA = { min: 20, max: 200 } as const;

export const INITIAL_INPUT: CalcInput = {
  repair: "cosmetic",
  housing: "new",
  rooms: 1,
  area: 38,
};

const RATE: Record<RepairKind, number> = {
  cosmetic: 2450,
  capital: 4950,
  turnkey: 5450,
  designer: 7500,
};

const DAYS_PER_METER: Record<RepairKind, number> = {
  cosmetic: 0.35,
  capital: 0.7,
  turnkey: 0.8,
  designer: 1,
};

const HOUSING_FACTOR: Record<Housing, number> = { new: 1, secondary: 1.12 };
const ROOMS_FACTOR: Record<Rooms, number> = { 1: 1, 2: 1.02, 3: 1.04, 4: 1.06 };
const DISCOUNT = 0.1;

export const calculate = ({
  repair,
  housing,
  rooms,
  area,
}: CalcInput): CalcResult => {
  const total = Math.round(
    RATE[repair] * area * HOUSING_FACTOR[housing] * ROOMS_FACTOR[rooms],
  );

  return {
    total,
    discount: Math.round(total * DISCOUNT),
    days: Math.round(8 + area * DAYS_PER_METER[repair]),
  };
};

export const formatDays = (days: number): string =>
  `до ${days} ${days % 10 === 1 && days % 100 !== 11 ? "дня" : "дней"}`;
