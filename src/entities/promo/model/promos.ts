export interface Promo {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const PROMOS: Promo[] = [
  {
    id: "newcomers",
    title: "Новоселам",
    description:
      "Специальная скидка для тех, кто переехал в квартиру не более года назад.",
    image: "/images/newcomers.png",
  },
  {
    id: "newlyweds",
    title: "Молодожёнам",
    description:
      "Специальная скидка, если с момента регистрации брака прошло не более года.",
    image: "/images/newlyweds.png",
  },
  {
    id: "pensioners",
    title: "Пенсионерам",
    description: "Специальная скидка для наших дорогих пенсионеров.",
    image: "/images/pensioners.png",
  },
];
