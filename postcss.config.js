// postcss.config.js
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss({
      config: './tailwind.config.js'  // Explicit path to config
    }),
    autoprefixer
  ]
}