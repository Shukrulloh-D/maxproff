import type { TabItem } from "@/shared/ui/tabs";

export type RepairType =
  | "capital"
  | "cosmetic"
  | "turnkey"
  | "studio"
  | "rough";

export interface Project {
  id: string;
  area: number;
  price: number;
  days: number;
  rooms: number;
  address: string;
  works: string[];
  photos: string[];
}

type ProjectRow = [
  area: number,
  price: number,
  days: number,
  rooms: number,
  address: string,
];

export const REPAIR_TABS: TabItem<RepairType>[] = [
  { value: "capital", label: "Капитальный" },
  { value: "cosmetic", label: "Косметический" },
  { value: "turnkey", label: "Под ключ" },
  { value: "studio", label: "Студии" },
  { value: "rough", label: "Черновой" },
];

const WORKS = [
  "Штукатурка стен по маякам",
  "Грунтовка стен и потолка",
  "Монтаж натяжных потолков",
  "Шпатлёвка стен под обои",
  "Окраска стен",
  "Укладка плитки в санузле",
  "Прокладка электрики",
  "Установка плинтусов и откосов",
];

const build = (type: RepairType, rows: ProjectRow[]): Project[] =>
  rows.map(([area, price, days, rooms, address], index) => ({
    id: `${type}-${index}`,
    area,
    price,
    days,
    rooms,
    address,
    works: WORKS,
    photos: Array.from(
      { length: 5 },
      (_, number) => `/images/works/${type}-${number + 1}.jpg`,
    ),
  }));

export const PROJECTS: Record<RepairType, Project[]> = {
  capital: build("capital", [
    [55, 272250, 46, 2, "Москва, ул. Куликова, 18"],
    [61, 301950, 51, 2, "Москва, Ленинградский пр-т, 37"],
    [72, 356400, 58, 3, "Москва, ул. Мясницкая, 22"],
    [98, 485100, 77, 4, "Москва, Кутузовский пр-т, 12"],
    [106, 524700, 82, 4, "Москва, ул. Ленина, 5"],
    [59, 292050, 49, 2, "Москва, ул. Профсоюзная, 64"],
    [41, 202950, 37, 1, "Москва, ул. Нагатинская, 9"],
  ]),
  cosmetic: build("cosmetic", [
    [38, 93100, 21, 1, "Москва, ул. Широкая, 14"],
    [45, 110250, 24, 2, "Москва, ул. Лобачевского, 30"],
    [52, 127400, 27, 2, "Москва, ул. Верхняя, 3"],
    [64, 156800, 31, 3, "Москва, Волгоградский пр-т, 88"],
  ]),
  turnkey: build("turnkey", [
    [48, 261600, 46, 2, "Москва, ул. Академика Янгеля, 6"],
    [60, 327000, 56, 3, "Москва, ул. Обручева, 41"],
    [75, 408750, 68, 3, "Москва, ул. Тверская, 19"],
  ]),
  studio: build("studio", [
    [24, 118800, 25, 1, "Москва, ул. Люблинская, 112"],
    [28, 138600, 28, 1, "Москва, ул. Артамонова, 4"],
    [32, 158400, 31, 1, "Москва, Дмитровское ш., 71"],
  ]),
  rough: build("rough", [
    [50, 75000, 18, 2, "Москва, ул. Привольная, 20"],
    [70, 105000, 24, 3, "Москва, ул. Шипиловская, 51"],
    [90, 135000, 30, 4, "Москва, Мичуринский пр-т, 27"],
  ]),
};
