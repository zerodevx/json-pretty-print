[![GitHub package.json version](https://img.shields.io/github/package-json/v/zerodevx/json-pretty-print?style=flat-square&color=blue)]

# json-pretty-print

> Prettify JSON. Privately.

Beautify **malformed** or **AI-generated** JSON, explore it in an interactive **tree-like view**,
and **share** the view with a compressed URL link - all **without leaving your browser**.

Featuring:

- **Client-Side Processing**: All JSON decoding, parsing and formatting runs in your browser. No
  data is sent to a server.
- **Forgiving Parser**: Handles standard JSON as well as relaxed or messy JSON syntax, such as JSON
  outputs from an LLM.
- **Interactive Tree View**: Easily expand, collapse, inspect, and copy JSON elements.
- **URL Sharing**: Compresses JSON payloads into short URL hashes for easy sharing.

Here's a demo:
https://zerodevx.github.io/json-pretty-print/#/H4sIAAAAAAAAA-3RO2_bMBAA4L8icBYsyW97atGtKNDBo-GBlk7SIXyBPDlNA__3Hp2gCVoNWgVwk-7Fw33nV4GNOFa5GAJ4IzWI4-OzLCuRi_fAd9ub7KSReo6Blqg-qr7AL6mdgkVtNWdlTXjjHvID5MJbFfs16Ct4zjpvW4yhVyFvkqTnZE_kwrEoPs0p3pJFA60cFC2c6bj5ipbLf1gPOkMXBp01VlmfBaSM96Q8q60JUBPQ4DPZoMNQo-kyUEgLHlDbwZB_4SEnDkvHkzhKqOG3NXHPrwFl8TnnPLTgwdQQ4s7Uw-MeCrueOK2k6QbZxRCYeC5L2GItCXmRtxvc7_yC7Pjv_HGGG3iugya2wHNQQMTxSy4auOHjrTM_9uLi4AbCE1nHpTbEU8r65ykew9tnBuDIt95b3uqe_23R9hqP_N6B_9SfZCs9ivsldkT85Qj-chL-MuHPHX81gr-ahL9K-HPHX4_gryfhrxP-3PE3I_ibSfibhD93_O0I_nYS_jbhzx1_N4K_m4S_S_hzx9-P4O8n4e8T_tzxDyP4h0n4h4Q_d_yq_F-_KqfoV2XSn63-5Q9ETMAG5BMAAA.

Under the hood, it uses [zipurl](https://github.com/zerodevx/zipurl) for URL compression/hashing,
and [jaison](https://github.com/querycatai/jaison) for forgiving JSON parsing fallback.

## Direct URL Access

You can open the JSON viewer directly by appending compressed JSON data to the web URL.

To do this:

1. Compress your unformatted JSON string using `zipurl`, or gzip your unformatted JSON string and
   convert the compressed output into URL-safe base64.
2. Append `#/` followed by the generated base64 code to the site URL.

Example URL structure:

```
https://zerodevx.github.io/json-pretty-print/#/<compressed_code>
```

When opened, the application automatically reads the hash code, decompresses the payload, and
renders the JSON view immediately.

## Development

### Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/zerodevx/json-pretty-print.git
cd json-pretty-print
npm i
```

### Run the Dev Server

Start the development server (powered by [Vite](https://github.com/vitejs/vite)):

```bash
npm run dev
```

Open `http://localhost:5173` in your browser to view the test page.

### Run Tests

Run the test suite using [Playwright](https://github.com/microsoft/playwright):

```bash
npm test
```

Test specifications are located in `src/routes/page.svelte.e2e.js`. Please ensure all tests pass
before submitting a pull request.

## Contributing

### Bugs and Feature Requests

Please open a new issue or discussion on GitHub to request features or report bugs.

### Pull Requests

We follow the standard
[GitHub contribution workflow](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project).

## License

ISC
