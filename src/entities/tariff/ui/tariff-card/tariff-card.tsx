import { useId, useState } from "react";
import { cx } from "@/shared/lib/cx";
import { formatNumber } from "@/shared/lib/format";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import type { Tariff } from "../../model/types";
import "./tariff-card.css";

interface TariffCardProps {
  tariff: Tariff;
  onOrder: () => void;
}

export const TariffCard = ({ tariff, onOrder }: TariffCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const worksId = useId();

  return (
    <article className="tariff-card">
      <header className="tariff-card-head">
        <img
          className="tariff-card-photo"
          src={tariff.image}
          alt=""
          width={44}
          height={44}
          loading="lazy"
        />
        <div>
          <h3 className="tariff-card-name">{tariff.name}</h3>
          <p className="tariff-card-duration">от {tariff.duration}</p>
        </div>
      </header>

      <div className="tariff-card-body">
        <p className="tariff-card-text">{tariff.description}</p>

        <div
          id={worksId}
          className={cx(
            "tariff-card-works",
            expanded && "tariff-card-works-open",
          )}
        >
          {tariff.groups.map((group) => (
            <section key={group.title} className="tariff-card-group">
              <h4 className="tariff-card-group-title">{group.title}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item} className="tariff-card-work">
                    <Icon name="check" size={12} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <button
          type="button"
          className="tariff-card-toggle"
          aria-expanded={expanded}
          aria-controls={worksId}
          onClick={() => setExpanded((value) => !value)}
        >
          Список работ
          <Icon
            name="chevron-down"
            size={14}
            className={cx(expanded && "tariff-card-arrow-up")}
          />
        </button>

        <p className="tariff-card-price">
          <s>от {formatNumber(tariff.oldPrice)} руб/м²</s>
          <strong>от {formatNumber(tariff.price)} руб/м²</strong>
        </p>

        <Button block onClick={onOrder}>
          Получить смету
        </Button>
      </div>
    </article>
  );
};
