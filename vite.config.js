import { sveltekit } from '@sveltejs/kit/vite'
import fs from 'node:fs/promises'

const { version } = JSON.parse(await fs.readFile('package.json'))

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  define: {
    PUBLIC_VERSION: JSON.stringify(version)
  }
}

export default config
