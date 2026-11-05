import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import StickyBar from "@/components/StickyBar";
import ScrollProgress from "@/components/ScrollProgress";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  return (
    // Sem transform/filter neste wrapper: eles quebrariam os elementos position:fixed
    <div className="min-h-screen grain animate-fade-in">
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <PortfolioSection />
        <ProcessSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <ThemeToggle />
      <WhatsAppWidget />
      <StickyBar />
    </div>
  );
};

export default Index;
