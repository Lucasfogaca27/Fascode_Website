import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAboveFooter, setIsAboveFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar a barra fixa após rolar 500px
      setIsVisible(window.scrollY > 500);

      // Verificar se o rodapé está visível
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        setIsAboveFooter(footerRect.top < window.innerHeight);
      }
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
    <div
      className={`${
        isAboveFooter ? "absolute bottom-[6rem]" : "fixed bottom-0"
      } left-0 right-0 z-40 glass-strong border-t border-border/50 animate-slide-in-right`}
    >
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
          <Button onClick={scrollToContact} className="btn-hero shrink-0">
            Solicitar Proposta
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="border-t border-border/50 mt-15 mb-[4rem]">
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} FASCODE. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("#")}
              className="hover:text-foreground transition-colors"
            >
              Acessibilidade
            </button>
            <button
              onClick={() => scrollToSection("#")}
              className="hover:text-foreground transition-colors"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
export { Footer };
