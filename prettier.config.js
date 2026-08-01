/** @type {import("prettier").Config} */
const config = {
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 100,
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
  tailwindStylesheet: './src/routes/layout.css',
  semi: false,
  proseWrap: 'always',
  svelteSortOrder: 'options-scripts-markup-styles',
  svelteIndentScriptAndStyle: false
}

export default config
