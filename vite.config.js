import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Untuk GitHub Pages, base path harus disesuaikan dengan nama repo.
// Ganti '/armuzna-laundry/' dengan nama repositori GitHub Anda.
// Jika deploy ke Vercel/Netlify, biarkan base: '/' (default).
export default defineConfig({
  plugins: [react()],
  base: '/armuzna-laundry/',
})
