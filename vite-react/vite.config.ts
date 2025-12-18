import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    host: false,
    port: 5173
  },
  test: {
    globals: true,          // позволяет использовать глобальные функции Vitest (test, expect)
    environment: 'jsdom',   // эмулирует браузерное окружение
    setupFiles: './vitest.setup.js' // (опционально) для глобальной настройки тестов
  }
})
