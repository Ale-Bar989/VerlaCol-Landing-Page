import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Verlapage',
        short_name: 'Verlapage',
        description: 'Proveedor de Internet de Alta Velocidad',
        theme_color: '#4A5CFF',
        background_color: '#000000',
        display: 'standalone',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 año
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 año
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\/api\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              networkTimeoutSeconds: 10,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 5 // 5 minutos
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ],
        // Página offline personalizada
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api/],
      }
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
