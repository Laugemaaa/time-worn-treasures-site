import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { FounderStorySection } from "@/components/FounderStorySection";
import { ProductGridSection } from "@/components/ProductGridSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SEO, SITE_NAME, SITE_URL } from "@/components/SEO";

const Index = () => {
  const title = "GrandpasHeritage | Vintage ure med historie";
  const description =
    "GrandpasHeritage kuraterer vintage ure, lommeure og samlerure med karakter, patina og ærlige beskrivelser. Se aktuelle auktioner og køb sikkert via Tradera.";

  return (
    <div className="min-h-screen bg-background paper-texture">
      <SEO
        title={title}
        description={description}
        canonicalPath="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_NAME,
            url: SITE_URL,
            description,
            inLanguage: ["da", "en", "sv", "no"],
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            sameAs: [
              "https://www.instagram.com/granpasheritage/",
              "https://www.tradera.com/da/profile/items/6841860/grandpasheritage",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Store",
            name: SITE_NAME,
            url: SITE_URL,
            description,
            areaServed: ["DK", "SE", "NO"],
            sameAs: "https://www.tradera.com/da/profile/items/6841860/grandpasheritage",
          },
        ]}
      />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <PhilosophySection />
        <FounderStorySection />
        <ProductGridSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
