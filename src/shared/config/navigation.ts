export interface NavLink {
  label: string;
  href: string;
}

export interface CatalogColumn {
  title?: string;
  links: NavLink[];
}

export interface CatalogItem {
  label: string;
  columns: CatalogColumn[];
}

const toLinks = (labels: string[], href: string): NavLink[] =>
  labels.map((label) => ({ label, href }));

export const NAV_LINKS: NavLink[] = [
  { label: "Цены", href: "#prices" },
  { label: "Услуги", href: "#process" },
  { label: "Портфолио", href: "#works" },
  { label: "Акции", href: "#promo" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Блог", href: "#youtube" },
  { label: "Контакты", href: "#contacts" },
];

export const CATALOG: CatalogItem[] = [
  {
    label: "Ремонт квартир",
    columns: [
      {
        title: "Виды ремонта",
        links: toLinks(
          ["Черновой", "Косметический", "Капитальный", "Элитный"],
          "#prices",
        ),
      },
      {
        title: "Тип жилья",
        links: toLinks(
          ["В новостройках", "Студии", "Вторичное жильё"],
          "#prices",
        ),
      },
    ],
  },
  {
    label: "Дизайн интерьера",
    columns: [
      {
        links: toLinks(
          [
            "Дизайн кухни",
            "Дизайн спальни",
            "Дизайн гостиной",
            "Дизайн детской",
            "Дизайн санузла",
            "Дизайн коридора",
            "Дизайн балкона",
          ],
          "#prices",
        ),
      },
    ],
  },
  {
    label: "Ремонт комнат",
    columns: [
      {
        links: toLinks(
          [
            "Кухни",
            "Спальни",
            "Гостиные",
            "Детские",
            "Санузлы",
            "Коридоры",
            "Балконы",
          ],
          "#prices",
        ),
      },
    ],
  },
  {
    label: "Дома и коттеджи",
    columns: [
      {
        links: toLinks(
          ["Ремонт коттеджей", "Отделка загородных домов", "Ремонт дач"],
          "#prices",
        ),
      },
    ],
  },
  {
    label: "Прочие услуги",
    columns: [
      {
        links: toLinks(
          [
            "Ремонт офисов",
            "Торговые помещения",
            "Инженерные системы",
            "Электромонтаж",
            "Сантехника",
          ],
          "#prices",
        ),
      },
    ],
  },
];
