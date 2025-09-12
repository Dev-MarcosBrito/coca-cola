# 🧃 Fanta Landing Page

Este projeto é uma **landing page animada** criada com HTML, CSS e JavaScript, com foco em **animações responsivas baseadas em scroll** utilizando a biblioteca **GSAP + ScrollTrigger**.

O objetivo é oferecer uma experiência visual impactante e interativa para divulgar produtos como **Fanta**, **Coca-Cola** e **Pepsi**, com imagens e elementos que se movimentam conforme o usuário rola a página.

---
## 📁 Estrutura do Projeto

### 🔹 HTML
A estrutura é dividida em 3 seções principais:

- **`.nav-container`**: Menu fixo com links e imagem de menu.
- **`.hero`**: Área principal com o logo FANTA e imagens sobrepostas (laranjas, folhas, garrafa).
- **`.two`**: Bloco informativo com SVG decorativo à esquerda e texto à direita.
- **`.three`**: Cards de produto (Coca-Cola, Fanta, Pepsi), cada um com botão de compra.

---

### 🎨 CSS

- Fonte personalizada: **Product Sans** (via `@font-face`).
- Paleta vibrante com **gradientes laranja**, reforçando o tema "fanta/refresco".
- Layout 100% responsivo com uso de **Flexbox**.
- Elementos posicionados com `position: absolute` para animações controladas.
- Barra de rolagem oculta com `::-webkit-scrollbar`.

---

### ⚙️ JavaScript (GSAP + ScrollTrigger)

#### `timeline 1 (tl)`
Ativada ao entrar na seção `.two`. Realiza animações sincronizadas com o scroll, movendo elementos como:

- `#fanta`
- `#laranja-cortada`
- `#laranja`
- `#folha`, `#folha2`

Usa o label `'orange'` para agrupar e sincronizar as animações.

#### `timeline 2 (tl2)`
Ativada ao entrar na seção `.three`. Realiza transições suaves de entrada dos cards:

- Entra com rotação e translação lateral (`.lemon1`, `#cocacola`, `.lemon2`, `#pepsi`).
- Continua a animação dos elementos `#fanta` e `#laranja-cortada`, alterando posição e escala.

As animações são suaves e controladas com `scrub: true`, o que garante que a animação siga o scroll do usuário em tempo real.

---

## 📦 Tecnologias Utilizadas

- ✅ HTML5
- ✅ CSS3
- ✅ JavaScript (ES6)
- ✅ [GSAP v3](https://greensock.com/gsap/)
- ✅ [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- ✅ Fonte personalizada: *Product Sans*
- ✅ Imagens ilustrativas em `/Assets`

---

## 🧪 Como Executar o Projeto

dev-marcosbrito.github.io/aprendendo-front/

