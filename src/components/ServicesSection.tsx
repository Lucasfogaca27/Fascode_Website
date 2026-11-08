import { ArrowRight, Check, Globe, ShoppingCart, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const custom = {
  examples: [
    "Sistemas de gestão internos",
    "Portais e áreas do cliente",
    "Integração com o que você já usa",
    "SaaS para vender como produto",
  ],
};

const services = [
  { icon: Globe, title: "Sites institucionais", text: "Rápidos, bem posicionados no Google e fáceis de atualizar." },
  { icon: ShoppingCart, title: "E-commerce", text: "Loja com checkout simples, estoque e pagamentos integrados." },
  { icon: Zap, title: "Automação", text: "Tarefas repetitivas rodando sozinhas, sem planilha no meio." },
  { icon: Wrench, title: "Manutenção e suporte", text: "Atualizações, correções e melhorias depois da entrega." },
];

// Qualidade de operação: vale para qualquer projeto
const operation = ["Código revisado e versionado", "Backups e monitoramento", "Hospedagem e domínio configurados", "Suporte com quem desenvolveu"];

const card = "rounded-2xl border border-border bg-card transition-colors hover:border-foreground/25";

const ServicesSection = () => (
  <section id="services" className="section-padding bg-muted/30">
    <div className="container-custom">
      <div className="mb-16 animate-fade-in-up">
        <span className="kicker">Serviços</span>
        <h2 className="section-title">O que fazemos</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Destaque: software personalizado */}
        <div className={cn(card, "md:col-span-2 lg:row-span-2 p-8 md:p-10 flex flex-col border-purple-500/40 hover:border-purple-500/70 animate-fade-in-up")}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-purple-700 dark:text-purple-300 mb-4">Nosso foco</span>
          <h3 className="text-3xl md:text-4xl font-extrabold font-display mb-4">Software personalizado</h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
            Quando planilha e sistema pronto não dão conta, construímos o sistema do jeito que a sua operação funciona.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
            {custom.examples.map((e) => (
              <li key={e} className="flex items-center gap-2.5 text-foreground/90">
                <Check className="w-4 h-4 text-purple-500 shrink-0" />
                {e}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-4">
            <Button size="lg" className="group" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Conversar sobre meu sistema
              <ArrowRight className="group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <span className="text-sm text-muted-foreground">
              De <strong className="text-foreground">R$ 2 mil a R$ 30 mil</strong>, conforme o escopo
            </span>
          </div>
        </div>

        {services.map((s, i) => (
          <div key={s.title} className={`${card} p-6 animate-fade-in-up`} style={{ animationDelay: `${(i + 1) * 0.05}s` }}>
            <s.icon className="w-6 h-6 text-purple-500 mb-5" />
            <h3 className="text-lg md:text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-border animate-fade-in-up">
        <p className="text-sm font-semibold mb-4">Em todo projeto</p>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {operation.map((o) => (
            <li key={o} className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-purple-500 shrink-0" />
              {o}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ServicesSection;
