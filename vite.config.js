import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      layouts: "/src/layouts",
      pages: "/src/pages",
      components: "/src/components",
      assets: "/src/assets",
      hooks: "/src/hooks",
      router: "/src/router",
      server: "/src/server",
      data: "/src/data"
    },
  },
})
