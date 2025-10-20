# FASCODE - Design Tokens

Todos os tokens de design utilizados no projeto FASCODE.

## 🎨 Cores (HSL)

### Cores da Marca
```css
--purple-900: 278 65% 25%
--purple-700: 278 61% 41%  /* #6B2AA8 - Roxo principal */
--purple-500: 278 59% 53%  /* #8F46C9 */
--purple-300: 278 60% 70%

--blue-500: 199 87% 50%
--blue-400: 199 85% 59%    /* #3FB0F0 - Azul ciano */
--cyan-400: 189 90% 60%

--black-900: 240 10% 5%    /* #0B0B0D - Preto profundo */
--black-800: 240 8% 10%
--black-700: 240 6% 15%

--gray-600: 240 5% 40%
--gray-400: 240 5% 60%
--gray-200: 240 5% 85%
```

### Cores Semânticas (Dark Mode - Default)
```css
--background: 240 10% 5%
--foreground: 0 0% 98%
--card: 240 8% 10%
--card-foreground: 0 0% 98%
--primary: 278 59% 53%
--primary-foreground: 0 0% 100%
--secondary: 199 85% 59%
--secondary-foreground: 0 0% 100%
--muted: 240 6% 15%
--muted-foreground: 240 5% 60%
--accent: 278 61% 41%
--destructive: 0 62.8% 50%
--border: 240 6% 15%
```

### Cores Semânticas (Light Mode)
```css
--background: 0 0% 100%
--foreground: 240 10% 5%
--card: 0 0% 100%
--primary: 278 61% 41%
--secondary: 199 85% 59%
--muted: 240 5% 95%
--border: 240 5% 85%
```

## 🌈 Gradientes

```css
/* Gradiente Principal - Roxo para Azul */
--gradient-primary: linear-gradient(135deg, 
  hsl(278 61% 41%) 0%, 
  hsl(199 85% 59%) 100%
);

/* Gradiente Hero - Roxo Escuro → Roxo → Azul */
--gradient-hero: linear-gradient(135deg, 
  hsl(278 65% 25%) 0%, 
  hsl(278 61% 41%) 50%, 
  hsl(199 87% 50%) 100%
);

/* Gradiente de Card - Sutil */
--gradient-card: linear-gradient(145deg, 
  hsl(278 61% 41% / 0.1) 0%, 
  hsl(199 85% 59% / 0.05) 100%
);
```

## 💫 Sombras

```css
/* Brilho - Para destaques */
--shadow-glow: 0 0 40px hsl(278 59% 53% / 0.3);

/* Card - Elevação sutil */
--shadow-card: 0 10px 30px -10px hsl(278 61% 41% / 0.2);

/* Elevado - Hover states */
--shadow-elevated: 0 20px 50px -15px hsl(278 61% 41% / 0.4);
```

## 📏 Espaçamentos

```css
/* Container */
.container-custom {
  max-width: 1280px (7xl);
  padding: 1rem (mobile) | 1.5rem (sm) | 2rem (lg);
}

/* Seções */
.section-padding {
  padding-y: 4rem (mobile) | 6rem (md) | 8rem (lg);
}
```

## 🔤 Tipografia

### Família de Fontes
```css
font-family: 'Inter', system-ui, sans-serif;
```

### Tamanhos (Fluidos)
```css
/* Display - Headers principais */
font-size: clamp(3rem, 8vw, 6rem);

/* Hero - Títulos de seção */
font-size: clamp(2.5rem, 6vw, 4.5rem);

/* Section - Subtítulos */
font-size: clamp(2rem, 4vw, 3rem);
```

### Pesos
```css
font-weight: 300  /* Light */
font-weight: 400  /* Regular */
font-weight: 500  /* Medium */
font-weight: 600  /* Semibold */
font-weight: 700  /* Bold */
font-weight: 800  /* Extrabold */
font-weight: 900  /* Black */
```

## 🎭 Efeitos

### Glassmorphism
```css
.glass {
  background: hsl(var(--card) / 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid hsl(var(--border) / 0.5);
}

.glass-strong {
  background: hsl(var(--card) / 0.6);
  backdrop-filter: blur(24px);
  border: 1px solid hsl(var(--border) / 0.7);
}
```

### Padrão de Pontos
```css
.dot-pattern {
  background-image: radial-gradient(
    circle, 
    hsl(278 59% 53% / 0.15) 1px, 
    transparent 1px
  );
  background-size: 20px 20px;
}
```

### Texto com Gradiente
```css
.gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--gradient-primary);
}
```

## ⚡ Transições

```css
/* Suave - Padrão */
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Bounce - Efeitos especiais */
--transition-bounce: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

## 🎬 Animações

### Keyframes
```css
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scale-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
```

### Classes de Animação
```css
.animate-fade-in-up     /* 0.6s ease-out */
.animate-fade-in        /* 0.4s ease-out */
.animate-scale-in       /* 0.5s ease-out */
.animate-slide-in-right /* 0.6s ease-out */
.animate-float          /* 3s ease-in-out infinite */
.gradient-bg-animated   /* 8s ease infinite */
```

### Delays
```css
.delay-100  /* 0.1s */
.delay-200  /* 0.2s */
.delay-300  /* 0.3s */
.delay-400  /* 0.4s */
```

## 🔘 Botões

### Botão Hero (CTA Principal)
```css
.btn-hero {
  background: linear-gradient(to right, 
    hsl(278 59% 53%), 
    hsl(199 85% 59%)
  );
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1.125rem;
  box-shadow: var(--shadow-card);
  transition: all 0.3s;
}

.btn-hero:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-elevated);
}
```

## 📐 Border Radius

```css
--radius: 0.75rem  /* 12px - Padrão */
border-radius-lg: 0.75rem
border-radius-md: 0.625rem
border-radius-sm: 0.5rem
border-radius-xl: 1rem
border-radius-2xl: 1.5rem
border-radius-full: 9999px
```

## 🎯 Estados de Hover

```css
.hover-scale {
  transition: transform 0.3s ease-out;
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

## 🌙 Dark Mode

O site usa dark mode por padrão (`class="dark"` no HTML).
Toggle disponível no canto inferior direito.

Para acessar valores no CSS:
```css
/* Dark mode (padrão) */
.dark { --background: 240 10% 5%; }

/* Light mode */
:root { --background: 0 0% 100%; }
```

## 📱 Breakpoints

```css
sm: 640px   /* Tablet pequeno */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Desktop grande */
2xl: 1536px /* Desktop extra grande */
```

## ♿ Acessibilidade

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Contraste
- Todas as cores atendem WCAG AA
- Text-on-background ratio ≥ 4.5:1
- Large text ratio ≥ 3:1

---

**Nota**: Sempre use tokens do design system. Nunca use cores diretas como `bg-white`, `text-black`, etc.
