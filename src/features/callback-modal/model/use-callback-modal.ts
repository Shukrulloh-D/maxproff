import { useContext } from "react";
import { CallbackContext } from "./callback-context";
import type { CallbackContextValue } from "./callback-context";

export const useCallbackModal = (): CallbackContextValue => {
  const context = useContext(CallbackContext);

  if (!context) {
    throw new Error("useCallbackModal must be used inside CallbackProvider");
  }

  return context;
};
