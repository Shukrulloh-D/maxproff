import { createContext } from "react";

export interface CallbackContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const CallbackContext = createContext<CallbackContextValue | null>(null);
