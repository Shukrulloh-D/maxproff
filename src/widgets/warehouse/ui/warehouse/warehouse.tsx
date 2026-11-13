import { Icon } from "@/shared/ui/icon";
import type { IconName } from "@/shared/ui/icon";
import { Section } from "@/shared/ui/section";
import "./warehouse.css";

const FEATURES: Array<{ icon: IconName; text: string }> = [
  { icon: "document", text: "Прямой договор с поставщиками" },
  { icon: "truck", text: "Доставка и подъём в квартиру" },
  { icon: "box", text: "300 тонн черновых и чистовых материалов" },
  {
    icon: "layers",
    text: "250 видов обоев, 25 видов ламината, 50 видов плитки и плинтуса",
  },
  { icon: "user", text: "Выезд специалиста с каталогом материалов" },
];

export const Warehouse = () => (
  <Section
    id="warehouse"
    tone="gray"
    title="Свой склад и шоурум материалов наших партнеров в Москве"
  >
    <ul className="warehouse-features">
      {FEATURES.map(({ icon, text }) => (
        <li key={text} className="warehouse-feature">
          <Icon name={icon} size={32} />
          {text}
        </li>
      ))}
    </ul>

    <div className="warehouse-photos">
      <img
        src="/images/tiles.png"
        alt="Образцы плитки в шоуруме"
        loading="lazy"
      />
      <img
        src="/images/fabrics.png"
        alt="Образцы тканей в шоуруме"
        loading="lazy"
      />
    </div>
  </Section>
);
