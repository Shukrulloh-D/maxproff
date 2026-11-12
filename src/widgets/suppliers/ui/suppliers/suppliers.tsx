import { useCallbackModal } from "@/features/callback-modal";
import { Button } from "@/shared/ui/button";
import { Reveal } from "@/shared/ui/reveal";
import "./suppliers.css";

const BRANDS = [
  { id: "knauf", name: "Knauf" },
  { id: "rehau", name: "Rehau" },
  { id: "roca", name: "Roca" },
  { id: "rasch", name: "Rasch" },
  { id: "grohe", name: "Grohe" },
  { id: "cersanit", name: "Cersanit" },
];

export const Suppliers = () => {
  const { open } = useCallbackModal();

  return (
    <section id="suppliers" className="suppliers">
      <div className="page-container">
        <Reveal className="suppliers-inner">
          <div className="suppliers-content">
            <h2 className="suppliers-title">Только лучшие поставщики</h2>
            <p className="suppliers-text">
              В нашей работе мы используем самые качественные и проверенные
              годами материалы.
            </p>
            <div className="suppliers-card">
              <p>
                Получите бесплатный сертификат на чистовые материалы номиналом:
                <span className="suppliers-amount">30 000</span>
                руб.
              </p>
              <Button onClick={open}>Оставить заявку</Button>
            </div>
          </div>

          <ul className="suppliers-brands">
            {BRANDS.map((brand) => (
              <li key={brand.id}>
                <img
                  src={`/images/brands/${brand.id}.png`}
                  alt={brand.name}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};
