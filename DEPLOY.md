# 🚀 Guia de Deploy - GitHub Pages

## Configuração Inicial

### 1. No GitHub

1. Vá para **Settings** do seu repositório
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. Salve as alterações

### 2. Configurar o nome do repositório

Se o nome do seu repositório for diferente de `coca-cola`, edite o arquivo `vite.config.js`:

```javascript
const repoName = 'seu-nome-do-repositorio';
```

Ou defina a variável de ambiente `GITHUB_REPOSITORY` no workflow.

## Deploy Automático

O deploy acontece automaticamente quando você:

- Faz push na branch `main` ou `master`
- Executa manualmente o workflow em **Actions** > **Deploy to GitHub Pages** > **Run workflow**

## Deploy Manual

Se preferir fazer deploy manual:

```bash
npm install
npm run build
```

Depois, faça upload da pasta `dist` para a branch `gh-pages` ou use o GitHub CLI:

```bash
npm install -g gh-pages
npm run deploy
```

## Verificar Deploy

Após o deploy, acesse:
- `https://seu-usuario.github.io/coca-cola/`

O tempo de deploy pode levar alguns minutos. Você pode acompanhar o progresso em **Actions**.

## Troubleshooting

### Erro 404 no GitHub Pages

1. Verifique se o `base` no `vite.config.js` está correto
2. Certifique-se de que o workflow foi executado com sucesso
3. Verifique se a branch `gh-pages` foi criada (se usar deploy manual)

### Assets não carregam

1. Verifique se o caminho `base` está correto
2. Certifique-se de que as imagens estão em `public/assets/img/`
3. Verifique os caminhos nos componentes React (devem começar com `/`)

## Estrutura de Arquivos para Deploy

```
dist/
├── index.html
├── assets/
│   ├── css/
│   └── img/
└── ...
```

Todos os arquivos necessários são gerados automaticamente pelo `npm run build`.

