import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

const dev = process.argv.includes('dev')

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: '404.html'
    }),
    paths: {
      base: dev ? '' : '/json-pretty-print'
    }
  },
  preprocess: [
    preprocess({
      postcss: true
    })
  ]
}

export default config
