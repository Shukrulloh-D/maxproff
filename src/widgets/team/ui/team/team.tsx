import { useCarousel } from "@/shared/lib/use-carousel";
import { useSwipe } from "@/shared/lib/use-swipe";
import { Section } from "@/shared/ui/section";
import { SliderArrow } from "@/shared/ui/slider-arrow";
import { SliderDots } from "@/shared/ui/slider-dots";
import { Tabs } from "@/shared/ui/tabs";
import { EMPLOYEES } from "../../model/employees";
import "./team.css";

const TABS = EMPLOYEES.map(({ id, role }) => ({ value: id, label: role }));

export const Team = () => {
  const carousel = useCarousel(EMPLOYEES.length);
  const swipe = useSwipe(carousel.prev, carousel.next);
  const employee = EMPLOYEES[carousel.index];

  return (
    <Section id="team" title="Наша команда">
      <Tabs
        variant="timeline"
        label="Должности"
        items={TABS}
        value={employee.id}
        onChange={(id) =>
          carousel.goTo(EMPLOYEES.findIndex((item) => item.id === id))
        }
      />

      <div className="team-slider">
        <SliderArrow
          className="team-arrow"
          direction="prev"
          onClick={carousel.prev}
        />

        <article key={employee.id} className="team-slide" {...swipe}>
          <img
            className="team-photo"
            src={`/images/${employee.id}.pg`}
            alt={employee.name}
            draggable={false}
          />
          <div className="team-info">
            <p className="team-name">{employee.name}</p>
            <h3 className="team-heading">{employee.heading}</h3>
            <p className="team-text">{employee.description}</p>
            <ul className="team-duties">
              {employee.duties.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
          </div>
        </article>

        <SliderArrow
          className="team-arrow"
          direction="next"
          onClick={carousel.next}
        />
      </div>

      <SliderDots
        count={EMPLOYEES.length}
        index={carousel.index}
        onSelect={carousel.goTo}
      />
    </Section>
  );
};
