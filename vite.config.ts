import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  // Path Aliases - Screaming Architecture
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/features': path.resolve(__dirname, './src/features'),
      '@/core': path.resolve(__dirname, './src/core'),
      '@/shared': path.resolve(__dirname, './src/shared'),
    },
  },
  build: {
    // Optimizaciones de producción
    minify: 'esbuild', // esbuild es más rápido y ya viene incluido
    target: 'es2015', // Compatibilidad con navegadores modernos
    // Code splitting optimizado
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendors grandes
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'lucide': ['lucide-react'],
        },
      },
    },
    // Tamaño de chunk warning
    chunkSizeWarningLimit: 1000,
    // Optimizar assets
    assetsInlineLimit: 4096, // Inline assets < 4kb
  },
  // Optimizaciones de desarrollo
  server: {
    hmr: {
      overlay: true,
    },
  },
  // Optimizar dependencias
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
