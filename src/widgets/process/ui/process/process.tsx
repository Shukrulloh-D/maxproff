import { Icon } from "@/shared/ui/icon";
import { Section } from "@/shared/ui/section";
import { PROCESS_STEPS } from "../../model/steps";
import "./process.css";

export const Process = () => (
  <Section
    id="process"
    title="Как мы работаем"
    subtitle="Вам понятен каждый этап: фиксированные сроки и цены, предоставляем все документы: накладные, гарантии, акты. Вы будете уверены в результате."
  >
    <ol className="process-list">
      {PROCESS_STEPS.map(({ icon, label }) => (
        <li key={label} className="process-step">
          <span className="process-icon">
            <Icon name={icon} size={40} />
          </span>
          <span className="process-label">{label}</span>
        </li>
      ))}
    </ol>
  </Section>
);
