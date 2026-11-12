import { Section } from "@/shared/ui/section";
import { STAGES } from "../../model/stages";
import "./quality-control.css";

export const QualityControl = () => (
  <Section
    id="quality"
    title="Многоуровневый контроль качества"
    subtitle="Ремонт квартиры без дефектов благодаря многоуровневому контролю качества."
  >
    <div className="quality-layout">
      <img
        className="quality-photo"
        src="/images/quality/builders.jpg"
        alt="Строители в защитных касках"
        loading="lazy"
      />
      <ol className="quality-stages">
        {STAGES.map((stage, index) => (
          <li key={stage.title} className="quality-stage">
            <p className="quality-number">
              {String(index + 1).padStart(2, "0")}
              <span>/{String(STAGES.length).padStart(2, "0")}</span>
            </p>
            <h3 className="quality-title">{stage.title}</h3>
            <p className="quality-text">{stage.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </Section>
);
