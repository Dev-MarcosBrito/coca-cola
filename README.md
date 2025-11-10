# 🥤 Site Vitrine Coca-Cola - React.js

Um site vitrine moderno, elegante e totalmente responsivo da **Coca-Cola**, desenvolvido com **React.js** e foco em **design premium, performance, acessibilidade e SEO**.

## 📋 Sobre o Projeto

Este projeto é uma landing page completa da Coca-Cola construída com React.js, transmitindo a identidade da marca de forma impactante. O site foi desenvolvido seguindo as melhores práticas de desenvolvimento web moderno.

## 🚀 Tecnologias Utilizadas

- **React 18.2.0**: Biblioteca JavaScript para construção de interfaces
- **Vite 5.0.8**: Build tool moderna e rápida
- **GSAP 3.12.2**: Animações avançadas
- **GSAP ScrollTrigger**: Animações baseadas em scroll
- **CSS3**: Design premium com variáveis CSS, Flexbox e Grid
- **Google Fonts**: Poppins e Montserrat

## 📦 Instalação

1. Clone ou baixe o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto em modo desenvolvimento:
   ```bash
   npm run dev
   ```

4. Para build de produção:
   ```bash
   npm run build
   ```

5. Para preview do build:
   ```bash
   npm run preview
   ```

## 🏗️ Estrutura do Projeto

```
/
├── public/
│   └── assets/
│       └── img/          # Imagens
├── src/
│   ├── components/       # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Historia.jsx
│   │   ├── Produtos.jsx
│   │   ├── Contato.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── Particles.jsx
│   │   ├── BackToTop.jsx
│   │   └── PageLoader.jsx
│   ├── hooks/            # Custom Hooks
│   ├── utils/            # Funções utilitárias
│   ├── assets/
│   │   └── css/
│   │       └── style.css # Estilos principais
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Características Principais

### Design Premium
- Paleta de cores oficial da Coca-Cola
- Gradientes animados
- Efeitos de partículas
- Animações 3D
- Micro-interações avançadas

### Funcionalidades
- ✅ Menu hambúrguer responsivo
- ✅ Scroll suave entre seções
- ✅ Carrossel de produtos interativo
- ✅ Formulário de contato com validação
- ✅ Scroll progress indicator
- ✅ Partículas animadas (desktop)
- ✅ Botão voltar ao topo
- ✅ Page loader animado
- ✅ Animações GSAP com ScrollTrigger

### Performance
- ✅ Code splitting automático
- ✅ Lazy loading de imagens
- ✅ Otimizações de bundle
- ✅ Build otimizado com Vite

### Acessibilidade
- ✅ Semântica HTML5
- ✅ Atributos ARIA
- ✅ Navegação por teclado
- ✅ Suporte a prefers-reduced-motion

## 📱 Responsividade

O site é totalmente responsivo, compatível com:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🌐 Deploy

### GitHub Pages (Configurado)

O projeto está configurado para deploy automático no GitHub Pages:

1. **Configuração no GitHub:**
   - Vá em Settings > Pages
   - Source: selecione "GitHub Actions"

2. **Deploy Automático:**
   - O deploy acontece automaticamente ao fazer push na branch `main` ou `master`
   - O workflow está em `.github/workflows/deploy.yml`

3. **Deploy Manual:**
   ```bash
   npm run deploy
   ```

### Outras Plataformas

- **Vercel**: `vercel --prod`
- **Netlify**: Conecte o repositório
- **Qualquer servidor estático**: Use `npm run build` e sirva a pasta `dist`

## 📝 Scripts Disponíveis

- `npm run dev`: Inicia servidor de desenvolvimento
- `npm run build`: Cria build de produção
- `npm run preview`: Preview do build de produção

## 🎯 Melhorias Futuras

- [ ] TypeScript
- [ ] Testes unitários (Jest + React Testing Library)
- [ ] PWA (Progressive Web App)
- [ ] Modo escuro/claro
- [ ] Internacionalização (i18n)
- [ ] Storybook para componentes

## 📝 Licença

Este projeto é um site vitrine educacional da Coca-Cola. Todos os direitos da marca Coca-Cola pertencem à The Coca-Cola Company.

---

**Coca-Cola** - Sabor Autêntico desde 1886 🥤
