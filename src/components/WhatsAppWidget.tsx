import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";

/** Botão flutuante que abre a conversa direto no WhatsApp. */
const WhatsAppWidget = () => (
  <a
    href={whatsappLink("Olá! Gostaria de solicitar um orçamento para meu projeto.")}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar no WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 text-white shadow-lg flex items-center justify-center transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(16,185,129,0.8)]"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppWidget;
