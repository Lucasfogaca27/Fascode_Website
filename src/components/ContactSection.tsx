import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    user_phone: "",
    project_type: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em até 24h. Obrigado!",
      });

      setFormData({
        from_name: "",
        user_email: "",
        user_phone: "",
        project_type: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast({
        variant: "destructive",
        title: "Erro no envio",
        description: "Não conseguimos enviar sua mensagem. Tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contato@fascode.com.br",
      link: "mailto:contato@fascode.com.br",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (54) 99626-7250",
      link: "tel:+5554996267250",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Caxias do Sul, RS - Brasil",
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section font-bold mb-4">
            Vamos Começar Seu <span className="gradient-text">Projeto?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solicite uma proposta sem compromisso e receba em até 24h
          </p>
        </div>

        {/* REINSERIDA A ESTRUTURA DE GRID AQUI */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* COLUNA 1: INFORMAÇÕES DE CONTATO REINSERIDAS */}
          <div className="space-y-8 animate-fade-in-up delay-100">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-400 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="font-semibold text-foreground hover:text-purple-500 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h4 className="font-bold text-lg mb-4">Por que escolher a FASCODE?</h4>
              <ul className="space-y-3">
                {["Resposta em até 24h", "Orçamento transparente", "Equipe especializada", "Suporte contínuo", "Garantia de qualidade"].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-400" />
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUNA 2: FORMULÁRIO COM AS FUNCIONALIDADES DO EMAILJS */}
          <div className="animate-fade-in-up delay-200">
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome *</label>
                  <Input
                    required
                    name="from_name"
                    value={formData.from_name}
                    onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                    placeholder="Seu nome completo"
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input
                    required
                    name="user_email"
                    type="email"
                    value={formData.user_email}
                    onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                    placeholder="seu@email.com"
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Telefone</label>
                <Input
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={(e) => setFormData({ ...formData, user_phone: e.target.value })}
                  placeholder="(54) 99626-7250"
                  className="bg-background/50"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Tipo de Projeto *</label>
                  <input type="hidden" name="project_type" value={formData.project_type} />
                  <Select
                    required
                    value={formData.project_type}
                    onValueChange={(value) => setFormData({ ...formData, project_type: value })}
                  >
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="site">Site Institucional</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="webapp">WebApp / SaaS</SelectItem>
                      <SelectItem value="automation">Automação</SelectItem>
                      <SelectItem value="maintenance">Manutenção</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Orçamento Aproximado</label>
                  <input type="hidden" name="budget" value={formData.budget} />
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-10k">R$ 5K - 10K</SelectItem>
                      <SelectItem value="10k-20k">R$ 10K - 20K</SelectItem>
                      <SelectItem value="20k-50k">R$ 20K - 50K</SelectItem>
                      <SelectItem value="50k+">R$ 50K+</SelectItem>
                      <SelectItem value="discuss">Prefiro discutir</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Mensagem *</label>
                <Textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={6}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full btn-hero" size="lg">
                {isLoading ? "Enviando..." : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda com nossa política de privacidade
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default ContactSection;