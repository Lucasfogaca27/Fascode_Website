import { Globe, ShoppingCart, Smartphone, Zap, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Sites Institucionais",
      description: "Sites corporativos que transmitem credibilidade e profissionalismo, otimizados para conversão.",
      case: "EletroAririu",
      result: "+120% em leads qualificados",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Lojas online completas com checkout otimizado, gestão de estoque e integrações de pagamento.",
      case: "MóveisViva",
      result: "+35% na taxa de conversão",
    },
    {
      icon: Smartphone,
      title: "WebApps & SaaS",
      description: "Aplicações web escaláveis e responsivas que resolvem problemas reais do seu negócio.",
      case: "AgendaPro",
      result: "2.000+ usuários ativos",
    },
    {
      icon: Zap,
      title: "Automação",
      description: "Integrações e automações que economizam tempo e aumentam a eficiência operacional.",
      case: "EletroAririu",
      result: "80% menos trabalho manual",
    },
    {
      icon: Wrench,
      title: "Manutenção & Suporte",
      description: "Acompanhamento contínuo, atualizações de segurança e melhorias constantes no seu projeto.",
      case: "Diversos clientes",
      result: "99.9% uptime garantido",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-card animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => scrollToSection("portfolio")}
            >
              {/* Icon */}
              <div className="relative w-14 h-14 mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-400 rounded-lg opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />
                <div className="relative w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-400/20 rounded-lg flex items-center justify-center group-hover:from-purple-500 group-hover:to-blue-400 transition-all">
                  <service.icon className="w-7 h-7 text-purple-500 group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Case Study Mini */}
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Case</p>
                    <p className="font-semibold text-sm">{service.case}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-1">Resultado</p>
                    <p className="font-semibold text-sm text-blue-400">{service.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up delay-300">
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="btn-hero"
          >
            Iniciar Meu Projeto
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default ServicesSection;
