import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['**/*.test.*', '**/*.spec.*']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WeatherIconic',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      output: [
        {
          format: 'es',
          entryFileNames: 'index.esm.js',
          dir: 'dist'
        },
        {
          format: 'cjs',
          entryFileNames: 'index.js',
          dir: 'dist'
        }
      ]
    },
    sourcemap: true,
    minify: 'esbuild'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})