import { createContext } from "react";

export interface PlayableVideo {
  id: string;
  title: string;
}

export interface VideoContextValue {
  current: PlayableVideo | null;
  play: (video: PlayableVideo) => void;
  close: () => void;
}

export const VideoContext = createContext<VideoContextValue | null>(null);
