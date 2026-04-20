import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { OurWorkSection } from "@/components/OurWorkSection";
import { ParallaxReveal } from "@/components/ParallaxReveal";
import { ImpactGallerySection } from "@/components/ImpactGallerySection";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { ActionFormsSection } from "@/components/ActionFormsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      
      <div className="relative z-10 bg-background">
        <AboutSection />
        <SuccessStoriesSection />
        <ParallaxReveal />
        <OurWorkSection />
        <ImpactGallerySection />
        <ActionFormsSection />
        <Footer />
      </div>
    </main>
  );
}
