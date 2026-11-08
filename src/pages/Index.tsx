import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  return (
    // Sem transform/filter neste wrapper: eles quebrariam os elementos position:fixed
    <div className="min-h-screen animate-fade-in">
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ProcessSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
