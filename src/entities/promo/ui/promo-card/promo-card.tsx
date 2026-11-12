import { Button } from "@/shared/ui/button";
import type { Promo } from "../../model/promos";
import "./promo-card.css";

interface PromoCardProps {
  promo: Promo;
  onAction: () => void;
}

export const PromoCard = ({ promo, onAction }: PromoCardProps) => (
  <article className="promo-card">
    <img className="promo-card-image" src={promo.image} alt="" loading="lazy" />
    <div className="promo-card-content">
      <h3 className="promo-card-title">{promo.title}</h3>
      <p className="promo-card-text">{promo.description}</p>
      <Button size="sm" onClick={onAction}>
        Получить скидку
      </Button>
    </div>
  </article>
);
