import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Check, ChevronDown, Mail, MapPin, Send, Instagram, MessageCircle } from "lucide-react";
import { CONTACT, whatsappLink } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const emptyForm = {
  from_name: "",
  user_email: "",
  user_phone: "",
  project_type: "",
  budget: "",
  message: "",
};

// O texto do botão é o que chega no email
const projectTypes = ["Software personalizado", "Site institucional", "E-commerce", "Automação", "Manutenção", "Outro"];
const budgets = ["Até R$ 5 mil", "R$ 5 mil a R$ 15 mil", "R$ 15 mil a R$ 30 mil", "Acima de R$ 30 mil", "Ainda não sei"];

const contactInfo = [
  { icon: MessageCircle, label: "WhatsApp", value: CONTACT.phoneDisplay, link: whatsappLink() },
  { icon: Instagram, label: "Instagram", value: CONTACT.instagramHandle, link: CONTACT.instagramUrl },
  { icon: Mail, label: "Email", value: CONTACT.email, link: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "Onde estamos", value: CONTACT.city, link: null },
];

const label = "block text-sm font-medium text-foreground/90 mb-2";
const field = "h-12 text-base bg-background focus-visible:ring-purple-500 focus-visible:ring-offset-0";

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const set = (key: keyof typeof emptyForm) => (value: string) => setFormData((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast({
        title: "Mensagem enviada!",
        description: "Respondemos em até 24h. Obrigado!",
      });
      setFormData(emptyForm);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast({
        variant: "destructive",
        title: "Erro no envio",
        description: "Não conseguimos enviar sua mensagem. Tente de novo ou chame no WhatsApp.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 animate-fade-in-up">
          <span className="kicker">Contato</span>
          <h2 className="section-title">
            Vamos começar seu <span className="gradient-text">projeto?</span>
          </h2>
          <p className="section-lead">Conte o que você precisa. Respondemos em até 24h com os próximos passos.</p>

          <ul className="mt-10 space-y-5">
            {contactInfo.map((info) => (
              <li key={info.label} className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full border border-border flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-purple-500" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">{info.label}</span>
                  {info.link ? (
                    <a
                      href={info.link}
                      {...(info.link.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="font-medium text-foreground underline-offset-4 decoration-purple-500 hover:underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="block font-medium">{info.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 md:p-10 space-y-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="from_name" className={label}>Nome</label>
              <Input id="from_name" required name="from_name" autoComplete="name" value={formData.from_name} onChange={(e) => set("from_name")(e.target.value)} placeholder="Seu nome" className={field} />
            </div>
            <div>
              <label htmlFor="user_email" className={label}>Email</label>
              <Input id="user_email" required name="user_email" type="email" autoComplete="email" value={formData.user_email} onChange={(e) => set("user_email")(e.target.value)} placeholder="voce@empresa.com" className={field} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="user_phone" className={label}>
                WhatsApp <span className="text-muted-foreground font-normal">(opcional)</span>
              </label>
              <Input id="user_phone" name="user_phone" type="tel" autoComplete="tel" value={formData.user_phone} onChange={(e) => set("user_phone")(e.target.value)} placeholder="(54) 90000-0000" className={field} />
            </div>
            <div>
              <label htmlFor="budget" className={label}>
                Orçamento <span className="text-muted-foreground font-normal">(opcional)</span>
              </label>
              <input type="hidden" name="budget" value={formData.budget} />
              {/* modal={false}: não trava a rolagem, então a barra lateral não some e nada pula ao abrir */}
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger
                  id="budget"
                  className="group flex w-full h-12 items-center justify-between rounded-md border border-input bg-background px-3 text-base transition-colors hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 data-[state=open]:border-purple-500"
                >
                  <span className={formData.budget ? "text-foreground" : "text-muted-foreground"}>{formData.budget || "Selecione"}</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={6}
                  className="w-[var(--radix-dropdown-menu-trigger-width)] rounded-xl border-border bg-popover p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
                >
                  {budgets.map((b) => (
                    <DropdownMenuItem
                      key={b}
                      onSelect={() => set("budget")(b)}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-2.5 text-[15px] cursor-pointer focus:bg-accent",
                        formData.budget === b && "text-foreground font-medium",
                      )}
                    >
                      {b}
                      {formData.budget === b && <Check className="w-4 h-4 text-purple-500" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <fieldset>
            <legend className={label}>O que você precisa?</legend>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((t) => (
                <label key={t} className="cursor-pointer">
                  {/* Radio nativo: entra no sendForm e o required funciona sem JS extra */}
                  <input
                    type="radio"
                    name="project_type"
                    value={t}
                    required
                    checked={formData.project_type === t}
                    onChange={() => set("project_type")(t)}
                    className="peer sr-only"
                  />
                  <span className="inline-flex items-center h-10 px-4 rounded-full border border-input text-sm text-foreground/85 transition-colors hover:border-foreground/40 peer-checked:border-purple-500 peer-checked:bg-purple-500/15 peer-checked:text-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-purple-500">
                    {t}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="message" className={label}>Conte sobre o projeto</label>
            <Textarea
              id="message"
              required
              name="message"
              value={formData.message}
              onChange={(e) => set("message")(e.target.value)}
              placeholder="O que sua empresa faz e qual problema quer resolver"
              rows={5}
              className="text-base bg-background resize-none focus-visible:ring-purple-500 focus-visible:ring-offset-0"
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full" size="lg">
            {isLoading ? "Enviando..." : (
              <>
                Enviar mensagem
                <Send />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
