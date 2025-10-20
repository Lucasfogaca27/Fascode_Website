import { Code2, Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "Sobre", href: "#hero" },
      { label: "Como Trabalhamos", href: "#process" },
      { label: "Equipe", href: "#team" },
      { label: "Portfólio", href: "#portfolio" },
    ],
    services: [
      { label: "Sites Institucionais", href: "#services" },
      { label: "E-commerce", href: "#services" },
      { label: "WebApps", href: "#services" },
      { label: "Automação", href: "#services" },
    ],
    support: [
      { label: "FAQ", href: "#faq" },
      { label: "Contato", href: "#contact" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Mail, href: "mailto:contato@fascode.com.br", label: "Email" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border/50 relative overflow-hidden">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Code2 className="w-8 h-8 text-purple-500" />
                <div className="absolute inset-0 blur-xl bg-purple-500/30" />
              </div>
              <span className="text-2xl font-bold gradient-text">FASCODE</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Transformamos visões em experiências digitais poderosas. 
              Sites e softwares que vendem e escalam seu negócio.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(social.href)}
                  className="w-10 h-10 rounded-lg glass-strong hover:bg-purple-500 transition-all flex items-center justify-center group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} FASCODE. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection("#")}
                className="hover:text-foreground transition-colors"
              >
                Acessibilidade
              </button>
              <button
                onClick={() => scrollToSection("#")}
                className="hover:text-foreground transition-colors"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
};

export default Footer;
