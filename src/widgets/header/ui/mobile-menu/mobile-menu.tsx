import { useState } from "react";
import { useCallbackModal } from "@/features/callback-modal";
import { CATALOG, NAV_LINKS } from "@/shared/config/navigation";
import { SITE } from "@/shared/config/site";
import { cx } from "@/shared/lib/cx";
import { useBodyLock } from "@/shared/lib/use-body-lock";
import { useEscape } from "@/shared/lib/use-escape";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import "./mobile-menu.css";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  const { open: openCallback } = useCallbackModal();
  const [expanded, setExpanded] = useState<number | null>(null);

  useBodyLock(open);
  useEscape(open, onClose);

  const handleCallback = () => {
    onClose();
    openCallback();
  };

  return (
    <div
      className={cx("mobile-menu", open && "mobile-menu-open")}
      aria-hidden={!open}
    >
      <div className="mobile-menu-overlay" onClick={onClose} />

      <aside className="mobile-menu-panel" aria-label="Меню">
        <button
          type="button"
          className="mobile-menu-close"
          onClick={onClose}
          aria-label="Закрыть меню"
        >
          <Icon name="close" size={22} />
        </button>

        <div className="mobile-menu-actions">
          <Button block onClick={handleCallback}>
            Заказать звонок
          </Button>
          <Button variant="outline" block href="#calculator" onClick={onClose}>
            Калькулятор ремонта
          </Button>
          <Button variant="outline" block href="#prices" onClick={onClose}>
            Цены на ремонт
          </Button>
        </div>

        <ul className="mobile-menu-catalog">
          {CATALOG.map((item, index) => {
            const isExpanded = expanded === index;

            return (
              <li key={item.label}>
                <button
                  type="button"
                  className="mobile-menu-toggle"
                  aria-expanded={isExpanded}
                  onClick={() => setExpanded(isExpanded ? null : index)}
                >
                  {item.label}
                  <Icon
                    name="chevron-down"
                    size={16}
                    className={cx(isExpanded && "mobile-menu-chevron-open")}
                  />
                </button>
                <ul className="mobile-menu-sublist" hidden={!isExpanded}>
                  {item.columns
                    .flatMap((column) => column.links)
                    .map((link) => (
                      <li key={link.label}>
                        <a href={link.href} onClick={onClose}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <ul className="mobile-menu-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={onClose}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-contacts">
          <a href={SITE.phoneHref}>
            <Icon name="phone" size={16} />
            {SITE.phone}
          </a>
          <span>{SITE.workHours}</span>
        </div>
      </aside>
    </div>
  );
};
