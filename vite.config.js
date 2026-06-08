import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. On importe Tailwind

// https://vite.js.org/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. On l'ajoute aux plugins
  ],
})