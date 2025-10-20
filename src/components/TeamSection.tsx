import { Github, Linkedin, Mail } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Victor Seifert",
      role: "Founder / Product & Frontend",
      isFounder: true,
      bio: "Especialista em criar experiências de usuário excepcionais e arquiteturas frontend escaláveis.",
      avatar: "VS",
    },
    {
      name: "Lucas Fogaça",
      role: "Founder / UX & Design",
      isFounder: true,
      bio: "Designer visionário com foco em interfaces que convertem e encantam usuários.",
      avatar: "LF",
    },
    {
      name: "Felipe Flor",
      role: "Founder / Backend & DevOps",
      isFounder: true,
      bio: "Arquiteto de soluções backend robustas e infraestrutura de alta performance.",
      avatar: "FF",
    },
    {
      name: "Lucas Silva",
      role: "Senior Developer",
      isFounder: false,
      bio: "Desenvolvedor full-stack sênior com expertise em soluções complexas e integradas.",
      avatar: "LS",
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
                      <span className="text-xs font-semibold gradient-text">Founder</span>
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
                  <button className="w-10 h-10 rounded-lg glass-strong hover:bg-purple-500 transition-colors flex items-center justify-center group/social">
                    <Linkedin className="w-4 h-4 text-muted-foreground group-hover/social:text-white transition-colors" />
                  </button>
                  <button className="w-10 h-10 rounded-lg glass-strong hover:bg-purple-500 transition-colors flex items-center justify-center group/social">
                    <Github className="w-4 h-4 text-muted-foreground group-hover/social:text-white transition-colors" />
                  </button>
                  <button className="w-10 h-10 rounded-lg glass-strong hover:bg-purple-500 transition-colors flex items-center justify-center group/social">
                    <Mail className="w-4 h-4 text-muted-foreground group-hover/social:text-white transition-colors" />
                  </button>
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
              <p className="text-muted-foreground">Anos de Experiência Combinada</p>
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
