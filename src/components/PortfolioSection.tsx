import { ArrowUpRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const COREVITTA_URL = "https://corevitta.com.br/";
const BARBER_URL = "https://barberworkspace.fascode.com.br";

const corevitta = {
  features: [
    "Gestão de pacientes com ficha completa",
    "Histórico clínico com filtros avançados",
    "Agenda de consultas e exames",
    "Receituários, atestados e laudos prontos para imprimir",
    "Busca por nome, CPF ou prontuário",
    "Login com JWT e controle de acesso por perfil",
  ],
  stats: [
    { value: "+2.400", label: "pacientes gerenciados" },
    { value: "99,9%", label: "uptime" },
    { value: "4 min", label: "de setup" },
    { value: "14 dias", label: "grátis, sem cartão" },
  ],
  tech: ["Java", "Spring Boot", "React", "PostgreSQL", "JWT", "LGPD"],
};

const barber = {
  features: [
    "Link de agendamento próprio para cada barbearia",
    "Lembrete automático pelo WhatsApp",
    "Financeiro com entradas, saídas e comissão por barbeiro",
    "Estoque de produtos com venda no balcão",
    "Cartão fidelidade e combos recorrentes",
    "Galeria em carrossel, relatórios e permissões por usuário",
  ],
  stats: [
    { value: "Multi", label: "barbearias em um só sistema" },
    { value: "24/7", label: "agendamento online" },
    { value: "100%", label: "web, sem instalar nada" },
  ],
  tech: ["React", "TypeScript", "API REST", "WhatsApp", "Gráficos"],
};

const otherProjects = [
  { title: "MóveisViva", category: "E-commerce", result: "+35% de conversão", tech: "Next.js · Stripe" },
  { title: "AgendaPro", category: "WebApp B2B", result: "2.000+ usuários ativos", tech: "React · Node.js" },
  { title: "EletroAririu", category: "Site + Automação", result: "+120% em leads", tech: "React · Webhooks" },
  { title: "Eventos24", category: "Landing Page", result: "65% de conversão", tech: "Next.js · A/B test" },
  { title: "DashOps", category: "Dashboard", result: "1M+ eventos/dia", tech: "React · D3.js" },
];

const FeatureList = ({ items, tone }: { items: string[]; tone: string }) => (
  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
    {items.map((f) => (
      <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tone}`} />
        {f}
      </li>
    ))}
  </ul>
);

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Cabeçalho */}
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-20 animate-fade-in-up">
          <div>
            <span className="kicker">01 — Cases</span>
            <h2 className="text-[clamp(2.2rem,4.4vw,3.9rem)] font-extrabold leading-[1]">
              Produtos que <br />
              <span className="gradient-text whitespace-nowrap">já estão no ar.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md lg:justify-self-end">
            Não são só projetos de vitrine: são SaaS criados, mantidos e operados pela FASCODE, com clientes usando
            todos os dias.
          </p>
        </div>

        {/* ============ CASE 1 — COREVITTA ============ */}
        <article className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-36">
          <span
            aria-hidden="true"
            className="absolute -top-16 -left-4 font-display font-extrabold text-[9rem] leading-none text-outline opacity-40 select-none pointer-events-none hidden md:block"
          >
            01
          </span>

          {/* Visual */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <TiltCard>
              <a
                href={COREVITTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-2xl border-glow shadow-[0_40px_100px_-30px_rgba(16,185,129,0.45)]"
                style={{ ["--glow-a" as string]: "#10b981", ["--glow-b" as string]: "#34d399" }}
                aria-label="Abrir o site do CoreVitta"
              >
                <div className="rounded-2xl overflow-hidden bg-white">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-3 flex-1 max-w-xs flex items-center gap-1.5 rounded-md bg-white px-3 py-1 font-mono text-[10px] text-slate-500">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      corevitta.com.br
                    </span>
                  </div>
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
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity" />
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 text-white text-xs font-mono px-3 py-1.5 backdrop-blur group-hover:opacity-0 transition-opacity">
                      passe o mouse para rolar ↓
                    </span>
                  </div>
                </div>
              </a>
            </TiltCard>
          </div>

          {/* Texto */}
          <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <div className="flex items-center gap-3 mb-5">
              <img src="/projects/corevitta-logo.webp" alt="" width={44} height={44} className="w-11 h-11 rounded-xl bg-white p-1.5" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">SaaS · Saúde</p>
                <p className="text-xs text-muted-foreground">Produto próprio FASCODE</p>
              </div>
            </div>

            <h3 className="font-display text-4xl md:text-5xl font-extrabold mb-4">CoreVitta</h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              A plataforma de gestão clínica que centraliza pacientes, histórico, agenda e documentos em um só lugar.
              Do cadastro ao atestado impresso, sem papel e sem planilha.
            </p>

            <FeatureList items={corevitta.features} tone="text-emerald-400" />

            <div className="grid grid-cols-2 gap-3 my-8">
              {corevitta.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-3">
                  <p className="font-display text-2xl font-extrabold text-emerald-400 leading-none whitespace-nowrap">{s.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-1.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {corevitta.tech.map((t) => (
                <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-md border border-border bg-muted/40 text-foreground/70">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={COREVITTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3.5 transition-all hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.8)]"
              >
                Visitar o CoreVitta
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-sm text-muted-foreground">
                Planos a partir de <strong className="text-foreground">R$ 59,90/mês</strong>
              </span>
            </div>
          </div>
        </article>

        {/* ============ CASE 2 — BARBERWORKSPACE ============ */}
        <article className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-32">
          <span
            aria-hidden="true"
            className="absolute -top-16 right-0 font-display font-extrabold text-[9rem] leading-none text-outline opacity-40 select-none pointer-events-none hidden md:block"
          >
            02
          </span>

          {/* Texto */}
          <div className="lg:col-span-5 order-2 lg:order-1 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <div className="flex items-center gap-3 mb-5">
              {/* Poste de barbeiro, como no logo do BarberWorkspace */}
              <div className="w-11 h-11 rounded-xl bg-[#efe8dc] flex items-center justify-center">
                <span className="block w-3 h-7 rounded-full border-2 border-[#1a1715] bg-[repeating-linear-gradient(-45deg,#e0452e_0_4px,#efe8dc_4px_8px,#2f4fa8_8px_12px,#efe8dc_12px_16px)]" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#f0603f]">SaaS · Barbearias</p>
                <p className="text-xs text-muted-foreground">Produto próprio FASCODE</p>
              </div>
            </div>

            <h3 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
              Barber <span className="font-serif italic font-normal text-[#f0603f]">Workspace</span>
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              A cadeira cheia começa antes do corte. O cliente agenda sozinho pelo link da barbearia, recebe o lembrete no
              WhatsApp, e o dono acompanha agenda, caixa e comissão de cada barbeiro num lugar só.
            </p>

            <FeatureList items={barber.features} tone="text-[#f0603f]" />

            <div className="grid grid-cols-3 gap-3 my-8">
              {barber.stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-[#efe8dc] px-3 py-3 shadow-[4px_4px_0_#e0452e]">
                  <p className="font-display text-xl font-extrabold text-[#1a1715] leading-none">{s.value}</p>
                  <p className="text-[11px] text-[#1a1715]/65 mt-1.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {barber.tech.map((t) => (
                <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-md border border-border bg-muted/40 text-foreground/70">
                  {t}
                </span>
              ))}
            </div>

            <a
              href={BARBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#e0452e] hover:bg-[#f0603f] text-white font-semibold px-6 py-3.5 transition-all shadow-[0_4px_0_#1a1715] hover:shadow-[0_10px_40px_-10px_rgba(224,69,46,0.8)]"
            >
              Visitar o BarberWorkspace
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Visual */}
          <div className="lg:col-span-7 order-1 lg:order-2 animate-fade-in-up">
            <TiltCard>
              <a
                href={BARBER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border-glow shadow-[0_40px_100px_-30px_rgba(224,69,46,0.5)]"
                style={{ ["--glow-a" as string]: "#e0452e", ["--glow-b" as string]: "#efe8dc" }}
                aria-label="Abrir o site do BarberWorkspace"
              >
                <div className="rounded-2xl overflow-hidden bg-[#efe8dc]">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#e4dccd] border-b border-black/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-3 flex-1 max-w-xs flex items-center gap-1.5 rounded-md bg-[#f6f1e8] px-3 py-1 font-mono text-[10px] text-black/50">
                      <ShieldCheck className="w-3 h-3 text-[#e0452e]" />
                      barberworkspace.fascode.com.br
                    </span>
                  </div>
                  <img
                    src="/projects/barberworkspace.webp"
                    alt="Página inicial do BarberWorkspace: A cadeira cheia começa antes do corte"
                    width={1050}
                    height={691}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </a>
            </TiltCard>
          </div>
        </article>

        {/* ============ OUTROS PROJETOS ============ */}
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-between mb-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Outros projetos</p>
            <Sparkles className="w-4 h-4 text-purple-500" />
          </div>
          <ul className="border-t border-border">
            {otherProjects.map((p) => (
              <li
                key={p.title}
                className="group relative grid grid-cols-12 items-center gap-4 py-6 border-b border-border overflow-hidden"
              >
                <span className="absolute inset-0 -z-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-purple-500/15 via-blue-400/10 to-transparent" />
                <h4 className="relative col-span-12 md:col-span-5 font-display text-2xl md:text-3xl font-bold group-hover:translate-x-3 transition-transform duration-300">
                  {p.title}
                </h4>
                <span className="relative col-span-6 md:col-span-2 font-mono text-xs uppercase tracking-wider text-purple-500">
                  {p.category}
                </span>
                <span className="relative col-span-6 md:col-span-3 text-sm text-muted-foreground">{p.tech}</span>
                <span className="relative col-span-12 md:col-span-2 text-sm font-semibold text-blue-400 md:text-right">
                  {p.result}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.09),transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(224,69,46,0.09),transparent_65%)] pointer-events-none" />
    </section>
  );
};

export default PortfolioSection;
