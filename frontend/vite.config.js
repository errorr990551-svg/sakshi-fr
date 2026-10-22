import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: isSsrBuild ? {} : {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor';
          }
          if (id.includes('products.json')) {
            return 'data-products';
          }
          if (id.includes('market_cities.json')) {
            return 'data-cities';
          }
          if (id.includes('ep_build_spec_data.json') || id.includes('blogData.js')) {
            return 'data-content';
          }
          if (id.includes('CityData.js')) {
            return 'data-regional-cities';
          }
        }
      }
    }
  }
}))

