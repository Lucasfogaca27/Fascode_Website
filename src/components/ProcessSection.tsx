import { Lightbulb, Palette, Rocket } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Estratégia",
      description: "Entendemos seu negócio, objetivos e público-alvo para criar uma solução sob medida.",
      features: ["Pesquisa de mercado", "Análise de concorrência", "Definição de objetivos"],
    },
    {
      icon: Palette,
      title: "Design",
      description: "Criamos interfaces intuitivas e atraentes que convertem visitantes em clientes.",
      features: ["UX/UI Design", "Protótipos interativos", "Design System"],
    },
    {
      icon: Rocket,
      title: "Entrega",
      description: "Desenvolvemos, testamos e lançamos sua solução com performance e qualidade máximas.",
      features: ["Desenvolvimento ágil", "Testes rigorosos", "Deploy e suporte"],
    },
  ];

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section font-bold mb-4">
            Como <span className="gradient-text">Trabalhamos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um processo comprovado para entregar resultados excepcionais
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="glass h-full p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-elevated animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-400 rounded-xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-blue-400 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-strong flex items-center justify-center">
                  <span className="text-2xl font-bold gradient-text">{index + 1}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent -translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default ProcessSection;
