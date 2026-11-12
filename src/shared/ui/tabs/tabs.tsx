import { useEffect, useRef } from "react";
import type { KeyboardEvent } from "react";
import { cx } from "@/shared/lib/cx";
import "./tabs.css";

export interface TabItem<T extends string> {
  value: T;
  label: string;
}

interface TabsProps<T extends string> {
  items: ReadonlyArray<TabItem<T>>;
  value: T;
  onChange: (value: T) => void;
  label: string;
  variant?: "filled" | "timeline";
}

export const Tabs = <T extends string>({
  items,
  value,
  onChange,
  label,
  variant = "filled",
}: TabsProps<T>) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const active = list?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (!list || !active) return;

    list.scrollTo({
      left: active.offsetLeft - (list.clientWidth - active.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [value]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (step === 0) return;

    event.preventDefault();
    const current = items.findIndex((item) => item.value === value);
    onChange(items[(current + step + items.length) % items.length].value);

    requestAnimationFrame(() => {
      listRef.current
        ?.querySelector<HTMLElement>('[aria-selected="true"]')
        ?.focus();
    });
  };

  return (
    <div
      ref={listRef}
      className={cx("tabs", `tabs-${variant}`)}
      role="tablist"
      aria-label={label}
      onKeyDown={handleKeyDown}
    >
      {items.map((item) => {
        const selected = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            className={cx("tab", selected && "tab-active")}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
