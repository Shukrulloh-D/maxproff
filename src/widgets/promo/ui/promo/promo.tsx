import { useCallbackModal } from "@/features/callback-modal";
import { PROMOS, PromoCard } from "@/entities/promo";
import { Button } from "@/shared/ui/button";
import { CardsSlider } from "@/shared/ui/cards-slider";
import { Section } from "@/shared/ui/section";
import "./promo.css";

export const Promo = () => {
  const { open } = useCallbackModal();

  return (
    <Section id="promo" title="Акции">
      <CardsSlider columns={3} tabletColumns={3} label="Акции">
        {PROMOS.map((promo) => (
          <PromoCard key={promo.id} promo={promo} onAction={open} />
        ))}
      </CardsSlider>

      <div className="promo-action">
        <Button variant="outline" onClick={open}>
          Все акции
        </Button>
      </div>
    </Section>
  );
};
