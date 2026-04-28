import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { FounderStorySection } from "@/components/FounderStorySection";
import { ProductGridSection } from "@/components/ProductGridSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background paper-texture">
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
