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
    image: "/images/promo/newcomers.jpg",
  },
  {
    id: "newlyweds",
    title: "Молодожёнам",
    description:
      "Специальная скидка, если с момента регистрации брака прошло не более года.",
    image: "/images/promo/newlyweds.jpg",
  },
  {
    id: "pensioners",
    title: "Пенсионерам",
    description: "Специальная скидка для наших дорогих пенсионеров.",
    image: "/images/promo/pensioners.jpg",
  },
];
