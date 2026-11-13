import type { Video } from "@/entities/video";

const DEMO_VIDEO_ID = "M7lc1UVf-VE";
const ADDRESS = "Москва, р-н Фили-Давыдково, Малая Филёвская улица, 68";

export const REVIEWS: Video[] = [
  {
    id: DEMO_VIDEO_ID,
    title: "Отзыв о капитальном ремонте",
    preview: "/images/1.png",
    category: "Капитальный ремонт",
    subtitle: "2-х комнатная квартира",
    address: ADDRESS,
  },
  {
    id: DEMO_VIDEO_ID,
    title: "Отзыв о капитальном ремонте",
    preview: "/images/2.png",
    category: "Капитальный ремонт",
    subtitle: "2-х комнатная квартира",
    address: ADDRESS,
  },
  {
    id: DEMO_VIDEO_ID,
    title: "Отзыв о капитальном ремонте",
    preview: "/images/3.png",
    category: "Капитальный ремонт",
    subtitle: "3-х комнатная квартира",
    address: ADDRESS,
  },
  {
    id: DEMO_VIDEO_ID,
    title: "Отзыв о капитальном ремонте",
    preview: "/images/4.png",
    category: "Капитальный ремонт",
    subtitle: "3-х комнатная квартира",
    address: ADDRESS,
  },
];
