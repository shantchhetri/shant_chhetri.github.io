import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: './'` makes the built site work from any folder or sub-path
// (GitHub Pages, institutional web space, or a plain file server).
export default defineConfig({
  plugins: [react()],
  base: './',
});
