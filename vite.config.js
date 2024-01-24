import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import UnocssIcons from '@unocss/preset-icons'
import vue from '@vitejs/plugin-vue'
/* global process */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [
        UnocssIcons({
          prefix: 'i-',
          extraProperties: {
            display:'inline-block'
          }
        })
      ]
    })
  ],
    base: process.env.NODE_ENV === "production" ? "/vue2023-week4/" : "/",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
