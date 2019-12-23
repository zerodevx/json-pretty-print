module.exports = {
  content: ['dist/index.html'],
  css: ['src/styles/styles.css'],
  extractors: [
    {
      extractor: class TailwindExtractor {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
        }
      },
      extensions: ["html"]
    }
  ],
  whitelist: ['text-xs', 'text-sm', 'text-base', 'text-lg'],
  whitelistPatternChildren: [/amp$/]
}
