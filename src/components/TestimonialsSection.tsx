const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, MóveisViva",
    text: "A FASCODE refez nosso e-commerce e o checkout novo aumentou as vendas já no primeiro mês. Equipe séria e comprometida.",
  },
  {
    name: "Patricia Silva",
    role: "Fundadora, AgendaPro",
    text: "Precisávamos de um sistema de agendamentos complexo e recebemos algo robusto, que os nossos clientes gostam de usar.",
  },
  {
    name: "Roberto Araujo",
    role: "Diretor, EletroAririu",
    text: "O site com automação de agendamentos tirou boa parte do trabalho manual da equipe e trouxe mais contatos qualificados.",
  },
  {
    name: "Marina Costa",
    role: "Marketing, Eventos24",
    text: "A landing page ficou ótima e converte bem. Dá para ver que eles pensam em resultado, não só em visual.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding">
    <div className="container-custom">
      <div className="mb-16 animate-fade-in-up">
        <span className="kicker">Clientes</span>
        <h2 className="section-title">O que dizem de nós</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-8 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <blockquote className="text-lg leading-relaxed text-foreground/90 mb-8">“{t.text}”</blockquote>
            <figcaption className="mt-auto flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground">
                {initials(t.name)}
              </span>
              <span>
                <span className="block font-semibold">{t.name}</span>
                <span className="block text-sm text-muted-foreground">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
