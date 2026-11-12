import { useCallbackModal } from "@/features/callback-modal";
import { TARIFFS, TariffCard } from "@/entities/tariff";
import { CardsSlider } from "@/shared/ui/cards-slider";
import { Section } from "@/shared/ui/section";

export const Pricing = () => {
  const { open } = useCallbackModal();

  return (
    <Section id="prices" title="Цены на ремонт">
      <CardsSlider columns={4} tabletColumns={2} label="Тарифы на ремонт">
        {TARIFFS.map((tariff) => (
          <TariffCard key={tariff.id} tariff={tariff} onOrder={open} />
        ))}
      </CardsSlider>
    </Section>
  );
};
