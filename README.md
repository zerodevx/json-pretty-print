<div align="center">

# json-pretty-print

[![GitHub package.json version](https://img.shields.io/github/package-json/v/zerodevx/json-pretty-print?style=flat-square&color=blue)](https://github.com/zerodevx/json-pretty-print)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square)](https://opensource.org/licenses/ISC)
[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg?style=flat-square)](https://zerodevx.github.io/json-pretty-print/)

**Convert unformatted or messy JSON into an interactive, pretty-printed tree view — and share it
with a privacy-preserving URL link.**

[**🚀 Try Live Demo**](https://zerodevx.github.io/json-pretty-print/) •
[**Report Bug**](https://github.com/zerodevx/json-pretty-print/issues)

</div>

---

## ✨ Features

- **🔒 100% Client-Side & Private**: All formatting and URL compression happens entirely in your
  browser. Zero servers, zero analytics, zero tracking, and zero ads.
- **⚡ Forgiving Parsing (JSON5)**: Accepts relaxed JSON syntax, including single quotes, unquoted
  keys, trailing commas, and comments.
- **🔗 Shareable Compressed Links**: Uses [zipurl](https://github.com/zerodevx/zipurl) (gzip +
  base64url) to encode JSON payloads directly into URL hash slugs without storing any data on a
  backend server.
- **🌳 Interactive Tree View**: Built on
  [@zerodevx/svelte-json-view](https://github.com/zerodevx/svelte-json-view) with expand/collapse,
  copy to clipboard, and instant web sharing.
- **🎨 Configurable Controls**: Adjust font size and indentation spacing on the fly.

---

## 🛠️ Built With

- **[Svelte 5](https://svelte.dev/)** — Modern reactive UI framework utilizing Runes.
- **[SvelteKit](https://kit.svelte.dev/)** — Static site generation (`@sveltejs/adapter-static`).
- **[Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI 5](https://daisyui.com/)** — Modern,
  accessible component styling.
- **[@zerodevx/svelte-json-view](https://github.com/zerodevx/svelte-json-view)** — Fast, lightweight
  JSON tree viewer component.
- **[zipurl](https://github.com/zerodevx/zipurl)** — URL-safe Gzip string compression for serverless
  data sharing.
- **[JSON5](https://json5.org/)** — ES5-JSON syntax extension parser.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- `npm`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/zerodevx/json-pretty-print.git
cd json-pretty-print
npm install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📜 Available Scripts

| Command           | Description                                              |
| :---------------- | :------------------------------------------------------- |
| `npm run dev`     | Starts the development server with HMR.                  |
| `npm run build`   | Builds the static production app to the `build/` folder. |
| `npm run preview` | Previews the local production build.                     |
| `npm run check`   | Runs Svelte type-checking and component checks.          |
| `npm run lint`    | Runs ESLint and checks code formatting with Prettier.    |
| `npm run format`  | Automatically formats code using Prettier.               |
| `npm run test`    | Runs end-to-end integration tests using Playwright.      |

---

## 🧪 Testing

End-to-end tests are written with [Playwright](https://playwright.dev/):

```bash
npm run test:e2e
```

---

## 📄 License

Distributed under the **ISC License**. See
[`LICENSE`](file:///Users/zero/local_dev/projects/json-pretty-print/LICENSE) for more information.

Made with ❤️ by [Jason Lee (@zerodevx)](https://github.com/zerodevx).
