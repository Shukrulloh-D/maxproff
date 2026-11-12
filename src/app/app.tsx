import { CallbackModal, CallbackProvider } from "@/features/callback-modal";
import { VideoModal, VideoProvider } from "@/features/video-modal";
import { HomePage } from "@/pages/home";

export const App = () => (
  <CallbackProvider>
    <VideoProvider>
      <HomePage />
      <CallbackModal />
      <VideoModal />
    </VideoProvider>
  </CallbackProvider>
);
