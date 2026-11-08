import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Empresas que já trabalharam com a FASCODE (aparecem abaixo do hero)
const clients = ["MóveisViva", "AgendaPro", "EletroAririu", "Eventos24", "DashOps", "TechStart", "InovaCorp", "SmartSolutions"];

const words = ["resolvem.", "vendem.", "economizam.", "escalam."];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative overflow-hidden pt-36 md:pt-48 pb-16">
      {/* Um único brilho estático no topo */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[720px] pointer-events-none bg-[radial-gradient(ellipse_60%_55%_at_30%_0%,hsl(var(--purple-700)/0.30),transparent_70%),radial-gradient(ellipse_45%_40%_at_85%_10%,hsl(var(--blue-500)/0.12),transparent_70%)]"
      />

      <div className="container-custom relative">
        <div className="max-w-4xl">
          <p className="kicker animate-fade-in-up">Estúdio de software · Caxias do Sul</p>

          <h1
            className="font-display font-extrabold leading-[1.02] text-[clamp(2.4rem,6.2vw,5.25rem)] animate-fade-in-up"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="block">Aplicações sob medida,</span>
            <span className="block">
              que{" "}
              {/* Leitor de tela lê a frase inteira uma vez; a troca de palavras é só visual */}
              <span className="sr-only">resolvem, vendem, economizam e escalam.</span>
              {/* Todas as palavras ficam empilhadas na mesma célula e só trocam de posição por transição:
                  a que sai sobe e some enquanto a próxima entra por baixo, sem remontar nada (remontar piscava) */}
              <span aria-hidden="true" className="inline-grid align-bottom overflow-hidden">
                {words.map((w, i) => {
                  const prev = (wordIndex - 1 + words.length) % words.length;
                  const pos = i === wordIndex ? "translate-y-0 opacity-100" : i === prev ? "-translate-y-full opacity-0" : "translate-y-full opacity-0";
                  return (
                    <span
                      key={w}
                      className={`[grid-area:1/1] gradient-text transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${pos}`}
                    >
                      {w}
                    </span>
                  );
                })}
              </span>
            </span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Planejamos com você, construímos o sistema certo para o seu problema e cuidamos dele depois que vai ao ar.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <Button size="lg" onClick={() => scrollTo("contact")} className="group">
              Falar sobre meu projeto
              <ArrowRight className="group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("portfolio")}>
              Ver o que já fizemos
            </Button>
          </div>
        </div>

        <div className="mt-24 md:mt-32 pt-8 border-t border-border animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
          <p className="text-sm text-muted-foreground mb-5">Empresas que já trabalharam com a gente</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {clients.map((c) => (
              <li key={c} className="whitespace-nowrap font-display text-lg md:text-xl font-bold text-foreground/55">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
