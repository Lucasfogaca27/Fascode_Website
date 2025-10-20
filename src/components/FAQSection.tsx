import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer: "O prazo varia de acordo com a complexidade. Sites institucionais simples levam de 2-4 semanas. E-commerces e WebApps complexos podem levar de 8-16 semanas. Sempre trabalhamos com cronogramas realistas e mantemos você atualizado sobre o progresso.",
    },
    {
      question: "Qual é o investimento necessário?",
      answer: "Nossos projetos começam a partir de R$ 5.000 para landing pages e sites institucionais básicos. E-commerces e aplicações web customizadas variam de R$ 15.000 a R$ 80.000+. Entre em contato para um orçamento personalizado sem compromisso.",
    },
    {
      question: "Vocês oferecem manutenção e suporte?",
      answer: "Sim! Oferecemos pacotes de manutenção mensal que incluem atualizações de segurança, correções de bugs, backups automáticos e suporte prioritário. Também disponibilizamos suporte pontual para ajustes específicos.",
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "Trabalhamos com metodologia ágil: 1) Reunião inicial para entender suas necessidades, 2) Criação de protótipos e aprovação do design, 3) Desenvolvimento iterativo com demonstrações semanais, 4) Testes rigorosos, 5) Deploy e treinamento da equipe.",
    },
    {
      question: "Vocês trabalham com quais tecnologias?",
      answer: "Utilizamos as tecnologias mais modernas e robustas do mercado: React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, AWS, Vercel, e muito mais. Escolhemos as ferramentas ideais para cada projeto.",
    },
    {
      question: "O site será responsivo e otimizado para mobile?",
      answer: "Absolutamente! Todos os nossos projetos são desenvolvidos com abordagem mobile-first, garantindo experiência perfeita em smartphones, tablets e desktops. Também otimizamos para performance e SEO.",
    },
    {
      question: "Posso fazer alterações no site depois de pronto?",
      answer: "Sim! Entregamos um painel administrativo intuitivo (CMS) onde você pode editar textos, imagens e conteúdos sem precisar mexer em código. Para alterações mais complexas, oferecemos suporte técnico.",
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos 30 dias de garantia após o lançamento para correção de bugs e ajustes. Também disponibilizamos 3 meses de suporte técnico gratuito para dúvidas sobre uso e configurações básicas.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section font-bold mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa saber sobre nossos serviços
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto animate-fade-in-up delay-200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up delay-400">
          <p className="text-lg text-muted-foreground mb-4">
            Não encontrou sua resposta?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-lg font-semibold text-purple-500 hover:text-blue-400 transition-colors underline underline-offset-4"
          >
            Entre em contato conosco
          </button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default FAQSection;
