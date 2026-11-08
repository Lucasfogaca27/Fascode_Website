import { ArrowUp, ArrowUpRight, Code2, Github, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT, whatsappLink } from "@/lib/contact";

const nav = [
  { label: "Cases", id: "portfolio" },
  { label: "Como trabalhamos", id: "process" },
  { label: "Serviços", id: "services" },
  { label: "Equipe", id: "team" },
  { label: "Perguntas frequentes", id: "faq" },
  { label: "Contato", id: "contact" },
];

const products = [
  { label: "CoreVitta", href: "https://corevitta.com.br/" },
  { label: "BarberWorkspace", href: "https://barberworkspace.fascode.com.br" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-[radial-gradient(ellipse,hsl(var(--purple-500)/0.18),transparent_65%)] pointer-events-none" />

      <div className="container-custom relative pt-20 pb-10">
        {/* CTA grande */}
        <div className="grid lg:grid-cols-12 gap-10 pb-16 border-b border-border">
          <div className="lg:col-span-7">
            <span className="kicker">Bora conversar?</span>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95]">
              Seu próximo sistema <br />
              começa com um <span className="gradient-text">oi.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3 justify-end">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-[border-color,transform] hover:border-emerald-500/70 hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald-500" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">WhatsApp</span>
                  <span className="block font-mono text-lg font-semibold">{CONTACT.phoneDisplay}</span>
                </span>
              </span>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
            </a>

            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-[border-color,transform] hover:border-pink-500/70 hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-xl bg-pink-500/15 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-pink-500" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">Instagram</span>
                  <span className="block font-mono text-lg font-semibold">{CONTACT.instagramHandle}</span>
                </span>
              </span>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-pink-500 transition-colors" />
            </a>
          </div>
        </div>

        {/* Colunas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-7 h-7 text-purple-500" />
              <span className="text-xl font-bold gradient-text">FASCODE</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Estúdio de software de Caxias do Sul. Sistemas sob medida, sites e SaaS.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {nav.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Produtos</h4>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {p.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contato</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`tel:${CONTACT.phoneE164}`} className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground">
                  <Phone className="w-4 h-4 text-purple-500" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground">
                  <Mail className="w-4 h-4 text-purple-500 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"
                >
                  <Instagram className="w-4 h-4 text-purple-500" />
                  {CONTACT.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"
                >
                  <Github className="w-4 h-4 text-purple-500" />
                  GitHub
                </a>
              </li>
              <li className="text-muted-foreground pt-1">{CONTACT.city}</li>
            </ul>
          </div>
        </div>

        {/* Wordmark gigante */}
        {/* SVG com textLength: sempre ocupa exatamente a largura, sem cortar em nenhuma tela */}
        <div className="relative select-none mb-2" aria-hidden="true">
          <svg viewBox="0 0 1000 190" className="w-full h-auto block">
            <defs>
              <linearGradient id="wordmark-fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.16" />
                <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="172"
              textLength="1000"
              lengthAdjust="spacing"
              fill="url(#wordmark-fade)"
              className="font-display font-extrabold"
              style={{ fontSize: 228, letterSpacing: "-0.02em" }}
            >
              FASCODE
            </text>
          </svg>
        </div>

        {/* Barra inferior */}
        {/* pb/pr extras: espaço para os botões flutuantes (WhatsApp e tema) não cobrirem nada */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 pb-24 sm:pb-0 sm:pr-20 border-t border-border text-xs text-muted-foreground">
          <p>© {year} FASCODE. Todos os direitos reservados.</p>
          <p className="font-mono">Feito sob medida, por FASCODE</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            Voltar ao topo
            <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-foreground/50 group-hover:-translate-y-1 transition-all">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
