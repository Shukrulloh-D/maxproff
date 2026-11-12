import { useCallbackModal } from "@/features/callback-modal";
import { Button } from "@/shared/ui/button";
import "./cta-strip.css";

export const CtaStrip = () => {
  const { open } = useCallbackModal();

  return (
    <section className="cta-strip">
      <div className="page-container cta-strip-inner">
        <h2 className="cta-strip-title">Нужна консультация?</h2>
        <p className="cta-strip-text">
          Подробно расскажем о наших услугах, видах работ и типовых проектах,
          рассчитаем стоимость и подготовим индивидуальное предложение.
        </p>
        <Button variant="outline-light" onClick={open}>
          Оставить заявку
        </Button>
      </div>
    </section>
  );
};
