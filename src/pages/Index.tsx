import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { FounderStorySection } from "@/components/FounderStorySection";
import { InstagramStorySection } from "@/components/InstagramStorySection";
import { ProductGridSection } from "@/components/ProductGridSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SEO, SITE_NAME, SITE_URL } from "@/components/SEO";

const Index = () => {
  const title = "GrandpasHeritage | Vintage watches with history";
  const description =
    "GrandpasHeritage curates vintage watches, pocket watches, and collectible timepieces with character, patina, and honest descriptions. View current auctions and buy securely through Tradera.";
  const brandSummary =
    "GrandpasHeritage is a curated vintage watch archive and storefront focused on vintage wristwatches, pocket watches, and collectible timepieces with character, patina, and honest descriptions.";

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
            about: ["Vintage watches", "Pocket watches", "Collectible timepieces", "Tradera auctions"],
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            description: brandSummary,
            logo: `${SITE_URL}/site-logo.png?v=gh-20260703`,
            sameAs: [
              "https://www.instagram.com/grandpasheritage/",
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
            makesOffer: "Curated vintage watches, pocket watches, and collectible timepieces sold through Tradera auctions.",
            sameAs: [
              "https://www.instagram.com/grandpasheritage/",
              "https://www.tradera.com/da/profile/items/6841860/grandpasheritage",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is GrandpasHeritage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: brandSummary,
                },
              },
              {
                "@type": "Question",
                name: "What does GrandpasHeritage sell?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GrandpasHeritage curates vintage watches, pocket watches, and collectible timepieces, with current purchases completed securely through Tradera.",
                },
              },
            ],
          },
        ]}
      />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <FounderStorySection />
        <PhilosophySection />
        <InstagramStorySection />
        <ProductGridSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
