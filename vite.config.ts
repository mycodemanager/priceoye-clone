import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'esytech ',//想要把dist修改成什么名字在这边改
  }
})
