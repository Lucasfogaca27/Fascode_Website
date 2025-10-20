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
import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import StickyBar from "@/components/StickyBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <ServicesSection />
        <TeamSection />
        <PortfolioSection />
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
