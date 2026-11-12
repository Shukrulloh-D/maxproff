import { useCallback, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { VideoContext } from "./video-context";
import type { PlayableVideo } from "./video-context";

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [current, setCurrent] = useState<PlayableVideo | null>(null);

  const play = useCallback((video: PlayableVideo) => setCurrent(video), []);
  const close = useCallback(() => setCurrent(null), []);
  const value = useMemo(
    () => ({ current, play, close }),
    [current, play, close],
  );

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};
