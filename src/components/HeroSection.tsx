import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowRight, Instagram } from "lucide-react";
import { CONTACT, whatsappLink } from "@/lib/contact";

const rotating = ["vende.", "escala.", "encanta.", "funciona."];

const terminalLines = [
  { prompt: "$", text: "fascode new --cliente=voce", tone: "text-foreground" },
  { prompt: "✓", text: "estratégia e UX definidos", tone: "text-emerald-400" },
  { prompt: "✓", text: "design system gerado", tone: "text-emerald-400" },
  { prompt: "✓", text: "deploy em produção · 0.8s LCP", tone: "text-emerald-400" },
  { prompt: "→", text: "seu negócio, online e vendendo", tone: "text-blue-400" },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  // Palavra que troca no título
  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % rotating.length), 2200);
    return () => clearInterval(id);
  }, []);

  // Terminal "digitando" linha a linha
  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;
    const id = setTimeout(() => setVisibleLines((n) => n + 1), visibleLines === 0 ? 900 : 650);
    return () => clearTimeout(id);
  }, [visibleLines]);

  // Holofote seguindo o mouse (no máximo 1 atualização por frame)
  const rafRef = useRef(0);
  const onMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - r.left}px`);
      el.style.setProperty("--my", `${clientY - r.top}px`);
    });
  };
  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-24"
    >
      {/* Fundo: holofote + grade + bolhas */}
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div className="absolute inset-0 spotlight-grid pointer-events-none" />
      {/* Gradientes radiais em vez de blur(120px): mesmo visual, quase sem custo */}
      <div className="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,hsl(var(--purple-700)/0.35),transparent_65%)] pointer-events-none" />
      <div className="absolute -bottom-60 -right-40 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,hsl(var(--blue-500)/0.22),transparent_65%)] pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Texto */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 glass rounded-full pl-2 pr-4 py-1.5 mb-8 animate-fade-in">
              <span className="relative flex w-2.5 h-2.5 ml-1">
                <span className="absolute inset-0 rounded-full bg-emerald-400 text-emerald-400 animate-pulse-dot" />
                <span className="relative w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/80">
                Agenda aberta para novos projetos
              </span>
            </div>

            <h1 className="font-display font-extrabold leading-[0.95] text-[clamp(3rem,7vw,6.25rem)]">
              <span className="block whitespace-nowrap animate-word-in" style={{ animationDelay: "0.1s" }}>
                Código que
              </span>
              <span className="relative block h-[1.05em] overflow-hidden">
                <span key={wordIndex} className="absolute left-0 top-0 animate-word-swap">
                  <span className="inline-block pb-2 pr-2 bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {rotating[wordIndex]}
                  </span>
                </span>
              </span>
            </h1>

            <p
              className="mt-8 text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.35s" }}
            >
              Somos a <strong className="text-foreground">FASCODE</strong> — um estúdio de software de Caxias do Sul.
              Criamos sites, SaaS e sistemas de gestão que viram produto de verdade, como o{" "}
              <button onClick={() => scrollTo("portfolio")} className="text-emerald-400 font-semibold underline-offset-4 hover:underline">
                CoreVitta
              </button>{" "}
              e o{" "}
              <button onClick={() => scrollTo("portfolio")} className="text-[#f0603f] font-semibold underline-offset-4 hover:underline">
                BarberWorkspace
              </button>
              .
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <button onClick={() => scrollTo("contact")} className="btn-hero group inline-flex items-center justify-center">
                <span className="relative z-10 flex items-center">
                  Tirar meu projeto do papel
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => scrollTo("portfolio")}
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold border border-foreground/15 hover:border-foreground/40 hover:bg-foreground/5 transition-all"
              >
                Ver cases
                <ArrowDownRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform" />
              </button>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "0.65s" }}
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-mono hover:text-foreground transition-colors">
                {CONTACT.phoneDisplay}
              </a>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono hover:text-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
                {CONTACT.instagramHandle}
              </a>
            </div>
          </div>

          {/* Terminal */}
          <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-purple-500/30 to-blue-400/20 blur-3xl rounded-[2rem]" />
              <div className="relative border-glow border-glow-live rounded-2xl bg-[hsl(240_12%_7%/0.85)] backdrop-blur-xl shadow-2xl overflow-hidden lg:rotate-[2deg] hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-xs text-white/40">~/fascode — zsh</span>
                </div>
                <div className="p-6 font-mono text-sm leading-7 min-h-[230px] text-white/90">
                  {terminalLines.slice(0, visibleLines).map((l, i) => (
                    <div key={i} className="flex gap-3 animate-fade-in">
                      <span className={l.prompt === "$" ? "text-purple-400" : l.tone}>{l.prompt}</span>
                      <span className={l.prompt === "$" ? "text-white" : "text-white/75"}>{l.text}</span>
                    </div>
                  ))}
                  <span className="inline-block w-2 h-5 bg-purple-400 align-middle animate-blink" />
                </div>
              </div>

              {/* Selos flutuantes */}
              <div className="absolute -bottom-6 -left-4 md:-left-10 glass-strong rounded-xl px-4 py-3 shadow-xl animate-float">
                <p className="font-display text-2xl font-extrabold gradient-text leading-none">+2.400</p>
                <p className="text-xs text-muted-foreground mt-1">pacientes no CoreVitta</p>
              </div>
              <div
                className="absolute -top-6 -right-2 md:-right-6 glass-strong rounded-xl px-4 py-3 shadow-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                <p className="font-display text-2xl font-extrabold text-emerald-400 leading-none">99,9%</p>
                <p className="text-xs text-muted-foreground mt-1">uptime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de rolagem */}
      <button
        onClick={() => scrollTo("portfolio")}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Rolar para o portfólio"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">role</span>
        <span className="w-px h-10 bg-gradient-to-b from-foreground/50 to-transparent" />
      </button>
    </section>
  );
};

export default HeroSection;
