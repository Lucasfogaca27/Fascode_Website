import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "CEO, MóveisViva",
      company: "MóveisViva",
      text: "A FASCODE transformou completamente nosso e-commerce. O novo checkout otimizado aumentou nossas vendas em 35% no primeiro mês. Equipe extremamente profissional e comprometida.",
      rating: 5,
      avatar: "CM",
    },
    {
      name: "Patricia Silva",
      role: "Fundadora, AgendaPro",
      company: "AgendaPro",
      text: "Precisávamos de um sistema complexo de agendamentos e a FASCODE entregou além das expectativas. A solução é robusta, escalável e nossos clientes adoram a interface.",
      rating: 5,
      avatar: "PS",
    },
    {
      name: "Roberto Araujo",
      role: "Diretor, EletroAririu",
      company: "EletroAririu",
      text: "O site integrado com automação de agendamentos economizou 80% do nosso tempo em processos manuais. Aumentamos em 120% nossos leads qualificados. Investimento que valeu cada centavo.",
      rating: 5,
      avatar: "RA",
    },
    {
      name: "Marina Costa",
      role: "Marketing Manager, Eventos24",
      company: "Eventos24",
      text: "Landing page impecável com taxa de conversão de 65%. A FASCODE entende de verdade sobre otimização para conversão. Recomendo fortemente!",
      rating: 5,
      avatar: "MC",
    },
  ];

  const clients = [
    "MóveisViva",
    "AgendaPro",
    "EletroAririu",
    "Eventos24",
    "DashOps",
    "TechStart",
    "InovaCorp",
    "SmartSolutions",
  ];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section font-bold mb-4">
            O Que Nossos <span className="gradient-text">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de empresas que confiaram na FASCODE
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-purple-500/30 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-purple-500 text-purple-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                </div>

                {/* Info */}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center animate-fade-in-up delay-400">
          <p className="text-sm text-muted-foreground mb-8">
            Empresas que confiam na FASCODE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="glass-strong px-6 py-3 rounded-lg hover:scale-110 transition-transform"
              >
                <span className="font-semibold text-foreground/80">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default TestimonialsSection;
