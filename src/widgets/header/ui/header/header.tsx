import { useState } from "react";
import { useCallbackModal } from "@/features/callback-modal";
import { NAV_LINKS } from "@/shared/config/navigation";
import { SITE } from "@/shared/config/site";
import { cx } from "@/shared/lib/cx";
import { useActiveSection } from "@/shared/lib/use-active-section";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { Logo } from "@/shared/ui/logo";
import { CatalogNav } from "../catalog-nav/catalog-nav";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import "./header.css";

const SECTION_IDS = NAV_LINKS.map(({ href }) => href.slice(1));

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openCallback } = useCallbackModal();
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <header className="header" id="top">
      <div className="page-container header-row">
        <button
          type="button"
          className="header-burger"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Icon name="menu" size={26} />
        </button>

        <Logo />

        <nav className="header-nav" aria-label="Основная навигация">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cx(
                    "header-link",
                    activeId === link.href.slice(1) && "header-link-active",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-contacts">
          <a className="header-phone" href={SITE.phoneHref}>
            <Icon name="phone" size={16} />
            <span>{SITE.phone}</span>
            <small>{SITE.workHours}</small>
          </a>
          <Button variant="outline" size="sm" onClick={openCallback}>
            Заказать звонок
          </Button>
        </div>

        <a className="header-call" href={SITE.phoneHref} aria-label="Позвонить">
          <Icon name="phone" size={20} />
        </a>
      </div>

      <div className="header-catalog">
        <div className="page-container">
          <CatalogNav />
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};
