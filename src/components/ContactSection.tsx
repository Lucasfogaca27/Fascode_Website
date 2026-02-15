import { useState, useRef } from "react"; // Adicionado useRef
import emailjs from "@emailjs/browser"; // Importar EmailJS
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
  const formRef = useRef<HTMLFormElement>(null); // Referência para o formulário
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",    // Ajustado para bater com seu template
    user_email: "",   // Ajustado para bater com seu template
    user_phone: "",   // Ajustado para bater com seu template
    project_type: "", // Ajustado para bater com seu template
    budget: "",
    message: "",
  });

 

// 2. Substitua sua função handleSubmit por esta:
const handleSubmit = async (e: React.FormEvent) => {
  //console.log("Iniciando envio...", import.meta.env.VITE_EMAILJS_SERVICE_ID);
  e.preventDefault();
  setIsLoading(true);

  try {
    // Envio real para o EmailJS usando as variáveis da Vercel
    const result = await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current!,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log("Resultado EmailJS:", result.text);

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em até 24h. Obrigado!",
    });

    // Limpa os campos após o envio
    setFormData({
      from_name: "",
      user_email: "",
      user_phone: "",
      project_type: "",
      budget: "",
      message: "",
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    toast({
      variant: "destructive",
      title: "Erro no envio",
      description: "Não conseguimos enviar sua mensagem. Tente novamente.",
    });
  } finally {
    setIsLoading(false);
  }
};

  // ... (mantenha o array contactInfo igual)

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de contato omitidas para brevidade, mantenha as suas */}

          <div className="animate-fade-in-up delay-200">
            {/* Adicionada a Ref aqui */}
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome *</label>
                  <Input
                    required
                    name="from_name" // DEVE ser igual ao template {{from_name}}
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
                    name="user_email" // DEVE ser igual ao template {{user_email}}
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
                  name="user_phone" // DEVE ser igual ao template {{user_phone}}
                  value={formData.user_phone}
                  onChange={(e) => setFormData({ ...formData, user_phone: e.target.value })}
                  placeholder="(48) 99999-9999"
                  className="bg-background/50"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Tipo de Projeto *</label>
                  {/* O Select do Radix UI precisa do input escondido para o sendForm funcionar */}
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
                  name="message" // DEVE ser igual ao template {{message}}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-nos sobre seu projeto, objetivos e prazos..."
                  rows={6}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full btn-hero"
                size="lg"
              >
                {isLoading ? "Enviando..." : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;