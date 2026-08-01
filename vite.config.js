import tailwindcss from '@tailwindcss/vite'
import adapter from '@sveltejs/adapter-static'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { readFileSync } from 'node:fs'

const { version: name } = JSON.parse(readFileSync(new URL('package.json', import.meta.url), 'utf8'))

export default defineConfig(({ command }) => ({
  plugins: [
    tailwindcss(),
    sveltekit({
      compilerOptions: {
        runes: true
      },
      adapter: adapter({
        fallback: '404.html'
      }),
      paths: {
        base: command === 'serve' ? '' : '/json-pretty-print'
      },
      version: { name }
    })
  ]
}))
