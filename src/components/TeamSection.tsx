import { Github, Linkedin, Mail } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Victor Seifert",
      role: "Founder / Innovation Manager",
      isFounder: true,
      bio: "Inovação através do design. Especialista em criar experiências de usuário excepcionais e arquiteturas frontend que escalam com o amanhã.",
      avatar: "VS",
      social: {
        linkedin: "https://www.linkedin.com/in/victor-matheus-seifert/",
        github: "https://github.com/Mathzss",
        email: "seifertvictor71@gmail.com",
      },
    },
    {
      name: "Lucas Fogaça",
      role: "Founder / Technology Manager",
      isFounder: true,
      bio: "Tecnologia de alta performance. Arquiteto de soluções backend robustas e infraestruturas preparadas para o crescimento.",
      avatar: "LF",
      social: {
        linkedin: "https://www.linkedin.com/in/lucas-foga%C3%A7a-de-aguiar/",
        github: "https://github.com/Lucasfogaca27",
        email: "f.lucasaguiar@hotmail.com",
      },
    },
    {
      name: "Felipe Flor",
      role: "Founder / Commercial Manager",
      isFounder: true,
      bio: "Conexão e conversão. Designer visionário focado em interfaces que encantam o usuário e geram resultados reais para o negócio.",
      avatar: "FF",
      social: {
        linkedin: "https://www.linkedin.com/in/felipe-fl%C3%B4r-a5b338267/",
        github: "https://github.com/FelipeMFlor",
        email: "fm6848445@gmail.com",
      },
    },
    {
      name: "Lucas Silva",
      role: "Senior Developer",
      isFounder: false,
      bio: "Desenvolvedor full-stack sênior com expertise em soluções complexas e integradas.",
      avatar: "LS",
      social: {
        linkedin: "",
        github: "https://github.com/sh-lucas",
        email: "",
      },
    },
  ];

  return (
    <section id="team" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section font-bold mb-4">
            Nossa <span className="gradient-text">Equipe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profissionais apaixonados por tecnologia e resultados
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-card text-center">
                {/* Founder Badge */}
                {member.isFounder && (
                  <div className="absolute top-4 right-4">
                    <div className="glass-strong px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold gradient-text">
                        Founder
                      </span>
                    </div>
                  </div>
                )}

                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-400 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-blue-400 rounded-full flex items-center justify-center overflow-hidden">
                    <span className="text-4xl font-bold text-white">
                      {member.avatar}
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold mb-1 group-hover:gradient-text transition-all">
                  {member.name}
                </h3>
                <p className="text-sm text-purple-500 font-medium mb-3">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass-strong hover:bg-purple-500 transition-colors flex items-center justify-center"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-muted-foreground hover:text-white transition-colors" />
                    </a>
                  )}

                  {member.social?.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass-strong hover:bg-purple-500 transition-colors flex items-center justify-center"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="w-4 h-4 text-muted-foreground hover:text-white transition-colors" />
                    </a>
                  )}

                  {member.social?.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 rounded-lg glass-strong hover:bg-purple-500 transition-colors flex items-center justify-center"
                      aria-label={`Email para ${member.name}`}
                    >
                      <Mail className="w-4 h-4 text-muted-foreground hover:text-white transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Values */}
        <div className="mt-20 glass p-8 rounded-2xl animate-fade-in-up delay-400">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <p className="text-muted-foreground">
                Anos de Experiência Combinada
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <p className="text-muted-foreground">Dedicação aos Projetos</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-muted-foreground">Suporte Disponível</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default TeamSection;
