import { useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { CallbackContext } from "./callback-context";

export const CallbackProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <CallbackContext.Provider value={value}>
      {children}
    </CallbackContext.Provider>
  );
};
