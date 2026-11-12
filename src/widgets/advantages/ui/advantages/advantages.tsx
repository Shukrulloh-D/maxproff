import { Icon } from "@/shared/ui/icon";
import type { IconName } from "@/shared/ui/icon";
import { Section } from "@/shared/ui/section";
import "./advantages.css";

const ADVANTAGES: Array<{ icon: IconName; title: string; text: string }> = [
  {
    icon: "wallet",
    title: "Работа без предоплаты",
    text: "Мы не берём предоплату. Вы платите за каждый этап работ после подписания акта.",
  },
  {
    icon: "document",
    title: "Стоимость ремонта не меняется",
    text: "Прозрачный бюджет. Финальная смета фиксируется в согласованных датах.",
  },
  {
    icon: "user",
    title: "Мастера-славяне с опытом от 5 лет",
    text: "Мастера — славяне. В штате 250 мастеров с опытом от 5 лет, 20 прорабов с опытом от 8 лет и инженеры.",
  },
  {
    icon: "check-doc",
    title: "За нами не переделывают",
    text: "Качество работ для нас в приоритете. Даём гарантию на все виды работ.",
  },
];

export const Advantages = () => (
  <Section id="advantages" title="Наши преимущества">
    <ul className="advantages-list">
      {ADVANTAGES.map(({ icon, title, text }) => (
        <li key={title} className="advantage">
          <span className="advantage-icon">
            <Icon name={icon} size={40} />
          </span>
          <div>
            <h3 className="advantage-title">{title}</h3>
            <p className="advantage-text">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  </Section>
);
