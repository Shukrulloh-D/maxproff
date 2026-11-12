import { useState } from "react";
import { useCallbackModal } from "@/features/callback-modal";
import { cx } from "@/shared/lib/cx";
import { formatPrice } from "@/shared/lib/format";
import { useCarousel } from "@/shared/lib/use-carousel";
import { useSwipe } from "@/shared/lib/use-swipe";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { RadioGroup } from "@/shared/ui/radio-group";
import { Section } from "@/shared/ui/section";
import { SliderArrow } from "@/shared/ui/slider-arrow";
import { SliderDots } from "@/shared/ui/slider-dots";
import { Tabs } from "@/shared/ui/tabs";
import { PROJECTS, REPAIR_TABS } from "../../model/projects";
import type { RepairType } from "../../model/projects";
import "./works.css";

export const Works = () => {
  const { open } = useCallbackModal();
  const [type, setType] = useState<RepairType>("capital");
  const [projectIndex, setProjectIndex] = useState(0);

  const projects = PROJECTS[type];
  const project = projects[projectIndex];
  const gallery = useCarousel(project.photos.length);
  const swipe = useSwipe(gallery.prev, gallery.next);

  const changeType = (next: RepairType) => {
    setType(next);
    setProjectIndex(0);
    gallery.goTo(0);
  };

  const changeProject = (value: string) => {
    setProjectIndex(Number(value));
    gallery.goTo(0);
  };

  const areaOptions = projects.map((item, index) => ({
    value: String(index),
    label: `${item.area} м²`,
  }));

  const details = [
    { icon: "wallet", label: "Сумма:", value: formatPrice(project.price) },
    { icon: "ruler", label: "Площадь:", value: `${project.area} м²` },
    { icon: "calendar", label: "Срок:", value: `${project.days} дней` },
    { icon: "building", label: "Комнат:", value: String(project.rooms) },
    { icon: "pin", label: "Адрес:", value: project.address },
  ] as const;

  return (
    <Section id="works" tone="gray" title="Примеры наших работ">
      <Tabs
        items={REPAIR_TABS}
        value={type}
        onChange={changeType}
        label="Тип ремонта"
      />

      <div className="works-areas">
        <RadioGroup
          legend="Площадь объекта"
          options={areaOptions}
          value={String(projectIndex)}
          onChange={changeProject}
        />
      </div>

      <div className="works-viewer">
        <SliderArrow
          className="works-arrow works-arrow-prev"
          direction="prev"
          onClick={gallery.prev}
        />

        <div className="works-body">
          <ul className="works-thumbs">
            {project.photos.map((photo, index) => (
              <li key={photo}>
                <button
                  type="button"
                  className={cx(
                    "works-thumb",
                    index === gallery.index && "works-thumb-active",
                  )}
                  aria-label={`Фото ${index + 1}`}
                  aria-current={index === gallery.index}
                  onClick={() => gallery.goTo(index)}
                >
                  <img src={photo} alt="" loading="lazy" draggable={false} />
                </button>
              </li>
            ))}
          </ul>

          <div className="works-photo" {...swipe}>
            <img
              src={project.photos[gallery.index]}
              alt={`Объект ${project.area} м²`}
              draggable={false}
            />
          </div>

          <div className="works-card">
            <dl className="works-details">
              {details.map(({ icon, label, value }) => (
                <div key={label} className="works-detail">
                  <dt>
                    <Icon name={icon} size={14} />
                    {label}
                  </dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <h3 className="works-list-title">
              <Icon name="document" size={14} />
              Перечень работ:
            </h3>
            <ul className="works-list">
              {project.works.map((work) => (
                <li key={work}>{work}</li>
              ))}
            </ul>
          </div>
        </div>

        <SliderArrow
          className="works-arrow works-arrow-next"
          direction="next"
          onClick={gallery.next}
        />
      </div>

      <SliderDots
        className="works-dots"
        count={project.photos.length}
        index={gallery.index}
        onSelect={gallery.goTo}
      />

      <div className="works-action">
        <Button size="lg" onClick={open}>
          Оставить заявку
        </Button>
      </div>
    </Section>
  );
};
