import { useEffect, useRef, useState } from "react";
import { CATALOG } from "@/shared/config/navigation";
import { cx } from "@/shared/lib/cx";
import { useEscape } from "@/shared/lib/use-escape";
import { useMediaQuery } from "@/shared/lib/use-media-query";
import { Icon } from "@/shared/ui/icon";
import "./catalog-nav.css";

export const CatalogNav = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const canHover = useMediaQuery("(hover: hover)");
  const listRef = useRef<HTMLUListElement>(null);

  useEscape(openIndex !== null, () => setOpenIndex(null));

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!listRef.current?.contains(event.target as Node)) setOpenIndex(null);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <ul ref={listRef} className="catalog">
      {CATALOG.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <li
            key={item.label}
            className={cx("catalog-item", isOpen && "catalog-item-open")}
            onMouseEnter={canHover ? () => setOpenIndex(index) : undefined}
            onMouseLeave={canHover ? () => setOpenIndex(null) : undefined}
          >
            <button
              type="button"
              className="catalog-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.label}
              <Icon name="chevron-down" size={14} />
            </button>

            <div className="catalog-dropdown" hidden={!isOpen}>
              {item.columns.map((column, position) => (
                <div key={position} className="catalog-column">
                  {column.title && (
                    <p className="catalog-column-title">{column.title}</p>
                  )}
                  <ul>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          className="catalog-link"
                          href={link.href}
                          onClick={() => setOpenIndex(null)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
