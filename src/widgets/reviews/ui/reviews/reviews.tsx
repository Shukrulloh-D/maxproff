import { VideoCard } from "@/entities/video";
import { useVideoModal } from "@/features/video-modal";
import { CardsSlider } from "@/shared/ui/cards-slider";
import { Section } from "@/shared/ui/section";
import { REVIEWS } from "../../model/reviews";

export const Reviews = () => {
  const { play } = useVideoModal();

  return (
    <Section id="reviews" tone="gray" title="Отзывы">
      <CardsSlider columns={2} tabletColumns={2} label="Видеоотзывы">
        {REVIEWS.map((review, index) => (
          <VideoCard key={index} video={review} onPlay={play} />
        ))}
      </CardsSlider>
    </Section>
  );
};
