import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Para GitHub Pages, use o nome do repositório como base
// Se o repositório for 'coca-cola', a base será '/coca-cola/'
// Para domínio customizado, use '/'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'coca-cola';
const base = process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/';

export default defineConfig({
  plugins: [react()],
  base: base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});

