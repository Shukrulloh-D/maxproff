import { VideoCard } from "@/entities/video";
import { useVideoModal } from "@/features/video-modal";
import { useCarousel } from "@/shared/lib/use-carousel";
import { useSwipe } from "@/shared/lib/use-swipe";
import { Section } from "@/shared/ui/section";
import { SliderArrow } from "@/shared/ui/slider-arrow";
import { SliderDots } from "@/shared/ui/slider-dots";
import "./masters.css";

const PHOTOS = [1, 2, 3, 4, 5].map((number) => `/images/${number}.png`);

const FACTS = [
  "Обучение мастеров каждые 6 месяцев",
  "Свой полигон для обучения мастеров",
  "300 мастеров в штате",
  "Строгий подбор мастеров",
  "Все рабочие — граждане РФ",
  "Ведётся рейтинг мастеров согласно отзывам клиентов и прорабов",
];

const VIDEO = {
  id: "M7lc1UVf-VE",
  title: "Наши мастера в работе",
  preview: "/images/masters/video.png",
};

export const Masters = () => {
  const { play } = useVideoModal();
  const carousel = useCarousel(PHOTOS.length);
  const swipe = useSwipe(carousel.prev, carousel.next);

  const slides = [-1, 0, 1].map((offset) => ({
    offset,
    src: PHOTOS[(carousel.index + offset + PHOTOS.length) % PHOTOS.length],
  }));

  return (
    <Section id="masters" tone="gray" title="Наши мастера в работе">
      <div className="masters-carousel">
        <SliderArrow
          className="masters-arrow"
          direction="prev"
          onClick={carousel.prev}
        />

        <div className="masters-stage" {...swipe}>
          {slides.map(({ offset, src }) => (
            <button
              key={`${offset}-${src}`}
              type="button"
              className={
                offset === 0
                  ? "masters-slide masters-slide-current"
                  : "masters-slide"
              }
              tabIndex={offset === 0 ? -1 : 0}
              aria-label={
                offset < 0
                  ? "Предыдущее фото"
                  : offset > 0
                    ? "Следующее фото"
                    : "Текущее фото"
              }
              onClick={
                offset < 0
                  ? carousel.prev
                  : offset > 0
                    ? carousel.next
                    : undefined
              }
            >
              <img src={src} alt="" draggable={false} />
            </button>
          ))}
        </div>

        <SliderArrow
          className="masters-arrow"
          direction="next"
          onClick={carousel.next}
        />
      </div>

      <SliderDots
        count={PHOTOS.length}
        index={carousel.index}
        onSelect={carousel.goTo}
      />

      <div className="masters-extra">
        <VideoCard video={VIDEO} variant="plain" onPlay={play} />
        <ul className="masters-facts">
          {FACTS.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
