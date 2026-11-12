import { Modal } from "@/shared/ui/modal";
import { useVideoModal } from "../../model/use-video-modal";
import "./video-modal.css";

export const VideoModal = () => {
  const { current, close } = useVideoModal();

  return (
    <Modal
      open={current !== null}
      onClose={close}
      label={current?.title ?? "Видео"}
      size="lg"
    >
      {current && (
        <div className="video-modal-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0`}
            title={current.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      )}
    </Modal>
  );
};
