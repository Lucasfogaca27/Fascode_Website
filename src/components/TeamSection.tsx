import { Github, Globe, Linkedin, Mail } from "lucide-react";

type Member = {
  name: string;
  role: string;
  bio: string;
  founder?: boolean;
  // Todos opcionais: só aparece o ícone do que estiver preenchido.
  // A foto vem do GitHub; sem github, mostra as iniciais.
  social: { github?: string; linkedin?: string; email?: string; website?: string };
};

const team: Member[] = [
  {
    name: "Victor Seifert",
    role: "Frontend e inovação",
    bio: "Interfaces rápidas e fáceis de usar, do protótipo ao produto.",
    founder: true,
    social: {
      github: "https://github.com/Mathzss",
      linkedin: "https://www.linkedin.com/in/victor-matheus-seifert/",
      email: "seifertvictor71@gmail.com",
    },
  },
  {
    name: "Lucas Fogaça",
    role: "Apps e backend",
    bio: "Aplicativos e APIs que aguentam o crescimento do negócio.",
    founder: true,
    social: {
      github: "https://github.com/Lucasfogaca27",
      linkedin: "https://www.linkedin.com/in/lucas-foga%C3%A7a-de-aguiar/",
      email: "f.lucasaguiar@hotmail.com",
    },
  },
  {
    name: "Felipe Flor",
    role: "Comercial, design e fullstack",
    bio: "Entende o problema do cliente e leva até o produto, do layout ao código.",
    founder: true,
    social: {
      github: "https://github.com/FelipeMFlor",
      linkedin: "https://www.linkedin.com/in/felipe-fl%C3%B4r-a5b338267/",
      email: "fm6848445@gmail.com",
    },
  },
  {
    name: "Lucas Schwalm Silva",
    role: "DevOps e backend",
    bio: "Infraestrutura, deploy e backend para o sistema ficar no ar e rápido.",
    social: {
      github: "https://github.com/sh-lucas",
      email: "fascode@sh-lucas.dev",
      website: "https://sh-lucas.dev",
    },
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    aria-label={label}
    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-purple-500 transition-colors"
  >
    {children}
  </a>
);

const TeamSection = () => (
  <section id="team" className="section-padding">
    <div className="container-custom">
      <div className="mb-16 animate-fade-in-up">
        <span className="kicker">Equipe</span>
        <h2 className="section-title">Quem faz</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {team.map((m, i) => (
          <div
            key={m.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/25 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {m.social.github ? (
              <img
                src={`${m.social.github}.png?size=192`}
                alt={`Foto de ${m.name}`}
                width={80}
                height={80}
                loading="lazy"
                decoding="async"
                className="w-20 h-20 rounded-full border border-border bg-muted object-cover mb-5"
              />
            ) : (
              <span className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-xl font-bold text-muted-foreground mb-5">
                {initials(m.name)}
              </span>
            )}

            <h3 className="text-lg md:text-xl font-bold">{m.name}</h3>
            <p className="mt-1 text-sm font-medium text-purple-700 dark:text-purple-300">
              {m.role}
              {m.founder && <span className="text-muted-foreground font-normal"> · sócio</span>}
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>

            <div className="mt-auto pt-6 flex gap-2">
              {m.social.github && (
                <SocialLink href={m.social.github} label={`GitHub de ${m.name}`}>
                  <Github className="w-4 h-4" />
                </SocialLink>
              )}
              {m.social.linkedin && (
                <SocialLink href={m.social.linkedin} label={`LinkedIn de ${m.name}`}>
                  <Linkedin className="w-4 h-4" />
                </SocialLink>
              )}
              {m.social.email && (
                <SocialLink href={`mailto:${m.social.email}`} label={`Email de ${m.name}`}>
                  <Mail className="w-4 h-4" />
                </SocialLink>
              )}
              {m.social.website && (
                <SocialLink href={m.social.website} label={`Site de ${m.name}`}>
                  <Globe className="w-4 h-4" />
                </SocialLink>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
