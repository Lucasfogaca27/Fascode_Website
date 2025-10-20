import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-pattern"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg-animated opacity-90" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium animate-scale-in">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Desenvolvimento Web & Software de Alta Performance</span>
          </div>

          {/* Headline */}
          <h1 className="text-display font-bold leading-tight delay-100">
            Fazemos o Site e o Software que{" "}
            <span className="gradient-text">Vende e Escala</span> seu Negócio
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed delay-200">
            Transformamos sua visão em experiências digitais poderosas. 
            Da estratégia ao deploy, criamos soluções que convertem visitantes em clientes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 delay-300">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="btn-hero text-lg px-8 py-6 group"
            >
              Solicitar Proposta
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("portfolio")}
              className="glass text-lg px-8 py-6 hover:bg-card/60 backdrop-blur-xl"
            >
              Ver Portfólio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 delay-400">
            {[
              { value: "50+", label: "Projetos Entregues" },
              { value: "98%", label: "Satisfação" },
              { value: "24h", label: "Resposta" },
              { value: "100%", label: "Dedicação" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gradient-to-b from-purple-500 to-blue-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
