import { VideoCard } from "@/entities/video";
import type { Video } from "@/entities/video";
import { useVideoModal } from "@/features/video-modal";
import { SITE } from "@/shared/config/site";
import { Button } from "@/shared/ui/button";
import { Section } from "@/shared/ui/section";
import "./youtube.css";

const VIDEOS: Video[] = [1, 2, 3, 4, 5, 6].map((number) => ({
  id: "M7lc1UVf-VE",
  title: `Видео ${number} с канала МаксПрофф`,
  preview: `/images/youtube/${number}.pg`,
}));

export const YouTube = () => {
  const { play } = useVideoModal();

  return (
    <Section id="youtube" title="Наш YouTube-канал">
      <ul className="youtube-grid">
        {VIDEOS.map((video, index) => (
          <li key={index}>
            <VideoCard video={video} variant="plain" onPlay={play} />
          </li>
        ))}
      </ul>

      <div className="youtube-action">
        <Button
          variant="outline"
          href={SITE.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Перейти на канал
        </Button>
      </div>
    </Section>
  );
};
