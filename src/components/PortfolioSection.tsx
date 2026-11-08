import { ArrowUpRight, CalendarCheck, Check, MessageCircle, ShieldCheck, Wallet } from "lucide-react";

const COREVITTA_URL = "https://corevitta.com.br/";
const BARBER_URL = "https://barberworkspace.fascode.com.br";

const corevitta = {
  features: [
    "Ficha do paciente e histórico clínico",
    "Agenda de consultas e exames",
    "Receitas, atestados e laudos prontos para imprimir",
    "Acesso controlado por perfil",
  ],
  stats: [
    { value: "14 dias", label: "grátis, sem cartão" },
    { value: "4 min", label: "para começar a usar" },
  ],
};

const barberHighlights = [
  { icon: CalendarCheck, title: "Link de agendamento próprio", text: "O cliente marca sozinho, a qualquer hora." },
  { icon: MessageCircle, title: "Lembrete pelo WhatsApp", text: "Menos faltas, sem ninguém precisar ligar." },
  { icon: Wallet, title: "Caixa e comissão", text: "Entradas, saídas e o quanto cada barbeiro fez." },
];

// href opcional: com link, a linha vira clicável
const otherProjects: { title: string; category: string; result?: string; href?: string }[] = [
  { title: "MóveisViva", category: "E-commerce", result: "+35% de conversão" },
  { title: "AgendaPro", category: "WebApp B2B", result: "2.000+ usuários ativos" },
  { title: "EletroAririu", category: "Site + automação", result: "+120% em leads" },
  { title: "Eventos24", category: "Landing page" },
  { title: "DashOps", category: "Dashboard", result: "1M+ eventos/dia" },
];

const BrowserBar = ({ url, className, pillClassName, iconClassName }: { url: string; className: string; pillClassName: string; iconClassName: string }) => (
  <div className={`flex items-center gap-2 px-4 py-2.5 border-b ${className}`}>
    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
    <span className={`ml-3 flex-1 max-w-xs flex items-center gap-1.5 rounded-md px-3 py-1 font-mono text-[10px] ${pillClassName}`}>
      <ShieldCheck className={`w-3 h-3 ${iconClassName}`} />
      {url}
    </span>
  </div>
);

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-20 animate-fade-in-up">
          <div>
            <span className="kicker">Cases</span>
            <h2 className="text-[clamp(2.2rem,4.4vw,3.9rem)] font-extrabold leading-[1]">
              Produtos que <br />
              <span className="gradient-text whitespace-nowrap">já estão no ar.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md lg:justify-self-end">
            SaaS criados e mantidos pela FASCODE, com clientes usando todos os dias.
          </p>
        </div>

        {/* ============ COREVITTA ============ */}
        <article className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-32">
          <div className="lg:col-span-7 animate-fade-in-up">
            <a
              href={COREVITTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden bg-white ring-1 ring-black/10 shadow-[0_40px_100px_-40px_rgba(16,185,129,0.45)]"
              aria-label="Abrir o site do CoreVitta"
            >
              <BrowserBar url="corevitta.com.br" className="bg-slate-100 border-slate-200" pillClassName="bg-white text-slate-500" iconClassName="text-emerald-500" />
              {/* O print rola dentro da moldura no hover */}
              <div className="relative h-[260px] sm:h-[360px] lg:h-[420px] overflow-hidden">
                <img
                  src="/projects/corevitta-full.webp"
                  width={1440}
                  height={3180}
                  decoding="async"
                  alt="Página do CoreVitta com funcionalidades, planos e depoimentos"
                  loading="lazy"
                  className="w-full h-auto transition-transform [transition-duration:6000ms] ease-in-out group-hover:-translate-y-[calc(100%-420px)]"
                />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 text-white text-xs font-mono px-3 py-1.5 group-hover:opacity-0 transition-opacity">
                  passe o mouse para rolar ↓
                </span>
              </div>
            </a>
          </div>

          <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-5">
              <img src="/projects/corevitta-logo.webp" alt="" width={44} height={44} className="w-11 h-11 rounded-xl bg-white p-1.5" />
              <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">SaaS · Saúde</p>
            </div>

            <h3 className="font-display text-4xl md:text-5xl font-extrabold mb-4">CoreVitta</h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Gestão clínica com pacientes, histórico, agenda e documentos no mesmo lugar.
            </p>

            <ul className="space-y-2.5">
              {corevitta.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-foreground/85">
                  <Check className="w-4 h-4 mt-1 shrink-0 text-emerald-500" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-3 my-8">
              {corevitta.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.06] px-4 py-3">
                  <p className="font-display text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 leading-none">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1.5">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={COREVITTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 text-black font-semibold h-12 px-6 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_rgba(16,185,129,0.9)]"
              >
                Visitar o CoreVitta
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <span className="text-sm text-muted-foreground">
                A partir de <strong className="text-foreground">R$ 59,90/mês</strong>
              </span>
            </div>
          </div>
        </article>

        {/* ============ BARBERWORKSPACE ============ */}
        <article className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-32">
          <div className="lg:col-span-5 order-2 lg:order-1 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-5">
              {/* Poste de barbeiro, como no logo do BarberWorkspace */}
              <div className="w-11 h-11 rounded-xl bg-[#efe8dc] flex items-center justify-center">
                <span className="block w-3 h-7 rounded-full border-2 border-[#1a1715] bg-[repeating-linear-gradient(-45deg,#e0452e_0_4px,#efe8dc_4px_8px,#2f4fa8_8px_12px,#efe8dc_12px_16px)]" />
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#e0452e] dark:text-[#f0603f]">SaaS · Barbearias</p>
            </div>

            <h3 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
              Barber <span className="font-serif italic font-normal text-[#e0452e] dark:text-[#f0603f]">Workspace</span>
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Agenda online, lembrete automático e o caixa da barbearia num sistema só.
            </p>

            <ul className="space-y-5 mb-6">
              {barberHighlights.map((h) => (
                <li key={h.title} className="flex gap-4">
                  <span className="w-10 h-10 shrink-0 rounded-lg bg-[#e0452e]/12 flex items-center justify-center">
                    <h.icon className="w-5 h-5 text-[#e0452e] dark:text-[#f0603f]" />
                  </span>
                  <span>
                    <span className="block font-semibold text-foreground">{h.title}</span>
                    <span className="block text-sm text-muted-foreground">{h.text}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mb-8">Também tem estoque, cartão fidelidade, combos e relatórios.</p>

            <a
              href={BARBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#e0452e] text-white font-semibold h-12 px-6 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_rgba(224,69,46,0.9)]"
            >
              Visitar o BarberWorkspace
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 animate-fade-in-up">
            <a
              href={BARBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden bg-[#efe8dc] ring-1 ring-black/10 shadow-[0_40px_100px_-40px_rgba(224,69,46,0.5)]"
              aria-label="Abrir o site do BarberWorkspace"
            >
              <BrowserBar url="barberworkspace.fascode.com.br" className="bg-[#e4dccd] border-black/10" pillClassName="bg-[#f6f1e8] text-black/50" iconClassName="text-[#e0452e]" />
              <img
                src="/projects/barberworkspace.webp"
                alt="Página inicial do BarberWorkspace"
                width={1050}
                height={691}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-700"
              />
            </a>
          </div>
        </article>

        {/* ============ OUTROS PROJETOS ============ */}
        <div className="animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Outros projetos</p>
          <ul className="border-t border-border">
            {otherProjects.map((p) => {
              const row = (
                <>
                  <span className="col-span-2 md:col-span-1 font-display text-xl md:text-2xl font-bold text-foreground">{p.title}</span>
                  <span className="text-sm text-muted-foreground">{p.category}</span>
                  <span className="text-sm text-muted-foreground md:text-right">{p.result}</span>
                </>
              );
              const cls = "grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] items-baseline gap-x-4 gap-y-1 py-5";
              return (
                <li key={p.title} className="border-b border-border">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cls} -mx-3 px-3 rounded-lg transition-colors hover:bg-accent`}
                    >
                      {row}
                    </a>
                  ) : (
                    <div className={cls}>{row}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
