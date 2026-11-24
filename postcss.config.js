import { fileURLToPath } from 'node:url';

// Explicit config path so the build works no matter which folder it is started from.
export default {
  plugins: {
    tailwindcss: { config: fileURLToPath(new URL('./tailwind.config.js', import.meta.url)) },
    autoprefixer: {},
  },
};
