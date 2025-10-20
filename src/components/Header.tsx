import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Como Trabalhamos", id: "process" },
    { label: "Serviços", id: "services" },
    { label: "Portfólio", id: "portfolio" },
    { label: "Equipe", id: "team" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-strong shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Code2 className="w-8 h-8 text-purple-500 group-hover:text-blue-400 transition-colors" />
              <div className="absolute inset-0 blur-xl bg-purple-500/30 group-hover:bg-blue-400/30 transition-colors" />
            </div>
            <span className="text-2xl font-bold gradient-text">
              FASCODE
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("portfolio")}
              className="font-medium"
            >
              Ver Portfólio
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="btn-hero"
            >
              Solicitar Proposta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-strong border-t border-border/50 animate-fade-in">
          <nav className="container-custom py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Button
                variant="outline"
                onClick={() => scrollToSection("portfolio")}
                className="w-full"
              >
                Ver Portfólio
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full btn-hero"
              >
                Solicitar Proposta
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
