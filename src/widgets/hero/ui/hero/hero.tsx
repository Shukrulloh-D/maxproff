import { PriceCalculator } from "@/features/price-calculator";
import { Icon } from "@/shared/ui/icon";
import { HERO_BENEFITS } from "../../model/benefits";
import "./hero.css";

export const Hero = () => (
  <section className="hero">
    <div className="page-container hero-inner">
      <div className="hero-content">
        <h1 className="hero-title">
          Ремонт квартир
          <br />в Москве и МО
        </h1>
        <p className="hero-price">
          от <span className="hero-price-value">2450</span> руб/м²
        </p>
        <ul className="hero-benefits">
          {HERO_BENEFITS.map(({ icon, text }) => (
            <li key={text} className="hero-benefit">
              <Icon name={icon} size={36} />
              {text}
            </li>
          ))}
        </ul>
      </div>

      <PriceCalculator />
    </div>
  </section>
);
