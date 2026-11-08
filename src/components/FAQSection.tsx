import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custa um projeto?",
    answer:
      "Projetos personalizados ficam entre R$ 2 mil e R$ 30 mil, conforme o escopo. Depois da primeira conversa mandamos um orçamento fechado, sem compromisso.",
  },
  {
    question: "Quanto tempo leva?",
    answer:
      "Sites simples ficam prontos em 2 a 4 semanas. Sistemas e e-commerces levam de 8 a 16 semanas. O prazo vai por escrito na proposta e você acompanha as entregas semanais.",
  },
  {
    question: "Vocês fazem manutenção e suporte depois da entrega?",
    answer:
      "Sim. Temos planos mensais com atualizações de segurança, correções, backups e suporte prioritário, e também atendemos ajustes pontuais.",
  },
  {
    question: "Consigo alterar o conteúdo sozinho depois?",
    answer:
      "Quando faz sentido para o projeto, entregamos um painel para você editar textos e imagens sem mexer em código. Mudanças maiores ficam com o nosso suporte.",
  },
  {
    question: "Preciso entender de tecnologia para contratar?",
    answer:
      "Não. Você explica como a empresa funciona e o que precisa resolver; a escolha das ferramentas fica com a gente. Usamos React, TypeScript, Java, Node.js e PostgreSQL, entre outras.",
  },
  {
    question: "E se aparecer um problema depois que o sistema for ao ar?",
    answer:
      "Nos primeiros 30 dias corrigimos qualquer bug sem custo, e nos 3 primeiros meses tiramos dúvidas de uso e configuração gratuitamente.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-muted/30">
    <div className="container-custom grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4 animate-fade-in-up">
        <span className="kicker">Dúvidas</span>
        <h2 className="section-title">Perguntas frequentes</h2>
        <p className="mt-6 text-muted-foreground">
          Não achou o que procurava?{" "}
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="font-semibold text-foreground underline decoration-purple-500 decoration-2 underline-offset-4 hover:decoration-foreground transition-colors"
          >
            Fale com a gente
          </button>
        </p>
      </div>

      <Accordion type="single" collapsible className="lg:col-span-8 space-y-3 animate-fade-in-up">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-xl border border-border bg-card px-6 transition-colors hover:border-foreground/30 hover:bg-accent/40 data-[state=open]:border-purple-500/60 data-[state=open]:bg-card"
          >
            <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-muted-foreground [&[data-state=open]>svg]:text-purple-500">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
