// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
  ,
  server: {
    proxy: {
      '/api': {
        target: 'https://3000-idx-landing-bizxo-cleangit-1745950747303.cluster-pgviq6mvsncnqxx6kr7pbz65v6.cloudworkstations.dev',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      }
    }
  }
})
