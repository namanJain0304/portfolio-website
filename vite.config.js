import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-router-dom'],
    include: ['@emailjs/browser']
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  }

})
