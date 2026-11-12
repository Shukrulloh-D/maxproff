import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { cx } from "@/shared/lib/cx";
import { useBodyLock } from "@/shared/lib/use-body-lock";
import { useEscape } from "@/shared/lib/use-escape";
import { Icon } from "../icon/icon";
import "./modal.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  label: string;
  size?: "sm" | "lg";
  children: ReactNode;
}

export const Modal = ({
  open,
  onClose,
  label,
  size = "sm",
  children,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEscape(open, onClose);
  useBodyLock(open);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    return () => previous?.focus();
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      className="modal"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className={cx("modal-dialog", `modal-${size}`)}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <Icon name="close" size={20} />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};
