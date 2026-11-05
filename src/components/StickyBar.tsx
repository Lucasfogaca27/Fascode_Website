import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

/**
 * Pílula flutuante de CTA. Aparece depois do hero e some quando o formulário
 * de contato ou o rodapé entram na tela — assim nunca cobre o conteúdo final.
 * Fica à esquerda para não colidir com os botões redondos (WhatsApp/tema) da direita.
 */
const StickyBar = () => {
  const [pastHero, setPastHero] = useState(false);
  const [nearEnd, setNearEnd] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = ["contact", "footer"]
      .map((sel) => (sel === "footer" ? document.querySelector("footer") : document.getElementById(sel)))
      .filter(Boolean) as Element[];
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) e.isIntersecting ? visible.add(e.target) : visible.delete(e.target);
      setNearEnd(visible.size > 0);
    });
    targets.forEach((t) => io.observe(t));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const show = pastHero && !nearEnd;

  return (
    <div
      className={`hidden sm:block fixed bottom-6 left-8 z-40 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      aria-hidden={!show}
    >
      <button
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        tabIndex={show ? 0 : -1}
        className="group flex items-center gap-3 rounded-full glass-strong shadow-2xl pl-2 pr-5 py-2 hover:border-purple-500/60 transition-colors"
      >
        <span className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
        </span>
        <span className="text-left">
          <span className="block text-sm font-semibold leading-tight">Orçamento grátis</span>
          <span className="hidden sm:block text-xs text-muted-foreground leading-tight">resposta em até 24h</span>
        </span>
      </button>
    </div>
  );
};

export default StickyBar;
