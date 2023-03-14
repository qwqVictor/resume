import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from "vite-plugin-ssr/plugin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ssr({
    prerender: true
  })],
  define: {
    __RESUME_LAST_UPDATED_BUILD_TIME: new Date().toLocaleDateString("zh-CN")
  }
})
