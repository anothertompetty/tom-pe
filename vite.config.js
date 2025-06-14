import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure we're using the root path
  server: {
    host: true, // Listen on all addresses
    port: 5173  // Default Vite port
  },
  build: {
    assetsInlineLimit: 0, // Don't inline any assets
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(mp4|webm)$/.test(assetInfo.name)) {
            return `assets/videos/[name][extname]`
          }
          if (/\.(png|jpe?g|gif|svg|ico)$/.test(assetInfo.name)) {
            return `assets/images/[name][extname]`
          }
          return `assets/[name][extname]`
        }
      }
    }
  }
})
