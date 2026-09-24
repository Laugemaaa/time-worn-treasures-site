import { useLocalizedText } from "@/i18n/localizedText";
import { useEffect, useState } from "react";
import carouselWatch2 from "@/assets/carousel-watch-2.png";
import carouselWatch5 from "@/assets/carousel-watch-5.png";
import carouselWatch6 from "@/assets/carousel-watch-6.png";

const carouselImages = [
  { src: carouselWatch5, alt: "Small gold Omega Ladymatic watch worn on a wrist" },
  { src: carouselWatch2, alt: "Vintage Rado Golden Horse watch on a steel bracelet" },
  { src: carouselWatch6, alt: "Vintage Enicar Sherpa Guide watch on a steel bracelet" },
];

export function WatchCarousel() {
  const tx = useLocalizedText();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % carouselImages.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [activeImage]);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px] bg-black/20 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
      {carouselImages.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={tx(image.alt)}
          className={[
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
            index === activeImage ? "opacity-100" : "opacity-0",
          ].join(" ")}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-black/45 to-transparent px-4 pb-4 pt-10">
        {carouselImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveImage(index)}
            aria-label={tx("Show image {n}", { n: index + 1 })}
            aria-current={index === activeImage}
            className={[
              "h-3 w-3 rounded-[4px] border border-white/45 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground",
              index === activeImage
                ? "w-7 border-[#d7c7ad] bg-[#d7c7ad]"
                : "bg-white/35 hover:bg-white/60",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
