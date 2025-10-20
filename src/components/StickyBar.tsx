import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 glass-strong border-t border-border/50 animate-slide-in-right">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="font-bold text-foreground mb-1">
              Pronto para começar seu projeto?
            </p>
            <p className="text-sm text-muted-foreground">
              Orçamento gratuito em até 24 horas
            </p>
          </div>
          <Button
            onClick={scrollToContact}
            className="btn-hero shrink-0"
          >
            Solicitar Proposta
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
