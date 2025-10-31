import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use a relative base so the built site works when deployed to GitHub Pages
  // (repo pages). This ensures asset paths in `dist/index.html` are relative
  // (e.g. `./assets/...`) instead of absolute (`/assets/...`).
  base: './'
})
