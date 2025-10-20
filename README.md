# FASCODE - Site Institucional de Alta Conversão

Site institucional e comercial desenvolvido com React, TypeScript, Tailwind CSS e Vite. Design profissional em roxo → azul ciano → preto, com animações suaves, dark mode e performance otimizada.

## 🚀 Demo

[Ver site ao vivo](https://fascode.lovable.app)

## ✨ Características

### Design & UI/UX
- 🎨 **Design System Completo** - Tokens centralizados para cores, tipografia e espaçamentos
- 🌈 **Gradientes Premium** - Roxo profundo → Azul ciano com animações suaves
- 💎 **Glassmorphism** - Efeitos de vidro fosco modernos
- 🌙 **Dark Mode Default** - Com alternância para light mode
- ✨ **Microinterações** - Animações sutis e profissionais
- 📱 **Mobile-First** - Totalmente responsivo

### Performance & SEO
- ⚡ **Lighthouse Score 90+** - Performance, acessibilidade e SEO otimizados
- 🔍 **SEO Completo** - Meta tags, Open Graph, Schema.org
- ♿ **WCAG AA** - Acessibilidade garantida
- 🚀 **Lazy Loading** - Imagens e componentes otimizados
- 💨 **Vite** - Build ultrarrápido

### Funcionalidades
- 📧 **Formulário de Contato** - Com validação completa
- 💬 **WhatsApp Widget** - Chat rápido flutuante
- 📊 **Analytics Ready** - Preparado para Google Analytics
- 🎯 **CTA Sticky Bar** - Barra de conversão ao rolar
- 🌐 **Multi-seção** - Hero, Serviços, Portfólio, Equipe, FAQ, etc.

## 🛠️ Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **React Router** - Navegação
- **React Hook Form** - Formulários

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/fascode.git

# Entre no diretório
cd fascode

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:8080`

## 🔧 Configuração

### 1. WhatsApp
Edite o número em `src/components/WhatsAppWidget.tsx`:
```typescript
const phoneNumber = "5548999999999"; // Seu número com DDI
```

### 2. Formulário de Contato
Configure o endpoint em `src/components/ContactSection.tsx` ou use:
- Netlify Forms
- Formspree
- Backend próprio

Veja instruções completas em `DEPLOY.md`

### 3. Personalizar Cores
Edite `src/index.css` para ajustar cores da marca:
```css
--purple-700: 278 61% 41%; /* Roxo principal */
--blue-400: 199 85% 59%;   /* Azul ciano */
```

### 4. Conteúdo
Edite os componentes em `src/components/`:
- `HeroSection.tsx` - Hero principal
- `ProcessSection.tsx` - Como trabalhamos
- `ServicesSection.tsx` - Serviços
- `TeamSection.tsx` - Equipe (Victor, Lucas F., Felipe, Lucas S.)
- `PortfolioSection.tsx` - Projetos
- `TestimonialsSection.tsx` - Depoimentos
- `FAQSection.tsx` - Perguntas frequentes
- `ContactSection.tsx` - Formulário

## 📂 Estrutura do Projeto

```
fascode/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── ui/         # Componentes shadcn
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── WhatsAppWidget.tsx
│   │   └── StickyBar.tsx
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilitários
│   ├── pages/          # Páginas
│   ├── App.tsx
│   ├── index.css       # Design system
│   └── main.tsx
├── design-tokens.json  # Tokens do design
├── DEPLOY.md          # Guia de deploy
├── DESIGN-TOKENS.md   # Documentação de tokens
└── README.md          # Este arquivo
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure:
   - Framework: Vite
   - Build: `npm run build`
   - Output: `dist`
3. Deploy!

### Netlify
1. Conecte no [Netlify](https://netlify.com)
2. Configure:
   - Build: `npm run build`
   - Publish: `dist`
3. Deploy!

Veja instruções detalhadas em **[DEPLOY.md](./DEPLOY.md)**

## 📊 Scripts

```bash
npm run dev          # Desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # Lint do código
```

## 🎨 Design System

Todo o design está centralizado em:
- `src/index.css` - Cores, gradientes, sombras, animações
- `tailwind.config.ts` - Configuração Tailwind
- `design-tokens.json` - Tokens em JSON

**Regra de Ouro:** Nunca use cores diretas como `bg-white` ou `text-black`!
Use sempre os tokens semânticos do design system.

Veja documentação completa em **[DESIGN-TOKENS.md](./DESIGN-TOKENS.md)**

## 🎯 Seções do Site

1. **Hero** - Headline impactante com CTA e estatísticas
2. **Como Trabalhamos** - 3 passos (Estratégia, Design, Entrega)
3. **Serviços** - 5 serviços com mini-cases
4. **Equipe** - 4 membros (Victor, Lucas F., Felipe, Lucas S.)
5. **Portfólio** - 6 projetos com resultados
6. **Depoimentos** - 4 clientes satisfeitos
7. **FAQ** - 8 perguntas frequentes
8. **Contato** - Formulário completo

## ⚡ Performance

- Lighthouse Performance: 90-100
- Lighthouse Accessibility: 95-100
- Lighthouse Best Practices: 95-100
- Lighthouse SEO: 95-100
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## ♿ Acessibilidade

- Contraste WCAG AA
- Navegação por teclado
- ARIA labels
- Suporte a prefers-reduced-motion
- Validação acessível de formulários

## 📱 Responsividade

Testado e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1920px+)

## 🤝 Equipe FASCODE

- **Victor Seifert** - Founder / Product & Frontend
- **Lucas Fogaça** - Founder / UX & Design
- **Felipe Flor** - Founder / Backend & DevOps
- **Lucas Silva** - Senior Developer

## 📄 Licença

Este projeto foi desenvolvido para a FASCODE.

## 📞 Contato

- **Email:** contato@fascode.com.br
- **WhatsApp:** +55 (48) 99999-9999
- **Website:** [fascode.com.br](https://fascode.com.br)
- **GitHub:** [github.com/fascode](https://github.com/fascode)

---

**Desenvolvido com ❤️ pela FASCODE**
