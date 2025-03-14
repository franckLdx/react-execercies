import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getEntries } from './bundler/entries'

const projectDirName = dirname(fileURLToPath(import.meta.url))
const srcDir = resolve(projectDirName, 'src')


export default defineConfig({
  build: {
    lib: {
      name: 'raLib',
      formats: ['es'],
      entry: getEntries(srcDir)
    },
    rollupOptions: {
      external: ['react', '@radix-ui/.*'],
      output: {
        globals: {
          react: 'react'
        }
      }
    },
  },
  plugins: [react()],
})
