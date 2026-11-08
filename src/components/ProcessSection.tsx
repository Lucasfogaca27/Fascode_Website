import type { ReactNode } from "react";
import { Check } from "lucide-react";

const steps: { title: ReactNode; text: string; items: string[] }[] = [
  {
    title: "Planejamos junto contigo",
    text: "Uma conversa para entender a operação, o problema e o que já existe. Você sai com escopo, prazo e preço por escrito.",
    items: ["Diagnóstico com quem vai usar", "Proposta fechada, sem surpresa"],
  },
  {
    title: (
      <>
        Construímos para o <em className="not-italic underline decoration-purple-500 decoration-2 underline-offset-4">seu</em> problema
      </>
    ),
    text: "O sistema segue o jeito que a sua equipe já trabalha. Você testa versões reais durante o projeto, não só no final.",
    items: ["Protótipo antes do código", "Entregas toda semana"],
  },
  {
    title: "Colocamos no ar e cuidamos",
    text: "Fazemos o deploy, treinamos quem vai usar e seguimos por perto com suporte e manutenção.",
    items: ["Deploy e treinamento", "Suporte direto com quem desenvolveu"],
  },
];

const ProcessSection = () => (
  <section id="process" className="section-padding">
    <div className="container-custom">
      <div className="mb-16 animate-fade-in-up">
        <span className="kicker">Processo</span>
        <h2 className="section-title">Como trabalhamos</h2>
        <p className="section-lead">Do primeiro papo até o sistema rodando, você sabe o que está acontecendo.</p>
      </div>

      <ol className="relative grid md:grid-cols-3 gap-12 md:gap-10">
        {/* Trilha que liga as etapas: vertical no celular, horizontal no desktop */}
        <span aria-hidden="true" className="absolute left-5 top-5 bottom-5 w-px md:bottom-auto md:right-5 md:w-auto md:h-px bg-gradient-to-b md:bg-gradient-to-r from-purple-500/70 via-border to-border" />
        {steps.map((s, i) => (
          <li key={i} className="relative pl-16 md:pl-0 md:pt-16 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="absolute left-0 top-0 w-10 h-10 rounded-full border border-purple-500/60 bg-background flex items-center justify-center font-mono text-sm font-medium">
              {i + 1}
            </span>
            <h3 className="text-xl md:text-2xl font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-5">{s.text}</p>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground/85">
                  <Check className="w-4 h-4 text-purple-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSection;
