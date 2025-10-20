# FASCODE - Guia de Deploy e Manutenção

## 🚀 Deploy Rápido

### Opção 1: Vercel (Recomendado)
1. Faça login em [vercel.com](https://vercel.com)
2. Clique em "Import Project"
3. Conecte seu repositório GitHub
4. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em "Deploy"

### Opção 2: Netlify
1. Faça login em [netlify.com](https://netlify.com)
2. Arraste a pasta `dist` após build ou conecte o GitHub
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy automático configurado

### Opção 3: Deploy Manual
```bash
# Build do projeto
npm run build

# A pasta dist/ contém os arquivos estáticos
# Faça upload para qualquer servidor web (Apache, Nginx, etc.)
```

## 🛠️ Configuração

### Variáveis de Ambiente (Opcional)
Crie um arquivo `.env` na raiz do projeto:

```env
# Email/Formulário Backend (opcional)
VITE_FORM_ENDPOINT=sua-url-aqui

# WhatsApp (edite em src/components/WhatsAppWidget.tsx)
# Linha 5: phoneNumber = "5548999999999"

# Google Analytics (adicione no index.html se necessário)
```

### Formulário de Contato - Integração Backend

O formulário atualmente simula envio. Para integração real:

#### Opção A: Netlify Forms
```tsx
// Em ContactSection.tsx, adicione ao form:
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  ...
</form>
```

#### Opção B: Formspree
```tsx
// Substitua a URL em handleSubmit:
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  body: JSON.stringify(formData),
  headers: { "Content-Type": "application/json" }
});
```

#### Opção C: Backend Próprio
```tsx
// Em ContactSection.tsx:
const response = await fetch("https://seu-backend.com/api/contact", {
  method: "POST",
  body: JSON.stringify(formData),
  headers: { "Content-Type": "application/json" }
});
```

## 📱 Personalizações

### 1. WhatsApp
Edite `src/components/WhatsAppWidget.tsx`:
```typescript
const phoneNumber = "5548999999999"; // Seu número com DDI
const message = "Sua mensagem padrão";
```

### 2. Cores da Marca
Edite `src/index.css` para customizar cores:
```css
:root {
  --purple-700: 278 61% 41%; /* Roxo principal */
  --blue-400: 199 85% 59%;   /* Azul ciano */
  /* Ajuste valores HSL conforme necessário */
}
```

### 3. Conteúdo
Edite os arquivos em `src/components/`:
- `HeroSection.tsx` - Hero principal
- `ProcessSection.tsx` - Como trabalhamos
- `ServicesSection.tsx` - Serviços
- `TeamSection.tsx` - Equipe
- `PortfolioSection.tsx` - Portfólio
- `TestimonialsSection.tsx` - Depoimentos
- `FAQSection.tsx` - Perguntas frequentes
- `ContactSection.tsx` - Formulário de contato

### 4. SEO
Edite `index.html`:
```html
<title>Seu Título</title>
<meta name="description" content="Sua descrição" />
<meta property="og:title" content="Título Open Graph" />
```

## 🎨 Design System

Todas as cores e estilos estão centralizados:
- `src/index.css` - Tokens de design (cores, gradientes, sombras)
- `tailwind.config.ts` - Configurações Tailwind

**Nunca use cores diretas como `bg-white` ou `text-black`!**
Use sempre os tokens do design system.

## 📊 Analytics

### Google Analytics
Adicione no `index.html` antes de `</head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Segurança

### Headers de Segurança (Netlify)
Crie `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Headers de Segurança (Vercel)
Crie `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

## 🚀 Performance

### Otimizações Implementadas
- ✅ Lazy loading de imagens
- ✅ Code splitting automático (Vite)
- ✅ CSS otimizado e minificado
- ✅ Fontes com preconnect
- ✅ Animações com prefers-reduced-motion
- ✅ Dark mode default (melhor performance)

### Lighthouse Score Esperado
- Performance: 90-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

## 🐛 Troubleshooting

### Build Error
```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Fontes não carregam
Verifique se as fontes do Google Fonts estão no `index.html`

### Dark mode não funciona
Verifique se `class="dark"` está no `<html>` do `index.html`

## 📞 Suporte

Para dúvidas sobre este template:
- GitHub: [Seu repositório]
- Email: contato@fascode.com.br

## 📝 Checklist de Deploy

- [ ] Atualizar número do WhatsApp
- [ ] Configurar endpoint do formulário de contato
- [ ] Adicionar Google Analytics (opcional)
- [ ] Customizar cores da marca (se necessário)
- [ ] Testar em dispositivos mobile
- [ ] Configurar domínio customizado
- [ ] Adicionar sitemap.xml
- [ ] Configurar SSL/HTTPS
- [ ] Testar performance com Lighthouse
- [ ] Configurar backups automáticos

## 🎯 Próximos Passos

1. **Adicionar CMS** - Integre com Sanity, Contentful ou Strapi
2. **Blog** - Adicione seção de blog/notícias
3. **Multi-idioma** - Implemente i18n com react-i18next
4. **Chat ao vivo** - Integre Crisp, Intercom ou Tawk.to
5. **A/B Testing** - Implemente testes com Google Optimize

---

**Desenvolvido com ❤️ pela FASCODE**
