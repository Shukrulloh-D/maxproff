import { useContext } from "react";
import { VideoContext } from "./video-context";
import type { VideoContextValue } from "./video-context";

export const useVideoModal = (): VideoContextValue => {
  const context = useContext(VideoContext);

  if (!context) {
    throw new Error("useVideoModal must be used inside VideoProvider");
  }

  return context;
};
