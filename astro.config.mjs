import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.sporttherapycymru.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
});
