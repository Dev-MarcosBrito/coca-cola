# ⚙️ Configuração Inicial do Projeto

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Git configurado

## 🚀 Passos para Configuração

### 1. Instalar Dependências

```bash
npm install
```

### 2. Executar em Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### 3. Build para Produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

### 4. Preview do Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions para deploy
├── public/
│   └── assets/
│       └── img/                # Imagens públicas
├── src/
│   ├── components/             # Componentes React
│   ├── hooks/                   # Custom hooks
│   ├── assets/
│   │   └── css/
│   │       └── style.css        # Estilos globais
│   ├── App.jsx                  # Componente principal
│   └── main.jsx                 # Entry point
├── index.html                   # HTML base
├── package.json                 # Dependências
├── vite.config.js               # Configuração Vite
└── README.md                    # Documentação
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run deploy` - Build e deploy manual (requer gh-pages)

## 🌐 Deploy no GitHub Pages

Veja o arquivo `DEPLOY.md` para instruções detalhadas de deploy.

### Resumo Rápido:

1. Configure GitHub Pages em Settings > Pages > Source: GitHub Actions
2. Faça push para a branch `main` ou `master`
3. O deploy acontece automaticamente!

## 🐛 Troubleshooting

### Erro ao instalar dependências

```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro no build

Verifique se todas as imagens estão em `public/assets/img/`

### Assets não carregam no GitHub Pages

Verifique se o `base` no `vite.config.js` está correto com o nome do repositório.

