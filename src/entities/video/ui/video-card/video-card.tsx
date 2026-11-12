import { cx } from "@/shared/lib/cx";
import { Icon } from "@/shared/ui/icon";
import type { Video } from "../../model/types";
import "./video-card.css";

interface VideoCardProps {
  video: Video;
  onPlay: (video: Video) => void;
  variant?: "captioned" | "plain";
}

export const VideoCard = ({
  video,
  onPlay,
  variant = "captioned",
}: VideoCardProps) => (
  <article className={cx("video-card", `video-card-${variant}`)}>
    <button
      type="button"
      className="video-card-preview"
      onClick={() => onPlay(video)}
      aria-label={`Смотреть видео: ${video.title}`}
    >
      <img src={video.preview} alt="" loading="lazy" draggable={false} />
      <span className="video-card-play">
        <Icon name="play" size={22} />
      </span>
    </button>

    {variant === "captioned" && (
      <div className="video-card-caption">
        <p className="video-card-category">
          {video.category} <span>{video.subtitle}</span>
        </p>
        {video.address && (
          <p className="video-card-address">
            <Icon name="pin" size={12} />
            {video.address}
          </p>
        )}
      </div>
    )}
  </article>
);
