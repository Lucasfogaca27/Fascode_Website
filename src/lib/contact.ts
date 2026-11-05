// Fonte única dos contatos da FASCODE — altere aqui e o site inteiro atualiza.
export const CONTACT = {
  phoneDisplay: "(54) 99451-9749",
  phoneE164: "+5554994519749",
  whatsappNumber: "5554994519749",
  whatsappMessage: "Olá! Vim pelo site da FASCODE e gostaria de conversar sobre um projeto.",
  email: "contato@fascode.com.br",
  instagramHandle: "@fascode_enterprise",
  instagramUrl: "https://www.instagram.com/fascode_enterprise/",
  githubUrl: "https://github.com/FASCODE-ENTERPRISES",
  city: "Caxias do Sul, RS — Brasil",
};

export const whatsappLink = (message: string = CONTACT.whatsappMessage) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
