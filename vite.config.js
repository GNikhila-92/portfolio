import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploys cleanly to GitHub Pages (project site) and Vercel.
// For GitHub Pages under a repo subpath, set base: '/your-repo-name/'
export default defineConfig({
  plugins: [react()],
  base: './',
})
