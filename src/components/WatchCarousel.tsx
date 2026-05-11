import { useEffect, useState } from "react";
import heroWatch1 from "@/assets/hero-watch-1.jpg";
import heroWatch2 from "@/assets/hero-watch-2.jpg";
import heroWatch3 from "@/assets/hero-watch-3.jpg";
import heroWatchLeather from "@/assets/hero-watch-leather.png";
import heroWatchNewspaper from "@/assets/hero-watch-newspaper.png";

const carouselImages = [
  { src: heroWatchLeather, alt: "Gold vintage watch on warm brown leather" },
  { src: heroWatchNewspaper, alt: "Gold vintage watch resting on an aged newspaper" },
  { src: heroWatch1, alt: "Vintage watch detail with warm light" },
  { src: heroWatch2, alt: "Close-up of a vintage chronograph dial" },
  { src: heroWatch3, alt: "Vintage watch in an editorial setting" },
];

export function WatchCarousel() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % carouselImages.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [activeImage]);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-black/20 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
      {carouselImages.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
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
            aria-label={`Vis billede ${index + 1}`}
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
