import { defineConfig } from '@vben/vite-config'

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      server: {
        proxy: {
          '/api': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
            target: 'http://62.234.192.247:10009/api',
            ws: false,
          },
        },
      },
    },
  }
})
