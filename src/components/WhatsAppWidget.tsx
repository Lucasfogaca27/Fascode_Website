import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "5554996267250"; // Replace with actual WhatsApp number
  const message = "Olá! Gostaria de solicitar um orçamento para meu projeto.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 hover:scale-110 transition-all shadow-lg flex items-center justify-center group"
        aria-label="WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </button>

      {/* Widget Popup */}
      {isOpen && (
        <div className="fixed bottom-40 right-8 z-50 w-80 glass-strong rounded-2xl shadow-2xl animate-scale-in">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">FASCODE</h4>
                <p className="text-sm text-muted-foreground">Online agora</p>
              </div>
            </div>

            {/* Message */}
            <div className="bg-muted/50 rounded-lg p-4 mb-4">
              <p className="text-sm text-foreground/90 leading-relaxed">
                Olá! 👋
                <br />
                <br />
                Como podemos ajudar você hoje? Clique abaixo para conversar no
                WhatsApp.
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all hover:scale-105"
            >
              Iniciar Conversa
            </button>
          </div>
        </div>
      )}
    </>,
    document.body,
  );
};

export default WhatsAppWidget;
