import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "MóveisViva",
      category: "E-commerce",
      description: "Migração completa de plataforma e otimização de checkout para loja online de móveis planejados.",
      image: "shopping-cart",
      tech: ["Next.js", "Stripe", "Headless CMS", "PostgreSQL"],
      result: "+35% na taxa de conversão",
      metrics: { conversion: "+35%", revenue: "R$ 2.5M/mês", users: "15K+" },
    },
    {
      title: "AgendaPro",
      category: "WebApp B2B",
      description: "Sistema completo de agendamentos com notificações em tempo real e painel administrativo.",
      image: "calendar",
      tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
      result: "2.000+ usuários ativos",
      metrics: { users: "2K+", satisfaction: "98%", uptime: "99.9%" },
    },
    {
      title: "EletroAririu",
      category: "Site + Sistema",
      description: "Site institucional integrado com sistema de agendamento via webhook e automação de lembretes.",
      image: "zap",
      tech: ["React", "Webhook API", "SMS Integration", "CMS"],
      result: "+120% em leads qualificados",
      metrics: { leads: "+120%", automation: "80%", response: "24h" },
    },
    {
      title: "Eventos24",
      category: "Landing Page",
      description: "Landing page otimizada para conversão com A/B testing e integração com plataforma de ingressos.",
      image: "rocket",
      tech: ["Next.js", "Analytics", "A/B Testing", "Payment API"],
      result: "65% de taxa de conversão",
      metrics: { conversion: "65%", tickets: "10K+", loading: "0.8s" },
    },
    {
      title: "DashOps",
      category: "Dashboard Analítico",
      description: "Painel de visualização de dados em tempo real com gráficos personalizados e exportação de relatórios.",
      image: "chart",
      tech: ["React", "D3.js", "WebSockets", "Redis"],
      result: "Processamento de 1M+ eventos/dia",
      metrics: { events: "1M+/dia", realtime: "< 100ms", charts: "50+" },
    },
    {
      title: "Portfólio Interativo",
      category: "Experiência Imersiva",
      description: "Site portfólio com experiência visual única, animações avançadas e scroll-driven interactions.",
      image: "sparkles",
      tech: ["React", "GSAP", "Three.js", "WebGL"],
      result: "Premio de Design 2024",
      metrics: { engagement: "+300%", time: "5min avg", bounce: "15%" },
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section font-bold mb-4">
            Nosso <span className="gradient-text">Portfólio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Projetos que transformaram negócios e geraram resultados reais
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-elevated animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder with Icon */}
              <div className="relative h-56 bg-gradient-to-br from-purple-900/50 to-blue-500/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <Code2 className="w-20 h-20 text-white/50 relative z-10 group-hover:scale-110 transition-transform" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <Button variant="outline" className="glass text-white border-white/30 hover:bg-white hover:text-black">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Case Completo
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block glass-strong px-3 py-1 rounded-full mb-3">
                  <span className="text-xs font-semibold text-purple-500">{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 rounded-md bg-muted/50 text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-semibold text-blue-400">{project.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-300">
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para ter resultados assim no seu negócio?
          </p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-hero"
          >
            Iniciar Meu Projeto Agora
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default PortfolioSection;
